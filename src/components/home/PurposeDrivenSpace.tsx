"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const spaces = [
  {
    title: "Comet Services",
    description:
      "Concierge support for travel, stay, and on-ground logistics — handled end-to-end by the Comet team.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Gaushala",
    description:
      "A traditional cattle farm woven into daily life at CHP, reflecting our commitment to rural Himalayan heritage.",
    image:
      "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Isht Dev Sthal",
    description:
      "A sacred space for prayer and reflection, honoring the spiritual traditions of the Himalayan region.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80&auto=format&fit=crop",
  },
];

export function PurposeDrivenSpace() {
  return (
    <section
      id="purpose-driven-space"
      className="py-20 lg:py-28 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Beyond Travel"
          title="Purpose Driven Space"
          subtitle="CHP is more than a destination — it's a living, values-led community rooted in service, heritage, and faith."
        />

        <StaggerContainer
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {spaces.map((space) => (
            <StaggerItem key={space.title}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-xl mb-1.5">
                    {space.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
