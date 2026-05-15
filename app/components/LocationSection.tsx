import { MapPin, Phone, Mail } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-[#f8faf9] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        
        {/* Info */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-[#77D89E]">
            Ubicación
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#093830] md:text-5xl">
            Estamos en Barracas.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            Visitá nuestras instalaciones o comunicate con nosotros para recibir asesoramiento personalizado.
          </p>

          <div className="mt-10 space-y-6">
            
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-[#F86E71]" />

              <div>
                <h3 className="font-bold text-[#093830]">
                  Dirección
                </h3>

                <p className="text-zinc-600">
                  Av. Amancio Alcorta 2450, Barracas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-[#F86E71]" />

              <div>
                <h3 className="font-bold text-[#093830]">
                  Teléfono
                </h3>

                <p className="text-zinc-600">
                  +54 11 4301-0000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-[#F86E71]" />

              <div>
                <h3 className="font-bold text-[#093830]">
                  Email
                </h3>

                <p className="text-zinc-600">
                  ventas@perticari.com.ar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fake map */}
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-[#093830]">
          
          <div className="flex h-full min-h-[400px] items-center justify-center">
            <span className="text-lg font-bold text-white/40">
              MAPA / GOOGLE MAPS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}