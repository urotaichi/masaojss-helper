/**
 * MasaoJSS API型定義
 * Canvas正男で使用できるJavaScriptインターフェースの型定義
 */

/**
 * 色を表現するクラス
 */
declare class Color {
    /**
     * 赤色の値 (0-255)
     */
    r: number;
    
    /**
     * 緑色の値 (0-255)
     */
    g: number;
    
    /**
     * 青色の値 (0-255)
     */
    b: number;
    
    /**
     * アルファ値 (0-255)
     */
    a: number;

    /**
     * 色を作成する
     * @param r R(0-255)
     * @param g G(0-255)
     * @param b B(0-255)
     * @param a アルファ値(0-255)、省略時は255（完全不透明）
     */
    constructor(r: number, g: number, b: number, a?: number);

    /**
     * 赤色の値を取得する
     * @returns 赤色の値 (0-255)
     */
    getRed(): number;

    /**
     * 緑色の値を取得する
     * @returns 緑色の値 (0-255)
     */
    getGreen(): number;

    /**
     * 青色の値を取得する
     * @returns 青色の値 (0-255)
     */
    getBlue(): number;

    /**
     * アルファ値を取得する
     * @returns アルファ値 (0-255)
     */
    getAlpha(): number;

    static white: Color;
    static WHITE: Color;
    static lightGray: Color;
    static LIGHT_GRAY: Color;
    static gray: Color;
    static GRAY: Color;
    static darkGray: Color;
    static DARK_GRAY: Color;
    static black: Color;
    static BLACK: Color;
    static red: Color;
    static RED: Color;
    static pink: Color;
    static PINK: Color;
    static orange: Color;
    static ORANGE: Color;
    static yellow: Color;
    static YELLOW: Color;
    static green: Color;
    static GREEN: Color;
    static magenta: Color;
    static MAGENTA: Color;
    static cyan: Color;
    static CYAN: Color;
    static blue: Color;
    static BLUE: Color;
}

/**
 * フォントを表現するクラス
 */
declare class Font {
    /**
     * フォント名
     */
    _name: string;
    
    /**
     * フォントスタイル
     */
    _style: number;
    
    /**
     * フォントサイズ
     */
    _size: number;

    /**
     * フォントを作成する
     * @param name フォント名
     * @param style フォントのスタイル指定 (0:通常 1:太字 2:イタリック)
     * @param size フォントサイズ
     */
    constructor(name: string, style: number, size: number);

    static DIALOG: string;
    static DIALOG_INPUT: string;
    static MONOSPACED: string;
    static SANS_SERIF: string;
    static SERIF: string;

    static PLAIN: number;
    static BOLD: number;
    static ITALIC: number;

    static SERIF_str: string;
    static SANS_SERIF_str: string;
    static MONOSPACED_str: string;
    static DIALOG_str: string;
}

/**
 * 画像オブジェクトのインターフェース
 */
declare interface ImageBuff {
    /**
     * 内部で使用されるCanvas要素または画像要素
     */
    _dat: HTMLCanvasElement | HTMLImageElement | null;
    
    /**
     * 画像の幅
     */
    _width: number;
    
    /**
     * 画像の高さ
     */
    _height: number;
    
    /**
     * 画像の読み込みが完了したかどうか
     */
    _loaded: boolean;
    
    /**
     * 画像の読み込み時にエラーが発生したかどうか
     */
    _error: boolean;
    
    /**
     * 画像に関連付けられたGraphicsオブジェクト
     */
    _g: Graphics | null;
    
    /**
     * 画像に関連付けられたGraphicsBkオブジェクト
     */
    _g_bk: GraphicsBk | null;

    /**
     * 画像を読み込む
     * @param url 読み込む画像のパス(相対パス、URLともに可)
     */
    load(url: string): void;
    
    /**
     * 画像のロード完了時に行われる処理
     */
    onload(): void;
    
    /**
     * 画像のロード時にエラーが発生した場合に行われる処理
     */
    onerror(): void;
    
    /**
     * 画像バッファを編集するためのGraphicsクラスを返す
     * Canvasモードでないと使えない
     * @returns Graphicsオブジェクト
     */
    getGraphics(): Graphics | null;
    
    /**
     * getGraphicsの別名
     * @returns Graphicsオブジェクト
     */
    createGraphics(): Graphics | null;
    
    /**
     * JavaのGraphicsと互換を保ったGraphicsBkオブジェクトを作成
     * JS拡張との互換性のため
     * @returns GraphicsBkオブジェクト
     */
    getGraphicsBk(): GraphicsBk | null;
}

/**
 * 画像編集クラス
 */
declare class Graphics {
    /**
     * HTML5 Canvasのグラフィックスコンテキスト
     */
    _ctx: CanvasRenderingContext2D | null;
    
    /**
     * 現在の描画色
     */
    _color: Color;
    
    /**
     * 現在のフォント
     */
    _font: Font;

    /**
     * 画像編集クラスを作成する
     * @param img もととなるImageBuffオブジェクト
     */
    constructor(img: ImageBuff);

    /**
     * 線分を描画する
     * @param x1 始点のX座標
     * @param y1 始点のY座標
     * @param x2 終点のX座標
     * @param y2 終点のY座標
     * @returns 描画に成功したかどうか
     */
    drawLine(x1: number, y1: number, x2: number, y2: number): boolean;

    /**
     * 画像を描画する
     * @param img ImageBuffオブジェクト
     * @param dx 描画先X座標
     * @param dy 描画先Y座標
     * @returns 描画に成功したかどうか
     */
    drawImage(img: ImageBuff, dx: number, dy: number): boolean;

