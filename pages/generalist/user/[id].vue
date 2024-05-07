<template>
    <div class="sm:ml-64 dark:bg-gray-800 dark:border-gray-700 h-full">
        <main>
          <div
            class="pt-4 border-0 border-gray-200 rounded-lg dark:border-gray-700 mt-14 "
          >
          <HeadComponent :title="'USUARIO'"></HeadComponent>
          <div class="font-bold text-center text-2xl dark:text-white pb-5">FECHA DE CREACIÓN {{fecha}}</div>
          <div class="text-center mx-auto">
            <span class="font-bold text-xl mx-5 dark:text-white">Realizado <span class="inline-block w-4 h-4 rounded-full bg-black"></span></span>
            <span class="font-bold text-xl dark:text-white">No Realizado <span class="inline-block w-4 h-4 rounded-full bg-pink-600"></span></span>
          </div>
          <div class="mx-auto w-6/6 pt-5 p-5 " >
            <div id="accordion-collapse" class=" grid grid-cols-1 gap-4"  data-accordion="collapse">




              <h2 id="accordion-collapse-heading-1" class="pb-1 ">
                <button type="button"  class="bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3 dark:bg-purple-500" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                  <span class="text-white text-3xl mx-auto">Semana 1</span>
                  <span v-if="week1.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" class="hidden col-span-1 " aria-labelledby="accordion-collapse-heading-1">
                <div v-for="(ans1,index) in week1" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-2" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="true" aria-controls="accordion-collapse-body-2">
                  <span class="text-white text-3xl mx-auto">Semana 2</span>
                  <span v-if="week2.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div v-for="(ans1,index) in week2" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>



              <h2 id="accordion-collapse-heading-3" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="accordion-collapse-body-3">
                  <span class="text-white text-3xl mx-auto">Semana 3</span>
                  <span v-if="week3.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div v-for="(ans1,index) in week3" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>

              
              <h2 id="accordion-collapse-heading-4" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="true" aria-controls="accordion-collapse-body-4">
                  <span class="text-white text-3xl mx-auto">Semana 4</span>
                  <span v-if="week4.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                <div v-for="(ans1,index) in week4" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-5" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-5" aria-expanded="true" aria-controls="accordion-collapse-body-5">
                  <span class="text-white text-3xl mx-auto">Semana 5</span>
                  <span v-if="week5.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
                <div v-for="(ans1,index) in week5" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-6" class="pb-1 ">
                <button type="button"  class=" dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-6" aria-expanded="true" aria-controls="accordion-collapse-body-6">
                  <span class="text-white text-3xl mx-auto">Semana 6</span>
                  <span v-if="week6.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-6" class="hidden" aria-labelledby="accordion-collapse-heading-6">
                <div v-for="(ans1,index) in week6" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-7" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-7" aria-expanded="true" aria-controls="accordion-collapse-body-7">
                  <span class="text-white text-3xl mx-auto">Semana 7</span>
                  <span v-if="week7.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-7" class="hidden" aria-labelledby="accordion-collapse-heading-7">
                <div v-for="(ans1,index) in week7" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-8" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-8" aria-expanded="true" aria-controls="accordion-collapse-body-8">
                  <span class="text-white text-3xl mx-auto">Semana 8</span>
                  <span v-if="week8.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-8" class="hidden" aria-labelledby="accordion-collapse-heading-8">
                <div v-for="(ans1,index) in week8" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>



              <h2 id="accordion-collapse-heading-9" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-9" aria-expanded="true" aria-controls="accordion-collapse-body-9">
                  <span class="text-white text-3xl mx-auto">Semana 9</span>
                  <span v-if="week9.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-9" class="hidden" aria-labelledby="accordion-collapse-heading-9">
                <div v-for="(ans1,index) in week9" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-10" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-10" aria-expanded="true" aria-controls="accordion-collapse-body-10">
                  <span class="text-white text-3xl mx-auto">Semana 10</span>
                  <span v-if="week10.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-10" class="hidden" aria-labelledby="accordion-collapse-heading-10">
                <div v-for="(ans1,index) in week10" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-11" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-11" aria-expanded="true" aria-controls="accordion-collapse-body-11">
                  <span class="text-white text-3xl mx-auto">Semana 11</span>
                  <span v-if="week11.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-11" class="hidden" aria-labelledby="accordion-collapse-heading-11">
                <div v-for="(ans1,index) in week11" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-12" class="pb-1 ">
                <button type="button"  class="dark:bg-purple-500 bg-purple-600 h-10 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-12" aria-expanded="true" aria-controls="accordion-collapse-body-12">
                  <span class="text-white text-3xl mx-auto">Semana 12</span>
                  <span v-if="week12.length != 0" class="text-white text-xl p-2 bg-black rounded-lg"></span>
                  <span v-else class="text-white text-xl p-2 bg-pink-600 rounded-lg"></span>
                </button>
              </h2>
              <div id="accordion-collapse-body-12" class="hidden" aria-labelledby="accordion-collapse-heading-12">
                <div v-for="(ans1,index) in week12" :key="index" class=" p-1 mb-5 bg-gray-300 rounded border-purple-600 dark:border-gray-700 dark:bg-gray-900">
                  <div class="grid grid-cols-10 gap-4">
                    <div class=" ">
                      <p class=" text-5xl text-pink-700 dark:text-gray-400 font-bold text-center dark:text-pink-500 dark:text-pink-500 dark:text-pruple-500">{{ index+1 }} </p>
                    </div>
                    <div class="col-span-9">
                      <p class="mb-2 text-gray-900 dark:text-gray-400 font-bold text dark:text-white">{{ans1.description_que}} </p>
                      <p class="text-gray-900 dark:text-gray-400 text dark:text-white"> {{ans1.description_ans}} </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
    </main>
  </div>
</template>

<script setup>
 import { initFlowbite } from 'flowbite'
    const route = useRoute()
    const token = useTokenStore();
    const week1 = ref([]);
    const week2 = ref([]);
    const week3 = ref([]);
    const week4 = ref([]);
    const week5 = ref([]);
    const week6 = ref([]);
    const week7 = ref([]);
    const week8 = ref([]);
    const week9 = ref([]);
    const week10 = ref([]);
    const week11 = ref([]);
    const week12 = ref([]);

    const fecha = ref();
    const config = useRuntimeConfig();
    


    useHead({
        title:'USUARIO'+route.params.id
    })
    definePageMeta({
        middleware: ["auth"]
    })

    var id = route.params.id;


    const questionf = async () => {
        try {
            const { data, pending, error } = await useFetch(config.public.BASE_URL+`/getanswer/${id}`,{
                      method:"GET",
                      headers:{
                        Accept: "application/json",
                        Authorization: `Bearer ${token.getToken}`,
                      }
            });
            week1.value = data.value.data['week1'];
            week2.value = data.value.data['week2'];
            week3.value = data.value.data['week3'];
            week4.value = data.value.data['week4'];
            week5.value = data.value.data['week5'];
            week6.value = data.value.data['week6'];
            week7.value = data.value.data['week7'];
            week8.value = data.value.data['week8'];
            week9.value = data.value.data['week9'];
            week10.value = data.value.data['week10'];
            week11.value = data.value.data['week11'];
            week12.value = data.value.data['week12'];

            fecha.value = data.value.data['fecha'];
            
        } catch (error) {
            token.removeToken();
            return navigateTo('/');
        }
    }
    onMounted(() => {
      initFlowbite();
      questionf();
    });
</script>

