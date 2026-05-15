export default function TeamSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#77D89E]">
            Equipo
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#093830] md:text-5xl">
            Personas detrás de cada proyecto.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            Atención personalizada y experiencia real en el rubro industrial.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl"
            >
              
              {/* Fake image */}
              <div className="relative h-[420px] overflow-hidden bg-[#093830]">
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#77D89E]/20 to-transparent" />

                <div className="flex h-full items-center justify-center">
                  <span className="text-lg font-bold text-white/40">
                    FOTO EMPLEADO
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-[#093830]">
                  Nombre Apellido
                </h3>

                <p className="mt-2 text-sm text-[#F86E71]">
                  Atención comercial
                </p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  Asesoramiento personalizado para clientes de construcción e industria.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}