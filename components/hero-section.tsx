import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-30">
      {/* Diagonal geometric overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 origin-top-right skew-x-[-6deg] translate-x-20" />
        <div className="absolute bottom-0 left-1/3 w-px h-1/2 bg-border" />
        <div className="absolute top-1/4 right-1/4 w-px h-1/3 bg-border" />
        {/* Geometric corner marks */}
        <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-accent/30" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-r border-b border-accent/20" />
      </div>

      <div className="relative w-full px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col gap-8 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
                PRECISIÓN INGENIERIZADA
              </span>
            </div>

            <h1 className="font-serif font-bold leading-[0.9] tracking-tight text-foreground">
              <span className="block text-6xl md:text-8xl lg:text-9xl">
                MÁS ALLÁ
              </span>
              <span className="block text-6xl md:text-8xl lg:text-9xl">
                DE TUS
              </span>
              <span className="block text-6xl md:text-8xl lg:text-9xl text-accent">
                LÍMITES.
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Accesorios de automóvil de grado de rendimiento y tapetes
              diseñados para aquellos que se niegan a comprometer. Ajuste a
              medida. Probados en pista. Construido para dominar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide"
                asChild
              >
                <Link href="/productos">
                  NUESTROS PRODUCTOS
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary font-serif tracking-wide"
                asChild
              >
                <Link href="/garaje">ENCUENTRA TU AJUSTE</Link>
              </Button>
            </div>

            {/* Stats strip */}
            <div className="flex gap-8 pb-10 mt-4 pt-8 border-t border-border">
              {[
                { value: "500K+", label: "Unidades Vendidas" },
                { value: "200+", label: "Modelos de Vehículos" },
                { value: "4.9", label: "Calificación Promedio" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-wide text-muted-foreground mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product image with floating frame 
          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              
              <div className="absolute top-6 left-6 right-[-6px] bottom-[-6px] border border-accent/30" />
              <div className="relative w-full h-full overflow-hidden bg-secondary">
                <Image
                  src="/images/hero-floormat.jpg"
                  alt="Premium DRIVEX car floormat with angular geometric pattern"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
           
              <div className="hidden md:block absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2">
                <span className="text-xs font-serif font-bold tracking-wider">
                  AJUSTE PERSONALIZADO
                </span>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
