'use client'

import React, { useState, useEffect } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'

interface Appointment {
    ip: string;
    date: string;
    time: string;
}

interface CalendarProps {
    onAppointmentSet: (appointment: Appointment) => void;
}

export default function Calendar({ onAppointmentSet }: CalendarProps): JSX.Element {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [confirmation, setConfirmation] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setConfirmation(null);

        // Set the appointment
        onAppointmentSet({ ip: '', date: selectedDate, time: selectedTime });

        // Show confirmation
        setConfirmation(`Agendamento confirmado para ${selectedDate} às ${selectedTime}`);

        // Clear form
        setSelectedDate('');
        setSelectedTime('');
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 9; hour < 18; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                options.push(
                    <option key={time} value={time}>
                        {time}
                    </option>
                );
            }
        }
        return options;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-500">{error}</div>}
            {confirmation && <div className="text-green-500">{confirmation}</div>}
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-[#5d4037]">Data</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="focus:ring-[#8d6e63] focus:border-[#8d6e63] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Selecione uma data"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="time" className="block text-sm font-medium text-[#5d4037]">Horário</label>
                <select
                    id="time"
                    name="time"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#8d6e63] focus:border-[#8d6e63] sm:text-sm rounded-md"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                >
                    <option value="">Selecione um horário</option>
                    {generateTimeOptions()}
                </select>
            </div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8d6e63] hover:bg-[#5d4037] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8d6e63]"
            >
                Agendar
            </button>
        </form>
    );
}