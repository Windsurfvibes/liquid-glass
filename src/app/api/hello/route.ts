import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: "Bonjour",
    timestamp: new Date().toISOString(),
    app: process.env.NEXT_PUBLIC_APP_NAME || "hey"
  })
}
