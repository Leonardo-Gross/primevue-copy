<script setup lang="ts">
import ACard from '@/components/ACard.vue';
import ALayout from '@/components/ALayout.vue';
import { AButton } from '@Components';


</script>
<template>
  <div class="h-full w-full bg-gray-100 p-10">
    <div>
      <ALayout title="Card Component"/>
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
