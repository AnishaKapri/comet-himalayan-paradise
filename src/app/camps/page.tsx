import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Tent,
  Flame,
  Leaf,
  Heart,
  Star,
  Users,
  Clock,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";
import {
  campFeatures,
  campFeaturePreviewTitles,
} from "@/data/campFeatures";

export const metadata: Metadata = {
  title: "Holiday Camps",
  description:
    "Immersive Himalayan holiday camps — multi-day adventures combining trekking, wellness, culture, and nature in stunning mountain settings. Programs for all ages from 1 day to 45 days.",
  alternates: {
    canonical:
      "https://comet-himalayan-paradise.vercel.app/camps",
  },
  openGraph: {
    title: "Himalayan Holiday Camps | CHP Himalayan Paradise",
    description:
      "Immersive Himalayan holiday camps combining trekking, wellness, culture, and nature. Programs for all ages from 1 day to 45 days.",
    url: "https://comet-himalayan-paradise.vercel.app/camps",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Himalayan Holiday Camp",
      },
    ],
  },
};

/* ------------------------------------------------------------------
   Shared design tokens
------------------------------------------------------------------- */

const HERO_TITLE_CLASS =
  "text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4";

const HERO_TAG_CLASS =
  "inline-block rounded-full bg-green-900 px-4 py-1.5 text-white text-xs font-semibold uppercase tracking-[0.18em] mb-4";

const IMAGE_BOX = "relative aspect-video w-full overflow-hidden";

const KEY = "font-bold text-orange-600";

const legacyCampFeatures = [
  {
    icon: Mountain,
    title: "Scenic Himalayan Locations",
    color: "blue",
    description:
      "Camps set at panoramic Himalayan viewpoints with sweeping mountain and valley views.",
  },
  {
    icon: Tent,
    title: "Multiple Accommodation",
    color: "orange",
    description:
      "Choose from hotels, homestays, traditional houses, luxury cottages, or camping tents.",
  },
  {
    icon: Flame,
    title: "Campfire Evenings",
    color: "red",
    description:
      "Every evening ends around a crackling campfire with music, stories, and community.",
  },
  {
    icon: Leaf,
    title: "Organic Farm Experience",
    color: "green",
    description:
      "Participate in herbal farming, organic cultivation, and Gaushala visits.",
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    color: "pink",
    description:
      "Daily yoga, meditation, pranayama, and mindfulness in pristine mountain air.",
  },
  {
    icon: Star,
    title: "Wildlife & Night Safari",
    color: "purple",
    description:
      "Expert-guided jungle safaris and magical night safaris in Himalayan wildlife zones.",
  },
  {
    icon: Users,
    title: "All Age Groups",
    color: "teal",
    description:
      "Carefully designed programs for children (5+), families, seniors, and solo travelers.",
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    color: "indigo",
    description:
      "One-day outings to weekend trips to extended 45-day programs — your choice.",
  },
];

const scheduleItems = [
  {
    time: "6:00 AM",
    activity: "Sunrise yoga & meditation",
    tag: "Wellness",
  },
  {
    time: "7:30 AM",
    activity: "Hot Himalayan breakfast",
    tag: "Food",
  },
  {
    time: "9:00 AM",
    activity: "Guided nature walk / trek activity",
    tag: "Adventure",
  },
  {
    time: "1:00 PM",
    activity: "Organic farm lunch",
    tag: "Food",
  },
  {
    time: "2:30 PM",
    activity: "Cultural activity / workshop",
    tag: "Culture",
  },
  {
    time: "4:30 PM",
    activity: "Bird watching / wildlife observation",
    tag: "Nature",
  },
  {
    time: "6:30 PM",
    activity: "Campfire, music & group activities",
    tag: "Community",
  },
  {
    time: "8:00 PM",
    activity: "Traditional dinner",
    tag: "Food",
  },
  {
    time: "9:30 PM",
    activity: "Stargazing / night safari (selected camps)",
    tag: "Adventure",
  },
];

const accommodationTypes = [
  {
    type: "Hotels",
    desc: "Comfortable mountain hotels with attached bathrooms, hot water, and Himalayan views.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80&auto=format&fit=crop",
  },
  {
    type: "Homestays",
    desc: "Stay with a warm Kumaoni family. Experience local food, culture, and genuine mountain life.",
    image: "/homestay.png",
  },
  {
    type: "Traditional Houses",
    desc: "Stone-and-wood heritage homes with centuries of Himalayan character and craftsmanship.",
    image: "/th.png",
  },
  {
    type: "Camping Tents",
    desc: "Premium canvas tents at scenic riverside or meadow locations. Bedding provided.",
    image: "/ct.png",
  },
];

