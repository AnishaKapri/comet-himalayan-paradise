"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const allFacilities = [
  { title: "Himalayan Paradise Enclave", image: "/images/facilities/chp-enclave.png" },
  { title: "Himalayan Mind Space", image: "/images/facilities/mind-space.png" },
  { title: "Corporate Guest House", image: "/images/facilities/corp-guest-house.png" },
  { title: "HOA/AOA Guest House", image: "/images/facilities/hoa-aoa-guest-house.png" },
  { title: "CHP Food Court", image: "/images/facilities/food-court.png" },
  { title: "Holiday Resort", image: "/images/facilities/holiday-resort.png" },
  { title: "Yoga Camp", image: "/images/facilities/yoga-camp.png" },
  { title: "Cosmic View Point", image: "/images/facilities/cosmic-vp.png" },
  { title: "Pyramid Living Space", image: "/images/facilities/pyramid.png" },
  { title: "STEM Lab", image: "/images/facilities/stem-lab.png" },
  { title: "Himalayan Bonsai World", image: "/images/facilities/bonsai-world.png" },
  { title: "Himalayan Rare Gems", image: "/images/facilities/rare-gems.png" },
  { title: "Himalayan Floral Paradise", image: "/images/facilities/floral-paradise.png" },
  { title: "Himalayan Fruit Orchard", image: "/images/facilities/fruit-orchard.png" },
  { title: "Floral Escape Maze", image: "/images/facilities/floral-escape-maze.png" },
  { title: "CHP Friends Enclave", image: "/images/facilities/friends-enclave.png" },
  { title: "Creative Mind Studio", image: "/images/facilities/creative-mind-studio.png" },
  { title: "Mystic Cave Retreat", image: "/images/facilities/cave-retreat.png" }, 
  { title: "Destination Wedding", image: "/images/facilities/destination-wedding.png" },
  { title: "Sky Nest Retreat", image: "/images/facilities/treehouse.png" },
  { title: "CHP Sports Arena", image: "/images/facilities/sports.png" },
  { title: "CHP Adventure Club", image: "/images/facilities/adventure-club.png" },
  { title: "Cliff Edge Restaurant", image: "/images/facilities/cliff-edge-restaurant.png" },
  { title: "CHP River Camping", image: "/images/facilities/rivercamp.png" },
  { title: "Himalayan Vineyard", image: "/images/facilities/vineyard.png" },
  { title: "Uttarakhand Heritage Retreat", image: "/images/facilities/ukheritage.png" },
  { title: "CHP Gravity Slide", image: "/images/facilities/gravityslide.png" },
  { title: "CHP Himalayan Film Studio", image: "/images/facilities/filmstudio.png" },
];

const INITIAL_COUNT = 8;

export function FacilitiesPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleFacilities = showAll ? allFacilities : allFacilities.slice(0, INITIAL_COUNT);

  return (
    <section className="py-20 lg:py-28 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700 mb-2">
            On-Site
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">
            All CHP Facilities
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl mx-auto">
            20+ tourism and community facilities available for co-ownership
            through our partnership-based profit-sharing model.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleFacilities.map((facility) => (
          <article
  key={facility.title}
  className="relative overflow-hidden rounded-2xl bg-stone-950 h-64 sm:h-72 shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
>
  <Image
    src={facility.image}
    alt={facility.title}
    fill
    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
    className="object-contain transition-transform duration-700 hover:scale-110"
  />
</article>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border border-green-900/20 text-green-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-900/5 transition-colors"
            >
              Show all {allFacilities.length} Facilities
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}