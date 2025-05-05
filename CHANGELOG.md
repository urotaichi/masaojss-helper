# Change Log

All notable changes to the "MasaoJSS Helper" extension will be documented in this file.

## [0.0.2] - 2025-05-05

- APIドキュメントの修正
  - `setEnemy`メソッドのパラメータ順序を修正 (`(code, x, y)` → `(x, y, type)`)
  - その他、MasaoJSS.tsの実装に合わせてドキュメントを調整

## [0.0.1] - 2025-05-04

- MasaoJSS APIメソッドのホバードキュメント表示
- Graphicsオブジェクトメソッドのホバードキュメント表示
- ドット入力後のコード補完
- 自動識別子検出機能
  - userJSCallback関数の引数から`g`と`ap`の識別子を自動検出
  - 様々な命名規則や関数定義のスタイルに対応