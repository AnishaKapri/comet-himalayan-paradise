"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Flower2,
    Sun,
    Moon,
    Heart,
    Wind,
    Leaf,
    Flame,
    CheckCircle2,
    ArrowRight,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

const pillars = [
    {
        icon: Sun,
        title: "Daily Yoga & Pranayama",
        description:
            "Guided sunrise yoga on open mountain decks looking towards Panchachuli, followed by guided pranayama and breathwork with trained Himalayan instructors.",
        bg: "bg-amber-50",
        border: "border-amber-200",
    },
    {
        icon: Moon,
        title: "Meditation & Mindfulness",
        description:
            "Structured morning and evening meditation sessions in our dedicated silence hall, incorporating Vipassana, nature-sound therapy, and guided visualisation.",
        bg: "bg-sky-50",
        border: "border-sky-200",
    },
    {
        icon: Flame,
        title: "Isht Dev Sthal & Sacred Fire",
        description:
            <>
                Our traditional Isht Dev Sthal hosts daily{" "}
                <span className="font-semibold text-orange-700">
                    Agni Puja, Havans, and Kumaoni spiritual ceremonies
                </span>{" "}
                — rooted in centuries of mountain devotion.
            </>,
        bg: "bg-orange-50",
        border: "border-orange-200",
    },
    {
        icon: Leaf,
        title: "Gaushala & Ayurvedic Farm",
        description:
            "Interact with gentle native Pahadi cattle, participate in Gobar Puja, and collect medicinal herbs from our living Ayurvedic garden.",
        bg: "bg-green-50",
        border: "border-green-200",
    },
    {
        icon: Wind,
        title: "Forest Bathing & Nature Therapy",
        description:
            "Guided Shinrin-Yoku (forest bathing) trails through pine and oak groves. Let the Himalayan birdsong, clean air, and natural soundscapes restore your nervous system.",
        bg: "bg-teal-50",
        border: "border-teal-200",
    },
    {
        icon: Heart,
        title: "Satsang & Community Evenings",
        description:
            <>
                Campfire satsangs, kirtan evenings, storytelling circles, and{" "}
                <span className="font-semibold text-rose-700">
                    Kumaoni folk music
                </span>{" "}
                nights that foster genuine human connection under the stars.
            </>,
        bg: "bg-rose-50",
        border: "border-rose-200",
    },
];

const retreatPrograms = [
    {
        title: "Weekend Detox & Reset",
        duration: "2 Nights / 3 Days",
        desc: "Digital detox, daily yoga, guided meditation, Sattvic meals, and a Himalayan forest walk to reset your mind and body.",
        includes: [
            "Morning & evening yoga",
            "2 meditation sessions/day",
            "Sattvic organic meals",
            "Forest therapy walk",
            "Campfire satsang",
        ],
        image:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
    },
    {
        title: "7-Day Inner Renewal",
        duration: "7 Nights / 8 Days",
        desc: "An immersive week of Himalayan healing — yoga, pranayama, Ayurveda, Havan, silent forest walks, and personalised one-on-one guidance.",
        includes: [
            "Daily yoga & pranayama",
            "Havan & Agni Puja ceremony",
            "Ayurvedic consultation",
            "Silent nature trail daily",
            "Gaushala & farm immersion",
            "Group satsang evenings",
        ],
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/1366bf84-6e3a-47e6-98b5-c7a7ab0f8964-7-day-inner-renewal.webp",
        featured: true,
    },
    {
        title: "Purpose & Clarity Retreat",
        duration: "14 Nights / 15 Days",
        desc: "A deep-dive program for individuals seeking direction, clarity, and a renewed sense of purpose — combining silence, reflection, and Himalayan wisdom.",
        includes: [
            "Personalised guidance sessions",
            "Purpose journaling workshop",
            "Sunrise peak treks",
            "Full Ayurvedic wellness plan",
            "Group & private meditation",
            "Cultural immersion visits",
        ],
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/a9e97603-2fcd-40db-b484-2dd36329a1c4-purpose-clarity-retreat-under-500kb.webp",
    },
];

