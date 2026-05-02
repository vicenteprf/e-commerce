# E-commerce

Este é um projeto de e-commerce simples desenvolvido durante um curso de React + TypeScript com Vite. O objetivo foi praticar conceitos de front-end moderno, gerenciamento de estado e integração com uma API (simulada via `db.json`).

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Context API (para carrinho)
- JSON-server (ou `db.json`) para dados locais

## Como executar

1. Instalar dependências:

```bash
npm install
```

2. Rodar em modo de desenvolvimento:

```bash
npm run dev
```

3. (Opcional) Rodar um servidor local para `db.json`:

```bash
npx json-server --watch db.json --port 3000
```

## Resumo do projeto

Criei uma interface com páginas de listagem, detalhe do produto e carrinho. Usei `CartContext` para gerenciar o estado do carrinho entre as páginas. A aplicação consome dados de `db.json` via chamadas HTTP simples.

## O que aprendi

- Como estruturar um projeto React + TypeScript com Vite.
- Uso básico da Context API para compartilhamento de estado.
- Boas práticas para isolar chamadas à API em um serviço (`services/api.ts`).
- A importância de um `.gitignore` bem configurado para evitar subir arquivos sensíveis ou dependências.
- Fluxo de navegação entre páginas e organização de componentes.