    /**
     * 画像を描画する
     * @param img ImageBuffオブジェクト
     * @param dx 描画先X座標
     * @param dy 描画先Y座標
     * @param dw 描画される横方向の幅
     * @param dh 描画される縦方向の高さ
     * @returns 描画に成功したかどうか
     */
    drawImage(img: ImageBuff, dx: number, dy: number, dw: number, dh: number): boolean;

    /**
     * 画像を描画する
     * @param img ImageBuffオブジェクト
     * @param sx imgから切り出すX座標
     * @param sy imgから切り出すY座標
     * @param sw 切り出してくる横方向の幅
     * @param sh 切り出してくる縦方向の高さ
     * @param dx 描画先X座標
     * @param dy 描画先Y座標
     * @param dw 描画される横方向の幅
     * @param dh 描画される縦方向の高さ
     * @returns 描画に成功したかどうか
     */
    drawImage(img: ImageBuff, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): boolean;

    /**
     * 矩形を描画する
     * @param x X座標
     * @param y Y座標
     * @param w 横幅
     * @param h 高さ
     * @returns 描画に成功したかどうか
     */
    drawRect(x: number, y: number, w: number, h: number): boolean;

    /**
     * 矩形を塗りつぶし描画する
     * @param x X座標
     * @param y Y座標
     * @param w 横幅
     * @param h 高さ
     * @returns 描画に成功したかどうか
     */
    fillRect(x: number, y: number, w: number, h: number): boolean;

    /**
     * 多角形を描画する
     * @param xa 頂点のX座標を格納した配列
     * @param ya 頂点のY座標を格納した配列
     * @param pn 多角形の頂点数
     * @returns 描画に成功したかどうか
     */
    drawPolygon(xa: number[], ya: number[], pn: number): boolean;

    /**
     * 多角形を塗りつぶし描画する
     * @param xa 頂点のX座標を格納した配列
     * @param ya 頂点のY座標を格納した配列
     * @param pn 多角形の頂点数
     * @returns 描画に成功したかどうか
     */
    fillPolygon(xa: number[], ya: number[], pn: number): boolean;

    /**
     * 楕円を描画する
     * @param x X座標
     * @param y Y座標
     * @param w 横幅
     * @param h 高さ
     * @returns 描画に成功したかどうか
     */
    drawOval(x: number, y: number, w: number, h: number): boolean;

    /**
     * 楕円を塗りつぶし描画する
     * @param x X座標
     * @param y Y座標
     * @param w 横幅
     * @param h 高さ
     * @returns 描画に成功したかどうか
     */
    fillOval(x: number, y: number, w: number, h: number): boolean;

    /**
     * 円弧を描画する
     * @param x X座標
     * @param y Y座標
     * @param w 横幅
     * @param h 高さ
     * @param angle 描画を開始するラジアン角
     * @param theta 始点から終点までのラジアン角
     * @returns 描画に成功したかどうか
     */
    drawArc(x: number, y: number, w: number, h: number, angle: number, theta: number): boolean;

    /**
     * 円弧を塗りつぶし描画する
     * @param x X座標
     * @param y Y座標
     * @param w 横幅
     * @param h 高さ
     * @param angle 描画を開始するラジアン角
     * @param theta 始点から終点までのラジアン角
     * @returns 描画に成功したかどうか
     */
    fillArc(x: number, y: number, w: number, h: number, angle: number, theta: number): boolean;

    /**
     * 広域アルファ値を設定する
     * @param a 0から255までのアルファ値
     * @returns 設定に成功したかどうか
     */
    setGlobalAlpha(a: number): boolean;

    /**
     * 描画色をColorオブジェクトで設定する
     * @param color 描画色
     * @returns 設定に成功したかどうか
     */
    setColor(color: Color): boolean;

    /**
     * 描画文字列フォントを設定する
     * @param font 設定するFontオブジェクト
     * @returns 設定に成功したかどうか
     */
    setFont(font: Font): boolean;

    /**
     * 文字列を描画する
     * @param str 描画する文字列
     * @param x X座標
     * @param y Y座標
     * @returns 描画に成功したかどうか
     */
    drawString(str: string, x: number, y: number): boolean;

    /**
     * 座標軸を移動する
     * @param x X方向の移動距離
     * @param y Y方向の移動距離
     * @returns 成功したかどうか
     */
    translate(x: number, y: number): boolean;

    /**
     * 座標軸を回転させる
     * @param angle 回転させるラジアン角
     * @param x 回転の中心となるX座標（省略可）
     * @param y 回転の中心となるY座標（省略可）
     * @returns 成功したかどうか
     */
    rotate(angle: number, x?: number, y?: number): boolean;

    /**
     * 座標軸を拡大縮小する
     * @param x X方向の拡大倍率
     * @param y Y方向の拡大倍率
     * @returns 成功したかどうか
     */
    scale(x: number, y: number): boolean;

    /**
     * 円形のクリッピング領域を設定する
     * @param pattern "ellipse" - 円弧パターン
     * @param x X座標
     * @param y Y座標
     * @param w 横幅
     * @param h 高さ
     * @returns 設定に成功したかどうか
     */
    setClip(pattern: "ellipse", x: number, y: number, w: number, h: number): boolean;

    /**
     * 矩形のクリッピング領域を設定する
     * @param pattern "rect" - 矩形パターン
     * @param x X座標
     * @param y Y座標
     * @param w 横幅
     * @param h 高さ
     * @returns 設定に成功したかどうか
     */
    setClip(pattern: "rect", x: number, y: number, w: number, h: number): boolean;

