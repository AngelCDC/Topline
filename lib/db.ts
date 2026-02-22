import { sql } from '@vercel/postgres'

export async function getVehicles() {
  const result = await sql`
    SELECT DISTINCT brand, model, year
    FROM vehicles
    ORDER BY brand, model, year DESC
  `
  return result.rows
}

export async function getBrands() {
  const result = await sql`
    SELECT DISTINCT brand
    FROM vehicles
    ORDER BY brand
  `
  return result.rows.map((row: any) => row.brand)
}

export async function getModelsByBrand(brand: string) {
  const result = await sql`
    SELECT DISTINCT model
    FROM vehicles
    WHERE brand = ${brand}
    ORDER BY model
  `
  return result.rows.map((row: any) => row.model)
}

export async function getYearsByBrandModel(brand: string, model: string) {
  const result = await sql`
    SELECT DISTINCT year
    FROM vehicles
    WHERE brand = ${brand} AND model = ${model}
    ORDER BY year DESC
  `
  return result.rows.map((row: any) => row.year)
}

export async function getCompatibleProducts(brand: string, model: string, year: number) {
  const result = await sql`
    SELECT DISTINCT a.* 
    FROM accessories a
    INNER JOIN compatibility c ON a.id = c.accessory_id
    INNER JOIN vehicles v ON c.vehicle_id = v.id
    WHERE v.brand = ${brand} AND v.model = ${model} AND v.year = ${year}
    ORDER BY a.name
  `
  return result.rows
}

export async function getAllAccessories() {
  const result = await sql`
    SELECT * FROM accessories
    ORDER BY name
  `
  return result.rows
}
