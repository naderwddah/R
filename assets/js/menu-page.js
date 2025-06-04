// بيانات كاملة للأطباق
const ALL_DISHES = [
  // مشاوي
  // {
  //   name: "مشاوي مشكلة",
  //   category: "grills",
  //   price: 75,
  //   img: "./assets/imges/f1.jpg",
  //   desc: "تشكيلة من الكباب والشيش طاووق ولحم الضأن المشوي"
  // },
  // {
  //   name: "كباب لحم",
  //   category: "grills",
  //   price: 60,
  //   img: "./assets/imges/1.jpg",
  //   desc: "كباب لحم ضأن مشوي على الفحم مع بهارات شرقية وخضار مشوية"
  // },
  // {
  //   name: "شيش طاووق",
  //   category: "grills",
  //   price: 55,
  //   img: "./assets/imges/2.jpg",
  //   desc: "قطع دجاج متبلة ومشوية على الفحم تقدم مع صوص الثوم والخضار"
  // },
  // // مقبلات
  // {
  //   name: "حمص بالطحينة",
  //   category: "appetizers",
  //   price: 25,
  //   img: "./assets/imges/f2.jpg",
  //   desc: "حمص طازج مع زيت الزيتون والطحينة يقدم مع خبز عربي"
  // },
  // {
  //   name: "متبل باذنجان",
  //   category: "appetizers",
  //   price: 23,
  //   img: "./assets/imges/2.jpg",
  //   desc: "باذنجان مشوي مهروس مع طحينة وثوم وزيت زيتون وحب الرمان"
  // },
  // {
  //   name: "تبولة",
  //   category: "appetizers",
  //   price: 20,
  //   img: "./assets/imges/3.jpg",
  //   desc: "سلطة من البقدونس والطماطم والبرغل والبصل مع صلصة الليمون"
  // },
  // // سندويشات
  // {
  //   name: "ساندويش فلافل",
  //   category: "sandwiches",
  //   price: 15,
  //   img: "./assets/imges/f4.jpg",
  //   desc: "فلافل طازجة مع الخضار والطحينة في خبز عربي"
  // },
  // {
  //   name: "شاورما دجاج",
  //   category: "sandwiches",
  //   price: 22,
  //   img: "./assets/imges/3.jpg",
  //   desc: "شرائح دجاج متبلة مع صوص الثوم والمخللات في خبز رقيق"
  // },
  // {
  //   name: "شاورما لحم",
  //   category: "sandwiches",
  //   price: 25,
  //   img: "./assets/imges/4.jpg",
  //   desc: "شرائح لحم متبلة مع صلصة الطحينة والخضار في خبز رقيق"
  // },
  // // حلويات
  // {
  //   name: "كنافة نابلسية",
  //   category: "desserts",
  //   price: 30,
  //   img: "./assets/imges/f3.jpg",
  //   desc: "كنافة محشوة بالجبنة ومغطاة بالقطر والفستق الحلبي"
  // },
  // {
  //   name: "بقلاوة",
  //   category: "desserts",
  //   price: 28,
  //   img: "./assets/imges/5.jpg",
  //   desc: "حلوى من العجين المورق محشوة بالمكسرات ومغطاة بالقطر"
  // },
  // {
  //   name: "أم علي",
  //   category: "desserts",
  //   price: 22,
  //   img: "./assets/imges/6.jpg",
  //   desc: "حلوى من العجين المخبوز مع الحليب والمكسرات والزبيب"
  // },
  // // مشروبات
  // {
  //   name: "ليموناضة بالنعناع",
  //   category: "drinks",
  //   price: 15,
  //   img: "./assets/imges/5.jpg",
  //   desc: "عصير ليمون طازج مع النعناع والسكر"
  // },
  // {
  //   name: "قهوة عربية",
  //   category: "drinks",
  //   price: 12,
  //   img: "./assets/imges/1.jpg",
  //   desc: "قهوة عربية أصيلة مع الهيل تقدم مع التمر"
  // },
  // {
  //   name: "عصير فراولة",
  //   category: "drinks",
  //   price: 18,
  //   img: "./assets/imges/2.jpg",
  //   desc: "عصير فراولة طازج مع قطع الفراولة"
  // },
  // // أرز
  // {
  //   name: "أرز بخاري",
  //   category: "rice",
  //   price: 30,
  //   img: "./assets/imges/6.jpg",
  //   desc: "أرز مبهر مع المكسرات والزبيب والبهارات الشرقية"
  // },
  // {
  //   name: "أرز مندي",
  //   category: "rice",
  //   price: 35,
  //   img: "./assets/imges/3.jpg",
  //   desc: "أرز مطبوخ على الطريقة اليمنية مع قطع اللحم والبهارات"
  // },
  // {
  //   name: "كبسة دجاج",
  //   category: "rice",
  //   price: 40,
  //   img: "./assets/imges/4.jpg",
  //   desc: "أرز كبسة مع الدجاج والخضار والبهارات السعودية التقليدية"
  // },
  // !---------------------------------------------------
   // مشاوي
  {
    name: "مشاوي مشكلة",
    category: "grills",
    price: 75,
    img:"./assets/imges/menu/1.jpg",
    desc: "تشكيلة من الكباب والشيش طاووق ولحم الضأن المشوي مع الأرز والخضار"
  },
  {
    name: "كباب لحم",
    category: "grills",
    price: 60,
    img:"./assets/imges/menu/2.jpg",
    desc: "كباب لحم ضأن مشوي على الفحم مع بهارات شرقية وخضار مشوية"
  },
  {
    name: "شيش طاووق",
    category: "grills",
    price: 55,
    img:"./assets/imges/menu/3.jpg",
    desc: "قطع دجاج متبلة ومشوية على الفحم تقدم مع صوص الثوم والخضار"
  },
  // مقبلات
  {
    name: "حمص بالطحينة",
    category: "appetizers",
    price: 25,
    img:"./assets/imges/menu/4.jpg",
    desc: "حمص طازج مع زيت الزيتون والطحينة يقدم مع خبز عربي"
  },
  {
    name: "متبل باذنجان",
    category: "appetizers",
    price: 23,
    img:"./assets/imges/menu/5.jpg",
    desc: "باذنجان مشوي مهروس مع طحينة وثوم وزيت زيتون وحب الرمان"
  },
  {
    name: "تبولة",
    category: "appetizers",
    price: 20,
    img:"./assets/imges/menu/6.jpg",
    desc: "سلطة من البقدونس والطماطم والبرغل والبصل مع صلصة الليمون"
  },
  // سندويشات
  {
    name: "ساندويش فلافل",
    category: "sandwiches",
    price: 15,
    img:"./assets/imges/menu/7.jpg",
    desc: "فلافل طازجة مع الخضار والطحينة في خبز عربي"
  },
  {
    name: "شاورما دجاج",
    category: "sandwiches",
    price: 22,
    img:"./assets/imges/menu/8.jpg",
    desc: "شرائح دجاج متبلة مع صوص الثوم والمخللات في خبز رقيق"
  },
  {
    name: "شاورما لحم",
    category: "sandwiches",
    price: 25,
    img:"./assets/imges/menu/9.jpg",
    desc: "شرائح لحم متبلة مع صلصة الطحينة والخضار في خبز رقيق"
  },
  // حلويات
  {
    name: "كنافة نابلسية",
    category: "desserts",
    price: 30,
    img:"./assets/imges/menu/10.jpg",
    desc: "كنافة محشوة بالجبنة ومغطاة بالقطر والفستق الحلبي"
  },
  {
    name: "بقلاوة",
    category: "desserts",
    price: 28,
    img:"./assets/imges/menu/11.jpg",
    desc: "حلوى من العجين المورق محشوة بالمكسرات ومغطاة بالقطر"
  },
  {
    name: "أم علي",
    category: "desserts",
    price: 22,
    img:"./assets/imges/menu/12.jpg",
    desc: "حلوى من العجين المخبوز مع الحليب والمكسرات والزبيب"
  },
  // مشروبات
  {
    name: "ليموناضة بالنعناع",
    category: "drinks",
    price: 15,
    img:"./assets/imges/menu/13.jpg",
    desc: "عصير ليمون طازج مع النعناع والسكر"
  },
  {
    name: "قهوة عربية",
    category: "drinks",
    price: 12,
    img:"./assets/imges/menu/14.jpg",
    desc: "قهوة عربية أصيلة مع الهيل تقدم مع التمر"
  },
  {
    name: "عصير فراولة",
    category: "drinks",
    price: 18,
    img:"./assets/imges/menu/15.jpg",
    desc: "عصير فراولة طازج مع قطع الفراولة"
  },
  // أرز
  {
    name: "أرز بخاري",
    category: "rice",
    price: 30,
    img:"./assets/imges/menu/16.jpg",
    desc: "أرز مبهر مع المكسرات والزبيب والبهارات الشرقية"
  },
  {
    name: "أرز مندي",
    category: "rice",
    price: 35,
    img:"./assets/imges/menu/17.jpg",
    desc: "أرز مطبوخ على الطريقة اليمنية مع قطع اللحم والبهارات"
  },
  {
    name: "كبسة دجاج",
    category: "rice",
    price: 40,
    img:"./assets/imges/menu/18.jpg",
    desc: "أرز كبسة مع الدجاج والخضار والبهارات السعودية التقليدية"
  }
];

