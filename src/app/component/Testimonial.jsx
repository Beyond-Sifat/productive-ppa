"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Freelance Designer",
    avatar: "/image/avater3.jpg",
    bgImage: null,
    hasVideo: false,
    text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
  },
  {
    id: 2,
    name: "Daniel Foster",
    role: "Content Creator",
    avatar: "/image/1stprofile.png",
    bgImage: "/image/1st.jpg",
    hasVideo: true,
    text: "",
  },
  {
    id: 3,
    name: "Mark Davidson",
    role: "Software Developer",
    avatar: "/image/avater2.jpg",
    bgImage: null,
    hasVideo: false,
    text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
  },
  {
    id: 4,
    name: "Tom David",
    role: "Entrepreneur",
    avatar: "/image/2ndprofile.jpg",
    bgImage: "/image/2nd.jpg",
    hasVideo: true,
    text: "",
  },
  {
    id: 5,
    name: "James Okafor",
    role: "Entrepreneur",
    avatar: "/image/trained2.jpg",
    bgImage: null,
    hasVideo: false,
    text: "Procrastination was holding me until now. This course gave me consistent, actionable steps that skyrocketed my output.",
  },
];

const VISIBLE_DESKTOP = 3;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const maxIndex = testimonials.length - VISIBLE_DESKTOP;
  const isPrevDisabled = current === 0;
  const isNextDisabled = current >= maxIndex;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section className="w-full bg-white dark:bg-[#0A0A0A] py-16 tablet:py-20 desktop:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mobile:px-5 tablet-sm:px-8 tablet:px-12 desktop:px-16">

        {/* ── Badge ── */}
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="rounded-full border-[#2466F2]/40 bg-[#2466F2]/10 text-[#2466F2] hover:bg-[#2466F2]/10 px-3 py-1 text-xs font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2466F2] mr-1.5 inline-block" />
            Testimonials
          </Badge>
        </div>

        {/* ── Heading ── */}
        <h2 className="
          mt-5 text-center font-bold leading-tight tracking-tight
          text-[1.6rem] mobile:text-[1.6rem] tablet-sm:text-[2rem] tablet:text-[2.3rem] desktop:text-[2.6rem]
          text-black dark:text-white
        ">
          Real Results from{" "}
          <br />
          Real People
        </h2>

        {/* ── Subtitle + Nav Row ── */}
        <div className="mt-10 flex items-center mobile:flex-col mobile:gap-4 tablet:flex-row tablet:justify-between">
          <p className="text-sm font-medium text-black dark:text-white">
            Join with 5K other students
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={isPrevDisabled}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border-gray-300 dark:border-white/20 text-black dark:text-white bg-transparent hover:border-[#2466F2] hover:text-[#2466F2] hover:bg-transparent dark:hover:border-[#2466F2] dark:hover:text-[#2466F2] dark:hover:bg-transparent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={isNextDisabled}
              aria-label="Next"
              className="w-9 h-9 rounded-full border-gray-300 dark:border-white/20 text-black dark:text-white bg-transparent hover:border-[#2466F2] hover:text-[#2466F2] hover:bg-transparent dark:hover:border-[#2466F2] dark:hover:text-[#2466F2] dark:hover:bg-transparent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* ── Slider Track ── */}
        <div className="mt-5 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / 3 + 0.555rem)))`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="
                  shrink-0
                  w-full mobile:w-full tablet-sm:w-[calc(50%-0.5rem)] desktop:w-[calc(33.333%-0.667rem)]
                  rounded-2xl overflow-hidden relative
                  border border-gray-200 dark:border-white/10
                  min-h-[280px]
                "
              >
                {/* ── CARD TYPE A: Full background image (video cards) ── */}
                {t.bgImage ? (
                  <div className="relative w-full h-full min-h-[280px]">
                    <Image
                      src={t.bgImage}
                      alt={t.name}
                      fill
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        aria-label={`Play ${t.name}'s video`}
                        className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                      >
                        <Play className="w-4 h-4 fill-[#2466F2] text-[#2466F2] ml-0.5" />
                      </button>
                    </div>

                    <div className="absolute top-4 left-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-white/10">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-white/80 mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>

                ) : (
                  /* ── CARD TYPE B: Dark card with avatar + text + name ── */
                  <div className="bg-white dark:bg-[#111] h-full min-h-[280px] p-5 flex flex-col justify-between">

                    {/* Top: small circular avatar */}
                    <div>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-white/10 shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Testimonial text */}
                      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {t.text}
                      </p>
                    </div>

                    {/* Bottom: name + role */}
                    <div className="mt-6 pt-4 ">
                      <p className="text-sm font-semibold text-black dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {t.role}
                      </p>
                    </div>

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot Indicators ── */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${current === i
                ? "w-5 h-1.5 bg-[#2466F2]"
                : "w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}