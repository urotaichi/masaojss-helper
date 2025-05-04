# MasaoJSS Helper

Canvas正男のJavaScript API（MasaoJSS）のドキュメントをVisual Studio Codeに統合する拡張機能です。

## 機能

- **APIドキュメンテーション表示** - カーソルをMasaoJSSメソッド名に合わせると、そのメソッドの詳細な説明がホバー表示されます
- **コード補完** - JavaScriptやTypeScriptなどのファイル編集時に、MasaoJSS APIのメソッド名が自動補完候補として表示されます
- **詳細な説明と使用例** - 各メソッドについて、概要、パラメータ、戻り値、使用例などの詳細情報を提供します

## サポートしているファイル形式

- JavaScript (`.js`)
- TypeScript (`.ts`)
- JSX/TSX (`.jsx`, `.tsx`)
- HTML (`.html`)
- PHP (`.php`)

## 対応APIメソッド

この拡張機能は以下のようなMasaoJSSメソッドをサポートしています：

### ゲームシステム関連
- `getHighscore` - ハイスコア取得
- `getScore` - スコア取得 
- `getMode` - ゲームモード取得
- `addScore` - スコア加算
- `setScore` - スコア設定
- `getValue` / `getParamValue` - パラメータ取得
- `setValue` / `setParamValue` - パラメータ設定

### キャラクター制御
- `getMyX` / `getMyY` - 主人公座標取得（ブロック単位）
- `getMyXReal` / `getMyYReal` - 主人公座標取得（ピクセル単位）
- `setMyPosition` - 主人公位置設定
- `getMyVX` / `getMyVY` - 主人公速度取得
- `setMyVX` / `setMyVY` - 主人公速度設定

### 入力制御
- `pressLeft` / `pressRight` / `pressUp` / `pressDown` - 方向キー押下
- `pressTrigger1` - ジャンプキー押下
- `releaseAll` - 全キー解放
- `isPressZKey` / `isPressXKey` / `isPressSpaceKey` - キー押下状態取得

### アイテム・能力
- `equipFire` - ファイヤーボール装備
- `equipTail` - しっぽ装備
- `equipBarrier` - バリア装備
- `equipJet` / `setJetFuel` - ジェット装備
- `equipGrenade` / `setGrenadeCount` - グレネード装備

### 敵関連
- `setEnemy` - 敵配置
- `destroyEnemy` - 敵の撃破
- `getEnemyTotal` - 敵の総数取得

### サウンド関連
- `soundOn` / `soundOff` - 音声ON/OFF
- `playSound` - 効果音再生
- `playBGM` / `playBGMLoop` - BGM再生
- `stopBGM` - BGM停止

その他、マップ操作、画像処理、ボス関連など、多数のAPIメソッドに対応しています。

## インストール

1. VS Codeの拡張機能メニューを開く
2. "MasaoJSS"で検索
3. "MasaoJSS Helper"をインストール

## 使い方

1. JavaScriptやHTMLファイルを開きます
2. `ap.` と入力すると、利用可能なMasaoJSS APIメソッドが表示されます
3. メソッド名にカーソルを合わせると、詳細な説明がホバー表示されます

## リリースノート

詳細は [CHANGELOG.md](CHANGELOG.md) をご覧ください。

## ライセンス

MIT
