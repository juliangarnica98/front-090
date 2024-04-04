<template>
    <div class="sm:ml-64 dark:bg-gray-800 dark:border-gray-700 h-fit max-h-full">
        <main>
          <div
            class="pt-4 border-0 border-gray-200 rounded-lg dark:border-gray-700 mt-14 h-dvh max-h-full "
          >
          <HeadComponent :title="'USUARIO'"></HeadComponent>
          <div class="text-center">FECHA DE CREACIÓN {{fecha}}</div>
          <div class="mx-auto w-4/6 pt-10 pb-10" >
            <div id="accordion-collapse"  data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button type="button" class="bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                  <span class="text-black">SEMANA 1</span>
                  <div class="mx-auto">
                    <div v-if="week1.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div v-for="ans1 in week1" :key="ans1" class="bg-pink-400 bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button type="button" class="bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span class=" text-black">SEMANA 2</span>
                  <div class="mx-auto">
                    <div v-if="week2.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div v-for="ans1 in week2" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button type="button" class="bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                  <span class=" text-black">SEMANA 3</span>
                  <div class="mx-auto">
                    <div v-if="week3.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div v-for="ans1 in week3" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-4">
                <button type="button" class=" bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                  <span class=" text-black">SEMANA 4</span>
                  <div class="mx-auto">
                    <div v-if="week4.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                <div v-for="ans1 in week4" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-5">
                <button type="button" class=" bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                  <span class=" text-black">SEMANA 5</span>
                  <div class="mx-auto">
                    <div v-if="week5.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
                <div v-for="ans1 in week5" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-6">
                <button type="button" class=" bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
                  <span class=" text-black">SEMANA 6</span>
                  <div class="mx-auto">
                    <div v-if="week6.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-6" class="hidden" aria-labelledby="accordion-collapse-heading-6">
                <div v-for="ans1 in week6" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-7">
                <button type="button" class=" bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false" aria-controls="accordion-collapse-body-7">
                  <span class=" text-black">SEMANA 7</span>
                  <div class="mx-auto">
                    <div v-if="week7.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-7" class="hidden" aria-labelledby="accordion-collapse-heading-7">
                <div v-for="ans1 in week7" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-8">
                <button type="button" class=" bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-8" aria-expanded="false" aria-controls="accordion-collapse-body-8">
                  <span class=" text-black">SEMANA 8</span>
                  <div class="mx-auto">
                    <div v-if="week8.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-8" class="hidden" aria-labelledby="accordion-collapse-heading-8">
                <div v-for="ans1 in week8" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-9">
                <button type="button" class=" bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-9" aria-expanded="false" aria-controls="accordion-collapse-body-9">
                  <span class=" text-black">SEMANA 9</span>
                  <div class="mx-auto">
                    <div v-if="week9.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-9" class="hidden" aria-labelledby="accordion-collapse-heading-9">
                <div v-for="ans1 in week9" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-10">
                <button type="button" class=" bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-10" aria-expanded="false" aria-controls="accordion-collapse-body-10">
                  <span class=" text-black">SEMANA 10</span>
                  <div class="mx-auto">
                    <div v-if="week10.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-10" class="hidden" aria-labelledby="accordion-collapse-heading-10">
                <div v-for="ans1 in week10" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-11">
                <button type="button" class=" bg-purple-400 flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-11" aria-expanded="false" aria-controls="accordion-collapse-body-11">
                  <span class=" text-black">SEMANA 11</span>
                  <div class="mx-auto">
                    <div v-if="week11.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-11" class="hidden" aria-labelledby="accordion-collapse-heading-11">
                <div v-for="ans1 in week11" :key="ans1" class="bg-pink-400 bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-12">
                <button type="button" class=" bg-purple-400 flex  items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-900 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-pink-500 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-12" aria-expanded="false" aria-controls="accordion-collapse-body-12">
                  <span class=" text-black">SEMANA 12</span>
                  <div class="mx-auto">
                    <div v-if="week12.length != 0">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>                      
                    </div>
                    <div v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>                      
                    </div>
                  </div>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-12" class="hidden" aria-labelledby="accordion-collapse-heading-12">
                <div v-for="ans1 in week12" :key="ans1" class="bg-pink-400 p-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-900 dark:text-gray-400"> {{ans1.description_que}} </p>
                  <p class="text-gray-900 dark:text-gray-400"> {{ans1.description_ans}} </p>
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

    


    useHead({
        title:'USUARIO'+route.params.id
    })
    definePageMeta({
        middleware: ["auth"]
    })

    var id = route.params.id;


    const questionf = async () => {
        try {
            const { data, pending, error } = await useFetch(`http://127.0.0.1:8000/api/getanswer/${id}`,{
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

