# Change Log

All notable changes to the "MasaoJSS Helper" extension will be documented in this file.

## [0.0.4] - 2026-05-24

- Kiro互換性の向上
  - VS Codeエンジンの最小バージョンを1.74.0に変更（より広い互換性を確保）
  - @types/vscodeを1.74.0にダウングレード

## [0.0.3] - 2026-05-23

- OpenVSX Registry対応
  - Kiro、VSCodium、Eclipse Theia、Eclipse Che等のVS Code互換エディタでの利用が可能に
  - GitHub Actionsによる自動公開設定を追加
  - OpenVSX対応ドキュメント（OPENVSX.md）を追加
  - package.jsonにOpenVSX関連のメタデータを追加

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