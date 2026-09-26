import { profile } from "../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-background"
    >
      {/* Background word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[18vw] font-extrabold uppercase leading-none tracking-[-0.08em] text-white/[0.025]"
      >
        ISAAC
      </div>

      {/* Decorative line */}
      <div className="absolute left-6 top-1/2 hidden h-px w-16 bg-border lg:left-10 lg:block" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20">
        
        {/* Small introduction */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-8 bg-secondary" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            Hello, I'm
          </p>
        </div>

        {/* Name */}
        <h1 className="max-w-5xl text-[17vw] font-extrabold uppercase leading-[0.82] tracking-[-0.07em] sm:text-[13vw] md:text-[11vw] lg:text-[9rem]">
          Isaac
          <br />
          Frimpong
        </h1>

        {/* Bottom information */}
        <div className="mt-10 flex flex-col justify-between gap-8 border-t border-border pt-6 md:flex-row md:items-end">
          
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary md:text-base">
              {profile.title}
            </p>

            <p className="mt-3 max-w-lg text-sm leading-7 text-secondary">
              Aligning technology, infrastructure and organizational goals
              through practical IT expertise and technical leadership.
            </p>
          </div>

          <a
            href="#about"
            className="group flex w-fit items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            <span>Explore Portfolio</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:bg-primary group-hover:text-background">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* Experience badge */}
      <div className="absolute right-6 top-32 hidden text-right lg:right-10 lg:block">
        <p className="text-4xl font-bold tracking-tight">
          {profile.experience}
        </p>

        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-secondary">
          {profile.experienceLabel}
        </p>
      </div>
    </section>
  );
}

export default Hero;