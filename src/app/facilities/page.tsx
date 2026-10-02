"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  Coffee,
  Mountain,
  Users,
  Building2,
  CalendarDays,
  Heart,
  ArrowLeft,
} from "lucide-react";

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white pt-16">

      {/* ======================================================
          HERO / HEADER
          ====================================================== */}

      <section className="relative min-h-[500px] h-[68vh] overflow-hidden">

        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/baa1b671-abe3-4bc1-b818-6cc9500327e8-chp-remote-work-himalayas-header.webp"
          alt="Remote work from the Himalayas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Slightly dark background */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Header text moved higher */}
        <div className="absolute inset-0 flex items-start justify-center px-5 pt-4 text-center sm:pt-6 md:pt-8 lg:pt-10">

          <div className="max-w-5xl">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-block rounded-full bg-green-900 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs"
            >
              Remote Work
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl font-bold uppercase tracking-[0.06em] leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] sm:text-4xl md:text-5xl lg:text-5xl"
            >
              Remote Work from
              <br />
              the Himalayas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.75)] sm:text-base md:text-lg"
            >
              Work, live, connect, and recharge in a Himalayan environment
              designed for the modern remote professional.
            </motion.p>

          </div>

        </div>
      </section>

      {/* ======================================================
          WORK FROM THE HIMALAYA
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-20">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Remote Work from Himalaya
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">
              Work from the Himalaya
            </h2>

            <p className="mt-3 text-lg font-semibold text-green-900 sm:text-xl">
              Work. Stay. Breathe. Reconnect.
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-6">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              What if your next productive workweek came with{" "}
              <strong className="font-bold text-green-800">
                mountain views
              </strong>
              , fresh Himalayan air, peaceful surroundings and a completely
              different environment from the city?
            </p>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              CHP is designed for professionals who want to maintain their{" "}
              <strong className="font-bold text-green-800">
                productivity
              </strong>{" "}
              while enjoying a change of environment. Employees and
              professionals can combine work and the Himalayan experience
              through a dedicated Remote Work from Himalaya program.
            </p>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Whether you are an employee looking for a refreshing place to
              work for a few days, or an employer looking to offer your team a
              meaningful work-from-anywhere benefit, CHP provides a practical
              environment where work and{" "}
              <strong className="font-bold text-green-800">
                Himalayan living
              </strong>{" "}
              can come together.
            </p>

          </div>

          {/* ==================================================
              SUITABLE FOR
              Main container is WHITE.
              ONLY individual text boxes are coloured.
              ================================================== */}

          <div className="mx-auto mt-12 max-w-5xl rounded-3xl bg-white p-7 sm:p-9">

            <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              It can be suitable for:
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {/* Individual coloured text boxes */}

              <div className="rounded-xl bg-green-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-green-700" />
                  IT professionals
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                  Startup founders
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-700" />
                  Entrepreneurs
                </div>
              </div>

              <div className="rounded-xl bg-violet-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-violet-700" />
                  Consultants
                </div>
              </div>

              <div className="rounded-xl bg-orange-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-orange-700" />
                  Freelancers
                </div>
              </div>

              <div className="rounded-xl bg-sky-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-sky-700" />
                  Designers and creatives
                </div>
              </div>

              <div className="rounded-xl bg-emerald-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                  Digital professionals
                </div>
              </div>

              <div className="rounded-xl bg-cyan-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-700" />
                  Teachers and educators
                </div>
              </div>

              <div className="rounded-xl bg-lime-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-lime-700" />
                  Remote employees
                </div>
              </div>

              <div className="rounded-xl bg-rose-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-rose-700" />
                  Independent professionals
                </div>
              </div>

              <div className="rounded-xl bg-teal-50 px-4 py-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-teal-700" />
                  Professionals taking a workation
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          EMPLOYEES & REMOTE PROFESSIONALS
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              For Employees & Remote Professionals
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Make the Himalaya Your Temporary Workplace
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-5xl">

            <div className="rounded-3xl bg-green-50 p-7 sm:p-10">

              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                Have you been working remotely from the same room, the same
                city and the same{" "}
                <strong className="font-bold text-green-800">
                  routine
                </strong>
                ?
              </p>

              <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                Change the environment without putting your work on hold.
                Spend a few days or weeks at CHP and continue working while
                experiencing{" "}
                <strong className="font-bold text-green-800">
                  Himalayan life
                </strong>
                .
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          A TYPICAL REMOTE WORK DAY
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Remote Work Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              A Typical Remote Work Day
            </h2>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Mountain className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Morning
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Wake up to the{" "}
                <strong className="font-bold text-green-800">
                  Himalayan landscape
                </strong>
                . Enjoy breakfast and begin your workday.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Laptop className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Work Hours
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Settle into your{" "}
                <strong className="font-bold text-green-800">
                  work-friendly space
                </strong>{" "}
                and continue your regular meetings, calls and assignments.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Coffee className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Break Time
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Step outside, enjoy the surroundings or take a short walk
                through the{" "}
                <strong className="font-bold text-green-800">
                  Himalayan landscape
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Heart className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Evening
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                When the workday ends, switch from work mode to{" "}
                <strong className="font-bold text-green-800">
                  Himalayan mode
                </strong>
                .
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Enjoy a campfire, local experiences, nature walks, village
                exploration or simply some{" "}
                <strong className="font-bold text-green-800">
                  quiet time
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Weekend
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use your weekend to explore the surrounding Himalaya through{" "}
                <strong className="font-bold text-green-800">
                  treks, trails
                </strong>{" "}
                and curated experiences.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          YOUR OFFICE CAN BE IN THE HIMALAYA
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-sky-50 p-7 sm:p-10 lg:p-12">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Laptop className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-800 sm:text-4xl">
              Your Office Can Be in the Himalaya
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Remote work doesn't always have to mean working from your home.
              Take your laptop to the mountains and experience a different
              rhythm of working—quiet mornings, focused work hours, nature
              around you and the opportunity to explore the{" "}
              <strong className="font-bold text-green-800">
                Himalaya after work
              </strong>
              .
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
              At CHP, you can stay in a comfortable Himalayan environment
              while continuing your regular{" "}
              <strong className="font-bold text-green-800">
                professional responsibilities
              </strong>
              .
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          DESIGNED FOR REMOTE PROFESSIONALS
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Remote Work Facilities
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Designed for Remote Professionals
            </h2>

          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Comfortable accommodation",
              "Dedicated work-friendly spaces",
              "Reliable connectivity for everyday remote work",
              "Peaceful surroundings for focused work",
              "Meals and hospitality options",
              "Nature, fresh air and Himalayan landscapes",
              "Opportunities for local exploration after work",
              "Weekend treks, trails and Himalayan experiences",
              "Spaces for individuals, couples, friends and small teams",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/80 p-5"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                  {index + 1}
                </span>

                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  {item}
                </p>
              </div>
            ))}

          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-green-50 px-6 py-7 text-center">

            <p className="text-xl font-bold text-green-900 sm:text-2xl">
              Come for work. Stay for the Himalaya.
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          EMPLOYERS & ORGANIZATIONS
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              For Employers & Organizations
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Give Your Employees the Opportunity to Work from the Himalaya
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-6">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Remote and hybrid work has opened up new possibilities for
              employee{" "}
              <strong className="font-bold text-green-800">
                engagement
              </strong>
              . CHP can provide organizations with a destination where
              employees can work remotely while experiencing the Himalaya.
            </p>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Instead of limiting employee benefits to conventional rewards,
              organizations can offer a Himalayan remote-work experience as
              part of their employee engagement, wellness or{" "}
              <strong className="font-bold text-green-800">
                work-from-anywhere initiatives
              </strong>
              .
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          CORPORATE REMOTE WORK FACILITY
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              A Corporate Remote Work Facility
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Organizations can arrange{" "}
              <strong className="font-bold text-green-800">
                Himalayan work stays
              </strong>{" "}
              for:
            </p>

          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Individual employees",
              "Small teams",
              "Star performers",
              "Project teams",
              "Remote employees",
              "Leadership teams",
              "Distributed teams",
              "Employee wellness programs",
              "Extended work retreats",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-green-50 p-5 text-center"
              >
                <p className="font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-white/70 p-7 sm:p-9">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              The program can be structured around the organization's
              requirements, including{" "}
              <strong className="font-bold text-green-800">
                accommodation, workspace, meals, connectivity
              </strong>{" "}
              and optional Himalayan experiences.
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          FROM WORKATION TO TEAM EXPERIENCE
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              From Workation to Team Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-violet-50 p-7 text-center sm:p-10">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              CHP can also combine remote work with team engagement, creating
              a simple rhythm:
            </p>

            <p className="mt-6 text-2xl font-bold tracking-wide text-green-900 sm:text-3xl">
              Work → Connect → Explore → Recharge
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Employees can work during designated hours and participate in
              curated activities{" "}
              <strong className="font-bold text-green-800">
                outside work hours
              </strong>
              .
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          POSSIBLE TEAM ACTIVITIES
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Possible Team Activities
            </h2>

          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Himalayan nature walks",
              "Treks and trails",
              "Adventure activities",
              "Campfire evenings",
              "Team-building activities",
              "Local village experiences",
              "Cultural experiences",
              "Wellness sessions",
              "Outdoor discussions",
              "Leadership retreats",
              "Weekend Himalayan excursions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/80 p-5"
              >
                <p className="font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          WHY WORK FROM CHP?
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Why Work from CHP?
            </h2>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                A Change of Environment
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Move away from the noise and routine of the city and work in a
                natural{" "}
                <strong className="font-bold text-green-800">
                  Himalayan setting
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Continue Your Work
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Remote work doesn't mean taking time away from your
                responsibilities. Continue your regular work while changing
                your{" "}
                <strong className="font-bold text-green-800">
                  surroundings
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Space to Recharge
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use the mountains, nature and slower surroundings to create
                space between work and everyday{" "}
                <strong className="font-bold text-green-800">
                  urban life
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Connect with People
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Meet fellow professionals, entrepreneurs, travellers and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  communities
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Experience the Himalaya
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Your workday can end with a sunset, nature walk, campfire or
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  exploration
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FLEXIBLE REMOTE WORK MODEL
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              A Flexible Remote Work Model
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              CHP can offer different formats depending on your{" "}
              <strong className="font-bold text-green-800">
                requirement
              </strong>
              .
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Laptop className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Individual Remote Stay
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A professional can book a Himalayan stay and work
                independently from{" "}
                <strong className="font-bold text-green-800">
                  CHP
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Extended Workation
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Stay for several days or weeks while continuing regular{" "}
                <strong className="font-bold text-green-800">
                  remote work
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Building2 className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Corporate Employee Program
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                An organization can sponsor or facilitate Himalayan work
                stays for selected{" "}
                <strong className="font-bold text-green-800">
                  employees
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Team Remote Work Retreat
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A team can combine remote working with team activities and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  experiences
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Mountain className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Work + Weekend Experience
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Work during weekdays and explore the Himalaya during{" "}
                <strong className="font-bold text-green-800">
                  weekends
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          HR & CORPORATE TEAMS
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              For HR & Corporate Teams
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Turn Remote Work into an Employee Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-6">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Organizations can explore CHP as a destination for an employee
              remote-work and{" "}
              <strong className="font-bold text-green-800">
                engagement program
              </strong>
              .
            </p>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Instead of employees working remotely from another city without
              a structured experience, the organization can provide an
              environment designed around:
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-green-50 p-7 text-center sm:p-10">

            <p className="text-xl font-bold text-green-900 sm:text-2xl">
              Accommodation + Work Space + Connectivity + Food + Nature +
              Experiences
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-5xl">

            <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              CHP can work with organizations to develop a program based on:
            </h3>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                "Number of employees",
                "Duration of stay",
                "Work requirements",
                "Accommodation requirements",
                "Workspace requirements",
                "Meal plans",
                "Team activities",
                "Wellness programs",
                "Adventure and exploration options",
                "Weekend excursions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-stone-50 p-5"
                >
                  <p className="font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FROM WORKATION TO TEAM EXPERIENCE
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              From Workation to Team Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-violet-50 p-7 text-center sm:p-10">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              CHP can also combine remote work with team engagement, creating
              a simple rhythm:
            </p>

            <p className="mt-6 text-2xl font-bold tracking-wide text-green-900 sm:text-3xl">
              Work → Connect → Explore → Recharge
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Employees can work during designated hours and participate in
              curated activities{" "}
              <strong className="font-bold text-green-800">
                outside work hours
              </strong>
              .
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          POSSIBLE TEAM ACTIVITIES
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Possible Team Activities
            </h2>

          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Himalayan nature walks",
              "Treks and trails",
              "Adventure activities",
              "Campfire evenings",
              "Team-building activities",
              "Local village experiences",
              "Cultural experiences",
              "Wellness sessions",
              "Outdoor discussions",
              "Leadership retreats",
              "Weekend Himalayan excursions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/80 p-5"
              >
                <p className="font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          WHY WORK FROM CHP?
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Why Work from CHP?
            </h2>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                A Change of Environment
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Move away from the noise and routine of the city and work in a
                natural{" "}
                <strong className="font-bold text-green-800">
                  Himalayan setting
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Continue Your Work
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Remote work doesn't mean taking time away from your
                responsibilities. Continue your regular work while changing
                your{" "}
                <strong className="font-bold text-green-800">
                  surroundings
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Space to Recharge
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use the mountains, nature and slower surroundings to create
                space between work and everyday{" "}
                <strong className="font-bold text-green-800">
                  urban life
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Connect with People
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Meet fellow professionals, entrepreneurs, travellers and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  communities
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Experience the Himalaya
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Your workday can end with a sunset, nature walk, campfire or
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  exploration
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FLEXIBLE REMOTE WORK MODEL
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              A Flexible Remote Work Model
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              CHP can offer different formats depending on your{" "}
              <strong className="font-bold text-green-800">
                requirement
              </strong>
              .
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Laptop className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Individual Remote Stay
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A professional can book a Himalayan stay and work
                independently from{" "}
                <strong className="font-bold text-green-800">
                  CHP
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Extended Workation
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Stay for several days or weeks while continuing regular{" "}
                <strong className="font-bold text-green-800">
                  remote work
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Building2 className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Corporate Employee Program
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                An organization can sponsor or facilitate Himalayan work
                stays for selected{" "}
                <strong className="font-bold text-green-800">
                  employees
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Team Remote Work Retreat
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A team can combine remote working with team activities and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  experiences
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Mountain className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Work + Weekend Experience
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Work during weekdays and explore the Himalaya during{" "}
                <strong className="font-bold text-green-800">
                  weekends
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          HR & CORPORATE TEAMS
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              For HR & Corporate Teams
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Turn Remote Work into an Employee Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-6">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Organizations can explore CHP as a destination for an employee
              remote-work and{" "}
              <strong className="font-bold text-green-800">
                engagement program
              </strong>
              .
            </p>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Instead of employees working remotely from another city without
              a structured experience, the organization can provide an
              environment designed around:
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-green-50 p-7 text-center sm:p-10">

            <p className="text-xl font-bold text-green-900 sm:text-2xl">
              Accommodation + Work Space + Connectivity + Food + Nature +
              Experiences
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-5xl">

            <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              CHP can work with organizations to develop a program based on:
            </h3>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                "Number of employees",
                "Duration of stay",
                "Work requirements",
                "Accommodation requirements",
                "Workspace requirements",
                "Meal plans",
                "Team activities",
                "Wellness programs",
                "Adventure and exploration options",
                "Weekend excursions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-stone-50 p-5"
                >
                  <p className="font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FROM WORKATION TO TEAM EXPERIENCE
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              From Workation to Team Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-violet-50 p-7 text-center sm:p-10">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              CHP can also combine remote work with team engagement, creating
              a simple rhythm:
            </p>

            <p className="mt-6 text-2xl font-bold tracking-wide text-green-900 sm:text-3xl">
              Work → Connect → Explore → Recharge
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Employees can work during designated hours and participate in
              curated activities{" "}
              <strong className="font-bold text-green-800">
                outside work hours
              </strong>
              .
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          POSSIBLE TEAM ACTIVITIES
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Possible Team Activities
            </h2>

          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Himalayan nature walks",
              "Treks and trails",
              "Adventure activities",
              "Campfire evenings",
              "Team-building activities",
              "Local village experiences",
              "Cultural experiences",
              "Wellness sessions",
              "Outdoor discussions",
              "Leadership retreats",
              "Weekend Himalayan excursions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/80 p-5"
              >
                <p className="font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          WHY WORK FROM CHP?
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Why Work from CHP?
            </h2>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                A Change of Environment
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Move away from the noise and routine of the city and work in a
                natural{" "}
                <strong className="font-bold text-green-800">
                  Himalayan setting
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Continue Your Work
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Remote work doesn't mean taking time away from your
                responsibilities. Continue your regular work while changing
                your{" "}
                <strong className="font-bold text-green-800">
                  surroundings
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Space to Recharge
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use the mountains, nature and slower surroundings to create
                space between work and everyday{" "}
                <strong className="font-bold text-green-800">
                  urban life
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Connect with People
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Meet fellow professionals, entrepreneurs, travellers and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  communities
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Experience the Himalaya
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Your workday can end with a sunset, nature walk, campfire or
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  exploration
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FLEXIBLE REMOTE WORK MODEL
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              A Flexible Remote Work Model
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              CHP can offer different formats depending on your{" "}
              <strong className="font-bold text-green-800">
                requirement
              </strong>
              .
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Laptop className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Individual Remote Stay
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A professional can book a Himalayan stay and work
                independently from{" "}
                <strong className="font-bold text-green-800">
                  CHP
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Extended Workation
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Stay for several days or weeks while continuing regular{" "}
                <strong className="font-bold text-green-800">
                  remote work
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Building2 className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Corporate Employee Program
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                An organization can sponsor or facilitate Himalayan work
                stays for selected{" "}
                <strong className="font-bold text-green-800">
                  employees
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Team Remote Work Retreat
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A team can combine remote working with team activities and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  experiences
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Mountain className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Work + Weekend Experience
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Work during weekdays and explore the Himalaya during{" "}
                <strong className="font-bold text-green-800">
                  weekends
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          HR & CORPORATE TEAMS
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              For HR & Corporate Teams
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Turn Remote Work into an Employee Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-6">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Organizations can explore CHP as a destination for an employee
              remote-work and{" "}
              <strong className="font-bold text-green-800">
                engagement program
              </strong>
              .
            </p>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Instead of employees working remotely from another city without
              a structured experience, the organization can provide an
              environment designed around:
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-green-50 p-7 text-center sm:p-10">

            <p className="text-xl font-bold text-green-900 sm:text-2xl">
              Accommodation + Work Space + Connectivity + Food + Nature +
              Experiences
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-5xl">

            <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              CHP can work with organizations to develop a program based on:
            </h3>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                "Number of employees",
                "Duration of stay",
                "Work requirements",
                "Accommodation requirements",
                "Workspace requirements",
                "Meal plans",
                "Team activities",
                "Wellness programs",
                "Adventure and exploration options",
                "Weekend excursions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-stone-50 p-5"
                >
                  <p className="font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FROM WORKATION TO TEAM EXPERIENCE
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              From Workation to Team Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-violet-50 p-7 text-center sm:p-10">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              CHP can also combine remote work with team engagement, creating
              a simple rhythm:
            </p>

            <p className="mt-6 text-2xl font-bold tracking-wide text-green-900 sm:text-3xl">
              Work → Connect → Explore → Recharge
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Employees can work during designated hours and participate in
              curated activities{" "}
              <strong className="font-bold text-green-800">
                outside work hours
              </strong>
              .
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          POSSIBLE TEAM ACTIVITIES
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Possible Team Activities
            </h2>

          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Himalayan nature walks",
              "Treks and trails",
              "Adventure activities",
              "Campfire evenings",
              "Team-building activities",
              "Local village experiences",
              "Cultural experiences",
              "Wellness sessions",
              "Outdoor discussions",
              "Leadership retreats",
              "Weekend Himalayan excursions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/80 p-5"
              >
                <p className="font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          WHY WORK FROM CHP?
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Why Work from CHP?
            </h2>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                A Change of Environment
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Move away from the noise and routine of the city and work in a
                natural{" "}
                <strong className="font-bold text-green-800">
                  Himalayan setting
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Continue Your Work
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Remote work doesn't mean taking time away from your
                responsibilities. Continue your regular work while changing
                your{" "}
                <strong className="font-bold text-green-800">
                  surroundings
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Space to Recharge
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use the mountains, nature and slower surroundings to create
                space between work and everyday{" "}
                <strong className="font-bold text-green-800">
                  urban life
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Connect with People
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Meet fellow professionals, entrepreneurs, travellers and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  communities
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Experience the Himalaya
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Your workday can end with a sunset, nature walk, campfire or
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  exploration
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FLEXIBLE REMOTE WORK MODEL
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              A Flexible Remote Work Model
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              CHP can offer different formats depending on your{" "}
              <strong className="font-bold text-green-800">
                requirement
              </strong>
              .
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Laptop className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Individual Remote Stay
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A professional can book a Himalayan stay and work
                independently from{" "}
                <strong className="font-bold text-green-800">
                  CHP
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Extended Workation
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Stay for several days or weeks while continuing regular{" "}
                <strong className="font-bold text-green-800">
                  remote work
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Building2 className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Corporate Employee Program
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                An organization can sponsor or facilitate Himalayan work
                stays for selected{" "}
                <strong className="font-bold text-green-800">
                  employees
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Team Remote Work Retreat
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A team can combine remote working with team activities and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  experiences
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Mountain className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Work + Weekend Experience
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Work during weekdays and explore the Himalaya during{" "}
                <strong className="font-bold text-green-800">
                  weekends
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          HR & CORPORATE TEAMS
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              For HR & Corporate Teams
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Turn Remote Work into an Employee Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-6">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Organizations can explore CHP as a destination for an employee
              remote-work and{" "}
              <strong className="font-bold text-green-800">
                engagement program
              </strong>
              .
            </p>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Instead of employees working remotely from another city without
              a structured experience, the organization can provide an
              environment designed around:
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-green-50 p-7 text-center sm:p-10">

            <p className="text-xl font-bold text-green-900 sm:text-2xl">
              Accommodation + Work Space + Connectivity + Food + Nature +
              Experiences
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-5xl">

            <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              CHP can work with organizations to develop a program based on:
            </h3>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                "Number of employees",
                "Duration of stay",
                "Work requirements",
                "Accommodation requirements",
                "Workspace requirements",
                "Meal plans",
                "Team activities",
                "Wellness programs",
                "Adventure and exploration options",
                "Weekend excursions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-stone-50 p-5"
                >
                  <p className="font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FROM WORKATION TO TEAM EXPERIENCE
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              From Workation to Team Experience
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-violet-50 p-7 text-center sm:p-10">

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              CHP can also combine remote work with team engagement, creating
              a simple rhythm:
            </p>

            <p className="mt-6 text-2xl font-bold tracking-wide text-green-900 sm:text-3xl">
              Work → Connect → Explore → Recharge
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Employees can work during designated hours and participate in
              curated activities{" "}
              <strong className="font-bold text-green-800">
                outside work hours
              </strong>
              .
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          POSSIBLE TEAM ACTIVITIES
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Possible Team Activities
            </h2>

          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Himalayan nature walks",
              "Treks and trails",
              "Adventure activities",
              "Campfire evenings",
              "Team-building activities",
              "Local village experiences",
              "Cultural experiences",
              "Wellness sessions",
              "Outdoor discussions",
              "Leadership retreats",
              "Weekend Himalayan excursions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/80 p-5"
              >
                <p className="font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          WHY WORK FROM CHP?
          ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Why Work from CHP?
            </h2>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                A Change of Environment
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Move away from the noise and routine of the city and work in a
                natural{" "}
                <strong className="font-bold text-green-800">
                  Himalayan setting
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Continue Your Work
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Remote work doesn't mean taking time away from your
                responsibilities. Continue your regular work while changing
                your{" "}
                <strong className="font-bold text-green-800">
                  surroundings
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Space to Recharge
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use the mountains, nature and slower surroundings to create
                space between work and everyday{" "}
                <strong className="font-bold text-green-800">
                  urban life
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Connect with People
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Meet fellow professionals, entrepreneurs, travellers and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  communities
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Experience the Himalaya
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Your workday can end with a sunset, nature walk, campfire or
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  exploration
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FLEXIBLE REMOTE WORK MODEL
          ====================================================== */}

      <section className="bg-stone-50 py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              A Flexible Remote Work Model
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              CHP can offer different formats depending on your{" "}
              <strong className="font-bold text-green-800">
                requirement
              </strong>
              .
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl bg-green-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Laptop className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Individual Remote Stay
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A professional can book a Himalayan stay and work
                independently from{" "}
                <strong className="font-bold text-green-800">
                  CHP
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Extended Workation
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Stay for several days or weeks while continuing regular{" "}
                <strong className="font-bold text-green-800">
                  remote work
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Building2 className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Corporate Employee Program
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                An organization can sponsor or facilitate Himalayan work
                stays for selected{" "}
                <strong className="font-bold text-green-800">
                  employees
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Team Remote Work Retreat
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A team can combine remote working with team activities and
                Himalayan{" "}
                <strong className="font-bold text-green-800">
                  experiences
                </strong>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Mountain className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Work + Weekend Experience
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Work during weekdays and explore the Himalaya during{" "}
                <strong className="font-bold text-green-800">
                  weekends
                </strong>
                .
              </p>
            </div>

          </div>

        </div>
      </section>
      

      {/* ======================================================
          END
          ====================================================== */}

      <div className="bg-white py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back to Home
        </Link>
      </div>

    </main>
  );
}