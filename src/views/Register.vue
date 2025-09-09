<template>
  <Layout>
    <div class="px-10 lg:px-20 xl:px-40 py-12 bg-[#111827]">
      <div class="max-w-md mx-auto">
        <div class="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <div class="text-center mb-8">
            <h1 class="text-white text-3xl font-bold mb-2">Create Account</h1>
            <p class="text-gray-400">Start your gaming business today</p>
          </div>

          <form @submit.prevent="handleRegister" class="space-y-6">
            <div>
              <label class="block text-white font-medium mb-2">Full Name</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                placeholder="John Doe"
              >
            </div>

            <div>
              <label class="block text-white font-medium mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                placeholder="your@email.com"
              >
            </div>

            <div>
              <label class="block text-white font-medium mb-2">Company</label>
              <input 
                v-model="form.company"
                type="text"
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                placeholder="Your Company Name"
              >
            </div>

            <div>
              <label class="block text-white font-medium mb-2">Password</label>
              <input 
                v-model="form.password"
                type="password" 
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                placeholder="••••••••"
              >
            </div>

            <div class="flex items-start">
              <input type="checkbox" required class="w-4 h-4 text-[#53d22d] bg-gray-800 border-gray-700 rounded mt-1">
              <span class="ml-2 text-gray-400 text-sm">
                I agree to the <a href="#" class="text-[#53d22d] hover:text-green-400">Terms of Service</a> 
                and <a href="#" class="text-[#53d22d] hover:text-green-400">Privacy Policy</a>
              </span>
            </div>

            <button 
              type="submit"
              class="w-full py-3 px-6 bg-[#53d22d] text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
            >
              Create Account
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-gray-400">
              Already have an account? 
              <router-link to="/login" class="text-[#53d22d] hover:text-green-400">Sign in</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'

export default {
  name: 'Register',
  components: { Layout },
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        password: ''
      }
    }
  },
  methods: {
    handleRegister() {
      // Handle registration logic
      alert('Registration functionality would be implemented here')
    }
  }
}
</script>