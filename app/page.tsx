import React from 'react'
import { Search, User, Menu, Star, Clock, MapPin, Phone, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8e8e4] text-[#5d4037] font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="text-3xl font-script text-[#8d6e63]">Julia's Beauty Lash Studio</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-[#8d6e63] transition duration-300">Home</a>
            <a href="#" className="hover:text-[#8d6e63] transition duration-300">Serviços</a>
            <a href="#" className="hover:text-[#8d6e63] transition duration-300">Sobre</a>
            <a href="#" className="hover:text-[#8d6e63] transition duration-300">Contato</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-[#8d6e63] transition duration-300" />
            <User className="w-5 h-5 cursor-pointer hover:text-[#8d6e63] transition duration-300" />
            <button className="bg-[#8d6e63] text-white px-4 py-2 rounded-full hover:bg-[#5d4037] transition duration-300">Agendar</button>
            <Menu className="md:hidden w-6 h-6" />
          </div>
        </header>

        <main className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 text-[#5d4037]">Descubra o Poder do Seu Olhar</h1>
            <p className="mb-6 text-lg">Querida, você já imaginou acordar todos os dias com cílios perfeitos? No Julia's Beauty Lash Studio, transformamos esse sonho em realidade.</p>
            <button className="bg-[#5d4037] text-white px-6 py-3 rounded-full hover:bg-[#8d6e63] transition duration-300 text-lg">
              Agende sua Consulta
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <img src="/lashe.png" alt="Lash" className="w-full h-auto rounded-2xl" />
            {/* <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
            </div> */}
          </div>
        </main>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#5d4037]">Por que escolher nossos serviços?</h2>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-bold mb-2 text-[#8d6e63]">{item}</h3>
                <p className="text-sm">{getServiceDescription(item)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#5d4037]">Nossos Serviços</h2>
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

        <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-4 text-lg">Horário de Funcionamento</h4>
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-4 h-4" />
              <span>Segunda a Sábado: 9h às 18:30h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Domingo: Fechado</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Localização</h4>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-4 h-4" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Acre,+836,+Bairro+Areias,+88340-000+Camboriú+-+SC,+Brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8d6e63] transition duration-300"
              >
                <span>
                  Rua Acre, 836
                  Bairro Areias
                  88340-000 Camboriú - SC
                  Brasil
                </span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Contato</h4>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4" />
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
              <Mail className="w-4 h-4" />
              <a
                href="mailto:Julia.martins.venancio1402@gmail.com"
                className="hover:text-[#8d6e63] transition duration-300"
              >
                Julia.martins.venancio1402@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function getServiceDescription(service: string) {
  const descriptions: { [key: string]: string } = {
    "Expertise Incomparável": "Anos de experiência e treinamento contínuo para dominar a arte dos cílios.",
    "Variedade de Estilos": "Do natural ao dramático, temos o look perfeito para cada ocasião e personalidade.",
    "Produtos Premium": "Utilizamos apenas os melhores materiais, garantindo conforto, durabilidade e segurança.",
    "Ambiente Acolhedor": "Nosso estúdio é um oásis de tranquilidade para relaxar enquanto cuidamos da sua beleza.",
    "Resultados Duradouros": "Técnicas avançadas que asseguram cílios deslumbrantes por semanas.",
    "Atendimento Personalizado": "Adaptamos cada serviço às suas necessidades e desejos únicos.",
    "Higiene Impecável": "Seguimos rigorosos protocolos de limpeza para sua segurança e tranquilidade.",
    "Economia de Tempo": "Diga adeus à maquiagem diária dos cílios. Acorde linda e pronta para brilhar!",
    "Boost de Autoestima": "Veja como um olhar marcante pode transformar sua confiança e atitude.",
    "Cliente Fidelidade": "Oferecemos benefícios especiais para clientes recorrentes, porque você merece ser mimada."
  };
  return descriptions[service] || "";
}