// components/CTASection.jsx
//
// 📦 SHADCN COMPONENTS NEEDED:
//   npx shadcn@latest add button
//   npx shadcn@latest add badge
//   npx shadcn@latest add card
//
// No images needed for this section.

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// ── Left side bullet points ───────────────────────────────────────────────────
const features = [
    "All of Video-Step-by-step deep work techniques",
    "Live Video-Count applies to productivity...",
    "Exclusive Community-Connect with others...",
];

// ── Right side bullet points (what's included) ───────────────────────────────
const includes = [
    "All of Video-Step-by-step deep work techniques",
    "Live Video-Count applies to productivity...",
    "Exclusive Community-Connect with others...",
];

export default function CTASection() {
    return (
        <section className="w-full bg-white dark:bg-[#0A0A0A] py-16 tablet:py-20 desktop:py-24">
            <div className="max-w-7xl mx-auto px-5 mobile:px-5 tablet-sm:px-8 tablet:px-12 desktop:px-16">

                {/* ── Outer Card ── */}
                <Card className="
          rounded-2xl overflow-hidden
          border border-gray-200 dark:border-white/10
          bg-gray-50 dark:bg-[#111]
          shadow-none p-0
        ">
                    <div className="
            flex
            mobile:flex-col
            desktop:flex-row
          ">

                        {/* ════════════════════════════════════
                LEFT COLUMN
            ════════════════════════════════════ */}
                        <div className="
              flex-1
              p-7 mobile:p-5 tablet-sm:p-6 tablet:p-8 desktop:p-10
              border-b border-gray-200 dark:border-white/10
              desktop:border-b-0 desktop:border-r
            ">

                            {/* Badge */}
                            <Badge
                                variant="outline"
                                className="
                  rounded-full
                  border-[#2466F2]/40 bg-[#2466F2]/10
                  text-[#2466F2] text-xs font-medium
                  px-3 py-1
                  hover:bg-[#2466F2]/10
                "
                            >
                                Financing
                            </Badge>

                            {/* Title */}
                            <h2 className="
                mt-4
                font-bold leading-tight tracking-tight
                text-[1.4rem] mobile:text-[1.4rem] tablet-sm:text-[1.6rem] tablet:text-[1.8rem] desktop:text-[2rem]
                text-black dark:text-white
              ">
                                The Deep Work Blueprint
                            </h2>

                            {/* Subtitle */}
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Whatever your budget, it gets to you now.
                            </p>

                            {/* Divider */}
                            <div className="mt-6 h-px w-full bg-gray-200 dark:bg-white/10" />

                            {/* Feature Bullets — LEFT */}
                            <ul className="mt-6 flex flex-col gap-3">
                                {features.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        {/* Blue check circle */}
                                        <span className="
                      mt-0.5 shrink-0
                      w-4 h-4 rounded-full
                      bg-[#2466F2]/10 border border-[#2466F2]/30
                      flex items-center justify-center
                    ">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.666 1.42897L20.416 5.40897L20.512 5.47197L20.605 5.54997L20.711 5.62397C21.086 5.90492 21.3952 6.26434 21.617 6.67714C21.8388 7.08994 21.9678 7.54617 21.995 8.01397L22 8.21798V15.502C22 16.677 21.357 17.758 20.377 18.295L13.573 22.597C12.593 23.135 11.407 23.135 10.373 22.565L3.678 18.328C3.171 18.0502 2.74784 17.6414 2.45269 17.1444C2.15753 16.6473 2.0012 16.0801 2 15.502V8.21697C2 7.11097 2.57 6.08897 3.476 5.51197L10.426 1.41397C11.426 0.861975 12.64 0.861975 13.666 1.42897ZM12 7.99997C11.7348 7.99997 11.4804 8.10533 11.2929 8.29287C11.1054 8.4804 11 8.73476 11 8.99997V11H9C8.75507 11 8.51866 11.0899 8.33563 11.2527C8.15259 11.4154 8.03566 11.6397 8.007 11.883L8 12C8 12.2652 8.10536 12.5195 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13H11V15C11 15.2449 11.09 15.4813 11.2527 15.6643C11.4155 15.8474 11.6397 15.9643 11.883 15.993L12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5195 13 15.2652 13 15V13H15C15.2449 12.9999 15.4813 12.91 15.6644 12.7473C15.8474 12.5845 15.9643 12.3602 15.993 12.117L16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1053 15.2652 11 15 11H13V8.99997C13 8.75504 12.91 8.51864 12.7473 8.3356C12.5845 8.15257 12.3603 8.03563 12.117 8.00697L12 7.99997Z" fill="white" />
                                            </svg>

                                        </span>
                                        <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* ════════════════════════════════════
                RIGHT COLUMN
            ════════════════════════════════════ */}
                        <div className="
              desktop:w-[340px] desktop:shrink-0
              p-7 mobile:p-5 tablet-sm:p-6 tablet:p-8 desktop:p-10
              flex flex-col
            ">

                            {/* Price Row */}
                            <div className="flex items-center gap-3 flex-wrap">
                                {/* Current price */}
                                <span className="
                  text-[2rem] font-bold leading-none
                  text-black dark:text-white
                ">
                                    $349
                                </span>

                                {/* Old price strikethrough */}
                                <span className="
                  text-base font-medium line-through
                  text-gray-400 dark:text-gray-500
                ">
                                    $500
                                </span>

                                {/* Discount badge — green pill */}
                                <span className="
                  inline-flex items-center
                  rounded-full px-2.5 py-0.5
                  text-xs font-semibold
                   bg-[#2466F2] text-white
                  border border-emerald-500/25
                ">
                                    30% off
                                </span>
                            </div>

                            {/* Offer expiry */}
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                30% off until 4d : 2h : 43m : 17s
                            </p>

                            {/* Divider */}
                            <div className="mt-6 h-px w-full bg-gray-200 dark:bg-white/10" />

                            {/* What's included bullets — RIGHT */}
                            <ul className="mt-6 flex flex-col gap-3">
                                {includes.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#2466F2]/10 border border-[#2466F2]/30 flex items-center justify-center">


                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C11.4388 1.25 10.9816 1.48611 10.5656 1.80358C10.1759 2.10089 9.74606 2.53075 9.24319 3.03367L9.20782 3.06904C8.69316 3.5837 8.24449 3.78626 7.55208 3.78626C7.4653 3.78626 7.35579 3.78318 7.23212 3.7797C6.91509 3.77078 6.50497 3.75924 6.14615 3.79027C5.62128 3.83566 4.96532 3.97929 4.46745 4.48134C3.9734 4.97955 3.83327 5.63282 3.78923 6.15439C3.75922 6.50995 3.77075 6.91701 3.77966 7.23178C3.78317 7.35578 3.78628 7.46549 3.78628 7.55206C3.78628 8.24448 3.58371 8.69315 3.06902 9.20784L3.03367 9.24319C2.53075 9.74606 2.10089 10.1759 1.80358 10.5655C1.48612 10.9816 1.25001 11.4388 1.25 12C1.25001 12.5611 1.48613 13.0183 1.80358 13.4344C2.10095 13.8242 2.53091 14.2541 3.03395 14.7571L3.06906 14.7922C3.40272 15.1258 3.56011 15.3422 3.64932 15.5464C3.73619 15.7453 3.78628 15.9971 3.78628 16.4479C3.78628 16.5347 3.7832 16.6442 3.77972 16.7679C3.7708 17.0849 3.75926 17.495 3.79029 17.8539C3.83569 18.3787 3.97933 19.0347 4.48139 19.5326C4.97961 20.0266 5.63287 20.1667 6.15443 20.2107C6.50997 20.2408 6.91703 20.2292 7.23179 20.2203C7.35581 20.2168 7.4655 20.2137 7.55206 20.2137C7.99328 20.2137 8.24126 20.2581 8.43645 20.3386C8.63147 20.4191 8.84006 20.5632 9.15424 20.8774C9.22129 20.9444 9.30963 21.0391 9.41153 21.1483C9.64149 21.3948 9.94071 21.7155 10.22 21.9596C10.6437 22.33 11.2516 22.75 12 22.75C12.7485 22.75 13.3563 22.33 13.7801 21.9596C14.0593 21.7155 14.3583 21.3951 14.5882 21.1486C14.6902 21.0392 14.7787 20.9445 14.8458 20.8773C15.1599 20.5632 15.3685 20.4191 15.5635 20.3386C15.7587 20.2581 16.0067 20.2137 16.4479 20.2137C16.5345 20.2137 16.6442 20.2168 16.7682 20.2203C17.083 20.2292 17.49 20.2408 17.8456 20.2107C18.3671 20.1667 19.0204 20.0266 19.5186 19.5326C20.0207 19.0347 20.1643 18.3787 20.2097 17.8539C20.2407 17.495 20.2292 17.0849 20.2203 16.7679C20.2168 16.6443 20.2137 16.5346 20.2137 16.4479C20.2137 15.9971 20.2638 15.7453 20.3507 15.5464C20.4399 15.3422 20.5973 15.1258 20.9309 14.7922L20.9661 14.7571C21.4691 14.2541 21.8991 13.8242 22.1964 13.4344C22.5139 13.0183 22.75 12.5611 22.75 12C22.75 11.4388 22.5139 10.9816 22.1964 10.5655C21.8991 10.1759 21.4693 9.74607 20.9664 9.24322L20.931 9.20784C20.5973 8.87416 20.4399 8.65779 20.3507 8.45354C20.2638 8.25468 20.2137 8.00288 20.2137 7.55206C20.2137 7.46534 20.2168 7.35593 20.2203 7.23236C20.2292 6.91533 20.2407 6.50496 20.2097 6.14615C20.1643 5.62129 20.0207 4.96533 19.5187 4.46747C19.0205 3.97339 18.3672 3.83325 17.8456 3.78921C17.49 3.75919 17.083 3.77072 16.7682 3.77964C16.6442 3.78315 16.5345 3.78626 16.4479 3.78626C15.7553 3.78626 15.3067 3.58361 14.7922 3.06904L14.7568 3.03368C14.2539 2.53075 13.8241 2.10089 13.4344 1.80358C13.0184 1.48611 12.5612 1.25 12 1.25ZM15.7657 10.1432C16.1209 9.72033 16.0661 9.08954 15.6432 8.73432C15.2203 8.37909 14.5895 8.43394 14.2343 8.85683L10.6972 13.0676L9.66603 12.1469C9.25406 11.7791 8.6219 11.8149 8.25407 12.2269C7.88624 12.6388 7.92202 13.271 8.33399 13.6388L10.134 15.246C10.3357 15.4261 10.6018 15.5168 10.8716 15.4975C11.1413 15.4781 11.3918 15.3503 11.5657 15.1432L15.7657 10.1432Z" fill="white" />
                                            </svg>

                                        </span>
                                        <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Spacer pushes button to bottom */}
                            <div className="flex-1" />

                            {/* CTA Button */}
                            <Button
                                className="
                  mt-8 w-full rounded-lg
                  bg-[#2466F2] hover:bg-[#1a50cc]
                  text-white font-semibold text-sm
                  py-5
                  transition-colors duration-200
                  border-0
                "
                            >
                                Enroll now
                            </Button>

                        </div>

                    </div>
                </Card>

            </div>
        </section>
    );
}