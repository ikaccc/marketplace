# 🛒 Simple Marketplace

This is a simple marketplace frontend built with **Next.js**, **TypeScript**, and **Material UI (MUI)**.  
It includes product listing, search, filter, cart functionality, checkout form, and dark mode toggle.

---

## ✨ Features

- ✅ Product listing from Fake Store API
- 🔍 Search & filter by category
- 🛒 Add to cart, remove, update quantity
- 💾 Cart persistence with `localStorage`
- 📦 Checkout page with order summary + fake form
- 🧹 Clear Cart button
- 🌙 Dark Mode toggle (context-based)

---

## 🚀 Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [notistack](https://iamhosseindhv.com/notistack)

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

App will be running at:  
👉 `http://localhost:3000`

---

## 🗂 Folder Structure

```
src/
├── app/               # Next.js app pages (App Router)
│   ├── products/      # Product listing page
│   ├── cart/          # Cart page
│   └── checkout/      # Checkout page
├── components/        # Reusable UI components
├── context/           # CartContext & ThemeContext
├── lib/               # MUI theme & emotion setup
├── types/             # TypeScript types
└── styles/            # Global styles (globals.css)
```

---

## 📝 Notes

- Product data is fetched from [Fake Store API](https://fakestoreapi.com/)
- All cart data is stored in `localStorage`
- Orders are saved locally for demo purposes
- Dark mode is persisted in state (can be extended to localStorage)


---

## 📄 License

This project is open-sourced and made for demonstration or educational purposes.

