import React from 'react'
import { Clock, MapPin, Phone, Mail, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#f8e8e4] border-t border-[#e6d0c9] mt-16 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm mb-8">
                    <div>
                        <h4 className="font-bold mb-4 text-lg text-[#5d4037]">Horário de Funcionamento</h4>
                        <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-4 h-4 text-[#8d6e63]" />
                            <span>Segunda a Sábado: 9h às 18:30h</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-[#8d6e63]" />
                            <span>Domingo: Fechado</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-lg text-[#5d4037]">Localização</h4>
                        <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="w-4 h-4 text-[#8d6e63]" />
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Rua+Acre,+836,+Bairro+Areias,+88340-000+Camboriú+-+SC,+Brasil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#8d6e63] transition duration-300"
                            >
                                <span>
                                    Rua Acre, 836<br />
                                    Bairro Areias<br />
                                    88340-000 Camboriú - SC<br />
                                    Brasil
                                </span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-lg text-[#5d4037]">Contato</h4>
                        <div className="flex items-center space-x-2 mb-2">
                            <Phone className="w-4 h-4 text-[#8d6e63]" />
                            <a
                                href="https://wa.me/5547997691001"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#8d6e63] transition duration-300"
                            >
                                (47) 99769-1001
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-[#8d6e63]" />
                            <a
                                href="mailto:Julia.martins.venancio1402@gmail.com"
                                className="hover:text-[#8d6e63] transition duration-300"
                            >
                                Julia.martins.venancio1402@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#e6d0c9] pt-6 mt-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-[#5d4037] mb-2">
                            Desenvolvido com <Heart className="inline-block w-4 h-4 text-red-500 mx-1" /> por
                        </p>
                        <Link
                            href="https://evandro.dev.br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-[#8d6e63] hover:text-[#5d4037] transition-colors duration-300"
                        >
                            evandro.dev.br
                        </Link>
                        <p className="mt-2 text-sm text-[#8d6e63]">
                            Entre em contato para mais informações ou para criar seu próprio site incrível.
                        </p>
                        <Link
                            href="mailto:evandrofonsecajunior@gmail.com"
                            className="mt-3 inline-block bg-[#8d6e63] text-white px-4 py-2 rounded-full hover:bg-[#5d4037] transition-colors duration-300 text-sm"
                        >
                            Contate-nos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}