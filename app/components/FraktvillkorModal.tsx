"use client";
import { useState } from "react";

export default function FraktvillkorModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-on-surface-variant hover:text-primary underline underline-offset-4 transition-colors duration-300 text-left cursor-pointer"
      >
        Upphämtning
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-surface-container-lowest rounded-2xl shadow-2xl max-w-lg w-full p-10 z-10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 p-2 hover:bg-surface-container rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant">close</span>
            </button>

            <span className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3 block">Information</span>
            <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Upphämtning</h2>

            <div className="space-y-5 text-sm text-on-surface-variant leading-relaxed">
              <p>Detaljer för upphämtning sker vid beställning.</p>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/30">
              <p className="text-xs text-on-surface-variant">
                Frågor? Kontakta oss på{" "}
                <a href="https://www.instagram.com/marcus_terrarium/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                  Instagram
                </a>.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
