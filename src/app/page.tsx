import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SponsorCTA } from "@/components/SponsorCTA";
import {
  getEditorsPicks,
  getSponsoredTools,
  getNewTools,
  getToolsGroupedByCategory,
  getCategories,
} from "@/lib/tools";

export default function HomePage() {
  const editorsPicks = getEditorsPicks();
  const sponsored = getSponsoredTools();
  const newTools = getNewTools();
  const grouped = getToolsGroupedByCategory();
  const categories = getCategories();
  const featured = [...sponsored, ...editorsPicks];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium text-emerald-400">
            For vibe coders & builders
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI tools to build income
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Curated directory of AI tools for side hustles, freelancing, content, e-commerce,
            and vibe coding agents that help you ship and get paid.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#directory"
              className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
            >
              Browse directory
            </a>
            <Link
              href="/advertise"
              className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:text-white"
            >
              Advertise your tool
            </Link>
          </div>
        </div>
      </section>

      {/* Category chips */}
      <section className="border-b border-zinc-800/80 bg-zinc-950/50">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#cat-${c.id}`}
              className="shrink-0 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-zinc-600 hover:text-white"
            >
              {c.name}
            </a>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Featured</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Editor&apos;s picks are unpaid. Paid placements are always labeled{" "}
              <span className="text-amber-400">Sponsored</span>.
            </p>
          </div>
          <Link href="/advertise" className="hidden text-sm text-emerald-400 hover:text-emerald-300 sm:inline">
            Become a sponsor →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => (
            <ToolCard key={tool.id} tool={tool} variant="featured" />
          ))}
        </div>
      </section>

      {/* New releases */}
      <section id="new" className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-white">New tool releases</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Fresh drops for builders shipping this week.
          </p>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
            {newTools.map((tool) => (
              <div key={tool.id} className="w-72 shrink-0">
                <ToolCard tool={tool} variant="compact" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory by category */}
      <section id="directory" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold text-white">All tools</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Ranked by use case — coding agents, income tools, and the stack in between.
        </p>

        <div className="mt-10 space-y-12">
          {grouped.map(({ category, tools }) => (
            <div key={category.id} id={`cat-${category.id}`}>
              <div className="mb-4 flex items-baseline gap-3">
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                <span className="text-xs text-zinc-600">{tools.length} tools</span>
              </div>
              <p className="mb-4 text-sm text-zinc-500">{category.description}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                  <ToolCard key={`${category.id}-${tool.id}`} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <SponsorCTA />
      </section>

      {/* Newsletter */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-semibold text-white">
            The Buildstack newsletter
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            One money-making AI workflow and the tools behind it — every week. Built for vibe
            coders and indie builders.
          </p>
          <div className="relative mx-auto mt-6 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
