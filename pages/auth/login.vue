<script setup>

    const auth = useAuthStore();

    const imageUrl='/img/lili.png';
    const form = reactive({
      email:'admin@fastmoda.com',
      password:'lilipink'
    });
    const errors= ref([]);
    const submit = async ()=>{
      try{
         await auth.login(form);
      }catch (error){
        errors.value = error.data.errors;
      }
    }
    definePageMeta({
        layout: false,
        middleware: ["guest"]
    });
</script>

<template>
   <div class="flex items-center justify-center border-0 border-gray-200 rounded-lg dark:border-gray-700 h-dvh max-h-full dark:bg-gray-800 bg-violet-500">
   
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a href="#" class="flex items-center mb-6 text-2xl text-white font-semibold text-gray-900 dark:text-white dark:bg-gray-800">
                  <img class="w-8 h-8 mr-2" :src="imageUrl" alt="logo">
                  Lilipink & Yoi   
              </a>
           
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Inicia sesión en tu cuenta
                      </h1>
                      
                      <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
                          <div>
                              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                              <FormInputText placeholder="example@fastmoda.com.co" type="email" v-model="form.email"></FormInputText>
                              <span v-if="errors.email" class="text-red-500"> {{ errors.email[0] }}</span>
                          </div>
                          <div>
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                              <FormInputText placeholder="******"  type="password" v-model="form.password"></FormInputText>
                              <span v-if="errors.password" class="text-red-500"> {{ errors.password[0] }}</span>
                          </div>
                          <button class="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                      </form>
                    
                  </div>
              </div>
          </div>
        
  </div>
</template>
