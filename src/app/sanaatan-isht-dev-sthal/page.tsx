import type { Metadata } from "next";
import Image from "next/image";
import {
    Flame,
    MapPin,
    BookOpen,
    Users,
    Heart,
    Leaf,
    CheckCircle,
    Sparkles,
    Globe,
    Sunrise,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
    title: "Sanaatan Isht Dev Sthal",
    description:
        "A sacred initiative to reconnect generations with their Isht-Devas, Sanatan traditions and Uttarakhand's rich spiritual heritage. One Place. Divine Unity. A Temple for Every Heart.",
    alternates: {
        canonical: "https://comet-himalayan-paradise.vercel.app/sanaatan-isht-dev-sthal",
    },
};

const visionPoints = [
    "Creating a comprehensive list of deities worshipped across Uttarakhand",
    "Documenting the original/native sites associated with each Isht-Devta",
    "Inviting individuals, business leaders and community members to voluntarily support the establishment of individual shrines",
    "Developing the shrines through the Trust to maintain consistency and coordinated execution",
];

const projectContributions = [
    "Preserving Uttarakhand's identity as Devbhoomi",
    "Connecting younger generations with spiritual and cultural traditions",
    "Promoting tourism in remote areas",
    "Creating opportunities for local communities and villagers",
];

const spiritualSpaces = [
    {
        title: "Isht-Devta Shrines",
        description:
            "Individual small shrines, or Thaan, dedicated to revered Isht-Devas, accompanied by stone inscriptions describing the deity and acknowledging the contributing devotee/sponsor. Each unit is planned with a small shrine and a space for devotees to sit, reflect and pray.",
        icon: "🕉️",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "Chaar Dhaam Bhavan — India",
        description:
            "A dedicated representation of Badrinath, Dwarka, Puri and Rameshwaram, introducing visitors to the four major pilgrimage traditions of India's Char Dham through pictures, paintings, sculptures and descriptions.",
        icon: "🗺️",
        color: "bg-amber-50 border-amber-100",
    },
    {
        title: "Chaar Dhaam Bhavan — Uttarakhand",
        description:
            "A dedicated space representing Yamunotri, Gangotri, Kedarnath and Badrinath, allowing visitors to explore the four Char Dham pilgrimage sites of Uttarakhand in one place.",
        icon: "⛰️",
        color: "bg-yellow-50 border-yellow-100",
    },
    {
        title: "12 Jyotirlingas Premise",
        description:
            "A dedicated space presenting the 12 Jyotirlingas, with names and brief descriptions displayed through stone inscriptions or visual representations.",
        icon: "🔱",
        color: "bg-teal-50 border-teal-100",
    },
    {
        title: "51 Shakti Peeth Premise",
        description:
            "A space dedicated to the 51 Shakti Peethas, presenting their names and brief descriptions through inscriptions or visual displays to help visitors learn about these sacred traditions.",
        icon: "🌸",
        color: "bg-rose-50 border-rose-100",
    },
    {
        title: "Nav Durga Bhavan",
        description:
            "A dedicated space celebrating the nine forms of Goddess Durga, represented through images, idols and descriptions.",
        icon: "✨",
        color: "bg-violet-50 border-violet-100",
    },
    {
        title: "Krishna Leela Bhavan",
        description:
            "A thematic space depicting important events from Lord Krishna's life through pictures, sculptures and proposed light-and-sound presentations.",
        icon: "🪈",
        color: "bg-blue-50 border-blue-100",
    },
    {
        title: "Ram Leela Bhavan",
        description:
            "A space dedicated to the life and ideals of Lord Shri Ram, presenting important events through pictures, sculptures and light-and-sound effects, with an emphasis on inspiration from his life and values.",
        icon: "🏹",
        color: "bg-green-50 border-green-100",
    },
    {
        title: "Shiv Mahima Premise",
        description:
            "A dedicated complex exploring the glory and different manifestations of Lord Shiva, using paintings, sculptures and descriptions to introduce their spiritual, cultural and philosophical significance.",
        icon: "🌙",
        color: "bg-sky-50 border-sky-100",
    },
    {
        title: "Lord Vishnu Leela Bhavan",
        description:
            "A dedicated space presenting the Dashavatara and divine manifestations of Lord Vishnu through paintings, sculptures, audio-visual presentations and descriptions.",
        icon: "🌀",
        color: "bg-indigo-50 border-indigo-100",
    },
];

