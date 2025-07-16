<script setup lang="ts">
import { reactive } from 'vue';
import { ALayout } from '@Layouts'
import { AButton, AInputMask } from '@Atoms'
import { INPUT_MASK_PATTERN, SEVERITY, SIZE } from '@/enums';
import { maxDigitsByMask } from '../utils/maskUtils'
const form = reactive<Record<string, string>>({})

function registerField(name: string) {
  if (!(name in form)) form[name] = ''
}

function isInvalid(name: string, mask: INPUT_MASK_PATTERN): boolean {
  const value = form[name] || ''
  const digits = value.replace(/\D/g, '')
  return digits.length < maxDigitsByMask(mask)
}
</script>

<template>
  <div class="h-full w-full bg-gray-100 p-10">

    <ALayout title="Input Mask Component" />

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Basic</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask :auto-clear="true" :mask="INPUT_MASK_PATTERN.CELLPHONE" />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Forms</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="flex flex-col gap-4">
          <AInputMask :mask="INPUT_MASK_PATTERN.CELLPHONE" />

          <AButton label="Submit" :severity="SEVERITY.SECONDARY" />
        </div>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Mask</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask :mask="INPUT_MASK_PATTERN.CPF" />

        <AInputMask :mask="INPUT_MASK_PATTERN.PHONE" />

        <AInputMask :mask="INPUT_MASK_PATTERN.DATE" />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Optional</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask :mask="INPUT_MASK_PATTERN.PHONE" :autoClear="true"/>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">SlotChar</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask :mask="INPUT_MASK_PATTERN.DATE" />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Filled</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask :filled="true" :mask="INPUT_MASK_PATTERN.PHONE" />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Float Label</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask :mask="INPUT_MASK_PATTERN.CPF" />

        <AInputMask :mask="INPUT_MASK_PATTERN.PHONE" />

        <AInputMask :mask="INPUT_MASK_PATTERN.DATE" />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">lfta Label</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask :mask="INPUT_MASK_PATTERN.CREDIT_CARD" />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Sizes</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="flex flex-col gap-4 items-center">
          <AInputMask placeholder="Small" :mask="INPUT_MASK_PATTERN.PHONE" :size="SIZE.SMALL"/>

          <AInputMask placeholder="Normal" :mask="INPUT_MASK_PATTERN.PHONE"/>

          <AInputMask placeholder="Large" :mask="INPUT_MASK_PATTERN.PHONE" :size="SIZE.LARGE"/>
        </div>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Invalid</h2>

      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask
          name="invalid1"
          v-model="form.invalid1"
          placeholder="CPF"
          :invalid="isInvalid('invalid1', INPUT_MASK_PATTERN.CPF)"
          :mask="INPUT_MASK_PATTERN.CPF"
          @register="registerField"
        />

        <AInputMask
          name="invalid2"
          v-model="form.invalid2"
          placeholder="Phone"
          :invalid="isInvalid('invalid2', INPUT_MASK_PATTERN.PHONE)"
          :mask="INPUT_MASK_PATTERN.PHONE"
          @register="registerField"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Disabled</h2>
      
      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputMask :mask="INPUT_MASK_PATTERN.PHONE" placeholder="Disabled" disabled />
      </div>
    </div>
  </div>
</template>
