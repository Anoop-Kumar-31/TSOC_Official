import React, { useState } from "react";
export default function Footer() {

    return (

        < footer className="relative z-10 border-t border-[#c9a96b] bg-black px-5 py-8 backdrop-blur-[2px] sm:px-8 lg:px-12" >

            <div className="mx-auto max-w-[1800px]">

                {/* TOP FOOTER ROW */}

                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between p-5">

                    {/* NAVIGATION */}


                    <div
                        aria-hidden="true"
                        className="absolute left-[41.85%] top-[18%] items-center justify-center lg:flex"
                    >
                        <span className="h-px w-20 bg-linear-to-r from-transparent to-[#c9a96b]/60" />

                        <span className="relative mx-4 flex size-14 items-center justify-center rounded-full border border-[#c9a96b]/50">
                            <span className="absolute inset-2 rounded-full border border-[#c9a96b]/30" />

                            <span className="size-3 rotate-45 border border-[#e0c487] bg-[#030303]" />

                            <span className="absolute h-20 w-px bg-[#c9a96b]/30" />
                            <span className="absolute w-20 h-px bg-[#c9a96b]/30" />
                        </span>

                        <span className="h-px w-20 bg-linear-to-l from-transparent to-[#c9a96b]/60" />
                    </div>

                    <nav
                        aria-label="Footer navigation"
                        className="flex flex-wrap items-center gap-x-6 gap-y-3"
                    >
                        {[
                            ["The World", "#world"],
                            ["The Cast", "#cast"],
                            ["The Chronicle", "#chronicle"],
                            ["Read", "#read"],
                        ].map(([label, href], index) => (
                            <React.Fragment key={label}>
                                {index > 0 && (
                                    <span
                                        aria-hidden="true"
                                        className="hidden size-1 rotate-45 border border-[#c9a96b]/70 sm:block"
                                    />
                                )}

                                <a
                                    href={href}
                                    className="font-[Manrope] text-[8px] uppercase tracking-[0.2em] text-[#cfc5b5] transition-colors duration-300 hover:text-[#e0c487]"
                                >
                                    {label}
                                </a>
                            </React.Fragment>
                        ))}
                    </nav>

                    {/* PLATFORMS + SOCIAL */}

                    <div className="flex flex-wrap items-center gap-5">
                        <a
                            href="https://www.royalroad.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-[Cormorant_Garamond] text-sm text-[#cfc5b5] transition-colors hover:text-[#e0c487]"
                        >
                            Royal Road
                        </a>

                        <span className="size-1 rotate-45 bg-[#c9a96b]/60" />

                        <a
                            href="https://www.wattpad.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-[Cormorant_Garamond] text-sm text-[#cfc5b5] transition-colors hover:text-[#e0c487]"
                        >
                            Wattpad
                        </a>

                        <span className="hidden h-5 w-px bg-white/20 sm:block" />

                        <a
                            href="#instagram"
                            aria-label="Instagram"
                            className="font-[Manrope] text-xs text-[#cfc5b5] transition-colors hover:text-[#e0c487]"
                        >
                            IG
                        </a>

                        <a
                            href="#youtube"
                            aria-label="YouTube"
                            className="font-[Manrope] text-xs text-[#cfc5b5] transition-colors hover:text-[#e0c487]"
                        >
                            YT
                        </a>

                        <a
                            href="#discord"
                            aria-label="Discord"
                            className="font-[Manrope] text-xs text-[#cfc5b5] transition-colors hover:text-[#e0c487]"
                        >
                            DC
                        </a>
                    </div>
                </div>

                {/* BOTTOM FOOTER ROW */}

                <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                    <p className="font-[Cormorant_Garamond] text-xs tracking-[0.03em] text-white/40">
                        © 2026 The Secrets of Chiaroscuro. All rights reserved.
                    </p>

                    <p className="font-[Cormorant_Garamond] text-xs italic tracking-[0.03em] text-white/45">
                        The story has only just begun.
                    </p>
                </div>
            </div>
        </footer >
    )

}
