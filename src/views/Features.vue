<template>
  <Layout>
    <div class="px-10 lg:px-20 xl:px-40 py-12 bg-[#111827]">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-white text-5xl font-black mb-6">Complete Gaming Services</h1>
          <p class="text-gray-300 text-xl max-w-3xl mx-auto">
            From lottery and raffle sites to casino games and sports betting - we provide everything you need for a successful online gaming platform
          </p>
        </div>

        <!-- Lottery Features -->
        <div class="mb-16">
          <h2 class="text-white text-3xl font-bold mb-8 text-center">Lottery & Raffle Platform</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="feature in lotteryFeatures" 
              :key="feature.id"
              class="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:bg-gray-800/50 transition-colors"
            >
              <span class="material-symbols-outlined text-[#53d22d] text-3xl mb-4 block">{{ feature.icon }}</span>
              <h3 class="text-white text-xl font-bold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-400">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Sports Betting Features -->
        <div class="mb-16">
          <h2 class="text-white text-3xl font-bold mb-8 text-center">Sports Betting Platform</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="feature in sportsBettingFeatures" 
              :key="feature.id"
              class="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:bg-gray-800/50 transition-colors"
            >
              <span class="material-symbols-outlined text-[#53d22d] text-3xl mb-4 block">{{ feature.icon }}</span>
              <h3 class="text-white text-xl font-bold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-400">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Casino Gaming Features -->
        <div class="mb-16">
          <h2 class="text-white text-3xl font-bold mb-8 text-center">Casino Gaming Platform</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="feature in casinoFeatures" 
              :key="feature.id"
              class="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:bg-gray-800/50 transition-colors"
            >
              <span class="material-symbols-outlined text-[#53d22d] text-3xl mb-4 block">{{ feature.icon }}</span>
              <h3 class="text-white text-xl font-bold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-400">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Additional Gaming Services -->
        <div class="mb-16">
          <h2 class="text-white text-3xl font-bold mb-8 text-center">Specialty Gaming Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="service in additionalServices" 
              :key="service.id"
              class="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:bg-gray-800/50 transition-colors text-center"
            >
              <span class="material-symbols-outlined text-[#53d22d] text-4xl mb-4 block">{{ service.icon }}</span>
              <h3 class="text-white text-xl font-bold mb-2">{{ service.title }}</h3>
              <p class="text-gray-400">{{ service.description }}</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center bg-gradient-to-r from-[#53d22d]/20 to-green-600/20 p-12 rounded-2xl">
          <h2 class="text-white text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <router-link 
            to="/demo"
            class="inline-block px-8 py-4 bg-[#53d22d] text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
          >
            Request Demo
          </router-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
import { useSEO } from '../composables/useSEO.js'

export default {
  name: 'Features',
  components: { Layout },
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