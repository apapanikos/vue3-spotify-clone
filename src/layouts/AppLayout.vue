<script setup lang="ts">
import { useLayout } from '@/shared/composables/useLayout'

const { layout } = useLayout()
</script>

<template>
  <component :is="layout || 'div'">
    <router-view />
  </component>
</template>
