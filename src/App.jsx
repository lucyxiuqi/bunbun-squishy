import React, { useMemo, useState } from "react";
import webtitle from "./assets/webtitle.png";
import webhero from "./assets/webhero.png";

const colors = {
  blushCream: "#FDE6E0",
  candyPink: "#F9A2A0",
  strawberryPink: "#EC6D6C",
  softBerryPink: "#F47A82",
  peachBun: "#F9CEA9",
  warmBunBrown: "#E6975F",
  caramelToast: "#CF6E35",
  wheatGold: "#B59754",
};

const products = [
  {
    name: "MIDO Red Nose Toast",
    price: "Coming Soon",
    tag: "MIDO",
    category: "Bread Series",
    accent: "RN",
    description: "A collectible bread-style slow rising squishy from MIDO's loved Red Nose series.",
  },
  {
    name: "Lisa Strawberry Bun",
    price: "Coming Soon",
    tag: "Lisa",
    category: "Bakery",
    accent: "LS",
    description: "Soft pastel bakery sweetness with Lisa's cute character-style squishy charm.",
  },
  {
    name: "3AN Cozy Character",
    price: "Coming Soon",
    tag: "3AN",
    category: "Character",
    accent: "3A",
    description: "A playful collector-style design for fans of cute, expressive slow rising pieces.",
  },
  {
    name: "BunBun Bakery Pick",
    price: "Coming Soon",
    tag: "Featured",
    category: "Bakery",
    accent: "BB",
    description: "A curated bakery-inspired squishy pick for UK and European collectors.",
  },
  {
    name: "Pastel Dessert Drop",
    price: "Coming Soon",
    tag: "Giftable",
    category: "Dessert",
    accent: "PD",
    description: "Sweet, soft and gift-ready. Ideal for collectors who love pastel dessert designs.",
  },
  {
    name: "Slow Rise Surprise",
    price: "Coming Soon",
    tag: "New Drop",
    category: "Blind Box",
    accent: "SR",
    description: "A surprise-style slow rising treat for playful collecting and gifting moments.",
  },
];

const brandCollections = [
  {
    brand: "MIDO",
    title: "Red Nose & collectible bread series",
    text: "A dedicated MIDO collection page for Red Nose releases, bread characters, rare drops and collector favourites.",
    accent: "MI",
  },
  {
    brand: "3AN",
    title: "Character-led slow rising designs",
    text: "A curated 3AN collection page for cute, expressive and niche collector-loved squishy releases.",
    accent: "3A",
  },
  {
    brand: "Lisa",
    title: "Pastel bakery and dessert softness",
    text: "A Lisa collection page for sweet, pastel, giftable squishies with soft bakery and character themes.",
    accent: "LI",
  },
  {
    brand: "iBloom",
    title: "Premium Japanese slow rising favourites",
    text: "An iBloom collection page for soft, high-quality squishies loved by collectors for their charming designs and satisfying slow-rise feel.",
    accent: "IB",
  },
  {
    brand: "Sweet Buns",
    title: "Bakery-inspired cute collectibles",
    text: "A Sweet Buns collection page for bread, dessert and pastel-themed squishies with a warm, giftable bakery feel.",
    accent: "SB",
  },
  {
    brand: "Zoey Squishy",
    title: "Playful designs for everyday joy",
    text: "A Zoey Squishy collection page for colourful, cute and collector-friendly slow rising designs.",
    accent: "ZS",
  },
];

