<template>
  <div class="min-h-screen bg-[#111827]" style='font-family: Manrope, "Noto Sans", sans-serif;'>
    <!-- Header -->
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-800 px-10 py-3">
      <div class="flex items-center gap-4 text-white">
        <router-link to="/" class="flex items-center gap-2">
          <svg class="size-8 text-[#53d22d]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fill-rule="evenodd"></path>
          </svg>
          <h2 class="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Numbola</h2>
        </router-link>
      </div>
      <div class="flex flex-1 justify-end gap-8 items-center">
        <nav class="flex items-center gap-9">
          <router-link 
            to="/platform" 
            class="text-gray-300 hover:text-white text-base font-medium leading-normal transition-colors"
            :class="{ 'text-[#53d22d]': $route.path === '/platform' }"
          >
            Platform
          </router-link>
          <router-link 
            to="/features" 
            class="text-gray-300 hover:text-white text-base font-medium leading-normal transition-colors"
            :class="{ 'text-[#53d22d]': $route.path === '/features' }"
          >
            Features
          </router-link>
          <router-link 
            to="/pricing" 
            class="text-gray-300 hover:text-white text-base font-medium leading-normal transition-colors"
            :class="{ 'text-[#53d22d]': $route.path === '/pricing' }"
          >
            Pricing
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-300 hover:text-white text-base font-medium leading-normal transition-colors"
            :class="{ 'text-[#53d22d]': $route.path === '/about' }"
          >
            About
          </router-link>
          <router-link 
            to="/contact" 
            class="text-gray-300 hover:text-white text-base font-medium leading-normal transition-colors"
            :class="{ 'text-[#53d22d]': $route.path === '/contact' }"
          >
            Contact
          </router-link>
        </nav>
        <div class="flex gap-2">
          <router-link 
            to="/login"
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-gray-800 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-700 transition-colors"
          >
            <span class="truncate">Login</span>
          </router-link>
          <router-link 
            to="/demo"
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#53d22d] text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-400 transition-colors"
          >
            <span class="truncate">Get Demo</span>
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 px-10 py-8 mt-auto">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <!-- Logo and Description -->
          <div class="flex flex-col items-center md:items-start">
            <div class="flex items-center gap-2 mb-3">
              <svg class="size-8 text-[#53d22d]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fill-rule="evenodd"></path>
              </svg>
              <span class="text-white text-xl font-bold">Numbola</span>
            </div>
            <p class="text-gray-400 text-center md:text-left max-w-sm">The leading white-label iGaming platform for entrepreneurs.</p>
          </div>

          <!-- Navigation Links -->
          <div class="flex flex-wrap justify-center gap-6">
            <router-link to="/platform" class="text-gray-400 hover:text-white transition-colors">Platform</router-link>
            <router-link to="/features" class="text-gray-400 hover:text-white transition-colors">Features</router-link>
            <router-link to="/pricing" class="text-gray-400 hover:text-white transition-colors">Pricing</router-link>
            <router-link to="/about" class="text-gray-400 hover:text-white transition-colors">About</router-link>
            <router-link to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</router-link>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a href="mailto:lily@example.com" class="text-gray-400 hover:text-white transition-colors">
              <span class="material-symbols-outlined">mail</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="border-t border-gray-800 pt-4 mt-6 text-center">
          <p class="text-gray-400">© 2024 Numbola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>