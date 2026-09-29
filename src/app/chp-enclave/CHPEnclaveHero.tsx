"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGE_URL =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ecea6144-0af9-4acf-9670-23da3c694548-chp-enclave-no-text-under-900kb.webp";

export function CHPEnclaveHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* =====================================================
          MENU NAME PILL — ABOVE HEADER IMAGE
          Same font family / size / colours as the About CHP hero.
          Top padding clears the fixed navbar (h-16).
      ===================================================== */}
      <div className="w-full flex items-center justify-center bg-white pt-20 pb-5 sm:pt-24 sm:pb-6 md:pb-7">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            rounded-full
            bg-green-900
            px-5
            py-2
            text-white
            text-sm
            sm:text-base
            md:text-lg
            font-semibold
            uppercase
            tracking-[0.28em]
          "
        >
          Co-Ownership Models
        </motion.h1>
      </div>

      {/* =====================================================
          HEADER IMAGE
      ===================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative w-full aspect-[3/1] min-h-[200px] overflow-hidden"
      >
        <Image
          src={HERO_IMAGE_URL}
          alt="CHP Enclave"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/55" />
      <Link
        href="/business-proposals"
        className="absolute left-4 top-20 z-20 inline-flex rounded-full bg-green-900 px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-2xl hover:shadow-green-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:top-24"
      >
        Business Proposals
      </Link>
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6"
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-orange-400/70" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            A New Way to Belong
          </p>
          <span className="h-px w-8 bg-orange-400/70" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-7xl">
          CHP Enclave
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg">
          <strong>HIMALAYAN PARADISE ENCLAVE-</strong>
          <br />
          <em>Second Home above Clouds.</em>
          <br />
          <em>Built for Professionals. Blessed by Himalayas</em>
        </p>
      </motion.div>
    </section>
  );
}
