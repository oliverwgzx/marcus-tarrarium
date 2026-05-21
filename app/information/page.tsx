import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkotselSection from "../components/SkotselSection";

const cycleSteps = [
  {
    icon: "eco",
    title: "Produktion",
    desc: "Dessa samverkar med varandra och sin omgivning för att skapa en självförsörjande enhet. Växterna producerar syre genom fotosyntes.",
  },
  {
    icon: "thermostat",
    title: "Avdunstning",
    desc: "Värmen i den slutna behållaren gör att vattnet avdunstar från jorden och växternas blad, vilket skapar en fuktig atmosfär.",
  },
  {
    icon: "water_drop",
    title: "Regn",
    desc: 'Ångan samlas på det kallare glaset för att sedan "regna" tillbaka ner till jorden och växterna, precis som i naturen.',
  },
];

export default function Information() {
  return (
    <>
      <Navbar />
      <main className="pt-32 overflow-x-hidden">
        {/* Hero */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Utbildning</span>
              <h1 className="font-serif text-5xl font-bold text-primary leading-tight">Vad är ett terrarium?</h1>
              <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
                Ett terrarium är en miniatyrversion av ett naturligt ekosystem, där en begränsad mängd resurser
                används för att upprätthålla livet för växterna och mikroorganismerna som finns där inne.
              </p>
            </div>
            <div className="md:col-span-6 relative aspect-square md:h-[600px] md:aspect-auto overflow-hidden rounded-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbyX8ArXx4aU1gBm420AmXEIcAF-DCHINvRg0XpsmiHIrnRkaV-zp-4royeRIzGDFqmtPAJ95gkGqi5Wzm_BcYUDduK9NrvNRXtHbv4PL4ML5ts0Y7cp026DpbQ7Di27x3ChTNBE1qEoQIIHpyHjZDAcHeXXY_aR3gw-kA5zMzauhVA9KgJdYHVPAv24Eimj_S_fm9HLPrcIpdD1j1LvtFv8eEVGtcKRitIyGbgEVWO_V3nL9_HUkZhIEGtIpfYFgZwmEFMVd4Ec4"
                alt="Macro photograph of a lush moss terrarium in a glass jar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Closed Cycle */}
        <section className="px-6 py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-4">Det slutna kretsloppet</h2>
              <div className="w-16 h-1 bg-primary-container mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cycleSteps.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-surface-container-lowest p-8 rounded-xl transition-all hover:shadow-[0px_10px_30px_rgba(26,47,35,0.04)]"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-on-secondary-container">{icon}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skötselråd */}
        <SkotselSection />

        {/* Quote Banner */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-primary-container p-12 md:p-24">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 right-10 w-64 h-64 border border-surface rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-surface rounded-full" />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl italic text-primary-fixed mb-6 leading-tight">
                  Ett litet universum bakom glas.
                </h2>
                <p className="text-lg text-primary-fixed-dim leading-relaxed">
                  Genom att observera ett terrarium får man en unik inblick i naturens mest grundläggande
                  processer. Det är inte bara en inredningsdetalj, utan ett levande konstverk som sköter sig självt.
                </p>
                <div className="mt-10">
                  <Link
                    href="/sortiment"
                    className="inline-block bg-primary-fixed text-primary px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-surface transition-all duration-300 hover:scale-105"
                  >
                    Utforska kollektionen
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-96 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-dashed border-primary-fixed/30 rounded-full animate-[spin_20s_linear_infinite]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-fixed rounded-full opacity-80" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-fixed rounded-full opacity-80" />
                  <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-primary-fixed rounded-full opacity-80" />
                  <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-primary-fixed rounded-full opacity-80" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed text-7xl opacity-50">nest_eco_leaf</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Quote */}
        <section className="px-6 py-20 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="material-symbols-outlined text-4xl text-primary/30 block">eco</span>
            <p className="font-serif text-2xl italic text-secondary leading-relaxed">
              "Ett terrarium är beviset på att livet hittar en väg, även på den minsta av ytor,
              så länge balansen bibehålls."
            </p>
            <div className="pt-4 border-t border-outline-variant/30 w-32 mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
