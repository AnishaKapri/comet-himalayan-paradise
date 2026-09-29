"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Heart,
  Leaf,
  MapPin,
  Megaphone,
  PawPrint,
  Shield,
  Sprout,
  Users,
  Wheat,
} from "lucide-react";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/df7926db-451e-458d-9471-b84f0a4b1860-comet-gauseva-header-under-500kb.webp";

const GAUSEVA_WHATSAPP = "919949994989";

const supportAreas = [
  {
    title: "Cow Care & Financial Support",
    icon: Heart,
    items: [
      "Monthly sponsorship for feeding and caring for cows",
      "Adopt-a-Cow programme",
      "Veterinary care and vaccinations",
      "Sponsorship of cow caretakers",
      "One-time contributions for general upkeep",
    ],
  },
  {
    title: "Infrastructure Support",
    icon: Building2,
    items: [
      "Cow shelters",
      "Water tanks",
      "Solar lighting",
      "Construction materials such as bricks, cement, tin sheets and tiles",
      "Farm equipment",
    ],
  },
  {
    title: "Material Support",
    icon: Wheat,
    items: ["Fodder", "Grains", "Medicines", "Supplements"],
  },
  {
    title: "Professional & Volunteer Support",
    icon: Users,
    items: [
      "Veterinary services",
      "Digital marketing",
      "Fundraising",
      "Accounting",
      "Other skilled services",
    ],
  },
];

const sustainabilityApproach = [
  ["01", "Promoting organic farming.", Leaf],
  ["02", "Developing useful applications for cow by-products.", Wheat],
  ["03", "Establishing a nature-first, eco-friendly farming community.", Sprout],
  [
    "04",
    "Encouraging individuals and organisations to support/adopt abandoned cows through applicable donation/CSR mechanisms.",
    Users,
  ],
  ["05", "Accepting one-time contributions for general upkeep.", Heart],
] as const;

const communityParticipation = [
  "Promoting Gauseva stories through social media",
  "Organising fundraising campaigns",
  "Visiting the Gauseva Kendra",
  "School and college collaborations",
  "Helping with government schemes",
  "Supporting biogas and manure initiatives",
  "Educational visits and projects",
];

const individualBenefits = [
  "80G receipt",
  "Access to certain CHP services",
  "Proposed adjustment of a portion of donation toward a CHP plot",
  "Access to Comet Guest House in Munsyari",
  "Opportunity to access land in the Gauseva village for organic farming",
  "Guidance during Uttarakhand trips",
  "Registration privileges for Yoga programmes in Pithoragarh",
];

const organisationOpportunities = [
  "Employee work-from-the-Himalayas programmes",
  "Executive team outings",
  "Corporate workshops",
  "Senior-management meetings",
  "Client/customer experiences",
  "Employee engagement and team programmes",
  "Yoga and Sadhna Shivir programmes",
];

