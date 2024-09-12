<template>

  <div class="sport-page">
    <div class="blur-background" :class="{'blur-background_show':searchStatus}"></div>

    <!-- blog posts -->
    <section class="blog-sec">
      <div class="container-slider-blog">

        <div class="blog-sec__slider-wrapper">

          <swiper
            :slidesPerView="'auto'"
            :spaceBetween="20"
            :freeMode="true"
            :scrollbar="{
              hide: false,
            }"
            :breakpoints="breakpoints"
            :modules="modules"
            class="blog-sec__slider"
          >
            <swiper-slide v-for="item in posts" :key="item">
              <component__post_blog :postData="item" />
            </swiper-slide>

          </swiper>
          

        </div>
        
      </div>
    </section>


    <!-- Search -->
    <section class="search-sec">
      <div class="container">
        <component__search_event @SearchStatus="searchStatus = $event"/>
      </div>
    </section>



    <!-- page nav -->
    <component__page_nav/>



    
    <RouterView />
    
    


  </div>
</template>


<script >
import { RouterLink, RouterView } from 'vue-router'

import component__page_nav from '@/components/box/page-nav.vue'
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
          searchStatus: false,


          posts: [
            {'id': 1, 'name': 'test 1', 'imgUrl': 'https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
            {'id': 2, 'name': 'test 2', 'imgUrl': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
            {'id': 3, 'name': 'test 3', 'imgUrl': 'https://images.unsplash.com/photo-1524646349956-1590eacfa324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
            {'id': 4, 'name': 'test 4', 'imgUrl': 'https://plus.unsplash.com/premium_photo-1663090368065-f8a204e47c3c?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
          ],
          
          breakpoints: {
            // Настройки адаптивности
            320: {
   
              spaceBetween: 10, // 10px между слайдами
              scrollbar: {
                hide: true,
              }
            },

            1320: {

              spaceBetween: 20,
            },
          }

        }
    },

    components: {
      component__post_blog,
      Swiper,
      SwiperSlide,
      component__search_event,
      component__page_nav,
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
        modules: [Scrollbar, FreeMode],
      };
    },

}
</script>
