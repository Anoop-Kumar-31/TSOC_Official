import React, { useRef, useState } from "react";

const characters = [
    {
        id: "joseph",
        name: "Joseph Valemont",
        shortName: "Joseph",
        title: "The Fated Heir",
        image: "/images/characterscards/joseph-card.png",
        chip: "/images/characterschips/joseph-chip.png",
        quote: "Some are born. He was created by a mistake between Heaven and Hell.",
        description: "Born from a union forbidden by powers older than kingdoms, Joseph exists between worlds that were never meant to touch.",
        stats: [
            ["Blood", "Half-Blood"],
            ["Origin", "Forbidden Union"],
            ["Allegiance", "Unknown"],
            ["Potential", "Unknown"],
        ],
    },
    {
        id: "lopez",
        name: "Sabrina Lopez",
        shortName: "Lopez",
        title: "The Loyal One",
        image: "/images/characters/lopez.webp",
        quote: "Loyalty is not given. It is earned.",
        description: "A steadfast presence beside Joseph, Lopez carries secrets that could change everything.",
        stats: [
            ["Blood", "Human"],
            ["Role", "Protector"],
            ["Allegiance", "Joseph"],
            ["Nature", "Unknown"],
        ],
    },
    {
        id: "amayra",
        name: "Amayra Blackwood",
        shortName: "Amayra",
        title: "The Enigma",
        image: "/images/characterscards/amayra-card.png",
        chip: "/images/characterschips/amayra-chip.png",
        quote: "Some truths are more dangerous than lies.",
        description: "Amayra walks the line between knowledge and secrecy, revealing only what she chooses.",
        stats: [
            ["Blood", "Unknown"],
            ["Origin", "Unknown"],
            ["Allegiance", "Unknown"],
            ["Nature", "Enigma"],
        ],
    },
    {
        id: "david",
        name: "David Silverfang",
        shortName: "David",
        title: "The Strategist",
        image: "/images/characters/david.webp",
        quote: "Every war is decided before the first blade is drawn.",
        description: "A calculated mind capable of seeing patterns others overlook.",
        stats: [
            ["Blood", "Human"],
            ["Role", "Strategist"],
            ["Allegiance", "Unknown"],
            ["Threat", "High"],
        ],
    },
    {
        id: "thomas",
        name: "Thomas",
        shortName: "Thomas",
        title: "The Believer",
        image: "/images/characters/thomas.webp",
        quote: "Faith survives where reason fails.",
        description: "A man whose convictions place him dangerously close to forces beyond his understanding.",
        stats: [
            ["Blood", "Human"],
            ["Role", "Believer"],
            ["Allegiance", "Unknown"],
            ["Nature", "Unknown"],
        ],
    },
    {
        id: "william",
        name: "Lord William",
        shortName: "Lord William",
        title: "The Noble",
        image: "/images/characters/lord-william.webp",
        quote: "Power demands a price. Nobility merely decides who pays it.",
        description: "An aristocrat bound to an ancient order and the politics of a world hidden from humanity.",
        stats: [
            ["Blood", "Vampire"],
            ["Rank", "Lord"],
            ["Allegiance", "Unknown"],
            ["Power", "Ancient"],
        ],
    },
    {
        id: "aria",
        name: "Aria",
        shortName: "Aria",
        title: "The Light",
        image: "/images/characters/aria.webp",
        quote: "Light does not always mean mercy.",
        description: "A figure of extraordinary grace whose connection to the forces of light runs deeper than it appears.",
        stats: [
            ["Blood", "Unknown"],
            ["Realm", "Light"],
            ["Allegiance", "Unknown"],
            ["Power", "Divine"],
        ],
    },
    {
        id: "veleria",
        name: "Veleria",
        shortName: "Veleria",
        title: "The Shadow",
        image: "/images/characters/veleria.webp",
        quote: "The darkest secrets are the ones we choose to keep.",
        description: "A mysterious presence connected to the shadow realm and its ancient bloodlines.",
        stats: [
            ["Blood", "Vampire"],
            ["Realm", "Shadow"],
            ["Allegiance", "Unknown"],
            ["Power", "Unknown"],
        ],
    },
    {
        id: "selene",
        name: "Selene",
        shortName: "Selene",
        title: "The Mystic",
        image: "/images/characters/selene.webp",
        quote: "The future is only a memory waiting to happen.",
        description: "A mystic whose understanding of forces beyond the mortal world makes her invaluable and dangerous.",
        stats: [
            ["Blood", "Unknown"],
            ["Role", "Mystic"],
            ["Allegiance", "Unknown"],
            ["Power", "Arcane"],
        ],
    },
    {
        id: "alistair",
        name: "Alistair",
        shortName: "Alistair",
        title: "The Vengeful",
        image: "/images/characters/alistair.webp",
        quote: "Some debts survive for centuries.",
        description: "Driven by an old grievance, Alistair's path is destined to collide with Joseph's.",
        stats: [
            ["Blood", "Vampire"],
            ["Role", "Hunter"],
            ["Allegiance", "Unknown"],
            ["Threat", "Extreme"],
        ],
    },
    {
        id: "lazarus",
        name: "Lazarus",
        shortName: "Lazarus",
        title: "The Undying",
        image: "/images/characters/lazarus.webp",
        quote: "Death came once. It will not come twice.",
        description: "A figure whose existence defies the boundaries between life, death, and eternity.",
        stats: [
            ["Blood", "Unknown"],
            ["Age", "Ancient"],
            ["Allegiance", "Unknown"],
            ["Nature", "Undying"],
        ],
    },
];

