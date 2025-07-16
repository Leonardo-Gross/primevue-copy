<script setup lang="ts">
import { ref } from 'vue';
import { POSITION, SEVERITY, SIZE, VARIANT} from '@Enums';
import { AButton } from '@Atoms';
import { MButtonGroup } from '@Molecules';
import { ALayout } from '@Layouts';

defineExpose({ POSITION });

const loading = ref(false);
const currentSize = ref<SIZE>(SIZE.NORMAL);
const sizeOptions = [SIZE.SMALL, SIZE.NORMAL, SIZE.LARGE] as const;

const load = async () => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loading.value = false;
};
</script>

<template>
  <div class="h-full w-full bg-gray-100 p-10">
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
          />
          <AButton
            label="Save"
            icon="pi pi-check"
            :iconPos="POSITION.RIGHT"
          />
        </div>
        <div class="mt-4 flex justify-center gap-4">
          <AButton
            label="Profile"
            icon="pi pi-search"
            :iconPos="POSITION.TOP"
          />
          <AButton
            label="Profile"
            icon="pi pi-refresh"
            :iconPos="POSITION.BOTTOM"
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
          :iconPos="POSITION.RIGHT"
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
          :severity="SEVERITY.PRIMARY"
        />
        <AButton
          label="Secondary"
          :severity="SEVERITY.SECONDARY"
        />
        <AButton
          label="Success"
          :severity="SEVERITY.SUCESS"
        />
        <AButton
          label="Info"
          :severity="SEVERITY.INFO"
        />
        <AButton
          label="Warn"
          :severity="SEVERITY.WARN"
        />
        <AButton
          label="Help"
          :severity="SEVERITY.HELP"
        />
        <AButton
          label="Danger"
          :severity="SEVERITY.DANGER"
        />
        <AButton
          label="Contrast"
          :severity="SEVERITY.CONTRAST"
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
          :severity="SEVERITY.PRIMARY"
          raised
        />
        <AButton
          label="Secondary"
          :severity="SEVERITY.SECONDARY"
          raised
        />
        <AButton
          label="Success"
          :severity="SEVERITY.SUCESS"
          raised
        />
        <AButton
          label="Info"
          :severity="SEVERITY.INFO"
          raised
        />
        <AButton
          label="Warn"
          :severity="SEVERITY.WARN"
          raised
        />
        <AButton
          label="Help"
          :severity="SEVERITY.HELP"
          raised
        />
        <AButton
          label="Danger"
          :severity="SEVERITY.DANGER"
          raised
        />
        <AButton
          label="Contrast"
          :severity="SEVERITY.CONTRAST"
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
          :severity="SEVERITY.PRIMARY"
          rounded
        />
        <AButton
          label="Secondary"
          :severity="SEVERITY.SECONDARY"
          rounded
        />
        <AButton
          label="Success"
          :severity="SEVERITY.SUCESS"
          rounded
        />
        <AButton
          label="Info"
          :severity="SEVERITY.INFO"
          rounded
        />
        <AButton
          label="Warn"
          :severity="SEVERITY.WARN"
          rounded
        />
        <AButton
          label="Help"
          :severity="SEVERITY.HELP"
          rounded
        />
        <AButton
          label="Danger"
          :severity="SEVERITY.DANGER"
          rounded
        />
        <AButton
          label="Contrast"
          :severity="SEVERITY.CONTRAST"
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
          :severity="SEVERITY.PRIMARY"
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Secondary"
          :severity="SEVERITY.SECONDARY"
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Success"
          :severity="SEVERITY.SUCESS"
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Info"
          :severity="SEVERITY.INFO"
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Warn"
          :severity="SEVERITY.WARN"
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Help"
          :severity="SEVERITY.HELP"
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Danger"
          :severity="SEVERITY.DANGER"
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Contrast"
          :severity="SEVERITY.CONTRAST"
          :variant="VARIANT.TEXT"
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
          :severity="SEVERITY.PRIMARY"
          raised
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Secondary"
          :severity="SEVERITY.SECONDARY"
          raised
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Success"
          :severity="SEVERITY.SUCESS"
          raised
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Info"
          :severity="SEVERITY.INFO"
          raised
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Warn"
          :severity="SEVERITY.WARN"
          raised
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Help"
          :severity="SEVERITY.HELP"
          raised
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Danger"
          :severity="SEVERITY.DANGER"
          raised
          :variant="VARIANT.TEXT"
        />
        <AButton
          label="Contrast"
          :severity="SEVERITY.CONTRAST"
          raised
          :variant="VARIANT.TEXT"
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
          :severity="SEVERITY.PRIMARY"
          :variant="VARIANT.OUTLINED"
        />
        <AButton
          label="Secondary"
          :severity="SEVERITY.SECONDARY"
          :variant="VARIANT.OUTLINED"
        />
        <AButton
          label="Success"
          :severity="SEVERITY.SUCESS"
          :variant="VARIANT.OUTLINED"
        />
        <AButton
          label="Info"
          :severity="SEVERITY.INFO"
          :variant="VARIANT.OUTLINED"
        />
        <AButton
          label="Warn"
          :severity="SEVERITY.WARN"
          :variant="VARIANT.OUTLINED"
        />
        <AButton
          label="Help"
          :severity="SEVERITY.HELP"
          :variant="VARIANT.OUTLINED"
        />
        <AButton
          label="Danger"
          :severity="SEVERITY.DANGER"
          :variant="VARIANT.OUTLINED"
        />
        <AButton
          label="Contrast"
          :severity="SEVERITY.CONTRAST"
          :variant="VARIANT.OUTLINED"
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
            :severity="SEVERITY.PRIMARY"
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            :severity="SEVERITY.SECONDARY"
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            :severity="SEVERITY.SUCESS"
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            :severity="SEVERITY.INFO"
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            :severity="SEVERITY.WARN"
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            :severity="SEVERITY.HELP"
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            :severity="SEVERITY.DANGER"
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            :severity="SEVERITY.CONTRAST"
          />
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            :severity="SEVERITY.PRIMARY"
            rounded
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            :severity="SEVERITY.SECONDARY"
            rounded
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            :severity="SEVERITY.SUCESS"
            rounded
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            :severity="SEVERITY.INFO"
            rounded
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            :severity="SEVERITY.WARN"
            rounded
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            :severity="SEVERITY.HELP"
            rounded
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            :severity="SEVERITY.DANGER"
            rounded
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            :severity="SEVERITY.CONTRAST"
            rounded
          />
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            :severity="SEVERITY.PRIMARY"
            rounded
            :variant="VARIANT.OUTLINED"
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            :severity="SEVERITY.SECONDARY"
            rounded
            :variant="VARIANT.OUTLINED"
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            :severity="SEVERITY.SUCESS"
            rounded
            :variant="VARIANT.OUTLINED"
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            :severity="SEVERITY.INFO"
            rounded
            :variant="VARIANT.OUTLINED"
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            :severity="SEVERITY.WARN"
            rounded
            :variant="VARIANT.OUTLINED"
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            :severity="SEVERITY.HELP"
            rounded
            :variant="VARIANT.OUTLINED"
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            :severity="SEVERITY.DANGER"
            rounded
            :variant="VARIANT.OUTLINED"
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            :severity="SEVERITY.CONTRAST"
            rounded
            :variant="VARIANT.OUTLINED"
          />
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            :severity="SEVERITY.PRIMARY"
            rounded
            raised
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            :severity="SEVERITY.SECONDARY"
            rounded
            raised
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            :severity="SEVERITY.SUCESS"
            rounded
            raised
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            :severity="SEVERITY.INFO"
            rounded
            raised
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            :severity="SEVERITY.WARN"
            rounded
            raised
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            :severity="SEVERITY.HELP"
            rounded
            raised
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            :severity="SEVERITY.DANGER"
            rounded
            raised
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            :severity="SEVERITY.CONTRAST"
            rounded
            raised
            :variant="VARIANT.TEXT"
          />
        </div>
        <div class="mb-6 flex justify-center gap-4">
          <AButton
            icon="pi pi-check"
            :buttonSize="currentSize"
            :severity="SEVERITY.PRIMARY"
            rounded
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-bookmark"
            :buttonSize="currentSize"
            :severity="SEVERITY.SECONDARY"
            rounded
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-search"
            :buttonSize="currentSize"
            :severity="SEVERITY.SUCESS"
            rounded
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-user"
            :buttonSize="currentSize"
            :severity="SEVERITY.INFO"
            rounded
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-bell"
            :buttonSize="currentSize"
            :severity="SEVERITY.WARN"
            rounded
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-heart"
            :buttonSize="currentSize"
            :severity="SEVERITY.HELP"
            rounded
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-times"
            :buttonSize="currentSize"
            :severity="SEVERITY.DANGER"
            rounded
            :variant="VARIANT.TEXT"
          />
          <AButton
            icon="pi pi-star"
            :buttonSize="currentSize"
            :severity="SEVERITY.CONTRAST"
            rounded
            :variant="VARIANT.TEXT"
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
        <MButtonGroup>
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
        </MButtonGroup>
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
          :buttonSize="SIZE.SMALL"
        />
        <AButton
          label="Normal"
          icon="pi pi-check"
        />
        <AButton
          label="Large"
          icon="pi pi-check"
          :buttonSize="SIZE.LARGE"

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
