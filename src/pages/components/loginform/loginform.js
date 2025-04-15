export default function LoginComponent() {
  return `
    <section class="bg-gray-100 min-h-screen flex items-center justify-center px-6">
      <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 class="text-2xl font-semibold text-center mb-6">Login to Your Account</h2>
        <form class="space-y-4">
          <div>
            <label class="block text-gray-700 text-sm mb-1" for="email">Email</label>
            <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="you@example.com" />
          </div>
          <div>
            <label class="block text-gray-700 text-sm mb-1" for="password">Password</label>
            <input type="password" id="password" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="••••••••" />
          </div>
          <button type="submit" class="w-full bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">Login</button>
        </form>
        <p class="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <a href="#" class="text-black hover:underline">Sign up</a>
        </p>
      </div>
    </section>
  `;
}
