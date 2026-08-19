import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant full-width bottom mt-xl">
      <div className="w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1440px] mx-auto gap-lg">
        <div className="flex flex-col gap-sm">
          <Link href="/" className="text-title-md font-headline-lg text-primary flex items-center gap-xs">
            <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold text-sm">
              9
            </span>
            9jaPrice
          </Link>
          <p className="text-body-sm font-body-sm text-on-surface-variant max-w-sm">
            Making Nigerian food-price data accessible.
          </p>
          <p className="text-body-sm font-body-sm text-on-surface-variant opacity-70 mt-sm">
            © 2026 9jaPrice. Data-driven food security for Nigeria.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-lg md:gap-xl">
          <div className="flex flex-col gap-sm text-body-sm font-body-sm">
            <span className="text-label-caps font-label-caps text-on-surface font-semibold mb-xs">Product</span>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="/docs">API Docs</Link>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="/explorer">Explorer</Link>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="/commodity/rice">Markets</Link>
          </div>
          <div className="flex flex-col gap-sm text-body-sm font-body-sm">
            <span className="text-label-caps font-label-caps text-on-surface font-semibold mb-xs">Developer</span>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="/dashboard">Dashboard</Link>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="/api-keys">API Keys</Link>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="/playground">Playground</Link>
          </div>
          <div className="flex flex-col gap-sm text-body-sm font-body-sm">
            <span className="text-label-caps font-label-caps text-on-surface font-semibold mb-xs">Legal &amp; Support</span>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Terms of Service</Link>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}