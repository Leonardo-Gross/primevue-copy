<script setup lang="ts">
import { ref } from 'vue';
import { ALayout } from '@Layouts';
import { POSITION, SIZE, VARIANT } from '@Enums';
import { AButton, ACard, ADivider, AInputText, APanel, ATextArea } from '@Atoms';

const showProductsMenu = ref(false)
const showSupportMenu = ref(false)
const showMobileMenu = ref(false)
const showProductsMobileMenu = ref(false)
const showSupportMobileMenu = ref(false)

const planPeriod = ref(false) //false = monthly true = yearly

function toggleProductsMenu() {
  showProductsMenu.value = !showProductsMenu.value
}

function toggleSupportMenu() {
  showSupportMenu.value = !showSupportMenu.value
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}

function toggleProductsMobileMenu() {
  showProductsMobileMenu.value = !showProductsMobileMenu.value
}
function toggleSupportMobileMenu() {
  showSupportMobileMenu.value = !showSupportMobileMenu.value
}

</script>

<template>
  <div class="h-full w-full">
    <div class="p-10">
      <ALayout title="Landing Page" />
    </div>

    <div class="m-10">
      <div class="pb-0 bg-gradient-to-b" style="background-image: linear-gradient(to bottom, #ffffff, #e7f8f3);">
        <aside class="flex justify-between items-center lg:px-20 px-10 py-7 bg-slate-900 text-white text-md rounded-t-lg">
          <b>🔥 Hot Deals!</b>
          <span class="flex space-x-1">
            <p class="hidden xl:block">
              Libero voluptatum atque exercitationem praesentium provident odit.
            </p>
            <a class="font-bold underline" href="#">Learn More</a>
          </span>
          <AButton
            class="bg-slate-900"
            rounded
            icon="pi pi-times"
            :buttonSize="SIZE.SMALL"
          />
        </aside>
        <header class="flex relative flex-col lg:flex-row lg:justify-between border border-gray-200 px-4 py-5 transition-all duration-300 ease-in-out">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
              <img class="h-10" src="../../assets/logo.png">
              <p class="text-slate-900 font-medium text-lg">Trimzales</p>
            </div>
            <div class="lg:hidden">
              <AButton
                class="hover:bg-transparent"
                :buttonSize="SIZE.LARGE"
                :variant="VARIANT.TEXT"
                icon="pi pi-bars"
                @click="toggleMobileMenu"
              />
            </div>
          </div>
          <!-- Desktop Navigation -->
          <div class="hidden lg:flex justify-between gap-3 ">
            <AButton
              class="hover:!bg-transparent hover:text-emerald-500 font-medium"
              label="Products"
              :variant="VARIANT.TEXT"
              icon="pi pi-angle-down"
              :iconPos="POSITION.RIGHT"
              @click="toggleProductsMenu"
            />
            <AButton class="hover:!bg-transparent hover:text-emerald-500 font-medium" label="Corporate" :variant="VARIANT.TEXT" />
            <AButton class="hover:!bg-transparent hover:text-emerald-500 font-medium" label="Resources" :variant="VARIANT.TEXT" />
            <AButton class="hover:!bg-transparent hover:text-emerald-500 font-medium" label="Pricing" :variant="VARIANT.TEXT" />
          </div>
          <!-- Desktop Auth -->
          <div class="hidden lg:flex space-x-2 mt-4 lg:mt-0">
            <AButton class="!text-emerald-500 font-medium hover:bg-transparent" label="Login" :variant="VARIANT.TEXT" />
            <AButton class="!bg-emerald-500 hover:!bg-emerald-600" label="Register" />
          </div>
          <!-- Mobile Menu -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[800px] opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-[800px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div
              v-if="showMobileMenu"
              class="lg:hidden absolute top-full left-0 z-50 w-full max-w-screen bg-white rounded-b-lg border-t border-gray-200 space-y-4 overflow-hidden"
            >
              <!-- Products (abre submenu) -->
              <div class="flex-col px-4 pt-4">
                <div
                  class="flex justify-between items-center hover:bg-transparent hover:!text-emerald-500 gap-2 cursor-pointer"
                  @click="toggleProductsMobileMenu"
                >
                  <AButton
                    class="flex justify-start w-full hover:bg-transparent hover:!text-emerald-500"
                    :variant="VARIANT.TEXT"
                    label="Products"
                    full
                  />
                  <i class="pi pi-angle-down"/>
                </div>
                <!-- Products submenu -->
                <Transition
                  enter-active-class="transition-all duration-200 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-40"
                  leave-active-class="transition-all duration-150 ease-in"
                  leave-from-class="opacity-100 max-h-40"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div v-if="showProductsMobileMenu" class="pl-4 flex flex-col gap-1 overflow-hidden">
                    <AButton class="justify-start gap-2" :variant="VARIANT.TEXT" icon="pi pi-th-large" label="Features" full />
                    <AButton class="justify-start gap-2" :variant="VARIANT.TEXT" icon="pi pi-cog" label="Solutions" full />
                    <AButton class="justify-start gap-2" :variant="VARIANT.TEXT" icon="pi pi-users" label="Customers" full />
                    <div
                      class="flex justify-between items-center hover:bg-gray-100 gap-2 cursor-pointer pr-4"
                      @click="toggleSupportMobileMenu"
                    >
                      <AButton
                        class="justify-start gap-2"
                        :variant="VARIANT.TEXT"
                        icon="pi pi-lightbulb"
                        label="Support"
                        full
                      />
                      <i class="pi pi-angle-down"/>
                    </div>
                    <!-- Support submenu -->
                    <Transition
                      enter-active-class="transition-all duration-200 ease-out"
                      enter-from-class="opacity-0 max-h-0"
                      enter-to-class="opacity-100 max-h-40"
                      leave-active-class="transition-all duration-150 ease-in"
                      leave-from-class="opacity-100 max-h-40"
                      leave-to-class="opacity-0 max-h-0"
                    >
                      <div v-if="showSupportMobileMenu" class="pl-4 flex flex-col gap-1 overflow-hidden">
                        <AButton class="justify-start gap-2" :variant="VARIANT.TEXT" icon="pi pi-user" label="Help Center" full />
                        <AButton class="justify-start gap-2" :variant="VARIANT.TEXT" icon="pi pi-question-circle" label="Faq" full />
                      </div>
                    </Transition>
                  </div>
                </Transition>
                <AButton class="w-full justify-start gap-2 hover:bg-transparent hover:!text-emerald-500" :variant="VARIANT.TEXT" label="Corporate" full />
                <AButton class="w-full justify-start gap-2 hover:bg-transparent hover:!text-emerald-500" :variant="VARIANT.TEXT" label="Resources" full />
                <AButton class="w-full justify-start gap-2 hover:bg-transparent hover:!text-emerald-500" :variant="VARIANT.TEXT" label="Pricing" full />
              </div>
              <ADivider />
              <div class="px-4 pb-4">
                <AButton class="!text-emerald-500 font-medium hover:bg-transparent" label="Login" :variant="VARIANT.TEXT" full />
                <AButton class="!bg-emerald-500 hover:!bg-emerald-600 mt-2" label="Register" full />
              </div>
            </div>
          </Transition>
        </header>
        <!-- Products Dropdown -->
        <Transition
          enter-active-class="transition duration-200 ease-out origin-top"
          enter-from-class="opacity-0 scale-y-0"
          enter-to-class="opacity-100 scale-y-100"
          leave-active-class="transition duration-150 ease-in origin-top"
          leave-from-class="opacity-100 scale-y-100"
          leave-to-class="opacity-0 scale-y-0"
        >
          <div
            v-if="showProductsMenu"
            class="absolute left-[360px] mt-5 w-48 bg-white rounded-sm shadow-xs border border-gray-200 text-sm z-50"
          >
            <div class="flex flex-col">
              <AButton
                class="justify-start px-4 py-2 hover:bg-gray-100 gap-2"
                :variant="VARIANT.TEXT"
                icon="pi pi-th-large"
                label="Features"
                full
              />
              <AButton
                class="justify-start px-4 py-2 hover:bg-gray-100 gap-2"
                :variant="VARIANT.TEXT"
                icon="pi pi-cog"
                label="Solutions"
                full
              />
              <AButton
                class="justify-start px-4 py-2 hover:bg-gray-100 gap-2"
                :variant="VARIANT.TEXT"
                icon="pi pi-users"
                label="Customers"
                full
              />
              <div
                class="flex justify-between items-center hover:bg-gray-100 gap-2 cursor-pointer pe-4"
                @click="toggleSupportMenu"
              >
                <AButton
                  class="justify-start px-4 py-2 hover:bg-gray-100 gap-2"
                  :variant="VARIANT.TEXT"
                  icon="pi pi-lightbulb"
                  label="Support"
                  full
                />
                <i class="pi pi-angle-right" />
              </div>
            </div>
            <!-- Support Submenu -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-x-2 scale-x-95"
              enter-to-class="opacity-100 translate-x-0 scale-x-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-x-0 scale-x-100"
              leave-to-class="opacity-0 -translate-x-2 scale-x-95"
            >
              <div
                v-if="showSupportMenu"
                class="absolute left-full top-34 ml-2 w-52 bg-white rounded-sm shadow-xs border border-gray-200 text-sm z-50"
              >
                <div class="flex flex-col">
                  <AButton
                    class="justify-start px-4 py-2 hover:bg-gray-100 gap-2"
                    :variant="VARIANT.TEXT"
                    icon="pi pi-user"
                    label="Help Center"
                    full
                  />
                  <AButton
                    class="justify-start px-4 py-2 hover:bg-gray-100 gap-2"
                    :variant="VARIANT.TEXT"
                    icon="pi pi-question-circle"
                    label="Faq"
                    full
                  />
                </div>
              </div>
            </Transition>
          </div>
        </Transition>
        <div class="flex flex-col items-center w-full p-20 pb-0 border border-t-0 border-b-0 border-gray-200">
          <span class="bg-green-100 border border-green-300 text-green-700 p-2 rounded-full">
            🔥 Get started in no time
          </span>
          <span class="text-3xl font-extrabold text-gray-900 pt-7 lg:text-4xl">
            Highly Customizable
          </span>
          <span class="text-3xl font-extrabold text-emerald-500 pt-5 pb-7 lg:text-4xl">
            Premium Application Template
          </span>
          <AButton
            class="bg-white !text-emerald-400 font-medium border !border-green-300 rounded-md hover:bg-white !px-2"
            label="Get Started"
          />
          <img
            class="w-190 mt-10"
            style="box-shadow: -10px 0 20px -10px rgba(0,0,0,0.2), 10px 0 15px -5px rgba(0,0,0,0.2);"
            src="../../assets/hero-product.png" alt=""
          >
        </div>
      </div>

      <div class="flex flex-col items-center w-full px-20 pt-15 border border-t-0 border-b-0 border-gray-200">
        <div>
          <span class="text-3xl font-extrabold text-gray-900">
            One Product,
          </span>
          <span class="text-3xl font-extrabold text-emerald-500">
            Many Solutions
          </span>
        </div>
        <span class="text-gray-500 pt-3">
          Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
        </span>

        <div class="grid lg:grid-rows-2 lg:grid-cols-3 md:grid-rows-3 md:grid-cols-2 grid-rows-6 grid-cols-1 gap-10 items-center mt-5">
          <div class="flex flex-col items-center justify-center text-center h-full">
            <i class="pi pi-desktop text-2xl mb-2 text-emerald-500 p-3 border border-gray-100 rounded-lg shadow"/>
            <h4 class="font-medium text-lg ">Built for Developers</h4>
            <p class="text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center h-full">
            <i class="pi pi-lock text-2xl mb-2  text-emerald-500 p-3 border border-gray-100 rounded-lg shadow"/>
            <h4 class="font-medium text-lg">End-to-End Encryption</h4>
            <p class="text-gray-500">
              Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center h-full">
            <i class="pi pi-face-smile text-2xl mb-2  text-emerald-500 p-3 border border-gray-100 rounded-lg shadow"/>
            <h4 class="font-medium text-lg">Easy to Use</h4>
            <p class="text-gray-500">
              Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center h-full">
            <i class="pi pi-globe text-2xl mb-2  text-emerald-500 p-3 border border-gray-100 rounded-lg shadow"/>
            <h4 class="font-medium text-lg">Fast & Global Support</h4>
            <p class="text-gray-500">
              Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center h-full">
            <i class="pi pi-github text-2xl mb-2  text-emerald-500 p-3 border border-gray-100 rounded-lg shadow"/>
            <h4 class="font-medium text-lg">Open Source</h4>
            <p class="text-gray-500">
              Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center h-full">
            <i class="pi pi-shield text-2xl mb-2  text-emerald-500 p-3 border border-gray-100 rounded-lg shadow"/>
            <h4 class="font-medium text-lg">Trusted Security</h4>
            <p class="text-gray-500">
              Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.
            </p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-emerald-600 to-emerald-200 rounded-xl px-10 py-8 w-full max-w-4xl mx-auto mt-50 mb-40">
          <div class="grid md:grid-cols-[1fr_auto] items-center h-25 md:h-30 sm:h-50">
            <div>
              <p class="text-md text-emerald-100 uppercase tracking-wide pb-5">
                Take the next step
              </p>
              <p class="text-2xl md:text-3xl font-semibold text-white">
                Empower your customer experience
              </p>
            </div>

            <AButton
              class="bg-gray-900 text-white font-medium py-2 rounded-full w-max"
              label="Get Started"
            />
          </div>
        </div>
      </div>

      <div class=" bg-gray-50 border border-gray-200 border-t-0 border-b-0 pb-20">
        <div class="w-full flex flex-col text-center items-center pt-20 px-10">
          <span class="text-3xl font-extrabold text-center text-gray-900">
            Continue Breaking Records
          </span>
          <p class="text-gray-500 mt-5 text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div
          class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8 mx-15 bg-white rounded-lg mt-10 p-10 items-start"
          style="box-shadow:
            0 8px 20px -8px rgba(0, 0, 0, 0.08),
            10px 0 15px -10px rgba(0, 0, 0, 0.08),
            -10px 0 15px -10px rgba(0, 0, 0, 0.08);"
        >
          <div class="flex flex-col text-center md:text-left">
            <i class="pi pi-users text-emerald-500 text-3xl" />
            <span class="text-3xl font-semibold py-5">83M</span>
            <p class="text-gray-500 text-sm">
              Nostrum laborum accusamus quia iste facere possimus.
            </p>
          </div>

          <div class="flex flex-col text-center md:text-left">
            <i class="pi pi-chart-line text-emerald-500 text-3xl" />
            <span class="text-3xl font-semibold py-5">$256K</span>
            <p class="text-gray-500 text-sm">
              Nostrum laborum accusamus quia iste facere possimus.
            </p>
          </div>

          <div class="flex flex-col text-center md:text-left">
            <i class="pi pi-globe text-emerald-500 text-3xl" />
            <span class="text-3xl font-semibold py-5">1,453</span>
            <p class="text-gray-500 text-sm">
              Nostrum laborum accusamus quia iste facere possimus.
            </p>
          </div>

          <div class="flex flex-col text-center md:text-left">
            <i class="pi pi-map text-emerald-500 text-3xl" />
            <span class="text-3xl font-semibold py-5">45 km</span>
            <p class="text-gray-500 text-sm">
              Nostrum laborum accusamus quia iste facere possimus.
            </p>
          </div>
        </div>
      </div>

      <div class="border border-gray-200 border-t-0 border-b-0 pt-25 pb-20 flex flex-col items-center w-full px-10">
        <span class="text-4xl font-extrabold text-gray-900 pt-7 pb-10">
          Trusted By
        </span>

        <p class="text-gray-700 font-medium">
          We provide many of the Planet Earth's most powerful companies with extraordinary infrastructural capabilities.
        </p>

        <div class="relative w-full">
          <!-- Grid com divisórias internas -->
          <div class="relative grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2">
            <!-- Item 1 -->
            <div class="relative flex items-center justify-center gap-2 p-10 ">
              <img src="../../assets/brand-logo.png" class="w-10 h-10" />

              <span class="text-gray-500 font-semibold">Mistranet</span>

              <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gray-50 to-gray-200 lg:bg-gradient-to-r lg:from-gray-50 lg:to-gray-200"></div>

              <div class="absolute right-0 w-px h-full bg-gradient-to-t from-gray-200 to-gray-50 lg:hidden"></div>
            </div>

            <!-- Item 2 -->
            <div class="relative flex items-center justify-center gap-2 p-10 lg:border-b lg:border-gray-200 lg:border-r-0">
              <img src="../../assets/logo.png" class="w-10 h-10" />

              <span class="text-gray-500 font-semibold">Trimzales</span>

              <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gray-200 to-gray-50 lg:h-full lg:w-px lg:bg-gradient-to-t lg:from-gray-200 lg:to-gray-50"></div>
            </div>

            <!-- Item 3 -->
            <div class="relative flex items-center justify-center gap-2 p-10 lg:border-b border-gray-200 border-r-0">
              <img src="../../assets/brand-logo.png" class="w-10 h-10" />

              <span class="text-gray-500 font-semibold">Streamlinz</span>

              <div class="absolute bottom-0 right-0 h-full w-px bg-gray-200 lg:hidden"></div>

              <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gray-50 to-gray-200 lg:h-full lg:w-px lg:bg-gradient-to-t lg:from-gray-200 lg:to-gray-50"></div>

            </div>

            <!-- Item 4 -->
            <div class="relative flex items-center justify-center gap-2 p-10 border-r-0 ">
              <img src="../../assets/brand-logo.png" class="w-10 h-10" />

              <span class="text-gray-500 font-semibold">Limerantz</span>

              <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gray-200 to-gray-50 lg:h-full lg:w-px lg:bg-gradient-to-t lg:from-gray-200 lg:to-gray-50"></div>

              <div class="absolute bottom-0 left-0 h-px w-full lg:bg-gradient-to-r lg:from-gray-200 lg:to-gray-50"></div>
            </div>

            <!-- Item 5 -->
            <div class="relative flex items-center justify-center gap-2 p-10 border-r-0">
              <img src="../../assets/brand-logo.png" class="w-10 h-10" />

              <span class="text-gray-500 font-semibold">BriteMank</span>

              <div class="absolute bottom-0 right-0 h-full w-px bg-gray-200 lg:hidden"></div>

              <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gray-50 to-gray-200 lg:hidden"></div>
            </div>

            <!-- Item 6 -->
            <div class="relative flex items-center justify-center gap-2 p-10 border-r-0">
              <img src="../../assets/brand-logo.png" class="w-10 h-10" />

              <span class="text-gray-500 font-semibold">ZenTrailMs</span>

              <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gray-200 to-gray-50 lg:top-0 lg:left-0 lg:h-full lg:w-px lg:bg-gradient-to-b lg:from-gray-200 lg:to-gray-50"></div>
            </div>

            <!-- Item 7 -->
            <div class="relative flex items-center justify-center gap-2 p-10 border-r-0">
              <img src="../../assets/brand-logo.png" class="w-10 h-10" />

              <span class="text-gray-500 font-semibold">Wavelength</span>

              <div class="absolute right-0 w-px h-full bg-gradient-to-b from-gray-200 to-gray-50 lg:hidden"></div>

              <div class="absolute bottom-0 left-0 h-px w-full lg:top-0 lg:left-0 lg:h-full lg:w-px lg:bg-gradient-to-b lg:from-gray-200 lg:to-gray-50"></div>
            </div>

            <!-- Item 8 -->
            <div class="relative flex items-center justify-center gap-2 p-10 border-r-0">
              <img src="../../assets/brand-logo.png" class="w-10 h-10" />

              <span class="text-gray-500 font-semibold">AlphaHex</span>

              <div class="absolute top-0 left-0 w-px h-full lg:bg-gradient-to-b lg:from-gray-200 lg:to-gray-50"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 border border-gray-200 border-t-0 border-b-0 pt-10 flex flex-col items-center w-full px-10 pb-20">
        <span class="text-3xl font-extrabold text-gray-900 pt-7 pb-10">
          Featured Articles
        </span>

        <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ACard class="w-full overflow-hidden !rounded-2xl shadow-xs">
            <template #header>
              <img
                src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-1.jpg"
                class="h-50 p-2 rounded-2xl block mx-auto"
                alt="user header"
              />
            </template>

            <template #title>
              <span class="text-green-500 text-sm">
                Crime
              </span>
            </template>

            <template #subtitle>
              <span class="text-gray-900 font-semibold pb-2">
                Fugitive flamingo spotted in Florida
              </span>
            </template>

            <template #content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </template>

            <template #footer>
              <div class="mt-4 grid grid-flow-col auto-cols-max grid-rows-2 gap-x-3 items-center">
                <img
                  src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png"
                  alt=""
                  class="w-10 h-10 row-span-2"
                >

                <p class="text-sm text-gray-800 font-bold">Anna Lane</p>

                <p class="text-xs text-gray-600">Apr 5, 202x</p>
              </div>
            </template>
          </ACard>

          <ACard class="w-full overflow-hidden !rounded-2xl shadow-xs">
            <template #header>
              <img
                src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-2.jpg"
                alt="user header"
                class="h-50 p-2 rounded-2xl block mx-auto"
              />
            </template>
            <template #title>
              <span class="text-green-500 text-sm">
                Wildlife
              </span>
            </template>
            <template #subtitle>
              <span class="text-gray-900 font-semibold pb-2">
                To the Ends of the Earth
              </span>
            </template>
            <template #content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </template>
            <template #footer>
              <div class="mt-4 grid grid-flow-col auto-cols-max grid-rows-2 gap-x-3 items-center">
                <img
                  src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png"
                  alt=""
                  class="w-10 h-10 row-span-2"
                >

                <p class="text-sm text-gray-800 font-bold">Arlene McCoy</p>

                <p class="text-xs text-gray-600">Apr 5, 202x</p>
              </div>
            </template>
          </ACard>

          <ACard class="w-full overflow-hidden !rounded-2xl shadow-xs">
            <template #header>
              <img
                src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-3.jpg"
                alt="user header"
                class="h-50 p-2 rounded-2xl block mx-auto"
              />
            </template>

            <template #title>
              <span class="text-green-500 text-sm">
                Marine
              </span>
            </template>

            <template #subtitle>
              <span class="text-gray-900 font-semibold pb-2">
                'Real and imminent' extinction risk
              </span>
            </template>
            <template #content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </template>
            <template #footer>
              <div class="mt-4 grid grid-flow-col auto-cols-max grid-rows-2 gap-x-3 items-center">
                <img
                  src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-3.png"
                  alt=""
                  class="w-10 h-10 row-span-2"
                >

                <p class="text-sm text-gray-800 font-bold">Floyd Miles</p>

                <p class="text-xs text-gray-600">Apr 5, 202x</p>
              </div>
            </template>
          </ACard>
        </div>
      </div>

      <div class="flex flex-col items-center border-x border-gray-200 pt-10 gap-4">
        <p class="text-green-500 font-medium">Save up to 25% today!</p>
        <h2 class="text-3xl font-bold text-gray-900">Pricing Plans</h2>

        <!-- Toggle -->
        <div class="flex items-center gap-4 mt-4">
          <span :class="[!planPeriod ? 'text-gray-900 font-semibold' : 'text-gray-400']">Monthly</span>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" v-model="planPeriod">
            <div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
            <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </label>

          <span :class="[planPeriod ? 'text-gray-900 font-semibold' : 'text-gray-400']">Yearly</span>
        </div>

        <!-- Plan Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 w-xs lg:w-full max-w-6xl">
          <!-- Basic Plan -->
          <div class="bg-white border border-gray-200 rounded-xl shadow ">
            <div class="p-5 text-center">
              <h3 class="font-semibold text-lg text-gray-800">Basic</h3>
              <p class="text-3xl font-bold text-gray-900 mt-2">
                ${{ planPeriod ? '100' : '10' }}
                <span class="text-base font-normal text-gray-500">/{{ planPeriod ? 'year' : 'month' }}</span>
              </p>
            </div>

            <div class="border-t border-gray-200 p-5 text-gray-600 font-medium text-sm space-y-4">
              <p>Subtitle of the plan maybe two lines even though lines of things.</p>

              <ul class="list-disc list-inside text-gray-700 text-xs font-medium marker:text-lg">
                <li>Arcu vitae elementum</li>
                <li>Dui faucibus in ornar</li>
                <li>Morbi tincidunt augue</li>
                <li>Duis ultricies lacus sed</li>
              </ul>

              <AButton
                label="Buy Now"
                class="w-full !bg-emerald-500 hover:!bg-emerald-600"
              />
            </div>
          </div>

          <!-- Premium Plan -->
          <div class="bg-gray-900 text-white rounded-xl shadow relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div class="text-center p-5">
              <h3 class="font-semibold text-lg">Premium</h3>
              <p class="text-3xl font-bold mt-2">
                ${{ planPeriod ? '200' : '20' }}
                <span class="text-base font-normal text-gray-400">/{{ planPeriod ? 'year' : 'month' }}</span>
              </p>
            </div>

            <div class="border-t border-gray-500 p-5 text-gray-500 font-medium text-sm space-y-4">
              <p>Subtitle of the plan maybe two lines even though lines of things.</p>

              <ul class="list-disc list-inside text-gray-200 text-xs font-medium marker:text-lg marker:text-gray-500">
                <li>Arcu vitae elementum</li>
                <li>Dui faucibus in ornar</li>
                <li>Morbi tincidunt augue</li>
                <li>Duis ultricies lacus sed</li>
              </ul>

              <AButton
                label="Buy Now"
                class="w-full !bg-emerald-500 hover:!bg-emerald-600"
              />
            </div>
          </div>

          <!-- Enterprise Plan -->
          <div class="bg-emerald-800 text-white rounded-xl shadow">
            <div class="text-center p-5">
              <h3 class="font-semibold text-lg">Enterprise</h3>
              <p class="text-3xl font-bold mt-2">
                ${{ planPeriod ? '9000' : '900' }}
                <span class="text-base font-normal text-green-200">/{{ planPeriod ? 'year' : 'month' }}</span>
              </p>
            </div>

            <div class="border-t border-emerald-700 p-5 text-green-200 font-medium text-sm space-y-4">
              <p>Subtitle of the plan maybe two lines even though lines of things.</p>

              <ul class="list-disc list-inside text-gray-200 text-xs font-medium marker:text-lg marker:text-green-200">
                <li>Arcu vitae elementum</li>
                <li>Dui faucibus in ornar</li>
                <li>Morbi tincidunt augue</li>
                <li>Duis ultricies lacus sed</li>
              </ul>

              <AButton
                label="Contact Us"
                class="w-full !bg-emerald-500 hover:!bg-emerald-600"
              />
            </div>
          </div>
        </div>
        <APanel
          :open="true"
          class="m-20 p-10"
        >
          <div class="lg:flex">
            <div class="flex-col w-full h-full pr-20">
              <span class="text-4xl font-bold text-gray-900">Are you ready to get in touch with us?</span>

              <p class="mt-5 mb-10 md:mb-20">Are you interested in Mistranet helping with your project? Get in touch beside and we will get back to you soon to schedule a discovery call.</p>

              <p class="mb-5">hi@mistranet.com</p>

              <div class="flex gap-3 pb-10 lg:pb-0">
                <span class="border border-gray-200 rounded-full">
                  <img
                      src="https://www.svgrepo.com/show/473585/discord.svg"
                      alt=""
                      class="w-8 h-8 p-1 row-span-2"
                    >
                </span>
                <span class="border border-gray-200 rounded-full">
                  <img
                      src="https://www.svgrepo.com/show/169883/twitter-logo.svg"
                      alt=""
                      class="w-8 h-8 p-1 row-span-2"
                    >
                </span>
                <span class="border border-gray-200 rounded-full">
                  <img
                      src="https://www.svgrepo.com/show/513089/youtube-168.svg"
                      alt=""
                      class="w-8 h-8 p-2 row-span-2"
                    >
                </span>
              </div>
            </div>

            <div class="h-full w-full mt-1 mr-1">
              <div class="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-5 md:pb-5">
                <AInputText
                  placeholder="First Name"
                  :size="SIZE.SMALL"
                  class="bg-white focus:outline-emerald-500 !max-w-full"
                />

                <AInputText
                  placeholder="Company"
                  :size="SIZE.SMALL"
                  class="bg-white focus:outline-emerald-500 !max-w-full"
                />

                <AInputText
                  placeholder="Email"
                  :size="SIZE.SMALL"
                  class="bg-white focus:outline-emerald-500 !max-w-full"
                />

                <AInputText
                  placeholder="Budget"
                  :size="SIZE.SMALL"
                  class="bg-white focus:outline-emerald-500 !max-w-full"
                />
              </div>

              <div class="flex flex-col sm:pt-5">
                <ATextArea
                  placeholder="Message"
                  class="bg-white w-full h-50 mb-5 text-sm placeholder:align-text-top focus:border-emerald-500"
                />

                <AButton
                  label="Submit"
                  class="!bg-emerald-500 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        </APanel>

        <footer class="w-full h-full bg-slate-900 text-gray-100 rounded-b-lg">
          <div class="p-15 grid grid-cols-4">
            <div class="font-semibold">
              <div class="flex items-center">
                <img
                  src="../../assets/logo.png"
                  alt=""
                  class="h-10 w-10 p-1 rounded-full "
                >
                <p>AlphaHex</p>
              </div>
            </div>

            <div class="items-center">
              <p class="font-semibold">Company</p>

              <ul class="text-sm">
                <li class="py-3">About Us</li>

                <li class="pb-3">News</li>

                <li class="pb-3">Investor Relations</li>

                <li class="pb-3">Carrers</li>

                <li class="pb-3">Media Kit</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold">Resources</p>

              <ul class="text-sm">
                <li class="py-3">Get Started</li>

                <li class="pb-3">Learn</li>

                <li class="pb-3">Case Studies</li>
              </ul>
            </div>

            <div class="text-sm">
              <p class="pb-1">Jacob Obrechtstraat 5, 1071 KC</p>
              <p class="pb-1">Amsterdam The Netherlands</p>
              <p class="pb-1">(31) 20 779 8986</p>
              <p class="pb-1">hello@bastion.co</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
