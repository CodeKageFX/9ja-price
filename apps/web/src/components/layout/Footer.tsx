import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant mt-xl">
      <div className="w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1440px] mx-auto gap-lg">
        <div className="flex flex-col gap-sm">
          <Link href="/" className="text-title-md font-headline-lg text-primary flex items-center gap-xs">
            <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold text-sm">
              9
            </span>
            9jaPrice
          </Link>
          <p className="text-body-sm font-body-sm text-on-surface-variant max-w-[24rem]">
            Making Nigerian food-price data accessible.
          </p>
          <p className="text-body-sm font-body-sm text-on-surface-variant opacity-70 mt-sm">
            © 2026 9jaPrice. Data-driven food security for Nigeria.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-lg md:gap-xl">
          <div className="flex flex-col gap-sm text-body-sm font-body-sm">
            <span className="text-label-caps font-label-caps text-on-surface font-semibold mb-xs">Product</span>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/explorer">Explorer</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/markets">Markets</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/methodology">Methodology</Link>
          </div>
          <div className="flex flex-col gap-sm text-body-sm font-body-sm">
            <span className="text-label-caps font-label-caps text-on-surface font-semibold mb-xs">Developer</span>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/developers">Developers</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/docs">API Docs</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/playground">Playground</Link>
          </div>
          <div className="flex flex-col gap-sm text-body-sm font-body-sm">
            <span className="text-label-caps font-label-caps text-on-surface font-semibold mb-xs">Portal</span>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/dashboard">Dashboard</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/api-keys">API Keys</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-colors" href="/usage">Usage</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}