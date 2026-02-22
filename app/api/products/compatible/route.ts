import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const brand = searchParams.get('brand')
    const model = searchParams.get('model')
    const year = searchParams.get('year')

    if (!brand || !model || !year) {
      return NextResponse.json(
        { error: 'brand, model and year are required' },
        { status: 400 }
      )
    }

    const result = await sql`
      SELECT a.id, a.name, a.description, a.price, a.category, a.sku, a.image_url
      FROM accessories a
      INNER JOIN compatibility c ON a.id = c.accessory_id
      INNER JOIN vehicles v ON c.vehicle_id = v.id
      WHERE v.brand = ${brand}
        AND v.model = ${model}
        AND v.year_start <= ${parseInt(year)}
        AND v.year_end >= ${parseInt(year)}
      ORDER BY a.category, a.name
    `

    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Error fetching compatible products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch compatible products' },
      { status: 500 }
    )
  }
}