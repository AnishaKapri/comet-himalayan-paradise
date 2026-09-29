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

        {/* Light overlay so the white header text stays readable */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Header image text — same font family and size as the About CHP hero */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div
            className="
              w-full
              max-w-[1000px]
              text-center
              text-white
              text-sm
              sm:text-base
              md:text-lg
              font-semibold
              leading-relaxed
              drop-shadow-[0_3px_7px_rgba(0,0,0,0.95)]
            "
          >
            <p>
              <strong>HIMALAYAN PARADISE ENCLAVE-</strong>
            </p>
            <p>
              <em>Second Home above Clouds.</em>
            </p>
            <p>
              <em>Built for Professionals. Blessed by Himalayas</em>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
