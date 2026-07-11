# 社内キックオフ会議 議事録（Phase 2）

- 日時: 2026-07-11 / 参加: 全17名（経営陣4・制作13）
- 案件: 自社（AI Web Studio）公式サイト兼LP制作 → Vercel本番公開
- クライアント要件: 問い合わせ月30件以上 / CV率5%以上 / 白黒ベース+青 / Apple・Stripe・Linear級

---

## Round 1 — 戦略・構成の方針

**PM**: 要件確認。CV率5%は業界平均（BtoBサイト1〜3%）の約2倍。通常の「問い合わせフォーム一本槍」では未達リスクが高い。

**CRO**: 同意。メインCV（無料相談）に加えて心理的ハードルの低い**マイクロCV（無料サイト診断）**を用意し、2段構えでCV率を稼ぐべき。フォーム項目は4つまで（項目が1つ増えるごとにCVRは約10%落ちる）。

**Marketing Strategist**: 月30件はサイト構造だけでは保証できない（流入×CVRの積）。サイト側の責務はCVR最大化と指名検索の受け皿。**料金の明示**が最大の差別化になる——制作会社の8割は「お見積りください」で隠す。

**SEO Specialist**: 【反対意見】LP1枚構成では「ホームページ制作」「LP制作 外注」等のミドルKWで戦えない。サービス別の下層ページを初期から作るべき。

**CTO**: 下層ページを今作るとコピー・デザインの密度が薄まり納期も倍になる。App Routerでセクションをコンポーネント分割しておけば、下層ページ化は後から低コストで可能。

**CEO裁定**: **初回納品はLP1枚+法務ページ**。全セクションをid付きコンポーネントで実装し、下層ページ展開は納品資料の拡張ロードマップに明記。SEOはLP内のJSON-LD・FAQ構造化で最大限取る。

## Round 2 — セクション構成・コピー・CV設計

**UX Designer**: セクション順は規定の13構成（Hero→Problem→Solution→Feature→Benefit→Evidence→Case→Flow→Price→FAQ→CTA→Contact→Footer）。Evidence（数値）とCase Study（物語）は統合案も出たが、**数値で信頼→物語で自分ごと化**の2段が効くため分離を維持。

**Copywriter**: フレームワークの使い分けを提案し承認——
- Hero: **QUEST**（Qualify: 「成果の出るサイト、ありますか」で対象を絞る）
- Problem→Solution: **PAS**（問題提起→放置コスト→解決）
- Feature/Benefit: **4P**（Picture/Promise/Prove/Push）
- 最終CTA: **AIDA**（締めの行動喚起）

**CRO**: CTAは5箇所——①Hero直下 ②Solution後 ③Price直後 ④FAQ後の最終CTA ⑤ヘッダー常設ボタン。全CTAの文言は「無料相談」で統一し迷いを消す。

**Accessibility Specialist**: コントラスト比4.5:1以上、キーボード操作、`prefers-reduced-motion` 尊重、フォームは`label`必須+エラーは`aria`連携。

**Brand Designer**: ブランド名は「AI Web Studio」、タグライン3案からCEOが「**成果から逆算するWeb制作**」を採択。

## Round 3 — 技術・パフォーマンス・リスク

**Frontend**: Next.js 15（App Router）+ TypeScript strict + Tailwind CSS v4 + shadcn/ui流コンポーネント + Framer Motion。全ページ静的生成、フォームのみRoute Handler。

**Performance Engineer**: **写真素材ゼロ方針**を提案。ヒーローや実績のビジュアルはCSS/SVGで描く（Stripe/Linear同様）。LCPはテキスト要素になり、Lighthouse 100が現実的に狙える。フォントは`next/font`でNoto Sans JP+Interをセルフホスト。

**Motion Designer**: 【反対意見】スクロール連動の大型モーションを入れたい。
**Performance**: 却下を要求。CLS/INPを悪化させる。
**CEO裁定**: **上品なフェードイン+ホバーの精密な反応のみ**。動きは「高級車のドアが閉まる音」レベルの控えめさで品を出す。

**Security Engineer**: フォームはZodサーバー側検証+honeypot+簡易レートリミット。外部送信はRESEND_API_KEY設定時のみ有効化（未設定時はログ記録で動作、README明記）。

**QA Engineer**: 実績数値・お客様の声はダミーであることを納品資料に「要差し替え」として明記する（虚偽表示リスクの回避）。

**DevOps**: Vercelデプロイ手順と環境変数一覧をREADMEに。`vercel.json`は不要（ゼロコンフィグ）。

---

## 決定事項サマリー

| # | 決定 | 判断者 |
|---|---|---|
| 1 | LP1枚+法務ページで初回納品、下層ページはロードマップへ | CEO |
| 2 | CV2段構え（無料相談+無料サイト診断）、CTA5箇所 | CRO |
| 3 | 料金3プラン明示で差別化 | Marketing |
| 4 | 写真素材ゼロ・CSS/SVGビジュアルでLighthouse 100狙い | Performance |
| 5 | モーションは控えめなフェードのみ | CEO |
| 6 | タグライン「成果から逆算するWeb制作」 | CEO |
| 7 | ダミー実績は納品資料に要差し替え明記 | QA |
