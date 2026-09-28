import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Leaf,
  MapPin,
  Megaphone,
  Mountain,
  Play,
  Rocket,
  Sparkles,
  Users,
  Utensils,
  Video,
  Waves,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/23208c14-1d7f-4885-bafb-052fca139bf4-chp-biz-partnership-under-500kb.webp";

const businessCategories = [
  {
    title: "Hospitality & Second Homes",
    icon: Building2,
    items: [
      "Himalayan Paradise Enclave",
      "Personalized Dream Spaces",
      "Friends-Only Enclave",
      "Themed Second Homes",
      "Corporate Guest Houses",
      "Housing Society Guest Houses",
      "Remote Work Spaces",
    ],
  },
  {
    title: "Adventure & Tourism",
    icon: Mountain,
    items: [
      "Himalayan Adventure Sports Club",
      "Mountain Adventure experiences",
      "Trekking and nature activities",
      "Himalayan River Camp",
      "Camping and outdoor experiences",
    ],
  },
  {
    title: "Wellness & Experiential Living",
    icon: HeartPulse,
    items: [
      "Mystical Himalayan Retreat",
      "Wellness programs",
      "Meditation and yoga",
      "Cosmic Viewpoint",
      "Pyramid Living Space",
      "Floral Maze",
      "Sky Nest Retreat",
    ],
  },
  {
    title: "Education & Learning",
    icon: GraduationCap,
    items: [
      "Himalayan Residential School",
      "Himalayan Creative Learning & Discovery Campus",
      "STEM Innovation Lab",
      "Holiday Camps",
      "Creative Mind Studio",
      "Sports and experiential learning",
    ],
  },
  {
    title: "Eco-Agri & Natural Products",
    icon: Leaf,
    items: [
      "Organic farming",
      "Medicinal plants",
      "Himalayan herbs",
      "Fruit orchards",
      "Tea and herbal products",
      "Trout farming",
      "Food processing",
      "Natural and wellness products",
    ],
  },
  {
    title: "Creative & Media",
    icon: Video,
    items: [
      "Himalayan Film Studio",
      "Photography",
      "Digital content",
      "Music and video production",
      "Podcast and creator spaces",
      "Outdoor filming locations",
    ],
  },
  {
    title: "Events & Celebrations",
    icon: Sparkles,
    items: [
      "Himalayan Destination Weddings",
      "Corporate events",
      "Family celebrations",
      "Pre-wedding experiences",
      "Retreats and special events",
    ],
  },
  {
    title: "Food & Hospitality",
    icon: Utensils,
    items: [
      "CHP Food Court",
      "Himalayan Cliff Edge Restaurant",
      "Specialty food concepts",
      "Destination dining experiences",
    ],
  },
  {
    title: "Purpose-Driven Initiatives",
    icon: Users,
    items: [
      "Comet Educational Services",
      "Comet Gaushala",
      "Isht Dev Sthal development",
      "Rural and community-oriented initiatives",
    ],
  },
];

const ecosystemBenefits = [
  "Himalayan location and destination infrastructure",
  "Shared community facilities",
  "Hospitality and accommodation ecosystem",
  "Tourism and visitor experiences",
  "Cross-promotion with other CHP businesses",
  "Marketing and promotional support",
  "Referral opportunities",
  "Local coordination and community connect",
  "Shared operational infrastructure",
  "Opportunities for collaborative packages",
  "Multiple customer segments",
  "Year-round business possibilities",
];

const partnerTypes = [
  "Entrepreneurs",
  "Existing Businesses & Brands",
  "Investors & Business Groups",
  "Professionals & Specialists",
  "Educational Institutions",
  "Corporate Organizations",
  "Tourism & Hospitality Businesses",
  "Creative Professionals & Media",
  "Companies",
  "CSR & Social Organizations",
];

