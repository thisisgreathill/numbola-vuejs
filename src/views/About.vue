<template>
  <Layout>
    <div class="px-10 lg:px-20 xl:px-40 py-12 bg-[#111827]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-white text-5xl font-black mb-6">About Numbola</h1>
          <p class="text-gray-300 text-xl">Empowering the next generation of gaming entrepreneurs - From Lottery to Casino, Sports Betting to Specialty Games</p>
        </div>

        <div class="space-y-12">
          <div class="bg-gray-900 p-8 rounded-2xl">
            <h2 class="text-white text-3xl font-bold mb-6">Our Story</h2>
            <p class="text-gray-300 text-lg leading-relaxed">
              Numbola was founded with a simple mission: to democratize the iGaming industry. 
              Just like Shopify revolutionized e-commerce by providing ready-to-use store infrastructure, 
              Numbola does the same for the gaming industry. We believe that entrepreneurs should focus 
              on growing their business, not building complex technical infrastructure. From lottery sites 
              to casino games, sports betting to specialty games, we provide all gaming services under one platform.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-900 p-6 rounded-xl">
              <span class="material-symbols-outlined text-[#53d22d] text-4xl mb-4 block">flag</span>
              <h3 class="text-white text-xl font-bold mb-4">Our Mission</h3>
              <p class="text-gray-400">To democratize the iGaming industry by making it easy for anyone to launch and operate a professional online gaming platform. Lottery, casino, sports betting - all under one roof.</p>
            </div>
            <div class="bg-gray-900 p-6 rounded-xl">
              <span class="material-symbols-outlined text-[#53d22d] text-4xl mb-4 block">visibility</span>
              <h3 class="text-white text-xl font-bold mb-4">Our Vision</h3>
              <p class="text-gray-400">To become the go-to platform for gaming entrepreneurs worldwide, powering the next generation of online gaming businesses.</p>
            </div>
          </div>

          <div class="bg-gray-900 p-8 rounded-2xl">
            <h2 class="text-white text-3xl font-bold mb-6">Why We're Different</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-white text-xl font-bold mb-3">Complete Solution</h3>
                <p class="text-gray-400">We provide everything you need - from technical infrastructure to compliance tools and ongoing support. Lottery, casino, sports betting, all included.</p>
              </div>
              <div>
                <h3 class="text-white text-xl font-bold mb-3">Industry Expertise</h3>
                <p class="text-gray-400">Our team has decades of combined experience in the iGaming industry and enterprise software development.</p>
              </div>
              <div>
                <h3 class="text-white text-xl font-bold mb-3">Proven Track Record</h3>
                <p class="text-gray-400">Over 500 successful operators worldwide trust Numbola to power their gaming platforms.</p>
              </div>
              <div>
                <h3 class="text-white text-xl font-bold mb-3">Continuous Innovation</h3>
                <p class="text-gray-400">We constantly evolve our platform based on industry trends and customer feedback.</p>
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
  name: 'About',
  components: { Layout },
  mounted() {
    const { setSEO } = useSEO()
    setSEO({
      title: 'About Numbola - iGaming Platform Company | Our Story',
      description: 'Learn about Numbola\'s mission to democratize the iGaming industry. We empower entrepreneurs with complete gaming solutions from lottery to casino and sports betting.',
      keywords: 'about numbola, iGaming company, gaming platform company, white-label gaming, numbola story',
      ogTitle: 'About Numbola - Empowering Gaming Entrepreneurs',
      ogDescription: 'Democratizing the iGaming industry with complete platform solutions for gaming entrepreneurs worldwide.',
      ogUrl: 'https://numbola.com/about'
    })
  }
}
</script>