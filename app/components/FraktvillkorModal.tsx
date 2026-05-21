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
        Fraktvillkor
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
            <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Fraktvillkor</h2>

            <div className="space-y-5 text-sm text-on-surface-variant leading-relaxed">
              <div>
                <h3 className="font-semibold text-primary mb-1">Leveranstid</h3>
                <p>Beställningar skickas inom 2–4 arbetsdagar. Leveranstid varierar beroende på din ort.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Fraktkostnad</h3>
                <p>Frakt tillkommer och beräknas vid köp via Instagram. Kontakta oss för mer information.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Upphämtning</h3>
                <p>Upphämtning i Stockholm är möjlig — kontakta oss via Instagram för att boka tid.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Reklamation</h3>
                <p>Vid skada under transport, kontakta oss inom 48 timmar med foto på skadan så löser vi det.</p>
              </div>
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