    /**
     * 多角形のクリッピング領域を設定する
     * @param pattern "polygon", xa: number[], ya: number[], pn: number
     * @param xa 頂点のX座標を格納した配列
     * @param ya 頂点のY座標を格納した配列
     * @param pn 多角形の頂点数
     * @returns 設定に成功したかどうか
     */
    setClip(pattern: "polygon", xa: number[], ya: number[], pn: number): boolean;

    /**
     * 自身の画像の一部を別の座標にコピーする
     * @param x 切り出すX座標
     * @param y 切り出すY座標
     * @param width 切り出す横幅
     * @param height 切り出す高さ
     * @param dx X方向の移動距離
     * @param dy Y方向の移動距離
     * @returns 成功したかどうか
     */
    copyArea(x: number, y: number, width: number, height: number, dx: number, dy: number): boolean;

    /**
     * 描画等で加えた変更を破棄して元の画像に戻す
     */
    dispose(): void;
}

/**
 * JavaのGraphicsとの後方互換性を保つためのクラス
 */
declare class GraphicsBk extends Graphics {
    /**
     * JavaのGraphicsとの後方互換性を保つためのクラス（Graphicsクラスを継承）
     * @param img もととなるImageBuffオブジェクト
     */
    constructor(img: ImageBuff);

    /**
     * 画像を描画する（Graphicsクラスとのインターフェースが異なる）
     * @param img ImageBuffオブジェクト
     * @param dx1 描画先矩形の1番目の隅のX座標
     * @param dy1 描画先矩形の1番目の隅のY座標
     * @param dx2 描画先矩形の2番目の隅のX座標
     * @param dy2 描画先矩形の2番目の隅のY座標
     * @param sx1 ソース画像矩形の1番目の隅のX座標
     * @param sy1 ソース画像矩形の1番目の隅のY座標
     * @param sx2 ソース画像矩形の2番目の隅のX座標
     * @param sy2 ソース画像矩形の2番目の隅のY座標
     * @returns 描画に成功したかどうか
     */
    drawImage(img: ImageBuff, dx1: number, dy1: number, dx2: number, dy2: number, sx1: number, sy1: number, sx2: number, sy2: number): boolean;

    // GraphicsクラスのdrawImageオーバーロードを継承
    drawImage(img: ImageBuff, dx: number, dy: number): boolean;
    drawImage(img: ImageBuff, dx: number, dy: number, dw: number, dh: number): boolean;
}

declare interface CanvasMasaoGraphics {
    /**
     * 点(x1, y1)と点(x2, y2)を結ぶ線分を描画します。
     */
    drawLine(x1: number, y1: number, x2: number, y2: number): boolean;
    
    /**
     * 指定座標に画像オブジェクトの画像を描画します。
     */
    drawImage(image: ImageBuff, x: number, y: number): boolean;
    drawImage(image: ImageBuff, x: number, y: number, width: number, height: number): boolean;
    drawImage(image: ImageBuff, sourceX: number, sourceY: number, sourceWidth: number, sourceHeight: number, drawX: number, drawY: number, drawWidth: number, drawHeight: number): boolean;
    
    /**
     * 塗りつぶさない矩形を現在の色で描画します。
     */
    drawRect(x: number, y: number, width: number, height: number): boolean;
    
    /**
     * 塗りつぶした矩形を現在の色で描画します。
     */
    fillRect(x: number, y: number, width: number, height: number): boolean;
    
    /**
     * 指定した矩形に収まる、塗りつぶさない楕円を現在の色で描画します。
     */
    drawOval(x: number, y: number, width: number, height: number): boolean;
    
    /**
     * 指定した矩形に収まる、塗りつぶした楕円を現在の色で描画します。
     */
    fillOval(x: number, y: number, width: number, height: number): boolean;
    
    /**
     * 指定した矩形に収まる、塗りつぶさない円弧を現在の色で描画します。
     * 円弧の開始角度angleからtheta回転した角度までが描画対象です。単位はラジアンです。
     */
    drawArc(x: number, y: number, width: number, height: number, angle: number, theta: number): boolean;
    
    /**
     * 指定した矩形に収まる、塗りつぶした円弧を現在の色で描画します。
     * 円弧の開始角度angleからtheta回転した角度までが描画対象です。単位はラジアンです。
     */
    fillArc(x: number, y: number, width: number, height: number, angle: number, theta: number): boolean;
    
    /**
     * X座標（xa）とY座標（ya）の配列から、頂点を結んで、塗りつぶさない多角形を現在の色で描画します。
     * numは頂点の数です。
     */
    drawPolygon(xa: number[], ya: number[], num: number): boolean;
    
    /**
     * X座標（xa）とY座標（ya）の配列から、頂点を結んで、塗りつぶす多角形を現在の色で描画します。
     * numは頂点の数です。
     */
    fillPolygon(xa: number[], ya: number[], num: number): boolean;
    
    /**
     * 指定座標に文字列を描画します。
     */
    drawString(str: string, x: number, y: number): boolean;
    
    /**
     * 描画文字列のフォントをフォントオブジェクトで設定します。
     * フォントオブジェクトはap.newFont()メソッドで取得してください。
     */
    setFont(font: any): boolean;
    
    /**
     * オフスクリーンに使用されているグラフィックスコンテキストを取得します。
     * HTML5 Canvasのコンテキストです。
     */
    _ctx: CanvasRenderingContext2D;
}

declare interface MasaoJSS {
    // ゲームシステム
    /**
     * 現在のゲームモードを返します。コールバック関数の第２引数にセットされた値と同じ値が返ります。
     */
    getMode(): number;
    
    /**
     * 現在のハイスコアを返します。
     */
    getHighscore(): number;
    
    /**
     * 現在のスコアを返します。
     */
    getScore(): number;
    
