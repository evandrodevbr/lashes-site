# Julia's Beauty Lash Studio

![Julia's Beauty Lash Studio Logo][]

![License][]
![Issues][]
![Forks][]
![Stars][]
![Last Commit][]

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
- **Firebase:** Serviço Backend-as-a-Service (BaaS) para autenticação e banco de dados (se aplicável).
- **ESLint & Prettier:** Ferramentas para garantir qualidade e consistência do código.

## ✨ Funcionalidades Principais

1. **Página Inicial Informativa:** Apresenta os serviços oferecidos e informações sobre o estúdio.
2. **Sistema de Agendamento:** Permite que os clientes agendem seus horários diretamente pelo site.
3. **Galeria de Serviços:** Exibe os diferentes estilos de extensão de cílios disponíveis.
4. **Seção "Sobre":** Fornece informações sobre a proprietária e a história do estúdio.
5. **Informações de Contato:** Inclui endereço, telefone e e-mail para fácil contato.
6. **Integração com WhatsApp:** Botão de agendamento que redireciona para o WhatsApp do estúdio.
7. **Blog (Opcional):** Área para publicar dicas de beleza, tendências e novidades.
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
    git clone https://github.com/seu-usuario/julias-beauty-lash-studio.git
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

    Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis necessárias. Exemplo:

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

    Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 🧪 Testes

Este projeto utiliza [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testes unitários e de integração.

### Executar Testes

```bash
npm run test
# ou
yarn test
```

### Cobertura de Testes

Para gerar um relatório de cobertura:

```bash
npm run test:coverage
# ou
yarn test:coverage
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga os passos abaixo para contribuir com este projeto:

### Passos para Contribuir

1. **Fork** este repositório.

2. **Crie** uma nova branch para sua funcionalidade ou correção de bug:

    ```bash
    git checkout -b minha-nova-funcionalidade
    ```

3. **Comite** suas alterações:

    ```bash
    git commit -m "Adiciona nova funcionalidade X"
    ```

4. **Faça push** para a branch:

    ```bash
    git push origin minha-nova-funcionalidade
    ```

5. **Abra um Pull Request** detalhando as suas alterações.

### Diretrizes de Contribuição

- **Código Limpo:** Mantenha o código organizado e bem comentado.
- **Conformidade com o Estilo de Código:** Siga as configurações do ESLint e Prettier.
- **Testes:** Adicione testes para novas funcionalidades ou para correções de bugs.
- **Documentação:** Atualize o README se necessário.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT). Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📬 Contato

Para mais informações sobre o desenvolvimento deste projeto, entre em contato:

- **Evandro**
  - [Site Pessoal](https://evandro.dev.br)
  - Email: [contato@evandro.dev.br](mailto:contato@evandro.dev.br)
  - [LinkedIn](https://www.linkedin.com/in/seu-usuario)
  - [Twitter](https://twitter.com/seu-usuario)

**Link do Projeto:** [https://github.com/seu-usuario/julias-beauty-lash-studio](https://github.com/seu-usuario/julias-beauty-lash-studio)

## 📁 Demo

Confira o site ao vivo:

[Julia's Beauty Lash Studio](https://juliasbeauty.vercel.app)

---

## 📚 Recursos Adicionais

- **Documentação Oficial do Next.js:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Lucide React:** [https://lucide.dev/](https://lucide.dev/)
- **Guia de Contribuição do GitHub:** [https://docs.github.com/en/get-started/quickstart/contributing-to-projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)

---

### 📝 Notas Finais

1. **Substituir `seu-usuario`:** Certifique-se de substituir `seu-usuario` pelo seu nome de usuário real no GitHub nos links do repositório e badges.

2. **Imagens:** Verifique se todas as imagens referenciadas estão presentes na pasta `public` e que os caminhos estão corretos. Adicione capturas de tela adicionais para enriquecer a documentação.

3. **Variáveis de Ambiente:** Nunca inclua informações sensíveis no repositório público. Utilize variáveis de ambiente para gerenciar credenciais e segredos.

4. **Automação de Deploy:** Considere configurar workflows de CI/CD (por exemplo, GitHub Actions) para automatizar testes e deploys.

5. **Atualizações Contínuas:** Mantenha o README atualizado conforme o projeto evolui, adicionando novas funcionalidades, melhorias ou alterações na estrutura.
