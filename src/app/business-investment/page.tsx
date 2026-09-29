"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  PieChart,
  Target,
  Award,
  Briefcase,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Page-level settings
   ──────────────────────────────────────────────────────────────── */

// Menu name shown in the header pill (checklist #1).
const MENU_NAME = "CHP Investment Program";

// Update these two values to match the actual source page (checklist #9).
const SOURCE_PAGE_NAME = "CHP Investment Program";
const SOURCE_PAGE_HREF = "/chp-investment";

// Shared header title style – same family & size as the About CHP page (checklist #2).
const HEADER_TITLE_BASE = "font-sans text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight";

/**
 * Key-word highlighter (bold + contrasting colour) – checklist #7.
 * Short phrases stay together on one line (inline-block + nowrap) so justified
 * text can never stretch the gaps between highlighted words.
 */
function Key({ children }: { children: ReactNode }) {
  const isShort = typeof children === "string" && children.length <= 30;
  return (
    <strong
      className={`font-bold text-orange-700 ${
        isShort ? "inline-block whitespace-nowrap text-left" : ""
      }`}
    >
      {children}
    </strong>
  );
}

/* ────────────────────────────────────────────────────────────────
   Content
   ──────────────────────────────────────────────────────────────── */

interface InvestmentMode {
  title: string;
  description: ReactNode;
  highlight: string;
  bullets?: ReactNode[];
}

