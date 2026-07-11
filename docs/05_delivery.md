# 納品資料（Phase 16）

## 1. 納品物一覧

| 納品物 | 場所 |
|---|---|
| サイト本体（Next.jsプロジェクト一式） | このフォルダ全体 |
| 設計ドキュメント | `docs/01〜04` |
| README（セットアップ・デプロイ手順） | `README.md` |
| 環境変数の雛形 | `.env.example` |

## 2. ⚠️ 公開前に必ず差し替えるもの（重要）

現在サンプル値が入っています。**実データに差し替えるまで一般公開しないでください**（景品表示法・実績の虚偽表示リスク）。

| 項目 | 場所 | 現在の値 |
|---|---|---|
| 実績数値4種（対応実績・CVR改善・Lighthouse・納期） | `src/lib/content.ts` の `stats` | 120社+ / 2.4倍 / 98 / 2週間 |
| 制作事例3件 | `src/lib/content.ts` の `caseStudies` | 製造業・D2C・SaaS（架空） |
| メールアドレス | `src/lib/site.ts` の `email` | example.comのダミー |
| 本番URL | Vercel環境変数 `NEXT_PUBLIC_SITE_URL` | プレースホルダー |
| 料金 | `src/lib/content.ts` の `plans` | 提案値（実際の価格体系に合わせ調整可） |
| プライバシーポリシーの事業者情報 | `src/app/privacy/page.tsx` | 屋号のみ（住所・代表者名の追記推奨） |

実績が集まるまでの掲載代替案: 「対応実績」→「対応可能領域」等の定性表現に変更するか、
Evidenceセクションを一時的に品質基準（Lighthouse基準等）のみの構成にする。

## 3. 運用ガイド

- **文言変更**: `src/lib/content.ts`（コピー・FAQ・料金・事例）と `src/lib/site.ts`（社名・ナビ）のみで完結
- **問い合わせ通知**: Resend APIキー設定で有効化（`README.md`参照）。未設定時はVercelのFunctionsログに記録
- **CV計測**: `/thanks` ページ到達をGA4/広告タグのCVイベントに設定する（フォーム送信成功時のみ遷移）
- **月次で見る指標**: 問い合わせ数 / CV率（問い合わせ÷セッション） / 流入元 / LCP・CLS（Vercel Analytics推奨）

## 4. セキュリティ・品質仕様

- フォーム: Zodによるサーバー側再検証 / honeypot / 簡易レートリミット（10分5回/IP）
- 本格的なレートリミットが必要になったら Upstash Redis / Vercel KV へ移行（`src/app/api/contact/route.ts`）
- ヘッダー `x-powered-by` 無効化済み。外部スクリプト0・外部画像0（XSS/追跡面の最小化）
- アクセシビリティ: セマンティックHTML / スキップリンク / フォーカスリング / `prefers-reduced-motion` 対応 / コントラストAA

## 5. 拡張ロードマップ（受注後の提案メニュー）

| 優先度 | 施策 | 狙い |
|---|---|---|
| 高 | サービス別下層ページ（/services/*） | 「ホームページ制作」等のミドルKWでのSEO |
| 高 | 制作実績ページ（/works） | 信頼獲得・指名検索の受け皿 |
| 中 | ブログ/お役立ち記事（/blog） | ロングテールSEO・ペルソナA向け啓蒙 |
| 中 | GA4 + Vercel Analytics導入 | CV率5%目標の計測基盤 |
| 中 | A/BテストによるHeroコピー検証 | CVR改善サイクルの実運転 |
| 低 | 事例のCMS化（microCMS等） | 更新の内製化 |

## 6. 検収チェックリスト

- [ ] `npm run build` が成功する
- [ ] Lighthouse（モバイル）で Performance / SEO / A11y / Best Practices を確認
- [ ] フォーム送信 → `/thanks` 遷移 → メール受信（Resend設定後）
- [ ] スマホ実機で全セクション表示・ハンバーガーメニュー動作
- [ ] ダークモード切替（ヘッダー右のトグル）
- [ ] サンプル数値の差し替え完了（上記2章）
