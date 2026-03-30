# QuickShop (E-Commerce)

A storefront demo built with **React** and **Vite**. It loads products from a public REST API, lets shoppers browse and filter items, manage a cart and wishlist (saved in the browser), and complete a simple checkout flow with form validation.

---

## Features

### Storefront and catalog
- **Home** (`/`) — Hero section with a call-to-action to the product catalog.
- **Products** (`/products`) — Grid of products fetched from the API.
- **Search** — Debounced search on product titles.
- **Filters** — Category, price range, and sort (e.g. price, rating).
- **Product details** (`/products/:id`) — Large image (Swiper), title, category, price, rating, description, **Add to cart**, and **wishlist toggle**.

### Cart
- Add items from the grid or product page; increase quantity when adding the same product again.
- Update quantity and remove line items on the cart page.
- **Cart total** and link to checkout.
- Cart badge in the navbar when items are present.
- Persisted in **`localStorage`** (`cart`).

### Wishlist
- Toggle items on or off from product cards and the product detail page (second click removes).
- Dedicated **Wishlist** page listing saved products.
- Persisted in **`localStorage`** (`wishlist`).

### Checkout
- **Order summary** with line items, subtotal, estimated tax (10%), and total.
- **Shipping form** validated with **React Hook Form** + **Yup** (name, email, address).
- On successful submit: success toast, cart cleared, redirect home.

### UX
- Toast notifications for cart/wishlist actions (**React Toastify**).
- Responsive layout and styling in `src/App.css`.

---

## Tech stack

| Area | Choice |
|------|--------|
| UI | React 19 |
| Build / dev server | Vite 8 |
| Routing | React Router 7 |
| HTTP client | Axios |
| Forms + validation | react-hook-form, yup, @hookform/resolvers |
| Carousel (product images) | Swiper |
| Icons | react-icons |

---



## API

The app expects a **FakeStore-compatible** API shape, for example:

- `GET /products` — list of products  
- `GET /products/categories` — category strings  
- `GET /products/:id` — single product (available in `api.js` if you wire a detail fetch)

Product types match the public [Fake Store API](https://fakestoreapi.com/) (title, price, image, category, `rating.rate`, etc.).

---

## Project layout (high level)

```
src/
  App.jsx              # Routes, providers, global CSS import
  App.css              # Global + layout styles
  main.jsx             # React entry
  components/          # Navbar, ProductCard, filters, cart item, etc.
  context/             # CartContext, WishlistContext (+ localStorage)
  hooks/               # useProducts, useDebounce
  pages/               # Home, Products, ProductDetails, Cart, Wishlist, Checkout
  services/api.js      # Axios calls + API base from env
```

---
