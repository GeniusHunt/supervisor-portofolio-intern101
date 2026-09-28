import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/8 bg-background py-24 sm:py-32 lg:py-40"
    >
      {/* Large background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-24 select-none whitespace-nowrap text-[24vw] font-extrabold uppercase leading-none tracking-[-0.09em] text-white/2.5 lg:-left-20"
      >
        Skills
      </div>

      {/* Ambient glass texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-white/2.5 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-white/2 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section heading */}
        <div className="mb-16 flex items-start justify-between lg:mb-24">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-white/45">
              02.
            </span>

            <span className="h-px w-10 bg-white/15" />
          </div>

          <p className="hidden max-w-xs text-right text-xs uppercase leading-6 tracking-[0.15em] text-white/40 sm:block">
            Technical capabilities
            <br />
            &amp; professional expertise
          </p>
        </div>

        {/* Intro */}
        <div className="mb-16 max-w-4xl lg:mb-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
            Skills &amp; Expertise
          </p>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            Technology,
            <br />
            <span className="text-white/40">
              infrastructure &amp; leadership.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
            A combination of technical development, infrastructure management
            and leadership experience developed through more than eight years
            in the technology sector.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-4 md:grid-cols-2">

          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="skill-card group relative min-h-90 overflow-hidden rounded-4xl border border-white/10 bg-white/3.5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/22 hover:bg-white/6.5 sm:p-9"
            >

              {/* Glass reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-white/5.5 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/9"
              />

              {/* Fine texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Card top */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                  {group.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-white/50 transition-all duration-500 group-hover:rotate-45 group-hover:border-white/30 group-hover:text-white">
                  ↗
                </span>
              </div>

              {/* Image placeholder */}
              <div className="relative z-10 mt-8 h-28 w-full overflow-hidden rounded-2xl border border-white/8 bg-black/20">
                <div className="flex h-full items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                      <span className="text-[10px] font-semibold tracking-widest text-white/35">
                        IF
                      </span>
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                      Image Placeholder
                    </span>
                  </div>
                </div>

                {/* Image shine */}
                <div className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/6 transition-all duration-1000 group-hover:left-[130%]" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                  {group.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {group.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/2.5 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-white/55 transition-all duration-300 group-hover:border-white/18 group-hover:text-white/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-16 border-t border-white/8 pt-8 lg:mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <p className="max-w-xl text-sm leading-7 text-white/40">
              From writing software to maintaining physical infrastructure,
              the focus remains on solving real organizational technology
              problems.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Technical + Strategic
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;