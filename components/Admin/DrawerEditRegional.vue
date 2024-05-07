
<template>

    <div :id="'drawer-edit-regional'+regional.id" class="fixed top-12 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label">
       <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>Regional</h5>
       <button type="button" :data-drawer-hide="'drawer-edit-regional'+regional.id" aria-controls="drawer-edit-regional" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close menu</span>
       </button>
          
       <form class="mb-6" @submit.prevent="submit">
           <div class="mb-2">
             <label
               for="message"
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >Regional</label
             >
             <select
               v-model="form.status"
               id="regional"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             >
               <option :value="1">ACTIVO</option>
               <option :value="2">INACTIVO</option>
             </select>
           </div>
           <div class="mb-2">
             <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
             <input type="text" id="name" v-model="form.description"
               class="bg-gray-50 uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder=""
               required
             />
             <span v-if="errors.description" class="text-red-500"> {{ errors.description[0] }}</span>
           </div>
         
        
           <button class="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
             REGISTRAR
           </button>
         </form>
    </div>
 </template>
 <script setup>
     import { nextTick } from 'vue';
     import { ref } from 'vue'
     import { initFlowbite } from 'flowbite'
 
     const { $swal } = useNuxtApp();
     const token = useTokenStore();
     const regionals = ref([]);
     const closeDrawerBtn = ref();
     const errors= ref([]);
     const config = useRuntimeConfig();
 
 
     const props = defineProps({
         regional: Object
     })
     const emit = defineEmits(['someEvent'])
 
     const form = reactive({
        status: props.regional.status,
        description: props.regional.description,
     });

     const submit = async ()=>{
         try{
           await $fetch(config.public.BASE_URL+`/regionals/${props.regional.id}`,{
                    method:"PUT",
                    headers:{
                      Accept: "application/json",
                      Authorization: `Bearer ${token.getToken}`,
                    },
                    body:{ ...form},
                 }); 
             emit('someEvent');
             $swal.fire({title: "Se registro correctamente", icon: "success", timer: 2000,})
         
             closeDrawerBtn.click();
       }catch (error){
         errors.value = error.data.errors;
       }
     }
     onMounted(async () => { 
         await nextTick();
         initFlowbite();
     });
 </script>
 