const partnershipModels = [
  {
    number: "01",
    title: "Individual Ownership",
    description:
      "An entrepreneur establishes and operates a selected business facility independently within the CHP ecosystem.",
  },
  {
    number: "02",
    title: "Partnership Model",
    description:
      "CHP and the business partner collaborate through a mutually agreed business and operating arrangement.",
  },
  {
    number: "03",
    title: "Group Ownership",
    description:
      "Multiple individuals, families, professionals, investors or organizations collectively participate in ownership of a selected facility.",
  },
  {
    number: "04",
    title: "Facility-Based Partnership",
    description:
      "A partner develops, owns or operates a specific facility or business unit within CHP.",
  },
  {
    number: "05",
    title: "Plot-Based Investment",
    description:
      "An investor participates through a plot-based model for an appropriate CHP development.",
  },
  {
    number: "06",
    title: "Long-Term Lease Model",
    description:
      "Selected business opportunities may be structured through a long-term lease arrangement.",
  },
];

const chpSupport = [
  { title: "Location & Land", icon: MapPin },
  { title: "Infrastructure", icon: Factory },
  { title: "Ecosystem Integration", icon: Handshake },
  { title: "Marketing & Promotion", icon: Megaphone },
  { title: "Referral Network", icon: Users },
  { title: "Community Infrastructure", icon: Building2 },
  { title: "Tourism Promotion", icon: Waves },
  { title: "Professional Support", icon: Users },
];

const revenueStreams = [
  "Product or service sales",
  "Facility bookings",
  "Accommodation",
  "Packages",
  "Events",
  "Workshops",
  "Experiences",
  "Tourism activities",
  "Corporate programs",
  "Educational programs",
  "Retreats",
  "Rentals",
  "Memberships",
  "Food & beverage",
  "Equipment or facility rentals",
  "Specialized services",
];

const journey = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell us about your business, expertise or proposed venture.",
  },
  {
    number: "02",
    title: "Explore the Opportunity",
    description:
      "Identify the right CHP business category or facility.",
  },
  {
    number: "03",
    title: "Develop the Partnership Model",
    description:
      "Discuss ownership, investment, operations and responsibilities.",
  },
  {
    number: "04",
    title: "Plan the Venture",
    description:
      "Develop the facility, business plan and implementation roadmap.",
  },
  {
    number: "05",
    title: "Integrate with CHP",
    description:
      "Connect the business with the wider CHP ecosystem.",
  },
  {
    number: "06",
    title: "Launch & Grow",
    description:
      "Market the business, attract customers and develop new opportunities.",
  },
];

