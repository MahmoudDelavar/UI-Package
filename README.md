### 🌟mdp-ui-package

A modern, customizable UI component library for React, built with Tailwind CSS and designed to speed up UI development with clean and accessible components.

## ✨ Features

- Built with **Tailwind CSS**
- Powered by **Radix UI** for accessible low-level components
- Compatible with **React 19+**
- Uses **class-variance-authority** and **tailwind-merge**
- Storybook ready for documentation and preview
- Lightweight and tree-shakable
- TypeScript support out of the box

---

## 🚀 Installation

```bash
pnpm add mdp-ui-package
# or
npm install mdp-ui-package
```

> ⚠️ **Peer dependencies required**:
>
> - `react >= 19.0.0`
> - `react-dom >= 19.0.0`
> - `tailwindcss >= 3.4`
> - `tailwindcss-animate >= 1.0`

---

## 🧪 Usage Example

```tsx
import { Button } from 'mdp-ui-package';

export default function Example() {
  return <Button variant="primary">Click Me</Button>;
}
```

> Some components may require additional setup or context providers (coming soon).

---

## 📦 Available Components

- `Button`
- `Badge`
- `Dropdown`
- `Input`
- `Modal`
- ...and more (work in progress)

---

## 🛠 Development

This package is built using:

- **TypeScript**
- **Tsup** for bundling
- **ESLint** with custom config (`mdp-eslint-config`)
- **Storybook** for interactive docs
- **Release It** for versioning & publishing

---

## 📚 Storybook

To run Storybook locally:

```bash
pnpm dev
# or
pnpm storybook
```

To build the static Storybook site:

```bash
pnpm build-storybook
```

---

## 🔗 Links

- [Repository](#)
- [Storybook (if deployed)](#)
- [Issue Tracker](#)
- [Changelog](#)

---

## 📄 License

This package is licensed under the **ISC License**.

---

Made with 💙 using React, Tailwind, and Radix.
