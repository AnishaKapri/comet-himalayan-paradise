"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Coffee, Laptop, Mountain, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { remoteWorkHero } from "@/data/chpEcosystem";

const highlights = [
  { icon: Laptop, title: "Dedicated workspaces", text: "A purposeful setting for focused work amid a slower mountain rhythm." },
  { icon: Mountain, title: "Himalayan surroundings", text: "Step outside to expansive landscapes, fresh air, and room to reset." },
  { icon: Coffee, title: "Work + recreation", text: "Shape your day around work, rest, exploration, and time in nature." },
  { icon: Users, title: "Community moments", text: "Make space for meaningful conversations and shared mountain experiences." },
];

export default function FacilitiesPage() {
  return <main className="bg-stone-50 pt-16">
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-green-950 sm:min-h-[460px]"><Image src={remoteWorkHero} alt="Remote work from the Himalayas at CHP" fill priority unoptimized sizes="100vw" className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" /><div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl"><p className="mb-5 inline-block rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">CHP Remote Work</p><h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Remote Work from the Himalayas</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">Bring your work closer to the mountains and make space for a more grounded way to live, focus, and recharge.</p></motion.div></div></section>
    <section className="py-16 lg:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="A different workday" title="Work differently. Live closer to nature." subtitle="CHP brings together the focused pace of remote work with the restorative character of Himalayan living." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{highlights.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-800"><Icon className="h-5 w-5" /></div><h2 className="text-lg font-bold text-slate-800">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div></div></section>
    <section className="border-y border-green-100 bg-green-950 py-16 lg:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Made for flexible lives</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">A Himalayan base for people who work from anywhere.</h2><p className="mt-5 max-w-2xl leading-relaxed text-white/70">Whether you are building, creating, consulting, or simply seeking a change of pace, CHP offers a setting where work and the outdoors can share the same day.</p></div><ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{["Remote professionals", "Entrepreneurs and startup teams", "Freelancers and creators", "Professionals seeking a Himalayan work environment"].map((item) => <li key={item} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white">{item}</li>)}</ul></div></section>
    <section className="py-16 text-center lg:py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6"><SectionHeader eyebrow="Plan your stay" title="Make the mountains part of your routine." subtitle="Talk to CHP about a Himalayan work-and-stay experience that suits your plans." /><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-400">Contact CHP <ArrowRight className="h-4 w-4" /></Link></div></section>
    <section className="border-t border-stone-200 bg-white py-10 text-center"><Link href="/" className="inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800"><ArrowLeft className="h-4 w-4" />Back to Home</Link></section>
  </main>;
}
