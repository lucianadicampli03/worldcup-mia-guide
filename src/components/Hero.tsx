import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-miami-ocean via-miami-teal to-miami-ocean text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-32">
        <p className="mb-4 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-widest backdrop-blur-sm">
          FIFA World Cup 2026™ — Miami Stadium
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          THE HEAT OF THE GAME.
          <span className="mt-2 block text-miami-coral">THE SOUL OF MIAMI.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Football on the world stage, turquoise water, Cuban coffee, art
          alleys, and nonstop Miami energy — your guide to the city during
          World Cup 2026.
        </p>

        <a
          href="#explore"
          className="group relative mt-8 inline-flex overflow-hidden rounded-full bg-miami-coral shadow-lg"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0"
          />
          <span className="relative z-10 px-6 py-3 text-base font-semibold text-white transition-colors duration-500 group-hover:text-miami-coral">
            Explore Miami →
          </span>
        </a>

        <Image
          src="/images/mascot-logo.png"
          alt="World Cup 2026 mascot"
          width={320}
          height={320}
          priority
          className="mt-6 h-44 w-auto object-contain sm:h-56 lg:h-72"
        />
      </div>
    </section>
  );
}
