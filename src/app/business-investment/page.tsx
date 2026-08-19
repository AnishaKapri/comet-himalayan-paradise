"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    TrendingUp,
    Building2,
    Leaf,
    PieChart,
    Handshake,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const investmentModes = [
    {
        title: "Plot-Based Investment",
        description:
            "Invest in strategically located plots within the CHP community and benefit from the appreciation of land value as the destination grows.",
        icon: TrendingUp,
        color: "text-amber-400",
        bg: "bg-amber-500/10 border-amber-500/30",
    },
    {
        title: "Cottage-Based Investment",
        description:
            "Own a registered plot, build your dream Himalayan cottage, and generate attractive returns through tourism, homestay operations, or future resale opportunities.",
        icon: Building2,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10 border-emerald-500/30",
    },
    {
        title: "Facility-Based Investment",
        description:
            "Co-own or invest in CHP's shared tourism and community facilities, enabling you to participate in revenue-generating infrastructure without owning individual land.",
        icon: PieChart,
        color: "text-sky-400",
        bg: "bg-sky-500/10 border-sky-500/30",
    },
];

const strategicPoints = [
    "Pristine Himalayan location with year-round tourism demand",
    "Integrated ecosystem for tourism, wellness, business & community living",
    "Strong market demand from students, families, corporates, and pilgrims",
    "Strategic connectivity and growing regional infrastructure",
    "Local community support and sustainable development framework",
    "Diversified revenue streams reducing seasonal risk",
];

const targetMarkets = [
    { label: "Students & Educational Groups" },
    { label: "Families & Leisure Tourists" },
    { label: "Corporates & Retreats" },
    { label: "Pilgrims & Spiritual Seekers" },
    { label: "Wellness Seekers" },
    { label: "Adventure Tourists" },
    { label: "Event Planners" },
    { label: "Remote Workers" },
];

const revenueStreams = [
    "Tourism & Hospitality",
    "Adventure Programs",
    "Wellness & Yoga Retreats",
    "Events & Destination Weddings",
    "Corporate Programs",
    "Educational Partnerships",
    "Guided Experiences & Treks",
    "Organic Farming & Farm-to-Table",
];

const entrepreneurBenefits = [
    "Affordable land and construction costs compared to metro hospitality",
    "Managed maintenance and on-ground operational support",
    "Easy construction with pre-approved design templates",
    "Shared infrastructure: parking, utilities, security, and amenities",
    "Year-round CHP programs that maximize occupancy",
    "Access to CHP's established booking platform and guest base",
];

const models = [
    {
        icon: PieChart,
        title: "Revenue Share",
        sub: "Low-Risk Entry",
        desc: "Contribute capital or property and earn a quarterly percentage of gross revenues with full financial transparency.",
    },
    {
        icon: Handshake,
        title: "Joint Venture (JV)",
        sub: "Co-Ownership",
        desc: "Structured equity partnership with shared governance, board voting rights, and long-term asset appreciation.",
    },
    {
        icon: Building2,
        title: "Franchise Model",
        sub: "Brand-Backed Operations",
        desc: "Operate under the CHP brand with centralized marketing, booking, SOP training, and guest acquisition support.",
    },
];

