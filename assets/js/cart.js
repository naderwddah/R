// cart.js - shared cart logic for all pages

function toArabicDigits(num) {
  const arabic = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
  return num.toString().replace(/[0-9]/g, d => arabic[d]);
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.querySelector(".badge");
  if (!badge) return;
  const cart = getCart();
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  badge.textContent = toArabicDigits(total);
}

function addToCart(item) {
  let cart = getCart();
  const idx = cart.findIndex(i => i.name === item.name);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart(cart);
  updateCartBadge();
}

function renderCartModal() {
  const cart = getCart();
  const cartItemsDiv = document.getElementById("cartItems");
  const cartSummary = document.getElementById("cartSummary");
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (!cartItemsDiv) return;
  cartItemsDiv.innerHTML = "";
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<div class="text-center text-gray-400 py-8">السلة فارغة</div>';
    if (cartSummary) cartSummary.classList.add("hidden");
    if (checkoutBtn) checkoutBtn.classList.add("hidden");
    return;
  }
  if (cartSummary) cartSummary.classList.remove("hidden");
  if (checkoutBtn) checkoutBtn.classList.remove("hidden");
  cart.forEach((item, idx) => {
    const el = document.createElement("div");
    el.className = "flex justify-between items-center pb-3 border-b";
    el.innerHTML = `
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-lg overflow-hidden ml-3 flex-shrink-0">
          <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover" />
        </div>
        <div>
          <h3 class="font-medium">${item.name}</h3>
          <span class="text-primary text-sm">${toArabicDigits(item.price)} ر.س</span>
        </div>
      </div>
      <div class="flex items-center">
        <button class="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-lg font-bold" data-action="decrease" data-idx="${idx}" title="إنقاص الكمية">-</button>
        <span class="mx-2 text-sm cart-quantity">${toArabicDigits(item.qty)}</span>
        <button class="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-lg font-bold" data-action="increase" data-idx="${idx}" title="زيادة الكمية">+</button>
        <button class="ml-2 text-red-500 cursor-pointer" data-action="remove" data-idx="${idx}" title="حذف الطبق">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    `;
    cartItemsDiv.appendChild(el);
  });
  const subtotal = cart.reduce((sum, i) => sum + (i.qty * i.price), 0);
  const delivery = subtotal >= 100 ? 0 : 10;
  if (document.getElementById("cartSubtotal"))
    document.getElementById("cartSubtotal").textContent = toArabicDigits(subtotal) + " ر.س";
  if (document.getElementById("cartDelivery"))
    document.getElementById("cartDelivery").textContent = delivery === 0 ? "مجاناً" : toArabicDigits(delivery) + " ر.س";
  if (document.getElementById("cartTotal"))
    document.getElementById("cartTotal").textContent = toArabicDigits(subtotal + delivery) + " ر.س";
}

function handleCartModalActions(e) {
  const btn = e.target.closest("button");
  if (!btn) return;
  const idx = Number(btn.dataset.idx);
  let cart = getCart();
  if (btn.dataset.action === "increase") {
    cart[idx].qty += 1;
  } else if (btn.dataset.action === "decrease") {
    if (cart[idx].qty > 1) cart[idx].qty -= 1;
    else cart.splice(idx, 1);
  } else if (btn.dataset.action === "remove") {
    cart.splice(idx, 1);
  }
  saveCart(cart);
  updateCartBadge();
  renderCartModal();
}

function initCartModal() {
  const cartButton = document.getElementById("cartButton");
  const cartModal = document.getElementById("cartModal");
  const closeCart = document.getElementById("closeCart");
  if (cartButton && cartModal) {
    cartButton.addEventListener("click", function () {
      renderCartModal();
      cartModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }
  if (closeCart && cartModal) {
    closeCart.addEventListener("click", function () {
      cartModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }
  const cartItemsDiv = document.getElementById("cartItems");
  if (cartItemsDiv) {
    cartItemsDiv.addEventListener("click", handleCartModalActions);
  }
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function(){
      alert("تم إرسال طلبك بنجاح! شكراً لك.");
      saveCart([]);
      updateCartBadge();
      renderCartModal();
      document.getElementById("cartModal").classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }
}

function initAddToCartButtons() {
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemEl = this.closest(".menu-item");
      if (!itemEl) return;
      const name = itemEl.querySelector("h3")?.textContent.trim();
      const priceText = itemEl.querySelector(".text-primary.font-bold")?.textContent.replace(/[^\d]/g, "");
      const price = Number(priceText);
      const img = itemEl.querySelector("img")?.src;
      if (name && price && img) {
        addToCart({ name, price, img });
        const notification = document.getElementById("notification");
        if (notification) {
          notification.textContent = `تمت إضافة ${name} إلى السلة`;
          notification.classList.remove("hidden");
          setTimeout(() => notification.classList.add("hidden"), 1200);
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartBadge();
  initCartModal();
  initAddToCartButtons();
});