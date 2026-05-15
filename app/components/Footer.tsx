export default function Footer() {
  return (
    <footer className="bg-[#093830] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        
        <div>
          <h2 className="text-2xl font-black">
            PERTICARI
          </h2>

          <p className="mt-2 text-sm text-white/60">
            Hierros y aceros para construcción e industria.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/70">
          <a href="#" className="transition hover:text-white">
            Productos
          </a>

          <a href="#" className="transition hover:text-white">
            Nosotros
          </a>

          <a href="#" className="transition hover:text-white">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}