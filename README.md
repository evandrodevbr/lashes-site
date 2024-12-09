<output>
```
# Julia's Beauty Lash Studio

![Julia's Beauty Lash Studio Logo][]

[![License][]](https://github.com/evandrodevbr/julias-beauty-lash-studio/blob/main/LICENSE)
[![Issues][]](https://github.com/evandrodevbr/julias-beauty-lash-studio/issues)
[![Forks][]](https://github.com/evandrodevbr/julias-beauty-lash-studio/network/members)
[![Stars][]](https://github.com/evandrodevbr/julias-beauty-lash-studio/stargazers)
[![Last Commit][]](https://github.com/evandrodevbr/julias-beauty-lash-studio/commits/main)

## 📜 Sumário

- [📌 Sobre o Projeto](#-sobre-o-projeto)
- [🎯 Objetivos](#-objetivos)
- [🔍 Nicho de Mercado](#-nicho-de-mercado)
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [✨ Funcionalidades Principais](#-funcionalidades-principais)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Instalação e Execução](#-instalação-e-execução)
- [🧪 Testes](#-testes)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)
- [📬 Contato](#-contato)
- [📁 Demo](#-demo)
- [📚 Recursos Adicionais](#-recursos-adicionais)

## 📌 Sobre o Projeto

**Julia's Beauty Lash Studio** é um site profissional desenvolvido para um estúdio de extensão de cílios localizado em Camboriú, Santa Catarina, Brasil. Este projeto visa proporcionar uma presença online elegante e funcional para o estúdio, permitindo que os clientes conheçam os serviços oferecidos, agendem horários e entrem em contato facilmente.

![Screenshot da Página Inicial][]

## 🎯 Objetivos

- **Presença Online Profissional:** Estabelecer uma identidade digital forte para o estúdio.
- **Facilitar Agendamentos:** Implementar um sistema de agendamento eficiente e intuitivo.
- **Mostrar Portfólio:** Exibir exemplos de trabalhos realizados para atrair novos clientes.
- **Melhorar Comunicação:** Facilitar o contato entre clientes e o estúdio através de múltiplos canais.

## 🔍 Nicho de Mercado

Este site é destinado especificamente para:

- **Profissionais de Beleza** especializados em extensão de cílios.
- **Estúdios de Beleza** focados em tratamentos para os olhos.
- **Clientes** em busca de serviços de extensão de cílios de alta qualidade.

## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js:** Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript:** Superset tipado de JavaScript para melhor manutenção e escalabilidade do código.
- **Tailwind CSS:** Framework CSS utilitário para design responsivo e customizável.
- **Lucide React:** Biblioteca de ícones SVG para React.
- **Vercel:** Plataforma de hospedagem e implantação para aplicações Next.js.
- **Firebase:** Serviço Backend-as-a-Service (BaaS) para autenticação e banco de dados.
- **ESLint & Prettier:** Ferramentas para garantir qualidade e consistência do código.

## ✨ Funcionalidades Principais

1. **Página Inicial Informativa:** Apresenta os serviços oferecidos e informações sobre o estúdio.
2. **Sistema de Agendamento:** Permite que os clientes agendem seus horários diretamente pelo site.
3. **Galeria de Serviços:** Exibe os diferentes estilos de extensão de cílios disponíveis.
4. **Seção "Sobre":** Fornece informações sobre a proprietária e a história do estúdio.
5. **Informações de Contato:** Inclui endereço, telefone e e-mail para fácil contato.
6. **Integração com WhatsApp:** Botão de agendamento que redireciona para o WhatsApp do estúdio.
7. **Blog:** Área para publicar dicas de beleza, tendências e novidades.
8. **Testimonials:** Depoimentos de clientes satisfeitos para construir confiança.
9. **SEO Otimizado:** Melhorar a visibilidade nos motores de busca.
10. **Design Responsivo:** Garantir a melhor experiência em dispositivos móveis e desktops.

## 📂 Estrutura do Projeto

```
julias-beauty-lash-studio/
│
├── app/
│   ├── components/
│   │   ├── Calendar.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Gallery.tsx
│   │   └── ...outros componentes
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   └── ...outras páginas
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── ip.ts
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── layout.tsx
│   └── ...outros arquivos
│
├── public/
│   ├── images/
│   │   ├── lashe.png
│   │   ├── julia.png
│   │   ├── screenshot-home.png
│   │   └── ...outras imagens
│   └── ...outros arquivos estáticos
│
├── __tests__/
│   └── ...testes unitários e de integração
│
├── styles/
│   └── globals.css
│
├── .eslintrc.js
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── README.md
└── ...outros arquivos de configuração
```

## 🚀 Instalação e Execução

Para executar este projeto localmente, siga estas etapas:

### Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior) ou **Yarn**
- **Git**

### Passos

1. **Clone o repositório:**

```bash
git clone https://github.com/evandrodevbr/julias-beauty-lash-studio.git
```

2. **Navegue até o diretório do projeto:**

```bash
cd julias-beauty-lash-studio
```

3. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

4. **Configure as Variáveis de Ambiente:**

Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis necessárias:

```env
NEXT_PUBLIC_API_URL=https://api.juliasbeauty.com
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
# ...outras variáveis
```

5. **Execute o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

6. **Abra o site no navegador:**

Acesse [http://localhost:3000](http://localhost:3000)

## 🧪 Testes

Este projeto utiliza [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testes.

### Executar Testes

```bash
npm run test
# ou
yarn test
```

### Cobertura de Testes

```bash
npm run test:coverage
# ou
yarn test:coverage
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. **Fork** este repositório
2. **Crie uma branch** para sua feature:
```bash
git checkout -b feature/nova-funcionalidade
```
3. **Comite** suas mudanças:
```bash
git commit -m 'Adiciona nova funcionalidade'
```
4. **Push** para a branch:
```bash
git push origin feature/nova-funcionalidade
```
5. Abra um **Pull Request**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/evandrodevbr/julias-beauty-lash-studio/blob/main/LICENSE) para mais detalhes.

