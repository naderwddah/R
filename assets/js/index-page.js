// عرض الأطباق المميزة فقط (مثال: 4 أطباق عشوائية)
const FEATURED_DISHES = [
  {
    name: "مشاوي مشكلة",
    category: "مشاوي",
    price: 75,
    img: "./assets/imges/f1.jpg",
    desc: "تشكيلة من الكباب والشيش طاووق ولحم الضأن المشوي"
  },
  {
    name: "حمص بالطحينة",
    category: "مقبلات",
    price: 25,
    img: "./assets/imges/f2.jpg",
    desc: "حمص طازج مع زيت الزيتون والطحينة يقدم مع خبز عربي"
  },
  {
    name: "كنافة نابلسية",
    category: "حلويات",
    price: 30,
    img: "./assets/imges/f3.jpg",
    desc: "كنافة محشوة بالجبنة ومغطاة بالقطر والفستق الحلبي"
  },
  {
    name: "ساندويش فلافل",
    category: "سندويشات",
    price: 15,
    img: "./assets/imges/f4.jpg",
    desc: "فلافل طازجة مع الخضار والطحينة في خبز عربي"
  }
];

function renderFeaturedDishes() {
  const grid = document.getElementById("dishesGrid");
  grid.innerHTML = "";
  FEATURED_DISHES.forEach(dish => {
    const card = document.createElement('div');
    card.className = "menu-item bg-white rounded-lg shadow overflow-hidden cursor-pointer flex flex-col";
    card.innerHTML = `
      <div class="h-32 sm:h-40 md:h-44 lg:h-48 overflow-hidden">
        <img src="${dish.img}" alt="${dish.name}" class="w-full h-full object-cover object-top" />
      </div>
      <div class="p-3 flex flex-col flex-1">
        <div class="flex justify-between items-start mb-1">
          <h3 class="font-medium text-sm md:text-base">${dish.name}</h3>
          <span class="text-primary font-bold text-sm md:text-base">${dish.price} ر.س</span>
        </div>
        <p class="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2">${dish.desc}</p>
        <button class="add-to-cart-btn w-full bg-primary text-white py-1.5 text-xs md:text-sm rounded-button font-medium cursor-pointer mt-auto" type="button">
          إضافة للسلة
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderFeaturedDishes();
  // دعم البحث السريع في الصفحة الرئيسية
  document.getElementById("searchInput").addEventListener("input", function() {
    const q = this.value.trim();
    const grid = document.getElementById("dishesGrid");
    if (!q) return renderFeaturedDishes();
    const filtered = FEATURED_DISHES.filter(dish =>
      dish.name.includes(q) || dish.desc.includes(q)
    );
    grid.innerHTML = "";
    if (filtered.length === 0) {
      grid.innerHTML = '<div class="col-span-full text-center text-gray-400 py-8">لا يوجد نتائج للبحث</div>';
      return;
    }
    filtered.forEach(dish => {
      const card = document.createElement('div');
      card.className = "menu-item bg-white rounded-lg shadow overflow-hidden cursor-pointer flex flex-col";
      card.innerHTML = `
        <div class="h-32 sm:h-40 md:h-44 lg:h-48 overflow-hidden">
          <img src="${dish.img}" alt="${dish.name}" class="w-full h-full object-cover object-top" />
        </div>
        <div class="p-3 flex flex-col flex-1">
          <div class="flex justify-between items-start mb-1">
            <h3 class="font-medium text-sm md:text-base">${dish.name}</h3>
            <span class="text-primary font-bold text-sm md:text-base">${dish.price} ر.س</span>
          </div>
          <p class="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2">${dish.desc}</p>
          <button class="add-to-cart-btn w-full bg-primary text-white py-1.5 text-xs md:text-sm rounded-button font-medium cursor-pointer mt-auto" type="button">
            إضافة للسلة
          </button>
        </div>
      `;
      grid.appendChild(card);
    });
    // إعادة تهيئة أزرار السلة
    if (window.initAddToCartButtons) window.initAddToCartButtons();
  });
  // إعادة تهيئة أزرار السلة بعد البحث
  if (window.initAddToCartButtons) window.initAddToCartButtons();
});