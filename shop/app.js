const $ = s => document.querySelector(s);
const eur = n => n.toFixed(2).replace(".", ",") + " €";
const brands = ["Alle", ...new Set(PRODUCTS.map(p => p.brand))];
let activeBrand = "Alle";
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function renderFilters() {
  $("#filters").innerHTML = brands.map(b =>
    `<button class="${b === activeBrand ? "active" : ""}" data-b="${b}">${b}</button>`).join("");
  $("#filters").onclick = e => {
    if (e.target.dataset.b) { activeBrand = e.target.dataset.b; renderFilters(); renderGrid(); }
  };
}

function renderGrid() {
  const q = $("#search").value.toLowerCase();
  const list = PRODUCTS.filter(p =>
    (activeBrand === "Alle" || p.brand === activeBrand) &&
    (p.brand + " " + p.name + " " + p.cat).toLowerCase().includes(q));
  $("#grid").innerHTML = list.length ? list.map(p => `
    <article class="card">
      <div class="img">${p.brand}</div>
      <small>${p.brand}</small>
      <h3>${p.name}</h3>
      <p class="price">${eur(p.price)}</p>
      <select id="size${p.id}">${p.sizes.map(s => `<option>${s}</option>`).join("")}</select>
      <button data-add="${p.id}">In den Warenkorb</button>
    </article>`).join("") : "<p>Keine Artikel gefunden.</p>";
}

function save() { localStorage.setItem("cart", JSON.stringify(cart)); renderCart(); }

function renderCart() {
  $("#cartCount").textContent = cart.reduce((a, i) => a + i.qty, 0);
  $("#cartItems").innerHTML = cart.length ? cart.map((i, idx) => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return `<div class="line"><div><b>${p.brand}</b> ${p.name}<br><small>Größe ${i.size} · ${i.qty}×</small></div>
      <div>${eur(p.price * i.qty)} <button data-rm="${idx}">🗑</button></div></div>`;
  }).join("") : "<p>Dein Warenkorb ist leer.</p>";
  const sub = cart.reduce((a, i) => a + PRODUCTS.find(x => x.id === i.id).price * i.qty, 0);
  $("#subtotal").textContent = eur(sub);
  $("#shipNote").textContent = !cart.length ? "" : sub >= FREE_SHIPPING_FROM
    ? "Kostenloser Versand 🎉"
    : `Versand ${eur(SHIPPING_COST)} – noch ${eur(FREE_SHIPPING_FROM - sub)} bis kostenlos`;
}

document.addEventListener("click", e => {
  const add = e.target.dataset.add, rm = e.target.dataset.rm;
  if (add) {
    const id = +add, size = $("#size" + id).value;
    const ex = cart.find(i => i.id === id && i.size === size);
    ex ? ex.qty++ : cart.push({id, size, qty: 1});
    save(); $("#cart").classList.remove("hidden");
  }
  if (rm !== undefined) { cart.splice(+rm, 1); save(); }
});
$("#cartBtn").onclick = () => $("#cart").classList.toggle("hidden");
$("#closeCart").onclick = () => $("#cart").classList.add("hidden");
$("#search").oninput = renderGrid;
$("#checkout").onclick = () => alert("Demo: Hier kommt später die Kasse (Stripe/PayPal) hin.");

renderFilters(); renderGrid(); renderCart();
