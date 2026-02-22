import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Zap, Target, Heart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Acerca de | DRIVEX",
  description: "Descubre la historia y misión de DRIVEX",
}

export default function AcercaDePage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Large Hero */}
      <section className="relative w-full h-96 md:h-screen/2 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="relative z-10 text-center px-6 lg:px-12 max-w-3xl">
          <span className="inline-block text-xs tracking-[0.3em] text-accent font-serif font-medium mb-6">
            ACERCA DE DRIVEX
          </span>
          <h1 className="font-serif font-bold text-5xl md:text-8xl tracking-tight text-foreground mb-6 text-balance">
            Rendimiento. Precisión. Pasión.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Cada producto es una promesa de calidad sin compromiso.
          </p>
        </div>
      </section>

      {/* Story Section - Alternating Layout */}
      <section className="py-24 px-6 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Bloque 1: Story + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
                NUESTRA HISTORIA
              </span>
              <h2 className="font-serif font-bold text-4xl md:text-5xl tracking-tight text-foreground mt-3 mb-6 text-balance">
                Nacida de la Obsesión por la Perfección
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                En 2015, un grupo de ingenieros y entusiastas automotrices se propusieron resolver un problema que nadie quería abordar: proteger los interiores de automóviles de forma elegante, precisa y duradera.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Lo que comenzó como un pequeño proyecto se convirtió en DRIVEX, la marca que redefinió el estándar de los accesorios automotrices. Hoy, servimos a más de 500,000 conductores que se niegan a comprometer.
              </p>
            </div>
            <div className="relative h-96 md:h-full hidden lg:block">
              <Image
                src="/images/lifestyle-interior.jpg"
                alt="DRIVEX Interior"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          {/* Bloque 2: Values Grid */}
          <div className="py-12 border-y border-border">
            <h3 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-16 text-balance">
              Nuestros Valores Fundamentales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 flex items-center justify-center rounded-sm">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-serif font-bold text-xl text-foreground">Rendimiento</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Cada material y diseño es probado bajo condiciones extremas. No hay compromisos.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 flex items-center justify-center rounded-sm">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-serif font-bold text-xl text-foreground">Precisión</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Mediciones láser. Encajes perfectos. Ajuste a tu vehículo exacto, no a aproximaciones.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 flex items-center justify-center rounded-sm">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-serif font-bold text-xl text-foreground">Pasión</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Construimos para conductores que aman sus vehículos. Compartimos tu obsesión.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 3: Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {[
              { number: "500K+", label: "Conductores Satisfechos" },
              { number: "200+", label: "Modelos de Vehículos" },
              { number: "9+", label: "Años de Excelencia" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif font-bold text-5xl md:text-6xl text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Bloque 4: Process */}
          <div className="space-y-8">
            <h3 className="font-serif font-bold text-3xl md:text-4xl text-foreground text-balance">
              Nuestro Compromiso con la Calidad
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Investigación", desc: "Analizamos tu vehículo en profundidad" },
                { step: "02", title: "Diseño", desc: "Creamos ajustes personalizados perfectos" },
                { step: "03", title: "Manufactura", desc: "Producción con estándares internacionales" },
                { step: "04", title: "Garantía", desc: "Respaldo de por vida en todos los productos" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col">
                  <span className="text-6xl md:text-7xl font-serif font-bold text-accent/30 mb-2">
                    {item.step}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="max-w-2xl">
          <h2 className="font-serif font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
            Únete a la Revolución DRIVEX
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            Descubre por qué más de 500,000 conductores confían en DRIVEX para proteger y elevar sus vehículos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide" asChild>
              <Link href="/productos">
                EXPLORAR PRODUCTOS
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary font-serif tracking-wide" asChild>
              <Link href="/contacto">CONTACTARNOS</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
