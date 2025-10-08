<template>
  <Layout>
    <div class="relative px-10 lg:px-20 xl:px-40 py-12 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]">
      <ThreeBackground />
      <div class="relative z-10 max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20 animate-float">
          <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-6">
            <span class="text-[#53d22d] text-sm font-bold tracking-wide">COMPLETE GAMING SERVICES</span>
          </div>
          <h1 class="text-white text-6xl md:text-7xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">Complete Gaming Services</h1>
          <p class="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            From lottery and raffle sites to casino games and sports betting - we provide everything you need for a successful online gaming platform
          </p>
        </div>

        <!-- Lottery Features -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-4">
              <span class="text-[#53d22d] text-sm font-bold tracking-wide">LOTTERY PLATFORM</span>
            </div>
            <h2 class="text-white text-4xl font-black mb-4">Lottery & Raffle Platform</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingCard
              v-for="feature in lotteryFeatures"
              :key="feature.id"
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            />
          </div>
        </div>

        <!-- Sports Betting Features -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-4">
              <span class="text-[#53d22d] text-sm font-bold tracking-wide">SPORTS BETTING</span>
            </div>
            <h2 class="text-white text-4xl font-black mb-4">Sports Betting Platform</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingCard
              v-for="feature in sportsBettingFeatures"
              :key="feature.id"
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            />
          </div>
        </div>

        <!-- Casino Gaming Features -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-4">
              <span class="text-[#53d22d] text-sm font-bold tracking-wide">CASINO GAMING</span>
            </div>
            <h2 class="text-white text-4xl font-black mb-4">Casino Gaming Platform</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingCard
              v-for="feature in casinoFeatures"
              :key="feature.id"
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            />
          </div>
        </div>

        <!-- Additional Gaming Services -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-4">
              <span class="text-[#53d22d] text-sm font-bold tracking-wide">SPECIALTY SERVICES</span>
            </div>
            <h2 class="text-white text-4xl font-black mb-4">Specialty Gaming Services</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FloatingCard
              v-for="service in additionalServices"
              :key="service.id"
              :icon="service.icon"
              :title="service.title"
              :description="service.description"
            />
          </div>
        </div>

        <!-- CTA -->
        <div class="relative text-center bg-gradient-to-br from-[#53d22d]/20 via-green-600/20 to-[#53d22d]/20 p-16 rounded-3xl overflow-hidden border border-[#53d22d]/30 shadow-2xl">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1M2QyMmQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMC41NTIuNDQ4LTEgMS0xaDEyYy41NTIgMCAxIC40NDggMSAxdjEyYzAgLjU1Mi0uNDQ4IDEtMSAxSDM3Yy0uNTUyIDAtMS0uNDQ4LTEtMXYtMTJ6TTAgMTRjMC0uNTUyLjQ0OC0xIDEtMWgxMmMuNTUyIDAgMSAuNDQ4IDEgMXYxMmMwIC41NTItLjQ0OCAxLTEgMUgxYy0uNTUyIDAtMS0uNDQ4LTEtMXYtMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div class="relative z-10">
            <h2 class="text-white text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
            <router-link
              to="/demo"
              class="inline-block px-10 py-5 bg-gradient-to-r from-[#53d22d] to-green-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-[#53d22d]/50 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Request Demo
            </router-link>
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
  name: 'Features',
  components: {
    Layout,
    ThreeBackground,
    FloatingCard
  },
  mounted() {
    const { setSEO } = useSEO()
    setSEO({
      title: 'Gaming Features - Lottery, Casino, Sports Betting | Numbola',
      description: 'Discover Numbola\'s comprehensive gaming features: automated lottery systems, premium casino games, live sports betting, and specialty gaming services.',
      keywords: 'lottery features, casino games, sports betting features, live casino, virtual sports, bingo games, iGaming features',
      ogTitle: 'Complete Gaming Features - Numbola Platform',
      ogDescription: 'Discover comprehensive gaming features including lottery, casino, sports betting, and specialty games.',
      ogUrl: 'https://numbola.com/features'
    })
  },
  data() {
    return {
      lotteryFeatures: [
        {
          id: 1,
          icon: 'confirmation_number',
          title: 'Automated Draw System',
          description: 'Transparent and fair lottery system with automated results announcement and winner notifications for complete trust.'
        },
        {
          id: 2,
          icon: 'card_giftcard',
          title: 'Instant Win Games',
          description: 'Scratch cards, instant lottery games, and quick win opportunities providing continuous entertainment and engagement.'
        },
        {
          id: 3,
          icon: 'emoji_events',
          title: 'Prize Pool Management',
          description: 'Flexible prize structures, massive jackpots, and automated payout systems for profitable business operations.'
        },
        {
          id: 4,
          icon: 'receipt',
          title: 'Secure Ticket System',
          description: 'Secure ticket generation, validation system, and anti-fraud technology providing complete protection and authenticity.'
        }
      ],
      sportsBettingFeatures: [
        {
          id: 1,
          icon: 'sports_soccer',
          title: 'Comprehensive Sports Coverage',
          description: 'Professional betting services across football, basketball, tennis, volleyball, and 40+ sports with extensive options.'
        },
        {
          id: 2,
          icon: 'live_tv',
          title: 'Live Betting Engine',
          description: 'Real-time odds updates, live match streaming, and real-time betting experience with maximum excitement.'
        },
        {
          id: 3,
          icon: 'trending_up',
          title: 'Advanced Statistics',
          description: 'Detailed match analysis, team statistics, and expert betting recommendations for intelligent wagering decisions.'
        },
        {
          id: 4,
          icon: 'attach_money',
          title: 'Cash-Out Features',
          description: 'Partial and full cash-out options for risk management and guaranteed profit opportunities.'
        }
      ],
      casinoFeatures: [
        {
          id: 1,
          icon: 'casino',
          title: 'Premium Slot Collection',
          description: '3000+ slot games from worldwide providers with progressive jackpots and mega win opportunities.'
        },
        {
          id: 2,
          icon: 'table_restaurant',
          title: 'Classic Table Games',
          description: 'Blackjack, roulette, poker, baccarat and more. Authentic casino experience with professional dealers.'
        },
        {
          id: 3,
          icon: 'videocam',
          title: 'Live Casino Experience',
          description: 'HD quality live streaming, professional croupiers, and real-time gaming experience.'
        },
        {
          id: 4,
          icon: 'emoji_events',
          title: 'Mega Jackpot System',
          description: 'Network-wide progressive jackpots, life-changing prize pools, and daily win opportunities.'
        }
      ],
      additionalServices: [
        {
          id: 1,
          icon: 'games',
          title: 'Virtual Sports Betting',
          description: 'Computer-generated sports events providing 24/7 non-stop betting experience and continuous wins.'
        },
        {
          id: 2,
          icon: 'savings',
          title: 'Live Bingo Halls',
          description: 'Traditional and modern bingo varieties with community features and social gaming experience.'
        },
        {
          id: 3,
          icon: 'psychology',
          title: 'Skill-Based Games',
          description: 'Strategy-required games, tournaments, and special platforms where skill leads to profit.'
        },
        {
          id: 4,
          icon: 'card_travel',
          title: 'Mini Game Collection',
          description: 'Quick-play mini games, daily jackpots, and social competition platforms for instant entertainment.'
        }
      ]
    }
  }
}
</script>