    /**
     * 引数scoreの値だけスコアを増加します。引数に負の値が代入されると失敗します。
     */
    addScore(score: number): boolean;
    
    /**
     * スコアをscoreに設定します。
     */
    setScore(score: number): boolean;
    
    /**
     * パラメータnameの値を取得します。
     */
    getValue(name: string): string;
    
    /**
     * getValue(name)と同じです。
     */
    getParamValue(name: string): string;
    
    /**
     * パラメータnameの値をvalueに設定します（値によっては再起動しないと動作しないことがあります）。
     */
    setValue(name: string, value: string): boolean;
    
    /**
     * setValue(name, value)と同じです。
     */
    setParamValue(name: string, value: string): boolean;
    
    /**
     * 内部メッセージを取得します。
     */
    getJSMes(): number;
    
    /**
     * 内部メッセージを設定します。
     */
    setJSMes(n: number): boolean;
    
    /**
     * 現在のパラメータを保持した状態でゲームを再起動します。
     */
    restart(): boolean;
    
    /**
     * ユーザーによるゲーム開始をできないようにします。
     */
    setTitleLock(): boolean;
    
    /**
     * タイトル画面にいる場合、ゲームを開始します。
     */
    startGame(): boolean;
    
    /**
     * 指定モードmodeでの待ち時間をtフレームに設定します。
     */
    setModeWait(mode: number, t: number): boolean;
    
    /**
     * 左上端の座標(x1, y1)、右下端の座標(x2, y2)を指定して、その範囲にあるコインの枚数を取得します。
     * 引数を省略した場合はマップ全体にあるコインの枚数を取得します。
     */
    getCoinCount(x1?: number, y1?: number, x2?: number, y2?: number): number;
    
    /**
     * 現在の制限時間（画面に表示している値）を取得します。
     */
    getTimeLimit(): number;
    
    /**
     * 現在の制限時間（画面に表示される値）をtimeに設定します。
     */
    setTimeLimit(time: number): boolean;
    
    /**
     * 残り人数（ミスできる回数）をnumに設定します。
     */
    setMyLeft(num: number): boolean;
    
    /**
     * 残り人数を取得します。
     */
    getMyLeft(): number;
    
    // スクロール制御
    /**
     * 現在の画面左上端のX座標を、ブロック単位で取得します。
     */
    getViewX(): number;
    
    /**
     * 現在の画面左上端のY座標を、ブロック単位で取得します。
     */
    getViewY(): number;
    
    /**
     * 現在の画面左上端のX座標を、ピクセル単位で取得します。
     * コールバック関数の第３引数にセットされた値と同じ値が返ります。
     */
    getViewXReal(): number;
    
    /**
     * 現在の画面左上端のY座標を、ピクセル単位で取得します。
     * コールバック関数の第４引数にセットされた値と同じ値が返ります。
     */
    getViewYReal(): number;
    
    /**
     * 画面X座標がxに来たらスクロールをロックします。
     */
    setScrollLock(x: number): boolean;
    
    /**
     * スクロール可能な範囲(x1, y1)～(x2, y2)をブロック単位で設定します。
     */
    setScrollArea(x1: number, y1: number, x2: number, y2: number): boolean;
    
    /**
     * スクロール可能な範囲(x1, y1)～(x2, y2)をピクセル単位で設定します。
     */
    setScrollAreaReal(x1: number, y1: number, x2: number, y2: number): boolean;
    
    // 画像読み込み・チップ生成
    /**
     * filenameで指定した画像ファイルを読み込みます。そして、読み込んだ画像のオブジェクトを返します。
     * このオブジェクトは、一部のメソッドの引数として使用することができます。
     */
    newImageOnLoad(filename: string): ImageBuff;
    
    /**
     * 画像ファイルfilenameを読み込んでチップ画像に分割します。
     * widthは１チップの幅、heightは高さ、nxは横に並ぶチップ数、nyは縦に並ぶチップ数です。
     * 戻り値はチップ画像へのIDです。
     */
    newChipImage(filename: string, width: number, height: number, nx: number, ny: number): number;
    
    /**
     * chipIDのチップの、左右反転、上下反転、180度回転した画像を生成します。
     */
    makeReverseChipImage(chipID: number): boolean;
    
    /**
     * chipIDの部分チップ画像を取得します。
     * indexは分割画像の、最初を0番目としたインデックス、nは画像の反転を表し、
     * 0は元画像と同じ、1は左右反転、2は上下反転、3は180度回転した画像です。
     */
    getChipImage(chipID: number, index?: number, n?: number): ImageBuff;
    
    /**
     * 生成したチップ画像を削除します。
     */
    disposeChipImage(chipID: number): boolean;
    
    // 基本表示設定
    /**
     * 背景画像を変更します。
     */
    setBackImage(filename: string): boolean;
    
    /**
     * セカンド画像を変更します。
     */
    setSecondImage(filename: string): boolean;
    
    /**
     * ゲーム中で使われている画像を設定します。
     */
    setSystemImage(n: number, filename: string): boolean;
    
    /**
     * MasaoJSS側が描画するオブジェクトを制限します。
     * nに1を指定するとすべての物体を描画します。また、2を指定すると主人公を、
     * 3を指定すると主人公と敵を、4を指定するとすべての物体（得点の文字なども含めたすべて）を描画しなくなります。
     */
    setSystemDrawMode(n: number): boolean;
    
    /**
     * JavaScript側から、物体を描画させるよう指示します。
     * nは描画するオブジェクトの種類で、1は主人公、2は敵、3は得点と一言メッセージ、
     * 4は背景画像/背景色、5は背景レイヤーのマップ、6は標準レイヤーのマップ、7は動く床などの仕掛けです。
     */
    drawSystemObject(n: number): boolean;
    
