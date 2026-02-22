import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Tapetes ProShield",
    tag: "Más Vendido",
    price: "$129.99",
    image: "/images/product-floormat.jpg",
    description: "Protección de piso de ajuste preciso para todo clima",
  },
  {
    name: "Forro de Carga Armor",
    tag: "Nuevo",
    price: "$89.99",
    image: "/images/product-cargo.jpg",
    description: "Defensa de área de maletero y carga resistente",
  },
  {
    name: "Cubierta de Volante GripTech",
    tag: "Popular",
    price: "$49.99",
    image: "/images/product-steering.jpg",
    description: "Agarre de rendimiento tejido de fibra de carbono",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="relative bg-background py-24 lg:py-32">
      {/* Diagonal background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/30 origin-bottom-left skew-x-[8deg] -translate-x-12" />
      </div>

      <div className="relative px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
                LA COLECCIÓN
              </span>
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground text-balance">
              Construido para rendir.
            </h2>
          </div>
          <Button
            variant="outline"
            className="self-start md:self-auto border-border text-foreground hover:bg-secondary font-serif tracking-wide"
          >
            VER TODO
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.name} className="group relative flex flex-col">
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-serif font-bold tracking-wider px-3 py-1">
                  {product.tag}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground font-serif text-sm tracking-wider bg-background/80 px-4 py-2">
                    VER RÁPIDO
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-1">
                <h3 className="font-serif font-bold text-lg text-foreground tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="font-serif font-bold text-lg text-foreground">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-xs tracking-wider"
                  >
                    AGREGAR
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
