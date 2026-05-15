export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F86E71] py-24 text-white">
      
      {/* Glow */}
      <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        
        <span className="text-sm font-semibold uppercase tracking-widest text-white/70">
          Contacto
        </span>

        <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
          Armá tu pedido hoy mismo.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Consultanos por WhatsApp, teléfono o email y recibí atención personalizada para tu proyecto.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-[#093830] transition hover:scale-105">
            Enviar pedido
          </button>

          <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20">
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}