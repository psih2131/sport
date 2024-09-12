<template >
    <div class="filtr" :class="{'activ-filtr-open': openStatus}">
        <div class="filtr__header" @click="openStatus = !openStatus" >
            <p class="filtr__current-value">Спорт:</p>
            <div class="filtr__counter" v-if="selectedItems.length > 0">{{selectedItems.length}}</div>
            <div class="filtr__ar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2094_23993" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_2094_23993)">
                    <path d="M10.5007 9.99984L7.25065 6.74984C7.09787 6.59706 7.02148 6.40261 7.02148 6.1665C7.02148 5.93039 7.09787 5.73595 7.25065 5.58317C7.40343 5.43039 7.59787 5.354 7.83398 5.354C8.0701 5.354 8.26454 5.43039 8.41732 5.58317L12.2507 9.4165C12.334 9.49984 12.393 9.59012 12.4277 9.68734C12.4625 9.78456 12.4798 9.88873 12.4798 9.99984C12.4798 10.1109 12.4625 10.2151 12.4277 10.3123C12.393 10.4096 12.334 10.4998 12.2507 10.5832L8.41732 14.4165C8.26454 14.5693 8.0701 14.6457 7.83398 14.6457C7.59787 14.6457 7.40343 14.5693 7.25065 14.4165C7.09787 14.2637 7.02148 14.0693 7.02148 13.8332C7.02148 13.5971 7.09787 13.4026 7.25065 13.2498L10.5007 9.99984Z" fill="#8696AD"/>
                    </g>
                </svg>
            </div>
        </div>

        <SlideUpDown :active="openStatus" :duration="500" class="filtr__data-wrapper">
            <div class="filtr__body">
                <ul class="filtr__value-list">
                    <li class="filtr__value-list-element" v-for="item in valueList" :key="item">
                        <div class="checkbox">
                            <label class="custom-checkbox">
                              <input type="checkbox" @change="toggleSelection(item, $event)">
                              <span>{{item.name}}</span>
                            </label>
                        </div>
                    </li>
                </ul>
                
            </div>
        </SlideUpDown>
    </div>
</template>


<script >

  import SlideUpDown from 'vue-slide-up-down'
  



export default {

   data() {
       return {
        openStatus: false,
        selectedItems: [],
       }
   },

   props:{
    valueList: Object,
   },

   components: {
    SlideUpDown
   },

   methods: {
    toggleSelection(item, event) {
      if (event.target.checked) {
        // Добавляем элемент, если чекбокс выбран
        this.selectedItems.push(item);
      } else {
        // Удаляем элемент, если чекбокс снят
        this.selectedItems = this.selectedItems.filter(i => i !== item);
      }
    }
   },

   computed: {
     
   },

   watch: {

   },

   mounted(){
     
   },


}
</script>
