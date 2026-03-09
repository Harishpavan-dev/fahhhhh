const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

let lastPlayedAt = 0;
let outputChannel;

/** Lazily create output channel for logging */
function getOutputChannel() {
    if (!outputChannel) {
        outputChannel = vscode.window.createOutputChannel('Fahhhhhh');
    }
    return outputChannel;
}

/** Resolve audio file path */
function resolveAudioFile(extensionPath) {
    const bundled = path.join(extensionPath, 'media', 'fahhhhh.wav');
    return fs.existsSync(bundled) ? bundled : null;
}

/** Build OS-specific command to play sound */
function buildPlayCommand(filePath) {
    if (filePath) {
        const safe = filePath.replace(/"/g, '\\"');
        switch (process.platform) {
            case 'darwin': return `afplay "${safe}"`;
            case 'win32':  return `powershell -NoProfile -Command "(New-Object Media.SoundPlayer '${filePath.replace(/'/g, "''")}').PlaySync()"`;
            default:       return `paplay "${safe}" 2>/dev/null || aplay "${safe}" 2>/dev/null`;
        }
    }
    // fallback system sound
    switch (process.platform) {
        case 'darwin': return 'afplay /System/Library/Sounds/Glass.aiff';
        case 'win32':  return 'powershell -NoProfile -Command "[console]::beep(900,200)"';
        default:       return 'paplay /usr/share/sounds/freedesktop/stereo/dialog-error.oga 2>/dev/null || aplay /usr/share/sounds/alsa/Front_Center.wav 2>/dev/null';
    }
}

/** Play sound with cooldown */
function playSound(extensionPath) {
    const config = vscode.workspace.getConfiguration('fahhhhh');
    const cooldown = config.get('cooldownMs', 1000);
    const now = Date.now();
    if (now - lastPlayedAt < cooldown) return;
    lastPlayedAt = now;

    const cmd = buildPlayCommand(resolveAudioFile(extensionPath));
    exec(cmd, { windowsHide: true }, (err, _stdout, stderr) => {
        if (err) {
            getOutputChannel().appendLine(`[Fahhhhhh] Playback failed: ${err.message}`);
        } else if (stderr) {
            getOutputChannel().appendLine(`[Fahhhhhh] Playback stderr: ${stderr}`);
        }
    });
}

/** Extension activation */
function activate(context) {
    const { extensionPath } = context;

    // Terminal / task tracked errors
    const taskListener = vscode.window.onDidEndTerminalShellExecution(e => {
        if (typeof e.exitCode === 'number' && e.exitCode !== 0) {
            playSound(extensionPath); // only play sound, no popups
        }
    });
    context.subscriptions.push(taskListener);

    // Manual test command
    const testCommand = vscode.commands.registerCommand('fahhhhh.playSound', () => {
        playSound(extensionPath);
    });
    context.subscriptions.push(testCommand);
}

/** Extension deactivation */
function deactivate() {
    if (outputChannel) {
        outputChannel.dispose();
        outputChannel = undefined;
    }
}

module.exports = { activate, deactivate };