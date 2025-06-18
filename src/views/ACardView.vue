<script setup lang="ts">
import AButton from '@/components/AButton.vue';
import ACard from '@/components/ACard.vue';
import ALayout from '@/components/ALayout.vue';

</script>
<template>
  <div class="w-full h-full p-10 bg-gray-100">
    <ALayout title="Card Component"/>
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
