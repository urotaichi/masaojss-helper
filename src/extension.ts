import * as vscode from 'vscode';
import { methodDocumentations, graphicsMethodDocumentations, initAllDocumentations } from './docs';

// MasaoJSSコールバック関数の第5引数名を保持するSet
const apIdentifiers = new Set<string>(['ap', 'Applet1']);

// GraphicsオブジェクトのIDを保持するSet（第1引数）
const graphicsIdentifiers = new Set<string>(['g', 'Offscreen_g']);

// サポートする言語一覧
const supportedLanguages = ['javascript', 'typescript', 'javascriptreact', 'typescriptreact', 'html', 'php'];

export function activate(context: vscode.ExtensionContext) {
    console.log('MasaoJSS Helper is now active');

    // メソッドの説明文を初期化
    initAllDocumentations();
    
    // ファイル内容を解析してMasaoJSSコールバック関数の引数名をスキャン
    const documentAnalyzer = vscode.workspace.onDidOpenTextDocument(analyzeDocument);
    const documentChangeAnalyzer = vscode.workspace.onDidChangeTextDocument(e => analyzeDocument(e.document));
    
    // 現在開いているエディタのドキュメントを解析
    if (vscode.window.activeTextEditor) {
        analyzeDocument(vscode.window.activeTextEditor.document);
    }
    
    // 全サポート言語に対してホバー情報を提供する
    const hoverProvider = vscode.languages.registerHoverProvider(supportedLanguages, {
        provideHover(document, position, token) {
            // 現在の行のテキストを取得
            const line = document.lineAt(position.line).text;
            
            // 1. MasaoJSS（識別子.メソッド名）パターンを検出
            // 可能性のあるすべての識別子を検索対象に含める
            const apIds = Array.from(apIdentifiers);
            const apMethodRegex = new RegExp(`(?:${apIds.join('|')})\\.(\\w+)`, 'g');
            let match;
            let masaojssMatch = null;
            
            while ((match = apMethodRegex.exec(line)) !== null) {
                // マッチしたメソッド名のレンジを計算
                const matchStart = match.index + match[0].indexOf('.') + 1;
                const matchEnd = matchStart + match[1].length;
                
                // 現在のカーソル位置がメソッド名の範囲内にあるかチェック
                if (position.character >= matchStart && position.character <= matchEnd) {
                    masaojssMatch = match[1];
                    break;
                }
            }
            
            // 2. Graphics（g.メソッド名）パターンを検出
            const gIds = Array.from(graphicsIdentifiers);
            const gMethodRegex = new RegExp(`(?:${gIds.join('|')})\\.(\\w+)`, 'g');
            let graphicsMatch = null;
            
            while ((match = gMethodRegex.exec(line)) !== null) {
                // マッチしたメソッド名のレンジを計算
                const matchStart = match.index + match[0].indexOf('.') + 1;
                const matchEnd = matchStart + match[1].length;
                
                // 現在のカーソル位置がメソッド名の範囲内にあるかチェック
                if (position.character >= matchStart && position.character <= matchEnd) {
                    graphicsMatch = match[1];
                    break;
                }
            }
            
            // マッチしたケースに応じて説明文を返す
            if (masaojssMatch && methodDocumentations.has(masaojssMatch)) {
                const documentation = methodDocumentations.get(masaojssMatch);
                return new vscode.Hover(new vscode.MarkdownString(documentation));
            } else if (graphicsMatch && graphicsMethodDocumentations.has(graphicsMatch)) {
                const documentation = graphicsMethodDocumentations.get(graphicsMatch);
                return new vscode.Hover(new vscode.MarkdownString(documentation));
            }
            
            // コンテキストなしの場合は説明を表示しない
            return null;
        }
    });

    // 補完プロバイダーを追加
    const completionProvider = vscode.languages.registerCompletionItemProvider(supportedLanguages, {
        provideCompletionItems(document, position, token, context) {
            const completionItems: vscode.CompletionItem[] = [];
            
            // 前のテキストを取得して、識別子.の後に補完を提供するか判断
            const linePrefix = document.lineAt(position).text.substring(0, position.character);
            
            // 可能性のあるすべての識別子をチェック
            const apIds = Array.from(apIdentifiers);
            const apPattern = new RegExp(`(?:${apIds.join('|')})\\.\s*$`);
            const isAfterAp = apPattern.test(linePrefix);
            
            const gIds = Array.from(graphicsIdentifiers);
            const gPattern = new RegExp(`(?:${gIds.join('|')})\\.\s*$`);
            const isAfterG = gPattern.test(linePrefix);
            
            if (isAfterAp) {
                // ap.やApplet1.やその他の識別子の後ろなので、MasaoJSSメソッドの補完を提供
                methodDocumentations.forEach((documentation, method) => {
                    const item = new vscode.CompletionItem(method, vscode.CompletionItemKind.Method);
                    item.documentation = new vscode.MarkdownString(documentation);
                    item.detail = `MasaoJSS メソッド`;
                    completionItems.push(item);
                });
            } else if (isAfterG) {
                // g.やOffscreen_g.の後なので、Graphicsメソッドの補完を提供
                graphicsMethodDocumentations.forEach((documentation, method) => {
                    const item = new vscode.CompletionItem(method, vscode.CompletionItemKind.Method);
                    item.documentation = new vscode.MarkdownString(documentation);
                    item.detail = `Graphics メソッド`;
                    completionItems.push(item);
                });
            } else {
                // その他の場合は、単語候補として追加はするがメソッド情報は表示しない
                // 各メソッド名を単語候補として登録
                methodDocumentations.forEach((_, method) => {
                    const item = new vscode.CompletionItem(method, vscode.CompletionItemKind.Text);
                    item.detail = `MasaoJSS メソッド - 使用には '識別子.' を前置してください`;
                    completionItems.push(item);
                });
            }
            
            return completionItems;
        }
    }, '.'); // ドットの入力後に自動で補完を表示

    context.subscriptions.push(hoverProvider, completionProvider, documentAnalyzer, documentChangeAnalyzer);
}

