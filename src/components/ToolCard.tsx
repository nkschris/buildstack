import type { Tool } from "@/lib/types";
import { getCategoryName } from "@/lib/tools";

interface ToolCardProps {
  tool: Tool;
  variant?: "default" | "featured" | "compact";
}

export function ToolCard({ tool, variant = "default" }: ToolCardProps) {
  const isSponsored = tool.featuredType === "sponsored";
  const isEditorsPick = tool.featuredType === "editors-pick";
  const primaryCategory = tool.categories[0]
    ? getCategoryName(tool.categories[0])
    : null;

  const base =
    "group relative flex flex-col rounded-xl border transition hover:border-zinc-600";
  const styles =
    variant === "featured"
      ? `${base} border-zinc-700 bg-zinc-900/80 p-5 ${isSponsored ? "ring-1 ring-amber-500/40" : "ring-1 ring-emerald-500/20"}`
      : variant === "compact"
        ? `${base} border-zinc-800 bg-zinc-900/50 p-4`
        : `${base} border-zinc-800 bg-zinc-900/40 p-4`;

  return (
    <article className={styles}>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {isSponsored && (
          <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-400">
            Sponsored
          </span>
        )}
        {isEditorsPick && variant === "featured" && (
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
            Editor&apos;s pick
          </span>
        )}
        {tool.isNew && (
          <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-400">
            New
          </span>
        )}
      </div>
      <h3 className="text-base font-semibold text-white group-hover:text-emerald-300">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0"
        >
          {tool.name}
        </a>
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-400">
        {tool.description}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {primaryCategory && (
          <span className="text-xs text-zinc-500">{primaryCategory}</span>
        )}
        {tool.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-800 px-1.5 py-0.5 text-[11px] text-zinc-400"
          >
            {tag}
          </span>
        ))}
        <span className="ml-auto text-xs font-medium text-emerald-400 opacity-0 transition group-hover:opacity-100">
          Visit →
        </span>
      </div>
    </article>
  );
}
