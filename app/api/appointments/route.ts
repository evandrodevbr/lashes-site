import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const appointmentsFile = path.join(process.cwd(), 'appointments.json')

interface Appointment {
  ip: string
  date: string
  time: string
}

export async function GET() {
  try {
    const appointments = JSON.parse(fs.readFileSync(appointmentsFile, 'utf-8'))
    return NextResponse.json({ appointments })
  } catch (error) {
    return NextResponse.json({ appointments: [] })
  }
}

export async function POST(request: Request) {
  const appointment: Appointment = await request.json()
  
  let appointments: Appointment[] = []
  try {
    appointments = JSON.parse(fs.readFileSync(appointmentsFile, 'utf-8'))
  } catch (error) {
    // File doesn't exist or is empty, start with an empty array
  }

  appointments.push(appointment)
  fs.writeFileSync(appointmentsFile, JSON.stringify(appointments))

  return NextResponse.json({ success: true })
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const ip = searchParams.get('ip')

  if (!ip) {
    return NextResponse.json({ error: 'IP is required' }, { status: 400 })
  }

  let appointments: Appointment[] = []
  try {
    appointments = JSON.parse(fs.readFileSync(appointmentsFile, 'utf-8'))
  } catch (error) {
    return NextResponse.json({ error: 'No appointments found' }, { status: 404 })
  }

  const updatedAppointments = appointments.filter(apt => apt.ip !== ip)
  fs.writeFileSync(appointmentsFile, JSON.stringify(updatedAppointments))

  return NextResponse.json({ success: true })
}