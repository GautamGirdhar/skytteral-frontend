import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="relative z-50 w-full bg-background py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-4xl font-bold tracking-tight text-logo"
          >
            Skytteral
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/features"
              className="text-xl font-medium text-foreground cursor-pointer hover:text-muted-foreground"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-xl font-medium cursor-pointer text-foreground hover:text-muted-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/integrations"
              className="text-xl font-medium cursor-pointer text-foreground hover:text-muted-foreground"
            >
              Integrations
            </Link>
            <Link
              href="/docs"
              className="text-xl font-medium cursor-pointer text-foreground hover:text-muted-foreground"
            >
              Docs
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="h-10 rounded-md bg-foreground px-6 text-xl font-semibold text-background hover:bg-muted hover:text-foreground cursor-pointer"
            >
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
