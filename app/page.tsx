'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import Calendar from './components/Calendar'
import { getClientIp } from './utils/ip'
import Image from 'next/image'
import Footer from './components/Footer'

interface Appointment {
  ip: string;
  date: string;
  time: string;
}

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [clientIp, setClientIp] = useState('');
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [allAppointments, setAllAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchClientIp = async () => {
      const ip = await getClientIp();
      setClientIp(ip);
    };
    fetchClientIp();
  }, []);

  const fetchAppointments = useCallback(async () => {
    const response = await fetch('/api/appointments');
    const data = await response.json();
    setAllAppointments(data.appointments);
    const userAppointment = data.appointments.find((apt: Appointment) => apt.ip === clientIp);
    setAppointment(userAppointment || null);
  }, [clientIp]);

  useEffect(() => {
    if (clientIp) {
      fetchAppointments();
    }
  }, [clientIp, fetchAppointments]);

  const handleAppointmentSet = async (newAppointment: Appointment) => {
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ip: clientIp,
          date: newAppointment.date,
          time: newAppointment.time
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save appointment');
      }

      const data = await response.json();
      if (data.success) {
        setAppointment(newAppointment);
        await fetchAppointments();

        // Open WhatsApp with pre-filled message
        const whatsappMessage = encodeURIComponent(`Olá, querida equipe do Julia&apos;s Beauty Lash Studio! ✨

Espero que estejam tendo um dia maravilhoso. Gostaria de agendar uma sessão para realçar meu olhar com seus incríveis cílios. 👁💖

Estou sonhando com o estilo [tipo de cílios].
Minha agenda permite no dia ${newAppointment.date} às ${newAppointment.time}.
[Sou uma nova admiradora do studio / Sou uma cliente fiel adorando retornar].

Ansiosa para brilhar com vocês novamente!

Muito obrigada pela atenção.`);

        window.open(`https://wa.me/5547997691001?text=${whatsappMessage}`, '_blank');
      }
    } catch (error) {
      console.error('Error setting appointment:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="min-h-screen bg-[#f8e8e4] text-[#5d4037] font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="text-4xl text-[#8d6e63] font-script">
            Julia&apos;s Beauty Lash Studio
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-[#8d6e63] transition duration-300">Home</a>
            <a href="#servicos" className="hover:text-[#8d6e63] transition duration-300">Serviços</a>
            <a href="#sobre" className="hover:text-[#8d6e63] transition duration-300">Sobre</a>
            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="hover:text-[#8d6e63] transition duration-300 flex items-center"
              >
                Contato <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isContactOpen && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 z-50">
                  <a
                    href="https://wa.me/5547997691001"
                    className="block px-4 py-2 hover:bg-[#f8e8e4] transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:Julia.martins.venancio1402@gmail.com"
                    className="block px-4 py-2 hover:bg-[#f8e8e4] transition duration-300"
                  >
                    Email
                  </a>
                </div>
              )}
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <Menu className="md:hidden w-6 h-6" />
          </div>
        </header>

        <main>
          <section id="inicio" className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-6 text-[#5d4037]">Descubra o Poder do Seu Olhar</h1>
              <p className="mb-6 text-lg">Querida, você já imaginou acordar todos os dias com cílios perfeitos? No Julia&apos;s Beauty Lash Studio, transformamos esse sonho em realidade.</p>
              {appointment ? (
                <div>
                  <p>Você já tem um agendamento para {appointment.date} às {appointment.time}.</p>
                  <button
                    onClick={async () => {
                      try {
                        const response = await fetch(`/api/appointments?ip=${clientIp}`, { method: 'DELETE' });
                        if (!response.ok) {
                          throw new Error('Failed to delete appointment');
                        }
                        setAppointment(null);
                        await fetchAppointments();
                      } catch (error) {
                        console.error('Error deleting appointment:', error);
                        // Handle the error (e.g., show an error message to the user)
                      }
                    }}
                    className="bg-[#5d4037] text-white px-6 py-3 rounded-full hover:bg-[#8d6e63] transition duration-300 text-lg inline-block mt-4"
                  >
                    Cancelar Agendamento
                  </button>
                </div>
              ) : (
                <Calendar onAppointmentSet={handleAppointmentSet} />
              )}
            </div>
            <div className="md:w-1/2 relative">
              <Image src="/lashe.png" alt="Lash" width={500} height={300} layout="responsive" className="rounded-2xl" />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5d4037]">Horários Agendados</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-[#8d6e63] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Dia</th>
                    <th className="py-3 px-4 text-left">Horários</th>
                  </tr>
                </thead>
                <tbody>
                  {['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map((day, index) => (
                    <tr key={day} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4">{day}</td>
                      <td className="py-3 px-4">
                        {allAppointments
                          .filter(apt => new Date(apt.date).getDay() === index)
                          .map(apt => apt.time)
                          .join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="servicos" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5d4037]">Por que escolher meus serviços?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Expertise Incomparável",
                "Variedade de Estilos",
                "Produtos Premium",
                "Ambiente Acolhedor",
                "Resultados Duradouros",
                "Atendimento Personalizado",
                "Higiene Impecável",
                "Economia de Tempo",
                "Boost de Autoestima",
                "Cliente Fidelidade"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-full">
                  <h3 className="font-bold mb-2 text-[#8d6e63] text-lg">{item}</h3>
                  <p className="text-sm">{getServiceDescription(item)}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#5d4037]">Meus Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Cílios Fio a Fio Clássico",
                "Volume Híbrido",
                "Volume Russo Light",
                "Volume Russo",
                "Mega Volume",
                "Design de Sobrancelhas"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#8d6e63]"></div>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="sobre" className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#5d4037]">Sobre Mim</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <Image src="/julia.png" alt="Julia" width={192} height={192} className="rounded-full object-cover mx-auto" />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="mb-4">
                  Olá! Sou Julia, a fundadora do Julia&apos;s Beauty Lash Studio. Minha paixão por realçar a beleza natural de cada cliente me levou a especializar-me na arte dos cílios.
                </p>
                <p className="mb-4">
                  Com anos de experiência e treinamento contínuo, estou sempre atualizada com as últimas técnicas e tendências. Meu objetivo é não apenas embelezar, mas também elevar a autoestima de cada pessoa que passa pelo nosso studio.
                </p>
                <p>
                  No Julia&apos;s Beauty Lash Studio, cada sessão é uma experiência personalizada, focada em realçar sua beleza única. Mal posso esperar para te conhecer e criar o look perfeito para você!
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

function getServiceDescription(service: string) {
  const descriptions: { [key: string]: string } = {
    "Expertise Incomparável": "Anos de experiência e treinamento contínuo para dominar a arte dos cílios.",
    "Variedade de Estilos": "Do natural ao dramático, temos o look perfeito para cada ocasião e personalidade.",
    "Produtos Premium": "Utilizamos apenas os melhores materiais, garantindo conforto, durabilidade e segurança.",
    "Ambiente Acolhedor": "Nosso  estúdio é um oásis de tranquilidade para relaxar enquanto cuidamos da sua beleza.",
    "Resultados Duradouros": "Técnicas avançadas que asseguram cílios deslumbrantes por semanas.",
    "Atendimento Personalizado": "Adaptamos cada serviço às suas necessidades e desejos únicos.",
    "Higiene Impecável": "Seguimos rigorosos protocolos de limpeza para sua segurança e tranquilidade.",
    "Economia de Tempo": "Diga adeus à maquiagem diária dos cílios. Acorde linda e pronta para brilhar!",
    "Boost de Autoestima": "Veja como um olhar marcante pode transformar sua confiança e atitude.",
    "Cliente Fidelidade": "Oferecemos benefícios especiais para clientes recorrentes, porque você merece ser mimada."
  };
  return descriptions[service] || "";
}