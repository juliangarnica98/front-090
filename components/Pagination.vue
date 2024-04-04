<template>
  <div class=" items-center content-center dark:bg-gray-800 dark:border-gray-700 pt-5 pb-5 gap-4 place-content-center" >
    <nav aria-label="Page navigation example " class="flex items-center content-center justify-center ">
      <ul class="flex items-center -space-x-px h-10 text-base">
        <li v-for="(pageNumber,index) in totalPages" :key="index" class="flex items-center justify-center">
          <button class="flex ml-2 items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-pink border-2 rounded-lg  hover:bg-purple-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="{'bg-purple-600 text-white border-2 dark:bg-purple-600 dark:text-white': currentPage == pageNumber}"
            @click="$emit('change', pageNumber)"
            :key="pageNumber">
            {{ pageNumber }} 
          </button>
        </li>   
      </ul>
    </nav>
  </div>

</template>

<script setup>
defineProps({
  totalPages: Number,
  currentPage: Number,
});

defineEmits(["change"]);
</script>