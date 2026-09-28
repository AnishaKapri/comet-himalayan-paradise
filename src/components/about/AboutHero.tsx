"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/fee397f0-2808-4399-94b8-e2b7cf0f8362-chp-header-12-yoga-holiday-camp-under-500kb.webp";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* =====================================================
          ABOUT CHP TITLE — ABOVE HEADER IMAGE
      ===================================================== */}
      <div className="w-full flex items-center justify-center bg-white py-5 sm:py-6 md:py-7">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            text-[#1f3557]
            text-sm
            sm:text-base
            md:text-lg
            font-semibold
            uppercase
            tracking-[0.28em]
          "
        >
          About CHP
        </motion.h2>
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
        className="relative w-full aspect-[3/1] overflow-hidden"
      >
        {/* Main Header Image */}
        <Image
          src={HEADER_IMAGE}
          alt="CHP Himalayan Paradise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Very subtle overall overlay */}
        <div className="absolute inset-0 bg-black/[0.04]" />

        {/* =====================================================
            CENTER CONTENT
            No About CHP here anymore.
        ===================================================== */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div
            className="
              relative
              w-full
              flex
              justify-center
              mt-[8%]
              sm:mt-[6%]
              md:mt-[4%]
            "
          >
            <div
              className="
                relative
                z-10
                w-full
                max-w-[1000px]
                text-center
                px-4
                sm:px-6
                py-8
                sm:py-10
              "
            >
              {/* =================================================
                  GREEN DECORATIVE LINE
              ================================================= */}
              

              {/* =================================================
                  TAGLINE
              ================================================= */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="
                  mt-3
                  sm:mt-4
                  text-white
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  lg:text-base
                  font-medium
                  tracking-wide
                  drop-shadow-[0_3px_7px_rgba(0,0,0,0.95)]
                "
              >
               
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}