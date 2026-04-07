"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Entrepreneur",
    image: "/images/testimonial-1.jpg",
    hasVideo: false,
    text: "Before this course, I was always distracted and procrastinating. Now I can sit down and actually get deep work done. My productivity has tripled and I don't feel exhausted at the end of the day anymore.",
  },
  {
    id: 2,
    name: "Daniel Foster",
    role: "Software Engineer",
    image: "/image/1st.jpg",
    hasVideo: true,
    text: "I never believed how much time I was wasting until I took this course. The deep work techniques helped me ship features faster and actually enjoy my work again.",
  },
  {
    id: 3,
    name: "Mark Davidson",
    role: "Content Creator",
    image: "/image/1st.jpg",
    hasVideo: false,
    text: "This course completely changed how I approach my creative work. I used to spend hours staring at a blank screen. Now I have a system that actually works every single time.",
  },
  {
    id: 4,
    name: "Sara Lin",
    role: "Product Manager",
    image: "/image/2nd.jpg",
    hasVideo: true,
    text: "The procrastination module alone was worth the price. I've recommended this to my entire team. The habit-building frameworks are practical and stick with you long term.",
  },
  {
    id: 5,
    name: "James Okafor",
    role: "Freelance Designer",
    image: "/images/testimonial-5.jpg",
    hasVideo: false,
    text: "I was skeptical at first but the results speak for themselves. My client turnaround time dropped by 40% and I finally have time for personal projects without burning out.",
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
          <br className="mobile:block tablet:hidden" />
          Real People
        </h2>

        {/* ── Subtitle + Nav Row ── */}
        <div className="
          mt-6 flex items-center
          mobile:flex-col mobile:gap-4
          tablet:flex-row tablet:justify-between
        ">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Join with 5K other students
          </p>

          {/* Prev / Next — shadcn Button variant="outline" */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={isPrevDisabled}
              aria-label="Previous"
              className="
                w-8 h-8 rounded-full
                border-gray-300 dark:border-white/20
                text-black dark:text-white
                bg-transparent
                hover:border-[#2466F2] hover:text-[#2466F2] hover:bg-transparent
                dark:hover:border-[#2466F2] dark:hover:text-[#2466F2] dark:hover:bg-transparent
                disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={isNextDisabled}
              aria-label="Next"
              className="
                w-8 h-8 rounded-full
                border-gray-300 dark:border-white/20
                text-black dark:text-white
                bg-transparent
                hover:border-[#2466F2] hover:text-[#2466F2] hover:bg-transparent
                dark:hover:border-[#2466F2] dark:hover:text-[#2466F2] dark:hover:bg-transparent
                disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* ── Slider Track ── */}
        <div className="mt-8 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / 3 + 0.555rem)))`,
            }}
          >
            {testimonials.map((t) => (
              <Card
                key={t.id}
                className="
                  shrink-0 p-0 gap-0
                  w-full
                  mobile:w-full
                  tablet-sm:w-[calc(50%-0.5rem)]
                  desktop:w-[calc(33.333%-0.667rem)]
                  rounded-2xl overflow-hidden
                  border border-gray-200 dark:border-white/10
                  bg-white dark:bg-[#111]
                  shadow-none
                "
              >
                {/* ── Image area ── */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-[#1a1a1a]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-center"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Play button */}
                  {t.hasVideo && (
                    <button
                      aria-label={`Play ${t.name}'s video`}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <span className="
                        w-12 h-12 rounded-full bg-white/90
                        flex items-center justify-center shadow-lg
                        group-hover:scale-110 transition-transform duration-200
                      ">
                        <Play className="w-4 h-4 fill-[#2466F2] text-[#2466F2] ml-0.5" />
                      </span>
                    </button>
                  )}

                  {/* Name + role overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                    <p className="text-sm font-semibold text-white leading-tight">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/70 mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* ── Text ── */}
                <CardContent className="px-4 py-4">
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </CardContent>
              </Card>
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
              className={`
                rounded-full transition-all duration-300
                ${current === i
                  ? "w-5 h-1.5 bg-[#2466F2]"
                  : "w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}