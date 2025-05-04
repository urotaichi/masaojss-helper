/**
 * Graphicsオブジェクトのドキュメント情報
 */

/**
 * グラフィックスオブジェクトのメソッドとそのドキュメントを格納するマップ
 */
export const graphicsMethodDocumentations = new Map<string, string>();

/**
 * Graphicsオブジェクトのメソッドドキュメントを初期化する
 */
export function initGraphicsMethodDocumentations() {
    // 描画メソッド
    graphicsMethodDocumentations.set('drawLine', `## 線分描画

点(x1, y1)と点(x2, y2)を結ぶ線分を描画します。

### パラメータ
- \`x1\`: 始点のX座標
- \`y1\`: 始点のY座標
- \`x2\`: 終点のX座標
- \`y2\`: 終点のY座標

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 左上から右下への線分を描画
g.drawLine(10, 10, 100, 100);
\`\`\``);

    graphicsMethodDocumentations.set('drawRect', `## 矩形描画

塗りつぶさない矩形を現在の色で描画します。

### パラメータ
- \`x\`: X座標
- \`y\`: Y座標
- \`width\`: 横幅
- \`height\`: 高さ

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 位置(20, 30)に幅100、高さ50の矩形を描画
g.drawRect(20, 30, 100, 50);
\`\`\``);

    graphicsMethodDocumentations.set('fillRect', `## 矩形塗りつぶし

塗りつぶした矩形を現在の色で描画します。

### パラメータ
- \`x\`: X座標
- \`y\`: Y座標
- \`width\`: 横幅
- \`height\`: 高さ

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 位置(20, 30)に幅100、高さ50の塗りつぶし矩形を描画
g.fillRect(20, 30, 100, 50);
\`\`\``);

    graphicsMethodDocumentations.set('drawOval', `## 楕円描画

指定した矩形に収まる、塗りつぶさない楕円を現在の色で描画します。

### パラメータ
- \`x\`: X座標
- \`y\`: Y座標
- \`width\`: 横幅
- \`height\`: 高さ

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 位置(20, 30)に幅100、高さ50の楕円を描画
g.drawOval(20, 30, 100, 50);
\`\`\``);

    graphicsMethodDocumentations.set('fillOval', `## 楕円塗りつぶし

指定した矩形に収まる、塗りつぶした楕円を現在の色で描画します。

### パラメータ
- \`x\`: X座標
- \`y\`: Y座標
- \`width\`: 横幅
- \`height\`: 高さ

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 位置(20, 30)に幅100、高さ50の塗りつぶし楕円を描画
g.fillOval(20, 30, 100, 50);
\`\`\``);

    graphicsMethodDocumentations.set('drawArc', `## 円弧描画

指定した矩形に収まる、塗りつぶさない円弧を現在の色で描画します。

### パラメータ
- \`x\`: X座標
- \`y\`: Y座標
- \`width\`: 横幅
- \`height\`: 高さ
- \`angle\`: 描画を開始するラジアン角
- \`theta\`: 始点から終点までのラジアン角

### 詳細
円弧の開始角度angleからtheta回転した角度までが描画対象です。単位はラジアンです。

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 位置(100, 100)に幅200、高さ200の半円を描画
g.drawArc(100, 100, 200, 200, 0, Math.PI);
\`\`\``);

    graphicsMethodDocumentations.set('fillArc', `## 円弧塗りつぶし

指定した矩形に収まる、塗りつぶした円弧を現在の色で描画します。

### パラメータ
- \`x\`: X座標
- \`y\`: Y座標
- \`width\`: 横幅
- \`height\`: 高さ
- \`angle\`: 描画を開始するラジアン角
- \`theta\`: 始点から終点までのラジアン角

### 詳細
円弧の開始角度angleからtheta回転した角度までが描画対象です。単位はラジアンです。

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 位置(100, 100)に幅200、高さ200の塗りつぶし半円を描画
g.fillArc(100, 100, 200, 200, 0, Math.PI);
\`\`\``);

    graphicsMethodDocumentations.set('drawPolygon', `## 多角形描画

X座標（xa）とY座標（ya）の配列から、頂点を結んで、塗りつぶさない多角形を現在の色で描画します。

### パラメータ
- \`xa\`: 頂点のX座標を格納した配列
- \`ya\`: 頂点のY座標を格納した配列
- \`num\`: 多角形の頂点数

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 三角形を描画
var xPoints = [50, 100, 20];
var yPoints = [20, 80, 80];
g.drawPolygon(xPoints, yPoints, 3);
\`\`\``);

    graphicsMethodDocumentations.set('fillPolygon', `## 多角形塗りつぶし

X座標（xa）とY座標（ya）の配列から、頂点を結んで、塗りつぶす多角形を現在の色で描画します。

### パラメータ
- \`xa\`: 頂点のX座標を格納した配列
- \`ya\`: 頂点のY座標を格納した配列
- \`num\`: 多角形の頂点数

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 塗りつぶし三角形を描画
var xPoints = [50, 100, 20];
var yPoints = [20, 80, 80];
g.fillPolygon(xPoints, yPoints, 3);
\`\`\``);

    // テキスト関連
    graphicsMethodDocumentations.set('drawString', `## 文字列描画

指定座標に文字列を描画します。

### パラメータ
- \`str\`: 描画する文字列
- \`x\`: X座標
- \`y\`: Y座標

### 詳細
座標は文字のベースライン位置になります。

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 位置(10, 30)に「こんにちは」と表示
g.drawString("こんにちは", 10, 30);
\`\`\``);

    graphicsMethodDocumentations.set('setFont', `## フォント設定

描画文字列のフォントをフォントオブジェクトで設定します。

### パラメータ
- \`font\`: フォントオブジェクト

### 詳細
フォントオブジェクトはap.newFont()メソッドで取得してください。

### 戻り値
- 設定に成功したかどうか

### 使用例
\`\`\`javascript
// フォントを作成して設定
var font = ap.newFont("sans-serif", 0, 16);
g.setFont(font);
\`\`\``);

    // スタイル関連
    graphicsMethodDocumentations.set('setGlobalAlpha', `## 広域アルファ値設定

広域アルファ値（透明度）を設定します。

### パラメータ
- \`a\`: 0から255までのアルファ値（0:完全透明、255:完全不透明）

### 戻り値
- 設定に成功したかどうか

### 使用例
\`\`\`javascript
// 50%の透明度を設定
g.setGlobalAlpha(128);
\`\`\``);

    graphicsMethodDocumentations.set('setColor', `## 描画色設定

描画色をColorオブジェクトで設定します。

### パラメータ
- \`color\`: 描画色（Colorオブジェクト）

### 戻り値
- 設定に成功したかどうか

### 使用例
\`\`\`javascript
// 赤色を設定（new Color(r, g, b, a)）
var color = new Color(255, 0, 0);
g.setColor(color);
\`\`\``);

    // 座標変換関連
    graphicsMethodDocumentations.set('translate', `## 座標軸移動

座標軸を移動します。

### パラメータ
- \`x\`: X方向の移動距離
- \`y\`: Y方向の移動距離

### 戻り値
- 成功したかどうか

### 使用例
\`\`\`javascript
// 座標系を(50, 50)移動
g.translate(50, 50);
\`\`\``);

    graphicsMethodDocumentations.set('rotate', `## 座標軸回転

座標軸を回転させます。

### パラメータ
- \`angle\`: 回転させるラジアン角
- \`x\`: 回転の中心となるX座標（省略可）
- \`y\`: 回転の中心となるY座標（省略可）

### 戻り値
- 成功したかどうか

### 使用例
\`\`\`javascript
// 座標系を45度回転
g.rotate(Math.PI / 4);
// 点(100, 100)を中心に30度回転
g.rotate(Math.PI / 6, 100, 100);
\`\`\``);

    graphicsMethodDocumentations.set('scale', `## 座標軸拡大縮小

座標軸を拡大縮小します。

### パラメータ
- \`x\`: X方向の拡大倍率
- \`y\`: Y方向の拡大倍率

### 戻り値
- 成功したかどうか

### 使用例
\`\`\`javascript
// X方向に2倍、Y方向に0.5倍に拡大縮小
g.scale(2.0, 0.5);
\`\`\``);

    // クリッピング関連
    graphicsMethodDocumentations.set('setClip', `## クリッピング領域設定

クリッピング領域を設定します。これにより、指定した領域のみに描画が行われるようになります。

### バリエーション1（楕円形）
#### パラメータ
- \`pattern\`: "ellipse"（楕円形）
- \`x\`: X座標
- \`y\`: Y座標
- \`w\`: 横幅
- \`h\`: 高さ

### バリエーション2（矩形）
#### パラメータ
- \`pattern\`: "rect"（矩形）
- \`x\`: X座標
- \`y\`: Y座標
- \`w\`: 横幅
- \`h\`: 高さ

### バリエーション3（多角形）
#### パラメータ
- \`pattern\`: "polygon"（多角形）
- \`xa\`: 頂点のX座標を格納した配列
- \`ya\`: 頂点のY座標を格納した配列
- \`pn\`: 多角形の頂点数

### 戻り値
- 設定に成功したかどうか

### 使用例
\`\`\`javascript
// 円形のクリッピング領域を設定
g.setClip("ellipse", 100, 100, 200, 200);

// 矩形のクリッピング領域を設定
g.setClip("rect", 50, 50, 100, 100);

// 三角形のクリッピング領域を設定
var xPoints = [50, 100, 20];
var yPoints = [20, 80, 80];
g.setClip("polygon", xPoints, yPoints, 3);
\`\`\``);

    // 画像関連
    graphicsMethodDocumentations.set('copyArea', `## 画像領域コピー

自身の画像の一部を別の座標にコピーします。

### パラメータ
- \`x\`: 切り出すX座標
- \`y\`: 切り出すY座標
- \`width\`: 切り出す横幅
- \`height\`: 切り出す高さ
- \`dx\`: X方向の移動距離
- \`dy\`: Y方向の移動距離

### 戻り値
- 成功したかどうか

### 使用例
\`\`\`javascript
// 位置(10, 10)の100x100の領域を(150, 50)にコピー
g.copyArea(10, 10, 100, 100, 140, 40);
\`\`\``);

    graphicsMethodDocumentations.set('drawImage', `## 画像描画

指定した画像を描画します。

### パラメータ
- \`image\`: 描画する画像オブジェクト
- \`x\`: X座標
- \`y\`: Y座標

### 戻り値
- 描画に成功したかどうか

### 使用例
\`\`\`javascript
// 位置(20, 30)に画像を描画
var img = ap.newImageOnLoad("example.png");
g.drawImage(img, 20, 30);
\`\`\``);

    // その他
    graphicsMethodDocumentations.set('dispose', `## 描画リセット

描画等で加えた変更を破棄して元の画像に戻します。

### 使用例
\`\`\`javascript
// 描画変更を破棄
g.dispose();
\`\`\``);
}