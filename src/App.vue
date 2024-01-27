<script setup lang="ts">
import NowPlayingBar from './views/NowPlayingBar.vue'
import MainView from './views/MainView.vue'
import LeftSideBar from './views/LeftSideBar.vue'
import RightSideBar from './views/RightSideBar.vue'
</script>

<template>
  <div
    class="bg-black relative min-h-full h-full w-full grid gap-2 grid-cols-[auto__1fr] grid-rows-[1fr__auto] p-4"
  >
    <LeftSideBar />
    <NowPlayingBar />
    <MainView />
    <!-- <RightSideBar /> -->
  </div>
</template>
