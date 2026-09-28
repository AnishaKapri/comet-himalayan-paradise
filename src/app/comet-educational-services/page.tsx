import type { Metadata } from "next";
import Link from "next/link";
import {
    GraduationCap,
    Users,
    BookOpen,
    Mic,
    BrainCircuit,
    Laptop,
    School,
    HeartHandshake,
    Trophy,
    Lightbulb,
    Building2,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
    title: "Comet Educational Services",
    description:
        "COMET Educational Service is a nonprofit initiative bridging the career-development gap for talented students from remote and underserved communities through mentoring, IT training, and professional skills development.",
    alternates: {
        canonical: "https://comet-himalayan-paradise.vercel.app/comet-educational-services",
    },
};

const stats = [
    { value: "40+", label: "Senior IT Professionals" },
    { value: "20,000+", label: "Students Reached" },
    { value: "7", label: "States" },
    { value: "50+", label: "Schools & Colleges" },
    { value: "500+", label: "Success Stories" },
];

const trainings = [
    {
        icon: Laptop,
        title: "IT Training",
        tagline: "Practical Technology Skills for Tomorrow's Careers",
        description:
            "Learn IT tools, technologies and job-oriented skills that build a strong foundation for today's technology-driven careers.",
        focus: ["IT Tools", "Technologies", "Job Profiles", "Practical Skills"],
        color: "blue",
    },
    {
        icon: Users,
        title: "Group Discussion",
        tagline: "Think. Speak. Listen. Participate.",
        description:
            "Develop communication, logical thinking, teamwork and confidence through structured group discussions.",
        focus: ["Communication", "Confidence", "Teamwork", "Critical Thinking"],
        color: "emerald",
    },
    {
        icon: Mic,
        title: "Presentation Skills",
        tagline: "Turn Knowledge Into Confidence.",
        description:
            "Learn to organize ideas, create effective presentations and communicate clearly and confidently before an audience.",
        focus: ["Communication", "Presentation", "Public Speaking", "Confidence"],
        color: "violet",
    },
    {
        icon: BrainCircuit,
        title: "Soft Skills",
        tagline: "Skills Beyond the Classroom.",
        description:
            "Build the interpersonal and professional skills required to succeed in academic, interview and workplace environments.",
        focus: ["Communication", "Teamwork", "Leadership", "Interview Readiness"],
        color: "amber",
    },
];

const schoolServices = [
    {
        icon: HeartHandshake,
        title: "Career Counselling & Mentorship",
        description:
            "Career counselling sessions and workshops help students understand career options, identify their strengths, and make informed decisions about their future.",
    },
    {
        icon: School,
        title: "Adopt-a-School Program",
        description:
            "Through our school-support initiative, COMET works with selected schools to improve educational opportunities and contribute to the academic and career development of their students.",
    },
    {
        icon: BookOpen,
        title: "Career Planning & Tracking",
        description:
            "Our Career Planning Tracker provides students with a platform to plan their careers while enabling school management to follow their progress and support them through COMET mentorship.",
    },
    {
        icon: Lightbulb,
        title: "Motivational & Awareness Programs",
        description:
            "Industry professionals and experienced mentors conduct motivational sessions, career-awareness programs, and interactive workshops for students.",
    },
    {
        icon: Trophy,
        title: "Competitions & Career Events",
        description:
            "COMET supports inter-school competitions and plans career-focused events at block and district levels to encourage healthy competition, exposure, and learning.",
    },
];

const mentorshipSkills = [
    "Communication",
    "Leadership",
    "Teamwork",
    "Problem Solving",
    "Creative Thinking",
    "Decision Making",
    "Time Management",
    "Emotional Intelligence",
    "Positive Attitude",
    "Responsibility",
];

const careerGuidanceOfferings = [
    "Career Counselling & Mentoring",
    "Technical & IT Training",
    "BCA/B.Tech Career Support",
    "Programming, Cloud, DevOps, AI, ML & Data Science",
    "Software Testing & Database Development",
    "Business Analysis & Project Management",
    "Spoken English & Communication Skills",
    "Soft Skills, Leadership & Personality Development",
    "Mock Tests, Group Discussions & Mock Interviews",
    "Internship & Fresher Job Opportunities",
    "Industry Interaction with IT Professionals",
];

