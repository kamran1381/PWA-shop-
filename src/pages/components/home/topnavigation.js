import products from '../../data/products'

export function generateProductCards() {
  return products.slice(0, 6).map(product => `
    <div class="relative bg-white border rounded-xl p-4 shadow group hover:shadow-xl hover:scale-105 transition transform duration-300">
      
      <!-- 🏷️ Optional badge -->
      <div class="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-0.5 rounded-full text-black shadow-sm">
        Best Seller
      </div>

      <!-- 🖼️ Product image -->
      <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-40 object-contain rounded-lg mb-3" />

      <!-- 🔤 Product name -->
      <h3 class="text-base font-semibold text-gray-800 truncate">${product.name}</h3>

      <!-- 💬 Description -->
      <p class="text-xs text-gray-500 line-clamp-2">${product.description}</p>

      <!-- ⭐️ Rating bar -->
      <div class="flex items-center mt-2">
        <div class="flex text-yellow-400 text-sm">
          ★★★★☆
        </div>
        <span class="text-xs text-gray-400 ml-2">(120)</span>
      </div>

      <!-- 💵 Price + Buy -->
      <div class="flex justify-between items-center mt-3">
        <span class="text-indigo-600 font-semibold">${product.price}</span>
        <button class="buy-btn bg-indigo-600 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-700 active:scale-95 transition">
          Buy
        </button>
      </div>

      <!-- 🎨 Inner glow effect -->
      <div class="absolute inset-0 rounded-xl border border-transparent group-hover:border-indigo-200 pointer-events-none transition duration-300"></div>
    </div>
  `).join('');
}


function getProductImage(index) {
  const product = products[index % products.length];
  return product.imageUrl;
}

export default function TopNavigation() {
  const homeContainer = document.createElement('div');
  homeContainer.classList = 'w-full bg-[#f3f3f3]';

  homeContainer.innerHTML = `

    <!-- 🔝 Top Navigation -->
    <div class="w-full bg-gradient-to-b from-white to-gray-100 py-4 px-4 border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">
        <!-- Left: User Info -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img src="${getProductImage(0)}" alt="User" class="w-full h-full object-cover" />
          </div>
          <span class="text-sm text-gray-800">Hi, Name</span>
        </div>

        <!-- Middle: Quick Actions -->
        <div class="flex flex-wrap justify-center gap-4 text-center text-sm">
          ${[
            { img: getProductImage(1), label: "Your Orders", tooltip: "Track recent orders" },
            { img: getProductImage(2), label: "Electronics", tooltip: "Top tech deals" },
            { img: getProductImage(3), label: "Home & Kitchen", tooltip: "Best for your home" },
          ]
            .map(
              (item) => `
            <div class="relative group flex flex-col items-center px-3 cursor-pointer hover:scale-105 transition">
              <img src="${item.img}" alt="${item.label}" class="w-6 h-6 object-contain mb-1 group-hover:rotate-6 transition duration-300" />
              <span>${item.label}</span>
              <div class="absolute top-10 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">${item.tooltip}</div>
            </div>
          `
            )
            .join('')}
        </div>

        <!-- Right: Cart + Search -->
        <div class="flex items-center gap-4">
          <div class="relative">
            <img src="${getProductImage(4)}" alt="Cart" class="w-6 h-6 object-contain" />
            <span class="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
          </div>
          <span class="text-sm text-gray-700">Cart</span>

          <input type="text" placeholder="Search" class="hidden md:block px-3 py-1 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring w-40" />
        </div>
      </div>
    </div>

    <!-- 📦 Shop by Categories -->
    <section class="py-8 px-4 max-w-7xl mx-auto">
      <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Shop by categories</h2>
      <div class="flex gap-4 overflow-x-auto scrollbar-hide">
        ${[
          { name: 'Beauty picks', img: getProductImage(5) },
          { name: 'Computer & Accessories', img: getProductImage(6) },
          { name: 'Video games', img: getProductImage(7) },
          { name: 'Toys & Games', img: getProductImage(8) },
        ]
          .map(
            (cat) => `
          <div class="min-w-[120px] bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center hover:scale-105">
            <img src="${cat.img}" alt="${cat.name}" class="w-20 h-20 object-contain mb-3" />
            <h3 class="text-sm font-medium text-gray-700">${cat.name}</h3>
          </div>
        `
          )
          .join('')}
      </div>
    </section>

    <!-- 🚚 Delivery Banner -->
    <section class="bg-white py-8 px-4 mt-4 shadow-sm">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="md:w-1/2">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Amazon delivers to you</h3>
          <p class="text-gray-600 text-sm mb-4">We ship to over 100 countries and regions—right to your doorstep.</p>
          <button class="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">View more</button>
        </div>
        <img src="${getProductImage(9)}" alt="Delivery" class="w-48 md:w-64 rounded-xl shadow-md" />
      </div>
    </section>

    <!-- 👟 Most Viewed -->
    <section class="py-10 px-4 max-w-7xl mx-auto">
      <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6">Most viewed</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        ${generateProductCards()}
      </div>
    </section>
  `;

  return homeContainer;
}
