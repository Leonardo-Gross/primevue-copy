<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ title: string }>()
const isSideBarOpen = ref(false)
const toggleSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">{{ props.title }}</h1>
      <i @click="toggleSideBar" class="pi pi-plus cursor-pointer"></i>
    </div>

    <div
      v-if="isSideBarOpen"
      class="p-2 bg-gray-400 text-white rounded-l-lg fixed top-0 right-0 h-full w-64 !p-4 shadow-lg"
    >
      <div class="flex justify-between items-baseline">
        <i @click="toggleSideBar" class="pi pi-times cursor-pointer"></i>
      </div>
      <ul class="mt-10 ms-5">
        <li class="mb-5"><RouterLink to="/">Button</RouterLink></li>
        <li class="mb-5"><RouterLink to="/card">Card</RouterLink></li>
        <li class="mb-5"><RouterLink to="/panel">Panel</RouterLink></li>
        <li class="mb-5"><RouterLink to="/divider">Divider</RouterLink></li>

      </ul>
    </div>

    <main class="mt-10">
      <slot />
    </main>
  </div>
</template>
