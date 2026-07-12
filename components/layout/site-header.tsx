import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Work", href: "#work" },
  { label: "Company", href: "#company" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link href="/" className="site-brand" aria-label="Softech home">
          <span className="site-brand__mark">S</span>

          <span className="site-brand__copy">
            <strong>SOFTECH</strong>
            <small>Business Services</small>
          </span>
        </Link>

        <nav className="site-navigation" aria-label="Primary navigation">
          {navigation.map((item, index) => (
            <Link key={item.label} href={item.href}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />

          <Button size="md" className="site-header__cta">
            Start a project
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Button>

          <button
            type="button"
            className="site-header__menu"
            aria-label="Open navigation menu"
          >
            <Menu size={19} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </header>
  );
}