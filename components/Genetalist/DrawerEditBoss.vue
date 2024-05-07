
<template>

     <div :id="'drawer-example'+user.id" class="fixed top-12 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
         <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
       </svg>Info</h5>
        <button type="button" :data-drawer-hide="'drawer-example'+user.id" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
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
                >Tienda</label
              >
              <select required
                v-model="form.store"
                id="regional"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option v-for="store in stores" :value="store.id">
                  {{ store.description }}
                </option>
              </select>
              <span v-if="errors.description" class="text-red-500"> {{ errors.description[0] }}</span>
            </div>
            <div class="mb-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nombre</label
              >
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="mb-2">
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Apellido</label
              >
              <input
                type="text"
                id="last_name"
                name="last_name"
                v-model="form.last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="mb-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Correo</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
              <span v-if="errors.email" class="text-red-500"> {{ errors.email[0] }}</span>
            </div>
            <div class="mb-2">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Contraseña</label
              >
              <input
                type="password"
                id="password"
                v-model="form.password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
              <span v-if="errors.password" class="text-red-500"> {{ errors.password[0] }}</span>
            </div>
            <div class="mb-2">
              <label
                for="password_confirmation"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirmar contraseña</label
              >
              <input
                type="password"
                id="password_confirmation"
                v-model="form.password_confirmation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
      
            <button
              class="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
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
      const stores = ref([]);
      const closeDrawerBtn = ref();
      const config = useRuntimeConfig();
      const errors= ref([]);
  
  
      const props = defineProps({
          store: Number,
          user:Object,
      })
      const emit = defineEmits(['someEvent'])
  
      const form = reactive({
      
      
        store:props.store,
        name: props.user.name,
        last_name: props.user.last_name,
        email:props.user.email,
        password:null,
        password_confirmation:null,
        regional:props.user.regional,
        role:'Boss'
      });
      const regionalf = async () => {
          const { data, pending, error } = await useFetch(config.public.BASE_URL+`/getstores`,{
                    method:"GET",
                    headers:{
                      Accept: "application/json",
                      Authorization: `Bearer ${token.getToken}`,
                    }
          });
          stores.value = data.value.data;                                                                                                                                                                             
      }
      const submit = async ()=>{
          try{
            await $fetch(config.public.BASE_URL+`/users/${props.user.id}`,{
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
          await regionalf();
          initFlowbite();
      });
  </script>
  