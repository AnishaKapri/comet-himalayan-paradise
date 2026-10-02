import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "Stay in Himalayan hotels, homestays with local families, traditional stone houses, camping tents, or luxury cottages in Munsiyari, Kumaon, Uttarakhand.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/accommodation" },
  openGraph: {
    title: "Himalayan Accommodation | CHP Himalayan Paradise",
    description: "Hotels, homestays, traditional houses, camping tents, and luxury cottages in Munsiyari, Kumaon Himalayas.",
    url: "https://comet-himalayan-paradise.vercel.app/accommodation",
    images: [{ url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop", width: 1200, height: 630, alt: "Himalayan Accommodation" }],
  },
};

/* Highlight helpers: bold + contrasting colour for key words/phrases */
const Hl = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold text-green-800">{children}</strong>
);

const stays: {
  type: string;
  tagline: string;
  description: ReactNode;
  image: string;
  amenities: string[];
  bestFor: string;
  priceRange: string;
  rating: number;
}[] = [
  {
    type: "Traditional Houses",
    tagline: "Live as a local — genuinely",
    description: (
      <>
        Stay with <Hl>warm Kumaoni families</Hl> in their homes. Share meals at
        the family table, learn about daily mountain life, and form
        friendships that last long after you leave.
      </>
    ),
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d6e7b927-f6b1-4320-9c7c-320e04e15101-scaled-traditinoal-house.webp",
    amenities: [
      "Home-cooked traditional meals",
      "Cultural immersion activities",
      "Shared or private rooms",
      "Organic farm access",
      "Evening kitchen participation",
    ],
    bestFor: "Culture seekers, Solo travelers, Long stays",
    priceRange: "₹",
    rating: 4.9,
  },
  {
    type: "Camping Tents",
    tagline: "Sleep under Himalayan stars",
    description: (
      <>
        Premium canvas tents set at spectacular riverside, meadow, or forest
        locations. <Hl>All bedding and equipment provided</Hl> — bring only
        yourself and your sense of wonder.
      </>
    ),
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fb51f723-c566-4148-84a4-99c66ea3e7a4-camping-tents.webp",
    amenities: [
      "Insulated premium tents",
      "Comfortable sleeping bags & mattresses",
      "Shared eco-friendly washrooms",
      "Campfire & communal dining",
      "Stargazing deck",
    ],
    bestFor: "Adventure seekers, Nature lovers, Couples",
    priceRange: "₹₹",
    rating: 4.8,
  },
  {
    type: "CHP Luxury Cottages",
    tagline: "Premium comfort, mountain magic",
    description: (
      <>
        Beautifully appointed cottages with <Hl>panoramic Himalayan views</Hl>,
        private decks, premium bedding, and curated interiors. The finest way
        to experience the mountains in comfort.
      </>
    ),
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7b1e8f4c-e165-4c62-bef8-3165e7352ace-scaled-chp-cottages.webp",
    amenities: [
      "Private mountain-view deck",
      "King-size beds",
      "Premium toiletries & bathrobes",
      "Fireplace / heater",
      "Concierge service",
    ],
    bestFor: "Honeymooners, Luxury travelers, Corporate retreats",
    priceRange: "₹₹₹",
    rating: 4.9,
  },
];

export default function AccommodationPage() {
  return (
    <>
      {/* Hero — same size and text styling as the About CHP header */}
      <section className="relative w-full aspect-[3/1] min-h-[320px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/85e08a69-8e2c-458a-b7b8-2b36bf846c43-scaled-stay-options.webp"
          alt="Mountain accommodation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center px-4 sm:px-6 pt-20 sm:pt-24">
          {/* Text stack at the top of the image — all lines use the About CHP font + size */}
          <div className="flex w-full flex-col items-center text-center">
            <p className="rounded-full bg-green-900 px-5 py-2 text-white text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.28em]">
              Homestay
            </p>
            
            <p className="text-white/80 text-lg max-w-xl sm:text-xl md:text-1xl mt-4 sm:mt-6 text-justify">
              Don't just visit the Himalayas — live like you belong here.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation cards */}
      <section className="py-8 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              Accommodation
            </p>
            <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              Choose How You Stay
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 text-justify">
              From budget homestays to luxury cottages — every option comes
              with <Hl>authentic Himalayan hospitality</Hl>.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {stays.map((stay, i) => (
              <StaggerContainer key={stay.type} staggerDelay={0.1}>
                <StaggerItem>
                  <div
                    className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-green-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/8 transition-shadow duration-300 ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""
                      }`}
                  >
                    {/* Image — identical size for every card, no border */}
                    <div
                      className={`flex items-center p-4 lg:p-6 ${i % 2 !== 0 ? "lg:col-start-2" : ""
                        }`}
                    >
                      <div className="relative h-64 w-full overflow-hidden rounded-xl">
                        <Image
                          src={stay.image}
                          alt={stay.type}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 lg:p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full">
                          {stay.priceRange}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {stay.rating}
                        </span>
                      </div>

                      <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-1">
                        {stay.tagline}
                      </p>
                      <h2 className="text-slate-800 text-2xl sm:text-3xl font-bold mb-3">
                        {stay.type}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                        {stay.description}
                      </p>

                      <div className="mb-4 rounded-xl bg-white/70 p-4">
                        <p className="text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
                          Amenities
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {stay.amenities.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-xs text-slate-500 text-justify">
                        <strong className="font-bold text-green-800">
                          Best for:{" "}
                        </strong>
                        {stay.bestFor}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BACK TO HOME
          Simple bottom navigation button — no CTA banner.
      ===================================================== */}
      <section className="border-t border-stone-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-green-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800"
          >
            Home
          </a>
        </div>
      </section>
    </>
  );
}
