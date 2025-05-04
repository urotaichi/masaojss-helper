# MasaoJSS Helper

Canvas正男のJavaScript API（MasaoJSS）のドキュメントをVisual Studio Codeに統合する拡張機能です。

## 機能

- **APIドキュメンテーション表示** - カーソルをMasaoJSSメソッド名に合わせると、そのメソッドの詳細な説明がホバー表示されます
- **コード補完** - JavaScriptやTypeScriptなどのファイル編集時に、MasaoJSS APIのメソッド名が自動補完候補として表示されます
- **詳細な説明と使用例** - 各メソッドについて、概要、パラメータ、戻り値、使用例などの詳細情報を提供します
- **自動識別子検出** - コード内のuserJSCallback関数の引数名を自動検出し、様々な命名規則に対応します

## インストール方法

1. VS Codeの拡張機能ビュー（Ctrl+Shift+X）を開く
2. 検索バーに「MasaoJSS Helper」と入力
3. インストールボタンをクリック

または、以下の方法でもインストール可能です：

```
ext install urotaichi.masaojss-helper
```

## 使用方法

拡張機能をインストール後、JavaScript、TypeScript、HTML、PHPなどのサポート対象ファイルで作業する際に自動的に機能が有効になります。

Canvas正男のAPI呼び出しを入力すると、コード補完候補が表示されます：

```javascript
userJSCallback: function(g, mode, view_x, view_y, ap) {
  ap.  // ← ここでMasaoJSSメソッド候補が表示されます
  g.   // ← ここでGraphicsメソッド候補が表示されます
}
```

既存のAPIメソッド上にカーソルを合わせると、詳細なドキュメントがホバー表示されます。

## サポートしているファイル形式

- JavaScript (`.js`)
- TypeScript (`.ts`)
- JSX/TSX (`.jsx`, `.tsx`)
- HTML (`.html`)
- PHP (`.php`)

## 対応APIメソッド

この拡張機能は以下のようなMasaoJSSメソッドをサポートしています：

### ゲームシステム関連
- `getHighscore` / `getScore` - スコア関連情報取得
- `getMode` - ゲームモード取得
- `addScore` / `setScore` - スコア操作
- `getValue` / `getParamValue` - パラメータ取得
- `setValue` / `setParamValue` - パラメータ設定
- `restart` - ゲーム再起動
- `setTitleLock` / `startGame` - タイトル・ゲーム開始制御
- `getTimeLimit` / `setTimeLimit` - 制限時間取得・設定
- `getMyLeft` / `setMyLeft` - 残機取得・設定

### キャラクター制御
- `getMyX` / `getMyY` - 主人公座標取得（ブロック単位）
- `getMyXReal` / `getMyYReal` - 主人公座標取得（ピクセル単位）
- `setMyPosition` - 主人公位置設定
- `getMyVX` / `getMyVY` - 主人公速度取得
- `setMyVX` / `setMyVY` - 主人公速度設定
- `getMyDirection` / `setMyDirection` - 主人公向き取得・設定
- `setMyMiss` - 主人公ミス処理
- `setMyWait` - 主人公一時停止設定
- `setMyHP` / `getMyHP` - HP設定・取得

### 入力制御
- `pressLeft` / `pressRight` / `pressUp` / `pressDown` - 方向キー押下
- `pressTrigger1` - ジャンプキー押下
- `releaseAll` - 全キー解放
- `isPressZKey` / `isPressXKey` / `isPressSpaceKey` - キー押下状態取得

### マップ・オブジェクト関連
- `setMapchip` / `getMapchip` - 標準レイヤーのマップチップ設定・取得
- `setMapchip2` / `getMapchip2` - 背景レイヤーのマップチップ設定・取得
- `setEnemy` / `getEnemyTotal` - 敵配置・取得
- `newYuka` / `setYukaPosition` - 床オブジェクト生成・制御
- `getViewX` / `getViewY` - 画面座標取得（ブロック単位）
- `getViewXReal` / `getViewYReal` - 画面座標取得（ピクセル単位）

### 画像・描画関連
- `newImageOnLoad` - 画像読み込み
- `newChipImage` - チップ画像作成
- `setBackImage` / `setSecondImage` - 背景画像設定
- `setSystemDrawMode` - 描画モード設定
- `showGauge` / `hideGauge` - ゲージ表示・非表示
- `showMessage` - メッセージ表示
- `showImage` - 画像表示

## Graphicsクラスのメソッド

Canvas正男のGraphicsクラスメソッドも同様にサポートしています：

### 図形描画
- `drawLine` - 線分描画
- `drawRect` / `fillRect` - 矩形描画・塗りつぶし
- `drawOval` / `fillOval` - 楕円描画・塗りつぶし
- `drawArc` / `fillArc` - 円弧描画・塗りつぶし
- `drawPolygon` / `fillPolygon` - 多角形描画・塗りつぶし

### 画像描画
- `drawImage` - 画像描画
- `copyArea` - 画像領域コピー

### スタイル・テキスト
- `setColor` - 描画色設定
- `setFont` - フォント設定
- `setGlobalAlpha` - 不透明度設定
- `drawString` - 文字列描画

### 座標変換
- `translate` - 座標軸移動
- `rotate` - 座標軸回転
- `scale` - 座標軸拡大縮小
- `setClip` - クリッピング領域設定

## リリースノート

最新のリリース情報はCHANGELOG.mdを参照してください。

## フィードバックと貢献

バグの報告や新機能のリクエストは、GitHubリポジトリのIssuesページでお願いします。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細はLICENSE.mdをご覧ください。
