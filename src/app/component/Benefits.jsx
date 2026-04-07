"use client";
export default function Benefits() {
    const benefits = [
        {
            id: 1,
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 10a5 5 0 01-4-2c.02-1.33 2.67-2 4-2s3.98.67 4 2a5 5 0 01-4 2z" fill="#2466F2" />
                </svg>
            ),
            title: "Develop laser-sharp focus & eliminate distractions.",
            description:
                "Learn proven systems to block distractions and enter a deep focus state on demand.",
        },
        {
            id: 2,
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3v10" stroke="#2466F2" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: "Master deep work techniques for smarter productivity.",
            description:
                "Apply science-backed methods that let you produce more output in less time.",
        },
        {
            id: 3,
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#2466F2" strokeWidth="2" />
                    <path d="M8 5v4l2.5 2.5" stroke="#2466F2" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            title: "Overcome procrastination & get more done.",
            description:
                "Break the cycle of delay with actionable frameworks that build unstoppable momentum.",
        },
        {
            id: 4,
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 13l4-4 3 3 5-7" stroke="#2466F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Build lasting habits for long-term success.",
            description:
                "Design your environment and routines so focus becomes automatic — not a struggle.",
        },
    ];

    return (
        <section id="overview" className="w-full bg-white dark:bg-[#0A0A0A] py-16 tablet:py-20 desktop:py-24">
            <div className="max-w-7xl mx-auto px-5 mobile:px-5 tablet-sm:px-8 tablet:px-12 desktop:px-16 flex flex-col items-center">

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2466F2]/40 bg-[#2466F2]/10 px-3 py-1 text-xs font-medium text-[#2466F2]">
                    The Deep Focus Blueprint
                </span>

                <h2 className="
          mt-5 text-center font-bold leading-tight tracking-tight
          text-[1.6rem] mobile:text-[1.6rem] tablet-sm:text-[2rem] tablet:text-[2.4rem] desktop:text-[2.8rem]
          text-black dark:text-white
          max-w-xl
        ">
                    A self-paced, results-driven course designed to help you
                </h2>

                <div className="mt-14 flex flex-col items-center w-full max-w-lg">
                    {benefits.map((item, index) => (
                        <div key={item.id} className="flex gap-6 w-full">

                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2466F2]/10 border border-[#2466F2]/30 shrink-0 z-10">
                                    {item.icon}
                                </div>
                                {index < benefits.length - 1 && (
                                    <div className="w-px flex-1 mt-1 mb-1 bg-gradient-to-b from-[#2466F2]/40 to-[#2466F2]/05 min-h-[48px]" />
                                )}
                            </div>

                            <div className="pb-10">
                                <h3 className="text-sm font-semibold text-black dark:text-white leading-snug">
                                    {item.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}