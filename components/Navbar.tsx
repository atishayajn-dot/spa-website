"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto h-18 px-8 flex items-center justify-between">

        <Link
          href="/"
          className="text-white text-xl font-semibold tracking-tight hover:text-amber-400 transition-colors duration-300"
        >
          Smita Patni & Associates
        </Link>

        <nav className="flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[17px] font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? "text-amber-400"
                  : "text-white hover:text-amber-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}