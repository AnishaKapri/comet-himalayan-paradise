"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Filter, ArrowLeft } from "lucide-react";
import { TrekCard } from "@/components/TrekCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { treks, TrekCategory, Difficulty } from "@/data/treks";
import { CTABanner } from "@/components/home/CTABanner";

/* Shared header tokens — keep identical to the Camps page and About CHP page */
const HERO_TITLE_CLASS =
  "text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4";
const HERO_TAG_CLASS =
  "mb-4 inline-block rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white";

const categories: { value: TrekCategory | "all"; label: string }[] = [
  { value: "all", label: "All Treks" },
  { value: "nature", label: "Nature & Discovery" },
  { value: "adventure", label: "Adventure" },
  { value: "cultural", label: "Cultural" },
  { value: "major", label: "Major Expeditions" },
];

const difficulties: { value: Difficulty | "all"; label: string }[] = [
  { value: "all", label: "All Levels" },
  { value: "Easy", label: "Easy" },
  { value: "Moderate", label: "Moderate" },
  { value: "Challenging", label: "Challenging" },
  { value: "Strenuous", label: "Strenuous" },
];

export default function TreksPage() {
  const [category, setCategory] = useState<TrekCategory | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");

  const filtered = treks.filter((t) => {
    const catMatch = category === "all" || t.category === category;
    const diffMatch = difficulty === "all" || t.difficulty === difficulty;
    return catMatch && diffMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] bg-black flex items-center justify-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e789e8ce-790a-4886-9c09-8acc4a666db4-chatgpt-image-sep-3-2026-02-21-06-am.webp')" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Menu name: small, rounded, deep green, white text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={HERO_TAG_CLASS}
          >
            Treks
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={HERO_TITLE_CLASS}
          >
            Walk Beyond the Ordinary. Discover the Himalayas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-lg max-w-xl mx-auto"
          >
            <strong className="font-bold text-orange-300">20+ curated trails</strong> from gentle
            forest walks to epic base camp expeditions — for{" "}
            <strong className="font-bold text-orange-300">every fitness level</strong> and
            adventure spirit.
          </motion.p>
        </div>
      </section>

      {/* Filters — light shaded container */}
      <section className="bg-green-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-slate-500 shrink-0" />
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${category === c.value
                      ? "bg-green-900 text-white"
                      : "bg-white text-slate-600 hover:bg-green-100"
                    }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-5 bg-green-200" />

            {/* Difficulty filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {difficulties.map((d) => (
                <button
                  key={d.value}
                  onClick={() => setDifficulty(d.value)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${difficulty === d.value
                      ? "bg-sky-600 text-white"
                      : "bg-white text-slate-600 hover:bg-green-100"
                    }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <span className="ml-auto text-xs font-semibold text-green-900 shrink-0">
              {filtered.length} trek{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Trek grid */}
      <section className="py-10 lg:py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                No treks match your filters.
              </p>
              <button
                onClick={() => {
                  setCategory("all");
                  setDifficulty("all");
                }}
                className="mt-4 text-green-900 font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              staggerDelay={0.06}
            >
              {filtered.map((trek) => (
                <StaggerItem key={trek.id}>
                  <TrekCard trek={trek} className="h-full" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      <CTABanner />

      {/* Go back button */}
      <div className="bg-white py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30"
        >
          <ArrowLeft className="w-4 h-4" /> Go back to Home
        </Link>
      </div>
    </>
  );
}