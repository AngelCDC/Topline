import Link from "next/link"

const footerLinks = [
  {
    heading: "Tienda",
    links: [
      { label: "Productos", href: "/productos" },
      { label: "Mi Garaje", href: "/garaje" },
      { label: "Marcas", href: "/marcas" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Acerca de Nosotros", href: "/acerca-de" },
      { label: "Contacto", href: "/contacto" },
      { label: "Prensa", href: "#" },
    ],
  },
  {
    heading: "Soporte",
    links: [
      { label: "Guía de Ajuste", href: "/garaje" },
      { label: "Contacto", href: "/contacto" },
      { label: "Garantía", href: "/contacto" },
      { label: "Preguntas Frecuentes", href: "/contacto" },
    ],
  },
]

const footerLinksByGroup = [
  { label: "Privacidad", href: "#" },
  { label: "Términos", href: "#" },
  { label: "Cookies", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Brand column */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <span className="w-1 h-6 bg-accent" />
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                TOPLINE
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Accesorios de automóvil de precisión ingenierizada para conductores
              que exigen rendimiento, protección y estilo.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <span className="text-xs font-serif font-bold tracking-[0.2em] text-foreground">
                  {col.heading.toUpperCase()}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          {new Date().getFullYear()} DRIVEX. Todos los derechos reservados.
        </span>
        <div className="flex gap-6">
          {footerLinksByGroup.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
