<template>
  <Layout>
    <div class="px-10 lg:px-20 xl:px-40 py-12 bg-[#111827]">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-white text-5xl font-black mb-6">Simple, Transparent Pricing</h1>
          <p class="text-gray-300 text-xl">Choose the plan that fits your business size and goals for all gaming services</p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="plan in pricingPlans" 
            :key="plan.id"
            class="rounded-xl border bg-gray-900 p-8 relative hover:bg-gray-800/50 transition-colors"
            :class="plan.popular ? 'border-[#53d22d] scale-105' : 'border-gray-800'"
          >
            <div v-if="plan.popular" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-[#53d22d] text-gray-900 px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
            </div>
            <div class="text-center mb-6">
              <h3 class="text-white text-2xl font-bold mb-2">{{ plan.name }}</h3>
              <div class="text-gray-400 mb-4">{{ plan.description }}</div>
              <div class="text-white">
                <span class="text-4xl font-bold">{{ plan.price }}</span>
                <span class="text-gray-400">{{ plan.period }}</span>
              </div>
            </div>
            <ul class="space-y-3 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2">
                <span class="material-symbols-outlined text-[#53d22d] text-xl mt-0.5">check_circle</span>
                <span class="text-gray-300">{{ feature }}</span>
              </li>
            </ul>
            <router-link 
              to="/contact"
              class="w-full block py-3 px-6 rounded-lg font-bold transition-colors text-center"
              :class="plan.popular ? 'bg-[#53d22d] text-gray-900 hover:bg-green-400' : 'bg-gray-800 text-white hover:bg-gray-700'"
            >
              Get Started
            </router-link>
          </div>
        </div>

        <!-- Feature Comparison Table -->
        <div class="bg-gray-900 p-8 rounded-2xl mb-16">
          <h2 class="text-white text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-gray-700">
                  <th class="text-white font-bold py-4 px-4">Features</th>
                  <th class="text-white font-bold py-4 px-4 text-center">Starter</th>
                  <th class="text-white font-bold py-4 px-4 text-center bg-[#53d22d]/10 rounded-t-lg">Professional</th>
                  <th class="text-white font-bold py-4 px-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="feature in comparisonFeatures" :key="feature.name" class="border-b border-gray-800">
                  <td class="text-gray-300 py-4 px-4 font-medium">{{ feature.name }}</td>
                  <td class="py-4 px-4 text-center">
                    <span v-if="feature.starter === true" class="material-symbols-outlined text-[#53d22d]">check_circle</span>
                    <span v-else-if="feature.starter === false" class="material-symbols-outlined text-gray-600">cancel</span>
                    <span v-else class="text-gray-400">{{ feature.starter }}</span>
                  </td>
                  <td class="py-4 px-4 text-center bg-[#53d22d]/10">
                    <span v-if="feature.professional === true" class="material-symbols-outlined text-[#53d22d]">check_circle</span>
                    <span v-else-if="feature.professional === false" class="material-symbols-outlined text-gray-600">cancel</span>
                    <span v-else class="text-gray-400">{{ feature.professional }}</span>
                  </td>
                  <td class="py-4 px-4 text-center">
                    <span v-if="feature.enterprise === true" class="material-symbols-outlined text-[#53d22d]">check_circle</span>
                    <span v-else-if="feature.enterprise === false" class="material-symbols-outlined text-gray-600">cancel</span>
                    <span v-else class="text-gray-400">{{ feature.enterprise }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="bg-gray-900 p-8 rounded-2xl">
          <h2 class="text-white text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="faq in faqs" :key="faq.id" class="border-b border-gray-700 pb-4">
              <h3 class="text-white font-bold mb-2">{{ faq.question }}</h3>
              <p class="text-gray-400">{{ faq.answer }}</p>
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
  name: 'Pricing',
  components: { Layout },
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