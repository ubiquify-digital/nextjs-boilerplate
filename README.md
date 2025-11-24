# Next.js Boilerplate

This is a modern, opinionated boilerplate for building scalable frontend applications using **Next.js 15** (App Router). It comes pre-configured with essential tools for code quality, state management, and type safety.

## 🚀 Features

- **[Next.js 15](https://nextjs.org/)**: The latest version with App Router for high-performance server-side rendering and static generation.
- **[TypeScript](https://www.typescriptlang.org/)**: Static type checking for better developer experience and code reliability.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[shadcn/ui](https://ui.shadcn.com/)**: Re-usable components built using Tailwind CSS.
- **[Zustand](https://github.com/pmndrs/zustand)**: A small, fast, and scalable bearbones state-management solution.
- **[Zod](https://zod.dev/)**: TypeScript-first schema declaration and validation library (used for environment variables and data validation).
- **[Axios](https://axios-http.com/)**: Promise based HTTP client for the browser and node.js.
- **Code Quality**:
  - **[ESLint](https://eslint.org/)**: Pluggable JavaScript linter.
  - **[Prettier](https://prettier.io/)**: Opinionated code formatter.
  - **[Husky](https://typicode.github.io/husky/)**: Git hooks made easy.
  - **[Lint-staged](https://github.com/okonet/lint-staged)**: Run linters against staged git files.

## 🛠️ Getting Started

### Prerequisites

Ensure you have Node.js installed. We recommend using the version specified in `.nvmrc` (if available) or the latest LTS version.

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd ubi-nextjs-boilerplate
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  Set up environment variables:
    - Copy `.env.example` to `.env.local` (if it exists) or create a `.env.local` file.
    - Define the required variables as per `src/utils/env.ts`.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

| Script            | Description                                                    |
| :---------------- | :------------------------------------------------------------- |
| `npm run dev`     | Starts the development server on `localhost:3000`.             |
| `npm run build`   | Builds the application for production.                         |
| `npm run start`   | Starts the production server (requires `npm run build` first). |
| `npm run lint`    | Runs ESLint to catch code errors.                              |
| `npm run format`  | Formats all files using Prettier.                              |
| `npm run prepare` | Sets up Husky git hooks.                                       |

## 🎨 Adding UI Components

This project uses **shadcn/ui**. To add a new component, use the following command:

```bash
npx shadcn@latest add <component-name>
```

Example:

```bash
npx shadcn@latest add button
```

This will install the component and its dependencies into `src/components/ui`.

## 📂 Project Structure

```
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # Reusable UI components (shadcn/ui)
├── store/        # Zustand state management stores
├── types/        # TypeScript type definitions
├── utils/        # Utility functions and helpers (e.g., env validation)
└── ...
```

## 🌿 Branch Naming

We enforce a strict branch naming convention to keep our repository organized. All branches must start with one of the following prefixes:

- `feat/`: For new features (e.g., `feat/user-auth`)
- `hot/`: For hotfixes (e.g., `hot/fix-login-bug`)
- `enhancement/`: For improvements (e.g., `enhancement/improve-performance`)
- `bug/`: For bug fixes (e.g., `bug/form-validation`)

> [!IMPORTANT]
> Husky will reject commits on branches that do not follow this pattern.

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feat/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add some amazing feature'`).
4.  Push to the branch (`git push origin feat/amazing-feature`).
5.  Open a Pull Request.
