<script setup lang="ts">
import HeaderView from './HeaderView.vue'
</script>
<template>
  <div class="main-view rounded-lg flex flex-col overflow-hidden relative w-full">
    <h1>MAIN VIEW</h1>
    <HeaderView />
    <slot />
  </div>
</template>
