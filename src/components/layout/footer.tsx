import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site";
import { services } from "@/lib/content";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}。
              <br />
              ホームページ・LP・ECサイトの制作から、
              SEO・保守運用・AI導入支援まで。
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          <nav aria-label="フッター：ページ">
            <h2 className="text-sm font-semibold">ページ</h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="フッター：サービス">
            <h2 className="text-sm font-semibold">サービス</h2>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
