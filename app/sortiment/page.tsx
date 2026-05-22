import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sortiment — Handgjorda Terrarier",
  description:
    "Köp handgjorda glasterrarier i Stockholm. Mini från 49 kr, litet, medelstort, stort och XL-terrarium upp till 1 195 kr. Beställ via Instagram.",
  alternates: { canonical: "/sortiment" },
};

const products = [
  {
    name: "Mini terrarium",
    price: "49:-",
    size: "H 7,5cm × B 3cm",
    tag: null,
    tagClass: "",
    desc: "Ett litet ekosystem i miniformat — perfekt som present eller skrivbordsdekoration.",
    image: "/images/mini-terrarium.png",
  },
  {
    name: "Litet terrarium",
    price: "175:-",
    size: "H 15cm × B 8cm",
    tag: null,
    tagClass: "",
    desc: "Frodiga växter i ett elegant glas. Enkel att sköta och fin i alla rum.",
    image: "/images/sm-terrarium.png",
  },
  {
    name: "Medelstort terrarium",
    price: "549:-",
    size: "H 16cm × B 5cm",
    tag: null,
    tagClass: "",
    desc: "Ett väl avvägt ekosystem med frodiga växter — en uppskattad present till alla tillfällen.",
    image: "/images/md-terrarium.png",
  },
  {
    name: "Medelstort terrarium",
    price: "549:-",
    size: "H 19cm × B 10cm",
    tag: null,
    tagClass: "",
    desc: "Rymligare variant med plats för fler växter och en mer dramatisk komposition.",
    image: "/images/md-terrarium-2.png",
  },
  {
    name: "Stort terrarium",
    price: "895:-",
    size: "H 30cm × B 8cm",
    tag: null,
    tagClass: "",
    desc: "En imponerande komposition med höga växter som skapar ett riktigt blickfång i rummet.",
    image: "/images/lg-terrarium.png",
  },
  {
    name: "Stort terrarium",
    price: "895:-",
    size: "H 30cm × B 8cm",
    tag: null,
    tagClass: "",
    desc: "Frodig och tät vegetation i ett högt glas — ett levande konstverk för hemmet.",
    image: "/images/lg-terrarium-2.png",
  },
  {
    name: "XL-terrarium",
    price: "1.195:-",
    size: "H 45cm × B 18cm",
    tag: "Störst",
    tagClass: "bg-primary-container text-primary-fixed",
    desc: "Vårt största terrarium med en hel miniatyrskog inuti. En riktig eye-catcher.",
    image: "/images/xl-terrarium.png",
  },
];

export default function Sortiment() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <header className="mb-16 md:mb-24 text-center" aria-label="Sortiment">
          <span className="text-xs font-semibold text-on-tertiary-container uppercase tracking-widest mb-4 block">
            Handgjorda ekosystem
          </span>
          <h1 className="font-serif text-5xl font-bold text-primary mb-6">Vårt Sortiment</h1>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant leading-relaxed">
            Varje terrarium är ett unikt konstverk skapat för att vara en självgående oas i ditt hem.
            Upptäck vår kollektion av noggrant komponerade glasterrarier.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {products.map((p, i) => (
            <article
              key={`${p.name}-${i}`}
              className="group flex flex-col h-full bg-surface-container-low rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(26,47,35,0.04)] transition-all duration-500 hover:shadow-[0px_16px_40px_rgba(26,47,35,0.08)]"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-surface-container">
                <img
                  src={p.image}
                  alt={`${p.name} ${p.size}`}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                {p.tag && (
                  <div className="absolute top-4 left-4">
                    <span className={`${p.tagClass} text-xs font-semibold px-3 py-1 rounded-full`}>{p.tag}</span>
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-serif text-2xl font-semibold text-primary mb-1">{p.name}</h2>
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-4">{p.size}</span>
                <p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-2xl text-secondary">{p.price}</span>
                </div>
                <a
                  href="https://www.instagram.com/marcus_terrarium/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-primary text-on-primary py-4 px-8 rounded-lg text-sm hover:bg-primary-container transition-all duration-300"
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                  Köp via Instagram
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Info Banner */}
        <section aria-label="Om terrarier" className="mt-20 bg-primary-container rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-semibold text-primary-fixed mb-6">Vad är ett terrarium?</h2>
            <p className="text-lg text-on-primary-container mb-6 leading-relaxed">
              Ett terrarium är en miniatyrversion av ett naturligt ekosystem, där en begränsad mängd resurser
              används för att upprätthålla livet för växterna och mikroorganismerna som finns där inne.
            </p>
            <div className="space-y-4">
              {[
                { icon: "air", text: "Växterna producerar syre genom fotosyntes i den slutna behållaren." },
                { icon: "cloudy_snowing", text: "Vatten avdunstar och samlas på det kalla glaset för att sedan regna tillbaka." },
              ].map(({ icon, text }) => (
                <div key={icon} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed mt-1">{icon}</span>
                  <p className="text-sm text-on-primary-container">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 min-h-[400px] relative">
            <img
              src="/images/xl-terrarium.png"
              alt="XL terrarium"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
