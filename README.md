# 🥦 Food Boutique

**Food Boutique** is an online store of organic food products, built as a team
project at the GoIT school (FSON-95, team 2).

🔗 **Live demo:** https://masenko2604.github.io/fson-95-project-team_2/

---

## About the project

A responsive multi-page website where users can browse a product catalog,
filter products, view details, add items to the cart and place an order.
All product data comes from the
[Food Boutique API](https://food-boutique.b.goit.study/api-docs/).

## Features

- **Hero section** with the store's main message
- **Search and filters** — by keyword and by category, with sorting
- **Product catalog** with pagination
- **Popular products** and **Discount products** sections
- **Product modal** — detailed card with description and price
- **Cart** — add and remove products; the cart is saved in `localStorage`, so
  it is kept after the page reloads
- **Checkout** — order form with email, the order is sent to the API
- **Newsletter subscription** in the footer, with a success / error modal
- Adaptive layout for mobile, tablet and desktop

## Technologies

| | |
| --- | --- |
| Markup and styles | HTML5, CSS3, BEM, modern-normalize |
| Logic | JavaScript (ES6+), modules |
| Build | Vite, vite-plugin-html-inject (HTML partials) |
| Libraries | Axios, tui-pagination, slim-select |
| Data | REST API, localStorage |
| Deploy | GitHub Actions, GitHub Pages |

## Project structure

```
src/
├── index.html        # home page
├── cart.html         # cart page
├── partials/         # HTML sections (header, hero, filters, footer, modals…)
├── css/              # styles for each section
├── js/               # logic: API requests, rendering, cart, pagination, modals
├── img/              # images and SVG sprite
└── font/             # fonts
```

## How to run locally

```bash
git clone https://github.com/Masenko2604/fson-95-project-team_2.git
cd fson-95-project-team_2
npm install
npm run dev
```

Open http://localhost:5173 in the browser.
Production build: `npm run build` (the result goes to the `dist` folder).

## Team

The project was made by a team of developers working with Git Flow:
each feature in its own branch, merged into `main` through pull requests
with code review.

| Developer | GitHub |
| --- | --- |
| Tatiana Masenko | [@Masenko2604](https://github.com/Masenko2604) |
| | [@Ficefi](https://github.com/Ficefi) |
| | [@blavikensbutcher](https://github.com/blavikensbutcher) |
| | [@Bohdana1958](https://github.com/Bohdana1958) |
| | [@KateDro](https://github.com/KateDro) |
| | [@MrRoik](https://github.com/MrRoik) |
| | [@Yaroslav-Zozulya](https://github.com/Yaroslav-Zozulya) |
| | [@VOvaWAsp](https://github.com/VOvaWAsp) |
| | [@lilshudd](https://github.com/lilshudd) |

---

## Описание (RU)

**Food Boutique** — интернет-магазин органических продуктов, командный проект
школы GoIT. На сайте можно искать и фильтровать товары по ключевому слову и
категории, листать каталог с пагинацией, смотреть популярные товары и товары со
скидкой, открывать карточку товара в модальном окне, добавлять товары в корзину
(сохраняется в localStorage), оформлять заказ и подписываться на рассылку.

Технологии: HTML, CSS, JavaScript, Vite, Axios, tui-pagination, slim-select,
REST API, GitHub Pages.