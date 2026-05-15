import {
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Trayectoria",
    description:
      "Décadas acompañando proyectos industriales y de construcción.",
  },
  {
    icon: Warehouse,
    title: "Amplio stock",
    description:
      "Gran variedad de productos y medidas disponibles.",
  },
  {
    icon: Truck,
    title: "Logística",
    description:
      "Entregas rápidas y atención personalizada para cada pedido.",
  },
  {
    icon: Wrench,
    title: "Asesoramiento",
    description:
      "Te ayudamos a encontrar exactamente lo que necesitás.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#093830] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#77D89E]">
              Perticari
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Más que materiales.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Construimos relaciones duraderas con clientes de herrería,
            construcción e industria a través de calidad, atención y confianza.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <span className="text-5xl font-black text-[#77D89E]">
              +50
            </span>

            <p className="mt-3 text-white/70">
              años en el rubro
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <span className="text-5xl font-black text-[#77D89E]">
              +1000
            </span>

            <p className="mt-3 text-white/70">
              productos disponibles
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <span className="text-5xl font-black text-[#77D89E]">
              100%
            </span>

            <p className="mt-3 text-white/70">
              atención personalizada
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#77D89E]/10">
                  <Icon size={28} className="text-[#77D89E]" />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}