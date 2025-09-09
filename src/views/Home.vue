<template>
  <Layout>
    <div class="relative flex flex-col bg-[#111827] dark group/design-root overflow-x-hidden">
      <div class="px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-12">
        <div class="layout-content-container flex flex-col max-w-7xl flex-1">
          <!-- Hero Section -->
          <div class="@container">
            <div class="@[480px]:p-4">
              <div class="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-2xl items-center justify-center p-8 text-center" :style="heroBackgroundStyle">
                <div class="flex flex-col gap-4 max-w-3xl">
                  <h1 class="text-white text-5xl font-black leading-tight tracking-tight @[480px]:text-6xl">
                    Complete iGaming Platform for All Gaming Services
                  </h1>
                  <h2 class="text-gray-300 text-lg font-normal leading-normal @[480px]:text-xl">
                    Launch lottery, casino, sports betting, and more. Complete white-label solution with full management dashboard for every gaming vertical.
                  </h2>
                </div>
                <div class="flex flex-col sm:flex-row gap-4">
                  <router-link 
                    to="/demo"
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 @[480px]:h-14 @[480px]:px-10 bg-[#53d22d] text-gray-900 text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg hover:bg-green-400 transition-transform transform hover:scale-105"
                  >
                    <span class="truncate">Request a Demo</span>
                  </router-link>
                  <router-link 
                    to="/pricing"
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 @[480px]:h-14 @[480px]:px-10 bg-transparent border-2 border-white text-white text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    <span class="truncate">View Pricing</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gaming Services Overview -->
          <div class="py-16 px-4">
            <div class="text-center mb-12">
              <h2 class="text-white text-4xl font-bold leading-tight tracking-tight mb-4">Our Gaming Services</h2>
              <p class="text-gray-400 text-lg max-w-3xl mx-auto">Complete range of gaming solutions for every market segment - Lottery, Casino, Sports Betting and more</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                v-for="service in gamingServices" 
                :key="service.id"
                class="flex flex-col items-center text-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-6 hover:bg-gray-800/50 transition-colors"
              >
                <span class="material-symbols-outlined text-[#53d22d] text-4xl">{{ service.icon }}</span>
                <div>
                  <h3 class="text-white text-xl font-bold leading-tight mb-2">{{ service.title }}</h3>
                  <p class="text-gray-400">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Key Features Preview -->
          <div class="py-16 px-4">
            <div class="text-center mb-12">
              <h2 class="text-white text-4xl font-bold leading-tight tracking-tight mb-4">Why Choose Numbola?</h2>
              <p class="text-gray-400 text-lg max-w-3xl mx-auto">Just like Shopify for e-commerce, Numbola provides everything you need to run a successful online gaming business.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                v-for="feature in platformFeatures" 
                :key="feature.id"
                class="flex flex-col items-center text-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-6 hover:bg-gray-800/50 transition-colors"
              >
                <span class="material-symbols-outlined text-[#53d22d] text-4xl">{{ feature.icon }}</span>
                <div>
                  <h3 class="text-white text-xl font-bold leading-tight mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-400">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            <div class="text-center mt-8">
              <router-link 
                to="/features"
                class="inline-flex items-center px-6 py-3 bg-[#53d22d] text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
              >
                View All Features
                <span class="material-symbols-outlined ml-2">arrow_forward</span>
              </router-link>
            </div>
          </div>
          
          <!-- Stats Section -->
          <div class="py-16 px-4 bg-gray-900/50 rounded-2xl">
            <div class="text-center mb-12">
              <h2 class="text-white text-4xl font-bold leading-tight tracking-tight mb-4">Trusted by Industry Leaders</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div 
                v-for="stat in stats" 
                :key="stat.id"
                class="text-center"
              >
                <div class="text-[#53d22d] text-4xl font-bold mb-2">{{ stat.number }}</div>
                <div class="text-gray-400 text-lg">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          
          <!-- CTA Section -->
          <div class="py-16 px-4 bg-gradient-to-r from-[#53d22d]/20 to-green-600/20 rounded-2xl mt-16">
            <div class="max-w-4xl mx-auto text-center">
              <h2 class="text-white text-4xl font-bold leading-tight tracking-tight mb-4">Ready to Start Your Gaming Business?</h2>
              <p class="text-gray-300 text-lg mb-8">Join hundreds of successful operators who chose Numbola to power their gaming platforms.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link 
                  to="/demo"
                  class="px-8 py-4 bg-[#53d22d] text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
                >
                  Start Free Demo
                </router-link>
                <router-link 
                  to="/contact"
                  class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
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
import { useSEO } from '../composables/useSEO.js'

export default {
  name: 'Home',
  components: {
    Layout
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