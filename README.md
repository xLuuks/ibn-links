# IBN Links

Landing page institucional do Instituto Bíblico do Norte, criada para centralizar links, canais oficiais e informações de contato em uma interface simples, responsiva e objetiva.

## Visão geral

O projeto apresenta:

- header institucional com identidade visual do IBN;
- seção de acessos rápidos para canais e plataformas;
- destaques para links prioritários;
- bloco de contato com WhatsApp, e-mail e endereço;
- layout responsivo para desktop e mobile.

## Tecnologias

- React 19
- Vite
- Tailwind CSS 4
- Lucide React

## Como executar localmente

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar ambiente de desenvolvimento

```bash
npm run dev
```

### 3. Gerar build de produção

```bash
npm run build
```

### 4. Visualizar build localmente

```bash
npm run preview
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor local com recarregamento automático.
- `npm run build`: gera a versão de produção em `dist/`.
- `npm run preview`: sobe uma prévia local da build.
- `npm run lint`: executa a checagem de lint.

## Estrutura principal

```text
ibn-links/
├─ public/
│  └─ img/
│     └─ logo_ibn.png
├─ src/
│  ├─ components/
│  │  └─ IBNLandingPage.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
└─ vite.config.js
```

## Personalização

- Os links exibidos na página estão centralizados em `src/components/IBNLandingPage.jsx`.
- A logo institucional utilizada no header está em `public/img/logo_ibn.png`.
- Os estilos visuais do layout usam classes utilitárias diretamente no componente e a base do Tailwind em `src/index.css`.

## Publicação

Este projeto pode ser publicado em qualquer serviço compatível com aplicações frontend estáticas, como:

- Vercel
- Netlify
- GitHub Pages

## Repositório

Repositório oficial deste projeto:

`https://github.com/xLuuks/ibn-links`
