export default function Newsletter() {
    return `
      <section class="bg-white py-10 px-6 max-w-7xl mx-auto rounded-xl shadow mt-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 class="text-xl font-bold mb-2">SUBSCRIBE TO THE NEWS</h3>
          <p class="text-sm text-gray-500">Get updates on exclusive deals, new arrivals & more.</p>
        </div>
        
        <form class="flex mt-4 md:mt-0">
          <input type="email" placeholder="Your email" class="px-4 py-2 border border-gray-300 rounded-l-full text-sm" />
          <button type="submit" class="bg-black text-white px-4 py-2 rounded-r-full hover:bg-gray-800 text-sm">Subscribe</button>
        </form>
      </section>
    `;
  }
  