function renderMenuDishes(category = "all", searchTerm = "") {
  const grid = document.getElementById("menuItemsContainer");
  const emptyState = document.getElementById("emptyState");
  let filtered = ALL_DISHES;
  if (category !== "all") {
    filtered = filtered.filter(d => d.category === category);
  }
  if (searchTerm) {
    filtered = filtered.filter(d => d.name.includes(searchTerm) || d.desc.includes(searchTerm));
  }
  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  }
  grid.classList.remove("hidden");
  emptyState.classList.add("hidden");
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
}

document.addEventListener("DOMContentLoaded", function () {
  renderMenuDishes();
  // تصفية حسب القسم
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove("active"));
      this.classList.add("active");
      renderMenuDishes(this.dataset.category, document.getElementById("searchInput").value.trim());
    });
  });
  // بحث
  document.getElementById("searchInput").addEventListener("input", function() {
    let cat = document.querySelector('.category-tab.active').dataset.category;
    renderMenuDishes(cat, this.value.trim());
  });
  // دعم التنقل لرابط قسم في الهيدر
  if (window.location.hash) {
    const catMap = { "#grills": "grills", "#appetizers": "appetizers", "#sandwiches": "sandwiches", "#desserts": "desserts", "#drinks": "drinks", "#rice": "rice" };
    let cat = catMap[window.location.hash];
    if (cat) {
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove("active"));
      let btn = document.querySelector(`.category-tab[data-category="${cat}"]`);
      if (btn) btn.classList.add("active");
      renderMenuDishes(cat);
      window.scrollTo({ top: 250, behavior: "smooth" });
    }
  }
  // إعادة تهيئة أزرار السلة بعد التحميل
  if (window.initAddToCartButtons) window.initAddToCartButtons();
});