import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkotselSection from "./components/SkotselSection";
import YoutubeSection from "./components/YoutubeSection";

const whyItems = [
  {
    icon: "eco",
    title: "Hållbarhet",
    desc: "Våra terrarier är slutna ekosystem som återvinner sitt eget vatten. De kräver minimal skötsel och lever i symbios med sin omgivning.",
  },
  {
    icon: "palette",
    title: "Estetik",
    desc: "Varje objekt är ett unikt konstverk. Kombinationen av glas, levande växter och organiska material skapar en lugnande blickpunkt i rummet.",
  },
  {
    icon: "self_improvement",
    title: "Välmående",
    desc: "Att ha levande grönska nära sig sänker stressnivåer. Ett terrarium ger dig en bit skog att vila ögonen på, oavsett årstid.",
  },
];

const smallProducts = [
  {
    name: "Mini terrarium",
    price: "49:-",
    image: "/images/mini-terrarium.png",
    alt: "Mini terrarium H 7,5cm × B 3cm",
  },
  {
    name: "Litet terrarium",
    price: "175:-",
    image: "/images/sm-terrarium.png",
    alt: "Litet terrarium H 15cm × B 8cm",
  },
  {
    name: "Medelstort terrarium",
    price: "549:-",
    image: "/images/md-terrarium.png",
    alt: "Medelstort terrarium H 16cm × B 5cm",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/terrarium-hero.jpg"
              alt="Handgjort glasterrarium med frodig mossa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-surface-container-lowest leading-tight tracking-tight">
                Skapa ditt eget lilla ekosystem
              </h1>
              <p className="text-lg mb-10 text-surface-bright/90 max-w-lg leading-relaxed">
                Handgjorda terrarier som för in naturen i ditt hem. Ett självgående stycke natur i glas,
                designat för att hålla i generationer.
              </p>
              <Link
                href="/sortiment"
                className="inline-flex items-center px-10 py-5 bg-primary text-on-primary text-xs font-semibold tracking-widest uppercase transition-all hover:bg-primary-container hover:shadow-xl hover:-translate-y-1"
              >
                Se vårt sortiment
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="material-symbols-outlined text-surface-bright opacity-50 text-4xl">expand_more</span>
          </div>
        </section>

        {/* Why Terrarium */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIY7Sejg1RbMKk_JgKM1Wt24RwJSuMI66PxJ4yTpTC7b-h0qrQE3bkdhoqilAwY_kWPy6Pu-xXHgxWuBOlbzaHMSEZ-AQ_qZFINuGiI4weKsD_XAV94TwEXM3-_MhcSsBwVHb9mc5Z3qPgPCqztxl2ERGMcbjnmD0SmC55gepPLCndrtS7CtCZv612ga6C6Po4bkO37ORE8cu-wMipWxy-ay2q88_xc5fS6FwwfX_IV-UET_Pw17CAzd5LAOkgYaqfiYAv56oUwsM"
                  alt="Close up of lush terrarium interior with moss and ferns"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12 order-1 md:order-2 mb-12 md:mb-0">
              <span className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4 block">Filosofin</span>
              <h2 className="font-serif text-3xl font-semibold text-primary mb-8">Varför ett terrarium?</h2>
              <div className="space-y-10">
                {whyItems.map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                      <p className="text-on-surface-variant leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Highlights */}
        <section className="py-20 bg-surface-container-low" id="sortiment">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-4">Utvalt sortiment</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">
                Utforska våra mest populära kompositioner, från bordterrarier till stora golvmodeller.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured large card */}
              <Link href="/sortiment" className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm border border-outline-variant/20 block">
                <div className="aspect-video w-full overflow-hidden bg-surface-container">
                  <img
                    src="/images/xl-terrarium.png"
                    alt="XL-terrarium H 45cm × B 18cm"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-semibold text-secondary uppercase tracking-widest">H 45cm × B 18cm</span>
                      <h3 className="font-serif text-2xl font-semibold text-primary mt-2">XL-terrarium</h3>
                    </div>
                    <span className="font-serif text-2xl text-primary">1.195:-</span>
                  </div>
                </div>
              </Link>
              {/* Custom order CTA */}
              <div className="bg-primary-container p-8 flex flex-col justify-between rounded-xl group">
                <div>
                  <span className="material-symbols-outlined text-4xl mb-6 opacity-80 text-primary-fixed block">auto_awesome</span>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-primary-fixed">Skräddarsytt</h3>
                  <p className="text-on-primary-container opacity-80">Vill du ha något helt unikt? Vi designar terrarier efter dina önskemål och mått.</p>
                </div>
                <Link href="https://www.instagram.com/marcus_terrarium/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mt-12 text-on-primary-container hover:translate-x-2 transition-transform">
                  Boka konsultation <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              {/* Small product cards */}
              {smallProducts.map((p) => (
                <Link href="/sortiment" key={p.name} className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm border border-outline-variant/20 block">
                  <div className="aspect-square overflow-hidden bg-surface-container">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary">{p.name}</h3>
                    <p className="text-on-surface-variant text-sm">{p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Skötselråd */}
        <SkotselSection compact />
        <YoutubeSection />

      </main>
      <Footer />
    </>
  );
}
