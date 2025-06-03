<script setup lang="ts">
import AButton from './components/AButton.vue';
import { ref } from 'vue'


const loading = ref(false)

const load = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
}

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
      <div class="bg-gray-50 rounded-lg p-5 card  border border-gray-200 border-solid">
        <div class="flex justify-center gap-4">
          <AButton icon="pi pi-home"/>
          <AButton label="Profile" icon="pi pi-user" iconPos="left"/>
          <AButton label="Save" icon="pi pi-check" iconPos="right"/>
        </div>
        <div class="flex justify-center gap-4 mt-4">
          <AButton label="Profile" icon="pi pi-search" iconPos="top"/>
          <AButton label="Profile" icon="pi pi-refresh" iconPos="bottom"/>
        </div>

      </div>
    </div>

    <div class=" m-5">
      <h2 class="text-2xl font-bold mb-4">Loading</h2>
      <div class="flex justify-center bg-gray-50 rounded-lg p-5 card  border border-gray-200 border-solid">
        <AButton label="Search" icon="pi pi-check" iconPos="right" :loading="loading" @click="load" />
      </div>
    </div>

    <div class=" m-5">
      <h2 class="text-2xl font-bold mb-4">Link</h2>
      <div class="flex justify-center bg-gray-50 rounded-lg p-5 card  border border-gray-200 border-solid gap-4">
        <AButton label="Link" link/>
        <AButton as="a" label="External" href="https://vuejs.org/" target="_blank"/>
        <AButton label="Router"/>
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

    <div class=" m-5">
      <h2 class="text-2xl font-bold mb-4">Disabled</h2>
      <div class="flex justify-center bg-gray-50 rounded-lg p-5 card  border border-gray-200 border-solid">
        <AButton label="Submit" disabled/>
      </div>
    </div>

    <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Raised</h2>
        <div class="bg-gray-50 rounded-lg p-5 card flex justify-center flex-wrap gap-4 border border-gray-200 border-solid">
          <AButton label="Primary" severity="primary" raised/>
          <AButton label="Secondary" severity="secondary" raised/>
          <AButton label="Success" severity="success" raised/>
          <AButton label="Info" severity="info" raised/>
          <AButton label="Warn" severity="warn" raised/>
          <AButton label="Help" severity="help" raised/>
          <AButton label="Danger" severity="danger" raised/>
          <AButton label="Contrast" severity="contrast" raised/>
        </div>
    </div>

    <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Rounded</h2>
        <div class="bg-gray-50 rounded-lg p-5 card flex justify-center flex-wrap gap-4 border border-gray-200 border-solid">
          <AButton label="Primary" severity="primary" rounded/>
          <AButton label="Secondary" severity="secondary" rounded/>
          <AButton label="Success" severity="success" rounded/>
          <AButton label="Info" severity="info" rounded/>
          <AButton label="Warn" severity="warn" rounded/>
          <AButton label="Help" severity="help" rounded/>
          <AButton label="Danger" severity="danger" rounded/>
          <AButton label="Contrast" severity="contrast" rounded/>
        </div>
    </div>

    <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Text</h2>
        <div class="bg-gray-50 rounded-lg p-5 card flex justify-center flex-wrap gap-4 border border-gray-200 border-solid">
          <AButton label="Primary" severity="primary" variant="text"/>
          <AButton label="Secondary" severity="secondary" variant="text"/>
          <AButton label="Success" severity="success" variant="text"/>
          <AButton label="Info" severity="info" variant="text"/>
          <AButton label="Warn" severity="warn" variant="text"/>
          <AButton label="Help" severity="help" variant="text"/>
          <AButton label="Danger" severity="danger" variant="text"/>
          <AButton label="Contrast" severity="contrast" variant="text"/>
        </div>
    </div>

     <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Raised Text</h2>
        <div class="bg-gray-50 rounded-lg p-5 card flex justify-center flex-wrap gap-4 border border-gray-200 border-solid">
          <AButton label="Primary" severity="primary" raised variant="text"/>
          <AButton label="Secondary" severity="secondary" raised variant="text"/>
          <AButton label="Success" severity="success" raised variant="text"/>
          <AButton label="Info" severity="info" raised variant="text"/>
          <AButton label="Warn" severity="warn" raised variant="text"/>
          <AButton label="Help" severity="help" raised variant="text"/>
          <AButton label="Danger" severity="danger" raised variant="text"/>
          <AButton label="Contrast" severity="contrast" raised variant="text"/>
        </div>
    </div>

     <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Outlined</h2>
        <div class="bg-gray-50 rounded-lg p-5 card flex justify-center flex-wrap gap-4 border border-gray-200 border-solid">
          <AButton label="Primary" severity="primary" variant="outlined"/>
          <AButton label="Secondary" severity="secondary" variant="outlined"/>
          <AButton label="Success" severity="success" variant="outlined"/>
          <AButton label="Info" severity="info" variant="outlined"/>
          <AButton label="Warn" severity="warn" variant="outlined"/>
          <AButton label="Help" severity="help" variant="outlined"/>
          <AButton label="Danger" severity="danger" variant="outlined"/>
          <AButton label="Contrast" severity="contrast" variant="outlined"/>
        </div>
    </div>

    <div class="m-5">
      <h2 class="text-2xl font-bold mb-4">Icon Only</h2>
        <div class=" bg-gray-50 rounded-lg p-5 justify-center gap-4 border border-gray-200 border-solid">
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" iconOnly severity="primary"/>
            <AButton icon="pi pi-bookmark" iconOnly severity="secondary"/>
            <AButton icon="pi pi-search" iconOnly severity="success"/>
            <AButton icon="pi pi-user" iconOnly severity="info"/>
            <AButton icon="pi pi-bell" iconOnly severity="warn"/>
            <AButton icon="pi pi-heart" iconOnly severity="help"/>
            <AButton icon="pi pi-times" iconOnly severity="danger"/>
            <AButton icon="pi pi-star" iconOnly severity="contrast"/>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" iconOnly severity="primary" rounded/>
            <AButton icon="pi pi-bookmark" iconOnly severity="secondary" rounded/>
            <AButton icon="pi pi-search" iconOnly severity="success" rounded/>
            <AButton icon="pi pi-user" iconOnly severity="info" rounded/>
            <AButton icon="pi pi-bell" iconOnly severity="warn" rounded/>
            <AButton icon="pi pi-heart" iconOnly severity="help" rounded/>
            <AButton icon="pi pi-times" iconOnly severity="danger" rounded/>
            <AButton icon="pi pi-star" iconOnly severity="contrast" rounded/>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" iconOnly severity="primary" rounded variant="outlined"/>
            <AButton icon="pi pi-bookmark" iconOnly severity="secondary" rounded variant="outlined"/>
            <AButton icon="pi pi-search" iconOnly severity="success" rounded variant="outlined"/>
            <AButton icon="pi pi-user" iconOnly severity="info" rounded variant="outlined"/>
            <AButton icon="pi pi-bell" iconOnly severity="warn" rounded variant="outlined"/>
            <AButton icon="pi pi-heart" iconOnly severity="help" rounded variant="outlined"/>
            <AButton icon="pi pi-times" iconOnly severity="danger" rounded variant="outlined"/>
            <AButton icon="pi pi-star" iconOnly severity="contrast" rounded variant="outlined"/>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" iconOnly severity="primary" rounded raised variant="text"/>
            <AButton icon="pi pi-bookmark" iconOnly severity="secondary" rounded raised variant="text"/>
            <AButton icon="pi pi-search" iconOnly severity="success" rounded raised variant="text"/>
            <AButton icon="pi pi-user" iconOnly severity="info" rounded raised variant="text"/>
            <AButton icon="pi pi-bell" iconOnly severity="warn" rounded raised variant="text"/>
            <AButton icon="pi pi-heart" iconOnly severity="help" rounded raised variant="text"/>
            <AButton icon="pi pi-times" iconOnly severity="danger" rounded raised variant="text"/>
            <AButton icon="pi pi-star" iconOnly severity="contrast" rounded raised variant="text"/>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" iconOnly severity="primary" rounded variant="text"/>
            <AButton icon="pi pi-bookmark" iconOnly severity="secondary" rounded variant="text"/>
            <AButton icon="pi pi-search" iconOnly severity="success" rounded variant="text"/>
            <AButton icon="pi pi-user" iconOnly severity="info" rounded variant="text"/>
            <AButton icon="pi pi-bell" iconOnly severity="warn" rounded variant="text"/>
            <AButton icon="pi pi-heart" iconOnly severity="help" rounded variant="text"/>
            <AButton icon="pi pi-times" iconOnly severity="danger" rounded variant="text"/>
            <AButton icon="pi pi-star" iconOnly severity="contrast" rounded variant="text"/>
          </div>
        </div>
    </div>
  </div>
</template>

