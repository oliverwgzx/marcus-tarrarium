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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Huvudnavigation"
        className={`fixed top-0 w-full z-50 px-6 py-2 max-w-7xl mx-auto left-1/2 -translate-x-1/2 flex justify-between items-center backdrop-blur-md transition-all duration-300 ${
          scrolled || menuOpen ? "shadow-sm bg-surface/95" : "bg-surface/80"
        }`}
      >
        <Link
          href="/"
          className="font-serif text-2xl font-semibold text-primary tracking-tight"
          aria-label="Marcus Terrarium — startsida"
        >
          Marcus Terrarium
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
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

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
        >
          <span
            className={`block h-0.5 w-6 bg-primary rounded transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary rounded transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary rounded transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-surface shadow-2xl flex flex-col pt-24 pb-12 px-8 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav aria-label="Mobilnavigation" className="flex flex-col gap-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`py-4 text-lg font-medium border-b border-outline-variant/30 transition-colors duration-200 ${
                  pathname === href
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex gap-6">
            <a
              href="https://www.instagram.com/marcus_terrarium/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a
              href="https://www.youtube.com/@marcusterrarium"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
