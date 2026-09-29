import type { Metadata } from "next";
import Image from "next/image";
import { Compass } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";
import { AboutHero } from "@/components/about/AboutHero";
import type { ReactNode } from "react";
import Link from "next/link";

// Same frame for every content image on this page (4:3, same max width).
// The full-width timeline banner and the header image are intentionally excluded.
const IMAGE_FRAME_CLASS = "aspect-[4/3] w-full max-w-md object-contain";

// Key words/phrases: bold + contrasting colour. Change the colour here in one place.
function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-green-800">{children}</strong>;
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind CHP Himalayan Paradise — a decade of authentic Himalayan travel experiences, responsible tourism, and deep mountain expertise in Kumaon.",
  alternates: {
    canonical: "https://comet-himalayan-paradise.vercel.app/about",
  },
  openGraph: {
    title: "About CHP Himalayan Paradise",
    description:
      "A decade of authentic Himalayan travel — our story, mission, and commitment to responsible mountain tourism.",
    url: "https://comet-himalayan-paradise.vercel.app/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "CHP Himalayan Paradise Story",
      },
    ],
  },
};

const timeline = [
  {
    year: "2014–19",
    title: "The Beginning",
    description:
      <>We began our journey with a <Highlight>single traditional Himalayan home</Highlight>, welcoming guests who wished to experience the simplicity, warmth, and authenticity of village life.</>,
  },
  {
    year: "2020",
    title: "First Trail Programs",
    description:
      <>We launched our first <Highlight>guided bird watching and Himalayan crop discovery walk</Highlight>.</>,
  },
  {
    year: "2021",
    title: "Wildlife Safari Programs",
    description:
      <>We launched <Highlight>dedicated wildlife safari programs</Highlight>, broadening our offering to serve wildlife photography enthusiasts.</>,
  },
  {
    year: "2022",
    title: "Birth of CHP Concept",
    description:
      <>The idea of the <Highlight>CHP Community</Highlight> began with a simple yet inspiring vision—to create a small cluster of <Highlight>just three cottages</Highlight> in a pristine, secluded Himalayan location offering uninterrupted views of the majestic mountain ranges.</>,
  },
  {
    year: "2023",
    title: "Expansion of CHP Community",
    description:
      <>Driven by the increasing aspiration for <Highlight>peaceful second homes</Highlight> amidst nature, the CHP Community expanded into a vibrant neighborhood of <Highlight>35–40 cottages</Highlight>, creating an ideal destination for families, retirees, and remote professionals seeking a Himalayan lifestyle.</>,
  },
  {
    year: "2024–25",
    title: "Transformation of CHP into CHP Ecosystem",
    description:
      <>The evolution of CHP reached a new milestone with the creation of the <Highlight>CHP Ecosystem</Highlight>—an integrated network of <Highlight>25+ travel, hospitality, wellness, and recreational offerings</Highlight>. This holistic approach makes CHP a complete destination for unforgettable Himalayan experiences, all in one place.</>,
  },
  {
    year: "2025",
    title: "First Trek Programs",
    description:
      <>We launched our <Highlight>first guided trek programs</Highlight> to <Highlight>Khaliya Top and Chandika Ghat</Highlight>, receiving overwhelmingly positive feedback from our early trekking groups.</>,
  },
  {
    year: "2026",
    title: "Holiday Camp Launch",
    description:
      <>The <Highlight>Holiday Camp program</Highlight> was born — our most comprehensive offering, combining accommodation, guided activities, wellness, and cultural immersion.</>,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* =====================================================
          HERO

          About CHP + Comet Himalayan Paradise are now INSIDE
          the hero image.
      ===================================================== */}
      <AboutHero />

      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section id="story" className="py-8 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />

                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Our Story
                </p>
              </div>

              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Welcome to CHP

              </h2>

              <div className="space-y-4 text-justify text-slate-600 leading-relaxed text-base">
                <p>
                  <Highlight>Comet Himalayan Paradise (CHP)</Highlight> is a unique Himalayan
                  destination where <Highlight>nature, adventure, wellness, culture, and
                  community living</Highlight> come together in one inspiring ecosystem.
                  Nestled amidst the pristine mountains of Uttarakhand, CHP
                  offers authentic experiences ranging from scenic treks,
                  village homestays, cottage stays, and Himalayan camping to
                  wellness retreats, organic farming, cultural immersion, and
                  outdoor learning.
                </p>

                <p>
                  Whether you&apos;re seeking a <Highlight>second home in the Himalayas</Highlight>, a
                  peaceful escape, an adventurous holiday, a remote work
                  destination, or a meaningful connection with Himalayan life,
                  CHP provides <Highlight>unforgettable experiences</Highlight> for families,
                  students, nature lovers, corporate groups, and explorers of
                  all ages.
                </p>

                <p className="font-semibold text-slate-800 text-justify rounded-r-xl border-l-4 border-orange-400 bg-orange-50 pl-4 pr-4 py-3">
                  Experience the Himalayas. Live the Culture. Create Lifelong
                  Memories.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative mx-auto mt-6 w-full max-w-md lg:mt-0">
                <div className="overflow-hidden">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7ff715ce-30a4-4356-baa6-3055fdf0caa8-scaled-chp-intro-2.webp"
                    alt="CHP Himalayan Paradise experience"
                    width={640}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={IMAGE_FRAME_CLASS}
                  />
                </div>

                <div className="absolute -top-5 -right-5 bg-green-50 rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-green-900 text-3xl font-bold leading-none">
                    10+
                  </p>

                  <p className="text-slate-500 text-xs mt-1.5">
                    Years of Himalayan Excellence
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHP CORP FOOTPRINTS
      ===================================================== */}
      <section
        id="corp-footprints"
        className="py-8 sm:py-10 bg-stone-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
            <ScrollReveal direction="left">
              <div className="group flex w-full justify-center lg:justify-start">
                <div className="overflow-hidden">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a83d7a70-f05c-4a6f-8e09-6c3e1dc090ac-scaled-corp-footprints.webp"
                    alt="Organizations who have chosen CHP"
                    width={550}
                    height={390}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className={IMAGE_FRAME_CLASS}
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex-1">
                <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                  CHP Corp Footprints
                </h2>

                <p className="text-slate-600 leading-relaxed text-lg text-justify">
                  Working on our mission to connect visionary leaders with the
                  Himalayas, <Highlight>professionals and industry leaders</Highlight> from the
                  following organizations have already chosen CHP as their{" "}
                  <Highlight>second home</Highlight>.
                </p>

                <a
                  href="/contact"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
                >
                  Click here to join the CHP Group
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          THINGS TO DO
      ===================================================== */}
      <section
        id="things-to-do"
        className="py-8 sm:py-10 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />

                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Experiences
                </p>
              </div>

              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Things to Do
              </h2>

              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                CHP offers a <Highlight>complete Himalayan experience</Highlight> with nature,
                adventure, wellness, spirituality, and community living. From
                scenic treks and village walks to remote work, cultural
                experiences, and wellness retreats, every visit creates{" "}
                <Highlight>lasting memories</Highlight>.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="group relative mx-auto mt-6 w-full max-w-md lg:mt-0">
                <div className=" overflow-hidden ">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a87aeb9b-4231-4bf0-a7aa-2987fc4df906-scaled-thingstodo.webp"
                    alt="Things to do at CHP Himalayan Paradise"
                    width={640}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={IMAGE_FRAME_CLASS}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute -top-5 -right-5 bg-green-50 rounded-2xl p-3.5 shadow-xl flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 text-green-700" />
                  </div>

                  <div>
                    <p className="text-green-900 text-sm font-bold leading-none">
                      Explore
                    </p>

                    <p className="text-slate-500 text-[11px] mt-1">
                      Every trail & tradition
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section
        id="mission"
        className="relative py-8 sm:py-10 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=50"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-orange-400" />

            <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Our Purpose
            </p>
          </div>

          <h2 className="text-black text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Our Purpose
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-6">
                <div>
                  <p className="text-sky-400 text-lg font-bold uppercase tracking-[0.2em] mb-2">
                    Vision
                  </p>

                  <p className="text-black text-lg font-semibold leading-relaxed text-justify">
                    One Stop Destination for all Travel Experiences
                  </p>
                </div>

                <div>
                  <p className="text-orange-400 text-lg font-bold uppercase tracking-[0.2em] mb-2">
                    Mission
                  </p>

                  <p className="text-black text-lg font-semibold leading-relaxed text-justify">
                    Invest - Build - Grow - Prosper Together — Creating a
                    Meaningful Ecosystem with Purpose
                  </p>
                </div>

                <div>
                  <p className="text-emerald-400 text-lg font-bold uppercase tracking-[0.2em] mb-2">
                    Values
                  </p>

                  <p className="text-black text-lg font-semibold leading-relaxed text-justify">
                    Rooted in Nature. Deep Mountain Knowledge. Authentic
                    Hospitality. Driven by Trust and Commitment.
                  </p>
                </div>
              </div>
            </div>

            <img
              src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/57c52a5a-8cff-4f4a-aba1-f59591d5a443-scaled-vision-mission-values.webp"
              alt="CHP Vision Mission Values"
              className={`mx-auto ${IMAGE_FRAME_CLASS}`}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}
      <section className="py-8 sm:py-10 bg-white overflow-hidden">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-orange-400" />

            <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Our Journey
            </p>

            <span className="h-px w-8 bg-orange-400" />
          </div>
        </div>

        {/* Full-width timeline image */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
          <img
            src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/73f1c326-34be-421b-bbce-a927c76250bf-chp-making-of-chp-12-year-wide.webp"
            alt="The making of CHP - 12 year journey"
            className="block w-full h-auto object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative pl-8 border-l-2 border-green-900/15 space-y-6">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="relative">
                  <div className="absolute -left-[33px] w-6 h-6 rounded-full bg-green-900 border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <span className="text-green-700 font-bold text-xs uppercase tracking-wider">
                    {item.year}
                  </span>

                  <h3 className="text-slate-800 font-bold text-lg mt-1 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <CTABanner />

      {/* Go back to source page */}
      <div className="py-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-green-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-2xl hover:shadow-green-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-900"
        >
          Go back to Home
        </Link>
      </div>
    </>
  );
}