    /**
     * 指定したパターンコードdestCodeの画像に、他のパターンコードnewCodeの画像を上書きコピーします。
     * この設定はページを再読み込みするまで有効なので注意してください。
     */
    setSystemPattern(destCode: number, newCode: number): boolean;
    
    /**
     * 指定したパターンコードdestCodeの画像に、画像オブジェクトimageの画像を上書きコピーします。
     * nは反転情報で、0でそのまま、1で左右反転します。
     * この設定はページを再読み込みするまで有効なので注意してください。
     */
    setSystemPatternImage(destCode: number, n: number, image: ImageBuff): boolean;
    
    // 主人公の位置・動き
    /**
     * 主人公のX座標（ブロック単位）を取得します。
     */
    getMyX(): number;
    
    /**
     * 主人公のY座標（ブロック単位）を取得します。
     */
    getMyY(): number;
    
    /**
     * 主人公の座標をブロック単位で設定します。
     */
    setMyPosition(x: number, y: number): boolean;
    
    /**
     * 主人公のX座標（ピクセル単位）を取得します。
     */
    getMyXReal(): number;
    
    /**
     * 主人公のY座標（ピクセル単位）を取得します。
     */
    getMyYReal(): number;
    
    /**
     * 主人公のX座標（ピクセル単位）を設定します。
     */
    setMyXReal(x: number): boolean;
    
    /**
     * 主人公のY座標（ピクセル単位）を設定します。
     */
    setMyYReal(y: number): boolean;
    
    /**
     * 主人公のX方向の速度を取得します。
     */
    getMyVX(): number;
    
    /**
     * 主人公のY方向の速度を取得します。
     */
    getMyVY(): number;
    
    /**
     * 主人公の向きを取得します。0は左向き、1は右向きです。
     */
    getMyDirection(): number;
    
    /**
     * 主人公の向きを設定します。
     * @param direction 向きの値（0: 左向き、1: 右向き）
     * @returns 成功すればtrue、失敗すればfalse
     */
    setMyDirection(direction: number): boolean;
    
    /**
     * 主人公のX方向の速度を設定します。
     */
    setMyVX(vx: number): boolean;

    /**
     * 主人公のY方向の速度を設定します。
     */
    setMyVY(vy: number): boolean;
    
    /**
     * 主人公の４方向・８方向移動の速さを設定します。
     */
    setMySpeed(speed: number): boolean;
    
    // 主人公の状態・動作・特技
    /**
     * 主人公がミスをします。nには動きを設定します。
     */
    setMyMiss(n: number): boolean;
    
    /**
     * 主人公が踏む動作をします。nには動きを設定します。
     */
    setMyPress(n: number): boolean;
    
    /**
     * 主人公のHPを表示します。nameにはHPの名前を設定します。
     */
    showMyHP(name: string): boolean;
    
    /**
     * ゲーム開始時の主人公のHPを設定します。
     */
    setMyMaxHP(hp: number): boolean;
    
    /**
     * 現在の主人公のHPを設定します。0を指定するとHPは0になりますが、ミスにはなりません。
     */
    setMyHP(hp: number): boolean;
    
    /**
     * 現在の主人公のHPを取得します。
     */
    getMyHP(): number;
    
    /**
     * 主人公にdamageダメージを与えます。ただし、ダメージ直後の点滅状態ではダメージを与えられません。
     * HPが0以下になるとHPは0になりますが、ミスにはなりません。
     */
    setMyHPDamage(damage: number): boolean;
    
    /**
     * 主人公をtimeフレームの間停止させます。codeには停止中のパターンコードを指定します
     * directionは、0で左向き、1で右向きにします。
     */
    setMyWait(time: number, code: number, direction: number): boolean;
    
    /**
     * ステージクリアします。
     */
    setStageClear(): boolean;
    
    /**
     * 主人公が地面に乗っているか判定します。乗っているならば1を返します。
     */
    isRideGround(): number;
    
    /**
     * 主人公に特技nを付加します。
     */
    addMyTokugi(n: number): boolean;
    
    /**
     * 主人公の特技nを無効にします。
     */
    removeMyTokugi(n: number): boolean;
    
    /**
     * 主人公が敵を踏めるかを設定します。
     * nに1を代入すると踏める設定、2を代入すると踏めない設定、3を代入すると当たり判定をなくす設定になります。
     */
    setEnemyPress(n: number): boolean;
    
    // 主人公の装備
    /**
     * 主人公のしっぽ装備を切り替えます。
     * flagに1を代入すると装備し、0を代入すると外します。
     */
    equipTail(flag: number): boolean;
    
    /**
     * 主人公のファイヤーボール装備を切り替えます。
     * flagに1を代入すると装備し、0を代入すると外します。
     */
    equipFire(flag?: number): boolean;
    
    /**
     * 水平に飛ぶタイプのファイヤーボールの射程を設定します。
     */
    setFireRange(range: number): boolean;
    
    /**
     * timeフレームの間持続するバリアを装備します。
     */
    equipBarrier(time: number): boolean;
    
    /**
     * バリアの残り時間を取得します。
     */
    getBarrierTime(): number;
    
    /**
     * ジェット燃料量をvalueに設定します。
     */
    equipJet(value: number): boolean;
    
    /**
     * equipJet(value)と同じです。
     */
    setJetFuel(value: number): boolean;
    
    /**
     * グレネード所持数をnumに設定します。
     */
    equipGrenade(num: number): boolean;
    
    /**
     * equipGrenade(num)と同じです。
     */
    setGrenadeCount(num: number): boolean;
    