const Cast = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const chipContainerRef = useRef(null);

    const activeCharacter = characters[activeIndex];

    /*
     * These arrows ONLY browse the chip list.
     * They do NOT change activeIndex.
     */
    const previousChip = () => {
        chipContainerRef.current?.scrollBy({
            left: -220,
            behavior: "smooth",
        });
    };

    const nextChip = () => {
        chipContainerRef.current?.scrollBy({
            left: 220,
            behavior: "smooth",
        });
    };

    return (
        <section id="cast" className="relative w-full overflow-hidden bg-[#030303] text-[#eee5d5]">

            {/* =====================================================
                UPPER 3/4 — CHARACTER SHOWCASE
            ====================================================== */}

            <div className="relative w-full overflow-hidden lg:h-[65vh]">

                {/* Character background */}
                <div className="absolute inset-0">
                    <img
                        key={activeCharacter.id}
                        src={activeCharacter.image}
                        alt=""
                        aria-hidden="true"
                        draggable="false"
                        className="h-full w-full select-none object-cover object-center transition-opacity duration-500"
                    />

                    {/* Left darkness */}
                    {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.08)_60%,rgba(0,0,0,0.88)_100%)]" /> */}

                    {/* Bottom fade */}
                    {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#030303] via-[#030303]/60 to-transparent" /> */}

                    {/* Vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.2)_75%,rgba(0,0,0,0.75)_100%)]" />

                    {/* Right info bg darkness */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-black/20 to-black/100" />
                </div>

                {/* =================================================
                    CHAPTER / COUNTER
                ================================================== */}

                <div className="absolute left-[4%] top-[7%] z-20">
                    <div className="flex items-center gap-4">
                        <span className="font-[Manrope] text-[11px] uppercase tracking-[0.16em] text-[#c9a96b]">
                            {String(activeIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-8 bg-[#c9a96b]/60" />

                        <span className="font-[Manrope] text-[10px] uppercase tracking-[0.24em] text-[#eee5d5]/80">
                            Character Archive
                        </span>
                    </div>
                </div>

                {/* =================================================
                    LEFT — QUOTE
                ================================================== */}

                <blockquote className="absolute bottom-[17%] left-[4%] z-20 hidden max-w-[28%] border-l border-[#c9a96b]/70 pl-5 lg:block">
                    <p className="font-[Cormorant_Garamond] text-[clamp(16px,1.3vw,25px)] leading-[1.3] tracking-[0.02em] text-[#eee5d5] [text-shadow:0_3px_12px_rgba(0,0,0,0.95)]">
                        “{activeCharacter.quote}”
                    </p>
                </blockquote>

                {/* =================================================
                    RIGHT — CHARACTER INFORMATION
                ================================================== */}

                <div className="absolute right-[5%] top-[12%] z-20 w-[38%] max-w-[620px]">

                    <p className="font-[Manrope] text-[9px] uppercase tracking-[0.3em] text-[#c9a96b]">
                        {activeCharacter.title}
                    </p>

                    <h2 className="mt-3 font-[Cormorant_Garamond] text-[clamp(32px,3.2vw,58px)] font-medium uppercase leading-[0.9] tracking-[0.1em] text-[#eee5d5] [text-shadow:0_3px_14px_rgba(0,0,0,0.95)]">
                        {activeCharacter.name}
                    </h2>

                    <div className="my-7 h-px w-full bg-linear-to-r from-[#c9a96b]/60 via-[#c9a96b]/25 to-transparent" />

                    <dl className="space-y-3">
                        {activeCharacter.stats.map(([label, value]) => (
                            <div key={label} className="grid grid-cols-[90px_1fr] items-center gap-4">
                                <dt className="font-[Manrope] text-[9px] uppercase tracking-[0.18em] text-[#bcae91]">
                                    {label}
                                </dt>

                                <dd className="flex items-center gap-4 font-[Cormorant_Garamond] text-[clamp(13px,0.9vw,17px)] uppercase tracking-[0.12em] text-[#eee5d5]">
                                    <span className="h-px w-10 bg-[#c9a96b]/40" />
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    <p className="mt-8 max-w-[590px] font-[Cormorant_Garamond] text-[clamp(14px,1vw,18px)] leading-[1.45] text-[#d8cfbf]/90">
                        {activeCharacter.description}
                    </p>

                    <a
                        href={`#${activeCharacter.id}`}
                        className="group mt-7 inline-flex items-center gap-7 border border-[#c9a96b]/70 px-7 py-3.5 font-[Manrope] text-[9px] uppercase tracking-[0.2em] text-[#eee5d5] transition-all duration-500 hover:border-[#e0c487] hover:bg-[#c9a96b]/10"
                    >
                        <span>Enter Their Story</span>

                        <span className="text-base transition-transform duration-500 group-hover:translate-x-2">
                            →
                        </span>
                    </a>
                </div>

                {/* =================================================
                    CAROUSEL ARROWS — MAIN PANEL
                ================================================== */}

                <div className="absolute bottom-[8%] right-[5%] z-30 flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setActiveIndex((current) => (current - 1 + characters.length) % characters.length)}
                        aria-label="Previous character"
                        className="flex h-11 w-11 items-center justify-center border border-[#c9a96b]/40 font-[Manrope] text-lg text-[#eee5d5] transition-all duration-300 hover:border-[#c9a96b] hover:bg-[#c9a96b]/10"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveIndex((current) => (current + 1) % characters.length)}
                        aria-label="Next character"
                        className="flex h-11 w-11 items-center justify-center border border-[#c9a96b]/40 font-[Manrope] text-lg text-[#eee5d5] transition-all duration-300 hover:border-[#c9a96b] hover:bg-[#c9a96b]/10"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* =====================================================
                LOWER — CAST CHIPS
            ====================================================== */}

            <div className="relative z-30 border-t border-[#c9a96b]/15 bg-[#030303] px-5 py-2 lg:px-[2%]">

                {/* HEADER */}
                <div className="mb-3 flex items-end justify-between">
                    <div>
                        <div className="flex items-center gap-4">
                            <h2 className="font-[Cormorant_Garamond] text-[clamp(25px,2vw,36px)] font-medium uppercase leading-none tracking-[0.08em] text-[#eee5d5]">
                                The Cast
                            </h2>

                            <span className="hidden h-px w-10 bg-[#c9a96b]/50 sm:block" />

                            <p className="hidden font-[Cormorant_Garamond] text-sm italic tracking-[0.04em] text-[#bdb3a3] sm:block">
                                Every secret has a face.
                            </p>
                        </div>
                    </div>

                    {/* CHIP BROWSING ARROWS */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={previousChip}
                            aria-label="Browse previous characters"
                            className="flex size-8 items-center justify-center border border-[#c9a96b]/40 font-[Manrope] text-lg leading-none text-[#eee5d5] transition-all duration-500 hover:border-[#e0c487] hover:bg-[#c9a96b]/10 hover:text-[#e0c487]"
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            onClick={nextChip}
                            aria-label="Browse more characters"
                            className="flex size-8 items-center justify-center border border-[#c9a96b]/40 font-[Manrope] text-lg leading-none text-[#eee5d5] transition-all duration-500 hover:border-[#e0c487] hover:bg-[#c9a96b]/10 hover:text-[#e0c487]"
                        >
                            ›
                        </button>
                    </div>
                </div>

                {/* =================================================
                    CHARACTER CHIPS
                ================================================== */}

                <div
                    ref={chipContainerRef}
                    className="scrollbar-none flex gap-2 overflow-x-auto scroll-smooth pb-2"
                >
                    {characters.map((character, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <button
                                key={character.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show ${character.name}`}
                                aria-pressed={isActive}
                                className={`group relative aspect-[3/4] min-w-[105px] flex-1 overflow-hidden bg-[#050505] text-center transition-all duration-500 ${isActive ? "border border-[#c9a96b] shadow-[0_0_20px_rgba(201,169,107,0.18)]" : "border border-[#eee5d5]/20 hover:border-[#c9a96b]/70"}`}
                            >
                                {/* FULL-BLEED CHARACTER IMAGE */}

                                <img
                                    src={character.chip}
                                    alt=""
                                    aria-hidden="true"
                                    draggable="false"
                                    className={`absolute inset-0 h-full w-full select-none object-cover object-center transition-transform duration-[1200ms] ease-out ${isActive ? "scale-[1.04]" : "scale-100 group-hover:scale-[1.05]"}`}
                                />

                                {/* CINEMATIC DARKENING */}

                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12)_0%,transparent_35%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.82)_100%)]" />

                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]" />

                                {/* TOP-LEFT ROYAL DIAMOND */}

                                <span
                                    className={`absolute left-3 top-3 z-30 h-2 w-2 rotate-45 transition-all duration-500 ${isActive ? "bg-[#e0c487] shadow-[0_0_10px_rgba(224,196,135,0.85)]" : "bg-[#c9a96b]/75 group-hover:bg-[#e0c487]"}`}
                                />

                                {/* BOTTOM GLASS INFORMATION PANEL */}

                                <div className="absolute inset-x-0 bottom-0 z-20 px-1 pb-1">
                                    <div className={`relative overflow-hidden border-y border-[#c9a96b]/10 bg-black/10 px-0 py-1 ${isActive ? "backdrop-blur-xs" : ""}`}>
                                        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/[0.035] via-transparent to-black/20" />

                                        <p className="relative truncate font-[Cormorant_Garamond] text-[clamp(10px,0.8vw,22px)] font-medium uppercase leading-none tracking-[0.1em] text-[#eee5d5]">
                                            {character.shortName}
                                        </p>

                                        <div className="relative m-1 flex items-center justify-center">
                                            <span className="h-px w-5 bg-[#c9a96b]/60" />

                                            <span className="mx-2 h-1.5 w-1.5 rotate-45 border border-[#c9a96b]/70" />

                                            <span className="h-px w-5 bg-[#c9a96b]/60" />
                                        </div>

                                        <p className="relative truncate font-[Manrope] text-[7px] font-medium uppercase leading-none tracking-[0.18em] text-[#d5c6aa]">
                                            {character.title}
                                        </p>
                                    </div>
                                </div>

                                {/* INNER ROYAL FRAME */}

                                <div
                                    className={`pointer-events-none absolute inset-[4px] z-30 border transition-all duration-500 ${isActive ? "border-[#e0c487]/55" : "border-[#eee5d5]/15 group-hover:border-[#c9a96b]/40"}`}
                                />

                                {/* INNER CORNER DETAILS */}

                                <span className={`pointer-events-none absolute left-[4px] top-[4px] z-40 h-3 w-3 border-l border-t transition-colors duration-500 ${isActive ? "border-[#e0c487]" : "border-[#c9a96b]/40"}`} />

                                <span className={`pointer-events-none absolute right-[4px] top-[4px] z-40 h-3 w-3 border-r border-t transition-colors duration-500 ${isActive ? "border-[#e0c487]" : "border-[#c9a96b]/40"}`} />

                                <span className={`pointer-events-none absolute bottom-[4px] left-[4px] z-40 h-3 w-3 border-b border-l transition-colors duration-500 ${isActive ? "border-[#e0c487]" : "border-[#c9a96b]/40"}`} />

                                <span className={`pointer-events-none absolute bottom-[4px] right-[4px] z-40 h-3 w-3 border-b border-r transition-colors duration-500 ${isActive ? "border-[#e0c487]" : "border-[#c9a96b]/40"}`} />
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Cast;