<template>

    <div class="lobby-events__slider-wrapper">
        <swiper
        :slidesPerView="'auto'"
        :spaceBetween="25"
        :freeMode="true"
        :scrollbar="{
        hide: false,
        
        }"
        :modules="modules"
        class="lobby-events__slider"
        >
            <swiper-slide v-for="(item, index) in categoryList" :key="index" 
            class="lobby-events__slider-element" 
            :class="{'lobby-events__slider-element_activ': categoryActivIndex == index}">
                <div class="lobby-events__slider-element-wrapper"  @click="currentIndexActiv(index)">
                    <span class="lobby-events__slider-element-counter">1</span>
                    <div class="lobby-events__slider-element-icon-wrapper">
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1842 2.3335C15.1842 3.77471 15.4702 5.20161 16.0256 6.5315C16.581 7.86138 17.3948 9.06782 18.4199 10.0809C20.4914 12.0971 23.2768 13.2112 26.1673 13.1798C25.9395 10.3543 24.709 7.7111 22.6582 5.70589C20.6986 3.70068 18.0098 2.51579 15.1842 2.3335ZM13.4525 2.3335C10.7181 2.60693 8.21159 3.79183 6.29753 5.70589C4.29232 7.66553 3.06185 10.2632 2.83398 12.9976C4.49863 12.979 6.15008 13.2947 7.69051 13.9259C9.23094 14.5572 10.629 15.4912 11.8019 16.6726C12.9748 17.854 13.8987 19.2588 14.5188 20.8037C15.1389 22.3487 15.4427 24.0024 15.4121 25.6668C18.1921 25.3934 20.7897 24.1629 22.7038 22.1577C24.6634 20.1981 25.8939 17.646 26.1217 14.866C23.6308 14.8646 21.1957 14.1289 19.1206 12.7509C17.0456 11.373 15.4228 9.4139 14.4551 7.11865C13.8171 5.61475 13.498 3.97412 13.498 2.3335H13.4525ZM10.5814 17.9194C12.6777 20.0158 13.7259 22.7957 13.6803 25.6213C10.8556 25.4176 8.20033 24.1973 6.20616 22.1864C4.21198 20.1755 3.01399 17.5101 2.83398 14.6838C5.61393 14.6838 8.43945 15.7319 10.5358 17.9194" fill="#70819A"/>
                        </svg>    
                            
                    </div>
                    <p class="lobby-events__slider-element-title">{{shortenString(item.name)}}</p>
                </div>
            </swiper-slide>

        </swiper>
    </div>

</template>


<script >

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
            categoryActivIndex: 0,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
    },

    props: {
        categoryList: Object
    },

    methods: {
        shortenString(str) {
            if (str.length > 7) {
                return str.slice(0, 5) + "...";
            }
            return str;
        },

        currentIndexActiv(currentIndex){
            this.categoryActivIndex = currentIndex
        }
    },

    computed: {

    },

    watch: {

    },

    mounted(){
        
    },

    setup() {
        return {
          modules: [FreeMode,Scrollbar],
        };
      },


}
</script>
