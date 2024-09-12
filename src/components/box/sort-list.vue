<template>
    <div class="sort-list" :class="{'sort-list_open': openStatusSearch}">
        
       <div class="sort-list__header" @click="openStatusSearch = !openStatusSearch">
        

        <p class="sort-list__value">{{currentValue}}</p>

        <p class="sort-list__counter" v-if="currentValueCounter">{{currentValueCounter}}</p>

        <div class="sort-list__ar">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_2068_28805" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_2068_28805)">
                <path d="M10.4999 10.0001L7.24992 6.75008C7.09714 6.5973 7.02075 6.40286 7.02075 6.16675C7.02075 5.93064 7.09714 5.73619 7.24992 5.58341C7.4027 5.43064 7.59714 5.35425 7.83325 5.35425C8.06936 5.35425 8.26381 5.43064 8.41659 5.58341L12.2499 9.41675C12.3333 9.50008 12.3923 9.59036 12.427 9.68758C12.4617 9.7848 12.4791 9.88897 12.4791 10.0001C12.4791 10.1112 12.4617 10.2154 12.427 10.3126C12.3923 10.4098 12.3333 10.5001 12.2499 10.5834L8.41659 14.4167C8.26381 14.5695 8.06936 14.6459 7.83325 14.6459C7.59714 14.6459 7.4027 14.5695 7.24992 14.4167C7.09714 14.264 7.02075 14.0695 7.02075 13.8334C7.02075 13.5973 7.09714 13.4029 7.24992 13.2501L10.4999 10.0001Z" fill="#8696AD"/>
                </g>
            </svg>
                
        </div>
       </div> 


        <SlideUpDown :active="openStatusSearch" :duration="300" class="sort-list__data-wrapper">
            <div class="sort-list__body" >
                <ul class="sort-list__values">
                    
                    <li class="sort-list__element" v-for="(item, index) in dataList" :key="index" 
                    :class="{'sort-list__element_activ': curentSelectValue == index}"
                    @click="selectCurrentValue(index)">
                        <span class="sort-list__element-title">{{item.name}}</span>
                        <p class="sort-list__counter" v-if="item.counter">{{item.counter}}</p>
                    </li>

                </ul>

            </div>
        </SlideUpDown>
    </div>
</template>


<script >


// import component__header from '@/components/header.vue'
import SlideUpDown from 'vue-slide-up-down'






export default {

data() {
    return {
        openStatusSearch: false,
        currentValue: '',
        currentValueCounter: null,
        curentSelectValue: 0,
    }
},

props: {
    dataList: Object
},

components: {
    SlideUpDown,

    
},

methods: {
    selectCurrentValue(index){
        this.curentSelectValue = index
        this.currentValue = this.dataList[this.curentSelectValue].name

        if(this.dataList[this.curentSelectValue].counter){
            this.currentValueCounter = this.dataList[this.curentSelectValue].counter
        }
        else{
            this.currentValueCounter = null
        }
        this.openStatusSearch = false
    }


},

computed: {

},

watch: {

},

mounted(){
    this.currentValue = this.dataList[this.curentSelectValue].name

    if(this.dataList[this.curentSelectValue].counter){
        this.currentValueCounter = this.dataList[this.curentSelectValue].counter
    }
    else{
        this.currentValueCounter = null
    }

  
},

}
</script>
