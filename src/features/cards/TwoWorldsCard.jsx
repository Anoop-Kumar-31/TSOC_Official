import React from "react";

const lightTraits = ["Divinity", "Order", "Grace", "Love"];
const shadowTraits = ["Blood", "Chaos", "Power", "Vengeance"];

/* Reusable diamond divider */
const DiamondDivider = ({
    lineClass = "bg-white",
    diamondClass = "border-white",
    lineWidth = "w-[clamp(100px,12vw,250px)]",
    diamondSize = "h-[7px] w-[7px]",
}) => (
    <div className="flex items-center justify-center filter-[drop-shadow(0_2px_3px_rgb(0_0_0_/0.9))_drop-shadow(0_6px_8px_rgb(0_0_0_/0.8))_drop-shadow(0_12px_20px_rgb(0_0_0_/0.7))]">
        <span className={`h-px ${lineWidth} ${lineClass}`} />
        <span className={`mx-2 ${diamondSize} rotate-45 border ${diamondClass}`} />
        <span className={`h-px ${lineWidth} ${lineClass}`} />
    </div>
);

/* Left/Right world column */
const WorldSide = ({ title, traits, titleGradient, lineClass, diamondClass }) => (
    <div className="w-[14%] text-center">
        <h3
            className={`text-display perspective-distant origin-center rotate-x-3 bg-linear-to-b bg-clip-text pb-1 text-4xl font-normal leading-[0.82] tracking-[0.055em] text-transparent ${titleGradient} ${title == "Light" ? 'drop-shadow-md' : 'drop-shadow-amber-50 filter-[drop-shadow(0_2px_2px_rgb(0_0_0))]'}`}
        >
            {title}
        </h3>

        <div className="mt-1">
            <DiamondDivider
                lineClass={lineClass}
                diamondClass={diamondClass}
                lineWidth={title == "Light" ? `w-[45px]` : `w-[70px]`}
                diamondSize="h-[5px] w-[5px]"
            />
        </div>

        <ul className="mt-5 space-y-[clamp(5px,0.65vw,11px)] font-[Cormorant_Garamond] text-[clamp(12px,1.05vw,19px)] font-medium uppercase leading-none tracking-[0.17em] text-[#eee5d5]/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.95)]">
            {traits.map((trait) => (
                <li key={trait}>{trait}</li>
            ))}
        </ul>
    </div>
);

const TwoWorldsCard = () => {
    return (
        <section
            id="two-worlds"
            className="relative w-full overflow-hidden bg-[#020202]"
            aria-labelledby="two-worlds-title"
        >
            <div className="relative mx-auto aspect-[3.2/1] w-full min-h-[430px] max-h-[780px] overflow-hidden">
                {/* Decorative layers (background only — not structure) */}
                <img
                    src="/images/two-worlds-card.png"
                    alt=""
                    aria-hidden="true"
                    draggable="false"
                    className="absolute inset-0 h-full w-full select-none object-cover object-center"
                />

                {/* INSET VINTAGE */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 shadow-[inset_0_0_25px_10px_rgba(0,0,0)] " />

                {/* ===== Content: flex column ===== */}
                <div className="relative z-20 flex h-full flex-col items-center pt-[clamp(14px,1.6vw,36px)] pb-[clamp(20px,3vw,64px)]">
                    {/* TOP — title */}
                    <header className="text-center">
                        <h2
                            id="two-worlds-title"
                            className="whitespace-nowrap font-[Cormorant_Garamond] text-[clamp(22px,2.65vw,46px)] font-medium uppercase leading-none tracking-tighter text-[#e8ddc8] filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))] "
                        >
                            Two{" "}
                            <span className="font-normal tracking-tighter text-[#8b171b] [text-shadow:0_2px_10px_rgb(0_0_0_/0.9)]">
                                Ancient
                            </span>{" "}
                            Powers.
                        </h2>
                        <div className="mt-[clamp(8px,0.5vw,16px)]">
                            <DiamondDivider />
                        </div>
                    </header>

                    {/* MIDDLE — two worlds side by side */}
                    <div className="flex w-full flex-1 items-center justify-center pb-15 py-10 gap-[15%] filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))] ">
                        <WorldSide
                            title="Light"
                            traits={lightTraits}
                            titleGradient="from-[#ffffff] via-[#ead8bd] via-55% to-[#9b7d5b]"
                            lineClass="bg-[#d6c59e]"
                            diamondClass="border-[#d6c59e]"
                        />
                        <WorldSide
                            title="Shadow"
                            traits={shadowTraits}
                            titleGradient="from-[#bfbfbf] via-[#732626] via-55% to-[#b30505]"
                            lineClass="bg-[#9b3435]"
                            diamondClass="border-[#a83a3c]"
                        />
                    </div>

                    {/* BOTTOM — Joseph */}
                    <div className="flex flex-col items-center gap-2 text-center filter-[drop-shadow(0_0px_3px_rgba(0,0,0))_drop-shadow(0_0px_5px_rgba(0,0,0))_drop-shadow(0_0px_6px_rgba(0,0,0))] ">
                        <h3 className="font-[Cormorant_Garamond] text-[clamp(15px,0.5vw,25px)] font-medium uppercase leading-[1.08] tracking-tight text-[#e6dac4] [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
                            Between Them, He Was Born.
                        </h3>
                        <h3 className="font-[Cormorant_Garamond] text-[clamp(15px,1.5vw,25px)] font-medium uppercase leading-[1.08] tracking-[0.12em] text-[#e6dac4] [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
                            THE variable
                        </h3>
                        <div className="mb-1 h-px w-50 bg-white" />
                        <h2 className="text-display perspective-distant origin-center rotate-x-3 bg-linear-to-b from-[#ffffff] via-[#ead8bd] via-55% to-[#9b7d5b] bg-clip-text pb-2 text-4xl font-normal leading-[0.82] tracking-[0.055em] text-transparent">
                            Joseph
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TwoWorldsCard;