    /**
     * グレネードの所持数を取得します。
     */
    getGrenadeCount(): number;
    
    // 敵と攻撃
    /**
     * 敵（の攻撃）を座標(x, y)（ブロック単位）に配置します。
     * codeは敵（の攻撃）のコードを指定します。
     */
    setEnemy(code: number, x: number, y: number): boolean;
    
    /**
     * マップに配置直後の敵の数を取得します。
     */
    getEnemyTotal(): number;
    
    /**
     * 指定された矩形（ピクセル単位）の範囲内にいる敵を倒します。
     * 戻り値は、倒した敵の数です。
     */
    destroyEnemy(x: number, y: number, width: number, height: number): number;
    
    // ボス
    /**
     * ボスのX座標を取得します。
     */
    getBossXReal(): number;
    
    /**
     * ボスのY座標を取得します。
     */
    getBossYReal(): number;
    
    /**
     * ボスのHPを取得します。
     */
    getBossHP(): number;
    
    /**
     * ボスの向きを取得します。0は左向き、1は右向きです。
     */
    getBossDirection(): number;
    
    /**
     * ボスが攻撃中ならば1を返します。
     */
    isBossAttackMode(): number;
    
    /**
     * ボスのX座標を設定します。
     */
    setBossXReal(x: number): boolean;
    
    /**
     * ボスのY座標を設定します。
     */
    setBossYReal(y: number): boolean;
    
    /**
     * ボスの画像をimageオブジェクトに設定します。
     * dx、dyはそれぞれX座標補正値、Y座標補正値です。
     */
    setBossObjectImage(image: ImageBuff, dx: number, dy: number): boolean;
    
    // 各種キャラクターのパラメータ
    /**
     * 主人公の状態を取得します。
     */
    getMyObjectCondition(): number;
    
    /**
     * 主人公のアニメーションカウンタを取得します。
     */
    getMyObjectAC(): number;
    
    /**
     * 主人公のパターンコードを取得します。
     */
    getMyObjectPattern(): number;
    
    /**
     * ４方向移動の主人公の向きを取得します。
     */
    getMyDirection4way(): number;
    
    /**
     * 主人公の画像をパターンコードで設定します。
     */
    setMyObjectPattern(code: number): boolean;
    
    /**
     * 主人公の画像を画像オブジェクトで設定します。
     * 設定を解除する場合はimageにnullを代入してください。
     * dx、dyはそれぞれX座標補正値、Y座標補正値です。
     */
    setMyObjectImage(image: ImageBuff | null, dx: number, dy: number): boolean;
    
    /**
     * 指定IDの敵の画像をパターンコードで設定します。
     */
    setEnemyObjectPattern(enemyID: number, code: number): boolean;
    
    /**
     * 指定IDの敵の状態を取得します。
     */
    getEnemyObjectCondition(enemyID: number): number;
    
    /**
     * 指定IDの敵のパターンコードを取得します。
     */
    getEnemyObjectPattern(enemyID: number): number;
    
    /**
     * 指定IDの敵のX座標を取得します。
     */
    getEnemyObjectX(enemyID: number): number;
    
    /**
     * 指定IDの敵のY座標を取得します。
     */
    getEnemyObjectY(enemyID: number): number;
    
    /**
     * マップに配置直後の敵の数を取得します。
     */
    getEnemyObjectLength(): number;
    
    /**
     * 指定IDの敵の向きを取得します。
     */
    getEnemyObjectDirection(enemyID: number): number;
    
    /**
     * 指定IDの敵の画像を画像オブジェクトで設定します。
     * dx、dyはそれぞれX座標補正値、Y座標補正値です。
     */
    setEnemyObjectImage(enemyID: number, image: ImageBuff, dx: number, dy: number): boolean;
    
    /**
     * 指定IDの敵のアニメーションカウンタを取得します。
     */
    getEnemyAC(enemyID: number): number;
    
    // ファイヤーボール・しっぽの当たり判定
    /**
     * 指定された矩形（ピクセル単位）にファイヤーボール、グレネード、プラズマ砲の当たり判定を作成します。
     * ファイヤーボールが当たると1、グレネード、プラズマ砲が当たると10、これらが同時に当たると数値を合計し、その値を返します。
     */
    attackFire(x: number, y: number, width: number, height: number): number;
    
    /**
     * 指定された矩形（ピクセル単位）にしっぽ攻撃の当たり判定を作成します。
     * 命中すると1、さもなくば0を返します。
     */
    attackTail(x: number, y: number, width: number, height: number): number;
    
    // 簡易表示
    /**
     * 一言メッセージをtimeフレームの間表示します。
     * nameに名前、line1～line3にセリフ文字列を指定します。
     */
    showMessage(time: number, name: string, line1: string, line2: string, line3: string): boolean;
    
    /**
     * 画像ファイルfilenameをtimeフレームの間表示します。
     */
    showImage(time: number, x: number, y: number, filename: string): boolean;
    
    /**
     * showRect、showOvalメソッドで表示する図形の色を設定します。
     * r、g、bに光の３原色の赤・緑・青を、aに不透明度を指定します。それぞれ0～255の範囲で指定します。
     * aを省略した場合は完全に不透明になります。
     */
    setPenColor(r: number, g: number, b: number, a?: number): boolean;
    
    /**
     * 指定された矩形をtimeフレームの間表示します。
     */
    showRect(time: number, x: number, y: number, width: number, height: number): boolean;
    
    /**
     * 指定された矩形領域に収まる楕円をtimeフレームの間表示します。
     */
    showOval(time: number, x: number, y: number, width: number, height: number): boolean;
    
