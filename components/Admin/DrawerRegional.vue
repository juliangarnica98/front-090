
<template>
    <button id="createProductButton" class="text-white bg-pink-600 hover:bg-primary-800 
    focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 pt-3 pb-3
    dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" 
    type="button"  data-drawer-target="drawer-regional"
    data-drawer-show="drawer-regional" aria-controls="drawer-regional" >
        Agregar Regional
    </button>
    <div
      id="drawer-regional"
      class="fixed top-12 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-regional-label"
    >
      <h5
        id="drawer-label"
        class="inline-flex items-center mt-6 mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        <svg
          class="w-4 h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path
            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
          />
          <path
            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
          /></svg
        >Crear Regional
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-regional"
        aria-controls="drawer-regional"
        ref="closeDrawerBtn"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          class="w-4 h-4 mt-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <form class="mb-6" @submit.prevent="submit">
        
        <div class="mb-2">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Nombre</label
          >
          <input
            type="text"
            id="name"
            v-model="form.description"
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
  
      const { $swal } = useNuxtApp();
      const token = useTokenStore();
      const regionals = ref([]);
      const closeDrawerBtn = ref();
  
      const emit = defineEmits(['someEvent'])
  
      const form = reactive({
          description:null
      });
      
      const submit = async ()=>{
          try{
            await $fetch(`http://127.0.0.1:8000/api/regionals`,{
                     method:"POST",
                     headers:{
                       Accept: "application/json",
                       Authorization: `Bearer ${token.getToken}`,
                     },
                     body:{ ...form},
                  }); 
              emit('someEvent');
              $swal.fire({title: "Se registro correctamente", icon: "success", timer: 2000,})
              resetForm();
        }catch (error){
          // errors.value = error.data.errors;
        }
      }
      function resetForm (){
          form.description = null
      }
  
      onMounted(async () => { 
          await nextTick();
      });
  </script>
  