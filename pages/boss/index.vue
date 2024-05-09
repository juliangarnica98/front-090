
<template>
  <div class=" flex flex-col px-6 mx-auto dark:bg-gray-800">
    <main class="dark:bg-gray-800">
      <div
        class="pt-4 border-0 border-gray-200 rounded-full dark:border-gray-700 mt-14 sm:h-dvh sm:max-h-full dark:bg-gray-800"
      >
        <HeadComponent class="text-center" :title="'CUESTIONARIOS'"></HeadComponent>
        
        
        <div class="flex h-3/4 items-center justify-center">
          <div class="flex  align-middle max-w-6xl bg-gray-300 overflow-x-auto dark:bg-gray-200 m-2 p-3 rounded-lg">
            <div class="flex contenedor overflow-x-auto">
              <div  class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/1.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 1</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Hola, un gusto saludarte, nuevamente paso a darte la bienvenida a la familia Lilipink & Yoi. Soy generalista de gestión  humana asignada ...</p>
                    <div class="" v-if="!validate.includes(1)">
                      <nuxt-link  v-if="1<=sem  " :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<1}" class=" w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/1">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/11.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 2</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la segunda semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(2)">
                      <nuxt-link v-if="2<=sem  "  :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<2}" class=" w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/2">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/3.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 3</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la tercera semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(3)">

                      <nuxt-link v-if="3<=sem "  :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<3}" class=" w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/3">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/4.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 4</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la cuarta semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(4)">
                      <nuxt-link v-if="4<=sem " :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<4}" class=" w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/4">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/5.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 5</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la quinta semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(5)">
                      <nuxt-link v-if="5<=sem " :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<5}" class=" w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/5">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/6.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 6</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la sexta semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(6)">
                      <nuxt-link v-if="6<=sem " :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<6}" class=" w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/6">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/7.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 7</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la septima semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(7)">

                      <nuxt-link v-if="7<=sem " :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<7}" class=" w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/7">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/8.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 8</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la octava semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(8)">
                      <nuxt-link v-if="8<=sem" :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<8}" class="w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/8">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/9.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 9</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la novena semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(9)">
                      <nuxt-link v-if="9<=sem " :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<9}" class="w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/9">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/10.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 10</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la decima semana de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(10)">

                      <nuxt-link  v-if="10<=sem " :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<10}" class="w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/10">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/11.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 11</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comenzamos la semana once de nuestro acompañamiento, nos gustaria que nos compartas el detalle de las siguientes preguntas</p>
                    <div class="" v-if="!validate.includes(11)">
                      <nuxt-link  v-if="11<=sem" :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<11}" class="w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/11">
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div class="max-w-lg min-w-60 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img src="/public/img/3.jpg" class="rounded-t-lg" alt="">
                </a>
                <div class="p-5 ">
                    <a href="#">
                        <h5 class="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Semana 12</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Felicidades! Nos encontramos en la semana final de nuestro seguimiento, gracias por tu empeño y dedicaci?n con el programa. Y a su vez pido de que me amplies la información  ...</p>
                    <div class="" v-if="!validate.includes(12)">
                      <nuxt-link  v-if="12<=sem" :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<12}" class="w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-gray-400 dark:focus:ring-blue-800" to="/boss/question/12">
                        <!-- <nuxt-link  v-if="12<=sem && sem<13" :class="{'disabled bg-purple-500 dark:bg-pink-800 dark:border-pink-700 dark:hover:bg-pink-700 text-center': sem<12}" class=" w-full rounded-full flex items-center content-center justify-center px-3 py-2 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-pink-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to="/boss/question/12"></nuxt-link> -->
                        <p class="text-center">INGRESAR</p>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </nuxt-link>
                    </div>
                    <div class="flex justify-center" v-else>
                      <svg class="w-12 h-12 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                      </svg>
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
<style lang="css" scoped>
  .disabled {
    pointer-events: none;
  }
  .contenedor::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .contenedor::-webkit-scrollbar:vertical {
      width:10px;
  }

  .contenedor::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
      display: none;
  } 

  .contenedor::-webkit-scrollbar:horizontal {
      height: 15px;
  }

  .contenedor::-webkit-scrollbar-thumb {
      background-color: #ec4899;
      border-radius: 20px;
      border: none;
  }

  .contenedor::-webkit-scrollbar-track {
      border-radius: 10px;  
  }
</style>
<script setup>
import { nextTick } from "vue";
const token = useTokenStore();
const validate = ref([]);
const sem = ref(0);
const config = useRuntimeConfig();
useHead({
  title: "Semanas",
});
definePageMeta({
  middleware: ["auth"],
});
const semanas = async () => {
  try {
    const { data, pending} = await useFetch(
      config.public.BASE_URL+`/semanas`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token.getToken}`,
        },
      }
      );
      sem.value = data.value.data['sem'];
      validate.value = data.value.data['ans'];
      console.log(data.value.data['ans']);
  } catch (error) {
    token.removeToken();
    return navigateTo("/");
  }
};
onMounted(async () => {
  await nextTick();
  await semanas();
});
</script>