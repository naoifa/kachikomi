# デザイン設計（Phase 9）

## コンセプト
**「静かな精密さ（Quiet Precision）」** — Stripeの信頼感 × Linearの精密さ × Appleの余白。
AIっぽい紫グラデーション・ガラスモーフィズムの乱用・意味のない3D絵は全面禁止。
白黒を基調に、青は「行動の色」としてCTAとキーラインだけに絞って使う。

## カラートークン（WCAG AA検証済み）
| トークン | Light | Dark | 用途 |
|---|---|---|---|
| background | #ffffff | #0a0a0b | ページ地 |
| foreground | #111113 | #f5f5f6 | 本文（コントラスト18:1） |
| muted-fg | #5c5f66 | #a8abb2 | 補足文（7:1） |
| accent | #2563eb | #3b82f6 | CTA・リンク・キーライン |
| accent-strong | #1d4ed8 | #2563eb | CTAホバー |
| surface | #f7f7f8 | #131316 | カード地 |
| border | #e4e4e7 | #26262b | 罫線（1pxを基本に） |

- 青の使用面積は全画面の5%以下（希少性が高級感を作る）
- ダークモード: `prefers-color-scheme` + クラス切替の両対応

## タイポグラフィ
- 見出し: Noto Sans JP 700（`next/font`セルフホスト）、和文の字間 `-0.02em`
- 本文: Noto Sans JP 400 / 16px / line-height 1.9（和文は広めが正義）
- 数字・英字: Inter（数値カウンタは `tabular-nums`）
- スケール: 12 / 14 / 16 / 18 / 24 / 32 / 44 / 56（1.25〜1.4系の実用混成）

## 余白システム
- セクション縦: モバイル 96px / デスクトップ 144px
- コンテナ: max-width 1120px、左右 24px（モバイル）
- カード内: 24〜32px。**詰まった瞬間に高級感は死ぬ**ため、迷ったら広い方

## モーション原則（Framer Motion）
- 入場: opacity 0→1 + y 16→0、duration 0.5s、easeOut、viewport once
- stagger: 0.08s（カード群）
- ホバー: border/影の変化のみ150ms（要素を動かさない=CLS 0）
- `useReducedMotion` で全アニメーション無効化

## コンポーネント（shadcn/ui流）
Button(3 variants) / Card / Badge / Accordion(Radix) / Input / Textarea / Label
— cva + tailwind-merge で shadcn 互換の書き味に統一

## ビジュアル方針
写真素材ゼロ。Heroの背景は極薄いドットグリッド+青の微光（radial-gradient）のみ。
Case Study・Benefitの図版はCSS/SVGで描くミニUI（ブラウザフレーム・グラフ）。