const traditions = [
    {
        label: "Isht Dev Sthal",
        desc: "CHP's sacred deity space with daily Agni Puja",
        bg: "bg-violet-50",
        border: "border-violet-200",
    },
    {
        label: "Gaushala",
        desc: "Native Pahadi cattle sanctuary integral to CHP life",
        bg: "bg-lime-50",
        border: "border-lime-200",
    },
    {
        label: "Kumaoni Havan",
        desc: "Traditional fire ceremonies with Vedic chanting",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
    },
    {
        label: "Himalayan Herb Garden",
        desc: "Living Ayurvedic garden of 40+ medicinal plants",
        bg: "bg-pink-50",
        border: "border-pink-200",
    },
];

export default function HealthRetreatProgramPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        program: "7-Day Inner Renewal",
        date: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-amber-950/5 text-slate-800 pt-16 text-justify">

            {/* ── Hero ── */}
            <section className="relative h-[80vh] min-h-[560px] overflow-hidden">

                <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d24cfc6e-0194-484b-b5ad-ddff2560a032-wrt.webp"
                    alt="Health Retreat Program at CHP"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Lighter overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/50" />

                <div className="absolute inset-0 flex flex-col items-center px-4 sm:px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-20 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900 border border-green-700 text-white text-xs font-semibold uppercase tracking-wider"
                    >
                        <Flower2 className="w-3.5 h-3.5" />
                        Spiritual &amp; Wellness Sanctuary
                    </motion.div>

                    {/* Hero text moved higher */}
                    <div className="absolute top-[18%] sm:top-[17%] md:top-[16%] left-1/2 -translate-x-1/2 z-10 w-full px-4 flex flex-col items-center justify-center text-center">

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-tight"
                        >
                            Health Retreat Program
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl leading-relaxed text-center"
                        >
                            A sacred Himalayan environment for yoga, meditation,
                            Ayurveda, spiritual ceremony, and deep inner renewal —
                            far from the noise of modern life.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 flex flex-wrap gap-4 justify-center"
                        >
                            <a
                                href="#retreats"
                                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full flex items-center gap-2 shadow-lg transition-all"
                            >
                                View Retreat Programs
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <a
                                href="#enquire"
                                className="bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all"
                            >
                                Enquire Now
                            </a>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── Philosophy ── */}
            <section className="py-16 bg-gradient-to-r from-amber-950 to-stone-900 text-white">

                <div className="max-w-4xl mx-auto px-2 text-center">

                    <p className="text-amber-300 text-2x2 font-semibold uppercase tracking-widest mb-4">
                        Our Philosophy
                    </p>

                    <blockquote className="text-1xl sm:text-1xl font-light leading-relaxed text-white/90 italic text-justify">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        "The Himalayas do not merely house peaks — they house silence,
                        wisdom, and the ancient breath of the earth. CHP is designed
                        to help you listen."
                    </blockquote>

                </div>
            </section>

            {/* ── Wellness Pillars ── */}
            <section className="py-20 lg:py-28 bg-stone-50">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        eyebrow="Core Practices"
                        title="Pillars of the Health Retreat Program"
                        subtitle="Six integrated practices woven into daily life at CHP — each designed to restore balance, awareness, and inner clarity."
                    />

                    <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {pillars.map((p) => {
                            const Icon = p.icon;

                            return (
                                <StaggerItem key={p.title}>

                                    <div
                                        className={`p-7 rounded-2xl ${p.bg} border ${p.border} hover:shadow-lg hover:shadow-amber-900/5 transition-all h-full`}
                                    >

                                        <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                                            <Icon className="w-5 h-5" />
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-800 mb-2">
                                            {p.title}
                                        </h3>

                                        <p className="text-slate-500 text-sm leading-relaxed text-justify">
                                            {p.description}
                                        </p>

                                    </div>

                                </StaggerItem>
                            );
                        })}

                    </StaggerContainer>
                </div>
            </section>

            {/* ── Sacred Traditions ── */}
            <section className="py-16 bg-amber-950/10 border-y border-amber-200/40">

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        {traditions.map((t) => (
                            <div
                                key={t.label}
                                className={`text-center p-5 rounded-2xl ${t.bg} border ${t.border}`}
                            >

                                <div className="w-10 h-10 rounded-full bg-amber-100 mx-auto flex items-center justify-center text-amber-700 mb-3">
                                    <Flame className="w-5 h-5" />
                                </div>

                                <h4 className="font-bold text-slate-800 text-sm mb-1">
                                    {t.label}
                                </h4>

                                <p className="text-slate-500 text-xs leading-snug">
                                    {t.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* ── Retreat Programs ── */}
            <section
                id="retreats"
                className="py-20 lg:py-28 bg-white scroll-mt-20"
            >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        eyebrow="Retreat Programs"
                        title="Curated Himalayan Retreat Journeys"
                        subtitle="Choose a program suited to your time, intention, and depth of practice."
                    />

                    <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {retreatPrograms.map((r) => (
                            <StaggerItem key={r.title}>

                                <div
                                    className={`relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1 ${
                                        r.featured
                                            ? "border-amber-500 shadow-lg shadow-amber-900/10"
                                            : "border-slate-200"
                                    }`}
                                >

                                    {r.featured && (
                                        <div className="absolute top-4 right-4 z-10 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="relative h-52 overflow-hidden">

                                        <Image
                                            src={r.image}
                                            alt={r.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        <div className="absolute bottom-4 left-4 text-amber-300 font-semibold text-xs">
                                            {r.duration}
                                        </div>

                                    </div>

                                    <div className="p-6 flex-1 flex flex-col justify-between bg-white">

                                        <div>

                                            <h3 className="text-xl font-bold text-slate-800 mb-2">
                                                {r.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm leading-relaxed mb-4 text-justify">
                                                {r.desc}
                                            </p>

                                            <ul className="space-y-2 mb-5">

                                                {r.includes.map((inc) => (
                                                    <li
                                                        key={inc}
                                                        className="flex items-center gap-2 text-xs text-slate-600"
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                                        {inc}
                                                    </li>
                                                ))}

                                            </ul>

                                        </div>

                                        <a
                                            href="#enquire"
                                            className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                                                r.featured
                                                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                                                    : "bg-stone-100 hover:bg-stone-200 text-slate-800"
                                            }`}
                                        >
                                            Enquire for {r.title}
                                        </a>

                                    </div>

                                </div>

                            </StaggerItem>
                        ))}

                    </StaggerContainer>
                </div>
            </section>

            {/* ── Enquiry Form ── */}
            <section
                id="enquire"
                className="py-20 bg-stone-50 scroll-mt-20"
            >

                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-10">

                        <span className="text-amber-700 text-xs font-semibold uppercase tracking-wider">
                            Begin Your Journey
                        </span>

                        <h2 className="text-3xl font-bold text-slate-800 mt-2">
                            Enquire About a Retreat
                        </h2>

                        <p className="text-slate-500 text-sm mt-2 text-justify">
                            Our wellness team will reach out within 24 hours with
                            availability and programme details.
                        </p>

                    </div>

                    {formSubmitted ? (

                        <div className="p-10 rounded-2xl bg-amber-50 border border-amber-200 text-center">

                            <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto mb-3" />

                            <h3 className="text-xl font-bold text-slate-800">
                                Enquiry Received!
                            </h3>

                            <p className="text-slate-500 text-sm mt-2 text-justify">
                                Our team will get in touch to guide you toward the
                                right program.
                            </p>

                        </div>

                    ) : (

                        <form
                            onSubmit={handleSubmit}
                            className="bg-white border border-amber-100 rounded-2xl p-8 shadow-sm space-y-5"
                        >

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                <div>

                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                        Your Name *
                                    </label>

                                    <input
                                        type="text"
                                        required
                                        placeholder="Full name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500"
                                    />

                                </div>

                                <div>

                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                        Email *
                                    </label>

                                    <input
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500"
                                    />

                                </div>

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                <div>

                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                        Phone *
                                    </label>

                                    <input
                                        type="tel"
                                        required
                                        placeholder="+91 99499 94989"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500"
                                    />

                                </div>

                                <div>

                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                        Retreat Program
                                    </label>

                                    <select
                                        value={formData.program}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                program: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500"
                                    >
                                        <option>Weekend Detox & Reset</option>
                                        <option>7-Day Inner Renewal</option>
                                        <option>Purpose & Clarity Retreat</option>
                                        <option>Custom Program</option>
                                    </select>

                                </div>

                            </div>

                            <div>

                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                    Preferred Start Date
                                </label>

                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            date: e.target.value,
                                        })
                                    }
                                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500"
                                />

                            </div>

                            <div>

                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                    Your Intention or Questions
                                </label>

                                <textarea
                                    rows={3}
                                    placeholder="What brings you to this journey? Any specific wellness goals?"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500"
                                />

                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Submit Retreat Enquiry
                            </button>

                        </form>
                    )}

                </div>
            </section>

            <CTABanner showHomeButton />

        </main>
    );
}