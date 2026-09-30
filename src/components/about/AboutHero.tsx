"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/fee397f0-2808-4399-94b8-e2b7cf0f8362-chp-header-12-yoga-holiday-camp-under-500kb.webp";

export function AboutHero() {
  return (
    // pt-16 clears the fixed navbar (h-16) so the image starts right below it
    <section className="relative w-full overflow-hidden bg-white pt-16">
      {/* =====================================================
          HEADER IMAGE (with the About CHP pill inside it)
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
            MENU NAME PILL — INSIDE THE IMAGE, TOP CENTRE
        ===================================================== */}
        <div className="absolute inset-x-0 top-3 sm:top-4 md:top-6 flex justify-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              rounded-full
              bg-green-900
              px-3
              py-1
              sm:px-4
              sm:py-1.5
              text-white
              text-[10px]
              sm:text-xs
              md:text-sm
              font-semibold
              uppercase
              tracking-[0.24em]
              shadow-md
            "
          >
            About CHP
          </motion.h2>
        </div>
      </motion.div>
    </section>
  );
}
