"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";
import { experiences } from "@/data/experiences";

const categories = [
  { value: "all", label: "All Experiences" },
  { value: "adventure", label: "Adventure" },
  { value: "wellness", label: "Wellness" },
  { value: "nature", label: "Nature" },
  { value: "culture", label: "Culture" },
];

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  /*
   * Normalize the category values so filtering still works if
   * the data uses "Wellness", "WELLNESS", etc.
   */
  const filtered =
    activeCategory === "all"
      ? experiences
      : experiences.filter(
          (experience) =>
            String(experience.category).trim().toLowerCase() ===
            activeCategory.toLowerCase()
        );

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden bg-black">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ab74ec0a-4d09-40a2-b3d5-e249041fed33-chatgpt-image-sep-3-2026-02-25-33-am.webp"
          alt="Himalayan Experiences"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-14 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-green-700 bg-green-900 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white"
          >
            CHP Himalayan Paradise
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl text-white sm:text-4xl"
          >
            Himalayan Experiences
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/60"
          >
            STAY • EXPLORE • ADVENTURE • WELLNESS • FOOD • CULTURE • LEARN •
            WORK
          </motion.p>
        </div>
      </section>

      {/* =========================
          CATEGORY FILTER BAR
      ========================== */}
      <section className="border-b border-slate-100 bg-white py-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-green-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}

            <span className="ml-auto shrink-0 text-xs text-slate-400">
              {filtered.length}{" "}
              {filtered.length === 1 ? "experience" : "experiences"}
            </span>
          </div>
        </div>
      </section>

      {/* =========================
          EXPERIENCES GRID
      ========================== */}
      <section className="min-h-[500px] bg-stone-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-lg text-slate-400">
                No experiences match your filter.
              </p>

              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className="mt-4 text-sm font-semibold text-green-900 hover:underline"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                  },
                },
              }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((experience) => (
                <motion.article
                  key={experience.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5 }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/10"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Category */}
                    <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold capitalize text-white backdrop-blur-sm">
                      {experience.category}
                    </span>

                    {/* Duration */}
                    <span className="absolute right-3 top-3 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-white">
                      {experience.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-2 text-lg font-bold text-slate-800">
                      {experience.title}
                    </h2>

                    <p className="mb-5 flex-1 text-justify text-sm leading-relaxed text-slate-500">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mb-5 space-y-1.5">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Enquire */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-900 transition-colors hover:text-green-700"
                    >
                      Enquire Now
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner showHomeButton />
    </>
  );
}