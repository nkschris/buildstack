import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-zinc-950">
            B
          </span>
          <span>Buildstack</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-4">
          <a href="#directory" className="hidden rounded-md px-2 py-1.5 text-zinc-400 hover:text-white sm:inline">
            Directory
          </a>
          <a href="#new" className="hidden rounded-md px-2 py-1.5 text-zinc-400 hover:text-white sm:inline">
            New
          </a>
          <Link href="/about" className="rounded-md px-2 py-1.5 text-zinc-400 hover:text-white">
            About
          </Link>
          <Link
            href="/advertise"
            className="rounded-full bg-emerald-500 px-3 py-1.5 font-medium text-zinc-950 hover:bg-emerald-400"
          >
            Advertise
          </Link>
        </nav>
      </div>
    </header>
  );
}