## 📬 Contato

- **Evandro**
  - [Site Pessoal](https://evandro.dev.br)
  - Email: [contato@evandro.dev.br](mailto:contato@evandro.dev.br)
  - [LinkedIn](https://www.linkedin.com/in/evandrodevbr)
  - [Twitter](https://twitter.com/evandrodevbr)

**Link do Projeto:** [https://github.com/evandrodevbr/julias-beauty-lash-studio](https://github.com/evandrodevbr/julias-beauty-lash-studio)

## 📁 Demo

Confira o site ao vivo: [Julia's Beauty Lash Studio](https://juliasbeauty.vercel.app)

## 📚 Recursos Adicionais

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação Lucide React](https://lucide.dev/)
- [Guia de Contribuição](https://docs.github.com/pt/get-started/quickstart/contributing-to-projects)

---

Desenvolvido com ❤️ por [Evandro](https://evandro.dev.br)

[Julia's Beauty Lash Studio Logo]: https://raw.githubusercontent.com/evandrodevbr/julias-beauty-lash-studio/main/public/images/logo.png[License]: https://img.shields.io/github/license/evandrodevbr/julias-beauty-lash-studio
[Issues]: https://img.shields.io/github/issues/evandrodevbr/julias-beauty-lash-studio[Forks]: https://img.shields.io/github/forks/evandrodevbr/julias-beauty-lash-studio[Stars]: https://img.shields.io/github/stars/evandrodevbr/julias-beauty-lash-studio[Last Commit]: https://img.shields.io/github/last-commit/evandrodevbr/julias-beauty-lash-studio[Screenshot da Página Inicial]: https://raw.githubusercontent.com/evandrodevbr/julias-beauty-lash-studio/main/public/images/screenshot-home.png```
</output>