    // ゲージ
    /**
     * 長さvalueのゲージを表示します。stringには、ゲージの上に表示する文字列を指定します。
     */
    showGauge(value: number, str: string): boolean;
    
    /**
     * ゲージを非表示にします。
     */
    hideGauge(): boolean;
    
    // パーツ配置・取得
    /**
     * 指定座標(x, y)（ブロック単位）に標準レイヤーのパーツを配置します。
     * codeは配置するパーツのコードです。
     */
    setMapchip(x: number, y: number, code: number): boolean;
    
    /**
     * 指定座標(x, y)（ブロック単位）に配置されている標準レイヤーのコードを取得します。
     */
    getMapchip(x: number, y: number): number;
    
    /**
     * 指定座標(x, y)（ブロック単位）に背景レイヤーのパーツを配置します。
     * codeは配置するパーツの番号です。
     */
    setMapchip2(x: number, y: number, code: number): boolean;
    
    /**
     * 指定座標(x, y)（ブロック単位）に配置されている背景レイヤーの番号を取得します。
     */
    getMapchip2(x: number, y: number): number;
    
    /**
     * 指定された座標（ブロック単位）に仕掛けパーツを配置します。
     * nの値は、firebar1_typeパラメータの設定値と同じものを指定します。
     */
    setAthletic(x: number, y: number, n: number): boolean;
    
    // キー入力系
    /**
     * 左キーを押します。
     */
    pressLeft(): boolean;
    
    /**
     * 左キーを２連続で押します。（ダッシュの操作）
     */
    pressLeft2(): boolean;
    
    /**
     * 左キーを離します。
     */
    releaseLeft(): boolean;
    
    /**
     * 右キーを押します。
     */
    pressRight(): boolean;
    
    /**
     * 右キーを２連続で押します。
     */
    pressRight2(): boolean;
    
    /**
     * 右キーを離します。
     */
    releaseRight(): boolean;
    
    /**
     * 上キーを押します。
     */
    pressUp(): boolean;
    
    /**
     * 上キーを離します。
     */
    releaseUp(): boolean;
    
    /**
     * 下キーを押します。
     */
    pressDown(): boolean;
    
    /**
     * 下キーを離します。
     */
    releaseDown(): boolean;
    
    /**
     * ジャンプキーを押します。
     */
    pressTrigger1(): boolean;
    
    /**
     * ジャンプキーを離します。
     */
    releaseTrigger1(): boolean;
    
    /**
     * すべてのキーを離します。
     */
    releaseAll(): boolean;
    
    /**
     * 押下中のキーコードを返します。
     */
    getKeyCode(): number;
    
    /**
     * キーコードをリセットして0にします。
     */
    resetKeyCode(): boolean;
    
    /**
     * Zキーが押されているかを判定します。押されていれば1、さもなくば0を返します。
     */
    isPressZKey(): number;
    
    /**
     * Xキーが押されているかを判定します。
     */
    isPressXKey(): number;
    
    /**
     * スペースキーが押されているかを判定します。
     */
    isPressSpaceKey(): number;
    
    /**
     * 上キーが押されているかを判定します。
     */
    isPressUpKey(): number;
    
    /**
     * 下キーが押されているかを判定します。
     */
    isPressDownKey(): number;
    
    /**
     * 左キーが押されているかを判定します。
     */
    isPressLeftKey(): number;
    
    /**
     * 右キーが押されているかを判定します。
     */
    isPressRightKey(): number;
    
    /**
     * 指定コードのキーが押されているかを判定します。
     */
    isPressCodeKey(keyCode: number): number;
    
    // 床オブジェクト
    /**
     * 指定した長方形の、画像ファイルfilenameを表示する床オブジェクトを作成します。
     * 戻り値は床オブジェクトへのIDです。
     */
    newYuka(x: number, y: number, width: number, height: number, filename: string): number;
    
    /**
     * 指定した長方形の矩形を表示する床オブジェクトを作成します。
     */
    newYuka(x: number, y: number, width: number, height: number, shape: "rect"): number;
    
    /**
     * linetypeを"line"にすると、始点(x1, y1)～終点(x2, y2)を結ぶ線分の床を作成します。
     * linetypeを"triangle"にすると、線分を斜辺とする直角三角形を描画します。
     * linetypeを"mount"にすると、線分から下を塗りつぶします。
     */
    newYuka(x1: number, y1: number, x2: number, y2: number, linetype: "line" | "triangle" | "mount"): number;
    
    /**
     * 指定されたIDの長方形の床の座標を設定します。
     */
    setYukaPosition(yukaID: number, x: number, y: number): boolean;
    
    /**
     * 指定されたIDの線分の床の座標を設定します。
     */
    setYukaPosition(yukaID: number, x1: number, y1: number, x2: number, y2: number): boolean;
    
    /**
     * 指定IDの床の当たり判定を設定します。
     * nに2を代入すると当たり判定を無効にします。
     */
    setYukaType(yukaID: number, n: number): boolean;
    
    /**
     * 指定IDの床を削除します。
     */
    disposeYuka(yukaID: number): boolean;
    
    /**
     * 指定IDの床の色を設定します。画像を表示している場合は無効です。
     */
    setYukaColor(yukaID: number, r: number, g: number, b: number, a: number): boolean;
    
    /**
     * 指定IDの床に主人公が乗っているかを判定します。
     */
    isRideYuka(yukaID: number): number;
    
    /**
     * 指定IDの長方形の床に、標準レイヤーのパターン画像を設定します。
     * nは、0だとそのまま、1だと左右反転した画像を表示します。
     */
    setYukaPattern(yukaID: number, code: number, n: number): boolean;
    
