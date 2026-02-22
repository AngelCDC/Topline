import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative bg-secondary py-24 lg:py-32 overflow-hidden">
      {/* Geometric overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-background/30 origin-top-left skew-x-[6deg] -translate-x-20" />
        <div className="absolute top-8 right-8 w-20 h-20 border border-accent/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-accent/20" />
      </div>

      <div className="relative px-6 lg:px-12 text-center flex flex-col items-center gap-8">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
            MEJORA TU CONDUCCIÓN
          </span>
          <span className="w-8 h-px bg-accent" />
        </div>

        <h2 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground max-w-3xl text-balance">
          Tu vehículo merece lo mejor.
        </h2>

        <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
          Ajuste
          preciso garantizado para tu marca, modelo y año exactos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide"
            asChild
          >
            <Link href="/productos">
              ENCUENTRA TU AJUSTE
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-background font-serif tracking-wide"
            asChild
          >
            <Link href="/marcas">VER TODOS LOS VEHÍCULOS</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
