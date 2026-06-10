export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-miami-ocean via-miami-teal to-miami-ocean text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        {/* First <p> — small badge at the top */}
        <p className="mb-4 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-widest backdrop-blur-sm">
          Miami 26
        </p>

        {/* <h1> comes AFTER the badge, not inside the <p> */}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          THE HEAT OF THE GAME.
          <span className="mt-2 block text-miami-coral">THE SOUL OF MIAMI.</span>
        </h1>

        {/* Second <p> — subtitle goes HERE, after </h1> and before the button */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Football on the world stage, turquoise water, Cuban coffee, art
          alleys, and nonstop Miami energy — your guide to the city during
          World Cup 2026.
        </p>

        <a
          href="#explore"
          className="mt-8 inline-flex items-center rounded-full bg-miami-coral px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-500"
        >
          Explore Miami
        </a>
      </div>
    </section>
  );
}