export default function CampsPage() {
  const trekkingImage =
    "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f648cc02-54ed-4667-90e3-c902f07103b6-scaled-panchachuli-base-camp.webp";

  const campfireImage =
    "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4dc30f8c-3ced-4516-b042-c8f5f559339c-scaled-campfire-evenings.webp";

  const wildlifeImage =
    "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2c4f9283-5476-4a35-80cf-d3ddda2787ba-scaled-bird-watching-1.webp";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/38f2e4c5-2d33-48f0-9695-8f607faf69d8-scaled-holiday-camp-header-1.webp"
          alt="Himalayan holiday camp"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        {/* Hero content moved higher */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20 lg:pt-24 text-center px-4 sm:px-6">
          <p className={HERO_TAG_CLASS}>Holiday Camp</p>

          <h1 className={HERO_TITLE_CLASS}>
            Live the Himalayan Life
          </h1>

          <p className="text-orange-200 text-sm sm:text-base font-semibold tracking-wide mb-4">
            DISCOVER → VISIT → EXPERIENCE → RETURN → CONNECT → JOIN → BELONG
          </p>

          <p className="text-white/80 text-lg max-w-xl">
            Adventure, wellness, culture & nature — all at your pace.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Camp Overview
              </p>

              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Your Complete Himalayan Vacation — All in One Place
              </h2>

              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                CHP Holiday Camps are designed to give you the full{" "}
                <strong className={KEY}>Himalayan experience</strong>{" "}
                hassle free. We take care of everything — from accommodation
                and meals to guided activities, permits, and logistics — so you
                can simply arrive, breathe, and explore.
              </p>

              <p className="text-slate-600 leading-relaxed text-justify">
                Whether you&apos;re a{" "}
                <strong className={KEY}>family</strong> looking for a
                meaningful summer vacation, a corporate group seeking
                team-building in nature, a solo seeker on a wellness retreat,
                or a student on an educational expedition — we have a camp
                program designed for you.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className={`${IMAGE_BOX} rounded-2xl`}>
                <Image
                  src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a6144aa9-77bf-406b-8909-fccf2edf9929-scaled-holiday-camp-2.webp"
                  alt="Himalayan camp aerial view"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Camp Features"
            title="Everything You Could Want"
            subtitle="A comprehensive camp experience curated for maximum enjoyment and authentic Himalayan immersion."
          />

          <StaggerContainer
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4 lg:mx-auto"
            staggerDelay={0.07}
          >
            {campFeatures
              .filter((feature) =>
                campFeaturePreviewTitles.includes(feature.title)
              )
              .map((feature) => (
                <StaggerItem key={feature.title}>
                  <article className="h-full overflow-hidden rounded-2xl bg-green-50 shadow-sm [transform-style:preserve-3d] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-4deg)_translateY(-4px)]">
                    <div className={`${IMAGE_BOX} bg-green-100`}>
                      {feature.image.startsWith("PASTE_IMAGE_URL_") ? (
                        <div className="flex h-full items-center justify-center text-sm font-medium text-green-700">
                          Image coming soon
                        </div>
                      ) : (
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                  </article>
                </StaggerItem>
              ))}
          </StaggerContainer>

          <div className="mt-8 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30"
            >
              Show All Features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Camp Activities */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              Camp Activities
            </p>

            <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-3">
              A World of Full Experiences Awaits
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-justify">
              From{" "}
              <strong className={KEY}>mountain adventures</strong> to peaceful
              moments in nature, every day brings something new to experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Trekking */}
            <div className="rounded-2xl bg-green-50 overflow-hidden shadow-sm [transform-style:preserve-3d] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-4deg)_translateY(-4px)]">
              <div className={`${IMAGE_BOX} bg-green-100`}>
                {trekkingImage ? (
                  <Image
                    src={trekkingImage}
                    alt="Trekking & Hiking"
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-medium text-green-700">
                    Image coming soon
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-green-900 mb-2">
                  🥾 Trekking & Hiking
                </h3>

                <p className="text-sm text-slate-600 text-justify">
                  Explore{" "}
                  <strong className="font-bold text-green-800">
                    scenic Himalayan trails
                  </strong>
                  , forests, villages and mountain viewpoints.
                </p>
              </div>
            </div>

            {/* Campfire */}
            <div className="rounded-2xl bg-orange-50 overflow-hidden shadow-sm [transform-style:preserve-3d] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-4deg)_translateY(-4px)]">
              <div className={`${IMAGE_BOX} bg-orange-100`}>
                {campfireImage ? (
                  <Image
                    src={campfireImage}
                    alt="Campfire Evenings"
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-medium text-orange-700">
                    Image coming soon
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-orange-900 mb-2">
                  🔥 Campfire Evenings
                </h3>

                <p className="text-sm text-slate-600 text-justify">
                  Enjoy{" "}
                  <strong className="font-bold text-orange-700">
                    music, stories, conversations
                  </strong>{" "}
                  and unforgettable evenings around the fire.
                </p>
              </div>
            </div>

            {/* Wildlife */}
            <div className="rounded-2xl bg-blue-50 overflow-hidden shadow-sm [transform-style:preserve-3d] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-4deg)_translateY(-4px)]">
              <div className={`${IMAGE_BOX} bg-blue-100`}>
                {wildlifeImage ? (
                  <Image
                    src={wildlifeImage}
                    alt="Nature & Wildlife"
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-medium text-blue-700">
                    Image coming soon
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-blue-900 mb-2">
                  🐦 Nature & Wildlife
                </h3>

                <p className="text-sm text-slate-600 text-justify">
                  Discover{" "}
                  <strong className="font-bold text-blue-800">
                    Himalayan birds, wildlife
                  </strong>{" "}
                  and the beauty of untouched mountain landscapes.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/camp-activities"
              className="inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30"
            >
              Show All Camp activities{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact?tab=camp"
              className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-900/30"
            >
              Book Your Holiday Camp{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="pt-4 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              A Typical Day
            </p>

            <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-3">
              Camp Schedule | Duration
            </h2>

            {/* Only one highlighted phrase */}
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-justify">
              Each day is thoughtfully structured —{" "}
              <strong className={KEY}>
                busy enough to be enriching
              </strong>
              , relaxed enough to breathe.
            </p>
          </div>

          {/* Description LEFT + Image RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Description */}
            <div className="rounded-2xl bg-orange-50 p-6">
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Your Day in the Himalayas
              </p>

              <h3 className="text-slate-800 text-2xl sm:text-3xl font-bold mb-4">
                A Day Full of Experiences
              </h3>

              {/* Only important phrase highlighted */}
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                Start your morning with{" "}
                <strong className={KEY}>
                  sunrise yoga and meditation
                </strong>
                , followed by a wholesome Himalayan breakfast. The day then
                unfolds with guided nature walks, trekking and outdoor
                adventures.
              </p>

              {/* Only important phrase highlighted */}
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                After lunch, enjoyorganic farming, cultural
                activities and workshops, followed by bird watching and
                wildlife experiences in the afternoon.
              </p>

              {/* Only important phrase highlighted */}
              <p className="text-slate-600 leading-relaxed text-justify">
                As evening arrives, gather around the{" "}
                <strong className={KEY}>campfire</strong> for music, stories
                and group activities before enjoying a traditional dinner. End
                the day beneath the Himalayan sky with stargazing or a night
                safari at selected camps.
              </p>
            </div>

            {/* Image */}
            <div className={`${IMAGE_BOX} rounded-2xl`}>
              <Image
                src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/976486cc-548b-42f2-ae8d-b2d827dc3448-scaled-schedule.webp"
                alt="Himalayan camp schedule"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {false && (
        <>
          <section className="py-12 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                eyebrow="Where You Stay"
                title="Accommodation Options"
                subtitle="Choose the stay that feels right for you — comfort to wilderness, all with Himalayan soul."
              />

              <StaggerContainer
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                staggerDelay={0.08}
              >
                {accommodationTypes.map((acc) => (
                  <StaggerItem key={acc.type}>
                    <div className="group bg-green-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                      <div className={IMAGE_BOX}>
                        <Image
                          src={acc.image}
                          alt={acc.type}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-slate-800 text-sm mb-1.5">
                          {acc.type}
                        </h3>

                        <p className="text-slate-600 text-xs leading-relaxed text-justify">
                          {acc.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        </>
      )}

      <CTABanner  showHomeButton/>

     
    </>
  );
}