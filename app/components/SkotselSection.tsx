const tips = [
  {
    icon: "light_mode",
    title: "Placering & Ljus",
    desc: "Placera i indirekt solljus, vid ett fönster eller ljust rum. Fungerar även under en lampa ~8 timmar per dygn.",
    bg: "bg-secondary-container/30",
    iconBg: "border border-primary/20",
  },
  {
    icon: "water_drop",
    title: "Kondens",
    desc: "Kondens på insidan av glaset är helt normalt — ett tecken på den höga luftfuktigheten växterna behöver.",
    bg: "bg-surface-container-low",
    iconBg: "bg-primary/5",
  },
  {
    icon: "content_cut",
    title: "Beskärning",
    desc: "Klipp bort växter vid behov om det blir för tät växtlighet för att bibehålla balansen i ekosystemet.",
    bg: "bg-surface-container-lowest",
    iconBg: "bg-tertiary-fixed",
  },
  {
    icon: "air",
    title: "Vädring",
    desc: "Vädra ca en gång i månaden genom att ta bort locket några minuter och låt ny luft komma in.",
    bg: "bg-surface-container-lowest",
    iconBg: "bg-tertiary-fixed",
  },
  {
    icon: "clean_hands",
    title: "Putsning",
    desc: "Putsa insidan med lätt fuktat hushållspapper. Använd endast vatten — aldrig rengöringsmedel.",
    bg: "bg-surface-container-lowest",
    iconBg: "bg-tertiary-fixed",
  },
];

export default function SkotselSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`px-6 ${compact ? "py-20" : "py-20"} ${compact ? "bg-surface-container-low" : ""}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`${compact ? "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" : "text-center mb-16"}`}>
          <div>
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3 block">
              Hållbarhet &amp; Harmoni
            </span>
            <h2 className="font-serif text-3xl font-semibold text-primary">Skötselråd</h2>
          </div>
          {compact && (
            <p className="text-on-surface-variant max-w-md">
              Ett terrarium sköter sig nästan självt — men här är det du behöver veta.
            </p>
          )}
          {!compact && (
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-4">
              Ett terrarium är ett självförsörjande ekosystem. Skötselråden är enkla men viktiga för att dina växter ska trivas under lång tid framöver.
            </p>
          )}
        </div>

        {compact ? (
          /* Compact 5-column grid for homepage */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tips.map(({ icon, title, desc, iconBg }) => (
              <div
                key={title}
                className="bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-4 shadow-[0px_10px_30px_rgba(26,47,35,0.04)] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
                </div>
                <h3 className="font-serif text-base font-semibold text-primary">{title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Full bento grid for information page */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Placering & Ljus — large */}
            <div className="md:col-span-8 bg-secondary-container/30 p-10 rounded-xl border border-outline-variant/20 flex flex-col justify-between min-h-[360px] hover:-translate-y-1 transition-all duration-300 shadow-[0px_10px_30px_rgba(26,47,35,0.04)] hover:shadow-[0px_20px_40px_rgba(26,47,35,0.08)]">
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">light_mode</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Placering &amp; Ljus</h3>
                  <div className="space-y-3 max-w-2xl">
                    <p className="text-lg text-on-secondary-container leading-relaxed">
                      Placera terrariet i <strong className="text-primary">indirekt solljus</strong>, exempelvis vid ett fönster eller i ett ljust rum. Undvik direkt solljus då värmen blir för hög för de känsliga växterna bakom glaset.
                    </p>
                    <p className="text-base text-on-secondary-container/80 italic">
                      Tips: Terrariet fungerar även bra under en stark lampa med vitt eller varmvitt ljus, cirka 8 timmar per dygn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-8 text-primary">
                <span className="material-symbols-outlined">wb_sunny</span>
                <span className="text-xs font-semibold uppercase tracking-wider">8 Timmar / Dygn</span>
              </div>
            </div>

            {/* Kondens */}
            <div className="md:col-span-4 bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300 shadow-[0px_10px_30px_rgba(26,47,35,0.04)] hover:shadow-[0px_20px_40px_rgba(26,47,35,0.08)]">
              <div className="w-16 h-16 mb-8 rounded-full bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Kondens</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Det är helt normalt att det bildas kondens på insidan av glaset. Det är ett tecken på den höga luftfuktigheten som krävs. Mängden varierar ofta naturligt under dygnet.
              </p>
            </div>

            {/* Beskärning */}
            <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl flex flex-col gap-6 hover:-translate-y-1 transition-all duration-300 shadow-[0px_10px_30px_rgba(26,47,35,0.04)] hover:shadow-[0px_20px_40px_rgba(26,47,35,0.08)]">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary-fixed">content_cut</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary">Beskärning</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Klipp bort växter vid behov om det blir för tät växtlighet. Detta hjälper till att bibehålla balansen i ditt ekosystem.
              </p>
            </div>

            {/* Vädring */}
            <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl flex flex-col gap-6 hover:-translate-y-1 transition-all duration-300 shadow-[0px_10px_30px_rgba(26,47,35,0.04)] hover:shadow-[0px_20px_40px_rgba(26,47,35,0.08)]">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary-fixed">air</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary">Vädring</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Vädra ca en gång i månaden genom att ta bort locket några minuter. Släpp in ny luft och förslut sedan noga igen.
              </p>
            </div>

            {/* Putsning */}
            <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl flex flex-col gap-6 hover:-translate-y-1 transition-all duration-300 shadow-[0px_10px_30px_rgba(26,47,35,0.04)] hover:shadow-[0px_20px_40px_rgba(26,47,35,0.08)]">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary-fixed">clean_hands</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary">Putsning</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Putsa insidan av glaset med lätt fuktat hushållspapper. Använd <strong className="text-primary">endast vatten</strong> — aldrig rengöringsmedel eller fönsterputs.
              </p>
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <div className="mt-12 bg-primary rounded-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-on-primary">Lycka till!</h3>
            <p className="text-on-primary-container max-w-lg">
              Terrariet sköter i stort sett sig självt så länge det får tillräckligt med ljus. Har du fler frågor? Se mina videoguider på YouTube.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@marcusterrarium"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-on-tertiary-container text-primary px-8 py-4 rounded-full font-bold whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined">play_circle</span>
            Se guiden på YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
