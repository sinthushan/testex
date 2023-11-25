
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('testex.helloWorld', () => {
		let range = new vscode.Range(new vscode.Position(1,0), new vscode.Position(2,5));
		//vscode.workspace.onDidChangeTextDocument(() => console.log(vscode.workspace.textDocuments[0].getText(range)));
		vscode.workspace.onDidChangeTextDocument(() => console.log(vscode.workspace.onDidChangeTextDocument((changeEvent ) => console.log(changeEvent))));
	});

	context.subscriptions.push(disposable);
}


export function deactivate() {}
