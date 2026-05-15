import Link from "next/link";

type Props = {
  items: {
    label: string;
    href?: string;
  }[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          
          {item.href ? (
            <Link
              href={item.href}
              className="transition hover:text-[#093830]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#093830]">
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <span>/</span>
          )}
        </div>
      ))}
    </div>
  );
}