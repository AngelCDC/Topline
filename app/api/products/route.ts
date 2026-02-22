import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const brand = searchParams.get('brand')
    const model = searchParams.get('model')
    const year = searchParams.get('year')

    if (brand && model && year) {
      // Get compatible products
      const result = await sql`
        SELECT DISTINCT a.* 
        FROM accessories a
        INNER JOIN compatibility c ON a.id = c.accessory_id
        INNER JOIN vehicles v ON c.vehicle_id = v.id
        WHERE v.brand = ${brand} AND v.model = ${model} AND v.year = ${parseInt(year)}
        ORDER BY a.name
      `
      return NextResponse.json(result.rows)
    }

    // Get all products
    const result = await sql`
      SELECT * FROM accessories
      ORDER BY name
    `
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
