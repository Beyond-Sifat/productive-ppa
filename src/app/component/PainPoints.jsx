import Image from "next/image";

const painPoints = [
    {
        id: 1,
        image: "/image/1stpain.jpg",
        alt: "Person struggling to focus",

    },
    {
        id: 2,
        image: "/image/2ndpain.jpg",
        alt: "Person feeling overwhelmed",
    },
    {
        id: 3,
        image: "/image/3rdpain.jpg",
        alt: "Person procrastinating",
    },
];
const painPoints2 = [
    {
        id: 1,
        image: "/image/trained1.jpg",
        alt: "Person struggling to focus",

    },
    {
        id: 2,
        image: "/image/trained2.jpg",
        alt: "Person feeling overwhelmed",

    },
    {
        id: 3,
        image: "/image/trained3.jpg",
        alt: "Person procrastinating",

    },
];

// ─── Student Avatars (social proof) ──────────────────────────────────────────
const studentAvatars = [
    { id: 1, src: "/image/avater1.jpg", alt: "Student 1" },
    { id: 2, src: "/image/avater2.jpg", alt: "Student 2" },
    { id: 3, src: "/image/avater3.jpg", alt: "Student 3" },
];

export default function PainPoints() {
    return (
        <section className="max-w-7xl mx-auto py-20 mobile:py-14 tablet:py-20 desktop:py-24">
            <div className="max-w-7xl mx-auto px-5 mobile:px-5 tablet-sm:px-8 tablet:px-12 desktop:px-16">


                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2466F2]/40 bg-[#2466F2]/10 px-3 py-1 text-xs font-medium text-[#2466F2]">

                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <circle cx="5" cy="5" r="5" fill="#2466F2" opacity="0.3" />
                            <circle cx="5" cy="5" r="2.5" fill="#2466F2" />
                        </svg>
                        Are Distractions Holding You Back?
                    </span>
                </div>


                <h2 className="
          mt-5 text-center font-bold leading-tight tracking-tight
          text-[1.75rem] mobile:text-[1.75rem] tablet-sm:text-[2rem] tablet:text-[2.5rem] desktop:text-[3rem]
          text-black dark:text-white
          max-w-2xl mx-auto
        ">
                    If you struggle to focus, feel overwhelmed by endless tasks, or procrastinate instead of making progress, you&apos;re not alone.
                </h2>


                <div className="mt-10 flex justify-center gap-3">
                    {painPoints.map((point) => (
                        <div
                            key={point.id}
                            className="w-[118px] h-[120px] rounded-2xl overflow-hidden"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={point.image}
                                    alt={point.alt}
                                    fill
                                    className="rounded-2xl object-cover object-center"
                                />
                            </div>
                        </div>
                    ))}
                </div>



                <div className="
  mt-14
  grid gap-0
  mobile:grid-cols-1
  desktop:grid-cols-2
  rounded-2xl overflow-hidden
  border border-gray-200 dark:border-white/10
  bg-gray-50 dark:bg-white/5
">
                    <div className="hidden desktop:block relative w-lg h-full">
                        <Image
                            src="/image/mainStudent.png"
                            alt="Instructor working focused at desk"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="relative flex flex-col justify-between p-7 mobile:p-5 tablet:p-8 gap-6">


                        <div className="absolute top-6 right-6 flex items-center gap-2 mobile:static mobile:mb-4 tablet:static tablet:mb-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2466F2]/40 bg-[#2466F2]/10 px-3 py-1 text-xs font-medium text-[#2466F2] w-fit">
                                No worries
                            </span>
                            <div className="flex -space-x-2">
                                {studentAvatars.map((avatar) => (
                                    <div
                                        key={avatar.id}
                                        className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-[#0B0F19]"
                                    >
                                        <Image
                                            src={avatar.src}
                                            alt={avatar.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                Join with 5k+ other students
                            </span>
                        </div>


                        <div className="flex flex-col justify-center">



                            <p className="mt-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-xs">
                                The ability to concentrate deeply is the ultimate productivity hack.
                            </p>

                            <p className="mt-4 text-lg font-semibold leading-snug text-black dark:text-white max-w-xs">
                                And fortunately it&apos;s a skill you can train & develop.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 mt-6 flex-wrap mobile:justify-center tablet:justify-start">
                            {painPoints2.map((point) => (
                                <div
                                    key={point.id}
                                    className="relative w-[80px] h-[80px] rounded-xl overflow-hidden"
                                >
                                    <Image
                                        src={point.image}
                                        alt={point.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}