import React, { useState } from "react";

const AuthorArchive = () => {
    const [category, setCategory] = useState("Theory");
    const [status, setStatus] = useState("IDLE");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("SUBMITTING");

        const form = event.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mzdajdpr", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
                setCategory("Theory");
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };
    return (
        <section id="archive" className="relative isolate overflow-hidden bg-[#030303] text-[#eee5d5]">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-[url('/images/author-card.png')] bg-cover bg-left bg-no-repeat"
            />

            {/* CENTER DARKENING FOR TEXT */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_30%,rgba(0,0,0,0.62)_50%,rgba(0,0,0,0.28)_72%,rgba(0,0,0,0.08)_100%)]"
            />

            {/* VIGNETTE */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgb(0_0_0_/_0.65)_100%)]"
            />

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div className="relative mx-auto grid w-full max-w-[1900px] grid-cols-1 lg:grid-cols-2">

                {/* =================================================
                    LEFT — AUTHOR
                ================================================== */}

                <div className="relative border-t border-[#c9a96b]/20 px-[5%] py-2 lg:border-t-0 lg:px-[7%] lg:py-5">

                    {/* HEADER */}

                    <div className="flex items-center gap-5">
                        <h2 className="shrink-0 font-[Cormorant_Garamond] text-[clamp(18px,1.4vw,34px)] font-medium uppercase leading-none tracking-[0.07em] text-[#eee5d5] filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))]">
                            The One Who Opened the Archive
                        </h2>

                        <span className="h-px flex-1 bg-linear-to-r from-[#c9a96b]/80 to-transparent" />
                    </div>

                    {/* AUTHOR CONTENT */}

                    <div className="mt-8 flex items-end w-full justify-end gap-4 sm:gap-5">


                        {/* AUTHOR INFORMATION */}

                        <div className="min-w-0 w-75 filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))]">

                            <h3 className="font-[Cormorant_Garamond] text-[clamp(23px,2.5vw,34px)] font-medium uppercase leading-none tracking-[0.08em] text-[#eee5d5] [text-shadow:0_2px_8px_rgb(0_0_0_/_0.9)]">
                                Anoop Kumar
                            </h3>

                            <p className="mt-2 font-[Cormorant_Garamond] text-[clamp(13px,1.5vw,17px)] tracking-[0.06em] text-[#c9a96b]">
                                Pen Name — AK31
                            </p>

                            <p className="mt-5 max-w-lg font-[Cormorant_Garamond] text-[clamp(14.5px,1.5vw,19px)] leading-[1.45] tracking-[0.025em] text-[#ded5c7]">
                                Every world begins as a secret
                                someone refuses to let remain imaginary.
                            </p>

                            {/* AUTHOR BUTTON */}

                            <a
                                href="#author"
                                className="group relative mt-7 inline-flex items-center gap-8 overflow-hidden border border-[#c9a96b]/80 px-7 py-3.5 font-[Manrope] text-[10px] uppercase tracking-[0.25em] text-[#eee5d5] transition-colors duration-500 hover:text-black"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#d8b978] transition-transform duration-700 ease-out group-hover:scale-x-100"
                                />

                                About the Author

                                <span className="text-base leading-none transition-transform duration-500 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    ELITE CENTER DIVIDER
                ================================================== */}

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-1/2 z-30 hidden w-px -translate-x-1/2 lg:block"
                >
                    {/* MAIN LINE */}

                    <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#c9a96b]/60 to-transparent" />

                    {/* TOP EXTENSION */}

                    <span className="absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 bg-linear-to-b from-[#c9a96b]/20 to-[#c9a96b]/70" />

                    {/* BOTTOM EXTENSION */}

                    <span className="absolute bottom-0 left-1/2 h-20 w-px -translate-x-1/2 bg-linear-to-t from-[#c9a96b]/20 to-[#c9a96b]/70" />

                    {/* CENTRAL ORNAMENT */}

                    <span className="absolute left-1/2 top-1/2 flex size-7 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border border-[#c9a96b]/80 bg-[#030303]/90 shadow-[0_0_18px_rgb(201_169_107_/_0.15)]">
                        <span className="size-2 border border-[#e0c487] bg-[#030303]" />
                    </span>

                    {/* INNER DIAMOND */}

                    <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#e0c487]/80" />

                    {/* TOP ORNAMENT */}

                    <span className="absolute left-1/2 top-[17%] size-2 -translate-x-1/2 rotate-45 border border-[#c9a96b]/70 bg-[#030303]" />

                    {/* BOTTOM ORNAMENT */}

                    <span className="absolute bottom-[17%] left-1/2 size-2 -translate-x-1/2 rotate-45 border border-[#c9a96b]/70 bg-[#030303]" />
                </div>

                {/* =================================================
                    RIGHT — THEORY
                ================================================== */}

                <div className="relative border-t border-[#c9a96b]/20 px-[5%] py-2 lg:border-t-0 lg:px-[7%] lg:py-5">

                    {/* HEADER */}

                    <div>
                        <div className="flex items-center gap-5 filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))]">
                            <h2 className="shrink-0 font-[Cormorant_Garamond] text-[clamp(22px,1.8vw,34px)] font-medium uppercase leading-none tracking-[0.07em] text-[#eee5d5] [text-shadow:0_2px_10px_rgb(0_0_0_/_0.95)]">
                                Submit a Theory
                            </h2>

                            <span className="h-px flex-1 bg-linear-to-r from-[#c9a96b]/80 to-transparent" />
                        </div>

                        <p className="mt-5 font-[Cormorant_Garamond] text-[clamp(13px,1.5vw,17px)] tracking-[0.05em] text-[#bdb3a3] filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))]">
                            What do you think you know?
                        </p>
                    </div>

                    {/* FORM */}

                    <form onSubmit={handleSubmit} className="mt-1">

                        {/* INPUT ROW */}

                        <div className="grid gap-6 sm:grid-cols-[0.75fr_1.35fr] filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))]">

                            {/* ALIAS */}

                            <label className="block">
                                <span className="mb-1 block font-[Manrope] text-[10px] uppercase tracking-[0.25em] text-[#bcae91]">
                                    Alias
                                </span>

                                <input
                                    type="text"
                                    name="alias"
                                    required
                                    placeholder="Your name or alias"
                                    className="h-12 w-full border border-white/25 bg-black/25 px-4 font-[Cormorant_Garamond] text-[14px] text-[#eee5d5] outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#c9a96b] focus:bg-black/40"
                                />
                            </label>

                            {/* THEORY */}

                            <label className="block">
                                <span className="mb-1 block font-[Manrope] text-[10px] uppercase tracking-[0.25em] text-[#bcae91]">
                                    Your Theory
                                </span>

                                <textarea
                                    name="theory"
                                    required
                                    rows={2}
                                    placeholder="Write your theory, question or thought..."
                                    className="min-h-18 w-full resize-none border border-white/25 bg-black/25 px-4 py-3 font-[Cormorant_Garamond] text-[14px] text-[#eee5d5] outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#c9a96b] focus:bg-black/40"
                                />
                            </label>
                        </div>

                        {/* CATEGORY */}

                        <fieldset className="mt-0">

                            <legend className="mb-2 font-[Manrope] text-[10px] uppercase tracking-[0.25em] text-[#bcae91]">
                                Category
                            </legend>

                            <div className="flex flex-wrap items-center justify-between gap-x-7 gap-y-4">

                                {["Theory", "Question", "Prediction", "Character"].map((item) => (
                                    <label
                                        key={item}
                                        className="group flex cursor-pointer items-center gap-3 font-[Cormorant_Garamond] text-[15px] text-[#d8cfbf] filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))]"
                                    >
                                        <input
                                            type="radio"
                                            name="category"
                                            value={item}
                                            checked={category === item}
                                            onChange={() => setCategory(item)}
                                            className="size-5 accent-[#c9a96b]"
                                        />

                                        <span className="transition-colors duration-300 group-hover:text-[#e0c487]">
                                            {item}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        {/* SUBMIT */}

                        <button
                            type="submit"
                            disabled={status === "SUBMITTING"}
                            className="group relative mt-7.5 flex w-full items-center justify-center gap-8 overflow-hidden border border-[#c9a96b]/80 px-7 py-3.5 font-[Manrope] text-[10px] uppercase tracking-[0.3em] text-[#eee5d5] transition-colors duration-500 hover:text-black disabled:pointer-events-none disabled:opacity-60"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#d8b978] transition-transform duration-700 ease-out group-hover:scale-x-100"
                            />

                            {status === "SUBMITTING" ? (
                                <>
                                    <span className="size-3 animate-spin rounded-full border border-black/30 border-t-black" />
                                    Sending to the Archive
                                </>
                            ) : (
                                <>
                                    Submit to the Archive

                                    <span className="text-base leading-none transition-transform duration-500 group-hover:translate-x-2">
                                        →
                                    </span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AuthorArchive;