/**
 * MasaoJSSメソッドのドキュメント情報
 */

/**
 * MasaoJSSのメソッドとそのドキュメントを格納するマップ
 */
export const methodDocumentations = new Map<string, string>();

/**
 * MasaoJSSメソッドのドキュメントを初期化する
 */
export function initMethodDocumentations() {
    // 画像関連
    methodDocumentations.set('newImageOnLoad', `## 画像読み込み

filenameで指定した画像ファイルを読み込みます。そして、読み込んだ画像のオブジェクトを返します。

### パラメータ
- \`filename\`: 画像ファイル名

### 戻り値
- 画像オブジェクト（Image型）

### 使用例
\`\`\`javascript
// 画像ファイルを読み込む
var img = ap.newImageOnLoad("example.png");
// 読み込んだ画像をオフスクリーンに描画
g.drawImage(img, 10, 20);
\`\`\``);
    methodDocumentations.set('newChipImage', `## チップ画像作成

画像ファイルfilenameを読み込んでチップ画像に分割します。

### パラメータ
- \`filename\`: 画像ファイル名
- \`width\`: 1チップの幅（ピクセル）
- \`height\`: 1チップの高さ（ピクセル）
- \`nx\`: 横に並ぶチップ数
- \`ny\`: 縦に並ぶチップ数

### 戻り値
- チップ画像ID（数値）

### 使用例
\`\`\`javascript
// 16x16ピクセルのチップ画像を横10個、縦8個で分割
var chipID = ap.newChipImage("chips.png", 16, 16, 10, 8);

// 標準パターンのチップ画像を作成する
var char_chip = ap.newChipImage("pattern.gif", 32, 32, 10, 25);

// オリジナル敵のチップ画像を作成する
var oriene_chip = ap.newChipImage("boss_l.gif", 64, 64, 1, 1);
\`\`\``);
    methodDocumentations.set('makeReverseChipImage', `## チップ画像反転

chipIDのチップの、左右反転、上下反転、180度回転した画像を生成します。

### パラメータ
- \`chipID\`: チップ画像ID

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// チップ画像の反転バージョンを作成
ap.makeReverseChipImage(chipID);

// 標準パターンのチップ画像を作成し、反転バージョンも生成
var char_chip = ap.newChipImage("pattern.gif", 32, 32, 10, 25);
ap.makeReverseChipImage(char_chip);

// オリジナル敵のチップ画像を作成し、反転バージョンも生成
var oriene_chip = ap.newChipImage("boss_l.gif", 64, 64, 1, 1);
ap.makeReverseChipImage(oriene_chip);
\`\`\``);
    methodDocumentations.set('getChipImage', `## チップ画像取得

chipIDの部分チップ画像を取得します。

### パラメータ
- \`chipID\`: チップ画像ID
- \`index\`: チップインデックス（省略可、デフォルト: 0）
- \`n\`: 反転情報（省略可、デフォルト: 0）
  - \`0\`: 元画像と同じ
  - \`1\`: 左右反転
  - \`2\`: 上下反転
  - \`3\`: 180度回転

### 戻り値
- 部分チップ画像（Image型）

### 使用例
\`\`\`javascript
// チップ画像の2番目を取得
var chip = ap.getChipImage(chipID, 1, 0);
// 左右反転したチップ画像を取得
var reverseChip = ap.getChipImage(chipID, 1, 1);
\`\`\``);
    methodDocumentations.set('disposeChipImage', `## チップ画像削除

生成したチップ画像を削除します。使わなくなったチップ画像はメモリ解放のために削除することをお勧めします。

### パラメータ
- \`chipID\`: チップ画像ID

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    
    // MasaoJSS.tsから抽出した各メソッドの説明文
    // ゲームシステム関連
    methodDocumentations.set('getHighscore', `## ハイスコア取得

現在のハイスコアを返します。

### 戻り値
- ハイスコア（数値）`);
    methodDocumentations.set('getScore', `## スコア取得

現在のスコアを返します。

### 戻り値
- スコア（数値）`);
    methodDocumentations.set('getMode', `## ゲームモード取得

現在のゲームモードを表す数値を返します。コールバック関数の第2引数と同じ値です。

### 戻り値
- ゲームモード（数値）
  - \`1\`: ゲーム開始時
  - \`101\`～\`104\`: ゲーム中（ステージ番号に対応）
  - \`150\`: ボス戦中
  - \`200\`: ゲームオーバー時
  - \`300\`: ゲームクリア時
  - \`400\`: マップ画面`);
    
    // サウンド関連
    methodDocumentations.set('soundOn', `## 音声ON

音声をONにします。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('soundOff', `## 音声OFF

音声をOFFにします。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('onSound', `## 音声ON（別名）

\`soundOn()\`と同じです。音声をONにします。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('offSound', `## 音声OFF（別名）

\`soundOff()\`と同じです。音声をOFFにします。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('playSound', `## 効果音再生

効果音を再生します。

### パラメータ
- \`n\`: 効果音番号（1～27）

### 効果音番号一覧
| 番号 | 対応するパラメータ |
|---|---|
| 1 | filename_se_start |
| 2 | filename_se_gameover |
| 3 | filename_se_clear |
| 4 | filename_se_jump |
| 5 | filename_se_sjump |
| 6 | filename_se_kiki |
| 7 | filename_se_coin |
| 8 | filename_se_get |
| 9 | filename_se_fumu |
| 10 | filename_se_tobasu |
| 11 | filename_se_dengeki |
| 12 | filename_se_happa |
| 13 | filename_se_dosun |
| 14 | filename_se_item |
| 15 | filename_se_hinoko |
| 16 | filename_se_mizudeppo |
| 17 | filename_se_block |
| 18 | filename_se_grounder |
| 19 | filename_se_kaiole |
| 20 | filename_se_bomb |
| 21 | filename_se_mizu |
| 22 | filename_se_dokan |
| 23 | filename_se_senkuuza |
| 24 | filename_se_fireball |
| 25 | filename_se_miss |
| 26 | filename_se_chizugamen |
| 27 | filename_se_jet |

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.playSound(4); // ジャンプ音を再生
ap.playSound(7); // コイン取得音を再生
\`\`\``);
    methodDocumentations.set('setSound', `## 効果音設定

効果音を変更します。

### パラメータ
- \`n\`: 効果音番号（1～27）
- \`filename\`: 音声ファイル名

### 効果音番号一覧
| 番号 | 対応するパラメータ |
|---|---|
| 1 | filename_se_start |
| 2 | filename_se_gameover |
| 3 | filename_se_clear |
| 4 | filename_se_jump |
| 5 | filename_se_sjump |
| 6 | filename_se_kiki |
| 7 | filename_se_coin |
| 8 | filename_se_get |
| 9 | filename_se_fumu |
| 10 | filename_se_tobasu |
| 11 | filename_se_dengeki |
| 12 | filename_se_happa |
| 13 | filename_se_dosun |
| 14 | filename_se_item |
| 15 | filename_se_hinoko |
| 16 | filename_se_mizudeppo |
| 17 | filename_se_block |
| 18 | filename_se_grounder |
| 19 | filename_se_kaiole |
| 20 | filename_se_bomb |
| 21 | filename_se_mizu |
| 22 | filename_se_dokan |
| 23 | filename_se_senkuuza |
| 24 | filename_se_fireball |
| 25 | filename_se_miss |
| 26 | filename_se_chizugamen |
| 27 | filename_se_jet |

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setSound(1, "jump.mp3"); // ゲーム開始時の効果音を変更
\`\`\``);
    methodDocumentations.set('playBGM', `## BGM再生

指定した音声ファイルをBGMとして再生します。再生終了したら停止します。

### パラメータ
- \`filename\`: 音声ファイル名

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.playBGM("stage1.mp3");
\`\`\``);
    methodDocumentations.set('playBGMLoop', `## BGMループ再生

指定した音声ファイルをBGMとして再生します。再生終了したらループします。

### パラメータ
- \`filename\`: 音声ファイル名

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.playBGMLoop("stage1.mp3");
\`\`\``);
    methodDocumentations.set('stopBGM', `## BGM停止

BGMを停止します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// BGM再生を停止
ap.stopBGM();
\`\`\``);
    
    methodDocumentations.set('addScore', `## スコア加算

引数scoreの値だけスコアを増加します。

### パラメータ
- \`score\`: 加算するスコア（負の値は無効）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.addScore(100); // スコアを100点加算
\`\`\``);
    methodDocumentations.set('setScore', `## スコア設定

スコアを指定した値に設定します。

### パラメータ
- \`score\`: 設定するスコア

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// スコアを1000点に設定
ap.setScore(1000);
\`\`\``);
    methodDocumentations.set('restart', `## ゲーム再起動

現在のパラメータを保持した状態でゲームを再起動します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// ゲーム設定を変更して再起動
ap.setValue("j_tail_type", "2");
ap.restart();
\`\`\``);
    methodDocumentations.set('setTitleLock', `## タイトル操作ロック

ユーザーによるゲーム開始をできないようにします。

### 詳細
他の処理と組み合わせてゲーム開始の条件を制御するのに使用します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// ユーザーによるゲーム開始を禁止
ap.setTitleLock();

// 条件を満たしたら自動でゲーム開始
if (条件) {
  ap.startGame();
}
\`\`\``);
    methodDocumentations.set('startGame', `## ゲーム開始

タイトル画面にいる場合、ゲームを開始します。

### 詳細
タイトル画面でのみ有効です。ゲーム中は効果がありません。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// タイトル画面からゲームを自動開始
ap.startGame();
\`\`\``);
    methodDocumentations.set('setModeWait', `## モード待ち時間設定

指定モードmodeでの待ち時間をtフレームに設定します。

### パラメータ
- \`mode\`: 設定するモード
- \`t\`: 待ち時間（フレーム数）

### モード番号一覧
| 番号 | モードの種類 | デフォルトの待ち時間 |
|---|---|---|
| 0 | エンディング | 120 |
| 1 | ゲームオーバー | 45 |
| 2 | ステージ開始 | 35 |

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// ゲームオーバー画面の表示時間を2秒(120フレーム)に設定
ap.setModeWait(1, 120);

// ステージ開始時の待ち時間を短く(15フレーム)設定
ap.setModeWait(2, 15);
\`\`\``);
    methodDocumentations.set('setStageClear', `## ステージクリア

現在のステージをクリア状態にします。

### 詳細
ステージクリア演出が開始され、次のステージに進みます。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 条件を満たしたらステージクリア
if (条件達成) {
  ap.setStageClear();
}
\`\`\``);
    methodDocumentations.set('getVersion', `## バージョン取得

Canvas正男本体のバージョン情報を取得します。

### 戻り値
- バージョン情報（文字列）

### 詳細
得られる値はCanvasMasao.versionで得られる値と同じです。

### 使用例
\`\`\`javascript
var version = ap.getVersion();
console.log("Canvas正男バージョン: " + version);
\`\`\``);
    methodDocumentations.set('getCoinCount', `## コイン枚数取得

指定範囲内のコインの枚数を取得します。

### パラメータ
- \`x1\`: 左上X座標（省略可）
- \`y1\`: 左上Y座標（省略可）
- \`x2\`: 右下X座標（省略可）
- \`y2\`: 右下Y座標（省略可）

### 詳細
引数を省略した場合はマップ全体にあるコインの枚数を取得します。

### 戻り値
- コインの枚数（数値）

### 使用例
\`\`\`javascript
// マップ全体のコイン数を取得
var totalCoins = ap.getCoinCount();
// 特定範囲のコイン数を取得
var areaCoins = ap.getCoinCount(10, 5, 15, 10);
\`\`\``);
    
    // 時間関連
    methodDocumentations.set('getTimeLimit', `## 制限時間取得

現在の制限時間（画面に表示している値）を取得します。

### 戻り値
- 制限時間（数値）

### 使用例
\`\`\`javascript
// 現在の制限時間を取得
var time = ap.getTimeLimit();
console.log("残り時間: " + time);
\`\`\``);
    methodDocumentations.set('setTimeLimit', `## 制限時間設定

現在の制限時間（画面に表示される値）をtimeに設定します。

### パラメータ
- \`time\`: 設定する時間（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setTimeLimit(300); // 制限時間を300に設定
\`\`\``);
    
    // 残機関連
    methodDocumentations.set('setMyLeft', `## 残機設定

残り人数（ミスできる回数）をnumに設定します。

### パラメータ
- \`num\`: 設定する残り人数（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 残機を3に設定
ap.setMyLeft(3);
\`\`\``);
    methodDocumentations.set('getMyLeft', `## 残機取得

残り人数を取得します。

### 戻り値
- 残り人数（数値）

### 使用例
\`\`\`javascript
// 残機数を取得
var lives = ap.getMyLeft();
console.log("残り人数: " + lives);
\`\`\``);
    
    // スクロール関連
    methodDocumentations.set('getViewXReal', `## 画面X座標取得（ピクセル単位）

現在の画面左上端のX座標を、ピクセル単位で取得します。

### 詳細
コールバック関数の第３引数にセットされた値と同じ値が返ります。

### 戻り値
- X座標（数値）

### 使用例
\`\`\`javascript
// 画面左上のX座標（ピクセル単位）を取得
var viewX = ap.getViewXReal();
\`\`\``);
    methodDocumentations.set('getViewYReal', `## 画面Y座標取得（ピクセル単位）

現在の画面左上端のY座標を、ピクセル単位で取得します。

### 詳細
コールバック関数の第４引数にセットされた値と同じ値が返ります。

### 戻り値
- Y座標（数値）

### 使用例
\`\`\`javascript
// 画面左上のY座標（ピクセル単位）を取得
var viewY = ap.getViewYReal();
\`\`\``);
    methodDocumentations.set('getViewX', `## 画面X座標取得（ブロック単位）

現在の画面左上端のX座標を、ブロック単位で取得します。

### 戻り値
- X座標（数値）

### 使用例
\`\`\`javascript
// 画面左上のX座標（ブロック単位）を取得
var viewX = ap.getViewX();
\`\`\``);
    methodDocumentations.set('getViewY', `## 画面Y座標取得（ブロック単位）

現在の画面左上端のY座標を、ブロック単位で取得します。

### 戻り値
- Y座標（数値）

### 使用例
\`\`\`javascript
// 画面左上のY座標（ブロック単位）を取得
var viewY = ap.getViewY();
\`\`\``);
    methodDocumentations.set('setScrollLock', `## スクロールロック

画面X座標がxに来たらスクロールをロックします。

### パラメータ
- \`x\`: スクロールをロックするX座標（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 画面の左端が100ピクセルに達したらスクロールを止める
ap.setScrollLock(100);
\`\`\``);
    methodDocumentations.set('setScrollArea', `## スクロール可能範囲設定（ブロック単位）

スクロール可能な範囲をブロック単位で設定します。

### パラメータ
- \`x1\`: 左上X座標
- \`y1\`: 左上Y座標
- \`x2\`: 右下X座標
- \`y2\`: 右下Y座標

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 範囲(10,5)から(50,20)までにスクロール範囲を制限
ap.setScrollArea(10, 5, 50, 20);
\`\`\``);
    methodDocumentations.set('setScrollAreaReal', `## スクロール可能範囲設定（ピクセル単位）

スクロール可能な範囲をピクセル単位で設定します。

### パラメータ
- \`x1\`: 左上X座標
- \`y1\`: 左上Y座標
- \`x2\`: 右下X座標
- \`y2\`: 右下Y座標

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 範囲(160,80)から(800,320)までにスクロール範囲を制限（ピクセル単位）
ap.setScrollAreaReal(160, 80, 800, 320);
\`\`\``);
    
    // 主人公位置関連
    methodDocumentations.set('getMyX', `## 主人公X座標取得（ブロック単位）

主人公の現在のX座標をブロック単位で返します。

### 詳細
位置は、主人公の中心（左から15pxの位置）で判定されます。
マップの左端が0となります。
ゲーム中でない場合は-1が返ります。

### 戻り値
- X座標（数値）

### 使用例
\`\`\`javascript
// 主人公のX座標を取得（ブロック単位）
var playerX = ap.getMyX();
console.log("主人公X座標: " + playerX);
\`\`\``);
    methodDocumentations.set('getMyY', `## 主人公Y座標取得（ブロック単位）

主人公の現在のY座標をブロック単位で返します。

### 詳細
位置は、主人公の中心（上から15pxの位置）で判定されます。
マップの上端が0となります。
ゲーム中でない場合は-1が返ります。

### 戻り値
- Y座標（数値）

### 使用例
\`\`\`javascript
// 主人公のY座標を取得（ブロック単位）
var playerY = ap.getMyY();
console.log("主人公Y座標: " + playerY);
\`\`\``);
    methodDocumentations.set('getMyXReal', `## 主人公X座標取得（ピクセル単位）

主人公のX座標（ピクセル単位）を取得します。

### 詳細
マップの左端が32となります。

### 戻り値
- X座標（数値）

### 使用例
\`\`\`javascript
// 主人公のX座標を取得（ピクセル単位）
var playerX = ap.getMyXReal();
console.log("主人公X座標(px): " + playerX);
\`\`\``);
    methodDocumentations.set('getMyYReal', `## 主人公Y座標取得（ピクセル単位）

主人公のY座標（ピクセル単位）を取得します。

### 詳細
マップの上端が320となります。

### 戻り値
- Y座標（数値）

### 使用例
\`\`\`javascript
// 主人公のY座標を取得（ピクセル単位）
var playerY = ap.getMyYReal();
console.log("主人公Y座標(px): " + playerY);
\`\`\``);
    methodDocumentations.set('setMyPosition', `## 主人公位置設定（ブロック単位）

主人公の現在の座標をブロック単位で設定します。

### パラメータ
- \`x\`: X座標（ブロック単位）
- \`y\`: Y座標（ブロック単位）

### 詳細
マップの左上が(0, 0)となります。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setMyPosition(10, 5); // 主人公を(10, 5)の位置に移動
\`\`\``);
    methodDocumentations.set('setMyXReal', `## 主人公X座標設定（ピクセル単位）

主人公のX座標（ピクセル単位）を設定します。

### パラメータ
- \`x\`: X座標（ピクセル単位）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 主人公を水平方向に160px移動
ap.setMyXReal(160);
\`\`\``);
    methodDocumentations.set('setMyYReal', `## 主人公Y座標設定（ピクセル単位）

主人公のY座標（ピクセル単位）を設定します。

### パラメータ
- \`y\`: Y座標（ピクセル単位）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 主人公を垂直方向に240px移動
ap.setMyYReal(240);
\`\`\``);
    methodDocumentations.set('getMyVX', `## 主人公X速度取得

主人公のX方向の速度を取得します。

### 戻り値
- X方向の速度（数値）

### 使用例
\`\`\`javascript
// 主人公の水平方向の速度を取得
var vx = ap.getMyVX();
console.log("X方向速度: " + vx);
\`\`\``);
    methodDocumentations.set('getMyVY', `## 主人公Y速度取得

主人公のY方向の速度を取得します。

### 戻り値
- Y方向の速度（数値）

### 使用例
\`\`\`javascript
// 主人公の垂直方向の速度を取得
var vy = ap.getMyVY();
console.log("Y方向速度: " + vy);
\`\`\``);
    methodDocumentations.set('setMyVX', `## 主人公X速度設定

主人公のX方向の速度を設定します。

### パラメータ
- \`vx\`: X方向の速度（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setMyVX(10); // 右向きに加速
\`\`\``);
    methodDocumentations.set('setMyVY', `## 主人公Y速度設定

主人公のY方向の速度を設定します。

### パラメータ
- \`vy\`: Y方向の速度（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setMyVY(-20); // ジャンプさせる
\`\`\``);
    methodDocumentations.set('setMySpeed', `## 主人公移動速度設定

主人公の４方向・８方向移動の速さを設定します。

### パラメータ
- \`speed\`: 速度（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 主人公の移動速度を5に設定
ap.setMySpeed(5);
\`\`\``);
    
    // 表示関連
    methodDocumentations.set('showMessage', `## メッセージ表示

一言メッセージを表示します。

### パラメータ
- \`time\`: 表示時間（フレーム数）
- \`name\`: 名前
- \`line1\`: メッセージ1行目
- \`line2\`: メッセージ2行目
- \`line3\`: メッセージ3行目

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.showMessage(30, "主人公", "こんにちは！", "これはテストです", "0");
\`\`\``);
    methodDocumentations.set('showImage', `## 画像表示

指定した画像ファイルを一定時間表示します。

### パラメータ
- \`time\`: 表示時間（フレーム数）
- \`x\`: X座標
- \`y\`: Y座標
- \`filename\`: 表示する画像ファイル名

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 座標(200,100)に画像を3秒間(180フレーム)表示
ap.showImage(180, 200, 100, "notice.png");
\`\`\``);
    methodDocumentations.set('setPenColor', `## 描画色設定

showRect、showOvalメソッドで表示する図形の色を設定します。

### パラメータ
- \`r\`: 赤（0～255）
- \`g\`: 緑（0～255）
- \`b\`: 青（0～255）
- \`a\`: 不透明度（0～255、省略可）
  - 省略した場合は255（完全不透明）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 半透明の赤色を設定
ap.setPenColor(255, 0, 0, 128);
\`\`\``);
    
    // キー入力関連
    methodDocumentations.set('pressLeft', `## 左キー押下

左キーを押します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 左キーを押す
ap.pressLeft();
\`\`\``);
    methodDocumentations.set('pressRight', `## 右キー押下

右キーを押します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 右キーを押す
ap.pressRight();
\`\`\``);
    methodDocumentations.set('pressUp', `## 上キー押下

上キーを押します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 上キーを押す
ap.pressUp();
\`\`\``);
    methodDocumentations.set('pressDown', `## 下キー押下

下キーを押します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 下キーを押す
ap.pressDown();
\`\`\``);
    methodDocumentations.set('pressTrigger1', `## ジャンプキー押下

ジャンプキーを押します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// ジャンプキーを押す
ap.pressTrigger1();
\`\`\``);
    methodDocumentations.set('releaseAll', `## 全キー解放

すべてのキーを離します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// すべてのキーを離す
ap.releaseAll();
\`\`\``);
    methodDocumentations.set('isPressLeftKey', `## 左キー押下状態取得

左キーが押されているかを判定します。

### 戻り値
- \`1\`: 押されている
- \`0\`: 押されていない

### 使用例
\`\`\`javascript
// 左キーが押されているか確認
if (ap.isPressLeftKey() === 1) {
  console.log("左キーが押されています");
}
\`\`\``);
    methodDocumentations.set('isPressRightKey', `## 右キー押下状態取得

右キーが押されているかを判定します。

### 戻り値
- \`1\`: 押されている
- \`0\`: 押されていない

### 使用例
\`\`\`javascript
// 右キーが押されているか確認
if (ap.isPressRightKey() === 1) {
  console.log("右キーが押されています");
}
\`\`\``);
    methodDocumentations.set('isPressUpKey', `## 上キー押下状態取得

上キーが押されているかを判定します。

### 戻り値
- \`1\`: 押されている
- \`0\`: 押されていない

### 使用例
\`\`\`javascript
// 上キーが押されているか確認
if (ap.isPressUpKey() === 1) {
  console.log("上キーが押されています");
}
\`\`\``);
    methodDocumentations.set('isPressDownKey', `## 下キー押下状態取得

下キーが押されているかを判定します。

### 戻り値
- \`1\`: 押されている
- \`0\`: 押されていない

### 使用例
\`\`\`javascript
// 下キーが押されているか確認
if (ap.isPressDownKey() === 1) {
  console.log("下キーが押されています");
}
\`\`\``);
    methodDocumentations.set('isPressZKey', `## Zキー押下状態取得

Zキーが押されているかを判定します。

### 戻り値
- \`1\`: 押されている
- \`0\`: 押されていない

### 使用例
\`\`\`javascript
// Zキーが押されているか確認
if (ap.isPressZKey() === 1) {
  console.log("Zキーが押されています");
}
\`\`\``);
    methodDocumentations.set('isPressXKey', `## Xキー押下状態取得

Xキーが押されているかを判定します。

### 戻り値
- \`1\`: 押されている
- \`0\`: 押されていない

### 使用例
\`\`\`javascript
// Xキーが押されているか確認
if (ap.isPressXKey() === 1) {
  console.log("Xキーが押されています");
}
\`\`\``);
    methodDocumentations.set('isPressSpaceKey', `## スペースキー押下状態取得

スペースキーが押されているかを判定します。

### 戻り値
- \`1\`: 押されている
- \`0\`: 押されていない

### 使用例
\`\`\`javascript
// スペースキーが押されているか確認
if (ap.isPressSpaceKey() === 1) {
  console.log("スペースキーが押されています");
}
\`\`\``);
    methodDocumentations.set('isPressCodeKey', `## 指定キー押下状態取得

指定コードのキーが押されているかを判定します。

### パラメータ
- \`keyCode\`: キーコード

### 戻り値
- \`1\`: 押されている
- \`0\`: 押されていない

### 使用例
\`\`\`javascript
// Enterキー(13)が押されているか確認
if (ap.isPressCodeKey(13) === 1) {
  console.log("Enterキーが押されています");
}
\`\`\``);
    
    // パラメータ関連
    methodDocumentations.set('getValue', `## パラメータ取得

パラメータnameの値を取得します。

### パラメータ
- \`name\`: パラメータ名

### 戻り値
- パラメータの値（文字列）

### 使用例
\`\`\`javascript
// BGM設定を取得
var bgm = ap.getValue("filename_bgm");
\`\`\``);
    methodDocumentations.set('getParamValue', `## パラメータ取得（別名）

\`getValue(name)\`と同じです。パラメータnameの値を取得します。

### パラメータ
- \`name\`: パラメータ名

### 戻り値
- パラメータの値（文字列）

### 使用例
\`\`\`javascript
// BGMの設定値を取得
var bgmFile = ap.getParamValue("filename_bgm");
console.log("BGMファイル: " + bgmFile);
\`\`\``);
    methodDocumentations.set('setValue', `## パラメータ設定

パラメータnameの値をvalueに設定します。

### パラメータ
- \`name\`: パラメータ名
- \`value\`: 設定する値

### 詳細
値によっては再起動しないと動作しないことがあります。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// しっぽの設定を変更
ap.setValue("j_tail_type", "2");
\`\`\``);
    methodDocumentations.set('setParamValue', `## パラメータ設定（別名）

\`setValue(name, value)\`と同じです。

### パラメータ
- \`name\`: パラメータ名
- \`value\`: 設定する値

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// マップチップの設定を変更
ap.setParamValue("map0-29", "aaaaaaaaaaaaaaaaaaaaaa");
ap.restart(); // 変更を反映するために再起動
\`\`\``);
    
    // 内部メッセージ関連
    methodDocumentations.set('getJSMes', `## 内部メッセージ取得

内部メッセージを取得します。ユーザー定義の数値を保持するのに使用できます。

### 戻り値
- 内部メッセージ（数値）

### 使用例
\`\`\`javascript
// 内部メッセージの値を取得
var value = ap.getJSMes();
console.log("内部メッセージ: " + value);

// ゲーム開始時の初期化処理の例
function userJSCallback(g, mode, view_x, view_y, ap) {
    // ゲーム開始時の初期化
    if(ap.getJSMes() >= 1) {
        // JavaApplet からゲーム開始のメッセージを受けた
        ap.setJSMes(0);	// メッセージの受信を報告

        // ゲーム開始時の初期化
        init();
    }
    
    // その他の処理...
}
\`\`\``);
    methodDocumentations.set('setJSMes', `## 内部メッセージ設定

内部メッセージを設定します。ユーザー定義の数値を保持するのに使用できます。

### パラメータ
- \`n\`: 設定する値（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 内部メッセージに値を設定（データの受け渡しに利用）
ap.setJSMes(1);

// ゲーム開始時の初期化処理の例
function userJSCallback(g, mode, view_x, view_y, ap) {
    // ゲーム開始時の初期化
    if(ap.getJSMes() >= 1) {
        // JavaApplet からゲーム開始のメッセージを受けた
        ap.setJSMes(0);	// メッセージの受信を報告

        // ゲーム開始時の初期化
        init();
    }
    
    // その他の処理...
}
\`\`\``);
    
    // 基本表示設定
    methodDocumentations.set('setBackImage', `## 背景画像設定

背景画像を変更します。

### パラメータ
- \`filename\`: 画像ファイル名

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setBackImage("background2.gif");
\`\`\``);
    methodDocumentations.set('setSecondImage', `## セカンド画像設定

セカンド画像を変更します。

### パラメータ
- \`filename\`: 画像ファイル名

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// セカンド画像を変更
ap.setSecondImage("second_image.gif");
\`\`\``);
    methodDocumentations.set('setSystemImage', `## システム画像設定

ゲーム中で使われている画像を設定します。

### パラメータ
- \`n\`: 画像の種類（数値）
- \`filename\`: 画像ファイル名

### 画像の種類一覧
| 数値 | モード |
|---|---|
| 0 | タイトル画面 |
| 1 | エンディング |
| 2 | ゲームオーバー |
| 3 | 地図画面 |
| 4 | ステージ1 |
| 5 | ステージ2 |
| 6 | ステージ3 |
| 7 | ステージ4 |
| 8 | 標準レイヤー |
| 9 | 背景レイヤー |

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// タイトル画面の画像を変更
ap.setSystemImage(0, "custom_title.png");
// ステージ1の背景画像を変更
ap.setSystemImage(4, "stage1_bg.png");
\`\`\``);
    methodDocumentations.set('setSystemDrawMode', `## 描画モード設定

MasaoJSS側が描画するオブジェクトを制限します。

### パラメータ
- \`n\`: 描画モード
  - \`1\`: すべての物体を描画
  - \`2\`: 主人公を描画しない
  - \`3\`: 主人公と敵を描画しない
  - \`4\`: すべての物体（得点の文字なども含めたすべて）を描画しない

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// すべてのキャラクターが非表示になる（自分で描画する場合など）
ap.setSystemDrawMode(4);
\`\`\``);
    methodDocumentations.set('drawSystemObject', `## システムオブジェクト描画

JavaScript側から、物体を描画させるよう指示します。

### パラメータ
- \`n\`: 描画するオブジェクトの種類
  - \`1\`: 主人公
  - \`2\`: 敵
  - \`3\`: 得点と一言メッセージ
  - \`4\`: 背景画像/背景色
  - \`5\`: 背景レイヤーのマップ
  - \`6\`: 標準レイヤーのマップ
  - \`7\`: 動く床などの仕掛け

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// setSystemDrawModeで描画をオフにした後、必要なものだけ描画
ap.setSystemDrawMode(4);
ap.drawSystemObject(4); // 背景のみ描画
ap.drawSystemObject(6); // マップを描画
\`\`\``);
    methodDocumentations.set('setSystemPattern', `## システムパターン設定

指定したパターンコードdestCodeの画像に、他のパターンコードnewCodeの画像を上書きコピーします。

### パラメータ
- \`destCode\`: 上書きされるパターンコード
- \`newCode\`: 上書きするパターンコード

### 詳細
この設定はページを再読み込みするまで有効です。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// パターン100の画像をパターン110に上書きコピー
ap.setSystemPattern(100, 110);
\`\`\``);
    methodDocumentations.set('setSystemPatternImage', `## システムパターン画像設定

指定したパターンコードdestCodeの画像に、画像オブジェクトimageの画像を上書きコピーします。

### パラメータ
- \`destCode\`: 上書きされるパターンコード
- \`n\`: 反転情報
  - \`0\`: そのまま
  - \`1\`: 左右反転
- \`image\`: 上書きする画像オブジェクト

### 詳細
この設定はページを再読み込みするまで有効です。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('setSystemColor', `## システム色設定

ゲーム内のシステムカラーを設定します。

### パラメータ
- \`type\`: 変更する色の種類（数値）
- \`r\`: 赤成分（0～255）
- \`g\`: 緑成分（0～255）
- \`b\`: 青成分（0～255）
- \`a\`: 不透明度（0～255、省略可）

### 変更可能な色の種類一覧
| type | 変更する色の種類 |備考|
|:---:|:---|:---|
|1|ステージ1のゲーム画面の背景色|アルファ値の設定不可|
|2|ステージ2のゲーム画面の背景色|アルファ値の設定不可|
|3|ステージ3のゲーム画面の背景色|アルファ値の設定不可|
|4|ステージ4のゲーム画面の背景色|アルファ値の設定不可|
|5|ステージ番号表示画面の背景色||
|6|スコアなどの文字の色||
|7|グレネードの爆発などの色1||
|8|グレネードの爆発などの色2||
|9|水の波動などの色|「水の波動 直進」はアルファ値が\`255\`の場合、<br>デフォルトのアルファ値（\`176\`）を参照する|
|10|ファイヤーバーなどの色1||
|11|ファイヤーバーなどの色2||
|12|メッセージウィンドウの背景色||
|13|メッセージウィンドウの枠の色||
|14|メッセージウィンドウの名前の文字色||
|15|メッセージウィンドウの文字色||
|16|ゲージの枠の色||
|17|ゲージの背景色1||
|18|ゲージの背景色2||

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// メッセージウィンドウの背景色を半透明にする
ap.setSystemColor(12, 0, 0, 0, 255 * 0.5);

// ファイヤーバーの色をピンクにした上で透明度を80%にする
ap.setSystemColor(10, 255, 0, 255, 255 * 0.8);
\`\`\``);
    
    // 主人公の状態・動作・特技
    methodDocumentations.set('setMyMiss', `## 主人公ミス

主人公がミスをします。

### パラメータ
- \`n\`: 動きの設定
  - \`1\`: 針や間接攻撃を受けて死亡したときのアクション
  - \`2\`: 敵に触れて死亡したときのアクション
  - \`3\`: 上から潰されて死亡したときのアクション
  - \`4\`: 横から潰されて死亡したときのアクション

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 主人公が針に刺さって死亡する
ap.setMyMiss(1);
// 主人公が敵に触れて死亡する
ap.setMyMiss(2);
\`\`\``);
    methodDocumentations.set('setMyPress', `## 主人公踏み動作

主人公が踏む動作をします。

### パラメータ
- \`n\`: 動きの設定
  - \`1\`: 地上の敵を踏んだ時のアクション
  - \`2\`: 空中の敵を踏んだ時のアクション
  - \`3\`: ボスを踏んだ時のアクション

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 主人公が地上の敵を踏む動作をする
ap.setMyPress(1);
// 主人公がボスを踏む動作をする
ap.setMyPress(3);
\`\`\``);
    methodDocumentations.set('showMyHP', `## HP表示

主人公のHPを表示します。

### パラメータ
- \`name\`: HPの名前

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.showMyHP("ライフ"); // 「ライフ」という名前でHPを表示
\`\`\``);
    methodDocumentations.set('setMyMaxHP', `## 最大HP設定

ゲーム開始時の主人公のHPを設定します。

### パラメータ
- \`hp\`: 設定するHP（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setMyMaxHP(5); // 最大HPを5に設定
\`\`\``);
    methodDocumentations.set('setMyHP', `## 現在HP設定

現在の主人公のHPを設定します。

### パラメータ
- \`hp\`: 設定するHP（数値）

### 詳細
0を指定するとHPは0になりますが、ミスにはなりません。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// HPを3に設定
ap.setMyHP(3);
\`\`\``);
    methodDocumentations.set('getMyHP', `## 現在HP取得

現在の主人公のHPを取得します。

### 戻り値
- 現在のHP（数値）

### 使用例
\`\`\`javascript
// 現在のHPを取得
var hp = ap.getMyHP();
console.log("現在のHP: " + hp);
\`\`\``);
    methodDocumentations.set('setMyHPDamage', `## HP減少

主人公にダメージを与えます。

### パラメータ
- \`damage\`: 与えるダメージ量（数値）

### 詳細
ダメージ直後の点滅状態ではダメージを与えられません。
HPが0以下になるとHPは0になりますが、ミスにはなりません。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 1ポイントのダメージを与える
ap.setMyHPDamage(1);
\`\`\``);
    methodDocumentations.set('setMyWait', `## 主人公停止

主人公を一定時間停止させます。

### パラメータ
- \`time\`: 停止時間（フレーム数）
- \`code\`: 停止中のパターンコード
- \`direction\`: 向き
  - \`0\`: 左向き
  - \`1\`: 右向き

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 主人公を2秒間(120フレーム)、左向きパターン100で停止させる
ap.setMyWait(120, 100, 0);
\`\`\``);
    methodDocumentations.set('isRideGround', `## 地面判定

主人公が地面に乗っているか判定します。

### 戻り値
- \`1\`: 乗っている
- \`0\`: 乗っていない

### 使用例
\`\`\`javascript
if (ap.isRideGround()) {
  // 地面に接地している場合の処理
}
\`\`\``);
    methodDocumentations.set('addMyTokugi', `## 特技追加

主人公に特技を付加します。

### パラメータ
- \`n\`: 特技番号

### 特技コード一覧
| 特技コード | 特技の種類 |
|---|---|
| 1 | ヘルメット |
| 2 | ドリル |
| 3 | 落ちるのが遅い |
| 4 | 下キーを押すと急降下 |
| 5 | 全速体当たりで敵を倒せる |
| 6 | 空中の左右加速度が高い |
| 7 | 速く走れる |
| 8 | 走れない |
| 9 | 空中でもう１回ジャンプできる |
| 10 | 壁キック |
| 11 | 壁ジャンプ |
| 12 | ジャンプ時にファイヤーボールが出ない |
| 13 | ジャンプの高さを固定 小 |
| 14 | ジャンプの高さを固定 小中 |
| 15 | ジャンプの高さを固定 中 |
| 16 | ジャンプの高さを固定 大 |
| 17 | しっぽ 敵を倒せる |
| 18 | しっぽ ブロック１を壊せる |
| 19 | しっぽ 敵を倒せてブロック１を壊せる |
| 20 | ファイヤーボール 跳ねる |
| 21 | ファイヤーボール 水平に飛ぶ |
| 22 | ファイヤーボール ダブル |
| 23 | ファイヤーボール 水平に飛ぶ 短射程 |
| 24 | ファイヤーボール ホーミングアミュレット |
| 25 | 昇龍拳 |
| 26 | サイコクラッシャーアタック |
| 27 | ロケット頭突き |
| 28 | スカイアッパー |
| 29 | 流星キック |
| 30 | ヘルメット |

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.addMyTokugi(9); // 二段ジャンプを付与
ap.addMyTokugi(10); // 壁キックを付与
\`\`\``);
    methodDocumentations.set('removeMyTokugi', `## 特技削除

主人公の特技を無効にします。

### パラメータ
- \`n\`: 特技番号

### 特技コード一覧
| 特技コード | 特技の種類 |
|---|---|
| 1 | ヘルメット |
| 2 | ドリル |
| 3 | 落ちるのが遅い |
| 4 | 下キーを押すと急降下 |
| 5 | 全速体当たりで敵を倒せる |
| 6 | 空中の左右加速度が高い |
| 7 | 速く走れる |
| 8 | 走れない |
| 9 | 空中でもう１回ジャンプできる |
| 10 | 壁キック |
| 11 | 壁ジャンプ |
| 12 | ジャンプ時にファイヤーボールが出ない |
| 13 | ジャンプの高さを固定 小 |
| 14 | ジャンプの高さを固定 小中 |
| 15 | ジャンプの高さを固定 中 |
| 16 | ジャンプの高さを固定 大 |
| 17 | しっぽ 敵を倒せる |
| 18 | しっぽ ブロック１を壊せる |
| 19 | しっぽ 敵を倒せてブロック１を壊せる |
| 20 | ファイヤーボール 跳ねる |
| 21 | ファイヤーボール 水平に飛ぶ |
| 22 | ファイヤーボール ダブル |
| 23 | ファイヤーボール 水平に飛ぶ 短射程 |
| 24 | ファイヤーボール ホーミングアミュレット |
| 25 | 昇龍拳 |
| 26 | サイコクラッシャーアタック |
| 27 | ロケット頭突き |
| 28 | スカイアッパー |
| 29 | 流星キック |
| 30 | ヘルメット |

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 空中でもう１回ジャンプできるの特技を無効にする
ap.removeMyTokugi(9);
\`\`\``);
    methodDocumentations.set('setEnemyPress', `## 敵踏み設定

主人公が敵を踏めるかを設定します。

### パラメータ
- \`n\`: 設定値
  - \`1\`: 踏める
  - \`2\`: 踏めない
  - \`3\`: 当たり判定をなくす

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 敵を踏めなくする
ap.setEnemyPress(2);

// 敵との当たり判定をなくす
ap.setEnemyPress(3);

// 通常状態に戻す（敵を踏める）
ap.setEnemyPress(1);
\`\`\``);
    
    // 主人公の装備
    methodDocumentations.set('equipTail', `## しっぽ装備

主人公のしっぽ装備を切り替えます。

### パラメータ
- \`flag\`: 装備フラグ
  - \`1\`: 装備する
  - \`0\`: 外す

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.equipTail(1); // しっぽを装備
\`\`\``);
    methodDocumentations.set('equipFire', `## ファイヤーボール装備

主人公のファイヤーボール装備を切り替えます。

### パラメータ
- \`flag\`: 装備フラグ（省略可、デフォルト: 1）
  - \`1\`: 装備する
  - \`0\`: 外す

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.equipFire(1); // ファイヤーボールを装備
\`\`\``);
    methodDocumentations.set('setFireRange', `## ファイヤーボール射程設定

水平に飛ぶタイプのファイヤーボールの射程を設定します。

### パラメータ
- \`range\`: 射程（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// ファイヤーボールの射程を200に設定
ap.setFireRange(200);
\`\`\``);
    methodDocumentations.set('equipBarrier', `## バリア装備

一定時間持続するバリアを装備します。

### パラメータ
- \`time\`: 持続時間（フレーム数）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.equipBarrier(300); // 300フレームのバリア装備
\`\`\``);
    methodDocumentations.set('getBarrierTime', `## バリア残り時間取得

バリアの残り時間を取得します。

### 戻り値
- バリアの残り時間（フレーム数）
  - \`0\`: バリアがない場合

### 使用例
\`\`\`javascript
// バリアの残り時間を取得
var time = ap.getBarrierTime();
console.log("バリア残り時間: " + time + "フレーム");
\`\`\``);
    methodDocumentations.set('equipJet', `## ジェット装備

ジェット燃料量を設定します。

### パラメータ
- \`value\`: 燃料量（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.equipJet(100); // ジェット燃料を100設定
\`\`\``);
    methodDocumentations.set('setJetFuel', `## ジェット燃料設定

\`equipJet(value)\`と同じです。ジェット燃料量を設定します。

### パラメータ
- \`value\`: 燃料量（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// ジェット燃料を120に設定
ap.setJetFuel(120);
\`\`\``);
    methodDocumentations.set('getJetFuel', `## ジェット燃料取得

現在のジェット燃料量を取得します。

### 戻り値
- 燃料量（数値）

### 使用例
\`\`\`javascript
// 現在のジェット燃料を取得
var fuel = ap.getJetFuel();
console.log("ジェット燃料: " + fuel);
\`\`\``);
    methodDocumentations.set('equipGrenade', `## グレネード装備

グレネード所持数を設定します。

### パラメータ
- \`num\`: グレネード所持数（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.equipGrenade(3); // グレネードを3個所持
\`\`\``);
    methodDocumentations.set('setGrenadeCount', `## グレネード所持数設定

\`equipGrenade(num)\`と同じです。グレネード所持数を設定します。

### パラメータ
- \`num\`: グレネード所持数（数値）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// グレネードを5個に設定
ap.setGrenadeCount(5);
\`\`\``);
    methodDocumentations.set('getGrenadeCount', `## グレネード所持数取得

グレネードの所持数を取得します。

### 戻り値
- グレネード所持数（数値）

### 使用例
\`\`\`javascript
// グレネードの所持数を取得
var count = ap.getGrenadeCount();
console.log("グレネード所持数: " + count);
\`\`\``);
    
    // 敵関連
    methodDocumentations.set('setEnemy', `## 敵配置

敵（の攻撃）を指定座標に配置します。

### パラメータ
- \`x\`: X座標（ブロック単位）
- \`y\`: Y座標（ブロック単位）
- \`code\`: 敵（の攻撃）のコード

### 敵コード一覧
| コード | 敵の種類 | 種別 |
|---|---|---|
| 1 | 亀 足元に空白があると落ちる | 敵 |
| 2 | 亀 足元に空白があると向きを変える | 敵 |
| 3 | 亀 ３匹連続 | 敵 |
| 4 | ピカチー | 敵 |
| 5 | チコリン | 敵 |
| 6 | ヒノララシ | 敵 |
| 7 | ポッピー 上下移動 | 敵 |
| 8 | ポッピー 直進 | 敵 |
| 9 | ポッピー ３羽連続 | 敵 |
| 10 | マリリ | 敵 |
| 11 | ヤチャモ | 敵 |
| 12 | ミズタロウ | 敵 |
| 13 | エアームズ | 敵 |
| 14 | 水なしタイキング | 敵 |
| 15 | 水なしクラゲッソ | 敵 |
| 16 | 電撃 | 攻撃 |
| 17 | 葉っぱカッターが左に１枚 | 攻撃 |
| 18 | 葉っぱカッターが右に１枚 | 攻撃 |
| 19 | 火の粉左 | 攻撃 |
| 20 | 火の粉右 | 攻撃 |
| 21 | 水鉄砲左 | 攻撃 |
| 22 | 水鉄砲右 | 攻撃 |
| 23 | エアームズ爆弾左 | 攻撃 |
| 24 | エアームズ爆弾右 | 攻撃 |
| 25 | エアームズ爆弾直下降 | 攻撃 |
| 26 | 水の波動 | 攻撃 |
| 27 | 左にグレネード 短射程 | 攻撃 |
| 28 | 左にグレネード 中射程 | 攻撃 |
| 29 | 左にグレネード 長射程 | 攻撃 |
| 30 | 噴火（威力小） | 攻撃 |
| 31 | 噴火（威力大） | 攻撃 |
| 32 | カイオール版バブル光線（１発目） | 攻撃 |
| 33 | 左にバブル光線３発 | 攻撃 |
| 34 | 左にバブル光線４発 | 攻撃 |
| 35 | 左回りファイアーバー | 仕掛け |
| 36 | 右回りファイアーバー | 仕掛け |
| 37 | ファイヤーバー３本 左回り | 仕掛け |
| 38 | ファイヤーバー３本 右回り | 仕掛け |
| 39 | 上下に動く床 | 仕掛け |
| 40 | 左右に動く床 | 仕掛け |
| 41 | チコリン（はっぱカッター 乱れ射ち） | 敵 |
| 42 | チコリン（左にソーラービーム） | 敵 |
| 43 | マリリ（左右移動） | 敵 |
| 44 | マリリ（体当たり） | 敵 |
| 45 | ヤチャモ（火の粉三連射） | 敵 |
| 46 | ヤチャモ（左に破壊光線） | 敵 |
| 47 | エアームズ（左右に動いて爆弾投下） | 敵 |
| 48 | エアームズ（その場て爆弾投下） | 敵 |
| 49 | タイキング（はねる） | 敵 |
| 50 | タイキング（縄張りを守る） | 敵 |
| 51 | タイキング（左回り） | 敵 |
| 52 | タイキング（右回り） | 敵 |
| 53 | クラゲッソ（近づくと落ちる） | 敵 |
| 54 | クラゲッソ（縄張りを守る） | 敵 |
| 55 | クラゲッソ（左回り） | 敵 |
| 56 | クラゲッソ（右回り） | 敵 |
| 57 | グラーダの投げる亀 | 攻撃 |
| 58 | グラーダの投げるヒノララシ | 攻撃 |
| 59 | グラーダの投げるマリリ | 攻撃 |
| 60 | ハリケンブラスト | 攻撃 |
| 61 | 左にはっぱカッター 乱れ射ち | 攻撃 |
| 62 | 右にはっぱカッター 乱れ射ち | 攻撃 |
| 63 | 左にみずでっぽう 水平発射 | 攻撃 |
| 64 | 右にみずでっぽう 水平発射 | 攻撃 |
| 65 | 左にソーラービーム | 攻撃 |
| 66 | 左にプラズマ砲 | 攻撃 |
| 67 | 右にプラズマ砲 | 攻撃 |
| 68 | 左に破壊光線 | 攻撃 |
| 69 | 左に電撃３発 | 攻撃 |
| 70 | 右に電撃３発 | 攻撃 |
| 71 | 左にうずしお | 攻撃 |
| 72 | 右にうずしお | 攻撃 |
| 73 | 左に流星群（中距離） | 攻撃 |
| 74 | 左に流星群（短距離） | 攻撃 |
| 75 | 右に流星群（中距離） | 攻撃 |
| 76 | 右に流星群（短距離） | 攻撃 |
| 77 | 右にグレネード 短射程 | 攻撃 |
| 78 | 右にグレネード 中射程 | 攻撃 |
| 79 | 右にグレネード 長射程 | 攻撃 |
| 80 | ブロック１の破片 | 攻撃 |
| 81 | 落下グレネード | 攻撃 |
| 82 | グレネードの爆風のみ | 攻撃 |
| 83 | 右にソーラービーム | 攻撃 |
| 84 | 右に破壊光線 | 攻撃 |

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 座標(15, 8)にマリリを配置
ap.setEnemy(15, 8, 10);
\`\`\``);
    methodDocumentations.set('getEnemyTotal', `## 敵の総数取得

現在存在している敵の総数を取得します。

### 戻り値
- 敵の数（数値）

### 使用例
\`\`\`javascript
var total = ap.getEnemyTotal();
\`\`\``);
    methodDocumentations.set('destroyEnemy', `## 敵の撃破

指定された矩形の範囲内にいる敵を倒します。

### パラメータ
- \`x\`: 左上X座標（ピクセル単位）
- \`y\`: 左上Y座標（ピクセル単位）
- \`width\`: 幅（ピクセル単位）
- \`height\`: 高さ（ピクセル単位）

### 戻り値
- 倒した敵の数（数値）

### 使用例
\`\`\`javascript
// 画面中央付近の敵を倒す
var count = ap.destroyEnemy(200, 120, 150, 150);
\`\`\``);

    // ボス関連
    methodDocumentations.set('getBossXReal', `## ボスX座標取得

ボスのX座標を取得します。

### 戻り値
- ボスのX座標（ピクセル単位）

### 使用例
\`\`\`javascript
var x = ap.getBossXReal();
\`\`\``);
    methodDocumentations.set('getBossYReal', `## ボスY座標取得

ボスのY座標を取得します。

### 戻り値
- ボスのY座標（ピクセル単位）

### 使用例
\`\`\`javascript
var y = ap.getBossYReal();
\`\`\``);
    methodDocumentations.set('getBossHP', `## ボスHP取得

ボスのHPを取得します。

### 戻り値
- HP値（数値）

### 使用例
\`\`\`javascript
var hp = ap.getBossHP();
\`\`\``);
    methodDocumentations.set('getBossDirection', `## ボス向き取得

ボスの向きを取得します。

### 戻り値
- \`0\`: 左向き
- \`1\`: 右向き

### 使用例
\`\`\`javascript
var dir = ap.getBossDirection();
\`\`\``);
    methodDocumentations.set('isBossAttackMode', `## ボス攻撃モード判定

ボスが攻撃中かどうかを判定します。

### 戻り値
- \`1\`: 攻撃中
- \`0\`: 攻撃中でない

### 使用例
\`\`\`javascript
if (ap.isBossAttackMode()) {
  // ボスが攻撃中の場合の処理
}
\`\`\``);
    methodDocumentations.set('setBossXReal', `## ボスX座標設定

ボスのX座標を設定します。

### パラメータ
- \`x\`: X座標（ピクセル単位）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setBossXReal(400);
\`\`\``);
    methodDocumentations.set('setBossYReal', `## ボスY座標設定

ボスのY座標を設定します。

### パラメータ
- \`y\`: Y座標（ピクセル単位）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setBossYReal(200);
\`\`\``);
    methodDocumentations.set('setBossObjectImage', `## ボス画像設定

ボスの画像を設定します。

### パラメータ
- \`image\`: 画像オブジェクト
- \`dx\`: X座標補正値
- \`dy\`: Y座標補正値

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 画像オブジェクトを使用してボスの画像を変更
var img = ap.newImageOnLoad("boss.png");
ap.setBossObjectImage(img, 0, 0);
\`\`\``);

    // 各種キャラクターのパラメータ関連
    methodDocumentations.set('getMyObjectCondition', `## 主人公状態取得

主人公の状態を取得します。

### 戻り値
- 主人公の状態（数値）

### 状態コード一覧
| 数値 | アクション |
|---|---|
| 100 | 通常時（生存時） |
| 110 | 敵を踏む |
| 120 | アイテムのドリルで穴を掘っている |
| 130 | ロードランナー時に特技として穴を掘っている |
| 140 | ロープまたはゆれる棒につかまっている |
| 145 | 乗れるカイオール（方向キーで移動）に乗っている |
| 150 | setMyWaitで硬直している／お店など利用中 |
| 200 | 敵に接触した |
| 210 | 死亡し、ゲームオーバー画面が出る前 |
| 220 | 上から潰れて死亡 |
| 230 | 横から潰れて死亡 |
| 240 | 針などに触れて死亡 |
| 250 | ドットイート等で敵に接触した |
| 300 | 土管に入る |
| 310 | 土管移動中 |
| 320 | 土管から出る |
| 400 | 人間大砲に入る＆照準合わせ中 |

### 使用例
\`\`\`javascript
var condition = ap.getMyObjectCondition();
if (condition === 100) {
  // 主人公が通常状態の場合の処理
} else if (condition >= 200 && condition < 300) {
  // 主人公がダメージを受けている場合の処理
}
\`\`\``);
    methodDocumentations.set('getMyObjectAC', `## 主人公アニメーションカウンタ取得

主人公のアニメーションカウンタを取得します。

### 戻り値
- アニメーションカウンタ値（数値）
  - \`0\`: 静止状態、シューティング移動、4方向移動
  - \`1\`: 移動時
  - \`2\`: 移動時、ジャンプ、落下、泳ぐ
  - \`3\`: 移動時

### 詳細
アニメーションカウンタは主人公が移動時などにパターン画像を切り替えるためのカウンタ値です。

### 使用例
\`\`\`javascript
var ac = ap.getMyObjectAC();
if (ac === 0) {
  // 主人公が静止状態の場合の処理
} else if (ac === 2) {
  // 主人公がジャンプ中/落下中/泳いでいる場合の処理
}
\`\`\``);
    methodDocumentations.set('getMyObjectPattern', `## 主人公パターンコード取得

主人公のパターンコードを取得します。

### 戻り値
- パターンコード（数値）

### 使用例
\`\`\`javascript
var pattern = ap.getMyObjectPattern();
\`\`\``);
    methodDocumentations.set('getMyDirection4way', `## 主人公4方向向き取得

主人公の向きを取得します。4方向移動の正男やハシゴ移動の場合、上下方向の情報も取得できます。

### 戻り値
- 向きを表す値（数値）

| 数値 | アクション |
|---|---|
| 0 | 左向き |
| 1 | 右向き |
| 2 | ハシゴを昇る／上向き |
| 3 | ハシゴを降りる／下向き |

### 使用例
\`\`\`javascript
// 主人公の向きを取得
var direction = ap.getMyDirection4way();
if (direction === 2) {
  console.log("主人公は上向き/ハシゴを昇っています");
} else if (direction === 3) {
  console.log("主人公は下向き/ハシゴを降りています");
}
\`\`\``);
    methodDocumentations.set('getMyDirection', `## 主人公向き取得

主人公の向きを取得します。

### 戻り値
- 向きを表す値（数値）

| 数値 | アクション |
|---|---|
| 0 | 左向き |
| 1 | 右向き |
| 2 | 上向き（4方向移動の正男の場合） |
| 3 | 下向き（4方向移動の正男の場合） |

### 詳細
4方向移動の正男の場合は上下方向も返します。それ以外の場合は0または1のみが返されます。

### 使用例
\`\`\`javascript
var dir = ap.getMyDirection();
if (dir === 0) {
  console.log("主人公は左向きです");
} else if (dir === 1) {
  console.log("主人公は右向きです");
} else if (dir === 2) {
  console.log("主人公は上向きです（4方向移動時のみ）");
}
\`\`\``);
    methodDocumentations.set('setMyDirection', `## 主人公向き設定

主人公の向きを設定します。

### パラメータ
- \`direction\`: 向きの値
  - \`0\`: 左向き
  - \`1\`: 右向き

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 主人公を右向きに設定
ap.setMyDirection(1);

// 主人公を左向きに設定
ap.setMyDirection(0);
\`\`\``);
    methodDocumentations.set('setMyObjectPattern', `## 主人公パターン設定

主人公の画像をパターンコードで設定します。

### パラメータ
- \`code\`: パターンコード

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setMyObjectPattern(100);
\`\`\``);
    methodDocumentations.set('setMyObjectImage', `## 主人公画像設定

主人公の画像を画像オブジェクトで設定します。

### パラメータ
- \`image\`: 画像オブジェクト
- \`dx\`: X座標補正値
- \`dy\`: Y座標補正値

### 詳細
設定を解除する場合は\`image\`にnullを代入してください。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 主人公の画像を変更
var img = ap.newImageOnLoad("player.png");
ap.setMyObjectImage(img, 0, 0);
// 設定を解除
ap.setMyObjectImage(null, 0, 0);
\`\`\``);
    methodDocumentations.set('setEnemyObjectPattern', `## 敵パターン設定

指定IDの敵の画像をパターンコードで設定します。

### パラメータ
- \`enemyID\`: 敵のID
- \`code\`: パターンコード

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setEnemyObjectPattern(5, 110);
\`\`\``);
    methodDocumentations.set('getEnemyObjectCondition', `## 敵状態取得

指定IDの敵の状態を取得します。

### パラメータ
- \`enemyID\`: 敵のID

### 敵の状態コード一覧
| 数値 | アクション | 備考 |
|---|---|---|
| 0 | 敵の完全消滅 | |
| 10 | 未出現 | |
| 50 | 敵死亡 | |
| 52 | アイテム攻撃による敵死亡 | |
| 54 | 追跡亀をアイテムで倒す | |
| 55 | シューティングまたは４方向移動の時敵をアイテムで倒す | |
| 57 | 重力無視の追跡ピカチー等をアイテムで倒す | |
| 60 | アイテムで倒した追跡亀の復活待機中 | |
| 65 | アイテムで倒した重力無視の追跡ピカチー等の復活待機中 | |
| 100 | 落ちない亀生存（左向き） | |
| 105 | 落ちない亀生存（右向き） | |
| 110 | 落ちる亀生存（左向き） | |
| 115 | 落ちる亀生存（右向き） | |
| 120 | 落ちる亀落下中（左向き） | |
| 125 | 落ちる亀落下中（右向き） | |
| 150 | 投げられている亀（向きは無関係） | グラーダの攻撃のみ |
| 200 | ピカチー待機中（向きは無関係） | |
| 210 | ピカチー攻撃中 | |
| 300 | チコリン（はっぱカッター）生存（向きは無関係） | |
| 310 | チコリン（ヒノララシを投げる/マリリを投げる）生存（左向き） | |
| 320 | チコリン（はっぱカッター乱れ打ち）生存（向きは無関係） | |
| 330 | チコリン（ソーラービーム）生存（左向き） | |
| 335 | チコリン（ソーラービーム）生存（右向き） | |
| 400 | 落ちないヒノララシ生存（左向き） | |
| 405 | 落ちないヒノララシ生存（右向き） | |
| 410 | 落ちるヒノララシ生存（左向き） | グラーダまたはチコリンの攻撃のみ |
| 415 | 落ちるヒノララシ生存（右向き） | グラーダまたはチコリンの攻撃のみ |
| 420 | 落ちるヒノララシ落下中（左向き） | グラーダまたはチコリンの攻撃のみ |
| 425 | 落ちるヒノララシ落下中（右向き） | グラーダまたはチコリンの攻撃のみ |
| 450 | 投げられているヒノララシ（向きは無関係） | グラーダまたはチコリンの攻撃のみ |
| 500 | 上下に動くポッピー生存（向きは無関係） | |
| 510 | 移動するポッピー（直進）生存（左向き） | |
| 515 | 移動するポッピー（直進）生存（右向き） | |
| 520 | ポッピー（火の粉）生存（向きは無関係） | |
| 530 | ポッピー（火の粉 ３連射）生存（向きは無関係） | |
| 540 | ポッピー（バブル光線３発）生存（向きは無関係） | |
| 550 | ポッピー（ハリケンブラスト）生存（向きは無関係） | |
| 600 | マリリ（斜めにジャンプ）生存（左向き）<br>マリリ（その場でジャンプ）生存（向きは無関係） | |
| 605 | マリリ（斜めにジャンプ）生存（右向き） | |
| 650 | 投げられているマリリ生存（向きは無関係） | グラーダまたはチコリンの攻撃のみ |
| 660 | マリリ（左右移動）生存（向きは無関係） | |
| 670 | マリリ（体当たり）生存（向きは無関係） | |
| 700 | ヤチャモ（下記以外）生存（向きは無関係） | |
| 710 | ヤチャモ（火の粉 速射/火の粉 ３連射）生存（向きは無関係） | |
| 720 | ヤチャモ（破壊光線）生存（左向き） | |
| 725 | ヤチャモ（破壊光線）生存（右向き） | |
| 800 | ミズタロウ初期位置（向きは無関係） | |
| 810 | ミズタロウ移動（向きは無関係） | |
| 850 | ミズタロウ（シューティング）（左向き） | |
| 900 | エアームズ（壁に当たると止まる）生存（左向き） | |
| 910 | エアームズ（壁に当たると止まる）停止（左向き） | |
| 920 | エアームズ（その場で爆弾/グレネード投下）生存（向きは無関係） | |
| 930 | エアームズ（左右に動いて爆弾投下）生存（向きは無関係） | |
| 950 | エアームズ（壁に当たると向きを変える）生存（左向き） | |
| 960 | エアームズ（壁に当たると向きを変える）生存（右向き） | |
| 1000 | タイキング（左右移動）生存（左向き） | |
| 1002 | タイキング（シューティング）生存（左向き） | |
| 1003 | タイキング（４方向移動）生存（左向き） | |
| 1005 | タイキング（左右移動）生存（右向き） | |
| 1050 | タイキング（はねる）生存（向きは無関係） | |
| 1060 | タイキング（縄張りをまもる）生存（向きは無関係） | |
| 1070 | タイキング（左回り）生存（向きは無関係） | |
| 1080 | タイキング（右回り）生存（向きは無関係） | |
| 1100 | クラゲッソ（バブル光線）生存（向きは無関係） | |
| 1102 | クラゲッソ（シューティング）生存（左向き） | |
| 1103 | クラゲッソ（４方向移動）生存（左向き） | |
| 1150 | クラゲッソ（近づくと落ちる）生存（左向き） | |
| 1160 | クラゲッソ（縄張りをまもる）生存（向きは無関係） | |
| 1170 | クラゲッソ（左回り）生存（向きは無関係） | |
| 1180 | クラゲッソ（右回り）生存（向きは無関係） | |
| 1200 | 追跡亀（左向き） | |
| 1210 | 追跡亀（右向き） | |
| 1220 | 追跡亀（落下中） | |
| 1300 | ロードランナーで穴に落下中（向きは無関係） | |
| 1310 | ロードランナーで穴に落下し終わった状態（向きは無関係） | |
| 1400 | 重力無視の追跡ピカチー等（左向き） | |
| 1410 | 重力無視の追跡ピカチー等（右向き） | |
| 1420 | 重力無視の追跡ピカチー等（上移動） | |
| 1430 | 重力無視の追跡ピカチー等（下移動） | |

### 戻り値
- 敵の状態（数値）

### 使用例
\`\`\`javascript
// 敵のID=2の状態を取得
var condition = ap.getEnemyObjectCondition(2);

// 敵が生存状態かどうかをチェック（値の範囲で判断）
if (condition >= 100 && condition < 2000) {
  // 敵が生存中の場合の処理
}

// 特定の敵かどうかをチェック（値の範囲で判断）
if (condition >= 1000 && condition < 1100) {
  // タイキング系の敵の場合の処理
}
\`\`\``);
    methodDocumentations.set('getEnemyObjectPattern', `## 敵パターンコード取得

指定IDの敵のパターンコードを取得します。

### パラメータ
- \`enemyID\`: 敵のID

### 戻り値
- パターンコード（数値）

### 使用例
\`\`\`javascript
var pattern = ap.getEnemyObjectPattern(2);
\`\`\``);
    methodDocumentations.set('getEnemyObjectX', `## 敵X座標取得

指定IDの敵のX座標を取得します。

### パラメータ
- \`enemyID\`: 敵のID

### 戻り値
- X座標（ピクセル単位）

### 使用例
\`\`\`javascript
var x = ap.getEnemyObjectX(1);
\`\`\``);
    methodDocumentations.set('getEnemyObjectY', `## 敵Y座標取得

指定IDの敵のY座標を取得します。

### パラメータ
- \`enemyID\`: 敵のID

### 戻り値
- Y座標（ピクセル単位）

### 使用例
\`\`\`javascript
var y = ap.getEnemyObjectY(1);
\`\`\``);
    methodDocumentations.set('getEnemyObjectLength', `## 敵の数取得

敵IDの最大値を取得します。

### 戻り値
- 敵の数（数値）

### 使用例
\`\`\`javascript
var count = ap.getEnemyObjectLength();
\`\`\``);
    methodDocumentations.set('getEnemyObjectDirection', `## 敵向き取得

指定IDの敵の向きを取得します。

### パラメータ
- \`enemyID\`: 敵のID

### 戻り値
- 敵の向き（数値）

### 使用例
\`\`\`javascript
var dir = ap.getEnemyObjectDirection(4);
\`\`\``);
    methodDocumentations.set('setEnemyObjectImage', `## 敵画像設定

指定IDの敵の画像を画像オブジェクトで設定します。

### パラメータ
- \`enemyID\`: 敵のID
- \`image\`: 画像オブジェクト
- \`dx\`: X座標補正値
- \`dy\`: Y座標補正値

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 敵の画像を変更
var img = ap.newImageOnLoad("enemy.png");
ap.setEnemyObjectImage(2, img, 0, 0);
\`\`\``);
    methodDocumentations.set('getEnemyAC', `## 敵アニメーションカウンタ取得

指定IDの敵のアニメーションカウンタを取得します。

### パラメータ
- \`enemyID\`: 敵のID

### 詳細
アニメーションカウンタは0～3の範囲で変化し、3より大きくなると0に戻ります。
敵の移動時やアニメーション表示のタイミング制御に利用できます。

### 戻り値
- アニメーションカウンタ（数値、0～3）

### 使用例
\`\`\`javascript
var ac = ap.getEnemyAC(3);
if (ac === 0) {
  // アニメーションの特定フレームでの処理
}
\`\`\``);

    // ファイヤーボール・しっぽの当たり判定関連
    methodDocumentations.set('attackFire', `## ファイヤーボール当たり判定

指定された矩形にファイヤーボール、グレネード、プラズマ砲の当たり判定を作成します。

### パラメータ
- \`x\`: 左上X座標（ピクセル単位）
- \`y\`: 左上Y座標（ピクセル単位）
- \`width\`: 幅（ピクセル単位）
- \`height\`: 高さ（ピクセル単位）

### 戻り値
- \`1\`: ファイヤーボールが当たった
- \`10\`: グレネード、プラズマ砲が当たった
- その他: 複数の攻撃が同時に当たった場合は数値を合計
- \`0\`: 何も当たっていない

### 使用例
\`\`\`javascript
var hit = ap.attackFire(200, 150, 32, 32);
if (hit > 0) {
  // 当たった場合の処理
}
\`\`\``);
    methodDocumentations.set('attackTail', `## しっぽ当たり判定

指定された矩形にしっぽ攻撃の当たり判定を作成します。

### パラメータ
- \`x\`: 左上X座標（ピクセル単位）
- \`y\`: 左上Y座標（ピクセル単位）
- \`width\`: 幅（ピクセル単位）
- \`height\`: 高さ（ピクセル単位）

### 戻り値
- \`1\`: 命中した
- \`0\`: 命中しなかった

### 使用例
\`\`\`javascript
var hit = ap.attackTail(200, 150, 32, 32);
if (hit) {
  // 当たった場合の処理
}
\`\`\``);

    // マップ関連
    methodDocumentations.set('setMapchip', `## マップチップ設定

マップチップを1つ変更します。

### パラメータ
- \`x\`: X座標（ブロック単位）
- \`y\`: Y座標（ブロック単位）
- \`chip\`: マップチップ番号

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 座標(10, 5)のマップチップを水に変更
ap.setMapchip(10, 5, 4);
\`\`\``);
    methodDocumentations.set('getMapchip', `## マップチップ取得

指定した位置のマップチップ番号を取得します。

### パラメータ
- \`x\`: X座標（ブロック単位）
- \`y\`: Y座標（ブロック単位）

### 戻り値
- マップチップ番号（数値）

### 使用例
\`\`\`javascript
// 座標(10, 5)のマップチップを取得
var chip = ap.getMapchip(10, 5);
\`\`\``);
    methodDocumentations.set('setMapchip2', `## 背景マップチップ設定

背景レイヤーのマップチップを1つ変更します。

### パラメータ
- \`x\`: X座標（ブロック単位）
- \`y\`: Y座標（ブロック単位）
- \`chip\`: マップチップ番号

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 座標(10, 5)の背景マップチップを変更
ap.setMapchip2(10, 5, 9);
\`\`\``);
    methodDocumentations.set('getMapchip2', `## 背景マップチップ取得

指定した位置の背景レイヤーのマップチップ番号を取得します。

### パラメータ
- \`x\`: X座標（ブロック単位）
- \`y\`: Y座標（ブロック単位）

### 戻り値
- マップチップ番号（数値）

### 使用例
\`\`\`javascript
// 座標(10, 5)の背景マップチップを取得
var chipNo = ap.getMapchip2(10, 5);
\`\`\``);
    
    // キー入力関連メソッド（リリース系）
    methodDocumentations.set('releaseLeft', `## 左キー解放

左キーを離します。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('pressLeft2', `## 左キーダッシュ押下

左キーを押し、さらにダッシュ状態にします。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('releaseRight', `## 右キー解放

右キーを離します。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('pressRight2', `## 右キーダッシュ押下

右キーを押し、さらにダッシュ状態にします。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('releaseUp', `## 上キー解放

上キーを離します。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('releaseDown', `## 下キー解放

下キーを離します。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('releaseTrigger1', `## ジャンプキー解放

ジャンプキーを離します。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    methodDocumentations.set('getKeyCode', `## キーコード取得

最後に入力されたキーのキーコードを取得します。

### 戻り値
- キーコード（数値）`);
    methodDocumentations.set('resetKeyCode', `## キーコードリセット

getKeyCodeで取得できるキーコードを0にリセットします。

### 戻り値
- 成功すればtrue、失敗すればfalse`);
    
    // シリーズ固有の機能
    methodDocumentations.set('setAthletic', `## 仕掛け設置

指定した位置（ブロック単位）に仕掛けを設置します。

### パラメータ
- \`x\`: X座標（ブロック単位）
- \`y\`: Y座標（ブロック単位）
- \`type\`: 仕掛け番号

### 詳細
仕掛け番号はparamの\`firebar1_type\`などで指定する数値と同じです。（1のときはファイヤーバー（左回り）になります。）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 座標(10, 5)にファイヤーバー（左回り）を設置
ap.setAthletic(10, 5, 1);
\`\`\``);
    
    // 乱数・動作制御関連
    methodDocumentations.set('isPaused', `## ポーズ状態取得

ゲームがポーズ中かどうかを判定します。

### 戻り値
- \`1\`: ポーズ中
- \`0\`: ポーズ中でない

### 使用例
\`\`\`javascript
// ポーズ中かどうかを確認
if (ap.isPaused() === 1) {
  console.log("ゲームは現在ポーズ中です");
}
\`\`\``);
    methodDocumentations.set('pause', `## ポーズ設定

ゲームのポーズ状態を設定します。

### パラメータ
- \`mode\`: ポーズ設定（\`1\`でポーズ解除、\`0\`でポーズ）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// ゲームをポーズする
ap.pause(0);

// 少し待った後...

// ポーズを解除する
ap.pause(1);
\`\`\``);
    methodDocumentations.set('getRandomF', `## 乱数取得（小数）

[0.0, 1.0)の範囲の乱数を返します。

### 詳細
ゲーム内シードに依存した乱数を生成します。ゲームが開始されていないときはMath.random()を使用します。

### 戻り値
- 乱数（数値、[0.0, 1.0)の範囲）

### 使用例
\`\`\`javascript
// 0.0～1.0未満の小数乱数を取得
var rand = ap.getRandomF();
console.log("乱数値: " + rand);

// 特定範囲（10～20）の乱数を生成する
var min = 10;
var max = 20;
var scaledRandom = min + ap.getRandomF() * (max - min);
\`\`\``);
    methodDocumentations.set('getRandom', `## 乱数取得（整数）

[0, max)の範囲の整数乱数を返します。

### パラメータ
- \`max\`: 返される乱数の上限値

### 詳細
ゲーム内シードに依存した乱数を生成します。ゲームが開始されていないときはMath.random()を使用します。

### 戻り値
- 乱数（整数、[0, max)の範囲）

### 使用例
\`\`\`javascript
// 0から9までの整数乱数を生成
var random = ap.getRandom(10);
\`\`\``);
    
    // アイテム関連
    methodDocumentations.set('setItem', `## アイテム設置

指定した位置にアイテムを設置します。

### パラメータ
- \`x\`: X座標（ブロック単位）
- \`y\`: Y座標（ブロック単位）
- \`type\`: アイテムの種類

### アイテムコード一覧
| type | 設置されるアイテム |備考|
|:---:|:---|:---|
|1|人面星|\`MasaoJSS#setMapchip(x,y,8)\`でも設置可能|
|2|コイン|\`MasaoJSS#setMapchip(x,y,9)\`でも設置可能|
|3|ファイヤーボール||
|4|バリア||
|5|タイム||
|6|ジェット||
|7|ヘルメット||
|8|しっぽ||
|9|ドリル||
|10|グレネード||
|11|1UP||
|12|シューティングモード パワーアップアイテム1|シューティングモード時に？ブロック（コイン）に配置されるアイテム|
|13|シューティングモード パワーアップアイテム2|シューティングモード時に？ブロック（コイン3枚）に配置されるアイテム|
|14|スポット処理 範囲拡大アイテム|\`MasaoJSS#setAthletic(x,y,83)\`でも設置可能|
|15|ファイヤーボール 水平に飛ぶ||
|16|ファイヤーボール 跳ねる||
|17|ファイヤーボール ダブル||
|18|グレネード5発||
|19|コンティニュー|\`MasaoJSS#setAthletic(x,y,181)\`でも設置可能|
|20|ＫＥＹ１|\`MasaoJSS#setAthletic(x,y,245)\`でも設置可能|
|21|ＫＥＹ２|\`MasaoJSS#setAthletic(x,y,246)\`でも設置可能|

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 座標(10, 5)にコインを設置
ap.setItem(10, 5, 2);
// 座標(3, 25)にグレネードを直接配置
ap.setItem(3, 25, 10);
// 座標(2, 25)にバリアを直接配置
ap.setItem(2, 25, 4);
\`\`\``);
    methodDocumentations.set('getKeyCount', `## 鍵所持数取得

所持している鍵の数を取得します。

### パラメータ
- \`type\`: 鍵の種類（\`1\`: KEY1、\`2\`: KEY2）

### 戻り値
- 鍵の数（数値）

### 使用例
\`\`\`javascript
var key1count = ap.getKeyCount(1);
\`\`\``);
    
    // 描画関連
    methodDocumentations.set('drawImageRotate', `## 画像回転描画

画面に指定した画像を回転させて描画します。

### パラメータ
- \`image\`: 画像オブジェクト
- \`x\`: X座標（無回転時の画像の左上位置）
- \`y\`: Y座標（無回転時の画像の左上位置）
- \`angle\`: 角度（度数法）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 画像を45度回転して描画
var img = ap.newImageOnLoad("item.png");
ap.drawImageRotate(img, 100, 100, 45);
\`\`\``);
    methodDocumentations.set('drawImageScale', `## 画像拡大縮小描画

画面に指定した画像を拡大または縮小して描画します。

### パラメータ
- \`image\`: 画像オブジェクト
- \`x\`: X座標（画像の左上位置）
- \`y\`: Y座標（画像の左上位置）
- \`scaleX\`: X方向倍率（パーセント、100で等倍）
- \`scaleY\`: Y方向倍率（パーセント、100で等倍）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 画像を2倍に拡大して描画
var img = ap.newImageOnLoad("item.png");
ap.drawImageScale(img, 100, 100, 200, 200);
\`\`\``);
    methodDocumentations.set('drawImageAlphaComposite', `## 画像透明度描画

画面に指定した画像を指定した透明度で描画します。

### パラメータ
- \`image\`: 画像オブジェクト
- \`x\`: X座標（画像の左上位置）
- \`y\`: Y座標（画像の左上位置）
- \`alpha\`: 不透明度（0～100、0で完全に透明、100で完全に不透明）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 画像を半透明（50%）で描画
var img = ap.newImageOnLoad("item.png");
ap.drawImageAlphaComposite(img, 100, 100, 50);
\`\`\``);
    methodDocumentations.set('drawPattern', `## パターン描画

画面上の指定した位置にパターン画像を描画します。

### パラメータ
- \`x\`: X座標
- \`y\`: Y座標
- \`code\`: パターンコード
- \`dir\`: 向き（0: 左向き、1: 右向き）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// パターンコード100の画像を左向きで描画
ap.drawPattern(100, 100, 100, 0);
\`\`\``);
    methodDocumentations.set('setOffscreenColor', `## 描画色設定（グラフィック用）

オフスクリーンに描画する図形の色を設定します。

### パラメータ
- \`r\`: 赤（0～255）
- \`g\`: 緑（0～255）
- \`b\`: 青（0～255）
- \`alpha\`: 不透明度（0～255）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 半透明の赤色を設定
ap.setOffscreenColor(255, 0, 0, 128);

// 円を描画（例：円状の敵を描画）
ap.setOffscreenColor(en_color_r[i], en_color_g[i], en_color_b[i], 255);
Offscreen_g.fillOval(nx, ny, en_r[i]*2-1, en_r[i]*2-1);
\`\`\``);
    methodDocumentations.set('fillPolygon', `## 多角形描画

画面に三角形または四角形を描画します。

### パラメータ
- \`x1\`: 点1のX座標
- \`y1\`: 点1のY座標
- \`x2\`: 点2のX座標
- \`y2\`: 点2のY座標
- \`x3\`: 点3のX座標
- \`y3\`: 点3のY座標
- \`x4\`: 点4のX座標（省略可）
- \`y4\`: 点4のY座標（省略可）

### 詳細
三角形を描画する場合は最初の6つのパラメータのみ使用します。四角形の場合は8つすべてのパラメータを使用します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 三角形を描画
ap.setOffscreenColor(255, 0, 0, 255);
ap.fillPolygon(100, 100, 150, 200, 50, 200);
\`\`\``);
    
    methodDocumentations.set('newFont', `## フォント作成

第１引数（Offscreen_g）で使用できるフォントオブジェクトを作成します。

### パラメータ
- \`fontname\`: フォント名（"Dialog", "serif", "sans-serif"など）
- \`n\`: フォントスタイル
  - \`0\`: 普通
  - \`1\`: 太字
  - \`2\`: 斜体
  - \`3\`: 太字で斜体
- \`size\`: フォントサイズ（ピクセル）

### 詳細
環境によっては使用できないフォントも多く存在するので注意してください。

### 戻り値
- フォントオブジェクト

### 使用例
\`\`\`javascript
// 文字の色を緑にする
ap.setOffscreenColor(0, 96, 0, 255);

// ＭＳ Ｐ明朝の通常フォント（40px）を作成
var font1 = ap.newFont("ＭＳ Ｐ明朝", 0, 40);
Offscreen_g.setFont(font1);
Offscreen_g.drawString("ＭＳ Ｐ明朝", 100, 80);

// Dialogの太字フォント（40px）を作成
var font2 = ap.newFont("Dialog", 1, 40);
Offscreen_g.setFont(font2);
Offscreen_g.drawString("Dialog 太字", 100, 130);

// ＭＳ ゴシックの斜体フォント（40px）を作成
var font3 = ap.newFont("ＭＳ ゴシック", 2, 40);
Offscreen_g.setFont(font3);
Offscreen_g.drawString("ＭＳ ゴシック 斜体", 100, 180);
\`\`\``);
    
    // オフスクリーン関連のメソッドを追加
    methodDocumentations.set('setFontSize', `## フォントサイズ設定

スコアなどの文字列のサイズを設定します。

### パラメータ
- \`size\`: フォントサイズ（ピクセル）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
ap.setFontSize(16); // フォントサイズを16pxに設定
\`\`\``);

    // 床関連のメソッドドキュメントを追加
    methodDocumentations.set('newYuka', `## 床作成

新しく床を生成し、床IDを返します。

### パラメータ
- \`x\`: X座標（左上隅）
- \`y\`: Y座標（左上隅）
- \`x2\`: X方向の長さ、または右下のX座標（床タイプによる）
- \`y2\`: Y方向の長さ、または右下のY座標（床タイプによる）
- \`type\`: 床の形状
  - \`"line"\`: 線分
  - \`"triangle"\`: 直角三角形
  - \`"mount"\`: 台形
  - \`"circle"\`: 円
  - \`"half_circle"\`: 上半分の半円
  - \`"half_circle_line"\`: 上半分の半円（線のみ）
  - \`"wave_up"\`: 右上がりの曲線
  - \`"wave_up_line"\`: 右上がりの曲線（線のみ）
  - \`"wave_down"\`: 右下がりの曲線
  - \`"wave_down_line"\`: 右下がりの曲線（線のみ）
  - \`"rect"\`: 矩形
  - \`"pattern"\`: 矩形（画像はsetYukaPatternで設定）
  - その他: 矩形（ファイル名を指定）

### 詳細
引数\`x2\`, \`y2\`の意味は\`type\`の値によって変わります。
\`type\`が\`line\`, \`triangle\`, \`mount\`の場合は線分の右下の座標です。
\`rect\`, \`pattern\`および画像の場合は矩形の大きさです。
\`circie\`の場合は\`x2\`が円の半径となり、\`y2\`は無視されます。
その他の床は大きさが固定となり、\`x2\`も\`y2\`も無視されます。

### 戻り値
- 床ID（成功時）、失敗した場合は-1

### 使用例
\`\`\`javascript
// 位置(100, 200)に幅150、高さ30の矩形の床を作成
var yukaID = ap.newYuka(100, 200, 150, 30, "rect");
// 位置(50, 100)に半径40の円形の床を作成
var circleID = ap.newYuka(50, 100, 40, 0, "circle");
\`\`\``);

    methodDocumentations.set('setYukaPosition', `## 床の位置変更

newYukaで作った床の位置と大きさを変更します。

### パラメータ
- \`id\`: 床ID
- \`x\`: 新しいX座標
- \`y\`: 新しいY座標
- \`x2\`: [省略可] 新しいX方向サイズまたは右下座標
- \`y2\`: [省略可] 新しいY方向サイズまたは右下座標

### 詳細
引数が3つの場合は位置のみ、5つの場合は床の大きさも変更します。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 床の位置だけを変更
ap.setYukaPosition(yukaID, 150, 250);
// 床の位置と大きさを変更
ap.setYukaPosition(yukaID, 150, 250, 200, 40);
\`\`\``);

    methodDocumentations.set('setYukaType', `## 床の当たり判定変更

newYukaで作った床の当たり判定を変更します。

### パラメータ
- \`id\`: 床ID
- \`type\`: タイプ値
  - \`1\`: 当たり判定あり（デフォルト）
  - \`2\`: 当たり判定なし

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 床の当たり判定をなくす
ap.setYukaType(yukaID, 2);
// 床の当たり判定を復活させる
ap.setYukaType(yukaID, 1);
\`\`\``);

    methodDocumentations.set('disposeYuka', `## 床削除

newYukaで作った床を消去します。

### パラメータ
- \`id\`: 床ID

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 床を削除
ap.disposeYuka(yukaID);
\`\`\``);

    methodDocumentations.set('setYukaColor', `## 床の色変更

newYukaで作った床の色を設定します。

### パラメータ
- \`id\`: 床ID
- \`r\`: 赤成分（0～255）
- \`g\`: 緑成分（0～255）
- \`b\`: 青成分（0～255）
- \`alpha\`: 不透明度（0～255）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 床を半透明の赤色に設定
ap.setYukaColor(yukaID, 255, 0, 0, 128);
\`\`\``);

    methodDocumentations.set('setYukaPattern', `## 床のパターン変更

newYukaで作った床のパターン画像を設定します。
床タイプが"pattern"の場合に有効です。

### パラメータ
- \`id\`: 床ID
- \`pattern\`: パターンコード
- \`direction\`: 向き（0:そのまま、1:左右反転）

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 床のパターンを設定（コード100）
ap.setYukaPattern(yukaID, 100, 0);
\`\`\``);

    methodDocumentations.set('setYukaImage', `## 床の画像変更

newYukaで作った床の画像を変更します。

### パラメータ
- \`id\`: 床ID
- \`image\`: 画像ファイル名またはImageオブジェクト

### 詳細
床タイプが"rect"、"pattern"および画像ファイル名で作成した床に対して有効です。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 床の画像をファイル名で指定
ap.setYukaImage(yukaID, "block.gif");
// 床の画像をImageオブジェクトで指定
var img = ap.newImageOnLoad("block2.gif");
ap.setYukaImage(yukaID, img);
\`\`\``);

    methodDocumentations.set('isRideYuka', `## 床に乗っているか判定

主人公が指定した床に乗っているかどうかを判定します。

### パラメータ
- \`id\`: 床ID

### 戻り値
- \`1\`: 乗っている
- \`0\`: 乗っていない
- \`-1\`: その他のエラー

### 使用例
\`\`\`javascript
// 主人公が床に乗っているか判定
if (ap.isRideYuka(yukaID) === 1) {
  // 床に乗っている場合の処理
}
\`\`\``);
    
    methodDocumentations.set('showRect', `## 矩形表示

指定された矩形を一定時間表示します。

### パラメータ
- \`time\`: 表示時間（フレーム数）
- \`x\`: 左上X座標
- \`y\`: 左上Y座標
- \`width\`: 横幅
- \`height\`: 高さ

### 詳細
setPenColorで設定した色で表示されます。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 赤色の矩形を2秒間表示
ap.setPenColor(255, 0, 0);
ap.showRect(120, 100, 100, 200, 150);
\`\`\``);
    
    methodDocumentations.set('showOval', `## 楕円表示

指定された矩形領域に収まる楕円を一定時間表示します。

### パラメータ
- \`time\`: 表示時間（フレーム数）
- \`x\`: 左上X座標
- \`y\`: 左上Y座標
- \`width\`: 横幅
- \`height\`: 高さ

### 詳細
setPenColorで設定した色で表示されます。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 青色の円を2秒間表示
ap.setPenColor(0, 0, 255);
ap.showOval(120, 200, 200, 100, 100);
\`\`\``);
    
    methodDocumentations.set('showGauge', `## ゲージ表示

長さvalueのゲージを表示します。

### パラメータ
- \`value\`: ゲージの長さ（0～200）
- \`string\`: ゲージの上に表示する文字列

### 詳細
ゲージの長さは0～200の範囲で指定します。200が最大（100%）となります。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// 長さ50のゲージを「エネルギー」という名前で表示
ap.showGauge(50, "エネルギー");

// ボスのHPをゲージで表示（HP最大値に対する現在値の割合）
ap.showGauge(Math.floor(boss_hp*200/boss_hp_max), "ボスのＨＰ  " + boss_hp + " / " + boss_hp_max);
\`\`\``)
    
    methodDocumentations.set('hideGauge', `## ゲージ非表示

ゲージを非表示にします。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// ゲージを非表示にする
ap.hideGauge();
\`\`\``);
    
    // 以下、HTMLドキュメントから抽出した未実装のメソッド
    methodDocumentations.set('loadTextFile', `## テキストファイル読み込み

テキストファイルを読み込み、内容を文字列で返します。

### パラメータ
- \`filename\`: テキストファイル名

### 詳細
この機能は環境によっては正常に動作しない場合があります。

### 戻り値
- ファイル内容（文字列）、エラー時はnull

### 使用例
\`\`\`javascript
// テキストファイルを読み込む
var content = ap.loadTextFile("config.txt");
\`\`\``);
    
    methodDocumentations.set('setHTMLText', `## HTMLテキスト設定

HTMLテキストを指定して解析し、パラメータを一括設定します。

### パラメータ
- \`html\`: HTMLテキスト

### 詳細
この機能は環境によっては正常に動作しない場合があります。
Canvas版では代わりにsetParamValue(name, value)を使用することをお勧めします。

### 戻り値
- 成功すればtrue、失敗すればfalse

### 使用例
\`\`\`javascript
// パラメータを一括設定（現在のCanvas版では推奨されません）
var html = '<param name="time_max" value="300">' +
           '<param name="j_tail_type" value="3">' +
           '<param name="grenade_type" value="1">';
ap.setHTMLText(html);
\`\`\``);

    // 追加するメソッドドキュメント
    methodDocumentations.set('getPartsDefinition', `## パーツ定義オブジェクト取得

指定したパーツIDの定義オブジェクトを返します。

### パラメータ
- \`code\`: パーツID（数値：ネイティブパーツ、文字列：カスタムパーツ）

### 戻り値
- パーツの定義オブジェクト
  - 指定したパーツが存在しない場合はnull

### 使用例
\`\`\`javascript
// ネイティブパーツ（敵コード5000+10=5010：チコリン）の定義を取得
var chikorin = ap.getPartsDefinition(5010);
console.log(chikorin);

// カスタムパーツの定義を取得（カスタムパーツIDが"my_enemy"の場合）
var customParts = ap.getPartsDefinition("my_enemy");
console.log(customParts);
\`\`\``);
}