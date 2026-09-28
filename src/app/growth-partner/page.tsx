"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Handshake,
  Leaf,
  Megaphone,
  Mountain,
  Network,
  Percent,
  Send,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ef39ec48-1b22-4b32-9fb6-83caf51fa84e-chp-growth-partnership-header-under-500kb.webp";

const ecosystem = [
  {
    title: "Hospitality & Stays",
    text: "Help connect people with Himalayan second homes, cottages and hospitality opportunities.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ea9d5a29-444d-466f-9c4e-c6e97d747ec2-hospitality-stays-1.webp",
    icon: Building2,
  },
  {
    title: "Himalayan Experiences",
    text: "Promote the experiences, stays, camps and activities that bring people into the region.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/affa9b38-a1fd-48ba-8040-f954839807b5-himalayan-experiences.jpg",
    icon: Mountain,
  },
  {
    title: "Adventure & Tourism",
    text: "Build relationships with travel professionals, adventure companies and destination promoters.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a94f636-fbe3-498a-a43a-8eb27a69761d-adventure-tourism.jpg",
    icon: Target,
  },
  {
    title: "Wellness & Retreats",
    text: "Connect audiences with wellness, yoga, retreat and purpose-driven Himalayan experiences.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4b7c56df-d9d5-4eed-98e8-ae8bcdd4e8a6-wellness-retreats.jpg",
    icon: Sparkles,
  },
  {
    title: "Agriculture & Local Products",
    text: "Support rural enterprise and opportunities connected with agriculture and local value creation.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ea158d98-ba6f-4911-bfdc-a17f411e4409-agriculture-local-products.jpg",
    icon: Leaf,
  },
  {
    title: "Events & Experiences",
    text: "Open connections for celebrations, corporate groups, presentations and community events.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/85ede835-5902-4f80-9a9d-58aba6710810-events-experiences.jpg",
    icon: CalendarDays,
  },
  {
    title: "Infrastructure & Development",
    text: "Refer potential participants for plot-based cottage and facility development opportunities.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e557bbdd-20e8-4bdb-9fce-9a48196598d8-infrastructure-development.jpg",
    icon: Building2,
  },
];

const partnerTypes = [
  {
    title: "Business Professionals",
    text: "People with strong professional and business networks who can introduce customers, investors and collaborators.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing Professionals & Agencies",
    text: "Partners supporting digital marketing, social media, branding, content and promotional campaigns.",
    icon: Megaphone,
  },
  {
    title: "Travel & Tourism Partners",
    text: "Tour operators, travel professionals, adventure companies and destination promoters.",
    icon: Mountain,
  },
  {
    title: "Community & Network Leaders",
    text: "People connected to housing societies, professional groups, business communities and social organizations.",
    icon: Network,
  },
  {
    title: "Entrepreneurs & Business Associates",
    text: "People looking to develop or promote business opportunities within the CHP ecosystem.",
    icon: TrendingUp,
  },
  {
    title: "Referral Partners",
    text: "Individuals who can introduce prospective cottage owners, facility partners, customers or collaborators.",
    icon: Handshake,
  },
];

const contributionSteps = [
  {
    number: "01",
    title: "Promote CHP",
    text: "Use social media, digital campaigns, personal networks, offline campaigns, events, influencer outreach and word-of-mouth.",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Generate Leads",
    text: "Identify and introduce cottage owners, facility partners, investors, collaborators, tourists, corporate groups and entrepreneurs.",
    icon: Users,
  },
  {
    number: "03",
    title: "Strengthen the Brand",
    text: "Help communicate the CHP vision, opportunities and experiences across the Himalayan ecosystem.",
    icon: Star,
  },
  {
    number: "04",
    title: "Build Connections",
    text: "Connect CHP with organizations, companies, communities, entrepreneurs and individuals who can create new opportunities.",
    icon: Network,
  },
  {
    number: "05",
    title: "Refer Opportunities",
    text: "Refer prospective participants for plot-based cottage development and facility development, subject to CHP terms.",
    icon: Handshake,
  },
];

const benefits = [
  {
    title: "Referral Benefits",
    text: "Agreed referral-related benefits for successful registrations, depending on the applicable partnership agreement.",
    icon: WalletCards,
  },
  {
    title: "Partner Discounts",
    text: "The current framework provides a 25% plot-rate discount for the eligible CGP founder and immediate relatives on up to two referrals, subject to applicable terms.",
    icon: Percent,
  },
  {
    title: "Complimentary CHP Stay",
    text: "A current framework benefit includes a complimentary 3-day guest-house stay for the eligible Growth Partner founder and immediate family, subject to availability.",
    icon: Mountain,
  },
  {
    title: "Access to Experiences",
    text: "Eligible stays can include access to the organic farm, Gauseva Kendra, yoga camp, holiday camp activities and other on-campus experiences.",
    icon: Sparkles,
  },
  {
    title: "Performance-Based Commercial Benefits",
    text: "Eligible CGPs may be authorized to offer CHP plots at an agreed discounted rate, with commission payouts linked to successful plot registration.",
    icon: TrendingUp,
  },
];

