import Link from "next/link"
import { JsonLd } from "./JsonLd"
import { buildBreadcrumbSchema } from "@/lib/internal-schemas"

interface BreadcrumbItem {
  label: string
  href: string
}

interface Props {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: Props) {
  const allItems = [{ label: "Inicio", href: "/" }, ...items]
  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: item.href,
  }))

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span aria-hidden="true" className="text-gray-300">/</span>
                )}
                {isLast ? (
                  <span className="text-midnight/70 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
