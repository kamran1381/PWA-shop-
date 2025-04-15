import products from "../../data/products";

export default function PromoBanners() {
  return `
    <section class="py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      ${[
        {
          title: "Comfy styles for her",
          text: "Top-rated picks for every day.",
          img: products[2].imageUrl,
          badge: "For Her",
        },
        {
          title: "Comfy styles for him",
          text: "Checkered shirts & basics.",
          img: products[3].imageUrl,
          badge: "For Him",
        },
      ]
        .map(
          (banner) => `
        <div class="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all group overflow-hidden">

          <!-- 💎 Optional Ribbon Badge -->
          <span class="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow">
            ${banner.badge}
          </span>

          <!-- 🖼 Image -->
          <div class="w-full h-32 mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
            <img 
              src="${banner.img}" 
              alt="${banner.title}" 
              class="h-full object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </div>

          <!-- ✏️ Text -->
          <h3 class="text-lg font-bold text-gray-800 mb-1 text-center">${banner.title}</h3>
          <p class="text-sm text-gray-500 text-center">${banner.text}</p>
        </div>
      `
        )
        .join("")}
    </section>
  `;
}
