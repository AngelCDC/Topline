import Image from "next/image"

const specs = [
  { label: "Material", value: "Termoplástico TPE" },
  { label: "Espesor", value: "Multicapa de 5.2mm" },
  { label: "Rango de Temp", value: "-40 a 230°F" },
  { label: "Peso", value: "3.2 lbs / tapete" },
]

export function PerformanceSection() {
  return (
    <section id="performance" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/30 origin-top-right skew-x-[-4deg] translate-x-32" />
      </div>

      <div className="relative px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Overlapping images */}
          <div className="flex-1 relative w-full">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Main image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src="/images/lifestyle-interior.jpg"
                  alt="Luxury car interior with DRIVEX premium floormats installed"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlapping detail image */}
              <div className="absolute -bottom-8 -right-4 md:-right-12 w-40 md:w-56 aspect-square overflow-hidden border-2 border-background bg-secondary shadow-2xl">
                <Image
                  src="/images/feature-closeup.jpg"
                  alt="Close-up of premium floormat texture detail"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Geometric corner */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-accent/40" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
                ESPECIFICACIONES DE RENDIMIENTO
              </span>
            </div>

            <h2 className="font-serif font-bold text-4xl md:text-5xl tracking-tight text-foreground text-balance">
              Cada detalle ingenierizado para dominar.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Nuestra construcción de tres capas combina elastómero termoplástico,
              espuma de alta densidad y goma nitrilo antideslizante para un
              tapete que supera en cada nivel.
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-px bg-border mt-4">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-background p-5 flex flex-col gap-1">
                  <span className="text-xs tracking-wider text-muted-foreground font-serif">
                    {spec.label}
                  </span>
                  <span className="text-lg font-serif font-bold text-foreground">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
