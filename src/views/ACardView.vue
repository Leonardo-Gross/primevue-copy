<script setup lang="ts">
import AButton from '@/components/AButton.vue';
import ACard from '@/components/ACard.vue';
import { ref } from 'vue';

const isSideBarOpen = ref(false);
function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
}
</script>
<template>
  <div class="h-full w-full bg-gray-100 p-10">
    <div>
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold">Card Component</h1>
        <i
          @click="toggleSideBar"
          class="pi pi-plus"
        ></i>
        <div
          v-if="isSideBarOpen"
          class="fixed top-0 right-0 h-full w-64 rounded-l-lg bg-gray-400 !p-4 p-2 text-white shadow-lg"
        >
          <div class="flex items-baseline justify-between">
            <h2 class="mb-4 text-2xl font-bold">Components</h2>
            <i
              @click="toggleSideBar"
              class="pi pi-times"
            ></i>
          </div>
          <ul class="ms-5 mt-10">
            <li class="mb-5"><RouterLink to="/">Button</RouterLink></li>
            <li><RouterLink to="/card">Card</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Basic</h2>
      <ACard>
        <template #title> Simple Card </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
          ratione quam perferendis esse, cupiditate neque quas!
        </template>
      </ACard>
    </div>

    <div class="m-5 mt-10">
      <h2 class="mb-4 text-2xl font-bold">Advanced</h2>
      <div class="justify-items-center">
        <ACard class="w-sm overflow-hidden">
          <template #header>
            <img
              src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
              alt="user header"
            />
          </template>
          <template #title> Advanced Card </template>
          <template #subtitle> Card subtitle </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
            error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
            culpa ratione quam perferendis esse, cupiditate neque quas!
          </template>
          <template #footer>
            <div class="mt-4 flex justify-center gap-4">
              <AButton
                class="w-full max-w-50"
                severity="secondary"
                label="Cancel"
              />
              <AButton
                class="w-full max-w-50"
                label="Save"
              />
            </div>
          </template>
        </ACard>
      </div>
    </div>
  </div>
</template>
