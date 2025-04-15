export default function ShoppingCartPage() {
    const cartContainer = document.createElement('section');
    cartContainer.className = 'bg-gray-100 min-h-screen py-10 px-6';
  
    cartContainer.innerHTML = `
      <div class="max-w-md mx-auto bg-white p-8 mt-10 rounded-xl shadow-md">
        <h2 class="text-2xl font-semibold text-center mb-6">🛒 Your Shopping Cart</h2>
        <div id="cart-items" class="space-y-4 text-sm text-gray-600 text-center">
          <p>Your cart is currently empty.</p>
        </div>
        <button id="checkout-btn" class="w-full bg-black text-white px-6 py-2 mt-6 rounded-full hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>
    `;
  
    return cartContainer;
  }
  