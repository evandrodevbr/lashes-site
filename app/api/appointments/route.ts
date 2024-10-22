import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const appointmentsFile = path.join(process.cwd(), 'appointments.json')

interface Appointment {
  ip: string
  date: string
  time: string
}

async function readAppointments(): Promise<Appointment[]> {
  try {
    const data = await fs.readFile(appointmentsFile, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      // File doesn't exist, create it with an empty array
      await fs.writeFile(appointmentsFile, '[]')
      return []
    }
    throw error
  }
}

async function writeAppointments(appointments: Appointment[]): Promise<void> {
  await fs.writeFile(appointmentsFile, JSON.stringify(appointments))
}

export async function GET() {
  try {
    const appointments = await readAppointments()
    return NextResponse.json({ appointments })
  } catch (error) {
    console.error('Error reading appointments:', error)
    return NextResponse.json({ error: 'Failed to read appointments' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const appointment: Appointment = await request.json()
    const appointments = await readAppointments()
    appointments.push(appointment)
    await writeAppointments(appointments)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving appointment:', error)
    return NextResponse.json({ error: 'Failed to save appointment' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const ip = searchParams.get('ip')

  if (!ip) {
    return NextResponse.json({ error: 'IP is required' }, { status: 400 })
  }

  try {
    const appointments = await readAppointments()
    const updatedAppointments = appointments.filter(apt => apt.ip !== ip)
    await writeAppointments(updatedAppointments)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting appointment:', error)
    return NextResponse.json({ error: 'Failed to delete appointment' }, { status: 500 })
  }
}