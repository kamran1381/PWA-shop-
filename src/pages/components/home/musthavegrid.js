import products from '../../data/products';

export default function MustHaveGrid() {
  const mustHaves = products.slice(0, 4); // Adjust to match available products

  return `
    <section class="py-10 px-6 max-w-7xl mx-auto">
      <h2 class="text-xl font-bold mb-6 text-gray-900">You must have these!</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        ${mustHaves.map(product => `
          <div class="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 group transition-all relative overflow-hidden">
            
            <!-- 🔥 Optional Badge -->
            <span class="absolute top-2 right-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
              New
            </span>

            <!-- 🖼 Image Wrapper -->
            <div class="w-full h-28 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-50">
              <img 
                src="${product.imageUrl}" 
                alt="${product.name}" 
                class="h-full transition-transform duration-300 group-hover:scale-110 object-contain" 
              />
            </div>

            <!-- 📝 Product Info -->
            <h4 class="text-sm font-semibold text-gray-800 text-center mb-1 truncate">${product.name}</h4>
            <p class="text-sm text-indigo-600 font-bold text-center">$15.11</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
