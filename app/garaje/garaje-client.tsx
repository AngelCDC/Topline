"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Trash2,
  Edit2,
  ArrowRight,
  Car,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Vehicle {
  id: string;
  year: number;
  brand: string;
  model: string;
  color?: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  sku: string;
  image_url?: string;
}

interface GarajeClientProps {
  initialBrands?: string[];
}

// ── Subcomponente: productos compatibles de un vehículo ──────────────────────
function VehicleProducts({ vehicle }: { vehicle: Vehicle }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const handleToggle = async () => {
    if (!hasFetched) {
      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/products/compatible?brand=${encodeURIComponent(vehicle.brand)}&model=${encodeURIComponent(vehicle.model)}&year=${vehicle.year}`,
        );
        const data = await res.json();
        setProducts(data);
        setHasFetched(true);
      } catch (err) {
        console.error("Error fetching compatible products:", err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={handleToggle}
        className="w-full border-border text-foreground hover:bg-background font-serif text-xs tracking-wider flex items-center justify-center gap-2"
      >
        {isLoading ? (
          "CARGANDO..."
        ) : isExpanded ? (
          <>
            <ChevronUp className="w-3 h-3" />
            OCULTAR PRODUCTOS COMPATIBLES
          </>
        ) : (
          <>
            <ChevronDown className="w-3 h-3" />
            VER PRODUCTOS COMPATIBLES
          </>
        )}
      </Button>

      {isExpanded && !isLoading && (
        <div className="mt-6">
          {products.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">
              No hay productos compatibles registrados para este vehículo.
            </p>
          ) : (
            <>
              <p className="text-xs tracking-widest text-accent font-semibold mb-4">
                {products.length} PRODUCTO{products.length !== 1 ? "S" : ""}{" "}
                COMPATIBLES
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col"
                  >
                    {/* Image */}
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-5">
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Si la imagen no carga, muestra el placeholder
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove(
                              "hidden",
                            );
                          }}
                        />
                      ) : null}

                      {/* Placeholder (oculto si hay imagen válida) */}
                      <div
                        className={`w-full h-full bg-gradient-to-br from-secondary to-background flex items-center justify-center absolute inset-0 ${product.image_url ? "hidden" : ""}`}
                      >
                        <span className="text-muted-foreground text-sm">
                          Imagen no disponible
                        </span>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground font-serif text-sm tracking-wider bg-background/80 px-4 py-2">
                          VER DETALLES
                        </span>
                      </div>
                    </div>

                    {/* Category */}
                    <span className="text-xs tracking-widest text-muted-foreground font-semibold mb-2">
                      {product.category.toUpperCase()}
                    </span>

                    {/* Info */}
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
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────────────
export function GarajeClient({ initialBrands = [] }: GarajeClientProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [brands, setBrands] = useState<string[]>(initialBrands);
  const [models, setModels] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedColor, setSelectedColor] = useState("");
  const [isLoadingModels, setIsLoadingModels] = useState(false);
  const [isLoadingYears, setIsLoadingYears] = useState(false);

  useEffect(() => {
    if (brands.length === 0) fetchBrands();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      fetchModels(selectedBrand);
    } else {
      setModels([]);
      setYears([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      fetchYears(selectedBrand, selectedModel);
    } else {
      setYears([]);
    }
  }, [selectedBrand, selectedModel]);

  const fetchBrands = async () => {
    try {
      const res = await fetch("/api/vehicles");
      setBrands(await res.json());
    } catch (err) {
      console.error("Error fetching brands:", err);
    }
  };

  const fetchModels = async (brand: string) => {
    try {
      setIsLoadingModels(true);
      const res = await fetch(`/api/vehicles?brand=${brand}`);
      setModels(await res.json());
      setSelectedModel("");
      setYears([]);
    } catch (err) {
      console.error("Error fetching models:", err);
    } finally {
      setIsLoadingModels(false);
    }
  };

  const fetchYears = async (brand: string, model: string) => {
    try {
      setIsLoadingYears(true);
      const res = await fetch(`/api/vehicles?brand=${brand}&model=${model}`);
      const data = await res.json();
      setYears(data);
      if (data.length > 0) setSelectedYear(data[0]);
    } catch (err) {
      console.error("Error fetching years:", err);
    } finally {
      setIsLoadingYears(false);
    }
  };

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBrand && selectedModel) {
      setVehicles([
        ...vehicles,
        {
          id: Date.now().toString(),
          year: selectedYear,
          brand: selectedBrand,
          model: selectedModel,
          color: selectedColor,
        },
      ]);
      setSelectedBrand("");
      setSelectedModel("");
      setSelectedYear(new Date().getFullYear());
      setSelectedColor("");
      setShowForm(false);
    }
  };

  const handleRemoveVehicle = (id: string) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.3em] text-accent font-serif font-medium">
              MI GARAJE
            </span>
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-7xl tracking-tight text-foreground mb-6 text-balance">
            Tu Colección de Vehículos.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Organiza tus vehículos y obtén recomendaciones de productos
            específicamente diseñados para cada uno.
          </p>
        </div>
      </section>

      {/* Garage Content */}
      <section className="px-6 lg:px-12 bg-background mb-16">
        {vehicles.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary/40 border border-border p-12 text-center">
              <Car className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h2 className="font-serif font-bold text-2xl text-foreground mb-2">
                Tu Garaje está Vacío
              </h2>
              <p className="text-muted-foreground mb-8">
                Agrega tus vehículos para obtener recomendaciones personalizadas
                de tapetes y accesorios.
              </p>
              <Button
                onClick={() => setShowForm(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide"
              >
                <Plus className="mr-2 w-4 h-4" />
                AGREGAR VEHÍCULO
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl md:max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif font-bold text-3xl text-foreground tracking-tight">
                Mis Vehículos ({vehicles.length})
              </h2>
              <Button
                onClick={() => setShowForm(!showForm)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-sm tracking-wide"
              >
                <Plus className="mr-2 w-4 h-4" />
                AGREGAR
              </Button>
            </div>

            {/* Cada vehículo en su propia sección con productos */}
            <div className="flex flex-col gap-10">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-secondary/40 border border-border p-6 hover:border-accent/50 transition-all"
                >
                  {/* Header del vehículo */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-xs tracking-widest text-accent font-semibold mb-1">
                        {vehicle.year}
                      </p>
                      <h3 className="font-serif font-bold text-2xl text-foreground tracking-tight">
                        {vehicle.brand} {vehicle.model}
                      </h3>
                      {vehicle.color && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Color: {vehicle.color}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border text-foreground hover:bg-background"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-destructive text-destructive hover:bg-destructive/10"
                        onClick={() => handleRemoveVehicle(vehicle.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Productos compatibles (toggle) */}
                  <VehicleProducts vehicle={vehicle} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Formulario */}
        {showForm && (
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-secondary/40 border border-border p-8">
              <h3 className="font-serif font-bold text-2xl text-foreground mb-6 tracking-tight">
                Agregar Nuevo Vehículo
              </h3>
              <form onSubmit={handleAddVehicle} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Marca *
                    </label>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full bg-background border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Seleccionar marca</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Modelo *
                    </label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      disabled={!selectedBrand || isLoadingModels}
                      className="w-full bg-background border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                    >
                      <option value="">
                        {isLoadingModels ? "Cargando..." : "Seleccionar modelo"}
                      </option>
                      {models.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Año *
                    </label>
                    <select
                      value={selectedYear}
                      onChange={(e) =>
                        setSelectedYear(parseInt(e.target.value))
                      }
                      disabled={!selectedModel || isLoadingYears}
                      className="w-full bg-background border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                    >
                      <option value="">
                        {isLoadingYears ? "Cargando..." : "Seleccionar año"}
                      </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Color
                    </label>
                    <input
                      type="text"
                      placeholder="Negro, Plata, etc."
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full bg-background border border-border text-foreground placeholder-muted-foreground px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-6">
                  <Button
                    type="submit"
                    disabled={!selectedBrand || !selectedModel || !selectedYear}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide disabled:opacity-50"
                  >
                    GUARDAR VEHÍCULO
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="border-border text-foreground hover:bg-background font-serif tracking-wide"
                  >
                    CANCELAR
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