const investmentModes: InvestmentMode[] = [
  {
    title: "Plot-Based Investment",
    description: (
      <>
        CHP offers a range of investment plans <Key>starting from ₹10 lakh</Key>, with attractive{" "}
        <Key>plot discounts of 30% to 75%</Key>. Higher investments unlock greater discounts, along
        with privileged access to select CHP experiences.
      </>
    ),
    highlight: "Land Appreciation & Value Growth",
  },
  {
    title: "Facility-Based Investment",
    description: (
      <>
        Invest in a CHP <Key>co-owned facility</Key> and enjoy multiple benefits:
      </>
    ),
    bullets: [
      <>
        <Key>30% discount</Key> on space
      </>,
      <>
        <Key>1 plot as a gift</Key> for a personal cottage within the CHP community
      </>,
      <>
        Privileged access to <Key>all CHP amenities</Key>
      </>,
      <>
        <Key>100% profit share</Key> until the total invested amount is recovered
      </>,
      <>
        <Key>80% profit share</Key> thereafter
      </>,
    ],
    highlight: "Shared Infrastructure Revenue",
  },
];

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function BusinessInvestmentPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentType: "Plot-Based Investment",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    // lang + hyphens keep justified paragraphs evenly spaced (no wide word gaps)
    <main
      lang="en"
      className="min-h-screen bg-stone-50 text-slate-800 pt-20 [hyphens:auto]"
    >
      {/* ── FULL-WIDTH HEADER IMAGE ── */}
      <div className="w-full h-[340px] sm:h-[400px] lg:h-[600px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0c29135f-8f3f-408c-8163-a5533f27db3a-investment-options.webp"
          alt="CHP Business and Investment"
          width={1920}
          height={600}
          priority
          className="w-full h-full object-cover object-center border-0 outline-none"
        />
      </div>

      {/* ── 1. Hero & Business and Investment Section ── */}
      <section className="relative py-10 lg:py-12 overflow-hidden bg-gradient-to-b from-amber-50 via-stone-50 to-stone-50 border-b border-stone-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* #1 – menu name in a small, rounded, deep-green pill with white text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-900 text-white text-xs font-semibold tracking-wide mb-4"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>{MENU_NAME}</span>
              </motion.div>

              {/* #2 – shared header title font family & size */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${HEADER_TITLE_BASE} text-slate-900 mb-3`}
              >
                Business and <br />
                <span className="bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Investment
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-sm sm:text-base font-semibold text-emerald-700 tracking-wide mb-4"
              >
                Build • Invest • Grow • Prosper
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-6 text-justify"
              >
                CHP offers <Key>two modes of investment</Key> opportunities across{" "}
                <Key>cottages, homestays, hospitality, wellness</Key>, remote work infrastructure, and
                tourism-driven businesses. Be a part of a <Key>fast-growing Himalayan ecosystem</Key>{" "}
                built for <Key>sustainable growth, recurring income</Key>, and{" "}
                <Key>long-term value</Key>.
              </motion.p>

              {/* Two Modes Cards (light shaded containers) */}
              <div className="space-y-4 mb-6">
                {investmentModes.map((mode, i) => (
                  <motion.div
                    key={mode.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="p-5 rounded-2xl bg-amber-100/60 border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        {mode.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        {mode.highlight}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed text-justify">
                      {mode.description}
                    </p>
                    {mode.bullets && (
                      <ul className="mt-3 space-y-1.5">
                        {mode.bullets.map((b, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                            <span className="text-justify">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#inquiry"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center gap-2"
                >
                  <span>Explore Investment Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Right Image – no border (#5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5 relative w-full h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden group"
            >
              <img
                src="/investment.png"
                alt="Investment Opportunities in CHP"
                className="w-full h-full object-cover border-0 outline-none transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute(
                    "src",
                    "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6795ec9f-92e1-4c10-9e4f-afcc051f4d03-investment.webp"
                  );
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Strategic Advantages Section (light amber shade) ── */}
      <section className="py-10 lg:py-12 bg-amber-50/60 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Competitive Edge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Strategic <br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify">
              CHP combines the <Key>pristine beauty of the Himalayas</Key> with a{" "}
              <Key>thoughtfully planned, integrated ecosystem</Key> for tourism, wellness, business,
              and community living. Backed by <Key>strong market demand</Key>,{" "}
              <Key>strategic connectivity</Key>, and <Key>local community support</Key>, it offers a
              distinctive opportunity for <Key>sustainable growth and long-term value</Key>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Pristine Himalayan Location",
                "Strong Market Demand",
                "Strategic Connectivity",
                "Local Community Support",
                "Thoughtfully Planned Ecosystem",
                "Sustainable Long-Term Growth",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-slate-700 p-3 rounded-xl bg-amber-100/70 border border-amber-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Target Market Opportunities Section (light emerald shade) ── */}
      <section className="py-10 lg:py-12 bg-emerald-50/60 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>Market Growth</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Target Market <br />
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-500 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify">
              CHP caters to a wide range of customer segments, including{" "}
              <Key>students, families, corporates, pilgrims, wellness seekers, tourists</Key>, and
              event planners. Its integrated Himalayan ecosystem creates{" "}
              <Key>year-round opportunities</Key> across education, tourism, hospitality, wellness,
              adventure, and destination celebrations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                "Students & Youth",
                "Families & Couples",
                "Corporates & Offsites",
                "Pilgrims & Devotees",
                "Wellness Seekers",
                "Event Planners",
              ].map((segment) => (
                <div
                  key={segment}
                  className="p-3.5 rounded-xl bg-emerald-100/70 border border-emerald-200 text-center text-xs font-semibold text-emerald-800"
                >
                  {segment}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Revenue Streams Section (light teal shade) ── */}
      <section className="py-10 lg:py-12 bg-teal-50/60 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <PieChart className="w-3.5 h-3.5" />
              <span>Financial Sustainability</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Revenue <br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 bg-clip-text text-transparent">
                Streams
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify">
              CHP is designed with <Key>multiple year-round revenue streams</Key>, creating a{" "}
              <Key>diversified and sustainable business model</Key>. From tourism, hospitality,
              adventure, wellness, and events to corporate programs, educational partnerships, and
              guided experiences, the integrated ecosystem generates <Key>recurring income</Key> from
              a wide range of customer segments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Tourism & Stays",
                "Hospitality & Dining",
                "Adventure & Treks",
                "Wellness & Retreats",
                "Corporate Programs",
                "Events & Celebrations",
              ].map((stream) => (
                <div
                  key={stream}
                  className="flex items-center gap-2.5 text-sm text-slate-700 p-3 rounded-xl bg-teal-100/70 border border-teal-200"
                >
                  <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{stream}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CHP Advantage for Hospitality Entrepreneurs (light blue shade) ── */}
      <section className="py-10 lg:py-12 bg-sky-50/60 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Entrepreneur Benefits</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              CHP Advantage for <br />
              <span className="bg-gradient-to-r from-amber-500 via-emerald-500 to-amber-400 bg-clip-text text-transparent">
                Hospitality Entrepreneurs
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify">
              CHP offers a <Key>smarter way to own in the Himalayas</Key>—offering{" "}
              <Key>affordable costs, managed maintenance, easy construction, shared infrastructure</Key>,
              and year-round programs that maximize <Key>occupancy and investment potential</Key>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Affordable Entry & Setup Costs",
                "Hassle-Free Managed Maintenance",
                "Easy & Streamlined Construction",
                "Shared Community Infrastructure",
                "Year-Round Programmed Occupancy",
                "Maximized Return on Investment",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2.5 text-sm text-slate-700 p-3 rounded-xl bg-sky-100/70 border border-sky-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Inquiry / Application Form Section ── */}
      <section
        id="inquiry"
        className="py-10 lg:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-stone-50"
      >
        <div className="text-center mb-8">
          <span className="text-amber-600 text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Inquire About Business & Investment
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-xl mx-auto text-justify">
            Connect with our strategy and investment team to discuss <Key>plot options</Key> and{" "}
            <Key>facility co-ownership</Key>.
          </p>
        </div>

        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
            <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto text-justify">
              Thank you for reaching out. Our <Key>Investment Relations team</Key> will contact you
              shortly to provide detailed documentation.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-6 text-xs text-amber-700 hover:underline font-semibold"
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-stone-100 border border-stone-200 shadow-md space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99499 94989"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Investment Mode Interest
                </label>
                <select
                  value={formData.investmentType}
                  onChange={(e) => setFormData({ ...formData, investmentType: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                >
                  <option value="Plot-Based Investment">Plot-Based Investment</option>
                  <option value="Facility-Based Investment">Facility-Based Investment</option>
                  <option value="Hospitality Venture">Hospitality Venture</option>
                  <option value="Other Business Venture">Other Business Venture</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                Message / Specific Questions
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your investment scope, land preferences, or specific questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 text-base"
            >
              <Send className="w-5 h-5" />
              <span>Submit Investment Inquiry</span>
            </button>
          </form>
        )}
      </section>

      {/* ── #9 Go back to source page ── */}
      <section className="pb-10 pt-2 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link
            href={SOURCE_PAGE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-6 py-3 text-sm font-semibold text-green-900 hover:bg-green-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back to {SOURCE_PAGE_NAME}
          </Link>
        </div>
      </section>
    </main>
  );
}