const membershipOptions = [
  ["Adopt a Cow", Heart],
  ["Become a Member", Users],
  ["Sponsor Cow Care", PawPrint],
  ["Donate", Heart],
  ["Volunteer", Users],
  ["Support Infrastructure", Building2],
  ["Partner With Us", Shield],
  ["Visit CHP Gauseva Kendra", MapPin],
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`max-w-4xl ${light ? "text-white" : "text-[#17352d]"}`}>
      {eyebrow && (
        <p
          className={`text-[11px] font-bold uppercase tracking-[0.28em] ${
            light ? "text-[#f2d487]" : "text-[#96752f]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-4xl leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-3xl text-base leading-7 sm:text-lg ${
            light ? "text-white/68" : "text-[#5d6b65]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PdfBulletList({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6">
          <Check
            className={`mt-1 h-4 w-4 shrink-0 ${
              light ? "text-[#f2d487]" : "text-[#96752f]"
            }`}
          />
          <span className={light ? "text-white/72" : "text-[#5f6c66]"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function CometGausevaPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();

    const whatsappMessage = [
      "CHP Gauseva Kendra — Interested",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
      "",
      "Message:",
      message || "No additional message.",
    ].join("\n");

    setSubmitted(true);

    window.open(
      `https://wa.me/${GAUSEVA_WHATSAPP}?text=${encodeURIComponent(
        whatsappMessage,
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3e9] text-[#17352d]">
      {/* HERO — intentionally preserved from the existing page */}
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#10241e]">
        <img
          src={HEADER_IMAGE}
          alt="Comet Gauseva Kendra in the Himalayas"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071610]/90 via-[#071610]/52 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/85 via-transparent to-[#071610]/10" />
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f2d487] backdrop-blur-md">
              <Heart className="h-3.5 w-3.5" /> CHP Cow-Care Centre
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Comet<span className="block text-[#f2d487]">Gauseva Kendra.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              A compassionate initiative in the Himalayas providing shelter, protection and care for abandoned, injured and aging cows — while connecting care with land, livelihoods and community.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-y-4 sm:grid-cols-4 sm:gap-0">
              {[
                ["Cow Care", Heart],
                ["Organic Farming", Leaf],
                ["Rural Livelihoods", Users],
                ["A Greener Himalaya", Sprout],
              ].map(([label, Icon], index) => {
                const C = Icon as typeof Heart;
                return (
                  <div
                    key={String(label)}
                    className={`flex items-center gap-2 ${
                      index > 0
                        ? "sm:border-l sm:border-white/25 sm:pl-5"
                        : ""
                    }`}
                  >
                    <C className="h-5 w-5 text-[#f2d487]" />
                    <span className="text-xs font-semibold text-white/80 sm:text-sm">
                      {String(label)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#membership"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f2d487] px-7 py-4 text-sm font-bold text-[#17352d] transition hover:bg-[#ffe4a0]"
              >
                Support Gauseva <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#sustainability"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Explore the model <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#071610]/70 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            {[
              ["Care", Heart],
              ["Organic farming", Leaf],
              ["Rural livelihoods", Users],
              ["Community", Shield],
            ].map(([label, Icon], i) => {
              const C = Icon as typeof Heart;
              return (
                <div
                  key={String(label)}
                  className={`flex items-center gap-3 px-4 py-4 ${
                    i > 1 ? "hidden sm:flex" : ""
                  } sm:px-7`}
                >
                  <C className="h-5 w-5 text-[#f2d487]" />
                  <span className="text-xs font-semibold text-white/75 sm:text-sm">
                    {String(label)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Vision & Mission" />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-[#17352d] p-8 text-white shadow-[0_25px_70px_-45px_rgba(20,45,37,0.7)] sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2d487]/10 text-[#f2d487]">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-7 font-serif text-3xl">Vision</h3>
              <p className="mt-5 text-lg leading-8 text-white/78">
                To create a compassionate and sustainable ecosystem where every cow is respected, protected and nurtured, while contributing to rural livelihoods, organic farming and spiritual harmony.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#ded7c8] bg-[#f7f3e9] p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#17352d] text-[#f2d487]">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-7 font-serif text-3xl">Mission</h3>
              <p className="mt-5 text-lg leading-8 text-[#5f6c66]">
                To rescue, shelter and care for abandoned, injured and aging cows in a safe and loving environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INTRODUCTION + SELF-SUSTAINING MODEL */}
      <section className="bg-[#f7f3e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-[#ded7c8] bg-white p-8 sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#96752f]">
                CHP Gauseva Kendra
              </p>
              <p className="mt-6 text-xl font-medium leading-9 text-[#17352d] sm:text-2xl">
                Everyone can contribute. Give your time, skills, resources or support and become part of the journey from neglect to nurture.
              </p>
              <p className="mt-6 text-base leading-8 text-[#5f6c66]">
                CHP Gauseva Kendra is an initiative focused on providing shelter, protection and compassionate care to abandoned, injured and aging cows. It is located in Pithoragarh, Uttarakhand, at Sinakhola village, Paleta.
              </p>
              <p className="mt-5 text-base leading-8 text-[#5f6c66]">
                The initiative is built around the idea that caring for cows can also contribute to rural livelihoods, organic farming, environmental sustainability and community participation.
              </p>
              <div className="mt-8 rounded-2xl bg-[#17352d] p-6 text-white">
                <p className="font-serif text-2xl">Let’s join hands to provide food, shelter and protection to abandoned cows.</p>
              </div>
            </div>

            <div id="sustainability" className="rounded-[2rem] bg-[#102a23] p-8 text-white sm:p-10">
              <SectionHeading
                title="Building a Self-Sustaining Gauseva Model"
                description="A major focus of the initiative is to move beyond dependence on donations and develop a self-sustaining model."
                light
              />
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#f2d487]">
                The proposed sustainability approach includes:
              </p>
              <div className="mt-6 space-y-3">
                {sustainabilityApproach.map(([number, text, Icon]) => {
                  const C = Icon as typeof Heart;
                  return (
                    <div
                      key={number}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2d487]/10 font-serif text-sm text-[#f2d487]">
                        {number}
                      </span>
                      <div className="flex gap-3">
                        <C className="mt-1 h-4 w-4 shrink-0 text-[#f2d487]" />
                        <p className="text-sm leading-6 text-white/72">{text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SUSTAINABILITY MODEL */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Sustainability Model"
            description="Care for cows. Cultivate the land. Create livelihoods. Build a sustainable community."
          />

          <div className="mt-12 rounded-[2rem] bg-[#17352d] p-7 text-white sm:p-10">
            <div className="grid gap-3 md:grid-cols-5">
              {[
                ["Care for cows", Heart],
                ["Cultivate the land", Leaf],
                ["Create livelihoods", Users],
                ["Build a sustainable community", Sprout],
                ["Self-sustaining cow care", PawPrint],
              ].map(([title, Icon], index) => {
                const C = Icon as typeof Heart;
                return (
                  <div key={String(title)} className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                    <C className="h-5 w-5 text-[#f2d487]" />
                    <p className="mt-5 font-serif text-xl">{String(title)}</p>
                    {index < 4 && (
                      <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#f2d487] md:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOW YOU CAN SUPPORT */}
      <section className="bg-[#f7f3e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How You Can Support"
            description="CHP Gauseva Kendra provides a broad range of participation opportunities."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {supportAreas.map(({ title, icon: Icon, items }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#ded7c8] bg-white p-7 shadow-[0_20px_55px_-40px_rgba(20,45,37,0.55)] sm:p-9"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#17352d] text-[#f2d487]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl leading-tight text-[#17352d] sm:text-3xl">
                      {title}
                    </h3>
                    <div className="mt-6">
                      <PdfBulletList items={items} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[2rem] border border-[#ded7c8] bg-white p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7f3e9] text-[#96752f]">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#17352d] sm:text-3xl">
                Community Participation
              </h3>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-8 text-[#5f6c66]">
              The initiative also invites people to contribute their time, skills, networks and outreach, not only money.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#96752f]">
              Possible participation includes:
            </p>
            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {communityParticipation.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-[#5f6c66]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#96752f]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIC FARMING & RURAL DEVELOPMENT */}
      <section className="bg-[#102a23] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Organic Farming & Rural Development"
            description="The 11+ hectare village environment provides an opportunity to integrate Gauseva with organic farming and rural development."
            light
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f2d487]">
                Our ecosystem include:
              </p>
              <div className="mt-7 space-y-3">
                {[
                  ["Gauseva", Heart],
                  ["Organic Farming", Leaf],
                  ["Cow By-products", Wheat],
                  ["Sustainable Agriculture", Sprout],
                  ["Rural Livelihoods", Users],
                  ["Self-Sustaining Cow Care", PawPrint],
                ].map(([label, Icon], index) => {
                  const C = Icon as typeof Heart;
                  return (
                    <div key={String(label)} className="flex items-center gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2d487]/10 text-[#f2d487]">
                        <C className="h-4 w-4" />
                      </span>
                      <span className="text-base font-medium text-white/78">{String(label)}</span>
                      {index < 5 && <ArrowRight className="ml-auto hidden h-4 w-4 text-[#f2d487]/60 sm:block" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[2rem] border border-[#f2d487]/20 bg-[#f2d487]/[0.06] p-7 sm:p-9">
              <div>
                <p className="font-serif text-3xl leading-tight text-[#f7e7b5] sm:text-4xl">
                  Gauseva → Organic Farming → Cow By-products → Sustainable Agriculture → Rural Livelihoods → Self-Sustaining Cow Care
                </p>
              </div>
              <p className="mt-10 border-t border-white/10 pt-6 text-base leading-8 text-white/65">
                This can become one of the important differentiators of the CHP initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS & ENGAGEMENT OPPORTUNITIES */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Benefits & Engagement Opportunities"
            description="The document describes different engagement opportunities for individual contributors and organisations."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#ded7c8] bg-[#f7f3e9] p-7 sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#96752f]">
                Engagement opportunity
              </p>
              <h3 className="mt-3 font-serif text-3xl text-[#17352d]">
                For Individual Contributors
              </h3>
              <div className="mt-8">
                <PdfBulletList items={individualBenefits} />
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#17352d] p-7 text-white sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f2d487]">
                Engagement opportunity
              </p>
              <h3 className="mt-3 font-serif text-3xl">
                For Organisations
              </h3>
              <div className="mt-8">
                <PdfBulletList items={organisationOpportunities} light />
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-[#d9cdb5] bg-[#fffaf0] p-5 sm:p-6">
            <p className="text-sm leading-7 text-[#665f50]">
              <strong className="text-[#403b32]">Website note:</strong> Tax benefits, donation deductions, CSR eligibility and any promised financial/land-related benefits should be legally and tax reviewed before publishing as definitive claims.
            </p>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP / JOIN US */}
      <section id="membership" className="bg-[#f7f3e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Membership / Join Us" />

          <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#0b1d18] text-white shadow-[0_30px_90px_-45px_rgba(20,45,37,0.8)]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f2d487]">
                  Join the CHP Gauseva Initiative
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                  Join the CHP Gauseva Initiative
                </h2>
                <p className="mt-6 text-base leading-8 text-white/62">
                  Everyone can contribute through care, membership, sponsorship, donations, volunteering, infrastructure support, partnerships or a visit to CHP Gauseva Kendra.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {membershipOptions.map(([label, Icon]) => {
                    const C = Icon as typeof Heart;
                    return (
                      <a
                        href="#membership-form"
                        key={String(label)}
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                      >
                        <span className="text-sm font-semibold text-white/80">
                          {String(label)}
                        </span>
                        <C className="h-4 w-4 text-[#f2d487] transition group-hover:scale-110" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div id="membership-form" className="border-t border-white/10 bg-white/[0.035] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f2d487]">
                  Contact CHP
                </p>
                <h3 className="mt-3 font-serif text-3xl">
                  Tell us how you would like to participate.
                </h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-white/80">
                        Full name *
                      </span>
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#f2d487]/70"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-white/80">
                        Email *
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#f2d487]/70"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-white/80">
                        Phone / WhatsApp *
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#f2d487]/70"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-white/80">
                        I am interested in *
                      </span>
                      <select
                        name="interest"
                        required
                        defaultValue=""
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-sm text-white outline-none focus:border-[#f2d487]/70"
                      >
                        <option value="" disabled className="text-black">
                          Select an option
                        </option>
                        {membershipOptions.map(([label]) => (
                          <option key={String(label)} className="text-black">
                            {String(label)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-white/80">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us how you would like to contribute..."
                      className="w-full resize-y rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-white/35 focus:border-[#f2d487]/70"
                    />
                  </label>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-5 text-white/42">
                      Your enquiry opens in WhatsApp with the information you enter.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f2d487] px-7 py-4 text-sm font-bold text-[#17352d] transition hover:bg-[#ffe4a0]"
                    >
                      Send enquiry <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {submitted && (
                    <p className="rounded-xl border border-[#f2d487]/20 bg-[#f2d487]/10 px-4 py-3 text-sm text-[#f7e7b5]">
                      Your WhatsApp enquiry has been prepared.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ded7c8] bg-white px-5 py-8 text-center text-xs leading-6 text-[#77817c] sm:px-8">
        CHP Gauseva Kendra · Sinakhola village, Paleta · Pithoragarh, Uttarakhand
      </footer>
    </main>
  );
}
