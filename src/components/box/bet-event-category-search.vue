<template>

    <div class="bets-event-category-search">
        <swiper
            :slidesPerView="'auto'"
            :spaceBetween="0"
            :freeMode="true"
            :scrollbar="{
            hide: false,
            
            }"
            :modules="modules"
            class="bets-event-category-search__slider"
          >
            <swiper-slide class="bets-event-category-search__slider-element"
            v-for="(item, index) in categoryList" :key="index"
            @click="currentIndexActiv(index)"
            :class="{'bets-event-category-search__slider-element_activ': categoryActivIndex == index}" >
              <p class="bets-event-category-search__slider-element-title">{{item.name}}</p>
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
            categoryList: [
                {'name': 'Основной'},
                {'name': 'Экспресс на одну и ту же игры'},
                {'name': 'Голы'},
                {'name': 'Тайм'},
                {'name': 'Азиатская линия'},
                {'name': 'Специальные ставки'},
                {'name': 'Интервальные ставки'},
                {'name': 'Test'},
                {'name': 'Test 2'},
                {'name': 'Тайм'},
                {'name': 'Азиатская линия'},
                {'name': 'Специальные ставки'},
                {'name': 'Интервальные ставки'},
                {'name': 'Test'},
                {'name': 'Test 2'},


            ]
        }
    },

    components: {
        Swiper,
        SwiperSlide,
    },

    methods: {
        currentIndexActiv(currentIndex){
            this.categoryActivIndex = currentIndex

            if(currentIndex != 1){
                this.$emit('eventSearchStatus', true)
            }
            else{
                this.$emit('eventSearchStatus', false)
            }
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
        modules: [FreeMode, Scrollbar],
      };
    },


}
</script>
