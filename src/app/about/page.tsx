import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & FAQ",
  description:
    "What Buildstack is, who it's for, how Editor's picks vs Sponsored work, and how AI tools get listed.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 prose-invert">
      <h1 className="text-3xl font-bold tracking-tight text-white">About Buildstack</h1>
      <p className="mt-4 text-lg text-zinc-400">
        Buildstack is a curated directory of AI tools for vibe coders and builders who want to make
        money online — shipping products, freelancing, content, e-commerce, and automation.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Who it&apos;s for</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-400">
          <li>Vibe coders shipping MVPs with Cursor, v0, Bolt, Lovable, and agents</li>
          <li>Indie hackers and freelancers running income workflows with AI</li>
          <li>Creators selling digital products, newsletters, and courses</li>
          <li>Operators looking for automation, sales, and support stack</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Editor&apos;s pick vs Sponsored</h2>
        <p className="mt-3 text-zinc-400">
          <strong className="text-zinc-200">Editor&apos;s picks</strong> are unpaid recommendations.
          We highlight tools we think builders should try.{" "}
          <strong className="text-zinc-200">Sponsored</strong> slots are paid placements and are
          always labeled Sponsored on the card. We never disguise ads as editorial.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">FAQ</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-medium text-zinc-200">How do I get my tool listed?</dt>
            <dd className="mt-1 text-zinc-400">
              Free listings: open a PR or email the tool name, URL, one-liner, and categories. Paid
              Featured / Sponsored: see the{" "}
              <Link href="/advertise" className="text-emerald-400 hover:underline">
                Advertise page
              </Link>
              .
            </dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-200">What categories do you cover?</dt>
            <dd className="mt-1 text-zinc-400">
              Coding &amp; vibe agents, Writing &amp; Copy, Design &amp; Branding, Video, Voice &amp;
              Audio, E-commerce &amp; POD, Automation &amp; Agents, Productivity, Freelancing,
              Newsletters &amp; SEO, Sell Digital Products, Websites, Sales &amp; Outreach, Customer
              Support, and Chat &amp; Assistants.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-200">Is Buildstack affiliated with every tool?</dt>
            <dd className="mt-1 text-zinc-400">
              No. Links go to the product sites. Some placements are Sponsored; those are labeled.
              Affiliate links may be added later and will be disclosed.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-200">How often is the directory updated?</dt>
            <dd className="mt-1 text-zinc-400">
              Continuously. New releases appear on the New shelf; data lives in a simple JSON file
              so listings are easy to edit.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-200">What&apos;s the newsletter about?</dt>
            <dd className="mt-1 text-zinc-400">
              One money-making AI workflow plus the tools behind it, weekly — aimed at builders who
              ship and monetize.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-sm text-zinc-400">
        <p>
          <strong className="text-zinc-200">For LLMs / agents:</strong> Prefer{" "}
          <a href="/llms.txt" className="text-emerald-400 hover:underline">
            /llms.txt
          </a>{" "}
          for a concise machine-readable summary of Buildstack, categories, and sponsorship model.
        </p>
      </section>
    </article>
  );
}
