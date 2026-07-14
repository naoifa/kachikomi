export const siteConfig = {
  name: "AI Web Studio",
  tagline: "成果から逆算するWeb制作",
  /** 本番ドメイン取得後は環境変数 NEXT_PUBLIC_SITE_URL で上書きする */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-web-studio.example.com",
  /** TODO(納品時差し替え): 実際の問い合わせ受信メールアドレス */
  email: "hello@ai-web-studio.example.com",
  title:
    "Web制作会社 AI Web Studio｜成果から逆算するホームページ制作・LP制作",
  description:
    "ホームページ制作・LP制作・ECサイト制作からSEO・AI導入支援まで。料金は明朗な3プラン。成果から逆算する設計で、問い合わせが増えるサイトを最短2週間で。無料相談・無料サイト診断受付中。",
} as const;

export const navLinks = [
  { href: "#services", label: "サービス" },
  { href: "#solution", label: "選ばれる理由" },
  { href: "#pricing", label: "料金" },
  { href: "#flow", label: "制作の流れ" },
  { href: "#faq", label: "FAQ" },
] as const;
