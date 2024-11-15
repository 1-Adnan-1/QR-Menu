import { menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";

const search = window.location.search;
const searchParams = new URLSearchParams(search);
const paramid = searchParams.get("id");
const product = menu.find((item) => item.id === Number(paramid));

console.log(elements.outlet);

elements.outlet.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <a href="/index.html">
            <i class="bi bi-house fs-1"></i>
        </a>
        <div>anasayfa / ${
          product.category
        } / ${product.title.toLowerCase()}</div>
    </div>
        <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>
    <div class="d-flex justify-content-center align-items-center">
        <img
        style="max-width: 480px"
        class="img-fluid shadow rounded"
        src="${product.img}"
        alt=""
        />
    </div>
    <div>
    <h3 class="my-5">
    Ürünün Kategorisi: <span class="text-success">${product.title}</span>
    </h3>
    <h3>Ürünün Fiyatı: <span class="text-success">${calculatePrice(
      product.price
    )} ₺</span></h3>
    </div>
    <p class="lead fs-3">
    ${product.desc}
    </p>


`;
