# 🎨 UPDAPT Reusable Components

> **A modern collection of composable React components built with love & Lerna 5+**

![React](https://img.shields.io/badge/React-18+-blue?logo=react) ![Lerna](https://img.shields.io/badge/Lerna-5%2B-blueviolet?logo=lerna) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript) ![License](https://img.shields.io/badge/license-MIT-green) ![Build](https://img.shields.io/badge/build-passing-brightgreen)

---

## 📁 Monorepo Structure

```
packages/
├── Button/
│   ├── src/
│   ├── package.json
│   └── rollup.config.js
├── Input/
│   ├── src/
│   ├── package.json
│   └── rollup.config.js
├── Search/
│   ├── src/
│   ├── package.json
│   └── rollup.config.js
├── TextArea/
│   ├── src/
│   ├── package.json
│   └── rollup.config.js
└── DatePicker/
    ├── src/
    ├── package.json
    └── rollup.config.js
```

---

## 🚀 Packages Included

| Package | Description |
|---------------|-----------------------------------------------|
| 🔘 Button | Reusable button components (primary, secondary, etc.) |
| ✏️ Input | Text input components with validation |
| 🔍 Search | Search input with suggestion logic |
| 📝 TextArea | Text area with auto-resize, counter, and more |
| 📅 DatePicker | Calendar component with date selection |

---

## 🧱 Tech Stack

- 🌀 **React 18+**
- 🛠️ **TypeScript**
- 📦 **Rollup** for bundling
- 🧬 **Lerna 5+** for monorepo management
- 💅 Styled using CSS Modules or Tailwind (optional)

---

## 📦 Getting Started

### 🔧 Install Dependencies

```bash
npm install
```

### 📍 Bootstrap the Packages

```bash
npx lerna bootstrap
```

### 🔨 Build All Packages

```bash
npx lerna run build
```

### 🧪 Example Usage (in your app)

```tsx
import { Button } from '@updapt/button';

export default function App() {
  return <Button variant="primary" label="Click Me!" />;
}
```

---

## 🤝 Contributing

We welcome contributions! Open issues, suggest new components, or raise PRs.

---

## 📄 License

MIT © UPDAPT ESG

---

> ✅ Save this as README.md in the root of your repository. Let me know if you want me to create a downloadable file version or include Storybook setup/docs!
