<script setup lang="ts">
import { reactive } from 'vue';
import { AButton } from '@Components';
import ACard from '@/components/atoms/ACard/ACard.vue';
import ALayout from '@/components/templates/ALayout/ALayout.vue';
import APanel from '@/components/atoms/APanel/APanel.vue';

const panels = reactive<Record<string, boolean>>({
  basic: true,
  toggleable: true,
  template: true,
});

function togglePanel(id: string) {
  panels[id] = !panels[id];
}
</script>

<template>
  <div class="h-full w-full bg-gray-100 p-10">
    <div>
      <ALayout title="Panel Component" />
    </div>

    <div class="mt-5">
      <h2 class="mb-4 text-2xl font-bold">Basic</h2>

      <ACard class="!p-2">
        <APanel
          :open="panels.basic"
          header="Header"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </APanel>
      </ACard>
    </div>

    <div class="mt-5">
      <h2 class="mb-4 text-2xl font-bold">Toggleable</h2>

      <ACard class="!p-2">
        <APanel
          :open="panels.toggleable"
          header="Header"
        >
          <template #header>
            <div>
              <i
                @click="togglePanel('toggleable')"
                :class="['cursor-pointer', panels.toggleable ? 'pi pi-minus' : 'pi pi-plus']"
              />
            </div>
          </template>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </APanel>
      </ACard>
    </div>

    <div class="mt-5">
      <h2 class="mb-4 text-2xl font-bold">Template</h2>

      <ACard class="!p-2">
        <APanel :open="panels.template">
          <template #header>
            <div class="flex w-full items-center justify-between">
              <div class="flex items-center gap-2">
                <img
                  class="size-7"
                  data-p="circle normal"
                  data-pc-section="image"
                  src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                />

                <span class="font-bold">Amy Elsner</span>
              </div>
            </div>
          </template>

          <template #footer>
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <AButton
                  rounded
                  text
                  class="!bg-gray-50"
                  icon="pi pi-user"
                  severity="secondary"
                />

                <AButton
                  rounded
                  text
                  class="!bg-gray-50"
                  icon="pi pi-bookmark"
                  severity="secondary"
                />
              </div>

              <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
            </div>
          </template>

          <template #icons>
            <div class="flex items-center gap-4">
              <AButton
                icon="pi pi-cog"
                severity="secondary"
                rounded
                text
                class="!bg-gray-50"
              />

              <i
                @click="togglePanel('template')"
                :class="['cursor-pointer', panels.template ? 'pi pi-minus' : 'pi pi-plus']"
              />
            </div>
          </template>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </APanel>
      </ACard>
    </div>
  </div>
</template>
