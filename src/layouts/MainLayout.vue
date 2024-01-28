<script setup lang="ts">
import MainView from '@/views/MainView.vue'
import LeftSideBar from '@/views/LeftSideBar.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import NowPlayingBar from '@/views/NowPlayingBar.vue'
import RightSideBar from '@/views/RightSideBar.vue'
</script>

<template>
  <BaseLayout>
    <div
      class="layout-container relative min-h-full h-dvh w-full grid gap-2 grid-cols-[auto__1fr] grid-rows-[1fr__auto] p-4"
    >
      <LeftSideBar />
      <NowPlayingBar />
      <MainView>
        <slot />
      </MainView>
      <!-- <RightSideBar /> -->
    </div>
  </BaseLayout>
</template>
