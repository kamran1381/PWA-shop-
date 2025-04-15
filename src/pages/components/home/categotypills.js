
export default function CategoryPills() {
    const pills = ['Vacuum cleaners', 'Video & Consoles', 'Portable speakers', 'Projectors'];
    return `
      <section class="px-6 max-w-7xl mx-auto mt-6 mb-4">
        <div class="flex flex-wrap gap-3">
          ${pills.map(pill => `
            <span class="bg-white shadow px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">${pill}</span>
          `).join('')}
        </div>
      </section>
    `;
  }