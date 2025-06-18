<script setup lang="ts"></script>

<template>
  <div
    class="w-full flex-wrap justify-start rounded-lg border border-solid border-gray-200 bg-gray-50 !p-0 p-5 text-slate-800"
  >
    <div class="w-full text-gray-700">
      <slot name="header" />
    </div>
    <div class="p-5">
      <div class="mt-4 flex text-lg font-medium">
        <slot name="title" />
      </div>
      <div class="text-md mt-4 flex font-normal text-gray-400">
        <slot name="subtitle" />
      </div>
      <div class="mt-1 text-gray-700">
        <slot name="content" />
      </div>
      <div>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
