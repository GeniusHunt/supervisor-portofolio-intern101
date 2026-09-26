import { profile } from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32 lg:py-40"
    >
      {/* Large background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-20 select-none text-[22vw] font-extrabold uppercase leading-none tracking-[-0.08em] text-white/[0.025] lg:-right-20"
      >
        About
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-16 flex items-start justify-between lg:mb-24">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-secondary">
              01.
            </span>

            <span className="h-px w-10 bg-border" />
          </div>

          <p className="hidden max-w-xs text-right text-xs uppercase leading-6 tracking-[0.15em] text-secondary sm:block">
            Professional background
            <br />
            &amp; expertise
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

          {/* Left Content */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              About Me
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Technology with
              <br />
              <span className="text-secondary">
                purpose and impact.
              </span>
            </h2>

            <div className="mt-10 max-w-2xl border-t border-border pt-8">
              <p className="text-base leading-8 text-secondary sm:text-lg sm:leading-9">
                {profile.biography}
              </p>
            </div>

            {/* Expertise */}
            <div className="mt-12">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Areas of Expertise
              </p>

              <div className="grid border-t border-border sm:grid-cols-2">
                {profile.expertise.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between border-b border-border py-5 transition-all duration-300 hover:px-3"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] text-secondary">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-medium uppercase tracking-[0.08em]">
                        {item}
                      </span>
                    </div>

                    <span className="text-secondary transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content / Image Placeholder */}
          <div className="lg:pt-12">

            <div className="relative aspect-[4/5] overflow-hidden bg-surface-light">
              
              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center border border-border">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-border">
                  <span className="text-xl text-secondary">
                    IF
                  </span>
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                  Professional Image
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-secondary/60">
                  Image Placeholder
                </p>
              </div>

              {/* Decorative number */}
              <div className="absolute bottom-5 left-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-secondary">
                  MIS &amp; IT
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute right-5 top-5 h-10 w-10 border-r border-t border-secondary/30" />
            </div>

            {/* Caption beneath image */}
            <div className="mt-5 flex items-start justify-between border-t border-border pt-4">
              <p className="max-w-[200px] text-xs leading-5 text-secondary">
                Management Information Systems &amp; IT professional with
                extensive technology experience.
              </p>

              <span className="text-xs text-secondary">
                01 / 01
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Experience Statement */}
        <div className="mt-20 border-t border-border pt-8 lg:mt-32">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-7xl font-semibold tracking-[-0.06em] sm:text-8xl lg:text-9xl">
                {profile.experience}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-secondary">
                Years in the Technology Industry
              </p>
            </div>

            <p className="max-w-md text-sm leading-7 text-secondary">
              Combining technical knowledge, infrastructure management and
              leadership to support organizations through practical technology
              solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;