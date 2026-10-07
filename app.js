const $ = s => document.querySelector(s);
const fmt = n => "KES " + n.toLocaleString("en-KE");
const cats = ["All", ...new Set(PRODUCTS.map(p => p.cat))];
let cat = "All", cart = [];

try { cart = JSON.parse(localStorage.getItem("cart") || "[]"); } catch (e) {}
cart = cart.filter(i => PRODUCTS.some(p => p.id === i.id && p.variants[i.v]));
const save = () => { try { localStorage.setItem("cart", JSON.stringify(cart)); } catch (e) {} };

function drawFilters() {
  $("#filters").innerHTML = cats.map(c =>
    `<button class="chip" aria-pressed="${c === cat}" data-c="${c}">${c}</button>`).join("");
}

function drawGrid() {
  $("#grid").innerHTML = PRODUCTS.filter(p => cat === "All" || p.cat === cat).map(p => `
    <article class="card">
      <h3>${p.name}</h3>
      <p class="note">${p.note}</p>
      <label>Size<select id="v-${p.id}">${p.variants.map((v, i) =>
        `<option value="${i}">${v[0]} - ${fmt(v[1])}</option>`).join("")}</select></label>
      <button class="btn" data-add="${p.id}">Add to cart</button>
    </article>`).join("");
}

function drawCart() {
  let total = 0;
  $("#count").textContent = cart.reduce((a, i) => a + i.q, 0);
  $("#lines").innerHTML = cart.length ? cart.map((i, k) => {
    const p = PRODUCTS.find(x => x.id === i.id), v = p.variants[i.v];
    total += v[1] * i.q;
    return `<li><span>${p.name} (${v[0]}) x ${i.q}</span><span>${fmt(v[1] * i.q)}</span>
      <button data-rm="${k}">Remove</button></li>`;
  }).join("") : "<li>Your cart is empty. Add a product to start an order.</li>";
  $("#total").textContent = fmt(total);
}

document.addEventListener("click", e => {
  const t = e.target;
  if (t.dataset.c) { cat = t.dataset.c; drawFilters(); drawGrid(); }
  if (t.dataset.add) {
    const v = +$("#v-" + t.dataset.add).value;
    const hit = cart.find(i => i.id === t.dataset.add && i.v === v);
    hit ? hit.q++ : cart.push({ id: t.dataset.add, v, q: 1 });
    save(); drawCart(); $("#cart").hidden = false;
  }
  if (t.dataset.rm) { cart.splice(+t.dataset.rm, 1); save(); drawCart(); }
  if (t.id === "cartBtn") $("#cart").hidden = false;
  if (t.id === "closeCart") $("#cart").hidden = true;
});

$("#order").addEventListener("submit", e => {
  e.preventDefault();
  if (!cart.length) { $("#msg").textContent = "Add at least one product before placing an order."; return; }
  const name = new FormData(e.target).get("name");
  // Next step: send this order to the server and start the M-Pesa payment prompt here.
  $("#msg").textContent = `Thanks, ${name}. Your order is recorded. M-Pesa payment will be added at this step.`;
  cart = []; save(); drawCart(); e.target.reset();
});

drawFilters(); drawGrid(); drawCart();
