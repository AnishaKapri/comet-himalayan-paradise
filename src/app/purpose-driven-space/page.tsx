"use client";

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
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

const HEADER_IMAGE = "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/df7926db-451e-458d-9471-b84f0a4b1860-comet-gauseva-header-under-500kb.webp";
const GAUSEVA_WHATSAPP = "919949994989";

const supportAreas = [
  { title: "Cow Care & Financial Support", icon: Heart, items: [
    "Monthly sponsorship for feeding and caring for cows",
    "Adopt-a-Cow programme",
    "Veterinary care and vaccinations",
    "Sponsorship of cow caretakers",
    "One-time contributions for general upkeep",
  ]},
  { title: "Infrastructure Support", icon: Building2, items: [
    "Cow shelters", "Water tanks", "Solar lighting",
    "Bricks, cement, tin sheets and tiles", "Farm equipment",
  ]},
  { title: "Material Support", icon: Wheat, items: [
    "Fodder", "Grains", "Medicines", "Supplements",
  ]},
  { title: "Professional & Volunteer Support", icon: Users, items: [
    "Veterinary services", "Digital marketing", "Fundraising",
    "Accounting", "Other skilled services",
  ]},
];

const participation = [
  ["Share the Story", "Promote Gauseva stories through social media and your personal or professional network.", Megaphone],
  ["Give Your Time", "Visit the Gauseva Kendra and contribute through volunteering, outreach or skilled support.", Users],
  ["Build Awareness", "Support school and college collaborations, educational visits and community projects.", Shield],
  ["Support the Ecosystem", "Help with government schemes, biogas, manure initiatives and other rural-development efforts.", Sprout],
] as const;

const sustainability = [
  ["01", "Gauseva", "Rescue, shelter and compassionate care for abandoned, injured and aging cows.", Heart],
  ["02", "Organic Farming", "Connect cow care with a nature-first approach to cultivation and rural development.", Leaf],
  ["03", "Cow By-products", "Develop useful applications that can support a more self-sustaining model.", Wheat],
  ["04", "Sustainable Agriculture", "Create a practical relationship between animal care, land and agricultural activity.", Sprout],
  ["05", "Rural Livelihoods", "Create opportunities around a sustainable village ecosystem and community participation.", Users],
  ["06", "Self-Sustaining Cow Care", "Move toward a model that can reduce dependence on donations over time.", Heart],
] as const;

const individualEngagement = [
  "80G receipt",
  "Access to certain CHP services",
  "Proposed adjustment of a portion of donation toward a CHP plot",
  "Access to Comet Guest House in Munsyari",
  "Opportunity to access land in the Gauseva village for organic farming",
  "Guidance during Uttarakhand trips",
  "Registration privileges for Yoga programmes in Pithoragarh",
];

const organisationEngagement = [
  "Employee work-from-the-Himalayas programmes",
  "Executive team outings",
  "Corporate workshops",
  "Senior-management meetings",
  "Client/customer experiences",
  "Employee engagement and team programmes",
  "Yoga and Sadhna Shivir programmes",
];

const faqs = [
  ["Where is CHP Gauseva Kendra?", "The PDF describes CHP Gauseva Kendra as being located in Sinakhola village, Paleta, Pithoragarh, Uttarakhand."],
  ["What is the main purpose of the initiative?", "Its mission is to rescue, shelter and care for abandoned, injured and aging cows in a safe and loving environment, while connecting cow care with rural livelihoods, organic farming, environmental sustainability and community participation."],
  ["Can I support without donating money?", "Yes. The initiative specifically invites people to contribute time, skills, networks and outreach. Examples include social media promotion, fundraising campaigns, visits, school and college collaborations, government-scheme support and educational projects."],
  ["What does the sustainability model aim to achieve?", "The proposed model connects Gauseva with organic farming, useful cow by-products, an eco-friendly farming community and broader community participation, with the goal of moving toward more self-sustaining cow care."],
  ["Can organisations participate?", "Yes. The document identifies potential organisational engagement through employee programmes, executive outings, corporate workshops, senior-management meetings, client experiences, employee engagement and Yoga/Sadhna Shivir programmes."],
] as const;

