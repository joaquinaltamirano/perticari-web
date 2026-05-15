import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#093830] text-white">
      
      {/* Background glow */}
      <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#77D89E]/20 blur-3xl" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24">
        
        {/* Content */}
        <div className="max-w-3xl">
          
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
            Hierros y aceros para construcción e industria
          </span>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Encontrá productos industriales en segundos.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            Buscá medidas, espesores y precios de caños, chapas, perfiles y mucho más.
          </p>

          {/* Search */}
          <div className="mt-10 flex w-full max-w-2xl items-center rounded-2xl bg-white p-2 shadow-2xl">
            
            <div className="flex flex-1 items-center gap-3 px-4">
              <Search className="text-zinc-400" size={22} />

              <input
                type="text"
                placeholder="Ej: Caño 30x30 1.6"
                className="w-full bg-transparent py-3 text-zinc-800 outline-none placeholder:text-zinc-400"
              />
            </div>

            <button className="rounded-xl bg-[#F86E71] px-6 py-4 font-semibold text-white transition hover:opacity-90">
              Buscar
            </button>
          </div>

          {/* Quick categories */}
          <div className="mt-8 flex flex-wrap gap-3">
            
            {[
              "Caños",
              "Chapas",
              "Perfiles",
              "Tubos",
              "Hierros",
              "Construcción",
            ].map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}