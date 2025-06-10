<script setup lang="ts">
import AButton from '../components/AButton.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

import ButtonGroup from '../components/ButtonGroup.vue';

const loading = ref(false)
const currentSize = ref<'small' | 'normal' | 'large'>('normal')
const sizeOptions = ['small', 'normal', 'large'] as const


const load = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
}

const isSideBarOpen = ref(false)
function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value
}

</script>

<template>
  <div class="w-full h-screen p-10 bg-gray-100">
    <div>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold">Button Component</h1>
        <i @click="toggleSideBar" class="pi pi-plus"></i>
      </div>
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
          <div class="flex gap-2 mb-4 justify-center">
            <button
            v-for="option in sizeOptions"
            :key="option"
            @click="currentSize = option"
            class="px-3 py-1 border rounded capitalize"
            :class="{
            'bg-gray-800 text-white': currentSize === option,
            'bg-white text-gray-800': currentSize !== option
        }"
            >
              {{ option }}
            </button>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" :buttonSize="currentSize" severity="primary"/>
            <AButton icon="pi pi-bookmark" :buttonSize="currentSize" severity="secondary"/>
            <AButton icon="pi pi-search" :buttonSize="currentSize" severity="success"/>
            <AButton icon="pi pi-user" :buttonSize="currentSize" severity="info"/>
            <AButton icon="pi pi-bell" :buttonSize="currentSize" severity="warn"/>
            <AButton icon="pi pi-heart" :buttonSize="currentSize" severity="help"/>
            <AButton icon="pi pi-times" :buttonSize="currentSize" severity="danger"/>
            <AButton icon="pi pi-star" :buttonSize="currentSize" severity="contrast"/>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" :buttonSize="currentSize" severity="primary" rounded/>
            <AButton icon="pi pi-bookmark" :buttonSize="currentSize" severity="secondary" rounded/>
            <AButton icon="pi pi-search" :buttonSize="currentSize" severity="success" rounded/>
            <AButton icon="pi pi-user" :buttonSize="currentSize" severity="info" rounded/>
            <AButton icon="pi pi-bell" :buttonSize="currentSize" severity="warn" rounded/>
            <AButton icon="pi pi-heart" :buttonSize="currentSize" severity="help" rounded/>
            <AButton icon="pi pi-times" :buttonSize="currentSize" severity="danger" rounded/>
            <AButton icon="pi pi-star" :buttonSize="currentSize" severity="contrast" rounded/>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" :buttonSize="currentSize" severity="primary" rounded variant="outlined"/>
            <AButton icon="pi pi-bookmark" :buttonSize="currentSize" severity="secondary" rounded variant="outlined"/>
            <AButton icon="pi pi-search" :buttonSize="currentSize" severity="success" rounded variant="outlined"/>
            <AButton icon="pi pi-user" :buttonSize="currentSize" severity="info" rounded variant="outlined"/>
            <AButton icon="pi pi-bell" :buttonSize="currentSize" severity="warn" rounded variant="outlined"/>
            <AButton icon="pi pi-heart" :buttonSize="currentSize" severity="help" rounded variant="outlined"/>
            <AButton icon="pi pi-times" :buttonSize="currentSize" severity="danger" rounded variant="outlined"/>
            <AButton icon="pi pi-star" :buttonSize="currentSize" severity="contrast" rounded variant="outlined"/>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" :buttonSize="currentSize" severity="primary" rounded raised variant="text"/>
            <AButton icon="pi pi-bookmark" :buttonSize="currentSize" severity="secondary" rounded raised variant="text"/>
            <AButton icon="pi pi-search" :buttonSize="currentSize" severity="success" rounded raised variant="text"/>
            <AButton icon="pi pi-user" :buttonSize="currentSize" severity="info" rounded raised variant="text"/>
            <AButton icon="pi pi-bell" :buttonSize="currentSize" severity="warn" rounded raised variant="text"/>
            <AButton icon="pi pi-heart" :buttonSize="currentSize" severity="help" rounded raised variant="text"/>
            <AButton icon="pi pi-times" :buttonSize="currentSize" severity="danger" rounded raised variant="text"/>
            <AButton icon="pi pi-star" :buttonSize="currentSize" severity="contrast" rounded raised variant="text"/>
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <AButton icon="pi pi-check" :buttonSize="currentSize" severity="primary" rounded variant="text"/>
            <AButton icon="pi pi-bookmark" :buttonSize="currentSize" severity="secondary" rounded variant="text"/>
            <AButton icon="pi pi-search" :buttonSize="currentSize" severity="success" rounded variant="text"/>
            <AButton icon="pi pi-user" :buttonSize="currentSize" severity="info" rounded variant="text"/>
            <AButton icon="pi pi-bell" :buttonSize="currentSize" severity="warn" rounded variant="text"/>
            <AButton icon="pi pi-heart" :buttonSize="currentSize" severity="help" rounded variant="text"/>
            <AButton icon="pi pi-times" :buttonSize="currentSize" severity="danger" rounded variant="text"/>
            <AButton icon="pi pi-star" :buttonSize="currentSize" severity="contrast" rounded variant="text"/>
          </div>
        </div>
    </div>

    <div class=" m-5">
      <h2 class="text-2xl font-bold mb-4">Badge</h2>
      <div class="flex justify-center bg-gray-50 rounded-lg p-5 card gap-4 border border-gray-200 border-solid">
        <AButton label="Emails" badge="2"/>
        <AButton label="Messages" badge="2"/>
      </div>
    </div>
    <div class=" m-5">
      <h2 class="text-2xl font-bold mb-4">Button Group</h2>
      <div class="flex justify-center bg-gray-50 rounded-lg p-5 card border border-gray-200 border-solid">
        <ButtonGroup>
          <AButton label="Save" icon="pi pi-check"/>
          <AButton label="Delete" icon="pi pi-trash"/>
          <AButton label="Cancel" icon="pi pi-times"/>
        </ButtonGroup>
      </div>
    </div>
    <div class=" m-5">
      <h2 class="text-2xl font-bold mb-4">Sizes</h2>
      <div class="flex justify-center items-center bg-gray-50 rounded-lg p-5 card gap-4 border border-gray-200 border-solid">
        <AButton label="Small" icon="pi pi-check" buttonSize="small"/>
        <AButton label="Normal" icon="pi pi-check"/>
        <AButton label="Large" icon="pi pi-check" buttonSize="large"/>
      </div>
    </div>
    <div class=" m-5">
      <h2 class="text-2xl font-bold mb-4">Template</h2>
      <div class="flex justify-center items-center bg-gray-50 rounded-lg p-5 card gap-4 border border-gray-200 border-solid">
        <AButton >
          <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-white"
          >
            <g id="SVGRepo_iconCarrier">
              <path d="M15.36 11.33L14.26 11.08L15.12 12.3V16.09L18.05 13.65V9.5L16.7 9.98L15.36 11.33Z" fill="currentColor" />
              <path d="M8.51999 11.33L7.16999 9.98L5.82999 9.5V13.65L8.75999 16.09V12.3L9.61999 11.08L8.51999 11.33Z" fill="currentColor" />
              <path d="M13.16 11.45H10.72L10.11 11.08L9.13 12.55V18.05L9.86 19.14L10.72 20H13.16L14.02 19.14L14.75 18.05V12.55L13.77 11.08L13.16 11.45Z" fill="currentColor" />
              <path d="M15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41Z" fill="currentColor" />
              <path d="M7.17001 16.82L8.76001 18.41V16.58L7.17001 15.24V16.82Z" fill="currentColor" />
              <path d="M11.08 10.96H11.7V4H10.35L9.38 6.31L4.97 5.95L5.71 9.01L10.96 10.96H11.08Z" fill="currentColor" />
              <path d="M14.5 6.31L13.53 4H12.18V11H13L18.25 9L19 6L14.5 6.31Z" fill="currentColor" />
              <path d="M17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71Z" fill="currentColor" />
              <path d="M9.98 4H8.27L6.56 5.71L9.13 5.95L9.98 4Z" fill="currentColor" />
            </g>
          </svg>
        </AButton>
      </div>
    </div>
  </div>
</template>

