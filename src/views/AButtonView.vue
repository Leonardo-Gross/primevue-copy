<script setup lang="ts">
import { AButton } from '@Components';
import { ref } from 'vue';

import ButtonGroup from '../components/ButtonGroup.vue';
import ALayout from '@/components/ALayout.vue';

const loading = ref(false);
const currentSize = ref<'small' | 'normal' | 'large'>('normal');
const sizeOptions = ['small', 'normal', 'large'] as const;

const load = async () => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loading.value = false;
};
</script>

<template>
  <div class="h-screen w-full bg-gray-100 p-10">
    <div>
      <ALayout title="Button Component" />
    </div>
    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Basic</h2>
      <div
        class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton label="Submit" />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Icons</h2>
      <div class="card rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="flex justify-center gap-4">
          <AButton icon="pi pi-home" />
          <AButton
            label="Profile"
            icon="pi pi-user"
            iconPos="left"
          />
          <AButton
            label="Save"
            icon="pi pi-check"
            iconPos="right"
          />
        </div>
        <div class="mt-4 flex justify-center gap-4">
          <AButton
            label="Profile"
            icon="pi pi-search"
            iconPos="top"
          />
          <AButton
            label="Profile"
            icon="pi pi-refresh"
            iconPos="bottom"
          />
        </div>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Loading</h2>
      <div
        class="card flex justify-center rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Search"
          icon="pi pi-check"
          iconPos="right"
          :loading="loading"
          @click="load"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Link</h2>
      <div
        class="card flex justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Link"
          link
        />
        <AButton
          as="a"
          label="External"
          href="https://vuejs.org/"
          target="_blank"
        />
        <AButton label="Router" />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Severity</h2>
      <div
        class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Primary"
          severity="primary"
        />
        <AButton
          label="Secondary"
          severity="secondary"
        />
        <AButton
          label="Success"
          severity="success"
        />
        <AButton
          label="Info"
          severity="info"
        />
        <AButton
          label="Warn"
          severity="warn"
        />
        <AButton
          label="Help"
          severity="help"
        />
        <AButton
          label="Danger"
          severity="danger"
        />
        <AButton
          label="Contrast"
          severity="contrast"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Disabled</h2>
      <div
        class="card flex justify-center rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Submit"
          disabled
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Raised</h2>
      <div
        class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Primary"
          severity="primary"
          raised
        />
        <AButton
          label="Secondary"
          severity="secondary"
          raised
        />
        <AButton
          label="Success"
          severity="success"
          raised
        />
        <AButton
          label="Info"
          severity="info"
          raised
        />
        <AButton
          label="Warn"
          severity="warn"
          raised
        />
        <AButton
          label="Help"
          severity="help"
          raised
        />
        <AButton
          label="Danger"
          severity="danger"
          raised
        />
        <AButton
          label="Contrast"
          severity="contrast"
          raised
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Rounded</h2>
      <div
        class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Primary"
          severity="primary"
          rounded
        />
        <AButton
          label="Secondary"
          severity="secondary"
          rounded
        />
        <AButton
          label="Success"
          severity="success"
          rounded
        />
        <AButton
          label="Info"
          severity="info"
          rounded
        />
        <AButton
          label="Warn"
          severity="warn"
          rounded
        />
        <AButton
          label="Help"
          severity="help"
          rounded
        />
        <AButton
          label="Danger"
          severity="danger"
          rounded
        />
        <AButton
          label="Contrast"
          severity="contrast"
          rounded
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Text</h2>
      <div
        class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Primary"
          severity="primary"
          variant="text"
        />
        <AButton
          label="Secondary"
          severity="secondary"
          variant="text"
        />
        <AButton
          label="Success"
          severity="success"
          variant="text"
        />
        <AButton
          label="Info"
          severity="info"
          variant="text"
        />
        <AButton
          label="Warn"
          severity="warn"
          variant="text"
        />
        <AButton
          label="Help"
          severity="help"
          variant="text"
        />
        <AButton
          label="Danger"
          severity="danger"
          variant="text"
        />
        <AButton
          label="Contrast"
          severity="contrast"
          variant="text"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Raised Text</h2>
      <div
        class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Primary"
          severity="primary"
          raised
          variant="text"
        />
        <AButton
          label="Secondary"
          severity="secondary"
          raised
          variant="text"
        />
        <AButton
          label="Success"
          severity="success"
          raised
          variant="text"
        />
        <AButton
          label="Info"
          severity="info"
          raised
          variant="text"
        />
        <AButton
          label="Warn"
          severity="warn"
          raised
          variant="text"
        />
        <AButton
          label="Help"
          severity="help"
          raised
          variant="text"
        />
        <AButton
          label="Danger"
          severity="danger"
          raised
          variant="text"
        />
        <AButton
          label="Contrast"
          severity="contrast"
          raised
          variant="text"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Outlined</h2>
      <div
        class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Primary"
          severity="primary"
          variant="outlined"
        />
        <AButton
          label="Secondary"
          severity="secondary"
          variant="outlined"
        />
        <AButton
          label="Success"
          severity="success"
          variant="outlined"
        />
        <AButton
          label="Info"
          severity="info"
          variant="outlined"
        />
        <AButton
          label="Warn"
          severity="warn"
          variant="outlined"
        />
        <AButton
          label="Help"
          severity="help"
          variant="outlined"
        />
        <AButton
          label="Danger"
          severity="danger"
          variant="outlined"
        />
        <AButton
          label="Contrast"
          severity="contrast"
          variant="outlined"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Icon Only</h2>
      <div
        class="justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <div class="mb-4 flex justify-center gap-2">
          <button
            v-for="option in sizeOptions"
            :key="option"
            @click="currentSize = option"
            class="rounded border px-3 py-1 capitalize"
            :class="{
              'bg-gray-800 text-white': currentSize === option,
              'bg-white text-gray-800': currentSize !== option,
            }"
          >
            {{ option }}
          </button>
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            severity="primary"
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            severity="secondary"
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            severity="success"
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            severity="info"
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            severity="warn"
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            severity="help"
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            severity="danger"
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            severity="contrast"
          />
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            severity="primary"
            rounded
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            severity="secondary"
            rounded
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            severity="success"
            rounded
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            severity="info"
            rounded
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            severity="warn"
            rounded
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            severity="help"
            rounded
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            severity="danger"
            rounded
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            severity="contrast"
            rounded
          />
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            severity="primary"
            rounded
            variant="outlined"
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            severity="secondary"
            rounded
            variant="outlined"
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            severity="success"
            rounded
            variant="outlined"
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            severity="info"
            rounded
            variant="outlined"
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            severity="warn"
            rounded
            variant="outlined"
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            severity="help"
            rounded
            variant="outlined"
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            severity="danger"
            rounded
            variant="outlined"
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            severity="contrast"
            rounded
            variant="outlined"
          />
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            severity="primary"
            rounded
            raised
            variant="text"
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            severity="secondary"
            rounded
            raised
            variant="text"
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            severity="success"
            rounded
            raised
            variant="text"
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            severity="info"
            rounded
            raised
            variant="text"
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            severity="warn"
            rounded
            raised
            variant="text"
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            severity="help"
            rounded
            raised
            variant="text"
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            severity="danger"
            rounded
            raised
            variant="text"
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            severity="contrast"
            rounded
            raised
            variant="text"
          />
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            severity="primary"
            rounded
            variant="text"
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            severity="secondary"
            rounded
            variant="text"
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            severity="success"
            rounded
            variant="text"
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            severity="info"
            rounded
            variant="text"
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            severity="warn"
            rounded
            variant="text"
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            severity="help"
            rounded
            variant="text"
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            severity="danger"
            rounded
            variant="text"
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            severity="contrast"
            rounded
            variant="text"
          />
        </div>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Badge</h2>
      <div
        class="card flex justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Emails"
          badge="2"
        />
        <AButton
          label="Messages"
          badge="2"
        />
      </div>
    </div>
    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Button Group</h2>
      <div
        class="card flex justify-center rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <ButtonGroup>
          <AButton
            label="Save"
            icon="pi pi-check"
          />
          <AButton
            label="Delete"
            icon="pi pi-trash"
          />
          <AButton
            label="Cancel"
            icon="pi pi-times"
          />
        </ButtonGroup>
      </div>
    </div>
    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Sizes</h2>
      <div
        class="card flex items-center justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton
          label="Small"
          icon="pi pi-check"
          buttonSize="small"
        />
        <AButton
          label="Normal"
          icon="pi pi-check"
        />
        <AButton
          label="Large"
          icon="pi pi-check"
          buttonSize="large"
        />
      </div>
    </div>
    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Template</h2>
      <div
        class="card flex items-center justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5"
      >
        <AButton>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                d="M15.36 11.33L14.26 11.08L15.12 12.3V16.09L18.05 13.65V9.5L16.7 9.98L15.36 11.33Z"
                fill="currentColor"
              />
              <path
                d="M8.51999 11.33L7.16999 9.98L5.82999 9.5V13.65L8.75999 16.09V12.3L9.61999 11.08L8.51999 11.33Z"
                fill="currentColor"
              />
              <path
                d="M13.16 11.45H10.72L10.11 11.08L9.13 12.55V18.05L9.86 19.14L10.72 20H13.16L14.02 19.14L14.75 18.05V12.55L13.77 11.08L13.16 11.45Z"
                fill="currentColor"
              />
              <path
                d="M15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41Z"
                fill="currentColor"
              />
              <path
                d="M7.17001 16.82L8.76001 18.41V16.58L7.17001 15.24V16.82Z"
                fill="currentColor"
              />
              <path
                d="M11.08 10.96H11.7V4H10.35L9.38 6.31L4.97 5.95L5.71 9.01L10.96 10.96H11.08Z"
                fill="currentColor"
              />
              <path
                d="M14.5 6.31L13.53 4H12.18V11H13L18.25 9L19 6L14.5 6.31Z"
                fill="currentColor"
              />
              <path
                d="M17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71Z"
                fill="currentColor"
              />
              <path
                d="M9.98 4H8.27L6.56 5.71L9.13 5.95L9.98 4Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </AButton>
      </div>
    </div>
  </div>
</template>
