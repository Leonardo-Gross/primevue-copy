<script setup lang="ts">
import AButton from './components/AButton.vue';

</script>

<template>
  <div class="w-full h-screen p-10 bg-gray-100">
    <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Basic</h2>
      <div class="bg-gray-50 rounded-lg p-5 card flex justify-center flex-wrap gap-4 border border-gray-200 border-solid">
        <AButton label="Submit"/>
      </div>
    </div>
    <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Icons</h2>
      <div class="bg-gray-50 rounded-lg p-5 card flex justify-center flex-wrap gap-4 border border-gray-200 border-solid">
        <AButton icon="pi pi-home" iconPos="right"/>
      </div>
    </div>
    <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Severity</h2>
        <div class="bg-gray-50 rounded-lg p-5 card flex justify-center flex-wrap gap-4 border border-gray-200 border-solid">
          <AButton label="Primary" severity="primary"/>
          <AButton label="Secondary" severity="secondary"/>
          <AButton label="Success" severity="success"/>
          <AButton label="Info" severity="info"/>
          <AButton label="Warn" severity="warn"/>
          <AButton label="Help" severity="help"/>
          <AButton label="Danger" severity="danger"/>
          <AButton label="Contrast" severity="contrast"/>
        </div>
    </div>
  </div>
</template>