const studyCentreFeatures = [
    "Safe & disciplined learning environment for focused study",
    "24×7 supervision, mentoring and guidance",
    "Structured rules and routines that encourage discipline and responsibility",
    "Close mentoring and continuous monitoring of student progress",
    "Technical and functional training during early morning and evening hours",
    "English communication and soft-skills development",
    "Group discussions, team activities and presentation-oriented sessions",
    "Mock interviews and career preparation",
    "Weekend workshops with focused student participation",
    "360° feedback to students and parents on learning and development",
];

const careerMakeoverPathways = [
    {
        title: "From Beginner to Software Professional",
        description:
            "Advanced computer training can help students with little or no prior computer knowledge build the skills required for software careers.",
    },
    {
        title: "From Hindi Medium to Professional Careers",
        description:
            "Spoken English, group discussions, presentation practice and mock interviews help students build communication and workplace confidence.",
    },
    {
        title: "Alternative Pathways to BCA",
        description:
            "Arts and Commerce students can receive guidance and support to explore BCA and other technology-oriented degree programs.",
    },
    {
        title: "Opportunities Beyond Academic Scores",
        description:
            "Students with lower Class 12 scores can receive guidance to explore BCA, BBA and other suitable degree programs.",
    },
    {
        title: "Support for Students Without Mathematics",
        description:
            "Students from Science and Commerce backgrounds who did not study Mathematics can explore suitable pathways toward BCA programs.",
    },
    {
        title: "Affordable Higher Education",
        description:
            "COMET works to help deserving and financially constrained students identify affordable college and degree options.",
    },
];

const supportWays = [
    {
        title: "Adopt a School",
        description:
            "Support the development of schools in remote communities through technology, mentoring, training and educational initiatives.",
    },
    {
        title: "Build Computer Labs",
        description:
            "Help establish and sustain computer labs by sponsoring computers, lab infrastructure or technical consultants.",
    },
    {
        title: "Support Career Workshops & Career Fests",
        description:
            "Enable students to discover career opportunities through counselling sessions, workshops and career awareness events.",
    },
    {
        title: "Sponsor Competitions",
        description:
            "Support inter-school competitions that encourage creativity, knowledge, confidence and healthy competition among students.",
    },
    {
        title: "Provide Digital Devices",
        description:
            "Donate or sponsor laptops, desktops and tablets for students and schools that lack access to technology.",
    },
    {
        title: "Sponsor IT Training & Certifications",
        description:
            "Help students gain industry-relevant IT skills and professional certifications that can improve their career opportunities.",
    },
    {
        title: "Support Higher Education",
        description:
            "Sponsor BCA, BBA or other higher-education expenses for deserving students who face financial constraints.",
    },
    {
        title: "Sponsor Student Laptops",
        description:
            "Provide laptops to students pursuing professional courses who cannot afford the equipment required for their education.",
    },
    {
        title: "Create Internship & Job Opportunities",
        description:
            "Organizations can support COMET students by offering internships, project opportunities and entry-level employment.",
    },
];

const leaders = [
    {
        name: "Ram Datt Bhatt",
        role: "Founder & Chairman, COMET Foundation",
        bio: "An MCA postgraduate and IIM Calcutta alumnus, Ram Datt Bhatt brings more than two decades of experience across leading IT organizations. His professional journey includes management roles with companies such as Dell, HPE, Wipro, Infosys, Stanley and ValueLabs. His earlier experience in education and social service, combined with his passion for supporting students and creating sustainable opportunities in the Himalayan region, led to the creation of COMET and its broader social initiatives.",
        initials: "RDB",
        color: "bg-green-900",
    },
    {
        name: "Jeetendra Ranjan",
        role: "Co-Founder & Director, COMET Foundation",
        bio: "A Master of Science in Computer Science and MBA, Jeetendra Ranjan has more than 20 years of experience working with Indian and multinational technology organizations. He contributes to COMET through his technical, management and mentoring expertise, helping strengthen programs designed for students and young professionals. He is also associated with social initiatives supporting education and scholarships for students from weaker sections of society.",
        initials: "JR",
        color: "bg-blue-900",
    },
    {
        name: "Harish Chandra Bhatt",
        role: "Co-Founder & Director, COMET Foundation",
        bio: "A B.Sc. and B.Ed. graduate from Kumaun University, Harish Chandra Bhatt has been actively involved in social causes in the Pithoragarh region for more than two decades. His longstanding commitment to supporting underserved communities and helping people in remote villages inspired him to join COMET and contribute to its education and community-development initiatives.",
        initials: "HCB",
        color: "bg-amber-700",
    },
];

