import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "AI Web Studioにおける個人情報の取り扱い方針（プライバシーポリシー）です。",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. 個人情報の取得",
    body: "当スタジオは、お問い合わせフォームの送信時に、お名前・会社名・メールアドレス・ご相談内容などの個人情報を取得します。取得にあたっては、利用目的を明示し、適法かつ公正な手段によって行います。",
  },
  {
    title: "2. 利用目的",
    body: "取得した個人情報は、(1) お問い合わせへの回答・ご連絡、(2) お見積り・ご提案資料の送付、(3) サービスの品質向上のための分析、の目的で利用します。目的の範囲を超えて利用する場合は、事前にご本人の同意を得ます。",
  },
  {
    title: "3. 第三者提供",
    body: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "4. 委託先の管理",
    body: "メール配信やサーバー運用等のためにサービス提供事業者へ個人情報の取り扱いを委託する場合は、適切な委託先を選定し、必要かつ適切な監督を行います。",
  },
  {
    title: "5. 安全管理措置",
    body: "個人情報への不正アクセス、紛失、破壊、改ざんおよび漏えいなどを防止するため、通信の暗号化（TLS）をはじめとする合理的な安全管理措置を講じます。",
  },
  {
    title: "6. 開示・訂正・削除の請求",
    body: "ご本人からの個人情報の開示・訂正・利用停止・削除のご請求には、ご本人であることを確認のうえ、法令に従い速やかに対応します。下記の窓口までご連絡ください。",
  },
  {
    title: "7. アクセス解析について",
    body: "当サイトでは、サービス改善のためアクセス解析ツールを利用する場合があります。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。",
  },
  {
    title: "8. 本ポリシーの改定",
    body: "本ポリシーの内容は、法令の改正やサービス内容の変更に応じて、予告なく改定することがあります。重要な変更がある場合は、当サイト上でお知らせします。",
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-36 md:pt-44">
      <h1 className="text-3xl font-bold tracking-tight">
        プライバシーポリシー
      </h1>
      <p className="mt-6 text-[15px] leading-loose text-muted-foreground">
        {siteConfig.name}
        （以下「当スタジオ」）は、個人情報の重要性を認識し、
        個人情報の保護に関する法律およびその他の関係法令を遵守して、
        以下のとおり個人情報を取り扱います。
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold">{section.title}</h2>
            <p className="mt-3 text-[15px] leading-loose text-muted-foreground">
              {section.body}
            </p>
          </section>
        ))}

        <section>
          <h2 className="text-lg font-bold">9. お問い合わせ窓口</h2>
          <p className="mt-3 text-[15px] leading-loose text-muted-foreground">
            個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            <br />
            {siteConfig.name}　個人情報お問い合わせ窓口
            <br />
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>

      <p className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground">
        制定日: 2026年7月11日
      </p>
    </div>
  );
}
