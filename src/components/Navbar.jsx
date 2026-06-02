import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-slate-50/90 shadow-sm backdrop-blur-md">
      <div className="u-main-container flex items-center gap-6 py-3.5 sm:gap-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-zinc-900 transition-opacity hover:opacity-90"
        >
          <img
            src="/favicon.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0"
          />
          <span className="text-lg font-bold tracking-tight">
            Dev<span className="text-lapis-lazuli">+</span>
          </span>
        </Link>

        <div className="flex flex-1 items-center gap-6">
          <Link href="/categories" className="u-nav-link">
            Categories
          </Link>
        </div>

        <Link href="/dashboard/create" className="u-btn-primary">
          Add an article
        </Link>
      </div>
    </nav>
  );
}
