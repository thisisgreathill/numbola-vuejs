<template>
  <Layout>
    <div class="px-10 lg:px-20 xl:px-40 py-12 bg-[#111827]">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-white text-5xl font-black mb-6">Complete Gaming Platform Suite</h1>
          <p class="text-gray-300 text-xl max-w-3xl mx-auto">
            A comprehensive white-label solution supporting lottery, casino, sports betting, and all gaming verticals
          </p>
        </div>

        <!-- Platform Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 class="text-white text-3xl font-bold mb-6">Multi-Vertical Gaming Infrastructure</h2>
            <p class="text-gray-300 mb-6">
              Numbola provides a unified platform supporting multiple gaming verticals including lottery systems, 
              casino games, sports betting, and specialized gaming services. Our white-label solution eliminates 
              the technical complexity while giving you complete control over your brand and business operations 
              across all gaming segments.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-[#53d22d]">check_circle</span>
                <span class="text-gray-300">Multi-vertical gaming support (lottery, casino, sports)</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-[#53d22d]">check_circle</span>
                <span class="text-gray-300">Unified user management system</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-[#53d22d]">check_circle</span>
                <span class="text-gray-300">Cross-platform wallet integration</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-[#53d22d]">check_circle</span>
                <span class="text-gray-300">Comprehensive compliance and security tools</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <span class="material-symbols-outlined text-[#53d22d] text-6xl mb-4 block">dashboard</span>
            <h3 class="text-white text-2xl font-bold mb-4">Multi-Gaming Dashboard</h3>
            <p class="text-gray-400">
              Comprehensive admin panel to manage all your gaming operations from a single interface. 
              Monitor lottery draws, casino performance, sports betting, manage users across all verticals, 
              and track revenue in real-time across all gaming services.
            </p>
          </div>
        </div>

        <!-- Technical Specifications -->
        <div class="bg-gray-900 p-8 rounded-2xl mb-16">
          <h2 class="text-white text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <span class="material-symbols-outlined text-[#53d22d] text-5xl mb-4 block">cloud</span>
              <h3 class="text-white text-xl font-bold mb-2">Cloud Infrastructure</h3>
              <p class="text-gray-400">Built on enterprise-grade cloud infrastructure with 99.9% uptime guarantee</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-[#53d22d] text-5xl mb-4 block">api</span>
              <h3 class="text-white text-xl font-bold mb-2">RESTful APIs</h3>
              <p class="text-gray-400">Comprehensive API suite for custom integrations and third-party services</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-[#53d22d] text-5xl mb-4 block">security</span>
              <h3 class="text-white text-xl font-bold mb-2">Enterprise Security</h3>
              <p class="text-gray-400">Bank-level security with SSL encryption, fraud detection, and compliance tools</p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center bg-gradient-to-r from-[#53d22d]/20 to-green-600/20 p-12 rounded-2xl">
          <h2 class="text-white text-3xl font-bold mb-4">Ready to See the Platform in Action?</h2>
          <p class="text-gray-300 mb-6">Schedule a demo to explore all features and capabilities</p>
          <router-link 
            to="/demo"
            class="inline-block px-8 py-4 bg-[#53d22d] text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
          >
            Schedule Demo
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
  name: 'Platform',
  components: { Layout },
  mounted() {
    const { setSEO } = useSEO()
    setSEO({
      title: 'White-Label Gaming Platform - Multi-Vertical Solution | Numbola',
      description: 'Unified platform supporting multiple gaming verticals including lottery systems, casino games, sports betting, and specialized gaming services.',
      keywords: 'white-label gaming platform, multi-vertical gaming, gaming infrastructure, iGaming technology, casino platform',
      ogTitle: 'Numbola Platform - Complete Gaming Infrastructure',
      ogDescription: 'Multi-vertical gaming infrastructure supporting lottery, casino, sports betting with unified management.',
      ogUrl: 'https://numbola.com/platform'
    })
  }
}
</script>