// pages/components/stories.js
import products from '../data/products.js';

export default function createStories() {
  const wrapper = document.createElement('div');
  wrapper.className = 'max-w-7xl mx-auto px-4 mt-4';

  const container = document.createElement('div');
  container.className = 'flex gap-4 transition-transform duration-700 ease-in-out will-change-transform';
  wrapper.appendChild(container);

  // Add each product image as a "story" circle
  products.forEach(product => {
    const circle = document.createElement('div');
    circle.className = `
      flex flex-col items-center justify-center
      w-20 min-w-20 h-20 rounded-full overflow-hidden
      border-2 border-purple-400 shadow-md shrink-0 bg-white
    `.trim();

    circle.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-full object-cover" />
    `;

    container.appendChild(circle);
  });

  // Auto-scroll effect
  let index = 0;
  const storyWidth = 88; // ~width (80px) + gap (8px)
  setInterval(() => {
    index = (index + 1) % products.length;
    container.style.transform = `translateX(-${index * storyWidth}px)`;
  }, 3000);

  return wrapper;
}
