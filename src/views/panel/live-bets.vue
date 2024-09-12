<template>
    <!-- <main>
      <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
    </main> -->
    <div class="container">
        <div class="lobby-layout">
           live bets
        </div>
        
    </div>
  
  </template>
  
  
  <script >
  import { RouterLink, RouterView } from 'vue-router'
  
  
  import component__post_blog from '@/components/box/post-blog.vue'
  import component__search_event from '@/components/search-event.vue'
  
  
  // import required modules
  import {Navigation, FreeMode, Pagination } from 'swiper/modules';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import { Scrollbar } from 'swiper/modules';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  
  
  export default {
  
      data() {
          return {

          }
      },
  
      components: {
        component__post_blog,
        Swiper,
        SwiperSlide,
        component__search_event,
      },
  
      methods: {
  
      },
  
      computed: {
  
      },
  
      watch: {
  
      },
  
      mounted(){
        
      },
  
      setup() {
        return {
          modules: [Scrollbar],
        };
      },
  
  }
  </script>
  