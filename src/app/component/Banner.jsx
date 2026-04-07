import Image from "next/image";

export default function Banner() {
    return (
        <section className="max-w-7xl mx-auto relative w-full overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-[#2466F2] to-transparent"
                aria-hidden="true"
                style={{
                    maskImage: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
                }}
            >
                <Image
                    src="/image/pattern.png"
                    alt=""
                    fill
                    className="object-cover opacity-30 dark:opacity-20"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 mobile:px-5 tablet-sm:px-8 tablet:px-12 desktop:px-16">

                {/* Top padding */}
                <div className="pt-14 mobile:pt-14 tablet-sm:pt-16 tablet:pt-20 desktop:pt-24" />

                {/* ── Discount Badge ── */}
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#2466F2]/40 bg-[#2466F2]/10 px-3 py-1 text-xs font-medium text-[#2466F2]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M6.5 1L2 7h4l-1 4 5.5-6H6.5l1-4z" fill="#2466F2" />
                        </svg>
                        20% off until 4d : 2h : 43m : 17s
                    </span>
                </div>

                {/* ── Heading ── */}
                <h1 className="
        mt-5
        font-bold leading-tight tracking-tight
        text-[2rem] mobile:text-[2rem] tablet-sm:text-[2.5rem] tablet:text-[3rem] desktop:text-[3.5rem]
        text-black dark:text-white
        text-center
        max-w-2xl mx-auto
    ">
                    Master Focus & Get More Done in Less Time
                </h1>

                {/* ── Description ── */}
                <p className="
        mt-4 leading-relaxed
        text-sm mobile:text-sm tablet:text-base
        text-gray-600 dark:text-gray-400
        text-center
        max-w-sm mx-auto
    ">
                    A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.
                </p>

                {/* ── CTA Buttons ── */}
                <div className="
        mt-7
        flex gap-3
        mobile:flex-col tablet-sm:flex-row
        items-center justify-center
    ">
                    {/* Primary */}
                    <button className="
            rounded-lg bg-[#2466F2] px-6 py-2.5
            text-sm font-semibold text-white
            hover:bg-[#1a50cc] transition-colors duration-200
            mobile:w-full tablet-sm:w-auto
        ">
                        Enroll now
                    </button>

                    {/* Secondary / Ghost */}
                    <button className="
            rounded-lg border border-gray-300 dark:border-gray-600
            bg-transparent
            px-6 py-2.5
            text-sm font-semibold
            text-black dark:text-white
            hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200
            mobile:w-full tablet-sm:w-auto
        ">
                        Curriculum
                    </button>
                </div>

                {/* ── Bottom spacing before image ── */}
                <div className="mt-10 mobile:mt-10 tablet:mt-12 desktop:mt-14" />
            </div>




            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 mobile:px-5 tablet-sm:px-8 tablet:px-12 desktop:px-16 pb-0">
                <div className="relative w-full rounded-2xl overflow-hidden aspect-video mobile:aspect-video tablet:aspect-[16/7]">
                    <Image
                        src="/image/Banner.png"   /* ← 📌 YOUR HERO IMAGE PATH */
                        alt="Instructor introducing the focus course"
                        fill
                        className="object-cover object-center"
                        priority
                    />

                    {/* Play button overlay */}
                    <button
                        aria-label="Play video"
                        className="
              absolute inset-0 flex items-center justify-center
              group
            "
                    >
                        <span className="
              flex items-center justify-center
              w-14 h-14 rounded-full
              bg-white/90 dark:bg-white/80
              shadow-lg
              group-hover:scale-110 transition-transform duration-200
            ">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M6 4l12 6-12 6V4z" fill="#2466F2" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

        </section>
    );
}