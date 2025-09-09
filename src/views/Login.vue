<template>
  <Layout>
    <div class="px-10 lg:px-20 xl:px-40 py-12 bg-[#111827]">
      <div class="max-w-md mx-auto">
        <div class="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <div class="text-center mb-8">
            <h1 class="text-white text-3xl font-bold mb-2">Welcome Back</h1>
            <p class="text-gray-400">Sign in to your Numbola account</p>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-6">
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
              <label class="block text-white font-medium mb-2">Password</label>
              <input 
                v-model="form.password"
                type="password" 
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#53d22d] focus:outline-none"
                placeholder="••••••••"
              >
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input type="checkbox" class="w-4 h-4 text-[#53d22d] bg-gray-800 border-gray-700 rounded">
                <span class="ml-2 text-gray-400">Remember me</span>
              </label>
              <a href="#" class="text-[#53d22d] hover:text-green-400 text-sm">Forgot password?</a>
            </div>

            <button 
              type="submit"
              class="w-full py-3 px-6 bg-[#53d22d] text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-gray-400">
              Don't have an account? 
              <router-link to="/register" class="text-[#53d22d] hover:text-green-400">Sign up</router-link>
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
  name: 'Login',
  components: { Layout },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      // Handle login logic
      alert('Login functionality would be implemented here')
    }
  }
}
</script>