const moreThanWorship = [
    {
        icon: Sunrise,
        title: "Yoga & Meditation Centre",
        description:
            "A dedicated centre for yoga, pranayama, meditation and spiritual practices, designed around the purification and balance of body, mind and soul.",
    },
    {
        icon: BookOpen,
        title: "Educational & Cultural Visits",
        description:
            "The initiative proposes collaboration with schools so that students can visit the complex, explore the temple chain and participate in interactive sessions around Sanatan Vedic traditions and Uttarakhand's religious heritage.",
    },
];

const selfSustainability = [
    "Informative booklets about Isht-Devtas",
    "Yoga and meditation programmes",
    "Health retreat and medical-tourism related programmes",
    "Volunteer participation",
];

const callsToAction = [
    {
        label: "Explore Isht Dev Sthal",
        href: "/contact",
        style: "bg-amber-600 hover:bg-amber-700 text-white",
    },
    {
        label: "Support a Shrine",
        href: "/contact",
        style: "bg-white hover:bg-amber-50 text-amber-800 border border-amber-300",
    },
    {
        label: "Become a Volunteer",
        href: "/contact",
        style: "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300",
    },
    {
        label: "Partner With Us",
        href: "/contact",
        style: "bg-green-900 hover:bg-green-800 text-white",
    },
];