    /**
     * 指定IDの長方形の床に、画像オブジェクトの画像を設定します。
     * 引数imageにファイル名を指定した場合、画像ファイルを読み込んで設定します。
     */
    setYukaImage(yukaID: number, image: ImageBuff | string): boolean;
    
    // 音利用
    /**
     * 効果音を出します。
     */
    soundOn(): boolean;
    
    /**
     * 効果音を消します。
     */
    soundOff(): boolean;
    
    /**
     * soundOn()と同じです。
     */
    onSound(): boolean;
    
    /**
     * soundOff()と同じです。
     */
    offSound(): boolean;
    
    /**
     * 効果音を再生します。nには効果音の番号1～27の値を指定します。
     */
    playSound(n: number): boolean;
    
    /**
     * 効果音を変更します。
     * @param n 効果音番号（1～27）
     * @param filename 音声ファイル名
     * @returns 成功すればtrue、失敗すればfalse
     */
    setSound(n: number, filename: string): boolean;
    
    // オフスクリーン関係
    /**
     * スコアなどの文字列のサイズを設定します
     */
    setFontSize(size: number): boolean;
    
    /**
     * 第１引数（Offscreen_g）で使用できるフォントオブジェクトを作成します。
     * nはフォントの修飾で、0は通常、1は太字、2は斜体です。
     * 環境によっては使用できないフォントも多く存在するので注意してください。
     */
    newFont(fontname: string, n: number, size: number): any;
    
    /**
     * オフスクリーンの指定座標に標準レイヤーのパターン画像を描画します。
     * nは反転情報で、0でそのまま、1で左右反転して描画します。
     */
    drawPattern(x: number, y: number, code: number, n: number): boolean;
    
    /**
     * オフスクリーンに描画する図形の色を設定します。
     */
    setOffscreenColor(r: number, g: number, b: number, a: number): boolean;
    
    /**
     * オフスクリーンに、指定された点を結ぶ、塗りつぶした多角形を描画します。
     * 第７、第８引数を省略すると三角形、指定すると四角形を描画します。
     */
    fillPolygon(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4?: number, y4?: number): boolean;
    
    /**
     * オフスクリーンの指定座標に、画像オブジェクトの画像をangle度回転させて描画します。
     */
    drawImageRotate(image: ImageBuff, x: number, y: number, angle: number): boolean;
    
    /**
     * オフスクリーンの指定座標に、画像オブジェクトの画像を拡大・縮小させて描画します。
     * rateX、rateYは、それぞれX方向、Y方向の拡大率で、単位はパーセントです。
     * 例えば50を指定すると半分の長さ、200を指定すると2倍の長さになります。
     */
    drawImageScale(image: ImageBuff, x: number, y: number, rateX: number, rateY: number): boolean;
    
    /**
     * オフスクリーンの指定座標に、画像オブジェクトの画像を半透明にして描画します。
     * aは不透明度で、単位はパーセントです。0で完全透明、100で不透明になります。
     */
    drawImageAlphaComposite(image: ImageBuff, x: number, y: number, a: number): boolean;
    
    // 使用不可能メソッド
    /**
     * （使用不可）音声ファイル名を指定して、そのBGMを再生します。
     */
    playBGM(filename: string): boolean;
    
    /**
     * （使用不可）音声ファイル名を指定して、そのBGMをループ再生します。
     */
    playBGMLoop(filename: string): boolean;
    
    /**
     * （使用不可）再生中のBGMを停止します。
     */
    stopBGM(): boolean;
    
    /**
     * （使用不可）HTMLテキストを指定して解析し、パラメータを一括設定します。
     * 代わりにsetParamValue(name, value)を使用してください。
     */
    setHTMLText(html: string): boolean;
    
    /**
     * （使用不可）テキストファイルを読み込み、内容を文字列で返します。
     */
    loadTextFile(filename: string): string;
    
    /**
     * （使用不可）画像ファイルを読み込み、指定座標に表示します。
     * 読み込みの遅延などの影響があるので使用できないようにしています。
     * 代わりにnewImageOnLoad(filename)で画像オブジェクトを取得したのち、
     * Offscreen_g.drawImage(image, x, y)メソッドで描画してください。
     */
    drawImage(filename: string, x: number, y: number): boolean;
    
    // その他のユーティリティメソッド
    /**
     * 一時停止中かどうかを判定します。
     */
    isPaused(): number;
    
    /**
     * ゲームを一時停止します。
     */
    pause(): boolean;
    
    /**
     * 0～1のランダムな浮動小数点数を返します。
     */
    getRandomF(): number;
    
    /**
     * 0～nのランダムな整数を返します。
     */
    getRandom(n: number): number;
    
    /**
     * 現在のジェット燃料量を取得します。
     */
    getJetFuel(): number;
    
    /**
     * キー入力のカウント値を取得します。
     */
    getKeyCount(): number;
    
    /**
     * パーツ定義を取得します。
     */
    getPartsDefinition(): any;
    
    /**
     * アイテムを設定します。
     */
    setItem(x: number, y: number, type: number): boolean;
    
    /**
     * Canvas正男本体のバージョン情報を取得します。
     * 得られる値はCanvasMasao.versionで得られる値と同じです。
     */
    getVersion(): string;
    
    /**
     * システムカラーを設定します。
     */
    setSystemColor(r: number, g: number, b: number): boolean;
}

// MasaoJSSに渡される関数の型定義
declare function userJSCallback(
    g: CanvasMasaoGraphics, 
    mode: number, 
    view_x: number, 
    view_y: number, 
    ap: MasaoJSS
): void;

// 拡張用
interface Window {
    /**
     * グローバルに宣言されたMasaoJSS APIへのアクセス
     */
    Applet1?: MasaoJSS;
}