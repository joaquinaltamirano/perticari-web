"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header
      className={`left-0 top-0 z-50 w-full ${
        isHome
          ? "absolute"
          : "sticky border-b border-zinc-200 bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/">
          <h1
            className={`text-2xl font-black tracking-tight ${
              isHome ? "text-white" : "text-[#093830]"
            }`}
          >
            PERTICARI
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">
          
          <Link
            href="/productos"
            className={`text-sm font-medium transition ${
              isHome
                ? "text-white/70 hover:text-white"
                : "text-zinc-700 hover:text-[#093830]"
            }`}
          >
            Productos
          </Link>

          <Link
            href="#"
            className={`text-sm font-medium transition ${
              isHome
                ? "text-white/70 hover:text-white"
                : "text-zinc-700 hover:text-[#093830]"
            }`}
          >
            Nosotros
          </Link>

          <Link
            href="#"
            className={`text-sm font-medium transition ${
              isHome
                ? "text-white/70 hover:text-white"
                : "text-zinc-700 hover:text-[#093830]"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
              isHome
                ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "hover:bg-zinc-100"
            }`}
          >
            <Search size={20} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F86E71] text-white transition hover:opacity-90">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}