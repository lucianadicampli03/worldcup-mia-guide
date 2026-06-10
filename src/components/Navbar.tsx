const navLinks = [
    { label: "Explore", href: "#explore" },
    { label: "Food", href: "#food" },
    { label: "Survival Guide", href: "#survival" },
    { label: "Assistant", href: "#assistant" },
  ];
  
  export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 border-b border-miami-sand bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="text-lg font-bold tracking-tight text-miami-ocean sm:text-xl"
          >
            Miami <span className="text-miami-teal">26</span>
          </a>
  
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-miami-sand hover:text-miami-ocean sm:px-4 sm:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }