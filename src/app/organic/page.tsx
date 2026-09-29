import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Droplets,
  Heart,
  Home,
  Leaf,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Sprout,
  Tractor,
  Users,
  Wheat,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Himalayan Organic & Medicinal Farming",
  description:
    "Shelter for Cows. Jobs for Villagers. Organic Food Products for You. Join the CHP Eco-Agri Farming Community in Pithoragarh and take part in Himalayan organic and medicinal farming.",
};

/* Images already used elsewhere on the site. Replace with farm photos any time. */
const heroImage =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ff9207c1-044e-4d08-8cf9-ce9782eb0cb7-scaled-gaushala-and-organic-farming.webp";
const farmImage =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e4dbb3a1-ab40-4c3e-bde8-4da3a12f57fb-scaled-gaushla-and-medicinal-farm.webp";

const tilt =
  "[transform-style:preserve-3d] transition-all duration-500 ease-out hover:shadow-2xl hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)_translateY(-4px)]";
const card = `rounded-2xl border border-stone-200 bg-white p-6 shadow-sm ${tilt}`;
const eyebrow = "text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3";
const h2 = "text-slate-800 text-3xl sm:text-4xl font-bold leading-tight";
const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30";

const facts = [
  { value: "11+ hectares", label: "of land in the Himalayan region of Pithoragarh" },
  { value: "~15 km", label: "from the main city, airport and CHP community" },
  { value: "Gaushala-led", label: "village built around Gaushala and organic farming" },
];

const ecosystemTags = ["Nature", "Agriculture", "Community", "Livelihood", "Sustainability"];

const cycle = [
  "Gaushala",
  "Organic Manure",
  "Farming",
  "Harvest",
  "Organic Products",
  "Community",
  "Sustainable Gaushala",
];

const medicinal = [
  { name: "Kirmoda", botanical: "Swertia chirayita" },
  { name: "Ghingaroo", botanical: "Pyracantha crenulata" },
  { name: "Satawar", botanical: "Asparagus racemosus" },
  { name: "Giloi", botanical: "Tinospora cordifolia" },
];

const produce = [
  { name: "Pahadi Haldi", botanical: "Curcuma longa" },
  { name: "Pahadi Adrak", botanical: "Zingiber officinale" },
  { name: "Pahadi Rajmaa", botanical: "Phaseolus vulgaris" },
  { name: "Sinno / Bichhchoo Ghaas", botanical: "Urtica dioica" },
];

const otherFarming = [
  "Millets and cash crops",
  "Pulses",
  "Organic vegetables",
  "Food additives",
  "Herbal plants",
];

const objectives = [
  {
    title: "Make the Gaushala More Sustainable",
    desc: "Promote organic farming as an economic activity that can contribute toward making the Gaushala self-sustainable.",
  },
  {
    title: "Create Local Employment",
    desc: "Generate farming-related work opportunities for people in the surrounding Himalayan community.",
  },
  {
    title: "Enable Community Participation",
    desc: "Create a platform through which supporters and interested members can participate in organic farming.",
  },
  {
    title: "Support the Larger Comet Mission",
    desc: "Build greater community participation and support for initiatives such as education and other social programs.",
  },
];

const chpRole = [
  "Membership agreement execution",
  "Allocation of farming land",
  "Engagement of farmers for daily field activities",
  "Procurement of seeds and equipment",
  "Supervision of daily farming activities",
  "Facilitation of final dispatch of harvested produce",
];

const ownerRole = [
  "Lease processing charges",
  "Farmer wages",
  "One-time field cleaning",
  "Seeds and equipment",
  "Expenses associated with final dispatch of harvested crops",
];

const benefits = [
  { icon: Mountain, title: "For the Land", desc: "Encouraging organic and sustainable cultivation." },
  { icon: Tractor, title: "For Farmers", desc: "Creating local employment and agricultural opportunities." },
  { icon: Home, title: "For the Gaushala", desc: "Using farming as part of a model for greater self-sustainability." },
  { icon: Sprout, title: "For Participants", desc: "Providing an opportunity to become part of a Himalayan farming initiative." },
  { icon: Users, title: "For the Community", desc: "Creating a platform for collective participation and shared purpose." },
  { icon: Heart, title: "For Society", desc: "Connecting agriculture with broader initiatives supported through the Comet ecosystem." },
];

