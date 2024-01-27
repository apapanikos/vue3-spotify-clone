<script setup lang="ts">
import { onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import { useHttpClient } from '@/shared/services/http/useHttpClient'

// onMounted(async () => {
//   const { get, isLoading, response, error } = useHttpClient<any[]>()
//   await get('/me', {})
// })
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
