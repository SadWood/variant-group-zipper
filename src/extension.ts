import * as vscode from 'vscode';

export function unzipText(text: string): string {
	return text.replace(
		/(\w+):(\((.*?)\))/g,
		(_match, p1: string, _p2: string, p3: string) => {
			return p3
				.split(' ')
				.map(s => `${p1}:${s}`)
				.join(' ');
		}
	);
}

export function zipText(text: string): string {
	let prefixMap = new Map<string, string[]>();
	let words = text.split(' ');

	words.forEach(word => {
		let parts = word.split(':');
		let prefix = parts[0];
		let rest = parts.slice(1).join(':');
		if (prefixMap.has(prefix)) {
			prefixMap.get(prefix)?.push(rest);
		} else {
			prefixMap.set(prefix, [rest]);
		}
	});

	let result = [];
	for (let [prefix, values] of prefixMap.entries()) {
		result.push(`${prefix}:(${values.join(' ')})`);
	}

	return result.join(' ');
}

export function activate(context: vscode.ExtensionContext) {
	let unzipCommand = vscode.commands.registerCommand('vgz.unzip', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			const text = editor.document.getText(selection);
			const transformedText = unzipText(text);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, transformedText);
			});
		}
	});

	let zipCommand = vscode.commands.registerCommand('vgz.zip', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			const text = editor.document.getText(selection);
			const transformedText = zipText(text);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, transformedText);
			});
		}
	});

	context.subscriptions.push(unzipCommand, zipCommand);
}

export function deactivate() { }
