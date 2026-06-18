"use client";
import { useState } from "react";

const videos = [
  {
    id: "PNBkPbBe0lw",
    title: "Hur du byter plast på ditt mini terrarium",
  },
  {
    id: "qgOUeaKuNUw",
    title: "Hur du byter plast på ditt terrarium",
  },
];

export default function YoutubeSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-on-primary-container uppercase tracking-widest mb-3 block">
            Videoguider
          </span>
          <h2 className="font-serif text-3xl font-bold text-on-primary">Se hur det går till</h2>
        </div>

        {/* Expanded player */}
        {active !== null && (
          <div className="mb-8 relative animate-[fadeIn_0.3s_ease-out]">
            <button
              onClick={() => setActive(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shadow-lg hover:bg-primary-fixed transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-primary-fixed-dim hover:text-primary text-xl">close</span>
            </button>
            <div className="rounded-2xl overflow-hidden aspect-video w-full shadow-2xl">
              <iframe
                key={videos[active].id}
                src={`https://www.youtube.com/embed/${videos[active].id}?autoplay=1&vq=hd720&hd=1`}
                title={videos[active].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Side-by-side thumbnails */}
        <div className="grid grid-cols-2 gap-4">
          {videos.map((v, i) => (
            <div key={v.id} className="flex flex-col gap-3">
              <button
                onClick={() => setActive(i === active ? null : i)}
                className={`group relative rounded-xl overflow-hidden aspect-video cursor-pointer transition-all duration-300 w-full ${
                  active === i
                    ? "ring-2 ring-on-tertiary-container scale-[0.98]"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
                  }}
                />
                <div className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${
                  active === i ? "bg-primary/60" : "bg-primary/30 group-hover:bg-primary/20"
                }`}>
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {active === i ? "pause" : "play_arrow"}
                    </span>
                  </div>
                </div>
              </button>
              <p className={`text-sm font-medium text-center transition-colors duration-200 ${
                active === i ? "text-on-primary-container" : "text-on-primary-container/70"
              }`}>
                {v.title}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-on-primary-container/60 text-xs mt-6">
          Fler videos på{" "}
          <a
            href="https://www.youtube.com/@marcusterrarium"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-on-primary-container transition-colors"
          >
            YouTube
          </a>
        </p>
      </div>
    </section>
  );
}
