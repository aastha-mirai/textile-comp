# MiraiEdge Company Website


This project is the **Textile Website**, developed using modern frontend technologies and best practices. Built with **React, TypeScript, Vite**.

---

## Tech Stack

- **React** – Component-based UI
- **TypeScript** – Type safety and enhanced development experience
- **Vite** – Fast development build tool
- **Biome** – Linting, formatting, and code quality enforcement
- **Husky** – Git hooks management to enforce code quality checks pre-commit
---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aastha-mirai/textile-comp.git
cd textile-comp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the project in development mode

```bash
npm run dev
```

### 3. Build the project

```bash
npm run build
```
---- 

### Format and Lint using Biome

To ensure formatting on save and import sorting, configure Biome in your editor (e.g., in VSCode, add the Biome extension and set it as the default formatter).---- 

### Pre-commit Validation with Husky
As part of our development workflow, Husky enforces code quality by running automated checks before every commit. These checks ensure that only well-formatted, type-safe, and secure code is committed to the repository.

The following validations are run in order:

Biome Lint Check
Ensures that your code follows formatting and linting rules defined in biome.json. If issues are found, Biome will attempt to auto-fix them. If it cannot, the commit will be blocked until the issues are resolved.

```bash
echo "Running Biome lint check..."
npx biome check --write
```

TypeScript Type Check
Verifies that your code has no type errors using the TypeScript compiler. This ensures that runtime errors caused by type mismatches are caught early.

```bash
echo "Running type check..."
npx tsc --noEmit
```

Security Audit with npm
Runs npm audit to detect known vulnerabilities in your dependencies. If any moderate or higher severity issues are found, the commit is blocked until resolved.

```bash
echo "Running npm audit (security check)..."
npm audit --audit-level=moderate
```

These checks are defined in .husky/pre-commit and run automatically—no manual steps are needed. This helps maintain a secure, stable, and high-quality codebase across the team.

### Biome extension setup in VS Code

To enable automatic code formatting and linting with Biome in VS Code, install the **Biome** extension (published by `biomejs`) from the Extensions Marketplace. Then, update your VS Code `settings.json` to set Biome as the default formatter for JavaScript, TypeScript, and JSON files. Also, enable `editor.formatOnSave` to apply formatting automatically on every save. This setup helps enforce consistent code style and import sorting across the project.

---- 
### Folder structure

```bash
.
├── .husky/ #Pre-Commit Hook
├── .vscode/ # Editor settings
│ └── settings.json
├── src/ # Source files
│ ├── apis/ # All apis
| |── assets/ # All project assets
| |── components/ # UI components
| ├── containers/ # UI containers
| |── mockData/ # All mockData
| |── pages/ # All pages
| |── routes/ # All routes
| |── utils
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ ├── main.tsx
│ └── vite-env.d.ts
├── .gitignore
├── biome.json # Formatter config
├── eslint.config.js # Linting config
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```
