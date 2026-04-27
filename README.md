# R
    <header
      class="fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)]"
    >
      <div
        class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-full shadow-md overflow-hidden">
            <img
              src="/assets/imges/logo.jpg"
              alt="شعار ليالي أبهى"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 class="text-xl font-black text-[var(--color-primary-dark)]">
              ليالي أبهى
            </h1>
            <p class="text-xs text-[var(--color-text-muted)]">
              للمأكولات الشعبية
            </p>
          </div>
        </div>
        <button
          onclick="App.toggleCart()"
          class="relative p-2 rounded-full hover:bg-[var(--color-primary-light)]"
        >
          <i class="fas fa-shopping-bag text-xl"></i>
          <span id="cartBadge" class="cart-badge hidden">0</span>
        </button>
      </div>
    </header>