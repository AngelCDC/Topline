'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'

interface MarcasClientProps {
  brands: string[]
}

interface BrandDetails {
  [key: string]: string[]
}

export function MarcasClient({ brands }: MarcasClientProps) {
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null)
  const [brandModels, setBrandModels] = useState<BrandDetails>({})
  const [loadingBrand, setLoadingBrand] = useState<string | null>(null)

  const toggleBrand = async (brand: string) => {
    if (expandedBrand === brand) {
      setExpandedBrand(null)
    } else {
      if (!brandModels[brand]) {
        // Fetch models for this brand
        try {
          setLoadingBrand(brand)
          const response = await fetch(`/api/vehicles?brand=${brand}`)
          const models = await response.json()
          setBrandModels((prev) => ({
            ...prev,
            [brand]: models,
          }))
        } catch (error) {
          console.error('Error fetching models:', error)
        } finally {
          setLoadingBrand(null)
        }
      }
      setExpandedBrand(brand)
    }
  }

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
              MARCAS DISPONIBLES
            </span>
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-7xl tracking-tight text-foreground mb-6 text-balance">
            Compatibilidad con todas las marcas
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Encontramos productos compatibles para tu marca y modelo específico.
          </p>
        </div>
      </section>

      {/* Brands List */}
      <section className="py-16 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="border border-border overflow-hidden hover:border-accent transition-colors"
              >
                <button
                  onClick={() => toggleBrand(brand)}
                  className="w-full flex items-center justify-between p-6 hover:bg-secondary/40 transition-colors"
                >
                  <h3 className="font-serif font-bold text-xl text-foreground tracking-tight">
                    {brand}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform ${
                      expandedBrand === brand ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Models List */}
                {expandedBrand === brand && (
                  <div className="border-t border-border bg-secondary/20 p-6">
                    {loadingBrand === brand ? (
                      <p className="text-muted-foreground">Cargando modelos...</p>
                    ) : brandModels[brand] && brandModels[brand].length > 0 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {brandModels[brand].map((model) => (
                          <div
                            key={model}
                            className="flex items-center gap-2 p-2"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            <span className="text-sm text-foreground">
                              {model}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-sm">
                        No hay modelos disponibles
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="max-w-2xl">
          <h2 className="font-serif font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
            ¿No ves tu vehículo?
          </h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Contáctanos para consultar sobre compatibilidad con modelos específicos.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide">
            CONTACTAR SOPORTE
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