const whyChp = [
  {
    title: "A Himalayan Destination",
    text: "A distinctive environment for businesses that depend on nature, experiences and destination-based demand.",
  },
  {
    title: "An Integrated Ecosystem",
    text: "Hospitality, wellness, adventure, education, agriculture, creativity and entrepreneurship planned within one ecosystem.",
  },
  {
    title: "Shared Opportunities",
    text: "Businesses can complement and support one another.",
  },
  {
    title: "Diverse Customer Segments",
    text: "Families, tourists, corporate groups, students, institutions, event planners, creators, wellness seekers and adventure enthusiasts.",
  },
  {
    title: "Multiple Business Concepts",
    text: "From second homes and hospitality to education, agriculture, adventure, events and creative industries.",
  },
  {
    title: "Professional Ecosystem Support",
    text: "Selected partnership models include CHP support for infrastructure, marketing, operations, maintenance and ecosystem integration.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${light ? "text-white" : ""}`}>
      <p
        className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${
          light ? "text-white/70" : "text-emerald-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            light ? "text-white/75" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function CHPBizPartnershipPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-slate-950">
        <Image
          src={HEADER_IMAGE}
          alt="CHP Biz Partnership in the Himalayas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Subtle cinematic darkening — keeps the original artwork visible */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-7xl flex-col items-center px-6 pt-20 text-center sm:px-8 sm:pt-24 lg:px-10 lg:pt-28">
          {/* Small premium glass label */}
          <div className="rounded-lg border border-white/25 bg-slate-900/35 px-5 py-2 shadow-lg shadow-black/15 backdrop-blur-md sm:px-6 sm:py-2.5">
            <span className="text-sm font-semibold tracking-[0.08em] text-white sm:text-base">
              CHP Biz. Partnership
            </span>
          </div>

          {/* All hero content stays safely above the 9-circle artwork */}
          <div className="mt-5 w-full max-w-6xl text-white sm:mt-6">
            <h1 className="mx-auto max-w-5xl text-[2.35rem] font-bold leading-[1.08] tracking-[-0.03em] drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)] sm:text-4xl md:text-[2.75rem] lg:text-[3.15rem] xl:text-[3.35rem]">
              <span className="block">Bring Your Business. Build Your Vision.</span>
              <span className="mt-1 block">
                Become Part of the <span className="text-amber-500">CHP Ecosystem.</span>
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-base sm:leading-7 lg:text-[17px]">
              CHP Biz Partnership brings together entrepreneurs, investors, professionals,
              organizations, institutions and business groups to create and operate
              distinctive businesses within the CHP Himalayan Paradise ecosystem.
            </p>

            {/* Compact CTAs — deliberately positioned above the 9 circles */}
            <div className="mt-5 flex flex-wrap justify-center gap-2.5 sm:mt-6 sm:gap-3">
              <a
                href="#opportunities"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-900 shadow-lg shadow-black/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white/90 sm:px-5.5 sm:py-2.5 sm:text-sm"
              >
                Explore Opportunities
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>

              <a
                href="#partnership-form"
                className="group inline-flex items-center gap-1.5 rounded-full bg-emerald-950/90 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-black/20 ring-1 ring-white/20 backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-xl sm:px-5.5 sm:py-2.5 sm:text-sm"
              >
                Start a Partnership Conversation
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
              </a>

              <a
                href="/partnership-proposals"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-slate-900/20 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-black/15 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-900/30 sm:px-5.5 sm:py-2.5 sm:text-sm"
              >
                Business Proposals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden bg-[#f6f8f5] py-20 sm:py-24 lg:py-28">
        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                One Destination. Multiple Businesses.
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                A business ecosystem, not just a business location.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  CHP is being developed as an integrated Himalayan destination
                  bringing together hospitality, wellness, adventure,
                  education, creativity, agriculture, eco-tourism, culture and
                  entrepreneurship under one connected ecosystem.
                </p>
                <p>
                  Instead of building a business as an isolated venture,
                  partners can become part of a destination where multiple
                  businesses, facilities, experiences and customer segments
                  work together.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] sm:p-9">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["25+", "business ecosystem"],
                  ["1", "connected destination"],
                  ["Many", "customer segments"],
                  ["Year-round", "business possibilities"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                      {value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                <p>
                  The CHP proposal portfolio repeatedly emphasizes the
                  advantages of shared infrastructure, cross-selling, CHP
                  branding and year-round opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem benefits */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Why Partner with CHP?"
            title="Your business can participate in a larger ecosystem."
            description="A business located within CHP is designed to benefit not only from its own customers and operations, but also from the larger ecosystem around it."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-950/5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm font-medium leading-6 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem examples */}
      <section className="overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            light
            eyebrow="Connected by Design"
            title="Businesses can create value for one another."
            description="At CHP, a business does not have to operate independently. Complementary businesses can connect through accommodation, food, wellness, adventure, media, education, events and local experiences."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Destination Weddings",
                text: "Accommodation, food, wellness, adventure, organic farming, village tourism and river experiences can combine to create a complete Himalayan experience rather than a standalone wedding venue.",
                icon: Sparkles,
              },
              {
                title: "Film & Media",
                text: "A film studio can connect with accommodation, outdoor locations, local artists, transportation and events.",
                icon: Video,
              },
              {
                title: "Education",
                text: "An education venture can connect with STEM, adventure, wellness, accommodation and experiential learning.",
                icon: GraduationCap,
              },
              {
                title: "Eco-Agri",
                text: "An eco-agri business can connect with Gaushala, tourism, food, wellness, hospitality and local community development.",
                icon: Leaf,
              },
            ].map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition hover:bg-white/[0.09] sm:p-8"
              >
                <Icon className="h-7 w-7 text-emerald-300" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                  {text}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  <span className="h-px w-8 bg-white/20" />
                  Collaboration opportunity
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="scroll-mt-24 bg-[#f6f8f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="What Can You Build with CHP?"
            title="A broad portfolio of business and experiential opportunities."
            description="CHP is developing opportunities across hospitality, tourism, wellness, education, agriculture, media, events, food and purpose-driven initiatives."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {businessCategories.map(({ title, icon: Icon, items }) => (
              <article
                key={title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.18em] text-slate-300">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">
                  {title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who can partner */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 p-8 text-white shadow-2xl shadow-emerald-950/15 sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Open to Collaboration
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Who Can Become a CHP Business Partner?
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                  CHP welcomes partnership discussions with individuals,
                  businesses, institutions and organizations looking to build
                  or participate in a distinctive Himalayan venture.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {partnerTypes.map((partner) => (
                  <div
                    key={partner}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/80"
                  >
                    <Check className="h-4 w-4 shrink-0 text-emerald-300" />
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership models */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Partnership Models"
            title="Flexible structures for different business needs."
            description="CHP can explore different partnership structures depending on the nature of the business, investment, ownership requirements and operational responsibilities."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {partnershipModels.map((model) => (
              <div
                key={model.number}
                className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-7"
              >
                <span className="text-5xl font-semibold tracking-[-0.05em] text-slate-100">
                  {model.number}
                </span>
                <h3 className="relative -mt-4 text-lg font-semibold text-slate-900">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHP support */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                What CHP Can Bring
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Support that connects your venture to the ecosystem.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Depending on the selected business model, CHP may support
                partners through the following ecosystem-level resources.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                The exact responsibilities would be defined separately for
                each business partnership.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {chpSupport.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue */}
      <section className="overflow-hidden bg-[#f6f8f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Multiple Revenue Opportunities"
            title="Build more than one revenue stream."
            description="One of the recurring themes across the CHP proposals is the ability to create multiple revenue streams rather than relying on a single business activity."
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {revenueStreams.map((stream) => (
              <div
                key={stream}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700"
              >
                <CircleDollarSign className="h-4 w-4 shrink-0 text-emerald-600" />
                {stream}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-emerald-100 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm sm:p-8">
            <strong className="text-slate-900">Examples from the CHP proposals:</strong>{" "}
            the Destination Wedding proposal identifies venue bookings, wedding
            packages, catering, decoration, photography, event management,
            accommodation, transportation, pre-wedding shoots, corporate
            events, wellness retreats and adventure packages as potential
            revenue streams. The Eco-Agri proposal similarly combines
            agriculture with food processing, herbal products, agri-tourism and
            wellness-oriented enterprises.
          </div>
        </div>
      </section>

      {/* CHP advantage */}
      <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            light
            eyebrow="The CHP Advantage"
            title="Business → Ecosystem → Experiences → Customers"
            description="The interconnected model is designed around cross-selling, referrals, bundled experiences, shared infrastructure, destination marketing and year-round opportunities."
          />

          <div className="mt-14 overflow-x-auto pb-4">
            <div className="mx-auto flex min-w-[760px] items-center justify-center gap-2">
              {[
                "Business",
                "CHP Ecosystem",
                "Multiple Businesses",
                "Multiple Experiences",
                "Multiple Customer Segments",
              ].map((item, index, array) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-center text-sm font-medium text-white/85">
                    {item}
                  </div>
                  {index < array.length - 1 ? (
                    <ChevronRight className="h-5 w-5 shrink-0 text-emerald-300" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Cross-Selling", "One guest can use multiple CHP businesses."],
              ["Referrals", "Businesses can refer customers to complementary CHP facilities."],
              ["Bundled Experiences", "Accommodation + food + adventure + wellness + events + local experiences."],
              ["Shared Infrastructure", "Partners can benefit from facilities developed at the ecosystem level."],
              ["Destination Marketing", "The destination itself becomes part of the marketing proposition."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
              >
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-5 text-center text-sm leading-7 text-emerald-100/80">
            Year-Round Opportunities: Different businesses can attract
            different customer segments across different seasons.
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="From Business Idea to Himalayan Venture"
            title="A clear path from concept to launch."
            description="CHP Biz Partnership can support a journey from sharing your idea through planning, ecosystem integration and growth."
          />

          <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step) => (
              <div
                key={step.number}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
                    {step.number}
                  </span>
                  <Rocket className="h-5 w-5 text-slate-300 transition group-hover:text-emerald-600" />
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Partnership conversation form */}
      <section
        id="partnership-form"
        className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.28)]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative overflow-hidden bg-emerald-950 p-8 text-white sm:p-10 lg:p-12">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Start the conversation
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Let&apos;s explore what you can build with CHP.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                    Share a little about your business, idea or expertise. The
                    information below will help frame the right partnership
                    conversation with the CHP team.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Tell us what you want to build",
                      "Identify the right CHP opportunity",
                      "Discuss partnership and operating models",
                      "Explore the next steps together",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
                          <Check className="h-3.5 w-3.5 text-emerald-300" />
                        </div>
                        <p className="text-sm leading-6 text-white/75">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                      Partnership note
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Partnership structures, responsibilities and support are
                      defined separately according to the selected business
                      opportunity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-7 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    Partnership enquiry
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    Tell us about your idea
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fill in the details below and start your CHP partnership
                    conversation.
                  </p>
                </div>

                <form
                  className="mt-8 space-y-5"
                  action="/contact"
                  method="get"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="partnership-name"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Full name
                      </label>
                      <input
                        id="partnership-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="partnership-email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Email address
                      </label>
                      <input
                        id="partnership-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="partnership-phone"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Phone number
                      </label>
                      <input
                        id="partnership-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="partnership-organization"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Business / organization
                      </label>
                      <input
                        id="partnership-organization"
                        name="organization"
                        type="text"
                        placeholder="Company or organization name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="partnership-type"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      What are you interested in?
                    </label>
                    <select
                      id="partnership-type"
                      name="partnershipType"
                      defaultValue=""
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                    >
                      <option value="" disabled>
                        Select an opportunity
                      </option>
                      <option value="hospitality">
                        Hospitality &amp; Second Homes
                      </option>
                      <option value="tourism">
                        Adventure &amp; Tourism
                      </option>
                      <option value="wellness">
                        Wellness &amp; Experiential Living
                      </option>
                      <option value="education">
                        Education &amp; Learning
                      </option>
                      <option value="eco-agri">
                        Eco-Agri &amp; Natural Products
                      </option>
                      <option value="creative-media">
                        Creative &amp; Media
                      </option>
                      <option value="events">
                        Events &amp; Celebrations
                      </option>
                      <option value="food">
                        Food &amp; Hospitality
                      </option>
                      <option value="purpose-driven">
                        Purpose-Driven Initiatives
                      </option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="partnership-message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Tell us about your idea
                    </label>
                    <textarea
                      id="partnership-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What would you like to build, operate, invest in or bring to the CHP ecosystem?"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-900"
                  >
                    Start Partnership Conversation
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    By submitting this enquiry, you are sharing your details
                    with CHP for partnership discussions.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CHP */}
      <section className="bg-[#f6f8f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Why CHP?"
            title="A platform for distinctive Himalayan ventures."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChp.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-7"
              >
                <div className="h-1 w-12 rounded-full bg-emerald-600" />
                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-emerald-950 py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Build with CHP
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bring your business to the Himalayas.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Share your business idea, expertise or proposed venture and explore
            how it can connect with the wider CHP Himalayan Paradise ecosystem.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#partnership-form"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Start a Partnership Conversation
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/business-proposals"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Explore Business Proposals
              <Play className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-7 text-xs leading-6 text-white/40">
            Partnership structures, responsibilities and support are defined
            separately according to the selected business opportunity.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
