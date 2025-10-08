<template>
  <div
    class="pricing-card relative rounded-3xl border p-10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl group overflow-hidden"
    :class="[
      popular
        ? 'border-[#53d22d] bg-gradient-to-br from-gray-900/90 to-green-950/50 scale-105 shadow-xl shadow-[#53d22d]/30'
        : 'border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80 hover:border-[#53d22d]/50'
    ]"
  >
    <div
      v-if="popular"
      class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
    >
      <span class="bg-gradient-to-r from-[#53d22d] to-green-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-glow">
        Most Popular
      </span>
    </div>

    <div class="absolute top-0 right-0 w-40 h-40 bg-[#53d22d]/5 rounded-full blur-3xl group-hover:bg-[#53d22d]/15 transition-all duration-500"></div>
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-green-600/5 rounded-full blur-2xl group-hover:bg-green-600/15 transition-all duration-500"></div>

    <div class="relative z-10">
      <div class="text-center mb-8">
        <h3 class="text-white text-3xl font-black mb-3 group-hover:text-[#53d22d] transition-colors duration-300">
          {{ name }}
        </h3>
        <div class="text-gray-400 mb-6 text-base">{{ description }}</div>
        <div class="text-white">
          <span class="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {{ price }}
          </span>
          <span class="text-gray-400 text-lg">{{ period }}</span>
        </div>
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

      <ul class="space-y-4 mb-10">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start gap-3 group/item"
        >
          <span class="material-symbols-outlined text-[#53d22d] text-2xl mt-0.5 group-hover/item:scale-125 transition-transform">
            check_circle
          </span>
          <span class="text-gray-300 group-hover/item:text-white transition-colors">
            {{ feature }}
          </span>
        </li>
      </ul>

      <router-link
        to="/contact"
        class="w-full block py-4 px-8 rounded-xl font-bold transition-all duration-300 text-center text-lg transform group-hover:scale-105"
        :class="
          popular
            ? 'bg-gradient-to-r from-[#53d22d] to-green-500 text-gray-900 shadow-lg hover:shadow-2xl hover:shadow-[#53d22d]/50'
            : 'bg-gray-800/80 text-white hover:bg-gradient-to-r hover:from-[#53d22d] hover:to-green-500 hover:text-gray-900'
        "
      >
        Get Started
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    period: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      required: true
    },
    features: {
      type: Array,
      required: true
    },
    popular: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.pricing-card {
  transform-style: preserve-3d;
}

.pricing-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, transparent, rgba(83, 210, 45, 0.4), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s;
}

.pricing-card:hover::before {
  opacity: 1;
}
</style>
