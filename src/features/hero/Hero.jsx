import React, { useEffect, useRef } from "react";

const Hero = () => {
    const backgroundRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        let frame;

        const handleMouseMove = (event) => {
            cancelAnimationFrame(frame);

            frame = requestAnimationFrame(() => {
                const x = (event.clientX / window.innerWidth - 0.5) * 10
                const y = (event.clientY / window.innerHeight - 0.5) * 10

                if (backgroundRef.current) {
                    backgroundRef.current.style.transform = `translate3d(${x * 0.4}px, ${y * 0.8}px, 0)`;
                }

                if (heroRef.current) {
                    heroRef.current.style.transform = `translate3d(${x * 0.9}px, ${y * 0.9}px, 0)`;
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section id="hero" aria-labelledby="hero-title" className="relative isolate min-h-svh overflow-hidden bg-black text-[var(--color-ivory)]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">

                <img
                    ref={backgroundRef}
                    src="/images/hero/background3.png"
                    alt=""
                    draggable="false"
                    className="absolute inset-0 h-full w-full max-w-none select-none object-cover object-bottom will-change-transform translate-y-[-5px] "
                />

                <img
                    ref={heroRef}
                    src="/images/hero/heroz.png"
                    alt=""
                    draggable="false"
                    className="absolute h-full w-full scale-101 translate-y-10 max-w-none select-none object-cover object-bottom will-change-transform overflow-visible"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/30 to-transparent" />
            </div>

            {/* ATMOSPHERIC EFFECTS */}

            {/* <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 cinematic-vignette" /> */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 cinematic-grain opacity-[0.035] mix-blend-soft-light" />

            {/* HEADER / NAVIGATION */}

            <header className="absolute inset-x-0 top-0 z-30 px-5 py-5 sm:px-8 sm:py-7 lg:px-12 ">
                <div className="flex items-center justify-between">
                    {/* Brand */}

                    <a href="/" aria-label="Chiaroscuro home" className="text-cinematic text-[1rem] tracking-[0.22em] text-black/80 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current font-black drop-shadow-white filter-[drop-shadow(0_0px_3px_rgba(255,255,255))_drop-shadow(0_0px_5px_rgba(255,255,255))_drop-shadow(0_0px_6px_rgba(255,255,255))] ">
                        CHIAROSCURO
                    </a>

                    {/* Desktop Navigation */}

                    <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex lg:gap-12 [&>a]:text-cinematic [&>a]:text-[0.58rem] [&>a]:text-white/80 [&>a]:transition-all [&>a]:duration-500 [&>a]:ease-out [&>a:hover]:text-white [&>a:hover]:scale-115 [&>a]:focus-visible:outline-2 [&>a]:focus-visible:outline-offset-4 [&>a]:focus-visible:outline-white filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))] ">
                        <a href="#world">
                            The World
                        </a>

                        <a href="#cast">
                            The Cast
                        </a>

                        <a href="#chronicle">
                            The Chronicle
                        </a>

                        <a href="#enter" className="group relative isolate overflow-hidden border border-white/25 px-4 py-2 text-white/80 transition-colors duration-500 hover:text-black! hover:cursor-pointer">
                            <span aria-hidden="true" className="absolute inset-0 -z-10 origin-left scale-x-0 bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
                            <span className="relative z-10">Enter</span>
                        </a>
                    </nav>

                    {/* Mobile Navigation Button */}

                    <button type="button" aria-label="Open navigation" aria-controls="mobile-menu" aria-expanded="false" className="grid size-10 place-items-center border border-white/20 text-white md:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                        <span className="sr-only">Open menu</span>

                        <span className="flex w-4 flex-col gap-1.5">
                            <span className="h-px w-full bg-current" />
                            <span className="h-px w-3/4 bg-current" />
                        </span>
                    </button>
                </div>
            </header>

            {/* LEFT WORLD LABEL*/}

            <aside aria-label="Light world introduction" className="absolute left-5 top-1/4 z-20 hidden -translate-y-1/2 text-cinematic sm:left-8 lg:left-12 lg:block">
                <p className="text-[0.58rem] leading-[2.25] text-black/75 font-black drop-shadow-lg drop-shadow-white filter-[drop-shadow(0_0px_3px_rgba(255,255,255))_drop-shadow(0_0px_5px_rgba(255,255,255))_drop-shadow(0_0px_6px_rgba(255,255,255))]">
                    Same
                    <br />
                    Man.
                    <br />
                    Different
                    <br />
                    Worlds.
                </p>
            </aside>

            {/* RIGHT WORLD LABEL*/}

            <aside aria-label="Dark world introduction" className="absolute right-5 top-[56%] z-20 hidden -translate-y-1/2 text-right text-cinematic sm:right-8 lg:right-12 lg:block filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))]">
                <p className="max-w-[7rem] text-[0.58rem] leading-[2.25] text-white/72">
                    Same
                    <br />
                    Blood.
                    <br />
                    Different
                    <br />
                    Fate.
                </p>
            </aside>

            {/* MAIN HERO CONTENT*/}

            <div className="relative z-20 flex min-h-svh items-end justify-center px-5  pt-32 sm:pb-2 lg:px-15 lg:pb-5 xs:pb-5">
                <div className="max-w-6xl text-center">

                    <div
                        aria-hidden="true"
                        className=" absolute pointer-events-none bottom-0 -z-10 mx-auto h-1/2 w-1/2"
                        style={{
                            background: "radial-gradient(ellipse 80% 90% at 50% 50%, rgba(0,0,0) 0%, rgba(0,0,0,0.75) 25%, transparent 55%)",
                        }}
                    />
                    {/* Eyebrow */}

                    <p className="hero-reveal hero-reveal-delay-1 mb-4 text-cinematic text-[0.52rem] text-white/75 sm:mb-5 sm:text-[0.62rem] sm:tracking-[0.3em]">
                        A Chronicle of Shadow and Light
                    </p>

                    {/* Main Title */}

                    <div className="perspective-distant drop-shadow-xl">
                        <h1 id="hero-title" className="text-display perspective-distant origin-center rotate-x-3 bg-linear-to-b from-[#ffffff] via-[#ead8bd] via-55% to-[#9b7d5b] bg-clip-text text-3xl leading-[0.82] font-normal tracking-[0.055em] text-transparent pb-1">
                            THE SECRETS OF
                        </h1>
                        <h1 id="hero-title" className="text-display perspective-distant origin-center rotate-x-3 bg-linear-to-b from-[#ffffff] via-[#ead8bd] via-55% to-[#9b7d5b] bg-clip-text text-8xl leading-[0.82] font-normal tracking-[0.055em] text-transparent pb-2">
                            CHIAROSCURO
                        </h1>
                    </div>

                    {/* Title Highlight */}

                    <div aria-hidden="true" className="pointer-events-none relative mx-auto -mt-[clamp(2rem,5vw,5rem)] h-[clamp(2rem,5vw,4rem)] w-[80%] bg-linear-to-b from-white/20 via-white/5 to-transparent opacity-40 blur-xl" />

                    {/* Subtitle */}

                    <p className="hero-reveal hero-reveal-delay-2 mt-1 text-cinematic text-[0.49rem] leading-relaxed tracking-[0.18em] text-white/85 sm:mt-2 sm:text-[0.62rem] sm:tracking-[0.24em]">
                        The Fated Heir of Shadows and Light
                    </p>

                    {/* Tagline */}

                    <p className="hero-reveal hero-reveal-delay-3 mx-auto mt-5 max-w-xl text-body text-[1.05rem] tracking-[0.035em] text-amber-100 sm:mt-2 sm:text-[1.2rem] italic pb-7 lg:pb-15">
                        Some bloodlines were never meant to exist.
                    </p>

                    {/* Scroll */}

                    <a href="#world" aria-label="Scroll to explore the world" className="absolute bottom-5 right-15 mt-4 inline-flex flex-col items-center gap-3 text-white/70 transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-5">
                        <span className="text-cinematic text-[0.48rem] tracking-[0.3em]">
                            Scroll
                        </span>

                        <span className="scroll-pulse grid size-7 place-items-center rounded-full border border-white/30">
                            <svg viewBox="0 0 16 16" fill="none" className="size-3" aria-hidden="true">
                                <path d="M8 3v10m0 0 3-3m-3 3-3-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* MOBILE WORLD INDICATORS */}

            <div aria-hidden="true" className="absolute bottom-6 left-5 z-20 text-cinematic text-[0.45rem] tracking-[0.2em] text-white/45 sm:left-8 lg:hidden">
                LIGHT
            </div>

            <div aria-hidden="true" className="absolute bottom-6 right-5 z-20 text-cinematic text-[0.45rem] tracking-[0.2em] text-white/45 sm:right-8 lg:hidden">
                SHADOW
            </div>
        </section>
    );
};

export default Hero;