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

|                   |                                               |
| ----------------- | --------------------------------------------- |
| Markup and styles | HTML5, CSS3, BEM, modern-normalize            |
| Logic             | JavaScript (ES6+), modules                    |
| Build             | Vite, vite-plugin-html-inject (HTML partials) |
| Libraries         | Axios, tui-pagination, slim-select            |
| Data              | REST API, localStorage                        |
| Deploy            | GitHub Actions, GitHub Pages                  |

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

| Developer       | GitHub                                                   | Contribution |
| --------------- | -------------------------------------------------------- | ------------ |
| Tatiana Masenko | [@Masenko2604](https://github.com/Masenko2604)           | Pagination   |
|                 | [@Ficefi](https://github.com/Ficefi)                     |              |
|                 | [@blavikensbutcher](https://github.com/blavikensbutcher) |              |
|                 | [@Bohdana1958](https://github.com/Bohdana1958)           |              |
|                 | [@KateDro](https://github.com/KateDro)                   |              |
|                 | [@MrRoik](https://github.com/MrRoik)                     |              |
|                 | [@Yaroslav-Zozulya](https://github.com/Yaroslav-Zozulya) |              |
|                 | [@VOvaWAsp](https://github.com/VOvaWAsp)                 |              |
|                 | [@lilshudd](https://github.com/lilshudd)                 |              |

### My part — pagination

I developed the **pagination** for the product catalog
(`src/js/pagination.js`, `src/css/pagination.css`, `src/partials/pagination.html`):

- built on the **tui-pagination** library with custom HTML templates for the
  page buttons and arrows (first / previous / next / last)
- **adaptive**: the number of products per page depends on the screen width
  (6 on mobile, 8 on tablet, 9 on desktop), and the number of visible page
  buttons changes too (2 on mobile, 4 on larger screens)
- when the user changes the page, new products are loaded from the API and
  rendered without reloading the page
- the pagination is rebuilt when filters change, starting again from page 1
- custom styles in the project design: round buttons, the active page is
  highlighted in green, inactive arrows are dimmed

---

## Описание (RU)

**Food Boutique** — интернет-магазин органических продуктов, командный проект
школы GoIT. На сайте можно искать и фильтровать товары по ключевому слову и
категории, листать каталог с пагинацией, смотреть популярные товары и товары со
скидкой, открывать карточку товара в модальном окне, добавлять товары в корзину
(сохраняется в localStorage), оформлять заказ и подписываться на рассылку.

Технологии: HTML, CSS, JavaScript, Vite, Axios, tui-pagination, slim-select,
REST API, GitHub Pages.

**Моя часть — пагинация каталога:** библиотека tui-pagination с собственными
шаблонами кнопок, адаптивное количество товаров на странице (6 / 8 / 9) и
видимых кнопок (2 / 4), загрузка товаров из API при переключении страниц,
сброс на первую страницу при смене фильтров, стили в дизайне проекта.