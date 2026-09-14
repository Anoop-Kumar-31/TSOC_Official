const TruthCard = () => {
    return (
        <section id="truth" aria-labelledby="truth-title" className="relative isolate w-full overflow-hidden bg-black text-[#eee6da]">
            {/* BACKGROUND */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-[url('/images/truth-card.png')] bg-cover bg-center bg-no-repeat"
            />

            {/* CENTER READABILITY */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-black/20 to-transparent"
            />

            {/* VIGNETTE */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgb(0_0_0_/_0.55)_100%)]"
            />

            {/* CONTENT */}
            <div className="relative z-10 flex aspect-3/1 w-full items-center justify-center pb-15">
                <div className="w-full max-w-6xl text-center">

                    {/* TOP TITLE */}
                    <p className="text-[#8b171b] [text-shadow:0_2px_10px_rgb(0_0_0_/_0.9)] text-display text-4xl font-normal tracking-tighter">
                        TRUTH
                    </p>
                    <p className="text-cinematic text-[clamp(0.45rem,0.9vw,0.8rem)] tracking-[0.35em] text-white/90">
                        YOU WERE NOT SUPPOSED TO KNOW
                    </p>

                    {/* DIVIDER */}
                    <div aria-hidden="true" className="mx-auto my-[0.7%] flex items-center justify-center gap-3">
                        <span className="h-px w-[7%] bg-linear-to-r from-transparent to-[#c5aa82]/80" />
                        <span className="relative size-[clamp(0.5rem,1vw,0.8rem)] rotate-45 border border-[#c5aa82]">
                            <span className="absolute inset-1 bg-[#c5aa82]" />
                        </span>
                        <span className="h-px w-[7%] bg-linear-to-l from-transparent to-[#c5aa82]/80" />
                    </div>

                    {/* INTRO */}
                    <p className="text-body text-[clamp(0.65rem,1.25vw,1.15rem)] leading-[1.7] tracking-[0.08em] text-white/80">
                        Before humanity learned to pray,
                        <br />
                        the world already belonged to something else.
                    </p>

                    {/* THREE WORLDS */}
                    <h2
                        id="truth-title"
                        className="mt-[2%] flex flex-wrap items-center justify-center gap-x-[1vw] text-display text-[clamp(1.5rem,2vw,4rem)] leading-none font-normal tracking-[0.04em]"
                    >
                        <span className="text-[#eee9df] [text-shadow:0_2px_8px_rgb(0_0_0_/_0.8)] font-normal tracking-tighter">
                            HEAVEN.
                        </span>

                        <span className="text-[#8b171b] [text-shadow:0_2px_10px_rgb(0_0_0_/_0.9)] font-normal tracking-tighter">
                            HELL.
                        </span>

                        <span className="text-[#ded4c6] [text-shadow:0_2px_8px_rgb(0_0_0_/_0.8)]">
                            BLOOD.
                        </span>
                    </h2>

                    {/* BOTTOM TEXT */}
                    <p className="text-body mt-[2%] text-[clamp(0.65rem,1.25vw,1.15rem)] leading-[1.2] tracking-[0.08em] text-white/80">
                        And between them, something was born
                        <br />
                        that should never have existed.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TruthCard;