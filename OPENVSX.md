# OpenVSX Registry 対応について

このプロジェクトは[OpenVSX Registry](https://open-vsx.org/)に対応しており、VS Code以外のエディタでもご利用いただけます。

## 対応エディタ

- [Kiro](https://kiro.ai/) - AI-powered development environment
- [VSCodium](https://vscodium.com/) - VS Codeのオープンソース版
- [Eclipse Theia](https://theia-ide.org/) - クラウドネイティブIDE
- [Eclipse Che](https://www.eclipse.org/che/) - Kubernetes上で動作するIDE
- [Gitpod](https://www.gitpod.io/) - ブラウザベースのIDE
- その他のVS Code互換エディタ

## インストール方法

### Kiroの場合
Kiroの拡張機能パネルから「MasaoJSS Helper」を検索してインストールしてください。

### VSCodiumの場合
```bash
codium --install-extension urotaichi.masaojss-helper
```

### OpenVSX CLIの場合
```bash
# CLIのインストール
npm install -g ovsx

# 拡張機能の取得
ovsx get urotaichi.masaojss-helper
```

## 開発者向け情報

### OpenVSXへの公開

この拡張機能は以下の方法でOpenVSX Registryに公開されます：

1. **自動公開** - GitHub Actionsにより、CHANGELOGの更新時に自動的に公開
2. **手動公開** - 以下のコマンドで手動公開も可能

```bash
# OpenVSXのみに公開
npm run publish:ovsx

# VS Code MarketplaceとOpenVSXの両方に公開
npm run publish:all
```

### 必要なシークレット

GitHub Actionsでの自動公開には以下のシークレットが必要です：

- `VSCE_PAT` - VS Code Marketplace用のPersonal Access Token
- `OVSX_PAT` - OpenVSX Registry用のPersonal Access Token

### OpenVSX Personal Access Tokenの取得方法

1. [OpenVSX Registry](https://open-vsx.org/)にアクセス
2. GitHubアカウントでログイン
3. ユーザー設定からAccess Tokenを生成
4. GitHubリポジトリのSecretsに`OVSX_PAT`として追加

## ライセンス

OpenVSX対応に関する追加コードもMITライセンスの下で提供されます。