const interests = [
  "Participating in organic farming",
  "Supporting sustainable Himalayan agriculture",
  "Becoming part of a farming community",
  "Supporting the self-sustainability of the Gaushala",
  "Creating opportunities for local villagers",
  "Growing Himalayan organic and traditional crops",
  "Exploring a Himalayan family retreat opportunity",
];

function PlantChip({ name, botanical }: { name: string; botanical: string }) {
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-100 hover:shadow-md">
      <span className="font-semibold text-green-900">{name}</span>
      <span className="text-xs italic text-green-800/70">{botanical}</span>
    </span>
  );
}

function CheckList({ items, tone = "green" }: { items: string[]; tone?: "green" | "orange" }) {
  const dot = tone === "green" ? "bg-green-100 text-green-900" : "bg-orange-100 text-orange-700";
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-600 leading-relaxed">
          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dot}`}>
            <Check className="h-3 w-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function OrganicFarmingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-green-950">
        {/* Full width at the photo's natural proportions on tablet/desktop, so no edge is cropped and no gaps show */}
        <Image
          src={heroImage}
          alt="CHP Himalayan organic farming"
          width={0}
          height={0}
          priority
          sizes="100vw"
          className="h-[520px] w-full object-cover object-center md:h-auto md:max-h-[90vh] md:min-h-[480px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6">
          <span className="inline-block mb-4 rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm">
            CHP Social Impact
          </span>
          <h1 className="mb-5 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            CHP Himalayan Organic &amp; Medicinal Farming
          </h1>
          <p className="mb-8 max-w-2xl text-lg font-semibold text-orange-200 sm:text-xl text-justify sm:text-center">
            <strong className="font-bold text-white">Shelter for Cows.</strong> Jobs for Villagers. <strong className="font-bold text-white">Organic Food Products for You.</strong>
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Join the Community <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#what-we-grow" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10">
              See What We Grow
            </a>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <p className={eyebrow}>Our Vision</p>
              <h2 className={`${h2} mb-5`}>Farming Is More Than Cultivation</h2>
              <p className="mb-5 leading-relaxed text-slate-600 text-justify">
                At CHP Himalayan Paradise, we envision farming as more than cultivation. It is a way to <strong className="font-bold text-green-900">connect people with the land</strong>, create opportunities for <strong className="font-bold text-green-900">Himalayan communities</strong>, support sustainable living and build a meaningful relationship between agriculture, nature and society.
              </p>
              <p className="mb-5 leading-relaxed text-slate-600 text-justify">
                The CHP Himalayan Organic &amp; Eco-Agri Farming initiative brings together <strong className="font-bold text-green-900">organic farming, medicinal and herbal plants</strong>, traditional Himalayan crops and community participation in a unique farming ecosystem.
              </p>
              <p className="leading-relaxed text-slate-600 text-justify">
                Located in the Himalayan region of Pithoragarh, the initiative is connected with a village spread across <strong className="font-bold text-green-900">more than 11 hectares of land</strong>, located approximately 15 km from the main city, airport and CHP community. The village is being developed around Gaushala and organic farming, with the objective of making the Gaushala progressively self-sustainable.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
                <Image src={farmImage} alt="Gaushala and medicinal farm" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {facts.map((f) => (
                  <div key={f.value} className={`rounded-2xl bg-emerald-50/80 border border-emerald-100 p-4 ${tilt}`}>
                    <p className="text-lg font-bold text-green-900">{f.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{f.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-green-950 py-10 sm:py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">The Farming Ecosystem</p>
              <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">A Himalayan Farming Ecosystem</h2>
              <div className="mb-6 flex flex-wrap justify-center gap-2">
                {ecosystemTags.map((t) => (
                  <span key={t} className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mb-4 leading-relaxed text-white/80 text-justify">
                The CHP Eco-Agri Farming Community is a group of individuals who share an interest in <strong className="font-bold text-orange-300">organic farming</strong> and want to participate in a community-oriented agricultural initiative in the Himalayan region.
              </p>
              <p className="leading-relaxed text-white/80 text-justify">
                The availability of water resources and nutrient-rich manure from the Gaushala provides a foundation for organic cultivation. The model brings together <strong className="font-bold text-orange-300">land, farmers, community members</strong> and sustainable agricultural practices to create a shared farming ecosystem.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <p className="mb-6 flex items-center justify-center gap-2 text-center font-semibold text-orange-200">
                <Droplets className="h-5 w-5" /> The initiative aims to create a cycle in which:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {cycle.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-900 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      {step}
                    </span>
                    {i < cycle.length - 1 && <ArrowRight className="h-4 w-4 text-orange-300" />}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-white/70 text-justify">
                This creates an opportunity to connect <strong className="font-bold text-orange-200">Gauseva, organic agriculture, local employment</strong> and responsible consumption within one ecosystem.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we grow */}
      <section id="what-we-grow" className="scroll-mt-20 bg-stone-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className={eyebrow}>What We Grow</p>
              <h2 className={`${h2} mb-4`}>Himalayan Plants, Crops and Produce</h2>
              <p className="leading-relaxed text-slate-600 text-justify sm:text-center">
                CHP&apos;s farming initiative focuses on a combination of <strong className="font-bold text-green-900">Himalayan medicinal plants, organic food crops, traditional produce, herbs</strong> and agricultural products.
              </p>
            </div>
          </ScrollReveal>

          <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-800">
            <Leaf className="h-5 w-5 text-green-800" /> Medicinal &amp; Herbal Plants
          </h3>
          <p className="mb-6 text-sm text-slate-500">The plants being grown at the farm.</p>
          <div className="flex flex-wrap gap-3">
            {medicinal.map((p) => (
              <PlantChip key={p.name} {...p} />
            ))}
          </div>

          <h3 className="mb-2 mt-10 flex items-center gap-2 text-xl font-bold text-slate-800">
            <Sprout className="h-5 w-5 text-green-800" /> Himalayan Organic Produce
          </h3>
          <p className="mb-6 text-sm text-slate-500">The traditional agricultural richness and food diversity of the Himalayan region.</p>
          <div className="flex flex-wrap gap-3">
            {produce.map((p) => (
              <PlantChip key={p.name} {...p} />
            ))}
          </div>

          <div className={`mt-10 rounded-2xl bg-amber-50/80 border border-amber-200/60 p-6 sm:p-8 ${tilt}`}>
            <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-800">
              <Wheat className="h-5 w-5 text-orange-600" /> Other Farming Opportunities
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-600 text-justify">
              Depending on the farming plan and crop selection, the community model can include:
            </p>
            <div className="flex flex-wrap gap-3">
              {otherFarming.map((o) => (
                <span key={o} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-orange-900 shadow-sm">
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className={eyebrow}>Why CHP Organic &amp; Eco-Agri Farming?</p>
              <h2 className={`${h2} mb-4`}>Shared Soil. Shared Future.</h2>
              <p className="leading-relaxed text-slate-500">The initiative has been designed around four core objectives.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2" staggerDelay={0.08}>
            {objectives.map((o, i) => (
              <StaggerItem key={o.title}>
                <div className={`${card} flex h-full gap-5 bg-emerald-50/40 border border-emerald-100/80`}>
                  <span className="text-4xl font-bold leading-none text-orange-500">{i + 1}</span>
                  <div>
                    <h3 className="mb-2 font-semibold text-green-900">{o.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600 text-justify">{o.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Community and model */}
      <section className="bg-stone-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className={eyebrow}>The CHP Eco-Agri Farming Community</p>
              <h2 className={`${h2} mb-4`}>Together We Farm. Together We Flourish.</h2>
              <p className="leading-relaxed text-slate-600 text-justify sm:text-center">
                The community model allows interested members to participate in farming without having to personally manage day-to-day agricultural operations.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className={`${card} h-full bg-emerald-50/30 border border-emerald-100`}>
                <h3 className="mb-1 text-xl font-bold text-green-900">CHP&apos;s Role</h3>
                <p className="mb-5 text-sm text-slate-500">CHP facilitates the operational side of the farming program, including:</p>
                <CheckList items={chpRole} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className={`${card} h-full bg-amber-50/40 border border-amber-100`}>
                <h3 className="mb-1 text-xl font-bold text-orange-700">Farm Owner&apos;s Responsibilities</h3>
                <p className="mb-5 text-sm text-slate-500">
                  Under the proposed model, the participating farm owner is responsible for the applicable farming-related expenses, including:
                </p>
                <CheckList items={ownerRole} tone="orange" />
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-slate-600 text-justify sm:text-center">
              This creates a structured model where the community member can participate while <strong className="font-bold text-green-900">local farmers remain involved</strong> in the actual cultivation process.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className={eyebrow}>More Than Farming</p>
              <h2 className={`${h2} mb-4`}>Organic Roots. Strong Communities.</h2>
              <p className="leading-relaxed text-slate-500">The CHP Eco-Agri model seeks to create value at multiple levels.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.07}>
            {benefits.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className={`${card} h-full bg-stone-50 border border-stone-200/60`}>
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-900 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 font-semibold text-slate-800">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 text-justify">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-stone-200 bg-stone-50 p-5 text-sm leading-relaxed text-slate-600 text-justify">
            <strong className="font-bold text-slate-800">Contributions note:</strong> Contributions from farm owners are deposited into the Comet Foundation account, with 80G receipts described as a benefit for eligible contributions. Any tax benefit is subject to applicable law and the contributor&apos;s eligibility.
          </p>
        </div>
      </section>

      {/* Larger purpose */}
      <section className="relative overflow-hidden bg-green-900 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Our Larger Purpose</p>
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">From Himalayan, For the World</h2>
            <p className="mb-4 text-lg leading-relaxed text-white/85 text-justify sm:text-center">
              CHP&apos;s organic and medicinal farming vision is not simply about producing crops. It is about bringing <strong className="font-bold text-orange-300">Himalayan agriculture, traditional knowledge, local communities</strong> and responsible participation together.
            </p>
            <p className="mb-8 leading-relaxed text-white/75 text-justify sm:text-center">
              From medicinal and herbal plants to <strong className="font-bold text-orange-300">Pahadi Haldi, Adrak and Rajmaa</strong>, the initiative seeks to showcase the richness of Himalayan agriculture while creating opportunities for people to participate in a sustainable community model.
            </p>
            <p className="text-2xl font-bold text-orange-200">Pure. Natural. Himalayan.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Join */}
      <section className="bg-stone-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <p className={eyebrow}>Become Part of the Community</p>
              <h2 className={`${h2} mb-4`}>Join Hands. Grow Organic. Give Back.</h2>
              <p className="mb-6 leading-relaxed text-slate-600 text-justify">If you are interested in:</p>
              <CheckList items={interests} />
              <p className="mt-6 font-semibold text-green-900">Join the CHP Eco-Agri Farming Community.</p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className={`${card} p-8 bg-white border border-stone-200`}>
                <h3 className="mb-1 text-xl font-bold text-slate-800">Registration &amp; Contact</h3>
                <p className="mb-6 text-sm text-slate-500 text-justify">
                  Interested participants can register their membership with the CHP Eco-Agri Farming team.
                </p>
                <div className="space-y-4">
                  <a href="tel:+919949994989" className="flex items-center gap-4 rounded-xl bg-green-50 p-4 transition-colors hover:bg-green-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 text-white"><Phone className="h-4 w-4" /></span>
                    <span><span className="block text-xs text-slate-500">Phone</span><span className="font-semibold text-green-900">+91 9949 9949 89</span></span>
                  </a>
                  <a href="mailto:chp.organicfarming.community@gmail.com" className="flex items-center gap-4 rounded-xl bg-green-50 p-4 transition-colors hover:bg-green-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 text-white"><Mail className="h-4 w-4" /></span>
                    <span className="min-w-0"><span className="block text-xs text-slate-500">Email</span><span className="block break-all font-semibold text-green-900">chp.organicfarming.community@gmail.com</span></span>
                  </a>
                  <div className="flex items-center gap-4 rounded-xl bg-green-50 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 text-white"><MapPin className="h-4 w-4" /></span>
                    <span><span className="block text-xs text-slate-500">Location</span><span className="font-semibold text-green-900">Pithoragarh, Himalayan region</span></span>
                  </div>
                </div>
                <Link href="/contact" className={`${btnPrimary} mt-6 w-full justify-center`}>
                  Register Your Interest <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Change 7: Bottom Nav Pill */}
      <section className="py-8 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link
            href="/#social-impact"
            className="inline-block rounded-full bg-green-900 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md hover:bg-green-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            Go back to CHP Social Impact
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}