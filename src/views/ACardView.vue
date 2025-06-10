<script setup lang="ts">
import AButton from '@/components/AButton.vue';
import ACard from '@/components/ACard.vue';
import { ref } from 'vue';

const isSideBarOpen = ref(false)
function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value
}
</script>
<template>
  <div class="w-full h-full p-10 bg-gray-100">
    <div>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold">Card Component</h1>
        <i @click="toggleSideBar" class="pi pi-plus"></i>
      <div v-if="isSideBarOpen" class="p-2 bg-gray-400 text-white rounded-l-lg fixed top-0 right-0 h-full w-64 !p-4 shadow-lg">
        <div class="flex justify-between items-baseline">
          <h2 class="text-2xl font-bold mb-4">Components</h2>
          <i @click="toggleSideBar" class="pi pi-times"></i>
        </div>
        <ul class="mt-10 ms-5">
          <li class="mb-5"><RouterLink to="/">Button</RouterLink></li>
          <li><RouterLink to="/card">Card</RouterLink></li>
        </ul>
      </div>
    </div>
    </div>
    <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Basic</h2>
      <ACard>
        <template #title>
          Simple Card
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </template>
      </ACard>
    </div>

    <div class="m-5 mt-10">
      <h2 class="text-2xl font-bold mb-4">Advanced</h2>
      <div class="justify-items-center ">
        <ACard class="w-sm overflow-hidden ">
          <template #header>
            <img  src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" alt="user header">
          </template>
          <template #title>
            Advanced Card
          </template>
          <template #subtitle>
            Card subtitle
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </template>
          <template #footer>
            <div class="flex justify-center mt-4 gap-4">
              <AButton class="w-full max-w-50" severity="secondary" label="Cancel"/>
              <AButton class="w-full max-w-50" label="Save"/>
            </div>
          </template>
        </ACard>
      </div>
    </div>
  </div>
</template>
