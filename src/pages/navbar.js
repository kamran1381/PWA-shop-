export default function CreateNavbar() {
  const wrapper = document.createElement('div');

  // Top bar with search + gender toggle + icons (all hidden on mobile)
  const topBar = document.createElement('div');
  topBar.className = 'fixed top-0 left-0 w-full z-50 bg-white shadow px-4 py-2';
  topBar.innerHTML = `
    <div class="flex items-center justify-between gap-4 flex-wrap">
      <!-- Logo -->
      <div class="hidden md:block">
        <img width="40" height="40" src="https://img.icons8.com/sf-black-filled/50/clothes.png" alt="clothes"/>
      </div>

      <!-- Gender Toggle (hidden on small screens) -->
      <div class="hidden md:flex items-center gap-2 bg-gray-100 p-1 rounded-full">
        <button class="px-4 py-1 rounded-full bg-blue-100 text-black font-medium">👗 Women</button>
        <button class="px-4 py-1 rounded-full text-gray-600">🧢 Men</button>
      </div>

      <!-- Search Input -->
      <input
        id="mainSearchInput"
        type="text"
        placeholder="Search for items, brands, inspiration..."
        class="flex-1 bg-gray-100 px-4 py-2 rounded-full outline-none transition-all duration-300 min-w-[180px]"
      >

      <!-- Icons (hidden on small screens) -->
      <div class="hidden md:flex items-center gap-4">
        <span class="text-xl">🤍</span>
        <button class="text-xl" data-route="login" aria-label="Login">
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/login-rounded-right.png" alt="login icon"/>
        </button>
        <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">UA</div>
      </div>
    </div>
  `;

  // Desktop navbar (optional extra content below top bar)
  const desktopNav = document.createElement('div');
  desktopNav.className = 'hidden md:flex justify-between items-center w-full px-6 py-4 mt-24'; // mt adjusted for taller topBar
  desktopNav.innerHTML = `
    <!-- Placeholder or additional nav items here -->
  `;

  // Mobile bottom navbar
  const bottomNav = document.createElement('div');
  bottomNav.className = 'fixed bottom-0 left-0 w-full bg-white shadow-md md:hidden h-16 flex justify-around items-center z-50';
  bottomNav.innerHTML = `
    <button class="text-2xl" data-route="home"><i class="fa-solid fa-house"></i></button>
    <button class="text-2xl"><i class="fa-solid fa-phone"></i></button>
    <button class="text-2xl"><i class="fa-solid fa-shop"></i></button>
    <button class="text-2xl" data-route="login" title="Login">
      <i class="fa-solid fa-right-to-bracket"></i>
    </button>
  `;

  // Search modal
  const searchModal = document.createElement('div');
  searchModal.id = 'searchModal';
  searchModal.className = `
    fixed inset-0 z-50 bg-white flex flex-col p-4 hidden
  `;
  searchModal.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <input
        id="searchModalInput"
        type="text"
        placeholder="Search for items, brands, inspiration..."
        class="w-full bg-gray-100 px-4 py-2 rounded-full outline-none"
        autofocus
      >
      <button id="closeSearchModal" class="ml-4 text-xl">✖</button>
    </div>
    <div class="text-gray-400 text-center mt-10">Start typing to search...</div>
  `;

  // Search modal behavior
  setTimeout(() => {
    const mainSearchInput = topBar.querySelector('#mainSearchInput');
    const modal = searchModal;
    const modalInput = modal.querySelector('#searchModalInput');
    const closeBtn = modal.querySelector('#closeSearchModal');

    mainSearchInput.addEventListener('focus', () => {
      modal.classList.remove('hidden');
      modalInput.focus();
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      mainSearchInput.blur();
    });
  }, 0);

  wrapper.appendChild(topBar);
  wrapper.appendChild(searchModal);
  wrapper.appendChild(desktopNav);
  wrapper.appendChild(bottomNav);

  return wrapper;
}
