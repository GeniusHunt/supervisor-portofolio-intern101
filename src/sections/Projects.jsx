import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const sectionRef = useRef(null);

  const [entered, setEntered] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const active = projects[activeProject];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#090909] text-white"
    >
      {/* =========================================================
          DARK → LIGHT TRANSITION ATMOSPHERE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[55vh] z-0 h-[45vh] w-full"
        style={{
          background:
            "linear-gradient(to bottom, #090909 0%, #11110f 18%, #242421 38%, #555550 55%, #a5a49e 72%, #d8d7d1 88%, #e7e6e0 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[65vh] z-0 h-[35vh] w-full bg-[#d8d7d1] opacity-50 blur-[80px]"
      />

      {/* =========================================================
          CYBERNETIC ENTRY PORTAL
      ========================================================= */}

      <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        {/* Cyber grid */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            entered ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* Perspective floor */}
        <div
          aria-hidden="true"
          className={`absolute bottom-[-25%] left-1/2 h-[80%] w-[140%] -translate-x-1/2 [transform:perspective(500px)_rotateX(62deg)] transition-opacity duration-[1200ms] ${
            entered ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Scan line */}
        <div
          aria-hidden="true"
          className={`absolute left-0 top-0 h-px w-full bg-white/50 ${
            entered
              ? "opacity-0"
              : "animate-[scan_4s_linear_infinite]"
          }`}
        />

        {/* Ambient cyber glow */}
        <div
          aria-hidden="true"
          className={`absolute h-[30rem] w-[30rem] rounded-full bg-white/[0.04] blur-[100px] transition-all duration-[1800ms] ${
            entered ? "scale-[2] opacity-0" : "scale-100 opacity-100"
          }`}
        />

        {/* =====================================================
            ROTATING RINGS
        ===================================================== */}

        <div
          aria-hidden="true"
          className={`absolute h-[22rem] w-[22rem] rounded-full border border-white/[0.08] transition-all duration-[1800ms] ${
            entered
              ? "scale-[3] rotate-[180deg] opacity-0"
              : "animate-[spin_18s_linear_infinite]"
          }`}
        />

        <div
          aria-hidden="true"
          className={`absolute h-[16rem] w-[16rem] rounded-full border border-dashed border-white/[0.12] transition-all duration-[1800ms] ${
            entered
              ? "scale-[3] -rotate-[180deg] opacity-0"
              : "animate-[spinReverse_12s_linear_infinite]"
          }`}
        />

        <div
          aria-hidden="true"
          className={`absolute h-[9rem] w-[9rem] rounded-full border border-white/[0.20] transition-all duration-[1800ms] ${
            entered ? "scale-[4] opacity-0" : "scale-100"
          }`}
        />

        {/* =====================================================
            CENTRAL SYSTEM
        ===================================================== */}

        <div
          className={`relative z-10 flex flex-col items-center text-center transition-all duration-[1500ms] ${
            entered
              ? "scale-[1.8] opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_white]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-white/45">
              System Transition
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_white]" />
          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/25">
            PORTFOLIO / 03 / ACCESSING
          </p>

          <h2 className="mt-5 text-5xl font-extrabold uppercase tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-[9rem]">
            Projects
          </h2>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-white/20" />

            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
              Entering new interface
            </p>

            <div className="h-px w-12 bg-white/20" />
          </div>

          {/* Loading indicator */}
          <div className="mt-10 flex h-1 w-40 overflow-hidden rounded-full bg-white/[0.08]">
            <div className="h-full w-1/3 animate-[loading_2s_ease-in-out_infinite] bg-white/60" />
          </div>
        </div>

        {/* Coordinates */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 font-mono text-[8px] uppercase leading-6 tracking-[0.25em] text-white/20 lg:block">
          SYS.03
          <br />
          TRANSITION
          <br />
          X: 04.281
          <br />
          Y: 91.002
          <br />
          Z: 00.714
        </div>

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-right font-mono text-[8px] uppercase leading-6 tracking-[0.25em] text-white/20 lg:block">
          SIGNAL
          <br />
          STABLE
          <br />
          VIEW
          <br />
          CHANGING
          <br />
          001 / 100
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/25">
            Scroll to enter
          </p>

          <div className="mx-auto mt-4 h-8 w-px overflow-hidden bg-white/10">
            <div className="h-1/2 w-full animate-[scrollIndicator_1.5s_ease-in-out_infinite] bg-white/60" />
          </div>
        </div>

        {/* Transition seam */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 z-20 h-32 w-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(216,215,209,0.15), rgba(216,215,209,0.55), #d8d7d1)",
          }}
        />
      </div>

      {/* =========================================================
          LIGHT PROJECT INTERFACE
      ========================================================= */}

      <div
        className={`relative min-h-screen overflow-hidden border-t border-black/10 px-6 py-24 text-[#171715] transition-all duration-[1800ms] lg:px-10 lg:py-40 ${
          entered
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(180deg, #d8d7d1 0%, #e3e2dc 12%, #e9e8e2 35%, #eeede7 65%, #e8e7e1 100%)",
        }}
      >
        {/* =====================================================
            BLACK / LIGHT FUSION HAZE
        ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[130%] -translate-x-1/2 rounded-[50%] bg-black/[0.12] blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-[50%] bg-white/[0.18] blur-[70px]"
        />

        {/* Light interface texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Huge background typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-20 select-none whitespace-nowrap text-[23vw] font-extrabold uppercase leading-none tracking-[-0.1em] text-black/[0.045]"
        >
          WORK
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="mb-20 flex items-start justify-between lg:mb-28">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-black/45">
                04.
              </span>

              <span className="h-px w-10 bg-black/15" />
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-[9px] uppercase tracking-[0.25em] text-black/35">
                Selected Work
              </p>

              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-black/25">
                Concept / Demonstration
              </p>
            </div>
          </div>

          {/* =====================================================
              INTRO
          ===================================================== */}

          <div className="mb-20 max-w-5xl lg:mb-28">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-black/45">
              Projects &amp; Solutions
            </p>

            <h2 className="text-5xl font-extrabold leading-[0.9] tracking-[-0.07em] sm:text-6xl md:text-8xl lg:text-[9rem]">
              Ideas
              <br />
              <span className="text-black/25">built into</span>
              <br />
              systems.
            </h2>

            <p className="mt-10 max-w-2xl text-sm leading-7 text-black/50 sm:text-base sm:leading-8">
              A collection of conceptual technology solutions representing
              software development, information systems, infrastructure and
              practical ICT problem-solving.
            </p>
          </div>

          {/* =====================================================
              PROJECT SELECTOR
          ===================================================== */}

          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Project list */}
            <div className="space-y-2">
              {projects.map((project, index) => {
                const isActive = activeProject === index;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveProject(index)}
                    aria-label={`Show project: ${project.title}`}
                    aria-pressed={isActive}
                    className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 ${
                      isActive
                        ? "border-black/20 bg-black text-white shadow-2xl"
                        : "border-black/[0.10] bg-black/[0.025] hover:border-black/20 hover:bg-black/[0.05]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-[9px] ${
                            isActive
                              ? "text-white/40"
                              : "text-black/30"
                          }`}
                        >
                          {project.id}
                        </span>

                        <span
                          className={`text-xs font-semibold uppercase tracking-[0.08em] ${
                            isActive
                              ? "text-white"
                              : "text-black/65"
                          }`}
                        >
                          {project.shortTitle}
                        </span>
                      </div>

                      <span
                        className={`transition-transform duration-300 ${
                          isActive
                            ? "rotate-45 text-white"
                            : "text-black/30 group-hover:translate-x-1"
                        }`}
                      >
                        ↗
                      </span>
                    </div>

                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-px w-full bg-white/20">
                        <div className="h-full w-1/3 bg-white/70" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* =================================================
                ACTIVE PROJECT
            ================================================= */}

            <article className="group relative min-h-[620px] overflow-hidden rounded-[2rem] border border-black/[0.10] bg-[#f5f4ef]/75 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-7">
              {/* Project number */}
              <div className="absolute right-5 top-0 select-none text-[15rem] font-extrabold leading-none tracking-[-0.15em] text-black/[0.035] sm:right-10">
                {active.id}
              </div>

              {/* Project image */}
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] border border-black/[0.10] bg-[#deddd7]">
                {/* Abstract interface */}
                <div className="absolute inset-0">
                  <div className="absolute left-[12%] top-[18%] h-px w-[70%] bg-black/10" />

                  <div className="absolute left-[12%] top-[35%] h-px w-[50%] bg-black/10" />

                  <div className="absolute left-[12%] top-[52%] h-px w-[65%] bg-black/10" />

                  <div className="absolute bottom-[18%] left-[12%] h-20 w-[30%] border border-black/10" />

                  <div className="absolute bottom-[18%] right-[12%] h-20 w-[45%] border border-black/10" />

                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/15">
                    <div className="absolute inset-3 rounded-full border border-dashed border-black/15" />
                  </div>
                </div>

                {/* Placeholder label */}
                <div className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/50 px-3 py-2 backdrop-blur-md">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/40">
                    Project Visual
                  </span>
                </div>

                <div className="absolute bottom-5 right-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/30">
                    IMAGE PLACEHOLDER
                  </span>
                </div>

                {/* Moving scan */}
                <div className="absolute left-0 top-0 h-full w-px animate-[projectScan_4s_linear_infinite] bg-black/20" />
              </div>

              {/* Project content */}
              <div className="relative z-10 mt-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.15em] text-black/40">
                    {active.category}
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-black/25">
                    SYSTEM / {active.id}
                  </span>
                </div>

                <h3 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                  {active.title}
                </h3>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-black/50">
                  {active.description}
                </p>

                {/* Technologies */}
                <div className="mt-8">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-black/30">
                    Technology
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {active.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-black/10 px-3 py-2 text-[9px] uppercase tracking-[0.1em] text-black/55 transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus */}
                <div className="mt-7 border-t border-black/10 pt-6">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-black/30">
                    System Focus
                  </p>

                  <div className="grid gap-2 sm:grid-cols-3">
                    {active.focus.map((item) => (
                      <div
                        key={item}
                        className="border border-black/[0.08] bg-black/[0.02] px-3 py-3 transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <span className="text-[9px] uppercase tracking-[0.08em]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom status */}
              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/25">
                  Conceptual System
                </span>

                <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-black/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-black/50" />
                  Interface Ready
                </span>
              </div>
            </article>
          </div>

          {/* =====================================================
              FOOTER STATEMENT
          ===================================================== */}

          <div className="mt-20 border-t border-black/10 pt-8 lg:mt-28">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-black/30">
                  From concept to system
                </p>

                <p className="mt-3 max-w-lg text-sm leading-7 text-black/45">
                  Combining software, infrastructure and information systems
                  to create practical technology solutions.
                </p>
              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/25">
                PROJECTS / 03
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;