export default function SanaatanIshtDevSthalPage() {
    return (
        <main className="min-h-screen bg-stone-50 text-slate-800 pt-16">

            {/* ── Hero ── */}
            <section className="relative h-[calc(100vh-4rem)] min-h-[650px] overflow-hidden flex items-center">
                {/* Background image */}
                <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/sanatan/ec5945d9-4839-4bb5-aaf9-2707afbe521e-chatgpt-image-sep-28-2026-08-09-04-pm.png"
                    alt="Sanaatan Isht Dev Sthal – sacred shrine complex in the Himalayas"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                {/* Warm amber overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/95 via-amber-900/55 to-black/20" />
                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
                    <ScrollReveal direction="up">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="h-px w-8 bg-amber-300" />
                            <p className="text-amber-300 text-xs font-semibold uppercase tracking-[0.2em]">CHP Social Impact</p>
                        </div>
                        <div className="flex items-center gap-4 mb-5">
                            <span className="text-5xl">🕉️</span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                                Sanaatan Isht<br />
                                <span className="text-amber-300">Dev Sthal</span>
                            </h1>
                        </div>
                        <p className="text-white/90 text-xl sm:text-2xl font-semibold mb-4 italic">
                            One Place. Divine Unity. A Temple for Every Heart.
                        </p>
                        <p className="text-white/80 text-base leading-relaxed max-w-2xl mb-4">
                            A sacred initiative to reconnect generations with their Isht-Devas, Sanatan traditions and
                            Uttarakhand&apos;s rich spiritual heritage.
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                            Isht Dev Sthal is envisioned as a unique spiritual and cultural destination in Pithoragarh,
                            Uttarakhand, bringing together representations of Isht-Devas, sacred pilgrimage traditions and
                            spiritual learning within a single peaceful campus.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── The Vision ── */}
            <section id="vision" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <ScrollReveal direction="left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-8 bg-amber-500" />
                                <p className="text-amber-600 text-xs font-semibold uppercase tracking-[0.2em]">The Vision</p>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-slate-800">
                                A Harmonious Spiritual Corridor
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                The initiative seeks to create a harmonious cluster of Isht-Devta (preferred deities) within a single
                                spiritual corridor — a place for pilgrims, devotees, families, students and the next generation to
                                discover, experience and connect with India&apos;s diverse spiritual traditions.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                The campus is envisioned not simply as a temple complex, but as a place for faith, cultural
                                learning, reflection and spiritual experience.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                This makes Isht Dev Sthal potentially relevant not only to devotees, but also to students, families,
                                cultural explorers, pilgrims and visitors interested in Uttarakhand&apos;s spiritual heritage.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal direction="right">
                            <div className="bg-gradient-to-br from-amber-950 to-orange-900 text-white rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <MapPin className="w-6 h-6 text-amber-300" />
                                    <p className="text-amber-300 text-sm font-semibold uppercase tracking-wider">Located in Devbhoomi</p>
                                </div>
                                <p className="text-white/85 leading-relaxed mb-6">
                                    Located in Uttarakhand — widely associated with the idea of Devbhoomi, the Land of the Gods —
                                    the initiative aims to provide a dedicated space where different Isht-Dev traditions can be
                                    experienced together.
                                </p>
                                <p className="text-amber-300 font-semibold mb-6 text-sm">This project is intended to contribute to:</p>
                                <ul className="space-y-3">
                                    {projectContributions.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                                            <span className="text-white/85 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── A Community-Supported Initiative ── */}
            <section id="community" className="py-20 bg-amber-950/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="A Community-Supported Initiative"
                        title="The Isht Dev Sthal Trust"
                        subtitle="The Isht Dev Sthal Trust is the spiritual wing operating within the CHP framework and the driving force behind the initiative. The Trust proposes to develop a dedicated space where Hindu deities are represented along with their names and glory through stone inscriptions."
                    />
                    <div className="mt-14">
                        <p className="text-slate-700 font-semibold text-lg mb-8 text-center">The Proposed Implementation Model Includes:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {visionPoints.map((point, i) => (
                                <ScrollReveal key={i} delay={i * 0.08} direction="up">
                                    <div className="bg-white border border-amber-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                                        <span className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                                        <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── A Journey Through India's Spiritual Heritage ── */}
            <section id="spiritual-spaces" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="A Journey Through India's Spiritual Heritage"
                        title="The Proposed Campus Brings Together Several Themed Spiritual Spaces"
                        subtitle="Experience India's diverse spiritual and cultural heritage, all within one sacred destination in the heart of Uttarakhand."
                    />
                    <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
                        {spiritualSpaces.map((space, i) => (
                            <StaggerItem key={i}>
                                <div className={`rounded-2xl border p-6 hover:shadow-md transition-shadow duration-300 h-full ${space.color}`}>
                                    <span className="text-4xl mb-4 block">{space.icon}</span>
                                    <h3 className="text-slate-800 font-bold text-lg mb-3">{space.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{space.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── More Than a Place of Worship ── */}
            <section id="more-than-worship" className="py-20 bg-gradient-to-br from-amber-950 to-orange-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="flex items-center gap-3 mb-4 justify-center">
                            <span className="h-px w-8 bg-amber-300" />
                            <p className="text-amber-300 text-xs font-semibold uppercase tracking-[0.2em]">More Than a Place of Worship</p>
                            <span className="h-px w-8 bg-amber-300" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                            A Destination Combining Devotion, Cultural Education,<br className="hidden sm:block" /> Wellness & Community
                        </h2>
                        <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
                            The proposed Isht Dev Sthal is envisioned as a complete destination for devotees, students, families and visitors alike.
                        </p>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {moreThanWorship.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                                    <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
                                        <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center mb-5">
                                            <Icon className="w-6 h-6 text-amber-300" />
                                        </div>
                                        <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                                        <p className="text-white/75 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    {/* Self-Sustaining Model */}
                    <ScrollReveal direction="up">
                        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
                            <div className="flex items-center gap-3 mb-6">
                                <Leaf className="w-6 h-6 text-amber-300" />
                                <h3 className="text-white font-bold text-xl">Building a Self-Sustaining Spiritual Initiative</h3>
                            </div>
                            <p className="text-white/75 text-sm mb-6 leading-relaxed">
                                The initiative proposes a self-sustainability model that includes:
                            </p>
                            <ul className="space-y-3">
                                {selfSustainability.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                                        <span className="text-white/85 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Sponsor & Participation ── */}
            <section id="sponsor" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal direction="up">
                            <div className="flex items-center gap-3 mb-4 justify-center">
                                <span className="h-px w-8 bg-amber-500" />
                                <p className="text-amber-600 text-xs font-semibold uppercase tracking-[0.2em]">Sponsor & Participation Opportunity</p>
                                <span className="h-px w-8 bg-amber-500" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-slate-800 text-center">
                                Be Part of the Sacred Journey
                            </h2>
                            <p className="text-slate-600 text-center mb-4 leading-relaxed">
                                The proposed model allows devotees and supporters to contribute towards individual Isht-Devta shrines.
                                The sponsor&apos;s name is proposed to be displayed alongside the deity&apos;s inscription, with
                                a dedicated stone-wall board recognizing contributing sponsors.
                            </p>
                            <p className="text-slate-500 text-center text-sm mb-12">
                                The initiative also mentions issuance of tax-exemption receipts under applicable 12A/80G provisions.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <div className="bg-gradient-to-br from-amber-950 to-orange-900 text-white rounded-2xl p-10 text-center mb-8">
                                <span className="text-5xl mb-6 block">🪔</span>
                                <p className="text-amber-300 font-semibold text-sm uppercase tracking-widest mb-4">Faith. Service. Action.</p>
                                <h3 className="text-2xl font-bold mb-3">Support a shrine. Preserve a tradition. Connect generations.</h3>
                                <p className="text-white/75 text-sm leading-relaxed mb-8">
                                    Reconnect with Your Isht-Devta.<br />
                                    A sacred journey of faith, heritage and discovery in the Himalayas.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {callsToAction.map((cta) => (
                                        <a
                                            key={cta.label}
                                            href={cta.href}
                                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${cta.style}`}
                                        >
                                            {cta.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
