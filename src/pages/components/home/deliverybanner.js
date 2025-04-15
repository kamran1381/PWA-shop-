import products from '../../data/products';

export default function DeliveryBanner() {
  return `
    <section class="bg-gradient-to-r from-indigo-50 to-white py-10 px-6 mt-10 rounded-2xl shadow-inner mx-4">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- 📦 Text + Features -->
        <div class="md:w-1/2">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Amazon delivers to you</h3>
          <p class="text-gray-700 text-sm mb-5 leading-relaxed">
            🌍 Worldwide shipping — over <strong>100+ countries</strong><br/>
            🏠 Right to your <strong>doorstep</strong>, fast and reliable.
          </p>

          <!-- ✅ Subfeatures -->
          <ul class="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 font-medium">
            <li class="flex items-center gap-2"><span class="text-green-600">✔</span> Free shipping eligible</li>
            <li class="flex items-center gap-2"><span class="text-green-600">✔</span> Package tracking</li>
            <li class="flex items-center gap-2"><span class="text-green-600">✔</span> Global warehouses</li>
          </ul>

          <!-- 🚀 CTA -->
          <button class="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition shadow-md">
            View more
          </button>
        </div>

        <!-- 🖼️ Image side -->
        <div class="md:w-1/2 flex justify-center">
          <div class="relative w-48 md:w-64">
            <img src="${products[0].imageUrl}" alt="Amazon Delivery" class="w-full rounded-xl shadow-lg" />
            <div class="absolute bottom-2 right-2 bg-white px-3 py-1 text-xs text-gray-800 rounded-full shadow">
              Fast Delivery 🚚
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
