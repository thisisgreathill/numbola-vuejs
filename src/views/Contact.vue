<template>
  <Layout>
    <div class="px-10 lg:px-20 xl:px-40 py-12 bg-[#111827]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-white text-5xl font-black mb-6">Contact Us</h1>
          <p class="text-gray-300 text-xl">Get in touch with our team of experts</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-gray-900 p-8 rounded-2xl">
            <h2 class="text-white text-2xl font-bold mb-6">Send us a message</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-white font-medium mb-2">Name *</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                >
              </div>
              <div>
                <label class="block text-white font-medium mb-2">Email *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                >
              </div>
              <div>
                <label class="block text-white font-medium mb-2">Company</label>
                <input 
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                >
              </div>
              <div>
                <label class="block text-white font-medium mb-2">Message *</label>
                <textarea 
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                class="w-full py-3 px-6 bg-[#53d22d] text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="bg-gray-900 p-6 rounded-xl">
              <span class="material-symbols-outlined text-[#53d22d] text-3xl mb-4 block">email</span>
              <h3 class="text-white text-xl font-bold mb-2">Email Us</h3>
              <p class="text-gray-400">Get in touch for sales inquiries and support</p>
              <a href="mailto:lily@example.com" class="text-[#53d22d] hover:text-green-400 transition-colors">
                lily@example.com
              </a>
            </div>

            <div class="bg-gray-900 p-6 rounded-xl">
              <span class="material-symbols-outlined text-[#53d22d] text-3xl mb-4 block">support_agent</span>
              <h3 class="text-white text-xl font-bold mb-2">24/7 Support</h3>
              <p class="text-gray-400">Round-the-clock technical support for all customers</p>
              <a href="mailto:lily@example.com" class="text-[#53d22d] hover:text-green-400 transition-colors">
                lily@example.com
              </a>
            </div>

            <div class="bg-gray-900 p-6 rounded-xl">
              <span class="material-symbols-outlined text-[#53d22d] text-3xl mb-4 block">schedule</span>
              <h3 class="text-white text-xl font-bold mb-2">Response Time</h3>
              <p class="text-gray-400">We typically respond to all inquiries within 24 hours</p>
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
  name: 'Contact',
  components: { Layout },
  mounted() {
    const { setSEO } = useSEO()
    setSEO({
      title: 'Contact Numbola - Get Started with Your Gaming Platform',
      description: 'Contact Numbola for demos, sales inquiries, and support. Get expert help launching your lottery, casino, or sports betting platform.',
      keywords: 'contact numbola, iGaming support, gaming platform demo, sales inquiry, technical support',
      ogTitle: 'Contact Numbola - Start Your Gaming Business',
      ogDescription: 'Get in touch with our gaming experts for demos and support.',
      ogUrl: 'https://numbola.com/contact'
    })
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form - ${this.form.company || 'New Inquiry'}`);
      const body = encodeURIComponent(
        `Name: ${this.form.name}\n` +
        `Email: ${this.form.email}\n` +
        `Company: ${this.form.company || 'Not provided'}\n\n` +
        `Message:\n${this.form.message}`
      );
      
      // Replace with your Gmail address
      const gmailAddress = 'lily@example.com';
      const mailtoLink = `mailto:${gmailAddress}?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show confirmation message
      alert('Opening your email client to send the message...');
      
      // Clear form after submission
      this.form = { name: '', email: '', company: '', message: '' };
    }
  }
}
</script>