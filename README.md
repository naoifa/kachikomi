# AI Web Studio — 公式サイト兼LP

「成果から逆算するWeb制作」を掲げるWeb制作会社の公式サイト兼ランディングページ。
問い合わせ獲得（月30件・CV率5%）を目標に、CV動線・SEO・表示速度から逆算して設計されています。

## 技術スタック

| 領域 | 採用技術 |
|---|---|
| フレームワーク | Next.js 15（App Router / Server Components） |
| 言語 | TypeScript（strict） |
| スタイリング | Tailwind CSS v4 |
| UIコンポーネント | shadcn/ui流（Radix UI + cva + tailwind-merge） |
| アニメーション | Framer Motion（`prefers-reduced-motion` 対応） |
| フォーム | React Hook Form + Zod（クライアント/サーバー二重検証） |
| フォント | Inter + Noto Sans JP（next/font セルフホスト） |

## セットアップ

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # 本番ビルド
npm run lint     # ESLint
```

## ディレクトリ構成

```
src/
├─ app/                    # ルーティング（App Router）
│  ├─ page.tsx             # トップLP（13セクション + JSON-LD）
│  ├─ layout.tsx           # 共通レイアウト・metadata・テーマ初期化
│  ├─ privacy/             # プライバシーポリシー
│  ├─ thanks/              # 問い合わせ完了（CV計測ポイント）
│  ├─ api/contact/         # フォーム受信API（Zod検証+honeypot+レートリミット）
│  ├─ robots.ts            # robots.txt 自動生成
│  ├─ sitemap.ts           # sitemap.xml 自動生成
│  └─ opengraph-image.tsx  # OGP画像（コード生成）
├─ components/
│  ├─ sections/            # LPの各セクション（Hero〜Contact）
│  ├─ layout/              # Header / Footer / ThemeToggle
│  ├─ ui/                  # shadcn/ui流の基礎コンポーネント
│  └─ motion/              # スクロールアニメーション（Reveal）
└─ lib/
   ├─ content.ts           # 全コピー・データ（★差し替えはここに集約）
   └─ site.ts              # サイト名・URL・メールアドレス等の基本設定
```

## コンテンツの編集

**文言・数値・料金・FAQはすべて `src/lib/content.ts` と `src/lib/site.ts` に集約されています。**
デザインを触らずに、この2ファイルだけで内容を更新できます。

> 実績・制作事例が未掲載の状態でスタートしています（架空データの掲載は行っていません）。
> 実績が貯まったら `docs/05_delivery.md` の手順で追加してください。

## 問い合わせフォームのメール送信設定

環境変数が未設定の場合、送信内容はサーバーログに記録されます（開発時はターミナルに表示）。
本番でメール受信するには [Resend](https://resend.com)（無料枠あり）のAPIキーを設定します。

| 変数 | 内容 |
|---|---|
| `RESEND_API_KEY` | ResendのAPIキー |
| `CONTACT_TO_EMAIL` | 問い合わせの受信先アドレス |
| `CONTACT_FROM_EMAIL` | 送信元（任意。既定は `onboarding@resend.dev`） |
| `NEXT_PUBLIC_SITE_URL` | 本番URL（OGP・sitemap・canonicalに使用） |

## Vercelへのデプロイ

1. このプロジェクトをGitHubリポジトリへpush
2. [vercel.com](https://vercel.com) → **Add New → Project** → リポジトリをImport
3. Framework Preset は **Next.js**（自動検出・設定変更不要）
4. Environment Variables に上記4変数を設定
5. **Deploy** を押す（以降は `git push` だけで自動デプロイ）

独自ドメインは Vercel の **Settings → Domains** から接続し、
接続後に `NEXT_PUBLIC_SITE_URL` を本番URLへ更新して再デプロイしてください。

## 設計ドキュメント

- `docs/01_kickoff-meeting.md` — 社内会議議事録（要件・意思決定）
- `docs/02_strategy.md` — 競合分析・ペルソナ・SEO設計
- `docs/03_structure.md` — サイトマップ・ワイヤーフレーム・コピー設計
- `docs/04_design.md` — デザインシステム（トークン・原則）
- `docs/05_delivery.md` — 納品資料（差し替え一覧・運用ガイド・拡張ロードマップ）
