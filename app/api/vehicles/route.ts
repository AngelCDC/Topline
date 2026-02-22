import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const brand = searchParams.get('brand')
    const model = searchParams.get('model')

    if (brand && model) {
      // Get years for specific brand/model
      const result = await sql`
        SELECT DISTINCT year_start AS year
        FROM vehicles
        WHERE brand = ${brand} AND model = ${model}
        ORDER BY year DESC
      `
      return NextResponse.json(result.rows.map((row: any) => row.year))
    }

    if (brand) {
      // Get models for brand
      const result = await sql`
        SELECT DISTINCT model
        FROM vehicles
        WHERE brand = ${brand}
        ORDER BY model
      `
      return NextResponse.json(result.rows.map((row: any) => row.model))
    }

    // Get all brands
    const result = await sql`
      SELECT DISTINCT brand
      FROM vehicles
      ORDER BY brand
    `
    return NextResponse.json(result.rows.map((row: any) => row.brand))
  } catch (error) {
    console.error('Error fetching vehicles:', error)
    return NextResponse.json({ error: 'Failed to fetch vehicles' }, { status: 500 })
  }
}
