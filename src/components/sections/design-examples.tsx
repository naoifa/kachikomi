import { designExamples } from "@/lib/content";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-border bg-surface"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
      </div>
      {children}
    </div>
  );
}

/** 製造業向け: 実績・数値を並べた信頼訴求レイアウト */
function ManufacturingMock({ accent }: { accent: string }) {
  return (
    <BrowserFrame>
      <div className="space-y-3 p-4">
        <div className="h-2.5 w-1/3 rounded-full bg-foreground/20" />
        <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className="rounded-lg border border-border bg-background p-2.5"
            >
              <div
                className="h-3 w-2/3 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <div className="mt-2 h-1.5 w-full rounded-full bg-foreground/10" />
            </div>
          ))}
        </div>
        <div className="h-6 w-24 rounded-full" style={{ backgroundColor: accent }} />
      </div>
    </BrowserFrame>
  );
}

/** D2C・EC向け: 商品グリッド+購入導線のコマース訴求レイアウト */
function EcommerceMock({ accent }: { accent: string }) {
  return (
    <BrowserFrame>
      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((n) => (
            <div key={n} className="space-y-1.5">
              <div
                className="aspect-square rounded-lg"
                style={{ backgroundColor: `${accent}33` }}
              />
              <div className="h-1.5 w-3/4 rounded-full bg-foreground/15" />
              <div className="h-1.5 w-1/2 rounded-full bg-foreground/10" />
            </div>
          ))}
        </div>
        <div
          className="h-7 w-full rounded-full"
          style={{ backgroundColor: accent }}
        />
      </div>
    </BrowserFrame>
  );
}

/** スタートアップ向け: 中央寄せの大きな見出しによるヒーロー訴求レイアウト */
function StartupMock({ accent }: { accent: string }) {
  return (
    <BrowserFrame>
      <div
        className="flex flex-col items-center gap-2.5 p-6 text-center"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accent}22, transparent)`,
        }}
      >
        <div
          className="h-4 w-20 rounded-full border"
          style={{ borderColor: accent }}
        />
        <div className="h-3 w-4/5 rounded-full bg-foreground/20" />
        <div className="h-3 w-3/5 rounded-full bg-foreground/20" />
        <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
        <div
          className="mt-1 h-7 w-28 rounded-full"
          style={{ backgroundColor: accent }}
        />
      </div>
    </BrowserFrame>
  );
}

const mockByTag: Record<string, (props: { accent: string }) => React.ReactElement> = {
  製造業: ManufacturingMock,
  "D2C・EC": EcommerceMock,
  スタートアップ: StartupMock,
};

export function DesignExamples() {
  return (
    <Section id="examples" tone="surface" labelledBy="examples-heading">
      <SectionHeading
        eyebrow="Design Example"
        headingId="examples-heading"
        title="業種によって、こんな見せ方をします。"
        lead="以下は実在する制作実績ではなく、業種ごとの対応イメージを示すデザインサンプルです。実際の制作は、ヒアリングした内容にもとづいて設計します。"
      />

      <ul className="mt-16 grid gap-6 lg:grid-cols-3">
        {designExamples.map((example, i) => {
          const Mock = mockByTag[example.tag] ?? ManufacturingMock;
          return (
            <li key={example.tag} className="h-full">
              <Reveal delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
                  <Mock accent={example.accent} />

                  <span className="mt-6 self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {example.tag}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold leading-relaxed">
                    {example.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {example.focus}
                  </p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        ※ 上記は業種イメージを示すデザインサンプルであり、実在する制作事例ではありません。
      </p>
    </Section>
  );
}
