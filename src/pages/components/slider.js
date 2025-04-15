// Import the products array from products.js
import products from '../data/products.js';

export default function createSlider() {
  const section = document.createElement('section');
  section.className = 'relative w-full max-w-5xl h-72 md:h-96 overflow-hidden rounded-2xl shadow-xl';
  
  section.innerHTML = `
    <img id="slider-image" src="${products[0].imageUrl}" alt="${products[0].name}" class="w-full h-full object-cover transition duration-1000" />
    <div id="slider-caption" class="absolute bottom-5 left-5 bg-white/70 px-4 py-2 rounded-xl text-gray-800 text-lg font-bold">
      ${products[0].name}
    </div>
  `;

  let index = 1;
  setInterval(() => {
    const img = section.querySelector('#slider-image');
    const caption = section.querySelector('#slider-caption');
    img.src = products[index].imageUrl;
    img.alt = products[index].name;
    caption.textContent = products[index].name;
    index = (index + 1) % products.length;
  }, 3000);

  return section;
}
