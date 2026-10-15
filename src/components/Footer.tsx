import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold text-white">Buildstack</p>
          <p className="mt-1 max-w-sm text-sm text-zinc-500">
            AI tools for vibe coders and builders making money online. Editor&apos;s picks are unpaid;
            paid placements are always labeled Sponsored.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white">
            Directory
          </Link>
          <Link href="/advertise" className="hover:text-white">
            Advertise
          </Link>
          <Link href="/about" className="hover:text-white">
            About / FAQ
          </Link>
          <a href="/llms.txt" className="hover:text-white">
            llms.txt
          </a>
        </div>
      </div>
      <div className="border-t border-zinc-900 py-4 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Buildstack. Built for builders.
      </div>
    </footer>
  );
}
