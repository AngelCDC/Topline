import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MarcasClient } from "./marcas-client"
import { getBrands } from "@/lib/db"

export const metadata = {
  title: "Marcas | DRIVEX",
  description: "Explora tapetes y accesorios para todas las marcas de vehículos",
}

export default async function MarcasPage() {
  const brands = await getBrands()

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <MarcasClient brands={brands} />
      <Footer />
    </main>
  )
}
