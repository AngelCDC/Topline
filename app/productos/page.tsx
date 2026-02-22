import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ProductosClient from "./productos-client"

export const metadata = {
  title: "Productos | DRIVEX",
  description: "Explora nuestra colección completa de tapetes y accesorios de automóvil",
}

export default function ProductosPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <ProductosClient />
      <Footer />
    </main>
  )
}
