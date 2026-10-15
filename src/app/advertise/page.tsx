import type { Metadata } from "next";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Advertise / Sponsor",
  description:
    "Sponsor Buildstack — featured and sponsored listings that put your AI tool in front of vibe coders and builders making money online.",
};

export default function AdvertisePage() {
  const paymentLink = siteConfig.stripePaymentLink;
  const hasPaymentLink = Boolean(paymentLink && paymentLink.length > 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm font-medium text-amber-400">Sponsor revenue</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Advertise on Buildstack
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Reach vibe coders, indie hackers, and builders who use AI to ship products and make money
        online. Sponsored slots are clearly labeled. Editor&apos;s picks stay unpaid.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {siteConfig.sponsorTiers.map((tier) => (
          <div
            key={tier.id}
            className={`flex flex-col rounded-2xl border p-6 ${
              tier.highlighted
                ? "border-amber-500/50 bg-amber-500/5 ring-1 ring-amber-500/30"
                : "border-zinc-800 bg-zinc-900/50"
            }`}
          >
            {tier.highlighted && (
              <span className="mb-3 w-fit rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-400">
                Most popular
              </span>
            )}
            <h2 className="text-lg font-semibold text-white">{tier.name}</h2>
            <p className="mt-1 text-sm text-zinc-500">{tier.description}</p>
            <p className="mt-4">
              <span className="text-3xl font-bold text-white">{tier.price}</span>
              <span className="text-sm text-zinc-500">{tier.period}</span>
            </p>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-zinc-400">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
            {hasPaymentLink ? (
              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-semibold ${
                  tier.highlighted
                    ? "bg-amber-400 text-zinc-950 hover:bg-amber-300"
                    : "bg-zinc-100 text-zinc-950 hover:bg-white"
                }`}
              >
                {tier.cta}
              </a>
            ) : (
              <a
                href={`mailto:sponsors@buildstack.dev?subject=${encodeURIComponent(
                  `Sponsor inquiry: ${tier.name}`
                )}`}
                className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-semibold ${
                  tier.highlighted
                    ? "bg-amber-400 text-zinc-950 hover:bg-amber-300"
                    : "bg-zinc-100 text-zinc-950 hover:bg-white"
                }`}
              >
                {tier.cta} (email)
              </a>
            )}
          </div>
        ))}
      </div>

      {!hasPaymentLink && (
        <p className="mt-6 rounded-lg border border-dashed border-zinc-700 bg-zinc-900/50 p-4 text-sm text-zinc-500">
          {/* TODO: set NEXT_PUBLIC_STRIPE_PAYMENT_LINK or siteConfig.stripePaymentLink */}
          Stripe payment link not configured yet. CTAs fall back to email. Paste your Payment Link
          in <code className="text-zinc-300">src/config.ts</code> or{" "}
          <code className="text-zinc-300">.env.local</code> as{" "}
          <code className="text-zinc-300">NEXT_PUBLIC_STRIPE_PAYMENT_LINK</code>.
        </p>
      )}

      <section className="mt-16 grid gap-8 border-t border-zinc-800 pt-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-white">What you get</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            <li>
              <strong className="text-zinc-200">Homepage Featured shelf</strong> — Sponsored card
              with amber badge, above the fold traffic.
            </li>
            <li>
              <strong className="text-zinc-200">Transparent labeling</strong> — Always marked
              Sponsored (never confused with Editor&apos;s pick).
            </li>
            <li>
              <strong className="text-zinc-200">Builder audience</strong> — Vibe coders, freelancers,
              and operators looking for tools that make money.
            </li>
            <li>
              <strong className="text-zinc-200">Simple swap</strong> — We update{" "}
              <code className="text-zinc-300">data/tools.json</code> with your listing.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-zinc-400">
            <li>Pick a tier and pay via Stripe (or email us while the link is being set up).</li>
            <li>Send name, one-liner, URL, logo (optional), and preferred categories.</li>
            <li>We go live within 2 business days and confirm your Sponsored dates.</li>
          </ol>
          <p className="mt-6 text-sm text-zinc-500">
            Questions?{" "}
            <a
              href="mailto:sponsors@buildstack.dev"
              className="text-emerald-400 hover:text-emerald-300"
            >
              sponsors@buildstack.dev
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
