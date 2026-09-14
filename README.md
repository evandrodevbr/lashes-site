# lashes-site: Julia's Beauty Lash Studio

**Site institucional com agendamento online do estúdio de extensão de cílios Julia's Beauty Lash Studio, em Camboriú (SC): página única com serviços, seção sobre, agenda de horários e confirmação do agendamento pelo WhatsApp.**

![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14.2.15-000000?logo=nextdotjs&logoColor=white)
[![Deploy](https://img.shields.io/badge/deploy-lashes--site.vercel.app-000000?logo=vercel&logoColor=white)](https://lashes-site.vercel.app)
![Último commit](https://img.shields.io/github/last-commit/evandrodevbr/lashes-site)

## Sobre

O estúdio da Julia precisava de presença online para mostrar o trabalho e permitir que a cliente escolha um horário sem a ida e volta de mensagens no WhatsApp. O site resolve isso em uma página única: apresenta o estúdio e os serviços, mostra os horários já ocupados por dia da semana e oferece um formulário de agendamento. Ao confirmar, o horário é gravado pela API e o WhatsApp abre com a mensagem já preenchida com a data e a hora escolhidas.

## Como funciona

```
navegador (app/page.tsx, client component)
  │
  ├─ GET  /                            página única renderizada pelo Next.js
  ├─ GET  /api/appointments            lê appointments.json e lista os horários ocupados
  ├─ POST /api/appointments            valida {ip, date, time} e grava o agendamento
  └─ DELETE /api/appointments?ip=...   remove o agendamento do visitante
        │
        └─ app/api/appointments/route.ts (Route Handler) ──▶ appointments.json

ao confirmar: window.open("https://wa.me/5547997691001?text=...") com data e hora na mensagem
```

- O identificador do agendamento é o IP público do visitante, obtido no cliente em `app/utils/ip.ts` via `https://api.ipify.org`. Não há login nem cadastro.
- A tabela "Horários Agendados" agrupa os horários ocupados por dia da semana; no formulário, os horários já ocupados da data escolhida aparecem como indisponíveis.
- Depois de escolher data e hora, aparece uma confirmação com contagem regressiva de 5 segundos antes de abrir o WhatsApp.
- A persistência é um arquivo JSON no diretório de trabalho do servidor (`appointments.json`), não um banco de dados.

## Stack

| Camada | Escolha |
|---|---|
| Framework | Next.js 14.2 (App Router) com React 18 |
| Linguagem | TypeScript 5 em modo estrito |
| Estilo | Tailwind CSS 3.4 com cores próprias (`lash-bg`, `lash-text`, `lash-accent`) e fontes locais via `next/font/local` (Lato, Allura, Great Vibes, Geist) |
| Ícones | lucide-react |
| API | Route Handler em `app/api/appointments/route.ts` |
| Persistência | arquivo JSON no filesystem (`appointments.json`) |
| Pacotes | npm com `package-lock.json` versionado |
| Deploy | Vercel (produção atual) e Docker / Fly.io (arquivos no repositório) |

## Requisitos

- Node.js 18.17 ou superior (exigência do Next.js 14; testado com Node 20.18 na imagem Docker e Node 24.20 localmente)
- npm 10 ou superior (testado com npm 11; o projeto usa `package-lock.json`)
- Docker, opcional, para rodar a imagem de produção

## Início rápido

```bash
git clone https://github.com/evandrodevbr/lashes-site.git
cd lashes-site
npm ci
npm run dev
# http://localhost:3000
```

Verificação rápida com o servidor de produção (comandos executados na revisão deste repositório):

```bash
npm run build
npm run start
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/    # 200
curl -s http://localhost:3000/api/appointments                     # {"appointments":[]}
```

O navegador precisa alcançar `https://api.ipify.org` para obter o IP usado como identificador do agendamento.

## Uso / API

| Método e rota | Corpo / parâmetros | Resposta |
|---|---|---|
| `GET /` | nenhum | Página única com serviços, agenda e formulário (200) |
| `GET /api/appointments` | nenhum | 200 `{"appointments":[{"ip","date","time"}]}` |
| `POST /api/appointments` | JSON `{"ip":"string","date":"YYYY-MM-DD","time":"HH:MM"}` | 200 `{"success":true}`; 400 `{"error":"Invalid appointment data"}` se faltar campo; 500 em falha de escrita |
| `DELETE /api/appointments?ip=1.2.3.4` | query `ip` | 200 `{"success":true}`; 400 `{"error":"IP is required"}` sem `ip` |

Exemplo de agendamento:

```bash
curl -s -X POST http://localhost:3000/api/appointments \
  -H 'Content-Type: application/json' \
  --data-binary '{"ip":"1.2.3.4","date":"2026-09-20","time":"10:00"}'
# {"success":true}
```

## Produção / Deploy

Build e execução do artefato real:

```bash
npm run build   # next build, gera o build de produção em .next/
npm run start   # next start, serve o build de produção na porta 3000
```

**Vercel.** O site está publicado em <https://lashes-site.vercel.app>, com deploy ligado ao repositório (cada push na branch `main` gera um novo deploy). Nessa hospedagem a página funciona, mas o endpoint de agendamento responde 500 porque o filesystem das funções é somente leitura. Detalhes em "Estado atual e limitações".

**Docker.** A imagem é multi-stage com Node 20.18.0, roda `npm ci`, `npm run build` e inicia com `npm run start`:

```bash
docker build -t lashes-site .
docker run -p 3000:3000 lashes-site
```

**Fly.io.** O repositório inclui `fly.toml` (app `julialashes`, região `gru`) com volume montado em `/data`, e o Dockerfile define `DATABASE_URL="file:///data/sqlite.db"`. O código atual não usa nem o volume nem o sqlite: grava `appointments.json` no diretório de trabalho. Não há confirmação de deploy ativo no Fly.

## Estrutura do projeto

```
app/
├── api/appointments/route.ts   API de agendamentos (GET, POST, DELETE; arquivo JSON)
├── components/
│   ├── Calendar.tsx            formulário de data e hora com confirmação
│   └── Footer.tsx              horários, endereço e contato
├── fonts/                      fontes locais usadas por next/font/local
├── globals.css                 estilos globais e utilitários do Tailwind
├── layout.tsx                  layout raiz, metadados e SEO em pt-BR
├── page.tsx                    página única (client component)
└── utils/ip.ts                 obtém o IP público via api.ipify.org
public/                         imagens (julia.png, lashe.png, womanLashe*.jpeg)
appointments.json               dados dos agendamentos (estado atual, versionado)
Dockerfile, fly.toml            caminhos alternativos de deploy
```

## Verificação

Não há testes automatizados neste repositório (nem Jest, ao contrário do que o README anterior dizia). O que existe e foi executado na revisão:

- `npm ci` e `npm run build` com exit 0, sem erros de tipo; resta um aviso de ESLint em `Calendar.tsx` (`useEffect` sem `handleConfirm` nas dependências).
- `npm run start` e `npm run dev` com curl nas rotas: `/` 200, `GET /api/appointments` 200, `POST` válido 200, `POST` incompleto 400, `DELETE` sem `ip` 400, `DELETE` com `ip` 200.
- `docker build` e `docker run` com as mesmas rotas respondendo 200.

## Estado atual e limitações

- O agendamento não persiste na Vercel: `GET /api/appointments` responde 500 em produção porque o filesystem das funções serverless é somente leitura. Verificado em 14/09/2026 em <https://lashes-site.vercel.app/api/appointments>.
- `appointments.json` fica no diretório de trabalho e está versionado: rodar o app localmente deixa o arquivo modificado no git e, em uso real, grava dados de clientes (IP, data, hora) em um arquivo do repositório. Não commite essas alterações.
- `bcrypt`, `sqlite` e `sqlite3` estão declarados no `package.json` mas não são importados em nenhum lugar; o Dockerfile e o `fly.toml` ainda preveem um banco sqlite que o código não usa.
- O identificador do agendamento é o IP público (sem login): redes compartilhadas podem colidir e, se `api.ipify.org` estiver bloqueado no navegador da cliente, o agendamento falha com 400.
- A tabela de horários mostra apenas os horários ocupados; não há confirmação no servidor nem painel administrativo para o estúdio.
- Os metadados apontam para o domínio `https://juliasbeautylashstudio.com.br` (canonical, Open Graph e Twitter), que não resolve em DNS hoje; o site no ar é o do Vercel. As imagens `og-image.jpg` e `twitter-image.jpg` referenciadas também não existem no repositório.
- Não há manifest ou apple-touch-icon para instalação como app no iOS.
- Sem CI e sem testes automatizados.

## Documentação

Não há documentação interna no repositório (sem pasta `docs/`). O contrato da API está resumido neste README e implementado em `app/api/appointments/route.ts`.

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide](https://lucide.dev/)

## Licença

O repositório não tem arquivo de licença e nenhuma licença está definida no GitHub. O README anterior citava MIT, mas não existe `LICENSE` no repositório.
