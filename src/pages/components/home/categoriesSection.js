import products from "../../data/products";

export default function CategoriesSection() {
  let categories = products;

  return `
    <section class="py-10 px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Shop by categories</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        ${categories.map((cat, index) => `
          <div class="relative group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02]">

            <!-- 🏷️ Badge -->
            ${index % 4 === 0 ? `
              <div class="absolute top-2 left-2 z-10 bg-indigo-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow">
                Featured
              </div>` : ''
            }

            <!-- 💡 Background gradient hover effect -->
            <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl pointer-events-none z-0"></div>

            <!-- 📸 Image -->
            <img src="${cat.imageUrl}" alt="${cat.name}" class="relative z-10 w-full h-32 object-cover rounded-md mb-3 transition duration-300 group-hover:brightness-105" />

            <!-- 🔤 Text content -->
            <div class="relative z-10 text-center">
              <h3 class="text-sm font-semibold text-gray-800">${cat.name}</h3>
              <p class="text-xs text-gray-500 mt-1">Explore top picks</p>
            </div>

            <!-- 🔘 Floating icon -->
            <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
              <div class="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full shadow-sm hover:bg-indigo-700 transition">Shop →</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
