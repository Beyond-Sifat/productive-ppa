"use client";
import Image from "next/image";

const footerLinks = [
    { label: "Terms & conditions", href: "#" },
    { label: "Refund policy", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Support", href: "#" },
];

const avatars = [
    { id: 1, image: "/image/avater3.jpg", alt: "Student 1" },
    { id: 2, image: "/image/avater2.jpg", alt: "Student 2" },
    { id: 3, image: "/image/avater1.jpg", alt: "Student 3" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-[#111] dark:border-white/10">


            <div className="max-w-7xl mx-auto p-5 mobile:p-5 tablet-sm:p-8 tablet:px-12 desktop:p-16">
                <div className="py-6 flex items-center mobile:flex-col mobile:gap-5 tablet:flex-row tablet:justify-between
        ">


                    <div className="flex flex-col mobile:items-center tablet:items-start gap-1">
                        <span className="text-3xl font-bold leading-tight text-black dark:text-white">
                            The Deep <br /> Work Blueprint
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Master Focus & Get More Done in Less Time
                        </span>
                    </div>


                    <div className="rounded-2xl bg-[#2466F2] px-4 pt-3 pb-4 flex flex-col gap-15 min-w-[220px] h-full">

                        <div className="flex items-center justify-between">


                            <div className="flex -space-x-2.5">
                                {avatars.map((avatar) => (
                                    <div
                                        key={avatar.id}
                                        className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#2466F2] shrink-0"
                                    >
                                        <Image
                                            src={avatar.image}
                                            alt={avatar.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>


                            <button
                                aria-label="Join now"
                                className=" w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200 shrink-0"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M3 8h10M9 4l4 4-4 4"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                        </div>


                        <p className="text-xs font-medium text-white leading-tight">
                            Join with 5K other students
                        </p>
                    </div>

                </div>
            </div>


            <div className="w-full h-px bg-gray-200 dark:bg-white/10" />


            <div className="max-w-7xl mx-auto px-5 mobile:px-5 tablet-sm:px-8 tablet:px-12 desktop:px-16">
                <div className=" py-4 flex items-center mobile:flex-col mobile:gap-3 mobile:text-center tablet:flex-row tablet:justify-between ">


                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        © Copyright 2024, All Rights Reserved
                    </p>


                    <nav className="flex items-center gap-5 mobile:flex-wrap mobile:justify-center tablet:flex-nowrap">
                        {footerLinks.map((link) => (

                            <a key={link.label}
                                href={link.href}
                                className="text-xs text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200 whitespace-nowrap"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                </div>
            </div>

        </footer>
    );
}