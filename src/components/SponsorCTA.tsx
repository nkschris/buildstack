import Link from "next/link";

export function SponsorCTA() {
  return (
    <aside className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-900 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
        For tool makers
      </p>
      <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
        Get in front of vibe coders & builders
      </h2>
      <p className="mt-2 max-w-xl text-sm text-zinc-400">
        Sponsored listings put your AI product on the homepage Featured shelf — always clearly
        labeled. Editor&apos;s picks stay unpaid and independent.
      </p>
      <Link
        href="/advertise"
        className="mt-4 inline-flex rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-amber-300"
      >
        See sponsor pricing →
      </Link>
    </aside>
  );
}
