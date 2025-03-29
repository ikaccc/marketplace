# 🛍️ Simple Marketplace Frontend

This is a simple marketplace frontend built using **Next.js** and **Material-UI (MUI)**.  
The application fetches and displays products from the [Fake Store API](https://fakestoreapi.com/).

## 🚀 Features

- 🏠 Landing page that displays a list of products in a responsive grid layout
- 🔍 Search functionality to filter products by name (case-insensitive)
- 📄 Product detail page with full product info
- 🛒 Basic cart functionality *(optional bonus)*
- 🧮 Filtering by category and price *(optional bonus)*
- 📚 Clean UI with Material-UI components

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [Material-UI (MUI)](https://mui.com/)
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── context/            # Cart context (bonus)
├── pages/              # Next.js pages (index, product/[id], cart)
├── styles/             # Global styles
└── utils/              # API helpers
```

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ikaccc/marketplace.git
cd marketplace
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔗 API Reference

- All products: `https://fakestoreapi.com/products`
- Single product: `https://fakestoreapi.com/products/:id`
- Categories: `https://fakestoreapi.com/products/categories`

## 📌 Assumptions

- This project is frontend-only.
- Cart and filters are optional bonus features.
- Data is fetched client-side from the public Fake Store API.

## 📄 License

This project is open-sourced and made for demonstration or educational purposes.
