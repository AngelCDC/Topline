'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  price: number
  description: string
}

export default function ProductosClient() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [maxPrice, setMaxPrice] = useState(200)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const categories = ["Todos", ...new Set(products.map(p => p.category))]

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "Todos" || product.category === selectedCategory
    const priceMatch = product.price <= maxPrice
    return categoryMatch && priceMatch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/hero-products.jpg"
          alt="Productos DRIVEX"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-background/20" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
              NUESTRA COLECCIÓN
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-6xl tracking-tight text-foreground mb-4 text-balance">
            Accesorios Perfectos para Tu Vehículo
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Tapetes y accesorios premium diseñados para proteger y elevar tu experiencia de conducción.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 lg:px-12 bg-background">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filtros
                </h3>
              </div>

              {/* Categorías */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 tracking-wide">
                  CATEGORÍA
                </h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-sm transition-colors ${
                        selectedCategory === cat
                          ? "text-accent font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rango de Precio */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 tracking-wide">
                  PRECIO MÁXIMO
                </h4>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="mt-2 text-sm text-foreground font-semibold">
                  ${maxPrice}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid de productos */}
          <div className="flex-1">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Cargando productos...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative flex flex-col">
                    {/* Image container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-5">
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Imagen no disponible</span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground font-serif text-sm tracking-wider bg-background/80 px-4 py-2">
                          VER DETALLES
                        </span>
                      </div>
                    </div>

                    {/* Category badge */}
                    <span className="text-xs tracking-widest text-muted-foreground font-semibold mb-2">
                      {product.category.toUpperCase()}
                    </span>

                    {/* Details */}
                    <div className="flex flex-col gap-1 flex-1">
                      <h3 className="font-serif font-bold text-lg text-foreground tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                        <span className="font-serif font-bold text-lg text-foreground">
                          ${product.price}
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
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No hay productos que coincidan con tus filtros.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="max-w-2xl">
          <h2 className="font-serif font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Contáctanos para accesorios personalizados o consultas especiales.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide" asChild>
            <Link href="/contacto">
              CONTACTAR SOPORTE
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
