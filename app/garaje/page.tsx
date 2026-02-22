import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GarajeClient } from "./garaje-client"
import { getBrands } from "@/lib/db"

export const metadata = {
  title: "Mi Garaje | DRIVEX",
  description: "Gestiona tus vehículos y obtén recomendaciones de accesorios personalizadas",
}

export default async function GarajePage() {
  const brands = await getBrands()

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <GarajeClient initialBrands={brands} />
      <Footer />
    </main>
  )
}