/**
 * ドキュメントを解析して、MasaoJSSコールバック関数の引数名を探す
 */
function analyzeDocument(document: vscode.TextDocument) {
    if (supportedLanguages.some(lang => document.languageId === lang)) {
        const text = document.getText();
        
        // 1. userJSCallback: function(g, mode, view_x, view_y, ap) パターン
        // GraphicsオブジェクトとMasaoJSSオブジェクトの両方を検出
        const callbackPattern = /userJSCallback\s*:\s*(?:function\s*)?\(\s*(\w+)[^,]*,[^,]*,[^,]*,[^,]*,\s*(\w+)\s*\)/g;
        let match;
        
        while ((match = callbackPattern.exec(text)) !== null) {
            const gName = match[1];
            const apName = match[2];
            
            if (gName && !graphicsIdentifiers.has(gName)) {
                graphicsIdentifiers.add(gName);
                console.log(`MasaoJSS Helper: 新しい第1引数名を検出しました: ${gName}`);
            }
            
            if (apName && !apIdentifiers.has(apName)) {
                apIdentifiers.add(apName);
                console.log(`MasaoJSS Helper: 新しい第5引数名を検出しました: ${apName}`);
            }
        }
        
        // 2. function xxxx(g, mode, view_x, view_y, ap) { パターン（名前付き関数）
        const namedFunctionPattern = /function\s+\w+\s*\(\s*(\w+)[^,]*,[^,]*,[^,]*,[^,]*,\s*(\w+)\s*\)\s*{/g;
        
        while ((match = namedFunctionPattern.exec(text)) !== null) {
            const gName = match[1];
            const apName = match[2];
            
            if (gName && !graphicsIdentifiers.has(gName)) {
                graphicsIdentifiers.add(gName);
                console.log(`MasaoJSS Helper: 新しい第1引数名を検出しました: ${gName}`);
            }
            
            if (apName && !apIdentifiers.has(apName)) {
                apIdentifiers.add(apName);
                console.log(`MasaoJSS Helper: 新しい第5引数名を検出しました: ${apName}`);
            }
        }
        
        // 3. userJSCallback: (function() { return function(g, mode, view_x, view_y, ap) { パターン
        const closurePattern = /userJSCallback\s*:\s*\(\s*function\s*\(\s*\)\s*\{[^}]*return\s+function\s*\(\s*(\w+)[^,]*,[^,]*,[^,]*,[^,]*,\s*(\w+)\s*\)\s*\{/g;
        
        while ((match = closurePattern.exec(text)) !== null) {
            const gName = match[1];
            const apName = match[2];
            
            if (gName && !graphicsIdentifiers.has(gName)) {
                graphicsIdentifiers.add(gName);
                console.log(`MasaoJSS Helper: 新しい第1引数名を検出しました: ${gName}`);
            }
            
            if (apName && !apIdentifiers.has(apName)) {
                apIdentifiers.add(apName);
                console.log(`MasaoJSS Helper: 新しい第5引数名を検出しました: ${apName}`);
            }
        }
        
        // 4. アロー関数パターン
        const arrowPattern = /userJSCallback\s*:\s*\(\s*(\w+)[^,]*,[^,]*,[^,]*,[^,]*,\s*(\w+)\s*\)\s*=>/g;
        
        while ((match = arrowPattern.exec(text)) !== null) {
            const gName = match[1];
            const apName = match[2];
            
            if (gName && !graphicsIdentifiers.has(gName)) {
                graphicsIdentifiers.add(gName);
                console.log(`MasaoJSS Helper: 新しい第1引数名を検出しました: ${gName}`);
            }
            
            if (apName && !apIdentifiers.has(apName)) {
                apIdentifiers.add(apName);
                console.log(`MasaoJSS Helper: 新しい第5引数名を検出しました: ${apName}`);
            }
        }
    }
}

export function deactivate() {}