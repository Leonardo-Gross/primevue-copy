<script setup lang="ts">
import { reactive } from 'vue'
import { INPUTTYPE, SEVERITY, SIZE } from '@Enums'
import { AButton, AInputText } from '@Atoms'
import { ALayout } from '@Components'

// Armazena os valores dos inputs
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
      <ALayout title="Button Component" />
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Basic</h2>
      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputText
          name="basic"
          :type="INPUTTYPE.TEXT"
          v-model="form.basic"
          @register="registerField"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Forms</h2>
      <div class="card flex justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="flex flex-col gap-4">
          <AInputText
            name="username"
            :type="INPUTTYPE.TEXT"
            placeholder="Username"
            v-model="form.username"
            @register="registerField"
          />
          <AInputText
            name="email"
            :type="INPUTTYPE.TEXT"
            placeholder="Email"
            v-model="form.email"
            @register="registerField"
          />
          <AButton label="Submit" :severity="SEVERITY.SECONDARY" />
        </div>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Filled</h2>
      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputText
          name="filled"
          :type="INPUTTYPE.TEXT"
          :filled="true"
          v-model="form.filled"
          @register="registerField"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Float Label</h2>
      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="card flex gap-3">
          <AInputText
            name="floatOver"
            :type="INPUTTYPE.TEXT"
            placeholder="Over Label"
            v-model="form.floatOver"
            @register="registerField"
          />
          <AInputText
            name="floatIn"
            :type="INPUTTYPE.TEXT"
            placeholder="In Label"
            v-model="form.floatIn"
            @register="registerField"
          />
          <AInputText
            name="floatOn"
            :type="INPUTTYPE.TEXT"
            placeholder="On Label"
            v-model="form.floatOn"
            @register="registerField"
          />
        </div>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Sizes</h2>
      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="flex flex-col gap-4 items-center">
          <AInputText
            name="smallSize"
            :size="SIZE.SMALL"
            placeholder="Small"
            v-model="form.smallSize"
            @register="registerField"
          />
          <AInputText
            name="normalSize"
            placeholder="Normal"
            v-model="form.normalSize"
            @register="registerField"
          />
          <AInputText
            name="largeSize"
            :size="SIZE.LARGE"
            placeholder="Large"
            v-model="form.largeSize"
            @register="registerField"
          />
        </div>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Help Text</h2>
      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <div class="flex flex-col">
          <label for="username">Username</label>
          <AInputText
            id="username"
            name="helpUsername"
            v-model="form.helpUsername"

            @register="registerField"
          />
          <p class="text-gray-500 text-sm">Enter your username to reset your password.</p>
        </div>
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Invalid</h2>
      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputText
          name="invalid1"
          v-model="form.invalid1"
          placeholder="Name"
          :invalid="isInvalid('invalid1')"
          @register="registerField"
        />
        <AInputText
          name="invalid2"
          v-model="form.invalid2"
          placeholder="Name"
          :filled="true"
          :invalid="isInvalid('invalid2')"
          @register="registerField"
        />
      </div>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Disabled</h2>
      <div class="card flex flex-wrap justify-center gap-4 rounded-lg border border-solid border-gray-200 bg-gray-50 p-5">
        <AInputText
          name="disabled"
          v-model="form.disabled"
          disabled
          placeholder="Disabled"
          @register="registerField"
        />
      </div>
    </div>
  </div>
</template>
