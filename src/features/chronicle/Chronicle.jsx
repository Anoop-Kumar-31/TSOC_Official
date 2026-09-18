

const Chronicle = () => {

    return (
        <section id="chronicle" className="relative isolate overflow-hidden bg-[#030303] text-[#eee5d5] h-fit ">

            {/* =====================================================
                CHRONICLE BACKGROUND
            ====================================================== */}

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-[url('/images/chronicle-card1.png')] bg-cover bg-center bg-no-repeat w-full"
            />

            {/* CENTER DARKENING */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.3)_28%,rgba(0,0,0,0.78)_50%,rgba(0,0,0,0.45)_72%,rgba(0,0,0,0.12)_100%)]"
            />

            {/* GENERAL VIGNETTE */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.15)_100%)]"
            />

            {/* TOP Darkening */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black via-black/40 to-transparent h-5/20"
            />

            {/* =====================================================
                CHRONICLE
            ====================================================== */}

            <div className="relative z-10 mx-auto w-full px-5 py-5">

                {/* SECTION HEADER */}

                <div className="mb-1 flex items-center gap-5 sm:mb-2 mx-4">
                    <h2 className="shrink-0 font-[Cormorant_Garamond] text-[clamp(28px,2vw,52px)] font-medium uppercase leading-none tracking-[0.08em] text-[#eee5d5] [text-shadow:0_3px_12px_rgb(0_0_0_/_0.9)]">
                        The Chronicle
                    </h2>

                    <span className="h-px flex-1 bg-linear-to-r from-[#c9a96b] via-[#c9a96b]/70 to-transparent" />

                    <span className="hidden font-[Manrope] text-[10px] uppercase tracking-[0.35em]  sm:block mr-4">
                        History Bleeds Forward.
                    </span>
                </div>

                {/* =================================================
                    BOOK / STORY / CTA
                ================================================== */}

                <div className="grid min-h-[430px] items-center lg:grid-cols-[0.7fr_1.3fr]">

                    {/* LEFT — BOOK SPACE
                        The actual book is already in chronicle-card.png.
                        Keep this column intentionally empty.
                    */}

                    <div className="hidden lg:block" />

                    {/* CENTER — STORY INFORMATION */}


                    <div className="flex w-full">
                        <div className="max-w-xl px-2 py-2 lg:px-4">

                            <p className=" font-[Manrope] text-display perspective-distant origin-center rotate-x-3 bg-linear-to-b from-[#ffffff] via-[#ead8bd] via-55% to-[#9b7d5b] bg-clip-text text-3xl leading-[0.82] tracking-[0.055em] text-transparent">
                                The Secrets of
                            </p>

                            <h3 className="text-display perspective-distant origin-center rotate-x-3 bg-linear-to-b from-[#ffffff] via-[#ead8bd] via-55% to-[#9b7d5b] bg-clip-text text-5xl leading-[0.82] font-[Manrope] tracking-[0.055em] text-transparent font-black">
                                Chiaroscuro
                            </h3>

                            <p className="mt-1 font-[Manrope] text-[10px] uppercase tracking-[0.55em] text-[#b49a64] filter-[drop-shadow(0px_0px_2px_rgba(0,0,0))_drop-shadow(0px_0px_4px_rgba(0,0,0))_drop-shadow(0px_0px_1px_rgba(0,0,0))]">
                                The Fated Heir of Shadows and Light
                            </p>

                            <div className="my-7 h-px w-full bg-linear-to-r from-[#c9a96b]/60 via-[#c9a96b]/25 to-transparent" />

                            <div className="space-y-2 font-[Cormorant_Garamond] text-[clamp(16px,1.2vw,21px)] leading-4 tracking-[0.03em] text-[#ded5c7] filter-[drop-shadow(0px_0px_2px_rgba(0,0,0))_drop-shadow(0px_0px_4px_rgba(0,0,0))_drop-shadow(0px_0px_1px_rgba(0,0,0))] italic">
                                <p>A forbidden bloodline.</p>
                                <p>An ancient war.</p>
                                <p>A prophecy that should never come true.</p>
                            </div>

                            {/* STORY STATS */}

                            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 filter-[drop-shadow(0px_0px_2px_rgba(0,0,0))_drop-shadow(0px_0px_4px_rgba(0,0,0))_drop-shadow(0px_0px_1px_rgba(0,0,0))]">
                                <div>
                                    <p className="font-[Cormorant_Garamond] text-3xl leading-none text-[#d8b978]">
                                        50+
                                    </p>
                                    <p className="mt-1 font-[Manrope] text-[10px] uppercase tracking-[0.3em] text-[#bcae91]">
                                        Chapters
                                    </p>
                                </div>

                                <span className="hidden h-10 w-px bg-[#c9a96b]/30 sm:block" />

                                <div>
                                    <p className="font-[Cormorant_Garamond] text-3xl leading-none text-[#d8b978]">
                                        2
                                    </p>
                                    <p className="mt-1 font-[Manrope] text-[10px] uppercase tracking-[0.3em] text-[#bcae91]">
                                        Seasons
                                    </p>
                                </div>

                                <span className="hidden h-10 w-px bg-[#c9a96b]/30 sm:block" />

                                <div>
                                    <p className="font-[Cormorant_Garamond] text-2xl uppercase leading-none text-[#d8b978]">
                                        Ongoing
                                    </p>
                                    <p className="mt-1 font-[Manrope] text-[10px] uppercase tracking-[0.3em] text-[#bcae91]">
                                        Journey
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — READING CTA */}

                        <div className="flex flex-col justify-between gap-5 border-l-2 border-[#c9a96b] px-5 py-4 lg:px-5">

                            <h3 className="font-[Cormorant_Garamond] text-[clamp(25px,2.2vw,38px)] font-medium uppercase leading-[1.05] tracking-[0.05em] text-[#eee5d5]">
                                The story is already
                                <br />
                                being written.
                            </h3>

                            <div className="mt-5 space-y-2 font-[Cormorant_Garamond] text-[clamp(16px,1.2vw,21px)] leading-4 tracking-[0.03em] text-[#ded5c7] filter-[drop-shadow(0px_0px_2px_rgba(0,0,0))_drop-shadow(0px_0px_4px_rgba(0,0,0))_drop-shadow(0px_0px_1px_rgba(0,0,0))] italic">
                                <p>You have seen the world.</p>
                                <p>You have met its players.</p>
                                <p>Now enter the story.</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://www.royalroad.com/fiction/125859/the-secrets-of-chiaroscuro-the-fated-heir-of-shadows"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative isolate inline-flex items-center gap-5 overflow-hidden border border-[#c9a96b]/70 px-5 py-3 font-[Manrope] text-[10px] uppercase tracking-[0.2em] text-[#eee5d5] transition-colors duration-500 hover:text-black"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#d8b978] transition-transform duration-700 ease-out group-hover:scale-x-100"
                                    />
                                    Read on Royal Road
                                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                                {/* <a
                                    href="https://www.wattpad.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative isolate inline-flex items-center gap-5 overflow-hidden border border-[#c9a96b]/70 px-5 py-3 font-[Manrope] text-[8px] uppercase tracking-[0.2em] text-[#eee5d5] transition-colors duration-500 hover:text-black"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#d8b978] transition-transform duration-700 ease-out group-hover:scale-x-100"
                                    />
                                    Read on Wattpad
                                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chronicle;