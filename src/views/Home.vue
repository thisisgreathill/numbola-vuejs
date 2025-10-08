<template>
  <Layout>
    <div class="relative flex flex-col bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] dark group/design-root overflow-x-hidden">
      <ThreeBackground />
      <div class="relative z-10 px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-12">
        <div class="layout-content-container flex flex-col max-w-7xl flex-1">
          <!-- Hero Section -->
          <div class="@container">
            <div class="@[480px]:p-4">
              <div class="flex min-h-[600px] flex-col gap-6 bg-gradient-to-br from-gray-900/40 via-transparent to-gray-900/40 backdrop-blur-sm @[480px]:gap-8 @[480px]:rounded-3xl items-center justify-center p-12 text-center border border-gray-800/30 shadow-2xl">
                <div class="flex flex-col gap-6 max-w-4xl animate-float">
                  <div class="inline-block mx-auto px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/20 to-green-600/20 border border-[#53d22d]/30 mb-4">
                    <span class="text-[#53d22d] text-sm font-bold tracking-wide">NEXT-GENERATION GAMING PLATFORM</span>
                  </div>
                  <h1 class="text-white text-6xl md:text-7xl font-black leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
                    Complete iGaming Platform for All Gaming Services
                  </h1>
                  <h2 class="text-gray-300 text-xl font-normal leading-relaxed">
                    Launch lottery, casino, sports betting, and more. Complete white-label solution with full management dashboard for every gaming vertical.
                  </h2>
                </div>
                <div class="flex flex-col sm:flex-row gap-4">
                  <router-link
                    to="/demo"
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-[#53d22d] to-green-500 text-gray-900 text-lg font-bold leading-normal tracking-[0.015em] hover:shadow-2xl hover:shadow-[#53d22d]/50 transition-all duration-300 transform hover:scale-105 animate-glow"
                  >
                    <span class="truncate">Request a Demo</span>
                    <span class="material-symbols-outlined ml-2">arrow_forward</span>
                  </router-link>
                  <router-link
                    to="/pricing"
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-transparent border-2 border-white/30 text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                  >
                    <span class="truncate">View Pricing</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gaming Services Overview -->
          <div class="py-20 px-4">
            <div class="text-center mb-16">
              <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-6">
                <span class="text-[#53d22d] text-sm font-bold tracking-wide">GAMING SERVICES</span>
              </div>
              <h2 class="text-white text-5xl font-black leading-tight tracking-tight mb-6">Our Gaming Services</h2>
              <p class="text-gray-300 text-xl max-w-3xl mx-auto">Complete range of gaming solutions for every market segment</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FloatingCard
                v-for="service in gamingServices"
                :key="service.id"
                :icon="service.icon"
                :title="service.title"
                :description="service.description"
              />
            </div>
          </div>
          
          <!-- Key Features Preview -->
          <div class="py-20 px-4">
            <div class="text-center mb-16">
              <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-6">
                <span class="text-[#53d22d] text-sm font-bold tracking-wide">PLATFORM FEATURES</span>
              </div>
              <h2 class="text-white text-5xl font-black leading-tight tracking-tight mb-6">Why Choose Numbola?</h2>
              <p class="text-gray-300 text-xl max-w-3xl mx-auto">Just like Shopify for e-commerce, Numbola provides everything you need to run a successful online gaming business.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FloatingCard
                v-for="feature in platformFeatures"
                :key="feature.id"
                :icon="feature.icon"
                :title="feature.title"
                :description="feature.description"
              />
            </div>
            <div class="text-center mt-12">
              <router-link
                to="/features"
                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#53d22d] to-green-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-[#53d22d]/50 transition-all duration-300 transform hover:scale-105"
              >
                View All Features
                <span class="material-symbols-outlined ml-2">arrow_forward</span>
              </router-link>
            </div>
          </div>
          
          <!-- Stats Section -->
          <div class="py-20 px-4 bg-gradient-to-br from-gray-900/60 via-[#53d22d]/5 to-gray-900/60 backdrop-blur-md rounded-3xl border border-gray-800/50 shadow-2xl">
            <div class="text-center mb-16">
              <h2 class="text-white text-5xl font-black leading-tight tracking-tight mb-4">Trusted by Industry Leaders</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div
                v-for="stat in stats"
                :key="stat.id"
                class="text-center transform hover:scale-110 transition-all duration-300"
              >
                <div class="text-[#53d22d] text-6xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#53d22d] to-green-400">{{ stat.number }}</div>
                <div class="text-gray-300 text-xl font-medium">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          
          <!-- CTA Section -->
          <div class="relative py-20 px-8 bg-gradient-to-br from-[#53d22d]/20 via-green-600/20 to-[#53d22d]/20 rounded-3xl mt-20 overflow-hidden border border-[#53d22d]/30 shadow-2xl">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1M2QyMmQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMC41NTIuNDQ4LTEgMS0xaDEyYy41NTIgMCAxIC40NDggMSAxdjEyYzAgLjU1Mi0uNDQ4IDEtMSAxSDM3Yy0uNTUyIDAtMS0uNDQ4LTEtMXYtMTJ6TTAgMTRjMC0uNTUyLjQ0OC0xIDEtMWgxMmMuNTUyIDAgMSAuNDQ4IDEgMXYxMmMwIC41NTItLjQ0OCAxLTEgMUgxYy0uNTUyIDAtMS0uNDQ4LTEtMXYtMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div class="relative z-10 max-w-4xl mx-auto text-center">
              <h2 class="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">Ready to Start Your Gaming Business?</h2>
              <p class="text-gray-200 text-xl mb-10">Join hundreds of successful operators who chose Numbola to power their gaming platforms.</p>
              <div class="flex flex-col sm:flex-row gap-6 justify-center">
                <router-link
                  to="/demo"
                  class="px-10 py-5 bg-gradient-to-r from-[#53d22d] to-green-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-[#53d22d]/50 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Start Free Demo
                </router-link>
                <router-link
                  to="/contact"
                  class="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
                >
                  Talk to Sales
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
import ThreeBackground from '../components/ThreeBackground.vue'
import FloatingCard from '../components/FloatingCard.vue'
import { useSEO } from '../composables/useSEO.js'

export default {
  name: 'Home',
  components: {
    Layout,
    ThreeBackground,
    FloatingCard
  },
  mounted() {
    const { setSEO } = useSEO()
    setSEO({
      title: 'Numbola - Complete iGaming Platform | Lottery, Casino, Sports Betting',
      description: 'Launch your online gaming business with Numbola\'s white-label platform. Complete solution for lottery, casino, sports betting, and specialty games. Quick setup, full customization.',
      keywords: 'iGaming platform, white-label casino, lottery software, sports betting platform, online gaming, casino games, numbola',
      ogTitle: 'Numbola - Complete iGaming Platform',
      ogDescription: 'Launch your online gaming business with Numbola\'s white-label platform. Complete solution for lottery, casino, sports betting, and specialty games.',
      ogUrl: 'https://numbola.com/'
    })
  },
  computed: {
    heroBackgroundStyle() {
      return {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnbe0MPav9wZiuPUoy1Vn4zGy85SG8l2tNv_8UbJrCNSWpoZWklcV7aEAjpIvykI3AKwiB4oGTNYfKDNkS9JkyyCRsCIgULykJ0JgEEtWqyNJae7iT5g0woLwJxrpT3Ox3uX8XO6yUA4DqXMq9KAQQTw-H3K2xNI0i7FVxItoZLATJo_oI1mFRt5HmQvq0A71oKDPjkPi73skEt55zhER_bH2qosYt7xbpVKQP7ys5_wOFjknJA1kq8Jm4j3umerEusqeun-lwGJb1")'
      }
    }
  },
  data() {
    return {
      gamingServices: [
        {
          id: 1,
          icon: 'confirmation_number',
          title: 'Lottery & Raffle Sites',
          description: 'Traditional draws, instant wins, scratch cards, and comprehensive raffle systems.'
        },
        {
          id: 2,
          icon: 'casino',
          title: 'Casino Games',
          description: 'Slots, table games, live dealers, and progressive jackpots with premium experience.'
        },
        {
          id: 3,
          icon: 'sports_soccer',
          title: 'Sports Betting',
          description: 'Pre-match and live betting on global sports events with comprehensive coverage.'
        },
        {
          id: 4,
          icon: 'games',
          title: 'Specialty Gaming Services',
          description: 'Bingo, virtual sports, and skill-based gaming solutions for diverse entertainment.'
        }
      ],platformFeatures: [
        {
          id: 1,
          icon: 'speed',
          title: 'Quick Setup',
          description: 'Launch your platform in just 3-5 days with our pre-built solution.'
        },
        {
          id: 2,
          icon: 'palette',
          title: 'Full White-Label',
          description: 'Complete branding customization to match your business identity.'
        },
        {
          id: 3,
          icon: 'security',
          title: 'Enterprise Security',
          description: 'Bank-level security with SSL encryption and fraud protection.'
        },
        {
          id: 4,
          icon: 'support_agent',
          title: '24/7 Support',
          description: 'Dedicated technical support team available around the clock.'
        }
      ],
      stats: [
        {
          id: 1,
          number: '500+',
          label: 'Active Operators'
        },
        {
          id: 2,
          number: '$2.5B+',
          label: 'Processed Volume'
        },
        {
          id: 3,
          number: '99.9%',
          label: 'Uptime Guarantee'
        },
        {
          id: 4,
          number: '150+',
          label: 'Countries Served'
        }
      ]
    }
  }
}
</script>