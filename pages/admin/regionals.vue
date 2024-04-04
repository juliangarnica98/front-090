<script setup>
  import { nextTick } from "vue";
  const token = useTokenStore();
  const regionals = ref([]);
  const page = ref(1);
  const last_page = ref(0);
  const { $swal } = useNuxtApp();

  useHead({
    title: "regionales",
  });
  definePageMeta({
    middleware: ["auth"],
  });
  const product = async () => {
    try {
      const { data, refresh } = await useFetch(()=>`http://127.0.0.1:8000/api/regionals?page=${page.value}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.getToken}`,
          },
        });
        regionals.value = data.value.data.data
        last_page.value = data.value.data.last_page
      } catch (error) {
        token.removeToken();
        return navigateTo('/');
      }
    };
    const deleteu = async (regional)=>{
        $swal.fire({
        title: "¿ESTAS SEGURO?",
        showCancelButton: true,
        confirmButtonText: "ELIMINAR",
        denyButtonText: `CANCELAR`
        }).then((result) => {
        if (result.isConfirmed) {
            // try{
                useFetch(`http://127.0.0.1:8000/api/regionals/${regional}`,{
                        method:"DELETE",
                        headers:{
                            Accept: "application/json",
                            Authorization: `Bearer ${token.getToken}`,
                        },
                        }); 
                        product(); 
                $swal.fire("SE HA ELIMINADO", "", "success");
            // }catch (error){
            // }
        } else if (result.isDenied) {
            $swal.fire("Changes are not saved", "", "info");
        }
        });
    }
  function refetch(pageNumber){
    page.value = pageNumber
    product();
  }

  onMounted(async () => {
    await nextTick();
    await product();
  });
</script>
<template>
  <div class="sm:ml-64 dark:bg-gray-800 dark:border-gray-700 h-dvh max-h-full">
    <main>
      <div
        class="pt-4 border-0 border-gray-200 rounded-lg dark:border-gray-700 mt-14 h-dvh max-h-full"
      >
        <HeadComponent :title="'REGIONALES'"></HeadComponent>
        <div class="items-center justify-center block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700 mb-2">
            <AdminDrawerRegional  @some-event="product"></AdminDrawerRegional>
        </div>
        <div class="flex flex-col justify-center content-center">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow ">
                <table
                  class="justify-center content-center min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600 "
                >
                  <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr class="">
                      <th
                        scope="col"
                        class="p-4 text-xs  font-medium text-center text-gray-500 uppercase dark:text-gray-400"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400"
                      >
                        Descripcción
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400"
                      >
                        Status
                      </th>
                     
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  
                  <tbody 
                    class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                  >
                    <tr v-for="(regional, index) in regionals" :key="index" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td
                        class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"
                      >
                        <div
                          class="text-base text-center font-semibold text-gray-900 dark:text-white"
                        >
                          {{ regional.id }}
                        </div>
                        <!-- <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Html templates</div> -->
                      </td>
                      <td
                        class="text-center p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {{ regional.description }}
                      </td>
                      <td
                        class="max-w-sm text-center p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400"
                      >
                        <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300" v-if="regional.status==1">ACTIVO</span>
                        <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300" v-else>INACTIVO</span>
                      </td>
                      <td class="p-4 space-x-2 whitespace-nowrap text-center content-center">
                        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button" :data-drawer-target="'drawer-edit-regional'+regional.id" :data-drawer-show="'drawer-edit-regional'+regional.id" :aria-controls="'drawer-edit-regional'+regional.id">
                          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                  
                      </button>                                   
                      <AdminDrawerEditRegional :regional="regional" @some-event="product"></AdminDrawerEditRegional>
                        <button @click="deleteu(regional.id)"
                          type="button"
                          id="deleteProductButton"
                          data-drawer-placement="right"
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                        >
                          <!-- <button type="button" id="deleteProductButton" data-drawer-target="drawer-delete-product-default" data-drawer-show="drawer-delete-product-default" aria-controls="drawer-delete-product-default" data-drawer-placement="right" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"> -->
                          <svg
                            class="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Pagination  @change="refetch" :totalPages="last_page" :currentPage="page"></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

