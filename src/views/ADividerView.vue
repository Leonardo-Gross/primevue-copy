<script setup lang="ts">
import { ALIGN, SEVERITY, STYLETYPE } from '@Enums'
import { AButton, ACard, ADivider } from '@Atoms';
import { ALayout } from '@Templates';
import { ORIENTATION } from '../components/atoms/ADivider/enums';

</script>
<template>
  <div class="h-full w-full bg-gray-100 p-10">
    <div>
      <ALayout title="Divider Component" />
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Basic</h2>

      <ACard>
        <template #content>

          <div class="card">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ADivider />

            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>

            <ADivider />

            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>

            <ADivider />

            <p class="m-0">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
          </div>
        </template>
      </ACard>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Type</h2>

      <ACard>
        <template #content>

          <div class="card">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ADivider :type="STYLETYPE.SOLID"/>

            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>

            <ADivider :type="STYLETYPE.DOTTED"/>

            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>

            <ADivider :type="STYLETYPE.DASHED"/>

            <p class="m-0">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
          </div>
        </template>
      </ACard>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Vertical</h2>

      <ACard>
        <template #content>
          <div class="flex">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ADivider :orientation="ORIENTATION.VERTICAL"/>

            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>

            <ADivider :orientation="ORIENTATION.VERTICAL"/>

            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </div>
        </template>
      </ACard>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Content</h2>

      <ACard>
        <template #content>
          <div class="card">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ADivider :align="ALIGN.LEFT" >
              <b>Left</b>
            </ADivider>

            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>

            <ADivider :type="STYLETYPE.DOTTED">
              <b>Center</b>
            </ADivider>

            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>

            <ADivider :align="ALIGN.RIGHT" :type="STYLETYPE.DASHED">
              <b>Right</b>
            </ADivider>

            <p class="m-0">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
          </div>
        </template>
      </ACard>
    </div>

    <div class="m-5">
      <h2 class="mb-4 text-2xl font-bold">Login</h2>

      <ACard>
        <template #content>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
              <div class="flex flex-col gap-2">
                <label for="username">Username</label>

                <input class="border rounded border-gray-300" id="username" type="text" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="password">Password</label>

                <input class="border rounded border-gray-300" id="password" type="password" />
              </div>

              <div>
                  <AButton label="Login" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></AButton>
              </div>
            </div>

            <div class="hidden md:flex">
              <ADivider :orientation="ORIENTATION.VERTICAL" :align="ALIGN.CENTER">
                <b>OR</b>
              </ADivider>
            </div>

            <div class="flex md:hidden w-full justify-center my-4">
              <ADivider :orientation="ORIENTATION.HORIZONTAL" :align="ALIGN.CENTER">
                <b>OR</b>
              </ADivider>
            </div>

            <div class="w-full md:w-5/12 flex items-center justify-center py-5">
              <AButton label="Sign Up" icon="pi pi-user-plus" :severity="SEVERITY.SUCESS" class="w-full max-w-[17.35rem] mx-auto"/>
            </div>
          </div>
        </template>
      </ACard>
    </div>
  </div>
</template>
<style scoped>
  @media screen and (max-width: 500px) {
    .adivider {
      display: none;
    }
  }
</style>




