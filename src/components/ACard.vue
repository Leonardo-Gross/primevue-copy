<script setup lang="ts">


</script>

<template>
  <div class="justify-start flex-wrap w-full bg-gray-50 rounded-lg p-5 border border-gray-200
  border-solid text-slate-800 !p-0">
    <div class="w-full text-gray-700">
      <slot name="header"/>
    </div>
    <div class="p-5">
      <div class="flex font-medium text-lg mt-4">
        <slot name="title"/>
      </div>
      <div class="text-gray-400 flex font-normal text-md mt-4">
        <slot name="subtitle"/>
      </div>
      <div class="mt-1 text-gray-700">
        <slot name="content"/>
      </div>
      <div >
        <slot name="footer"/>
      </div>
    </div>
  </div>

</template>
