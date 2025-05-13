# 🧠 Beta - Frontend

Este é o repositório do **Frontend do Beta**, uma aplicação web desenvolvida em React que visa fornecer uma interface intuitiva e moderna para interação com o sistema BEta.

## 📦 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) (se aplicável)
- [Vite](https://vitejs.dev/) ou [Create React App](https://create-react-app.dev/)
- [Axios](https://axios-http.com/) para requisições HTTP
- [React Router](https://reactrouter.com/) para rotas
- [Redux Toolkit](https://redux-toolkit.js.org/) para gerenciamento de estado (se aplicável)
- [Tailwind CSS](https://tailwindcss.com/) ou [Styled Components](https://styled-components.com/) para estilização

## 🚀 Como rodar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/beta-frontend.git
cd beta-frontend
```

2. **Instalando as dependências do repositório e executando o projeto:**
```bash
npm install
npm run dev
```

## 📁 Criar o arquivo ".env"
Na raiz do projeto, crie um arquivo chamado .env contendo as variáveis de ambiente necessárias para o funcionamento da aplicação:

- VITE_BETA_BASE_URL: URL da API - Back-end (https://github.com/felipeluis223/BetaAPI)
- VITE_GOOGLE_ID_CLIENT: o identificador do cliente do Google Auth - (https://console.cloud.google.com/)

```
VITE_BETA_BASE_URL=https://sua-api-url.com
VITE_GOOGLE_ID_CLIENT=seu-google-client-id

```