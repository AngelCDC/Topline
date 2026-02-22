"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Productos", href: "/productos" },
  { label: "Marcas", href: "/marcas" },
  { label: "Mi Garaje", href: "/garaje" },
  { label: "Acerca de", href: "/acerca-de" },
  { label: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between px-6 lg:px-12 h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="w-1 h-6 bg-accent" />
          <span className="font-serif text-xl font-bold tracking-widest text-foreground">
            TOPLINE
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a href="/productos" aria-label="Shopping bag">
            <ShoppingBag className="w-5 h-5 text-foreground" />
          </a>
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide text-xs"
          >
            <a href="/productos">COMPRAR AHORA</a>
          </Button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-serif tracking-wide text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide"
            >
              <a href="/productos">COMPRAR AHORA</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
