<script setup lang="ts">
import { reactive } from 'vue';
import { SEVERITY, SIZE } from '@Enums';
import { AButton, ATextArea } from '@Atoms';
import { ALayout } from '@Layouts';

// Armazena os valores
const form = reactive<Record<string, string>>({})

// Registra um novo campo
function registerField(name: string) {
  if (!(name in form)) form[name] = ''
}

// Validação automática: vazio = inválido
function isInvalid(name: string): boolean {
  const value = form[name]
  return !value || value.trim() === ''
}
</script>
<template>
  <div class="h-full w-full bg-gray-100 p-10">
    <div>
      <ALayout title="Text Area Component" />
    </div>

    <div class="mt-5">
        <h2 class="mb-4 text-2xl font-bold">Basic</h2>

        <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
          <ATextArea
            :rows="5"
            :cols="30"
          />
      </div>
    </div>

    <div class="mt-5">

      <h2 class="mb-4 text-2xl font-bold">Forms</h2>

      <div class="card flex flex-col items-center rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="flex flex-col">
          <ATextArea :rows="5" :cols="30" />
          <AButton
            label="Submit"
            :severity="SEVERITY.SECONDARY"
            class="mt-4"
          />
        </div>
      </div>
    </div>

    <div class="mt-5">
        <h2 class="mb-4 text-2xl font-bold">Auto Resize</h2>

        <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
          <ATextArea
            :rows="5"
            :cols="30"
            autoResize
          />
      </div>
    </div>

    <div class="mt-5">
        <h2 class="mb-4 text-2xl font-bold">Filled</h2>

        <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
          <ATextArea
            :rows="5"
            :cols="30"
            filled
          />
      </div>
    </div>

    <div class="mt-5">
      <h2 class="mb-4 text-2xl font-bold">Sizes</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="flex flex-col gap-4 items-center">
          <ATextArea
            :rows="3"
            placeholder="Small"
            :size="SIZE.SMALL"
          />
          <ATextArea
            :rows="3"
            placeholder="Normal"
          />
          <ATextArea
            :rows="3"
            placeholder="Large"
            :size="SIZE.LARGE"
          />
        </div>
      </div>

      <div class="mt-5">
        <h2 class="mb-4 text-2xl font-bold">Invalid</h2>

        <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
          <ATextArea
            :rows="5"
            :cols="30"
            v-model="form['address']"
            placeholder="Address"
            :invalid="isInvalid('address')"
            @focus="registerField('address')"
          />
        </div>
      </div>

      <div class="mt-5">
        <h2 class="mb-4 text-2xl font-bold">Disabled</h2>

        <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
          <ATextArea
            :rows="5"
            :cols="30"
            disabled
            placeholder="Disabled"
          />
        </div>
      </div>
    </div>
  </div>
</template>
