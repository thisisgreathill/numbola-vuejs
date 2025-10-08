<template>
  <div
    class="floating-card group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm p-8 transition-all duration-500 hover:border-[#53d22d]/50 hover:shadow-2xl hover:shadow-[#53d22d]/20 hover:-translate-y-2"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @mousemove="handleMouseMove"
  >
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :style="spotlightStyle"
    ></div>

    <div class="relative z-10">
      <div class="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#53d22d]/20 to-green-600/20 backdrop-blur-sm">
        <span class="material-symbols-outlined text-[#53d22d] text-4xl">{{ icon }}</span>
      </div>

      <h3 class="text-white text-2xl font-bold mb-3 group-hover:text-[#53d22d] transition-colors duration-300">
        {{ title }}
      </h3>

      <p class="text-gray-400 text-base leading-relaxed">
        {{ description }}
      </p>
    </div>

    <div class="absolute top-0 right-0 w-32 h-32 bg-[#53d22d]/5 rounded-full blur-3xl group-hover:bg-[#53d22d]/10 transition-all duration-500"></div>
  </div>
</template>

<script>
export default {
  name: 'FloatingCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isHovered: false,
      mouseX: 0,
      mouseY: 0
    }
  },
  computed: {
    spotlightStyle() {
      return {
        background: `radial-gradient(600px circle at ${this.mouseX}px ${this.mouseY}px, rgba(83, 210, 45, 0.1), transparent 40%)`
      }
    }
  },
  methods: {
    handleMouseMove(event) {
      const rect = event.currentTarget.getBoundingClientRect()
      this.mouseX = event.clientX - rect.left
      this.mouseY = event.clientY - rect.top
    }
  }
}
</script>

<style scoped>
.floating-card {
  transform-style: preserve-3d;
}

.floating-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  padding: 1px;
  background: linear-gradient(45deg, transparent, rgba(83, 210, 45, 0.3), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s;
}

.floating-card:hover::before {
  opacity: 1;
}
</style>
