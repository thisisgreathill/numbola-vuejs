<template>
  <Layout>
    <div class="relative px-10 lg:px-20 xl:px-40 py-12 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]">
      <ThreeBackground />
      <div class="relative z-10 max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20 animate-float">
          <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-6">
            <span class="text-[#53d22d] text-sm font-bold tracking-wide">PRICING PLANS</span>
          </div>
          <h1 class="text-white text-6xl md:text-7xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">Simple, Transparent Pricing</h1>
          <p class="text-gray-300 text-xl max-w-3xl mx-auto">Choose the plan that fits your business size and goals for all gaming services</p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          <PricingCard
            v-for="plan in pricingPlans"
            :key="plan.id"
            :name="plan.name"
            :price="plan.price"
            :period="plan.period"
            :description="plan.description"
            :features="plan.features"
            :popular="plan.popular"
          />
        </div>

        <!-- Feature Comparison Table -->
        <div class="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm p-10 rounded-3xl mb-24 border border-gray-800/50 shadow-2xl overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#53d22d]/5 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="text-center mb-12">
              <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-4">
                <span class="text-[#53d22d] text-sm font-bold tracking-wide">COMPARISON</span>
              </div>
              <h2 class="text-white text-4xl font-black mb-2">Feature Comparison</h2>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead>
                  <tr class="border-b border-gray-700/50">
                    <th class="text-white font-bold py-5 px-6 text-lg">Features</th>
                    <th class="text-white font-bold py-5 px-6 text-center text-lg">Starter</th>
                    <th class="text-white font-bold py-5 px-6 text-center text-lg bg-[#53d22d]/10 rounded-t-lg">Professional</th>
                    <th class="text-white font-bold py-5 px-6 text-center text-lg">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="feature in comparisonFeatures" :key="feature.name" class="border-b border-gray-800/30 hover:bg-gray-800/20 transition-colors">
                    <td class="text-gray-300 py-5 px-6 font-medium">{{ feature.name }}</td>
                    <td class="py-5 px-6 text-center">
                      <span v-if="feature.starter === true" class="material-symbols-outlined text-[#53d22d] text-2xl">check_circle</span>
                      <span v-else-if="feature.starter === false" class="material-symbols-outlined text-gray-600 text-2xl">cancel</span>
                      <span v-else class="text-gray-400">{{ feature.starter }}</span>
                    </td>
                    <td class="py-5 px-6 text-center bg-[#53d22d]/10">
                      <span v-if="feature.professional === true" class="material-symbols-outlined text-[#53d22d] text-2xl">check_circle</span>
                      <span v-else-if="feature.professional === false" class="material-symbols-outlined text-gray-600 text-2xl">cancel</span>
                      <span v-else class="text-gray-400">{{ feature.professional }}</span>
                    </td>
                    <td class="py-5 px-6 text-center">
                      <span v-if="feature.enterprise === true" class="material-symbols-outlined text-[#53d22d] text-2xl">check_circle</span>
                      <span v-else-if="feature.enterprise === false" class="material-symbols-outlined text-gray-600 text-2xl">cancel</span>
                      <span v-else class="text-gray-400">{{ feature.enterprise }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-800/50 shadow-2xl overflow-hidden">
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-green-600/5 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="text-center mb-12">
              <div class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#53d22d]/10 to-green-600/10 border border-[#53d22d]/20 mb-4">
                <span class="text-[#53d22d] text-sm font-bold tracking-wide">FAQ</span>
              </div>
              <h2 class="text-white text-4xl font-black mb-2">Frequently Asked Questions</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="faq in faqs" :key="faq.id" class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-[#53d22d]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#53d22d]/10">
                <h3 class="text-white font-bold mb-3 text-lg">{{ faq.question }}</h3>
                <p class="text-gray-400 leading-relaxed">{{ faq.answer }}</p>
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
import PricingCard from '../components/PricingCard.vue'
import { useSEO } from '../composables/useSEO.js'

export default {
  name: 'Pricing',
  components: {
    Layout,
    ThreeBackground,
    PricingCard
  },
  mounted() {
    const { setSEO } = useSEO()
    setSEO({
      title: 'Pricing Plans - iGaming Platform | Numbola',
      description: 'Choose from Starter ($2,999/month), Professional ($4,999/month), or Enterprise plans. All plans include lottery, casino, and sports betting features.',
      keywords: 'iGaming pricing, white-label pricing, casino platform cost, lottery software pricing, sports betting platform price',
      ogTitle: 'Numbola Pricing - Choose Your iGaming Plan',
      ogDescription: 'Transparent pricing for complete iGaming platform. Starting at $2,999/month with all gaming features included.',
      ogUrl: 'https://numbola.com/pricing'
    })
  },
  data() {
    return {
      pricingPlans: [
        {
          id: 1,
          name: 'Starter',
          price: '$2,999',
          period: '/month',
          description: 'Perfect for new operators',
          features: [
            'Up to 1,000 active users',
            'Basic lottery and raffle games',
            'Essential casino games collection',
            'Standard support service',
            'Basic analytics and reporting',
            'Mobile responsive interface'
          ],
          popular: false
        },
        {
          id: 2,
          name: 'Professional',
          price: '$4,999',
          period: '/month',
          description: 'Most popular choice',
          features: [
            'Up to 10,000 active users',
            'Complete lottery, casino & sports betting',
            'Live casino and sports betting',
            'Priority support service',
            'Advanced analytics and reporting',
            'Custom white-label branding',
            'API access and integrations'
          ],
          popular: true
        },
        {
          id: 3,
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          description: 'For large-scale operations',
          features: [
            'Unlimited user capacity',
            'All gaming services included',
            'Dedicated customer representative',
            'Custom integrations and development',
            'Multi-language and currency support',
            'Advanced compliance tools',
            'Complete gaming suite (lottery, casino, sports)'
          ],
          popular: false
        }
      ],
      faqs: [
        {
          id: 1,
          question: 'How quickly can I launch my platform?',
          answer: 'Most platforms are ready within 3-5 business days after account setup and initial configuration.'
        },
        {
          id: 2,
          question: 'Are all gaming services included?',
          answer: 'Yes! Lottery, casino, sports betting, and specialty games are all available on our platform.'
        },
        {
          id: 3,
          question: 'Can I customize the platform branding?',
          answer: 'Absolutely! All plans include white-label capabilities to match your brand identity completely.'
        },
        {
          id: 4,
          question: 'Do you provide technical support?',
          answer: 'Yes, we offer 24/7 technical support for all plans. Professional and Enterprise customers receive priority support.'
        }
      ],
      comparisonFeatures: [
        {
          name: 'Active Users',
          starter: '1,000',
          professional: '10,000',
          enterprise: 'Unlimited'
        },
        {
          name: 'Lottery & Raffle Games',
          starter: true,
          professional: true,
          enterprise: true
        },
        {
          name: 'Casino Games Collection',
          starter: 'Basic',
          professional: 'Premium',
          enterprise: 'Complete'
        },
        {
          name: 'Sports Betting',
          starter: false,
          professional: true,
          enterprise: true
        },
        {
          name: 'Live Casino',
          starter: false,
          professional: true,
          enterprise: true
        },
        {
          name: 'Live Sports Betting',
          starter: false,
          professional: true,
          enterprise: true
        },
        {
          name: 'Virtual Sports',
          starter: false,
          professional: true,
          enterprise: true
        },
        {
          name: 'Bingo Games',
          starter: false,
          professional: true,
          enterprise: true
        },
        {
          name: 'Mobile App',
          starter: true,
          professional: true,
          enterprise: true
        },
        {
          name: 'White-Label Branding',
          starter: 'Basic',
          professional: 'Full',
          enterprise: 'Complete'
        },
        {
          name: 'API Access',
          starter: false,
          professional: true,
          enterprise: true
        },
        {
          name: 'Custom Integrations',
          starter: false,
          professional: 'Limited',
          enterprise: 'Unlimited'
        },
        {
          name: 'Multi-Language Support',
          starter: 'English',
          professional: '5 Languages',
          enterprise: 'Unlimited'
        },
        {
          name: 'Payment Methods',
          starter: 'Basic',
          professional: 'Advanced',
          enterprise: 'All Available'
        },
        {
          name: 'Support Level',
          starter: 'Standard',
          professional: 'Priority',
          enterprise: 'Dedicated'
        },
        {
          name: 'Analytics & Reporting',
          starter: 'Basic',
          professional: 'Advanced',
          enterprise: 'Custom'
        },
        {
          name: 'Setup Time',
          starter: '3-5 days',
          professional: '3-5 days',
          enterprise: '1-2 weeks'
        }
      ]
    }
  }
}
</script>
