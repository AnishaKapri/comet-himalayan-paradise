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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Holiday Camps",
  description:
    "Immersive Himalayan holiday camps — multi-day adventures combining trekking, wellness, culture, and nature in stunning mountain settings. Programs for all ages from 1 day to 45 days.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/camps" },
  openGraph: {
    title: "Himalayan Holiday Camps | CHP Himalayan Paradise",
    description: "Immersive Himalayan holiday camps combining trekking, wellness, culture, and nature. Programs for all ages from 1 day to 45 days.",
    url: "https://comet-himalayan-paradise.vercel.app/camps",
    images: [{ url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format&fit=crop", width: 1200, height: 630, alt: "Himalayan Holiday Camp" }],
  },
};

const campFeatures = [
  {
    icon: Mountain,
    title: "Scenic Himalayan Locations",
    description:
      "Camps set at panoramic Himalayan viewpoints with sweeping mountain and valley views.",
  },
  {
    icon: Tent,
    title: "Multiple Accommodation",
    description:
      "Choose from hotels, homestays, traditional houses, luxury cottages, or camping tents.",
  },
  {
    icon: Flame,
    title: "Campfire Evenings",
    description:
      "Every evening ends around a crackling campfire with music, stories, and community.",
  },
  {
    icon: Leaf,
    title: "Organic Farm Experience",
    description:
      "Participate in herbal farming, organic cultivation, and Gaushala visits.",
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description:
      "Daily yoga, meditation, pranayama, and mindfulness in pristine mountain air.",
  },
  {
    icon: Star,
    title: "Wildlife & Night Safari",
    description:
      "Expert-guided jungle safaris and magical night safaris in Himalayan wildlife zones.",
  },
  {
    icon: Users,
    title: "All Age Groups",
    description:
      "Carefully designed programs for children (5+), families, seniors, and solo travelers.",
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    description:
      "One-day outings to weekend trips to extended 45-day programs — your choice.",
  },
];

const scheduleItems = [
  { time: "6:00 AM", activity: "Sunrise yoga & meditation", tag: "Wellness" },
  { time: "7:30 AM", activity: "Hot Himalayan breakfast", tag: "Food" },
  { time: "9:00 AM", activity: "Guided nature walk / trek activity", tag: "Adventure" },
  { time: "1:00 PM", activity: "Organic farm lunch", tag: "Food" },
  { time: "2:30 PM", activity: "Cultural activity / workshop", tag: "Culture" },
  { time: "4:30 PM", activity: "Bird watching / wildlife observation", tag: "Nature" },
  { time: "6:30 PM", activity: "Campfire, music & group activities", tag: "Community" },
  { time: "8:00 PM", activity: "Traditional dinner", tag: "Food" },
  { time: "9:30 PM", activity: "Stargazing / night safari (selected camps)", tag: "Adventure" },
];

const accommodationTypes = [
  {
    type: "Hotels",
    desc: "Comfortable mountain hotels with attached bathrooms, hot water, and Himalayan views.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80&auto=format&fit=crop",
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
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src="/Holiday Camp Header 1.png"
          alt="Himalayan holiday camp"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Holiday Camps
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Live the Himalayan Life
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
            Immersive camp programs combining adventure, wellness, culture, and
            nature. From a weekend to 45 days — at your pace.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-900/30"
          >
            Book a Camp
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      
      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Camp Overview
              </p>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-5 leading-tight">
                Your Complete Himalayan Vacation — All in One Place
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                CHP Holiday Camps are designed to give you the full Himalayan
                experience without any of the complexity. We take care of
                everything — from accommodation and meals to guided activities,
                permits, and logistics — so you can simply arrive, breathe, and
                explore.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you&apos;re a family looking for a meaningful summer
                vacation, a corporate group seeking team-building in nature, a
                solo seeker on a wellness retreat, or a student on an
                educational expedition — we have a camp program designed for
                you.
              </p>

              <ul className="space-y-3">
                {[
                  "Easy accessibility via air, train, bus, or private cab",
                  "All meals included — organic, locally sourced",
                  "Expert guides for every activity",
                  "Flexible durations: 1 day to 45 days",
                  "Suitable for all age groups 5+",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/Holiday Camp 2.png"
                    alt="Himalayan camp aerial view"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features grid */}
<section className="py-20 bg-stone-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      eyebrow="Camp Features"
      title="Everything You Could Want"
      subtitle="A comprehensive camp experience curated for maximum enjoyment and authentic Himalayan immersion."
    />

    <StaggerContainer
      className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      staggerDelay={0.07}
    >
      {campFeatures.map((f, index) => {
        const Icon = f.icon;

        const iconColors = [
          "#059669", // Emerald
          "#2563EB", // Blue
          "#EA580C", // Orange
          "#16A34A", // Green
          "#E11D48", // Rose
          "#9333EA", // Purple
          "#4F46E5", // Indigo
          "#0891B2", // Cyan
        ];

        const iconBackgrounds = [
          "#D1FAE5", // Light Emerald
          "#DBEAFE", // Light Blue
          "#FFEDD5", // Light Orange
          "#DCFCE7", // Light Green
          "#FFE4E6", // Light Rose
          "#F3E8FF", // Light Purple
          "#E0E7FF", // Light Indigo
          "#CFFAFE", // Light Cyan
        ];

        return (
          <StaggerItem key={f.title}>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: iconBackgrounds[index % iconBackgrounds.length],
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{
                    color: iconColors[index % iconColors.length],
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-slate-800 text-sm mb-2">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-xs leading-relaxed">
                {f.description}
              </p>

            </div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  </div>
</section>
{/* Camp Activities */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT — Camp Activities */}
      <div>
        <SectionHeader
          eyebrow="CAMP ACTIVITIES"
          title="Camp Activities"
          subtitle="Make the most of your Himalayan stay with experiences designed for adventure, wellness, nature, and connection."
        />

        <StaggerContainer
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
          staggerDelay={0.08}
        >

          {/* Trekking */}
          <StaggerItem>
            <div className="group bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-xl">🥾</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">
                Himalayan Treks
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Explore scenic mountain trails, forests, villages, and breathtaking Himalayan viewpoints.
              </p>
            </div>
          </StaggerItem>

          {/* Campfire */}
          <StaggerItem>
            <div className="group bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:bg-orange-50 hover:border-orange-100 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl">🔥</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">
                Campfire Nights
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Gather around a warm Himalayan campfire with music, stories, food, and unforgettable evenings.
              </p>
            </div>
          </StaggerItem>

          {/* Yoga */}
          <StaggerItem>
            <div className="group bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:bg-purple-50 hover:border-purple-100 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-xl">🧘</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">
                Yoga & Meditation
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Start your mornings with yoga, meditation, pranayama, and peaceful moments surrounded by nature.
              </p>
            </div>
          </StaggerItem>

          {/* Organic Farming */}
          <StaggerItem>
            <div className="group bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:bg-green-50 hover:border-green-100 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">
                Organic Farming
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Experience Himalayan farming and learn about organic cultivation.
              </p>
            </div>
          </StaggerItem>

          {/* Wildlife */}
          <StaggerItem>
            <div className="group bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:bg-blue-50 hover:border-blue-100 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl">🦌</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">
                Wildlife Experiences
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Discover Himalayan wildlife through guided nature walks and safaris.
              </p>
            </div>
          </StaggerItem>

          {/* Local Culture */}
          <StaggerItem>
            <div className="group bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:bg-rose-50 hover:border-rose-100 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center mb-4">
                <span className="text-xl">🏔️</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">
                Local Himalayan Life
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Experience local traditions, village life, and Himalayan cuisine.
              </p>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>

      {/* RIGHT — Activity Image */}
      <div className="w-full">
       <div className="relative w-full flex items-center justify-center">
  <img
    src="/activities.png"
    alt="Himalayan camp activities"
    className="w-full max-w-[560px] h-auto object-contain rounded-3xl shadow-lg"
  />
</div>
      </div>

    </div>
  </div>
</section>
      {/* Daily Schedule */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT — Schedule Description */}
      <div>
        <SectionHeader
          eyebrow="A TYPICAL DAY"
          title="Camp Schedule | Duration"
          subtitle="Each day is thoughtfully structured — busy enough to be enriching, relaxed enough to breathe."
        />

        <div className="mt-10">

          <p className="text-slate-600 text-sm leading-7">
            Each day at our Himalayan camp is thoughtfully planned to offer a
            balanced mix of wellness, adventure, nature, culture, and community.
            Begin your morning with yoga and a wholesome Himalayan breakfast,
            followed by guided nature walks, treks, farm experiences, and
            cultural activities.
          </p>

          <p className="mt-5 text-slate-600 text-sm leading-7">
            As the day continues, enjoy wildlife experiences, campfire evenings,
            music, group activities, and traditional Himalayan dinners. Selected
            camps also offer stargazing and night safaris for a memorable
            experience under the mountain sky.
          </p>

          <p className="mt-5 text-slate-500 text-sm leading-7">
            Camp durations are flexible, ranging from one-day experiences and
            weekend stays to extended programmes. Schedules can be adjusted
            according to weather conditions, group preferences, and programme
            type.
          </p>

        </div>
      </div>

      {/* RIGHT — Schedule Image */}
      <div className="w-full flex items-center justify-center">
        <img
          src="/schedule.png"
          alt="Himalayan camp schedule"
          className="w-full max-w-[560px] h-auto object-contain rounded-3xl shadow-lg"
        />
      </div>

    </div>
  </div>
</section>
      {/* Accommodation */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Where You Stay"
            title="Accommodation Options"
            subtitle="Choose the stay that feels right for you — comfort to wilderness, all with Himalayan soul."
          />

          <StaggerContainer
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.08}
          >
            {accommodationTypes.map((acc) => (
              <StaggerItem key={acc.type}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-44 overflow-hidden">
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
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {acc.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