function SectionTitle({ eyebrow, title, description, light = false }: {
  eyebrow: string; title: string; description?: string; light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${light ? "text-white" : "text-[#17352d]"}`}>
      <p className={`text-[11px] font-bold uppercase tracking-[0.28em] ${light ? "text-[#e9c66d]" : "text-[#96752f]"}`}>
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">{title}</h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-white/65" : "text-[#5d6b65]"}`}>{description}</p>}
    </div>
  );
}

export default function CometGausevaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3e9] text-[#17352d]">
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
              {[["Cow Care", Heart], ["Organic Farming", Leaf], ["Rural Livelihoods", Users], ["A Greener Himalaya", Sprout]].map(([label, Icon], index) => {
                const C = Icon as typeof Heart;
                return (
                  <div key={String(label)} className={`flex items-center gap-2 ${index > 0 ? "sm:border-l sm:border-white/25 sm:pl-5" : ""}`}>
                    <C className="h-5 w-5 text-[#f2d487]" />
                    <span className="text-xs font-semibold text-white/80 sm:text-sm">{String(label)}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#interest" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f2d487] px-7 py-4 text-sm font-bold text-[#17352d] transition hover:bg-[#ffe4a0]">Support Gauseva <ArrowRight className="h-4 w-4" /></a>
              <a href="#model" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15">Explore the model <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#071610]/70 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            {[[ "Care", Heart ], ["Organic farming", Leaf ], ["Rural livelihoods", Users ], ["Community", Shield ]].map(([label, Icon], i) => {
              const C = Icon as typeof Heart;
              return <div key={String(label)} className={`flex items-center gap-3 px-4 py-4 ${i > 1 ? "hidden sm:flex" : ""} sm:px-7`}><C className="h-5 w-5 text-[#f2d487]" /><span className="text-xs font-semibold text-white/75 sm:text-sm">{String(label)}</span></div>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionTitle eyebrow="From neglect to nurture" title="Care for cows. Care for the land. Care for the community." description="CHP Gauseva Kendra is described in the source document as an initiative for abandoned, injured and aging cows in Sinakhola village, Paleta, Pithoragarh, Uttarakhand." />
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[["Shelter", "A safe and loving environment"], ["Protection", "Compassionate care and support"], ["Participation", "Everyone can contribute"]].map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-[#ded7c8] bg-white/70 p-5"><p className="font-serif text-xl">{title}</p><p className="mt-2 text-sm leading-6 text-[#68746e]">{text}</p></div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-[#17352d] p-8 text-white shadow-[0_30px_80px_-35px_rgba(0,0,0,0.45)] sm:p-10">
              <MapPin className="h-7 w-7 text-[#f2d487]" />
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">Location</p>
              <h3 className="mt-3 font-serif text-3xl">Sinakhola village, Paleta</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">Pithoragarh, Uttarakhand</p>
              <div className="mt-8 border-t border-white/10 pt-7"><p className="text-sm leading-7 text-white/70">The document connects the initiative with rural livelihoods, organic farming, environmental sustainability and community participation.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Vision & mission" title="A compassionate and sustainable ecosystem." description="The source document frames Gauseva as both a cow-care initiative and a pathway toward a more connected rural ecosystem." />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#17352d] p-8 text-white sm:p-10">
              <Heart className="h-6 w-6 text-[#f2d487]" /><p className="mt-7 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f2d487]">Vision</p>
              <p className="mt-4 max-w-xl font-serif text-2xl leading-8 sm:text-3xl">To create a compassionate and sustainable ecosystem where every cow is respected, protected and nurtured.</p>
              <p className="mt-5 text-sm leading-7 text-white/60">The vision also connects cow care with rural livelihoods, organic farming and spiritual harmony.</p>
            </div>
            <div className="rounded-[2rem] border border-[#ded7c8] bg-[#f7f3e9] p-8 sm:p-10">
              <Shield className="h-6 w-6 text-[#96752f]" /><p className="mt-7 text-[11px] font-bold uppercase tracking-[0.24em] text-[#96752f]">Mission</p>
              <p className="mt-4 max-w-xl font-serif text-2xl leading-8 sm:text-3xl">Rescue, shelter and care for abandoned, injured and aging cows in a safe and loving environment.</p>
              <p className="mt-5 text-sm leading-7 text-[#68746e]">Everyone can contribute time, skills, resources or support.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="model" className="bg-[#102a23] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Our sustainability model" title="Care for cows. Cultivate the land. Create livelihoods. Build a sustainable community." description="The proposed model aims to move beyond dependence on donations by connecting Gauseva with organic farming, useful cow by-products, a nature-first farming community and broader participation." light />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sustainability.map(([step, title, text, Icon]) => { const C = Icon as typeof Heart; return (
              <div key={step} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between"><span className="font-serif text-3xl text-[#d8bf78]">{step}</span><C className="h-5 w-5 text-[#f2d487]" /></div>
                <h3 className="mt-8 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ); })}
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-[#f2d487]/20 bg-[#f2d487]/[0.07] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-serif text-lg text-[#f7e7b5] sm:text-xl">
              {["Gauseva","Organic Farming","Cow By-products","Sustainable Agriculture","Rural Livelihoods","Self-Sustaining Cow Care"].map((x, i) => <span key={x} className="flex items-center gap-3">{x}{i < 5 && <ArrowRight className="h-4 w-4" />}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="bg-[#f7f3e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="How you can support" title="There is more than one way to help." description="The initiative explicitly welcomes financial support, infrastructure, materials, professional skills, volunteering, networks and community participation." />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {supportAreas.map(({ title, icon: Icon, items }) => (
              <div key={title} className="rounded-[1.75rem] border border-[#ddd6c8] bg-white p-7 shadow-[0_18px_50px_-35px_rgba(20,45,37,0.45)] sm:p-8">
                <div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#17352d] text-[#f2d487]"><Icon className="h-5 w-5" /></div>
                  <div><h3 className="font-serif text-2xl">{title}</h3><div className="mt-5 space-y-3">{items.map(item => <div key={item} className="flex gap-3 text-sm leading-6 text-[#5f6c66]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#96752f]" /><span>{item}</span></div>)}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionTitle eyebrow="Community participation" title="Your time and skills matter too." description="The initiative invites people to contribute their time, skills, networks and outreach — not only money." />
              <div className="mt-8 rounded-[1.5rem] bg-[#f7f3e9] p-6"><p className="text-sm font-semibold text-[#17352d]">Participation can include:</p>
                <div className="mt-5 space-y-3">{["Promoting Gauseva stories through social media","Organising fundraising campaigns","Visiting the Gauseva Kendra","School and college collaborations","Helping with government schemes","Supporting biogas and manure initiatives","Educational visits and projects"].map(item => <div key={item} className="flex gap-3 text-sm leading-6 text-[#5f6c66]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#96752f]" />{item}</div>)}</div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {participation.map(([title, text, Icon]) => { const C = Icon as typeof Heart; return <div key={title} className="rounded-[1.75rem] border border-[#ded7c8] bg-[#fbfaf6] p-7"><C className="h-6 w-6 text-[#96752f]" /><h3 className="mt-7 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-[#68746e]">{text}</p></div>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#17352d] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5"><p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f2d487]">Organic farming & rural development</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">An opportunity to connect cow care with the land.</h2><p className="mt-5 text-base leading-7 text-white/60">The source document describes an 11+ hectare village environment as an opportunity to integrate Gauseva with organic farming and rural development.</p></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">{[["11+","hectare village environment"],["Organic","farming opportunity"],["Rural","livelihood development"],["Self-sustaining","cow-care direction"]].map(([value,label]) => <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-7"><p className="font-serif text-3xl text-[#f2d487]">{value}</p><p className="mt-2 text-sm leading-6 text-white/55">{label}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Engagement opportunities" title="A place for individuals and organisations." description="The source document outlines different potential ways individuals and organisations can engage with the ecosystem." />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 sm:p-10"><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#96752f]">For individual contributors</p><h3 className="mt-3 font-serif text-3xl">Contribute personally.</h3><div className="mt-7 space-y-3">{individualEngagement.map(item => <div key={item} className="flex gap-3 rounded-xl bg-[#f7f3e9] p-4 text-sm leading-6 text-[#5f6c66]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#96752f]" />{item}</div>)}</div></div>
            <div className="rounded-[2rem] bg-[#102a23] p-8 text-white sm:p-10"><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f2d487]">For organisations</p><h3 className="mt-3 font-serif text-3xl">Turn participation into experience.</h3><div className="mt-7 space-y-3">{organisationEngagement.map(item => <div key={item} className="flex gap-3 rounded-xl bg-white/[0.05] p-4 text-sm leading-6 text-white/65"><Check className="mt-1 h-4 w-4 shrink-0 text-[#f2d487]" />{item}</div>)}</div></div>
          </div>
          <div className="mt-6 rounded-2xl border border-[#d9cdb5] bg-[#fffaf0] p-5 text-sm leading-6 text-[#665f50]"><strong className="text-[#403b32]">Important:</strong> the source document notes that tax benefits, donation deductions, CSR eligibility and any promised financial or land-related benefits should be legally and tax reviewed before being published as definitive claims.</div>
        </div>
      </section>

      <section id="interest" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow="Interested in Gauseva?" title="Start a conversation with CHP." description="Tell us how you would like to participate. You can adopt a cow, sponsor care, volunteer, support infrastructure, contribute professional skills or explore a partnership." />
            <div className="mt-8 rounded-[1.75rem] bg-[#17352d] p-7 text-white sm:p-8">
              <p className="font-serif text-2xl">Everyone can contribute.</p>
              <p className="mt-3 text-sm leading-6 text-white/60">Share your details and interest. The form opens WhatsApp with a ready-to-send enquiry for the CHP team.</p>
              <div className="mt-7 space-y-3">
                {["Adopt a Cow","Sponsor Cow Care","Volunteer","Support Infrastructure","Professional / Skilled Support","School or College Collaboration","Corporate / Organisation Partnership","Visit CHP Gauseva Kendra"].map(item => <div key={item} className="flex items-center gap-3 text-sm text-white/75"><Check className="h-4 w-4 shrink-0 text-[#f2d487]" />{item}</div>)}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form className="rounded-[2rem] border border-[#ded7c8] bg-[#f7f3e9] p-6 shadow-[0_25px_70px_-45px_rgba(20,45,37,0.5)] sm:p-9" onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const name = String(data.get("name") || "").trim();
              const email = String(data.get("email") || "").trim();
              const phone = String(data.get("phone") || "").trim();
              const interest = String(data.get("interest") || "").trim();
              const message = String(data.get("message") || "").trim();
              const whatsappMessage = ["CHP Gauseva Kendra — Interested", "", `Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, `Interest: ${interest}`, "", "Message:", message || "No additional message."].join("\n");
              window.open(`https://wa.me/${GAUSEVA_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
            }}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block"><span className="mb-2 block text-sm font-semibold text-[#17352d]">Full name *</span><input name="name" required placeholder="Your name" className="w-full rounded-2xl border border-[#d8d0c1] bg-white px-4 py-3.5 text-sm text-[#17352d] outline-none transition placeholder:text-[#9aa19d] focus:border-[#96752f] focus:ring-2 focus:ring-[#96752f]/10" /></label>
                <label className="block"><span className="mb-2 block text-sm font-semibold text-[#17352d]">Email *</span><input name="email" type="email" required placeholder="you@example.com" className="w-full rounded-2xl border border-[#d8d0c1] bg-white px-4 py-3.5 text-sm text-[#17352d] outline-none transition placeholder:text-[#9aa19d] focus:border-[#96752f] focus:ring-2 focus:ring-[#96752f]/10" /></label>
                <label className="block"><span className="mb-2 block text-sm font-semibold text-[#17352d]">Phone / WhatsApp *</span><input name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full rounded-2xl border border-[#d8d0c1] bg-white px-4 py-3.5 text-sm text-[#17352d] outline-none transition placeholder:text-[#9aa19d] focus:border-[#96752f] focus:ring-2 focus:ring-[#96752f]/10" /></label>
                <label className="block"><span className="mb-2 block text-sm font-semibold text-[#17352d]">I am interested in *</span><select name="interest" required defaultValue="" className="w-full rounded-2xl border border-[#d8d0c1] bg-white px-4 py-3.5 text-sm text-[#17352d] outline-none transition focus:border-[#96752f] focus:ring-2 focus:ring-[#96752f]/10"><option value="" disabled>Select an option</option><option>Adopt a Cow</option><option>Sponsor Cow Care</option><option>Volunteer</option><option>Support Infrastructure</option><option>Material Support</option><option>Professional / Skilled Support</option><option>School or College Collaboration</option><option>Corporate / Organisation Partnership</option><option>Visit CHP Gauseva Kendra</option><option>Other</option></select></label>
                <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-[#17352d]">Tell us more</span><textarea name="message" rows={5} placeholder="Tell us how you would like to contribute..." className="w-full resize-y rounded-2xl border border-[#d8d0c1] bg-white px-4 py-3.5 text-sm leading-6 text-[#17352d] outline-none transition placeholder:text-[#9aa19d] focus:border-[#96752f] focus:ring-2 focus:ring-[#96752f]/10" /></label>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-md text-xs leading-5 text-[#737c77]">Your enquiry opens in WhatsApp with the information you enter.</p><button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#17352d] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#24483e]">Send enquiry <ArrowRight className="h-4 w-4 text-[#f2d487]" /></button></div>
            </form>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b1d18] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d5b866]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f2d487]">Join the CHP Gauseva Initiative</p><h2 className="mt-4 font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl">Give care a place to grow.</h2><p className="mt-6 text-base leading-7 text-white/60 sm:text-lg">Whether you adopt a cow, sponsor care, volunteer your skills, support infrastructure or simply visit and learn, there is a way to participate.</p></div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["Adopt a Cow",Heart],["Become a Member",Users],["Sponsor Cow Care",PawPrint],["Donate",Heart],["Volunteer",Users],["Support Infrastructure",Building2],["Partner With Us",Shield],["Visit Gauseva Kendra",MapPin]].map(([label,Icon]) => { const C = Icon as typeof Heart; return <a href="#support" key={String(label)} className="group flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]"><span className="text-sm font-semibold text-white/80">{String(label)}</span><C className="h-4 w-4 text-[#f2d487] transition group-hover:scale-110" /></a>; })}</div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#support" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f2d487] px-7 py-4 text-sm font-bold text-[#17352d] transition hover:bg-[#ffe4a0]">Explore ways to support <ArrowRight className="h-4 w-4" /></a><a href="#faq" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">Read common questions</a></div>
        </div>
      </section>

      <section id="faq" className="bg-[#f7f3e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-4xl"><div className="text-center"><p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#96752f]">Questions</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Frequently asked.</h2></div>
          <div className="mt-10 space-y-3">{faqs.map(([q,a],i) => { const open = openFaq === i; return <button key={q} type="button" onClick={() => setOpenFaq(open ? null : i)} className="w-full rounded-[1.35rem] border border-[#ddd6c8] bg-white p-5 text-left shadow-sm"><div className="flex items-center justify-between gap-5"><span className="font-semibold text-[#17352d]">{q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[#96752f] transition ${open ? "rotate-180" : ""}`} /></div><div className={`grid transition-all duration-300 ${open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="text-sm leading-6 text-[#68746e]">{a}</p></div></div></button>; })}</div>
        </div>
      </section>

      <footer className="border-t border-[#ded7c8] bg-[#f7f3e9] px-5 py-8 text-center text-xs leading-6 text-[#77817c] sm:px-8">CHP Gauseva Kendra · Sinakhola village, Paleta · Pithoragarh, Uttarakhand</footer>
    </main>
  );
}
