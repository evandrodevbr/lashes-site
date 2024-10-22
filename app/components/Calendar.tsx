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
    allAppointments: Appointment[];
}

export default function Calendar({ onAppointmentSet, allAppointments }: CalendarProps): JSX.Element {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [confirmation, setConfirmation] = useState<string | null>(null);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(5);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (showConfirmation && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            handleConfirm();
        }
        return () => clearInterval(interval);
    }, [showConfirmation, timer]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setConfirmation(null);

        // Check if the selected date and time are available
        const isTimeSlotTaken = allAppointments.some(
            apt => apt.date === selectedDate && apt.time === selectedTime
        );

        if (isTimeSlotTaken) {
            setError("Este horário já está reservado. Por favor, escolha outro.");
            return;
        }

        setShowConfirmation(true);
    };

    const handleConfirm = () => {
        onAppointmentSet({ ip: '', date: selectedDate, time: selectedTime });
        setConfirmation(`Agendamento confirmado para ${selectedDate} às ${selectedTime}`);
        setSelectedDate('');
        setSelectedTime('');
        setShowConfirmation(false);
        setTimer(5);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
        setTimer(5);
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 9; hour < 18; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                const isTimeSlotTaken = allAppointments.some(
                    apt => apt.date === selectedDate && apt.time === time
                );
                options.push(
                    <option key={time} value={time} disabled={isTimeSlotTaken}>
                        {time} {isTimeSlotTaken ? '(Indisponível)' : ''}
                    </option>
                );
            }
        }
        return options;
    };

    return (
        <div>
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
            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Confirmar Agendamento</h2>
                        <p>Você será redirecionado para o WhatsApp em {timer} segundos.</p>
                        <p>Deseja prosseguir com o agendamento?</p>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="px-4 py-2 bg-[#8d6e63] text-white rounded"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}