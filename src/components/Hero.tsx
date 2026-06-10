import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-miami-ocean via-miami-teal to-miami-ocean text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-14 pb-6 text-center sm:px-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
        <p className="hero-enter hero-enter-1 mb-4 rounded-full bg-white/15 px-5 py-1.5 text-base font-semibold uppercase tracking-widest backdrop-blur-sm sm:text-lg">
          FIFA World Cup 2026™ — Miami Stadium
        </p>

        <h1 className="hero-enter hero-enter-2 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          THE HEAT OF THE GAME.
          <span className="mt-2 block text-miami-coral">THE SOUL OF MIAMI.</span>
        </h1>

        <p className="hero-enter hero-enter-3 mt-6 max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">
          Football on the world stage, turquoise water, Cuban coffee, art
          alleys, and nonstop Miami energy — your guide to the city during
          World Cup 2026.
        </p>

        <a
          href="#explore"
          className="hero-enter hero-enter-4 group relative mt-6 inline-flex overflow-hidden rounded-full bg-miami-coral shadow-lg"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0"
          />
          <span className="relative z-10 px-7 py-3.5 text-lg font-semibold text-white transition-colors duration-500 group-hover:text-miami-coral sm:text-xl">
            Explore Miami →
          </span>
        </a>

        <Image
          src="/images/mascot-logo.png"
          alt="World Cup 2026 mascot"
          width={320}
          height={320}
          priority
          className="hero-mascot-enter mt-4 h-36 w-auto object-contain sm:h-44 lg:h-52"
        />
      </div>
    </section>
  );
}
