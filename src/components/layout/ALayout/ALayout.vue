<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ title: string }>();
const isSideBarOpen = ref(false);
const toggleSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value;
};
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">{{ props.title }}</h1>
      <i
        @click="toggleSideBar"
        class="pi pi-plus cursor-pointer"
      ></i>
    </div>

    <div
      v-if="isSideBarOpen"
      class="fixed top-0 right-0 h-full w-64 rounded-l-lg bg-gray-400 !p-4 p-2 text-white shadow-lg"
    >
      <div class="flex items-baseline justify-between">
        <i
          @click="toggleSideBar"
          class="pi pi-times cursor-pointer"
        ></i>
      </div>
      <ul class="ms-5 mt-10">
        <li class="mb-5"><RouterLink to="/">Button</RouterLink></li>
        <li class="mb-5"><RouterLink to="/card">Card</RouterLink></li>
        <li class="mb-5"><RouterLink to="/panel">Panel</RouterLink></li>
        <li class="mb-5"><RouterLink to="/divider">Divider</RouterLink></li>
        <li class="mb-5"><RouterLink to="/inputtext">Input Text</RouterLink></li>
      </ul>
    </div>

    <main class="mt-10">
      <slot />
    </main>
  </div>
</template>
