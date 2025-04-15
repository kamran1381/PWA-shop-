import products from '../../data/products';

export default function DealsScroll() {
  const deals = products.slice(0, 5);

  return `
    <section class="w-full overflow-x-auto px-4 py-6 scrollbar-hide">
      <h2 class="text-xl font-bold text-gray-900 mb-4 px-1">Today's Deals</h2>
      <div class="flex gap-4 w-max">

        ${deals.map((product, index) => `
          <div class="relative min-w-[200px] max-w-[220px] bg-white rounded-2xl shadow-md hover:shadow-xl p-4 transition-all duration-300 hover:scale-[1.03] cursor-pointer group">
            
            <!-- 🔖 Deal badge -->
            ${index % 2 === 0 ? `
              <div class="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm font-semibold z-10">Hot Deal</div>
            ` : ''}

            <!-- 📸 Product Image -->
            <img src="${product.imageUrl}" alt="${product.name}" class="h-28 object-contain mx-auto mb-3 transition group-hover:brightness-105" />

            <!-- 🔤 Product name -->
            <p class="text-sm font-semibold text-gray-800 text-center line-clamp-2">${product.name}</p>

            <!-- ⭐ Rating row (static for now) -->
            <div class="flex justify-center items-center gap-1 mt-2 text-yellow-400 text-xs">
              ★ ★ ★ ★ ☆
              <span class="text-gray-400 ml-1">(120)</span>
            </div>

            <!-- 💰 Price -->
            <div class="text-center mt-2">
              <p class="text-xs text-gray-400 line-through">$${(product.price * 1.3).toFixed(2)}</p>
              <p class="text-sm font-bold text-indigo-600">$${product.price}</p>
            </div>

          </div>
        `).join('')}

      </div>
    </section>
  `;
}
