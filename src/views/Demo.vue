<template>
  <Layout>
    <div class="px-10 lg:px-20 xl:px-40 py-12 bg-[#111827]">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-white text-5xl font-black mb-6">Request a Demo</h1>
        <p class="text-gray-300 text-xl mb-12">See Numbola in action and discover how easy it is to launch your gaming platform</p>

        <div class="bg-gray-900 p-8 rounded-2xl">
          <form @submit.prevent="submitDemo" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input v-model="form.name" type="text" placeholder="Full Name" required class="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none">
            <input v-model="form.email" type="email" placeholder="Email" required class="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none">
            <input v-model="form.company" type="text" placeholder="Company" class="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none">
            <input v-model="form.phone" type="tel" placeholder="Phone" class="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none">
            <textarea v-model="form.message" placeholder="Tell us about your project" rows="3" class="md:col-span-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"></textarea>
            <button type="submit" class="md:col-span-2 py-3 px-6 bg-[#53d22d] text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors">
              Schedule Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'

export default {
  name: 'Demo',
  components: { Layout },
  data() {
    return {
      form: { name: '', email: '', company: '', phone: '', message: '' }
    }
  },
  methods: {
    submitDemo() {
      alert('Demo request submitted! We will contact you soon.')
      this.form = { name: '', email: '', company: '', phone: '', message: '' }
    }
  }
}
</script>