function filterProducts(productList, searchTerm) {
  const normalized = searchTerm.trim().toLowerCase();
  if (!normalized) return productList;

  return productList.filter((product) =>
    [product.name, product.category, product.tag, product.description]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}

function runSmokeTests() {
  const midoResults = filterProducts(products, "mido");
  console.assert(midoResults.length === 1 && midoResults[0].name.includes("MIDO"), "Search should return the MIDO product.");

  const bakeryResults = filterProducts(products, "bakery");
  console.assert(bakeryResults.length >= 2, "Search should find bakery-related products.");

  const allResults = filterProducts(products, "   ");
  console.assert(allResults.length === products.length, "Blank search should return all products.");
}

if (typeof window !== "undefined") {
  runSmokeTests();
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-white/80 bg-white/85 shadow-lg shadow-[#EC6D6C]/5 ${className}`}>
      {children}
    </div>
  );
}

function Button({ children, className = "", variant = "solid", type = "button", ...props }) {
  const base = "inline-flex items-center justify-center rounded-full font-black tracking-wide transition focus:outline-none focus:ring-4 focus:ring-[#F9A2A0]/30 cute-font";
  const styles =
    variant === "outline"
      ? "border border-[#F9A2A0]/50 bg-white text-[#B1682F] hover:bg-[#FDE6E0]"
      : "bg-[#EC6D6C] text-white shadow-lg shadow-[#EC6D6C]/20 hover:bg-[#F47A82]";

  return (
    <button type={type} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function MiniMark({ label = "BB", className = "" }) {
  return (
    <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-[#FDE6E0] to-[#F9CEA9] text-sm font-black text-[#CF6E35] shadow-inner ring-2 ring-white cute-font ${className}`}>
      <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#EC6D6C] ring-2 ring-white" />
      <span>{label}</span>
    </div>
  );
}

function ProductVisual({ label }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-[#FDE6E0] via-[#FFF7F4] to-[#F9CEA9]">
      <div className="absolute left-8 top-8 h-10 w-10 rounded-full bg-white/50" />
      <div className="absolute right-10 bottom-9 h-16 w-16 rounded-full bg-[#F9A2A0]/25" />
      <div className="absolute right-8 top-8 h-3 w-16 rounded-full bg-[#B59754]/25" />
      <div className="relative flex h-32 w-32 items-center justify-center rounded-[2.25rem] bg-white/80 shadow-inner ring-4 ring-white">
        <div className="absolute left-7 top-6 h-3 w-14 rounded-full bg-[#CF6E35]/20" />
        <div className="absolute bottom-6 right-6 h-9 w-9 rounded-full bg-[#EC6D6C] ring-4 ring-white" />
        <span className="text-3xl font-black text-[#CF6E35] cute-font">{label}</span>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center rounded-full border border-[#F9A2A0]/40 bg-white/75 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-[#EC6D6C] shadow-sm cute-font">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-[#7A3E1B] md:text-5xl cute-font">{title}</h2>
      {children && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#8A5A3D] md:text-lg">{children}</p>}
    </div>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-full px-4 py-2 text-sm font-bold text-[#8A5A3D] transition hover:bg-white hover:text-[#EC6D6C] cute-font"
    >
      {children}
    </a>
  );
}

function BunBunLogo({ compact = false }) {
  return (
    <div className="relative mx-auto flex max-w-xl items-center justify-center">
      <span className="absolute -left-2 top-4 h-5 w-5 rounded-full bg-[#EC6D6C]/80" />
      <span className="absolute right-2 top-10 h-3 w-12 rounded-full bg-[#B59754]/30" />
      <span className="absolute bottom-5 left-16 h-4 w-4 rounded-full bg-[#F9A2A0]" />
      <div className="relative rounded-[2.5rem] border-4 border-white bg-[#FFF7F4] px-6 py-6 shadow-[0_18px_40px_rgba(236,109,108,0.16)] ring-4 ring-[#F9A2A0]/25 md:px-9">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="relative flex h-32 w-32 shrink-0 animate-[floaty_4s_ease-in-out_infinite] items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#F9CEA9] to-[#FFF7F4] shadow-inner ring-4 ring-white md:h-40 md:w-40">
            <span className="absolute left-5 top-4 h-4 w-12 rounded-full bg-[#CF6E35]/25" />
            <span className="absolute left-8 top-8 h-3 w-16 rounded-full bg-[#CF6E35]/20" />
            <span className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-[#EC6D6C] ring-4 ring-white" />
            <span className="absolute bottom-9 right-9 h-4 w-4 rounded-full bg-white/50" />
            <span className="relative z-10 text-3xl font-black text-[#CF6E35] cute-font">BB</span>
          </div>

          <div className="text-center md:text-left">
            <h1 className={`${compact ? "text-3xl md:text-4xl" : "text-5xl md:text-7xl"} font-black leading-none tracking-tight cute-font`}>
              <span className="block text-[#F47A82] drop-shadow-sm">BunBun</span>
              <span className="block text-[#CF6E35] drop-shadow-sm">Squishy</span>
            </h1>
            <div className="mt-4 inline-flex rounded-full bg-[#F9A2A0] px-5 py-2 text-sm font-black lowercase tracking-wide text-white shadow-md cute-font">
              slow rising squishies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SlowRisingSquishyShop() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredProducts = useMemo(() => filterProducts(products, query), [query]);

  const links = [
    ["#about", "About"],
    ["#shop", "New Arrivals"],
    ["#brands", "Brands"],
    ["#knowledge", "What is squishy?"],
    ["#charity", "Charity"],
    ["#contact", "Contact"],
  ];

  return (
    <main className="min-h-screen scroll-smooth bg-[#FFF7F4] text-[#5C2F16]">
      <style>{`
        .cute-font {
          font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Comic Sans MS", ui-rounded, system-ui, sans-serif;
          letter-spacing: -0.015em;
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-100px] top-[-80px] h-72 w-72 rounded-full bg-[#FDE6E0] blur-3xl" />
        <div className="absolute right-[-100px] top-[120px] h-80 w-80 rounded-full bg-[#F9CEA9]/50 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[10%] h-96 w-96 rounded-full bg-[#F9A2A0]/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/70 bg-[#FFF7F4]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={webtitle}
              alt="BunBun Squishy logo"
              className="h-14 w-auto object-contain"
            />
            <div>
              <p className="text-lg font-black text-[#7A3E1B] cute-font">BunBun Squishy</p>
              <p className="text-xs font-bold text-[#B1682F]">UK & Europe slow rising shop</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(([href, label]) => (
              <NavLink key={href} href={href}>{label}</NavLink>
            ))}
          </nav>

          <Button className="hidden px-5 py-3 md:inline-flex">Shop Now</Button>

          <button
            className="rounded-full bg-white px-3 py-2 text-[#7A3E1B] shadow-sm lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/70 bg-[#FFF7F4] px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {links.map(([href, label]) => (
                <NavLink key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="absolute left-8 top-14 h-3 w-16 rounded-full bg-[#F9A2A0]/40" />
        <div className="absolute right-12 top-24 h-10 w-10 rounded-full bg-[#EC6D6C]/20" />
        <div className="absolute bottom-14 left-16 h-24 w-24 rounded-full bg-[#F9CEA9]/30 blur-sm" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-[#F9A2A0]/40 bg-white/80 px-5 py-2 text-sm font-black text-[#EC6D6C] shadow-sm cute-font">
              UK-based slow rising squishy shop for the UK & Europe
            </div>
            <h2 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[#7A3E1B] md:text-7xl cute-font">
              Cute, collectible squishies with a softer shopping experience.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#8A5A3D]">
              BunBun Squishy brings loved slow rising squishy brands to collectors across the UK and Europe — with a bakery-inspired identity, soft pastel warmth and a more premium-cute online shop experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="px-8 py-6 text-base">Explore Collections</Button>
              <Button variant="outline" className="px-8 py-6 text-base">What is slow rising?</Button>
            </div>
          </div>

          <div>
            <div className="relative rounded-[3rem] border border-white/80 bg-white/70 p-5 shadow-[0_24px_70px_rgba(236,109,108,0.16)] backdrop-blur-sm">
              <div className="absolute -right-4 -top-4 rounded-3xl bg-[#EC6D6C] px-5 py-4 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-wider">Stocked brands</p>
                <p className="text-lg font-black cute-font">MIDO · 3AN · Lisa</p>
              </div>
              <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FDE6E0] via-[#FFF7F4] to-[#F9CEA9]/70 p-3">
                <img 
                  src={webhero}
                  alt="BunBun welcoming visitors"
                  className="aspect-[16/9] w-full rounded-[2rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#F9A2A0]/40 bg-white/75 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-[#EC6D6C] shadow-sm cute-font">
            About the brand
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#7A3E1B] md:text-5xl cute-font">
            Cute, bakery-inspired, but more refined.
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-base leading-8 text-[#8A5A3D] md:text-lg md:leading-9">
            Based in the UK, BunBun Squishy was created to share the gentle joy of slow rising squishies with people of all ages — children, adults and older customers alike. We believe that a soft squeeze, a cute design and a small moment of calm can brighten everyday life. Our shop brings together carefully selected slow rising squishies with a warm, bakery-inspired style, making them easy to collect, gift and enjoy across the UK and Europe. Beyond being adorable collectibles, squishies can also offer a comforting sensory experience. For some autistic people, people with ADHD or anyone who benefits from tactile tools, the soft, repetitive squeeze may support focus, relaxation, busy hands and self-regulation routines. Every person is different, and our squishies are not medical products or treatments, but we hope they can become gentle companions for those who find comfort in sensory play. BunBun Squishy is about softness, kindness and little moments of happiness.
          </p>
        </div>
      </section>

      <section id="shop" className="px-5 py-20">
        <SectionTitle eyebrow="Online shop" title="New arrivals" />

        <div className="mx-auto mb-8 flex max-w-xl items-center gap-3 rounded-full border border-[#FDE6E0] bg-white px-5 py-3 shadow-lg shadow-[#EC6D6C]/5">
          <span className="h-3 w-3 rounded-full bg-[#EC6D6C]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search MIDO, 3AN, Lisa, bakery, Red Nose..."
            className="w-full bg-transparent text-[#7A3E1B] outline-none placeholder:text-[#C48C78]"
          />
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Card key={product.name} className="group h-full overflow-hidden bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#EC6D6C]/10">
              <ProductVisual label={product.accent} />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#FDE6E0] px-3 py-1 text-xs font-black text-[#EC6D6C]">{product.tag}</span>
                  <span className="text-sm font-black text-[#CF6E35]">{product.price}</span>
                </div>
                <h3 className="text-xl font-black text-[#7A3E1B] cute-font">{product.name}</h3>
                <p className="mt-3 min-h-20 leading-7 text-[#8A5A3D]">{product.description}</p>
                <Button className="mt-5 w-full py-3">View Product</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="brands" className="bg-white/40 px-5 py-20">
        <SectionTitle eyebrow="Brand collections" title="Popular Brands" />

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {brandCollections.map((item) => (
            <Card key={item.brand} className="group overflow-hidden shadow-xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#EC6D6C]/10">
              <div className="p-8">
                <ProductVisual label={item.accent} />
                <div className="mt-6">
                  <span className="rounded-full bg-[#FDE6E0] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#EC6D6C]">Stocked Brand</span>
                  <h3 className="mt-5 text-4xl font-black text-[#7A3E1B] cute-font">{item.brand}</h3>
                  <p className="mt-3 text-lg font-black text-[#CF6E35] cute-font">{item.title}</p>
                  <p className="mt-4 min-h-28 leading-7 text-[#8A5A3D]">{item.text}</p>
                  <Button className="mt-6 px-6 py-3">Explore {item.brand}</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="knowledge" className="bg-white/40 px-5 py-20">
        <SectionTitle eyebrow="Fun knowledge" title="What is a slow rising squishy?">
          Slow rising squishies are usually made with soft polyurethane foam, often called PU foam. They are designed to feel light, airy and squeezable, then gradually return to shape after gentle pressure.
        </SectionTitle>

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.15fr]">
          <Card className="overflow-hidden shadow-xl">
            <div className="bg-gradient-to-br from-[#FDE6E0] via-[#FFF7F4] to-[#F9CEA9] p-10 text-center">
              <div className="mx-auto flex h-48 w-48 animate-[floaty_4s_ease-in-out_infinite] items-center justify-center rounded-[3rem] bg-white/75 shadow-inner ring-4 ring-white">
                <span className="text-4xl font-black text-[#CF6E35] cute-font">PU</span>
              </div>
              <div className="mt-8 inline-flex rounded-full bg-[#F9A2A0] px-5 py-2 text-sm font-black text-white cute-font">
                squeeze · wait · rise
              </div>
              <p className="mx-auto mt-5 max-w-sm text-sm font-semibold leading-7 text-[#8A5A3D]">
                A slow rising squishy is not just a cute toy — it is also a tactile sensory item that many people enjoy for its soft, repetitive and calming squeeze.
              </p>
            </div>
          </Card>

          <div className="grid gap-5">
            {[
              ["Made from PU foam", "Most slow rising squishies are made from polyurethane foam. This material can be soft, lightweight and airy, which helps create the signature slow-return feeling after squeezing."],
              ["The slow rising effect", "When you press the squishy, the foam compresses. As air and structure recover, it gradually rises back to shape. Different designs can rise faster or slower depending on foam density, shape and size."],
              ["Cleaning & care", "Use a slightly damp cloth with mild soap to gently wipe the surface. Avoid soaking, scrubbing, twisting, washing machines, dryers, heat and direct sunlight. Let it air dry fully before storing."],
              ["How to store", "Keep your squishies in a cool, dry place away from sharp objects, heavy pressure and dust. Avoid pulling small parts or stretching printed areas, as this may damage the surface."],
              ["Sensory comfort", "Some autistic people and people with ADHD may find soft fidget or sensory items helpful for busy hands, self-regulation, calming routines or focus. Everyone is different, so squishies should be used as a personal comfort tool, not as a medical treatment."],
            ].map(([title, text], index) => (
              <Card key={title}>
                <div className="flex gap-4 p-6">
                  <MiniMark label={`0${index + 1}`} className="h-14 w-14" />
                  <div>
                    <h3 className="text-xl font-black text-[#7A3E1B] cute-font">{title}</h3>
                    <p className="mt-2 leading-7 text-[#8A5A3D]">{text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-7xl rounded-[2rem] border border-[#F9A2A0]/30 bg-white/75 p-5 text-sm font-semibold leading-7 text-[#8A5A3D] shadow-lg shadow-[#EC6D6C]/5">
          <span className="font-black text-[#EC6D6C] cute-font">Safety note:</span> Squishies are collectible sensory toys. They are not chew toys and are not suitable for children under 3 years old or anyone likely to bite or tear foam pieces. Adult supervision is recommended for young children.
        </div>
      </section>

      <section id="charity" className="px-5 py-20">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-gradient-to-r from-[#EC6D6C] to-[#F9A2A0] p-8 text-white shadow-2xl shadow-[#EC6D6C]/20 md:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-black cute-font">
              Charity
            </div>
            <h2 className="text-3xl font-black md:text-5xl cute-font">Soft toys, softer hearts.</h2>
            <p className="mt-5 text-lg leading-8 text-white/90">
              As BunBun Squishy grows, we hope to support UK charities that help children, families and people with sensory needs. Our charity direction focuses on two gentle themes: sensory support for children and families, and joy-giving projects for children in hospital or care settings.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="bg-white/95 shadow-xl">
              <div className="p-8 text-[#7A3E1B]">
                <MiniMark label="01" className="mb-5 h-16 w-16" />
                <h3 className="text-2xl font-black cute-font">Sensory support for children & families</h3>
                <p className="mt-4 leading-8 text-[#8A5A3D]">
                  Our first priority is to explore ways to support charities that help disabled, autistic, neurodivergent or seriously ill children and their families. Suitable UK charities to consider include Family Fund, Newlife Charity, Sense, Caudwell Children, ADHD Embrace, ADHD UK and CAAS. These organisations align with BunBun Squishy’s belief that soft sensory items can bring comfort, calm routines and small moments of happiness.
                </p>
              </div>
            </Card>

            <Card className="bg-white/95 shadow-xl">
              <div className="p-8 text-[#7A3E1B]">
                <MiniMark label="02" className="mb-5 h-16 w-16" />
                <h3 className="text-2xl font-black cute-font">Joy-giving campaigns for children</h3>
                <p className="mt-4 leading-8 text-[#8A5A3D]">
                  For seasonal or special-drop campaigns, we may also support children’s hospital charities or gift-led initiatives, such as Great Ormond Street Hospital Charity or Alder Hey Children’s Charity. Any product donation activity would be planned carefully and only after checking each organisation’s safety, hygiene and donation requirements.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Future cash donations", "Selected campaign support", "Clear updates before each activity"].map((label) => (
              <div key={label} className="rounded-2xl bg-white/15 p-5 text-center backdrop-blur-sm">
                <span className="mx-auto block h-8 w-8 rounded-full bg-white/35" />
                <p className="mt-3 text-sm font-black cute-font">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] bg-white/15 p-5 text-sm font-semibold leading-7 text-white/90 backdrop-blur-sm">
            We are currently exploring suitable charities and support models. BunBun Squishy will not describe any organisation as an official charity partner unless a relationship has been formally confirmed. Future campaigns will clearly state the charity, donation format, donation percentage or amount, and campaign dates.
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white/40 px-5 py-20">
        <SectionTitle eyebrow="Contact" title="Let’s build a softer shopping experience">
          For stocking enquiries, wholesale conversations, UK orders, European shipping questions or collection planning, get in touch.
        </SectionTitle>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Card className="shadow-xl">
            <div className="p-8">
              <MiniMark label="HI" className="mb-5 h-16 w-16" />
              <h3 className="text-2xl font-black text-[#7A3E1B] cute-font">Contact details</h3>
              <p className="mt-4 leading-8 text-[#8A5A3D]">Email: hello@bunbunsquishy.com</p>
              <p className="leading-8 text-[#8A5A3D]">Instagram: @bunbunsquishy</p>
              <p className="leading-8 text-[#8A5A3D]">Location focus: United Kingdom & Europe</p>
              <div className="mt-6 flex gap-2">
                {[1, 2, 3, 4, 5].map((dot) => <span key={dot} className="h-2 w-8 rounded-full bg-[#F9A2A0]" />)}
              </div>
            </div>
          </Card>

          <Card className="shadow-xl">
            <div className="p-8">
              <form className="grid gap-4">
                <input className="rounded-2xl border border-[#FDE6E0] bg-[#FFFDFB] px-5 py-4 outline-none transition focus:border-[#F9A2A0]" placeholder="Your name" />
                <input className="rounded-2xl border border-[#FDE6E0] bg-[#FFFDFB] px-5 py-4 outline-none transition focus:border-[#F9A2A0]" placeholder="Your email" />
                <textarea className="min-h-32 rounded-2xl border border-[#FDE6E0] bg-[#FFFDFB] px-5 py-4 outline-none transition focus:border-[#F9A2A0]" placeholder="Your message" />
                <Button className="py-6">Send Message</Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-[#FFF7F4] px-5 py-8 text-center text-sm font-bold text-[#8A5A3D]">
        © 2026 BunBun Squishy. UK-based slow rising squishy shop for collectors across the UK and Europe.
      </footer>
    </main>
  );
}
