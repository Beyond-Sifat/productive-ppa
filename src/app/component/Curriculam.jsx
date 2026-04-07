"use client";

import { useState } from "react";

const modules = [
  {
    id: 1,
    title: "Module 1: Foundations of Deep Work",
    duration: "4 hr of video",
    expanded: true,
    lessons: [
      { title: "Understanding Focus & Distraction", tag: "Preview", duration: "18:05" },
      { title: "The Science Behind Deep Work", tag: null, duration: "22:10" },
      { title: "Shifting Your Productive As Habits", tag: null, duration: "19:43" },
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
  "Principles & Strategies-Core deep work techniques",
  "Live Sessions-Apply skills in real-time",
  "Exclusive Community-Connect with others",
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
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_6466_841)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 0.833496C7.62578 0.833496 7.32099 0.990903 7.04365 1.20255C6.78385 1.40076 6.49729 1.68733 6.16204 2.02261L6.13846 2.04619C5.79536 2.3893 5.49625 2.52434 5.03464 2.52434C4.97679 2.52434 4.90378 2.52228 4.82133 2.51996C4.60998 2.51402 4.33657 2.50632 4.09735 2.52701C3.74744 2.55727 3.31013 2.65302 2.97822 2.98772C2.64885 3.31986 2.55543 3.75538 2.52607 4.10309C2.50607 4.34013 2.51375 4.6115 2.51969 4.82135C2.52203 4.90402 2.52411 4.97716 2.52411 5.03487C2.52411 5.49648 2.38906 5.7956 2.04593 6.13872L2.02237 6.16229C1.68709 6.49754 1.40051 6.7841 1.20231 7.04383C0.990665 7.32123 0.833259 7.62603 0.833252 8.00016C0.833259 8.37423 0.990672 8.67903 1.20231 8.95643C1.40055 9.2163 1.68719 9.5029 2.02255 9.83823L2.04596 9.86163C2.2684 10.084 2.37333 10.2283 2.4328 10.3644C2.49071 10.497 2.52411 10.6649 2.52411 10.9654C2.52411 11.0233 2.52205 11.0963 2.51973 11.1788C2.51379 11.3901 2.50609 11.6635 2.52678 11.9028C2.55705 12.2526 2.65281 12.69 2.98751 13.0219C3.31966 13.3512 3.75517 13.4446 4.10287 13.474C4.3399 13.494 4.61127 13.4863 4.82111 13.4804C4.90379 13.478 4.97692 13.476 5.03463 13.476C5.32877 13.476 5.49409 13.5056 5.62422 13.5592C5.75423 13.6129 5.89329 13.709 6.10274 13.9184C6.14744 13.9631 6.20634 14.0262 6.27427 14.099C6.42758 14.2634 6.62706 14.4772 6.81325 14.6399C7.09572 14.8868 7.50098 15.1668 7.99992 15.1668C8.49892 15.1668 8.90412 14.8868 9.18665 14.6399C9.37278 14.4772 9.57212 14.2636 9.72538 14.0992C9.79338 14.0263 9.85239 13.9632 9.89712 13.9184C10.1065 13.709 10.2456 13.6129 10.3756 13.5592C10.5057 13.5056 10.6711 13.476 10.9652 13.476C11.0229 13.476 11.0961 13.478 11.1787 13.4804C11.3886 13.4863 11.6599 13.494 11.897 13.474C12.2447 13.4446 12.6802 13.3512 13.0123 13.0219C13.3471 12.69 13.4428 12.2526 13.4731 11.9028C13.4937 11.6635 13.4861 11.3901 13.4801 11.1788C13.4778 11.0964 13.4757 11.0232 13.4757 10.9654C13.4757 10.6649 13.5091 10.497 13.5671 10.3644C13.6265 10.2283 13.7315 10.084 13.9539 9.86163L13.9773 9.83823C14.3127 9.5029 14.5993 9.2163 14.7975 8.95643C15.0092 8.67903 15.1666 8.37423 15.1666 8.00016C15.1666 7.62603 15.0092 7.32123 14.7975 7.04383C14.5993 6.7841 14.3128 6.49754 13.9775 6.16231L13.9539 6.13872C13.7315 5.91627 13.6265 5.77202 13.5671 5.63586C13.5091 5.50328 13.4757 5.33542 13.4757 5.03487C13.4757 4.97706 13.4778 4.90412 13.4801 4.82174C13.4861 4.61038 13.4937 4.3368 13.4731 4.0976C13.4428 3.74769 13.3471 3.31038 13.0124 2.97848C12.6803 2.64909 12.2447 2.55566 11.897 2.5263C11.6599 2.50629 11.3886 2.51398 11.1787 2.51992C11.0961 2.52226 11.0229 2.52434 10.9652 2.52434C10.5035 2.52434 10.2044 2.38924 9.86138 2.04619L9.83778 2.02262C9.50252 1.68733 9.21598 1.40076 8.95618 1.20255C8.67885 0.990903 8.37405 0.833496 7.99992 0.833496ZM10.5104 6.7623C10.7472 6.48038 10.7107 6.05986 10.4287 5.82304C10.1468 5.58622 9.72625 5.62279 9.48945 5.90472L7.13138 8.7119L6.44394 8.0981C6.16929 7.8529 5.74785 7.87676 5.50263 8.15143C5.25741 8.42603 5.28127 8.8475 5.55591 9.0927L6.75592 10.1642C6.89038 10.2842 7.06779 10.3447 7.24765 10.3318C7.42745 10.3189 7.59445 10.2337 7.71038 10.0956L10.5104 6.7623Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6466_841">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
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