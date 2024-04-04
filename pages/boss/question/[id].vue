<template>
    <div class="flex h-3/4 items-center justify-center dark:bg-gray-800 dark:border-gray-700 h-fit max-h-full ">
        <main class="max-w-5xl">
          <div
            class="pt-4 border-0 border-gray-200 rounded-lg dark:border-gray-700 mt-14 h-dvh max-h-full "
          >
          <HeadComponent :title="'Semana '+week"></HeadComponent>
          <div class="m-5 p-5 block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white  peer">
            {{ header }}
          </div>
          <form class="max-w-screen-xl mx-auto w-11/12" @submit.prevent="submit">
            <div class="mt-5" v-for="(question,index) in questions" :key="index">
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model="question.selected" type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{ question.description }}</label>
                </div>
            </div>
           
            <button type="submit" class=" text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ENVIAR</button>
          </form>
        </div>
    </main>
  </div>
</template>

<script setup>
    const route = useRoute()
    const token = useTokenStore();
    const questions = ref([]);
    const header = ref([]);
    const { $swal } = useNuxtApp();
    const answer = reactive([]);

    useHead({
        title:'SEMANA '+route.params.id
    })
    definePageMeta({
        middleware: ["auth"]
    })

    var week = route.params.id;
    onMounted(async () => { 
      questionf();
    });

    const questionf = async () => {
        try {
          const { data, pending, error } = await useFetch(`http://127.0.0.1:8000/api/getquestion/${week}`,{
            method:"GET",
            headers:{
              Accept: "application/json",
              Authorization: `Bearer ${token.getToken}`,
            }
          });
            data.value.data.forEach((element) => {
                    element.selected = null;   
                });
            questions.value = data.value.data;
            header.value = data.value.data[0].header.description;
        } catch (error) {
            token.removeToken();
            return navigateTo('/');
        }
    }
    const submit = async ()=>{
        try{
          await $fetch(`http://127.0.0.1:8000/api/respuesta`,{
                   method:"POST",
                   headers:{
                     Accept: "application/json",
                     Authorization: `Bearer ${token.getToken}`,
                   },
                   body:{ questions},
                }); 
            $swal.fire({title: "Se registro correctamente", icon: "success", timer: 2000,})
            return navigateTo('/boss');
      }catch (error){
        
      }
    }
</script>