export default function BusinessInvestmentPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        investmentArea: "Plot-Based Investment",
        capitalRange: "INR 25L – 50L",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 pt-16">

            {/* ── Hero ── */}
            <section className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80&auto=format&fit=crop"
                        alt="Business & Investment CHP"
                        fill priority className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6"
                        >
                            <TrendingUp className="w-3.5 h-3.5" />
                            Business &amp; Investment Partnerships
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                        >
                            Invest in <br />
                            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                                Himalayan Prosperity
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="mt-6 text-lg text-slate-300 leading-relaxed font-light"
                        >
                            Partner with CHP Himalayan Paradise to build profitable eco-resorts, organic agri-brands, high-altitude adventure hubs, and land assets in Kumaon.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a href="#invest-form" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all">
                                Submit Investment Inquiry <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#investment-modes" className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-7 py-3.5 rounded-full border border-slate-700 transition-all">
                                Explore Modes
                            </a>
                        </motion.div>
                    </div>

                    {/* Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60"
                    >
                        {[
                            { v: "20+", l: "Trek & Experience Routes" },
                            { v: "95%+", l: "Guest Satisfaction" },
                            { v: "3.5×", l: "Regional Tourism Growth" },
                            { v: "100%", l: "Turnkey Project Support" },
                        ].map((m) => (
                            <div key={m.l}>
                                <div className="text-3xl font-bold text-amber-400">{m.v}</div>
                                <div className="text-xs text-slate-400 mt-1">{m.l}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Investment Modes + Image ── */}
            <section id="investment-modes" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Investment Opportunities</span>
                        <h2 className="text-3xl font-bold text-white mt-2 mb-4">Three Modes of Investment</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-10">
                            CHP offers three modes of investment opportunities across cottages, homestays, hospitality, wellness, remote work infrastructure, and tourism-driven businesses. Be a part of a fast-growing Himalayan ecosystem built for sustainable growth, recurring income, and long-term value.
                        </p>
                        <div className="space-y-5">
                            {investmentModes.map((mode) => {
                                const Icon = mode.icon;
                                return (
                                    <div key={mode.title} className={`flex gap-4 p-5 rounded-2xl border bg-slate-800/60 ${mode.bg}`}>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${mode.bg}`}>
                                            <Icon className={`w-5 h-5 ${mode.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">{mode.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{mode.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group">
                        <img
                            src="/investment.png"
                            alt="Investment at CHP"
                            className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* ── Strategic Advantages + Image ── */}
            <section className="py-20 lg:py-28 bg-slate-950 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group order-2 lg:order-1">
                            <img
                                src="/Advantages.png"
                                alt="CHP Strategic Advantages"
                                className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Why Invest Here</span>
                            <h2 className="text-3xl font-bold text-white mt-2 mb-4">Strategic Advantages</h2>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                CHP combines the pristine beauty of the Himalayas with a thoughtfully planned, integrated ecosystem for tourism, wellness, business, and community living. Backed by strong market demand, strategic connectivity, and local community support, it offers a distinctive opportunity for sustainable growth and long-term value.
                            </p>
                            <ul className="space-y-3">
                                {strategicPoints.map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Target Market Opportunities + Image ── */}
            <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Market Potential</span>
                        <h2 className="text-3xl font-bold text-white mt-2 mb-4">Target Market Opportunities</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                            CHP caters to a wide range of customer segments, including students, families, corporates, pilgrims, wellness seekers, tourists, and event planners. Its integrated Himalayan ecosystem creates year-round opportunities across education, tourism, hospitality, wellness, adventure, and destination celebrations.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {targetMarkets.map((m) => (
                                <div key={m.label} className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-300">
                                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                                    {m.label}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group">
                        <img
                            src="/target market opportunities.png"
                            alt="Target Market Opportunities"
                            className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* ── Revenue Streams + Image ── */}
            <section className="py-20 lg:py-28 bg-slate-950 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group order-2 lg:order-1">
                            <img
                                src="/revenue.png"
                                alt="Revenue Streams"
                                className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Financial Model</span>
                            <h2 className="text-3xl font-bold text-white mt-2 mb-4">Revenue Streams</h2>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                CHP is designed with multiple year-round revenue streams, creating a diversified and sustainable business model. From tourism, hospitality, adventure, wellness, and events to corporate programs, educational partnerships, and guided experiences, the integrated ecosystem generates recurring income from a wide range of customer segments.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {revenueStreams.map((r) => (
                                    <div key={r} className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                        {r}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Hospitality Entrepreneurs + Image ── */}
            <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Entrepreneur Benefits</span>
                        <h2 className="text-3xl font-bold text-white mt-2 mb-4">CHP Advantage for Hospitality Entrepreneurs</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                            CHP offers a smarter way to own in the Himalayas — affordable costs, managed maintenance, easy construction, shared infrastructure, and year-round programs that maximize occupancy and investment potential.
                        </p>
                        <ul className="space-y-3">
                            {entrepreneurBenefits.map((b) => (
                                <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group">
                        <img
                            src="/entrprbenefit.png"
                            alt="CHP Hospitality Entrepreneur Benefits"
                            className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* ── Collaboration Models ── */}
            <section className="py-20 bg-slate-950 border-y border-slate-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader eyebrow="Structure" title="How We Work Together" subtitle="Choose the collaboration model that fits your capital, involvement level, and return expectations." light />
                    <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {models.map((m) => {
                            const Icon = m.icon;
                            return (
                                <StaggerItem key={m.title}>
                                    <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all h-full">
                                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">{m.sub}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── Inquiry Form ── */}
            <section id="invest-form" className="py-20 bg-slate-950 border-t border-slate-800 scroll-mt-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Get Started</span>
                        <h2 className="text-3xl font-bold text-white mt-2">Submit Your Investment Inquiry</h2>
                        <p className="text-slate-400 text-sm mt-2">Our business development team will respond within 24 hours.</p>
                    </div>

                    {formSubmitted ? (
                        <div className="p-10 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                            <p className="text-slate-300 text-sm mt-2">Our team will review and reach out with a customised proposal.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Full Name *</label>
                                    <input type="text" required placeholder="e.g. Vikram Sharma" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Email Address *</label>
                                    <input type="email" required placeholder="email@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Phone / WhatsApp *</label>
                                    <input type="tel" required placeholder="+91 99499 94989" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Investment Mode</label>
                                    <select value={formData.investmentArea} onChange={(e) => setFormData({ ...formData, investmentArea: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500">
                                        <option>Plot-Based Investment</option>
                                        <option>Cottage-Based Investment</option>
                                        <option>Facility-Based Investment</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Capital / Asset Range</label>
                                <select value={formData.capitalRange} onChange={(e) => setFormData({ ...formData, capitalRange: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500">
                                    <option>INR 10L – 25L</option>
                                    <option>INR 25L – 50L</option>
                                    <option>INR 50L – 1Cr</option>
                                    <option>INR 1Cr+</option>
                                    <option>Land / Property Contribution</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Background &amp; Interest</label>
                                <textarea rows={3} placeholder="Brief background, property location, or specific interest..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" /> Submit Investment Inquiry
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
}
