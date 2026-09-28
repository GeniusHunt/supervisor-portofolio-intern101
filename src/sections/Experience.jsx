import { useState } from "react";
import { experiences } from "../data/experience";

function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);

  const active = experiences[activeExperience];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#090909] py-24 sm:py-32 lg:py-40"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 select-none whitespace-nowrap text-[21vw] font-extrabold uppercase leading-none tracking-[-0.1em] text-white/[0.025]"
      >
        Experience
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[35%] h-72 w-72 rounded-full bg-white/[0.025] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-white/2 blur-[140px]"
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-16 flex items-start justify-between lg:mb-24">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-white/45">
              03.
            </span>

            <span className="h-px w-10 bg-white/15" />
          </div>

          <p className="hidden max-w-xs text-right text-xs uppercase leading-6 tracking-[0.15em] text-white/40 sm:block">
            Professional journey
            <br />
            leadership &amp; impact
          </p>
        </div>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <div className="mb-16 max-w-5xl lg:mb-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
            Professional Experience
          </p>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            Where technology
            <br />
            <span className="text-white/35">
              meets leadership.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
            Experience spanning municipal information systems, IT
            infrastructure, software deployment, hardware management and
            technical leadership.
          </p>
        </div>

        {/* =========================================================
            EXPERIENCE LAYOUT
        ========================================================= */}

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">

          {/* =======================================================
              LEFT EXPERIENCE NAVIGATION
          ======================================================= */}

          <div className="relative">

            {/* Timeline */}
            <div className="absolute bottom-8 left-[15px] top-8 w-px bg-white/[0.08]" />

            <div className="space-y-3">
              {experiences.map((experience, index) => {
                const isActive = activeExperience === index;

                return (
                  <button
                    key={experience.id}
                    type="button"
                    onClick={() => setActiveExperience(index)}
                    aria-label={`Show experience at ${experience.organization}`}
                    aria-pressed={isActive}
                    className={`group relative block w-full text-left transition-all duration-500 ${
                      isActive
                        ? "translate-x-2"
                        : "hover:translate-x-1"
                    }`}
                  >
                    {/* Timeline point */}
                    <span
                      className={`absolute left-0 top-8 z-20 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-white/50 bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                          : "border-white/15 bg-[#090909] text-white/30 group-hover:border-white/35 group-hover:text-white/70"
                      }`}
                    >
                      <span className="text-[9px] font-bold">
                        {experience.id}
                      </span>
                    </span>

                    {/* Glass card */}
                    <div
                      className={`ml-10 overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-500 sm:p-7 ${
                        isActive
                          ? "border-white/[0.20] bg-white/[0.065] backdrop-blur-2xl"
                          : "border-white/[0.08] bg-white/[0.025] hover:border-white/[0.15] hover:bg-white/[0.045]"
                      }`}
                    >
                      {/* reflection */}
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl transition-all duration-700 ${
                          isActive
                            ? "scale-150 bg-white/[0.08]"
                            : "group-hover:scale-125"
                        }`}
                      />

                      <div className="relative z-10">

                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                              {experience.period}
                            </p>

                            <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                              {experience.organization}
                            </h3>
                          </div>

                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-500 ${
                              isActive
                                ? "rotate-45 border-white/30 text-white"
                                : "border-white/[0.10] text-white/35 group-hover:text-white"
                            }`}
                          >
                            ↗
                          </span>
                        </div>

                        <div className="mt-5 border-t border-white/[0.08] pt-5">
                          <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/60">
                            {experience.role}
                          </p>

                          <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
                            {experience.type}
                          </p>
                        </div>

                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =======================================================
              RIGHT ACTIVE EXPERIENCE
          ======================================================= */}

          <div className="relative">

            <div className="group relative min-h-[600px] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.035] backdrop-blur-2xl">

              {/* Large background number */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-16 select-none text-[18rem] font-extrabold leading-none tracking-[-0.12em] text-white/[0.025]"
              >
                {active.id}
              </div>

              {/* Glass light */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/[0.055] blur-[100px] transition-transform duration-1000 group-hover:scale-125"
              />

              {/* Image placeholder */}
              <div className="relative mx-5 mt-5 h-56 overflow-hidden rounded-[1.5rem] border border-white/[0.10] bg-black/30 sm:mx-7 sm:mt-7 sm:h-64">

                {/* placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="relative flex flex-col items-center">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.025] backdrop-blur-xl transition-transform duration-700 group-hover:scale-110">
                      <span className="text-xl font-semibold tracking-[0.1em] text-white/40">
                        IF
                      </span>
                    </div>

                    <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/25">
                      Experience Image
                    </p>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/15">
                      Image Placeholder
                    </p>
                  </div>
                </div>

                {/* image frame corners */}
                <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-white/20" />

                <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-white/20" />

                {/* animated shine */}
                <div className="absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-white/[0.06] transition-all duration-[1200ms] group-hover:left-[130%]" />

                {/* image label */}
                <div className="absolute bottom-4 left-4 rounded-full border border-white/[0.10] bg-black/30 px-3 py-1.5 backdrop-blur-xl">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                    Professional Archive
                  </span>
                </div>
              </div>

              {/* Active content */}
              <div className="relative z-10 p-6 sm:p-8">

                {/* Top meta */}
                <div className="flex flex-col gap-3 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                      {active.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                      {active.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />

                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      {active.duration}
                    </span>
                  </div>
                </div>

                {/* Organization */}
                <div className="mt-7">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                    Organization
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    {active.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
                  {active.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-8">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                    Key Responsibilities
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {active.responsibilities.map((item, index) => (
                      <div
                        key={item}
                        className="group/item flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-3 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
                      >
                        <span className="text-[9px] text-white/25">
                          0{index + 1}
                        </span>

                        <span className="text-[10px] uppercase tracking-[0.04em] text-white/55 transition-colors group-hover/item:text-white/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Focus tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {active.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-white/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom animated line */}
              <div className="absolute bottom-0 left-8 right-8 h-px overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-[250%]" />
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <div className="mt-16 border-t border-white/[0.08] pt-8 lg:mt-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                Experience philosophy
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/40">
                Technology is most valuable when technical expertise,
                infrastructure and organizational objectives work together.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/20" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                8+ Years
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;