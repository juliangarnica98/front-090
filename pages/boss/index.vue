<!-- <template>
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <HeadComponent :title="'Preguntas'"></HeadComponent>
          <div class="mt-4 grid grid-cols-3 gap-4">
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/1">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 1</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/2">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 2</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/3">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 3</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/4">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 4</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/5">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 5</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/6">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 6</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/7">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 7</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/8">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 8</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/9">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 9</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/10">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 10</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/11">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 11</h5>
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/12">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 12</h5>
              </nuxt-link>
            </div>
          </div>
        </div>
     </div>
</template> -->


<template>
  <div class="sm:ml-64 dark:bg-gray-800 dark:border-gray-700 h-dvh max-h-full">
    <main>
      <div
        class="pt-4 border-0 border-gray-200 rounded-lg dark:border-gray-700 mt-14 h-dvh max-h-full"
      >
      <HeadComponent :title="'PREGUNTAS'"></HeadComponent>
        <div class="mt-4 grid grid-cols-3 gap-4 m-5">
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/1">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 1</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/2">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 2</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/3">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 3</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/4">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 4</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/5">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 5</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/6">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 6</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/7">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 7</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/8">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 8</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/9">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 9</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/10">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 10</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/11">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 11</h5>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link class="bg-purple-500 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" to="/boss/question/12">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">SEMANA 12</h5>
            </nuxt-link>
          </div>
   
        </div>
      </div>
    </main>
  </div>
</template>
<!-- <script setup>

   import { initFlowbite } from 'flowbite'

   const auth = useAuthStore();

   onMounted(() => {
      initFlowbite();
   }),
   
</script> -->
