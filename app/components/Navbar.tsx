import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            PERTICARI
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-white/70 transition hover:text-white">
            Productos
          </a>

          <a href="#" className="text-sm font-medium text-white/70 transition hover:text-white">
            Nosotros
          </a>

          <a href="#" className="text-sm font-medium text-white/70 transition hover:text-white">
            Contacto
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
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