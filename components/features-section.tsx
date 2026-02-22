import { Shield, Layers, Gauge, Zap } from "lucide-react"

const features = [
  {
    icon: Gauge,
    number: "01",
    title: "Ajuste Preciso",
    description:
      "Medido con láser a tu modelo de vehículo exacto. Cada curva, cada contorno - un ajuste perfecto que se ve de fábrica.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Protección Extrema",
    description:
      "Barreras ingenieridas contra agua, lodo, sal y suciedad. Tu interior permanece impecable en cada estación.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Construcción Multicapa",
    description:
      "Construcción de tres capas con base antideslizante, núcleo absorbente de impactos y superficie premium para durabilidad incomparable.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Instalación Rápida",
    description:
      "Se ajusta en menos de 60 segundos. Sin herramientas, sin complicaciones. Diseñado para la vida real a velocidad real.",
  },
]

export function FeaturesSection() {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32">
      {/* Section header */}
      <div className="px-6 lg:px-12 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
            POR QUÉ DRIVEX
          </span>
        </div>
        <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground max-w-2xl text-balance">
          Ingenierizado para quienes exigen más.
        </h2>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="group relative flex flex-col px-6 lg:px-8 py-10 border-b lg:border-b-0 lg:border-r border-border last:border-r-0 hover:bg-secondary/50 transition-colors"
          >
            {/* Hover corner accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-transparent group-hover:border-accent/50 transition-colors" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-transparent group-hover:border-accent/50 transition-colors" />

            <span className="text-xs font-serif text-muted-foreground tracking-wider mb-6">
              {feature.number}
            </span>
            <feature.icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
            <h3 className="font-serif font-bold text-lg text-foreground mb-3 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