const faqs = [
  {
    q: "Who can become a CHP Growth Partner?",
    a: "The program is open to individuals, entrepreneurs, business professionals, organizations, referral partners and community leaders who can contribute through their networks, expertise, business relationships or market reach.",
  },
  {
    q: "How does the performance-based model work?",
    a: "The partnership follows a target-based approach. The current framework indicates one plot registration referral per quarter for personal cottage development and one facility registration referral every six months. Specific targets, terms and conditions may be mutually agreed between CHP and the individual Growth Partner.",
  },
  {
    q: "What does CHP provide to Growth Partners?",
    a: "CHP provides brand and business information, marketing material, partnership information, product and facility details, team coordination, outreach support, lead and referral coordination, customer information and agreed commercial terms.",
  },
  {
    q: "What is expected from a Growth Partner?",
    a: "Growth Partners are expected to represent CHP accurately and professionally, use approved information, maintain transparency, coordinate leads with CHP, follow agreed pricing and commercial terms, respect confidentiality and support timely communication and follow-up.",
  },
  {
    q: "Is this a one-time referral program?",
    a: "The source material describes the objective as building lasting relationships rather than one-time transactions, with contribution and performance connected to agreed commercial and experiential benefits.",
  },
];

export default function GrowthPartnerPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    category: "Business & Professional Network",
    investmentTier: "Not applicable / Referral-based",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#14231f] pt-0 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[760px] lg:min-h-[820px] flex items-end overflow-hidden">
        <Image
          src={HEADER_IMAGE}
          alt="CHP Growth Partnership in the Himalayas"
          fill
                  unoptimized
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071512]/95 via-[#071512]/72 to-[#071512]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071512]/90 via-transparent to-[#071512]/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f3c96b] backdrop-blur-md">
              <TrendingUp className="h-3.5 w-3.5" />
              CHP Growth Partnership
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[0.96] tracking-[-0.035em] text-white sm:text-6xl lg:text-8xl">
              Grow with CHP.
              <span className="block text-[#f3c96b]">Build opportunities</span>
              <span className="block">in the Himalayas.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
              Be part of a purpose-driven ecosystem bringing together hospitality,
              tourism, adventure, wellness, agriculture, events, infrastructure and
              other opportunities across the Himalayas.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply-partner"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f3c96b] px-7 py-4 text-sm font-bold text-[#14231f] shadow-xl shadow-black/20 transition hover:bg-[#ffe09a]"
              >
                Become a Growth Partner
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#program"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Explore the partnership
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#071512]/70 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            {[
              { icon: Network, label: "Expand your network" },
              { icon: TrendingUp, label: "Create opportunities" },
              { icon: Mountain, label: "Build in the Himalayas" },
              { icon: Leaf, label: "Grow together" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-4 sm:px-7">
                <Icon className="h-5 w-5 shrink-0 text-[#f3c96b]" />
                <span className="text-xs font-medium text-white/80 sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        id="program"
        className="scroll-mt-24 bg-[#f5f1e8] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
              A shared vision
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              A collaborative model for Himalayan growth.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#50605a]">
              CHP Growth Partnership is a collaborative business-development model
              where partners help expand the CHP ecosystem through marketing,
              referrals, business development and strategic collaborations —
              creating opportunities for themselves and others.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Real opportunities",
                "Purpose-driven growth",
                "Shared connections",
                "Long-term relationships",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-[#dcd5c7] bg-white/65 p-4 text-sm font-semibold"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9a762e]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative lg:col-span-7"
          >
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              <div className="relative col-span-7 h-[430px] overflow-hidden rounded-[2rem]">
                <Image
                  src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ea9d5a29-444d-466f-9c4e-c6e97d747ec2-hospitality-stays-1.webp"
                  alt="Himalayan hospitality opportunity"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 60vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="col-span-5 grid gap-3 sm:gap-4">
                <div className="relative h-[205px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a94f636-fbe3-498a-a43a-8eb27a69761d-adventure-tourism.jpg"
                    alt="Himalayan travel and adventure"
                    fill
                  unoptimized
                    sizes="(max-width: 1024px) 40vw, 30vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative h-[205px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4b7c56df-d9d5-4eed-98e8-ae8bcdd4e8a6-wellness-retreats.jpg"
                    alt="Himalayan wellness experience"
                    fill
                  unoptimized
                    sizes="(max-width: 1024px) 40vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-[#0c211c] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f3c96b]">
                One ecosystem
              </p>

              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Multiple opportunities.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/60">
              CHP brings multiple Himalayan business and experience opportunities
              together within one integrated ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.04 }}
                  className={`group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index === 0 ? "h-64" : "h-48"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                  unoptimized
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071512] via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#f3c96b]/30 bg-[#0c211c]/80 text-[#f3c96b] backdrop-blur">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="bg-[#102a24] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f3c96b]">
              Who can become a Growth Partner?
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Bring your network, expertise or market reach.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/60">
              The program is open to people and organizations who can contribute
              to the growth of CHP through their networks, expertise, business
              relationships or market reach.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-[#f3c96b]/35 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f3c96b]/30 bg-[#f3c96b]/10 text-[#f3c96b]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-xl">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTRIBUTION */}
      <section className="bg-[#f5f1e8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
              How you can contribute
            </p>

            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Turn your network into opportunities.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#66736d]">
              Growth Partners can participate through promotion, lead generation,
              brand building, business connections and new opportunity referrals.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-5">
            {contributionSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-[1.5rem] border border-[#ddd6c8] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#c9ad69]">
                      {step.number}
                    </span>

                    <Icon className="h-5 w-5 text-[#8d6a2d]" />
                  </div>

                  <h3 className="mt-7 font-serif text-xl">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#69746f]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="relative overflow-hidden bg-[#071512] py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/affa9b38-a1fd-48ba-8040-f954839807b5-himalayan-experiences.jpg"
            alt=""
            fill
                  unoptimized
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#071512]/80" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f3c96b]">
                A performance-based partnership
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Grow together. Build together.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                The partnership is designed around a mutually agreed, target-based
                framework, with benefits linked to the contribution and performance
                of the Growth Partner.
              </p>

              <p className="mt-5 text-sm leading-6 text-white/45">
                Specific targets, terms and applicable conditions may be mutually
                agreed between CHP and the individual Growth Partner.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-7 backdrop-blur-md">
                <Building2 className="h-7 w-7 text-[#f3c96b]" />

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Personal Cottage Development
                </p>

                <p className="mt-2 font-serif text-2xl">
                  1 plot registration referral
                </p>

                <p className="mt-1 text-sm text-white/55">
                  per quarter under the current framework
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-7 backdrop-blur-md">
                <Building2 className="h-7 w-7 text-[#f3c96b]" />

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Facility Development
                </p>

                <p className="mt-2 font-serif text-2xl">
                  1 facility registration referral
                </p>

                <p className="mt-1 text-sm text-white/55">
                  every 6 months under the current framework
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
                Growth Partner benefits
              </p>

              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Create value on both sides.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-[#66736d]">
              Depending on the applicable partnership agreement, Growth Partners
              may receive the following benefits.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-[#e1ddd3] bg-[#faf8f2] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0c211c] text-[#f3c96b]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-xl">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#69746f]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT CHP PROVIDES */}
      <section className="bg-[#e9e4d9] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="rounded-[2rem] bg-[#0c211c] p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3c96b]">
              What CHP provides
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              A partner needs the right tools.
            </h2>

            <div className="mt-8 space-y-3">
              {[
                "CHP brand and business information",
                "Marketing and promotional material",
                "Partnership information",
                "Product and facility details",
                "Coordination with the CHP team",
                "Support for outreach initiatives",
                "Lead and referral coordination",
                "Information required for prospective customers and partners",
                "Agreed commercial and partnership terms",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-white/10 py-3 text-sm text-white/70 last:border-0"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f3c96b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d6a2d]">
              What CHP expects
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Active participation builds trust.
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#69746f]">
              A successful Growth Partner relationship depends on accurate
              representation, transparency, coordination and timely follow-through.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Represent CHP accurately and professionally",
                "Use approved CHP information and marketing material",
                "Maintain transparency with prospective customers and partners",
                "Coordinate leads with the CHP team",
                "Follow agreed pricing and commercial terms",
                "Respect confidentiality where applicable",
                "Support timely communication and follow-up",
                "Work within the mutually agreed partnership framework",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#e2ddd3] bg-[#faf8f2] p-4 text-sm font-medium leading-5 text-[#40504a]"
                >
                  <CheckCircle2 className="mb-2 h-4 w-4 text-[#7d9a67]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className="relative overflow-hidden bg-[#f5f1e8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
                Your network can become a Himalayan opportunity
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Someone you know may already be looking for a way in.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#66736d]">
                Your introduction could become the beginning of a new CHP partnership.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
              {[
                "A Himalayan second home",
                "A holiday cottage",
                "A hospitality opportunity",
                "A tourism business",
                "An adventure venture",
                "A wellness destination",
                "An agricultural or rural enterprise",
                "A destination for events and celebrations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-[#ddd6c8] bg-white p-5 shadow-sm"
                >
                  <Mountain className="h-5 w-5 text-[#8d6a2d]" />

                  <p className="mt-5 text-sm font-semibold leading-5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        id="apply-partner"
        className="scroll-mt-20 bg-[#071512] py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f3c96b]">
                Start the conversation
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Become part of the CHP Growth Partner network.
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/60">
                Tell us about your network, business background, market reach or
                partnership interest. The CHP team can then discuss the applicable
                framework with you.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Partner with CHP",
                  "Create opportunities",
                  "Grow together",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3c96b]/10 text-[#f3c96b]">
                      <Check className="h-4 w-4" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[2rem] border border-emerald-400/25 bg-emerald-950/40 p-10 text-center sm:p-14"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>

                  <h3 className="mt-6 font-serif text-3xl">
                    Application received.
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/60">
                    Thank you for your interest in joining CHP as a Growth
                    Partner. Our team can review your inquiry and connect with
                    you regarding the applicable partnership framework.
                  </p>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-7 text-sm font-semibold text-[#f3c96b] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-xl sm:p-9"
                >
                  <div className="mb-8">
                    <h3 className="font-serif text-3xl">
                      Tell us how you can contribute.
                    </h3>

                    <p className="mt-2 text-sm text-white/50">
                      Share the basics and we will take it from there.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name *">
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="form-input"
                      />
                    </Field>

                    <Field label="Email Address *">
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="form-input"
                      />
                    </Field>

                    <Field label="Phone / WhatsApp Number *">
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        className="form-input"
                      />
                    </Field>

                    <Field label="City / Base Location *">
                      <input
                        required
                        type="text"
                        placeholder="Delhi / Hyderabad / Dehradun / Pithoragarh"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            city: e.target.value,
                          })
                        }
                        className="form-input"
                      />
                    </Field>

                    <Field label="Preferred Partnership Area">
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            category: e.target.value,
                          })
                        }
                        className="form-input"
                      >
                        <option>Business & Professional Network</option>
                        <option>Marketing & Digital Promotion</option>
                        <option>Travel & Tourism</option>
                        <option>Community & Network Development</option>
                        <option>Cottage / Facility Referrals</option>
                        <option>Entrepreneurship / Business Collaboration</option>
                        <option>Other</option>
                      </select>
                    </Field>

                    <Field label="Contribution / Asset Type">
                      <select
                        value={formData.investmentTier}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            investmentTier: e.target.value,
                          })
                        }
                        className="form-input"
                      >
                        <option>Not applicable / Referral-based</option>
                        <option>Professional network</option>
                        <option>Marketing capability</option>
                        <option>Travel / tourism network</option>
                        <option>Land / property connection</option>
                        <option>Business / investment connection</option>
                      </select>
                    </Field>
                  </div>

                  <Field
                    label="Tell us about your background or partnership interest"
                    className="mt-5"
                  >
                    <textarea
                      rows={5}
                      placeholder="Tell us about your network, audience, business background, property connection, market reach or the opportunity you would like to explore..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="form-input resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#f3c96b] px-6 py-4 text-sm font-bold text-[#14231f] transition hover:bg-[#ffe09a]"
                  >
                    <Send className="h-4 w-4" />
                    Submit Growth Partner Inquiry
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f1e8] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
              Questions
            </p>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Frequently asked.
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => setOpenFaq(open ? null : index)}
                  className="w-full rounded-[1.25rem] border border-[#ddd6c8] bg-white px-6 py-5 text-left shadow-sm"
                >
                  <div className="flex items-center justify-between gap-5">
                    <span className="font-semibold">{faq.q}</span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#8d6a2d] transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-4 text-sm leading-6 text-[#69746f]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0c211c] py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/affa9b38-a1fd-48ba-8040-f954839807b5-himalayan-experiences.jpg"
            alt=""
            fill
                  unoptimized
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#0c211c]/80" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f3c96b]">
            People. Partnerships. Possibilities.
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
            Together, we can create businesses, experiences and opportunities in
            the Himalayas.
          </h2>

          <a
            href="#apply-partner"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f3c96b] px-7 py-4 text-sm font-bold text-[#14231f] transition hover:bg-[#ffe09a]"
          >
            Become a CHP Growth Partner
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <style jsx global>{`
        .form-input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.11);
          background: rgba(255, 255, 255, 0.055);
          padding: 0.85rem 1rem;
          color: white;
          outline: none;
          font-size: 0.875rem;
          transition:
            border-color 180ms ease,
            background 180ms ease;
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.32);
        }

        .form-input:focus {
          border-color: rgba(243, 201, 107, 0.65);
          background: rgba(255, 255, 255, 0.075);
        }

        .form-input option {
          color: #14231f;
          background: white;
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
        {label}
      </label>

      {children}
    </div>
  );
}