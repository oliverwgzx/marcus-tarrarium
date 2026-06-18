import Link from "next/link";
import FraktvillkorModal from "./FraktvillkorModal";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-20 flex flex-col md:flex-row justify-between items-start gap-6 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-xs">
        <div className="font-serif text-2xl font-semibold text-primary mb-4">Marcus Terrarium</div>
        <p className="text-sm text-on-surface-variant">
          Skapande av levande konst i Stockholm sedan 2026.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-2">Socialt</span>
          <Link href="https://www.instagram.com/marcus_terrarium/" target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-primary underline underline-offset-4 transition-colors duration-300">Instagram</Link>
          <Link href="https://www.youtube.com/@marcusterrarium" target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-primary underline underline-offset-4 transition-colors duration-300">YouTube</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-2">Support</span>
          <Link href="https://www.instagram.com/marcus_terrarium/" target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-primary underline underline-offset-4 transition-colors duration-300">Kontakt</Link>
          <FraktvillkorModal />
        </div>
      </div>
      <p className="text-sm text-on-surface-variant mt-12 md:mt-0">
        © 2026 Marcus Terrarium. Handgjorda ekosystem.
      </p>
    </footer>
  );
}
