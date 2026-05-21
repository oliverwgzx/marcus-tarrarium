"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Hem" },
  { href: "/sortiment", label: "Sortiment" },
  { href: "/information", label: "Information" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-2 max-w-7xl mx-auto left-1/2 -translate-x-1/2 flex justify-between items-center backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-sm bg-surface/95" : "bg-surface/80"
      }`}
    >
      <Link href="/" className="font-serif text-2xl font-semibold text-primary tracking-tight">
        Marcus Terrarium
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm transition-colors duration-200 ${
              pathname === href
                ? "text-primary border-b border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
