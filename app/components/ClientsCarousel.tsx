"use client";

import { clients } from "../data/clients";
import { motion } from "framer-motion";

export default function ClientsCarousel() {
  return (
    <section className="overflow-hidden border-y border-zinc-200 bg-white py-10">
      
      <div className="mb-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Empresas que confían en nosotros
        </span>
      </div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="flex w-max gap-16"
      >
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex h-20 w-52 items-center justify-center rounded-2xl border border-zinc-200 bg-[#f8faf9]"
          >
            <span className="text-lg font-black tracking-wide text-[#093830]/70">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}