const colorMap: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100 text-blue-700",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
    violet: "bg-violet-50 border-violet-100 text-violet-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
};

const iconBgMap: Record<string, string> = {
    blue: "bg-blue-600",
    emerald: "bg-emerald-600",
    violet: "bg-violet-600",
    amber: "bg-amber-600",
};

export default function CometEducationalServicesPage() {
    return (
        <main className="min-h-screen bg-stone-50 text-slate-800 pt-16">

            {/* ── Hero ── */}
            <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, #4ade80 0%, transparent 50%), radial-gradient(circle at 75% 20%, #0ea5e9 0%, transparent 50%)" }} />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <ScrollReveal direction="up">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-emerald-400" />
                            <p className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em]">CHP Social Impact</p>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
                            About Comet<br />
                            <span className="text-emerald-300">Educational Services</span>
                        </h1>
                        <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl mb-8">
                            COMET Educational Service is a nonprofit initiative that works to bridge the career-development gap
                            for talented students from remote and underserved communities.
                        </p>
                        <p className="text-white/70 text-base leading-relaxed max-w-3xl mb-10">
                            Through career guidance, mentoring, IT and professional skills training, expert-led workshops and a
                            structured learning environment, COMET helps students discover their potential, develop their
                            capabilities and turn their aspirations into success stories.
                        </p>
                        <blockquote className="border-l-4 border-emerald-400 pl-6 text-white/90 text-lg italic font-medium max-w-2xl">
                            "Talent is everywhere. Opportunity should be too."
                        </blockquote>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                        {stats.map((stat, i) => (
                            <ScrollReveal key={stat.label} delay={i * 0.07} direction="up">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-green-900 mb-2">{stat.value}</p>
                                    <p className="text-slate-500 text-sm">{stat.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMET Trainings ── */}
            <section id="trainings" className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="COMET Trainings"
                        title="Building Skills. Building Confidence. Building Careers."
                        subtitle="COMET training programs help students develop the technical, communication and professional skills needed for higher education, employment and career growth. Our training combines IT skills, practical learning and professional development to prepare students for real-world opportunities."
                    />
                    <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
                        {trainings.map((t) => {
                            const Icon = t.icon;
                            return (
                                <StaggerItem key={t.title}>
                                    <div className={`rounded-2xl border p-6 flex flex-col gap-4 h-full ${colorMap[t.color]}`}>
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBgMap[t.color]}`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-slate-800 font-bold text-lg mb-1">{t.title}</h3>
                                            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-3">{t.tagline}</p>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">{t.description}</p>
                                        </div>
                                        <div className="mt-auto">
                                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">Focus Areas</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {t.focus.map((f) => (
                                                    <span key={f} className="bg-white/70 text-slate-700 text-xs px-2.5 py-1 rounded-full border border-slate-200">
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── COMET Services for Schools ── */}
            <section id="schools" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="COMET Services for Schools"
                        title="Empowering Students. Strengthening Schools. Building Careers."
                        subtitle="COMET Services (eCOMET Foundation) is a non-profit initiative focused on helping students from remote and underserved communities access career guidance, mentoring, quality training, and opportunities that may otherwise be limited by geography or financial constraints. We believe talented students exist everywhere. With the right guidance, mentoring, discipline, and exposure, their potential can be transformed into meaningful career opportunities."
                    />
                    <div className="mt-14">
                        <p className="text-slate-700 font-semibold text-lg mb-8 text-center">What We Offer Schools</p>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
                            {schoolServices.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <StaggerItem key={service.title}>
                                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex gap-4 hover:shadow-md transition-shadow duration-300 h-full">
                                            <div className="w-10 h-10 rounded-xl bg-green-900 flex items-center justify-center shrink-0">
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-slate-800 font-bold text-base mb-2">{service.title}</h3>
                                                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* ── COMET Mentorship Program ── */}
            <section id="mentorship" className="py-20 bg-gradient-to-br from-green-950 to-green-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="flex items-center gap-3 mb-4 justify-center">
                            <span className="h-px w-8 bg-emerald-400" />
                            <p className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em]">COMET Mentorship Program</p>
                            <span className="h-px w-8 bg-emerald-400" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 max-w-3xl mx-auto">
                            Mentoring from Class 5 Through Career
                        </h2>
                        <p className="text-white/75 text-center max-w-3xl mx-auto mb-4 leading-relaxed">
                            COMET is expanding its mentorship services to school students, with career guidance planned from
                            Class 5 onwards and preparation support for competitive examinations for students from Class 8 onwards.
                        </p>
                        <p className="text-white/75 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                            The program also focuses on essential life and soft skills designed to support students' overall
                            personal, academic, and career development.
                        </p>
                    </ScrollReveal>
                    <div className="flex flex-wrap justify-center gap-3">
                        {mentorshipSkills.map((skill, i) => (
                            <ScrollReveal key={skill} delay={i * 0.05} direction="up">
                                <span className="bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full">
                                    {skill}
                                </span>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Career Guidance & Mentorship ── */}
            <section id="career-guidance" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <ScrollReveal direction="left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-8 bg-orange-500" />
                                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">Career Guidance & Mentorship</p>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-slate-800">
                                What We Offer
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                The traditional education system in our country does not consider career development aspect in its curriculum.
                                Hence, career counselling services are associated with expensive schools in major cities only.
                                COMET bridges this gap by making career guidance accessible to all.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                The training covers both job-profile-oriented skills and technology-based learning,
                                supported by professionals from the IT industry.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal direction="right">
                            <ul className="space-y-3">
                                {careerGuidanceOfferings.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── COMET Study Centre ── */}
            <section id="study-centre" className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="COMET Study Centre"
                        title="A Disciplined Environment for Learning, Mentoring & Career Growth"
                        subtitle="The COMET Study Centre (CSC) is an economical, residential e-Gurukul-style learning environment designed to help students build strong academic foundations, develop professional skills and work steadily toward their career goals. We believe that students can achieve greater career outcomes when they receive consistent mentoring, structured guidance and a focused study environment over two to three years."
                    />
                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <ScrollReveal direction="left">
                            <div>
                                <h3 className="text-slate-800 font-bold text-xl mb-6">What the COMET Study Centre Offers</h3>
                                <ul className="space-y-3">
                                    {studyCentreFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 w-5 h-5 rounded-full bg-green-900 text-white flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                                            <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right">
                            <div className="bg-green-900 text-white rounded-2xl p-8 flex flex-col gap-6">
                                <GraduationCap className="w-10 h-10 text-emerald-300" />
                                <div>
                                    <h3 className="font-bold text-xl mb-3">More Than a Study Centre</h3>
                                    <p className="text-white/80 leading-relaxed mb-4">
                                        COMET Study Centre combines education, mentoring, discipline, technology and personality
                                        development in one structured environment.
                                    </p>
                                    <p className="text-white/80 leading-relaxed">
                                        The objective is not simply to help students study better, but to help them develop the
                                        knowledge, confidence, communication skills and professional readiness needed to pursue
                                        their future careers.
                                    </p>
                                </div>
                                <div className="border-t border-white/20 pt-5 mt-2">
                                    <p className="text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-3">Our Vision</p>
                                    <p className="text-white font-semibold leading-relaxed">
                                        Create an environment where students can learn, grow, build confidence and prepare
                                        themselves for a successful career.
                                    </p>
                                    <p className="text-emerald-300 font-medium mt-3 text-sm">
                                        COMET Study Centre — Learn. Grow. Prepare. Succeed.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── Career Makeover ── */}
            <section id="career-makeover" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Career Makeover"
                        title="Transforming Potential into Career Opportunities"
                        subtitle="COMET's Career Makeover initiative helps students overcome academic, financial, language and skill-related barriers and move confidently toward higher education and professional careers. Through a combination of technology training, communication skills, mentoring and career guidance, COMET helps students discover pathways that may otherwise seem out of reach."
                    />
                    <p className="text-center text-slate-600 font-semibold text-base mt-4 mb-12">
                        What COMET Helps Students Achieve
                    </p>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
                        {careerMakeoverPathways.map((pathway, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 h-full">
                                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                                        <ArrowRight className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <h3 className="text-slate-800 font-bold text-base mb-2">{pathway.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{pathway.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                    <ScrollReveal direction="up" className="mt-10">
                        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                            <p className="text-amber-800 font-semibold text-base leading-relaxed">
                                Career Makeover is about helping students move from uncertainty to clarity, skills to confidence,
                                and education to employment opportunities.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Adopt-A-School ── */}
            <section id="adopt-a-school" className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal direction="left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-8 bg-orange-500" />
                                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">Adopt-A-School</p>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-slate-800">
                                Transforming Schools Together
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The future of a nation depends upon the quality of education imparted to our children. We believe
                                that it is the joint responsibility of the Government and citizens to improve school education,
                                hence we have begun the process of transforming underprivileged schools by the active involvement
                                of donors, non-government organizations, and corporate sectors through the "COMET — Adopt-A-School Programme".
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                This program is an initiative to develop partnerships between schools, professionals, and organizations.
                                The focus of the program is on identifying and solving problems that affect the quality of education
                                and is grounded in the belief that government, corporates, and individuals can all play a pivotal role
                                in accelerating student and school success.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal direction="right">
                            <div className="bg-gradient-to-br from-green-900 to-emerald-800 rounded-2xl p-8 text-white">
                                <Building2 className="w-10 h-10 text-emerald-300 mb-5" />
                                <h3 className="font-bold text-xl mb-4">Program Focus</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Developing partnerships between schools, professionals, and organizations",
                                        "Identifying and solving problems affecting education quality",
                                        "Enabling government, corporates, and individuals to play a role",
                                        "Accelerating student and school success",
                                        "Technology access for remote schools",
                                        "Career mentoring for underserved students",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                                            <span className="text-white/85 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── Lending a Helping Hand ── */}
            <section id="support" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Lending a Helping Hand"
                        title="Ways You Can Support"
                        subtitle="COMET works with schools, students and communities in underserved and remote areas to create access to education, technology, career guidance and professional opportunities. We invite government organizations, corporates, institutions and individuals to join us in creating meaningful opportunities for students who need them most."
                    />
                    <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
                        {supportWays.map((way, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-green-200 transition-all duration-300 h-full">
                                    <h3 className="text-slate-800 font-bold text-base mb-3">{way.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{way.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                    <ScrollReveal direction="up" className="mt-12">
                        <div className="bg-green-900 text-white rounded-2xl p-8 text-center max-w-3xl mx-auto">
                            <p className="text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-4">Make a Direct Impact</p>
                            <p className="text-white/90 text-lg leading-relaxed mb-2">
                                Your contribution can help a student access a computer, complete a professional course, attend a
                                career workshop, pursue higher education or take the first step toward a career.
                            </p>
                            <p className="text-white/70 mt-4 text-sm">
                                COMET believes that the right support at the right time can change a student&apos;s future.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="up" className="mt-8">
                        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 max-w-3xl mx-auto">
                            <p className="text-amber-800 font-semibold text-sm mb-2">Transparency & Engagement</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We encourage supporters to see the impact of their contributions firsthand. Donors may visit
                                supported schools or facilities, meet students directly, and receive updates, photographs and videos
                                from sponsored programs and events.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Change Leaders ── */}
            <section id="leaders" className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Our Change Leaders"
                        title="People Behind the COMET Mission"
                        subtitle="COMET is driven by professionals and social leaders who combine industry experience, education, mentorship and a commitment to community development. Our Change Leaders bring decades of experience across the IT industry, education and social initiatives. Together, they work to create better career opportunities for students, support underserved communities and contribute to sustainable development."
                    />
                    <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
                        {leaders.map((leader) => (
                            <StaggerItem key={leader.name}>
                                <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-5">
                                    <div className={`w-16 h-16 rounded-2xl ${leader.color} flex items-center justify-center`}>
                                        <span className="text-white font-bold text-xl">{leader.initials}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-slate-800 font-bold text-lg mb-1">{leader.name}</h3>
                                        <p className="text-green-700 text-xs font-semibold uppercase tracking-wide mb-4">{leader.role}</p>
                                        <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
