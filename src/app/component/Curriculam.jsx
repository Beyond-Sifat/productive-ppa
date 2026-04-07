"use client";

import { useState } from "react";

// ── Module Data ───────────────────────────────────────────────────────────────
const modules = [
  {
    id: 1,
    title: "Module 1: Foundations of Deep Work",
    duration: "4 hr of video",
    expanded: true,
    lessons: [
      { title: "Understanding Focus & Distraction", tag: "Preview", duration: "18:05" },
      { title: "The Science Behind Deep Work",      tag: null,      duration: "22:10" },
      { title: "Shifting Your Productive As Habits",tag: null,      duration: "19:43" },
      { title: "How to Strengthen Your Attentive Style", tag: null, duration: "21:33" },
    ],
  },
  {
    id: 2,
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1 hr of video",
    expanded: false,
    lessons: [],
  },
  {
    id: 3,
    title: "Module 3: Eliminating Procrastination",
    duration: "1 hr of video",
    expanded: false,
    lessons: [],
  },
  {
    id: 4,
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1 hr of video",
    expanded: false,
    lessons: [],
  },
];

const cardFeatures = [
  "Principles & Strategies – Core deep work techniques",
  "Live Sessions – Apply skills in real-time",
  "Exclusive Community – Connect with others",
];



export default function Curriculum() {
  const [openModule, setOpenModule] = useState(1);

  const toggle = (id) => setOpenModule(openModule === id ? null : id);

  return (
    <section id="curriculum" className="w-full bg-white dark:bg-[#0A0A0A] py-16 tablet:py-20 desktop:py-24">
      <div className="max-w-7xl mx-auto px-5 mobile:px-5 tablet-sm:px-8 tablet:px-12 desktop:px-16">

  
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2466F2]/40 bg-[#2466F2]/10 px-3 py-1 text-xs font-medium text-[#2466F2]">
            Course Curriculum
          </span>
        </div>


        <h2 className="
          mt-5 text-center font-bold leading-tight tracking-tight
          text-[1.6rem] mobile:text-[1.6rem] tablet-sm:text-[2rem] tablet:text-[2.3rem] desktop:text-[2.6rem]
          text-black dark:text-white
          max-w-2xl mx-auto
        ">
          Mastering Deep Work: A Structured Path to Peak Productivity
        </h2>

        <div className="
          mt-12 flex gap-6
          mobile:flex-col
          desktop:flex-row desktop:items-start
        ">

    
          <div className="flex-1 flex flex-col gap-3">
            {modules.map((mod) => {
              const isOpen = openModule === mod.id;
              return (
                <div
                  key={mod.id}
                  className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] overflow-hidden"
                >
              
                  <button
                    onClick={() => toggle(mod.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left group"
                  >
                    <div className="flex items-center gap-3">
                 
                      <span className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-200 ${isOpen ? "bg-[#2466F2]" : "bg-gray-400 dark:bg-gray-600"}`} />
                      <div>
                        <p className="text-sm font-semibold text-black dark:text-white leading-snug">
                          {mod.title}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                          {mod.duration}
                        </p>
                      </div>
                    </div>

                    
                    <svg
                      width="18" height="18" viewBox="0 0 18 18" fill="none"
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="text-gray-500 dark:text-gray-400"
                      />
                    </svg>
                  </button>

                
                  {isOpen && mod.lessons.length > 0 && (
                    <div className="border-t border-gray-100 dark:border-white/5 divide-y divide-gray-100 dark:divide-white/5">
                      {mod.lessons.map((lesson, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-5 py-3 gap-4"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                           
                            <div className="shrink-0 w-7 h-7 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center bg-gray-50 dark:bg-white/5">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M3 2l5 3-5 3V2z" fill="#2466F2" />
                              </svg>
                            </div>
                            <span className="text-xs text-gray-700 dark:text-gray-300 truncate">
                              {lesson.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {lesson.tag && (
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#2466F2]/10 text-[#2466F2] border border-[#2466F2]/20">
                                {lesson.tag}
                              </span>
                            )}
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="
            desktop:w-[340px] desktop:shrink-0 desktop:sticky desktop:top-24
          ">
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] overflow-hidden">

              {/* ── Card Body ── */}
              <div className="p-5 mx-5">
                <p className="text-lg font-medium text-black dark:text-white uppercase tracking-wide my-10">
                  Not only video lessons!
                </p>

                <ul className="mt-4 flex flex-col gap-3">
                  {cardFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#2466F2]/10 border border-[#2466F2]/30 flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="#2466F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="
                  mt-6 w-full rounded-lg bg-[#2466F2] py-2.5 px-4
                  text-sm font-semibold text-white
                  hover:bg-[#1a50cc] transition-colors duration-200
                ">
                  Enroll now
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}