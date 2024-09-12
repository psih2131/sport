<template>
    <div class="bet-event-claster bet-event-claster_col-2-long" :class="{'bet-event-claster_open': openStatusSearch}">
        
        <div class="bet-event-claster__header" @click="openStatusSearch = !openStatusSearch">
            <p class="bet-event-claster__header-title">{{clasterHeaderTitle}}</p>
            <div class="bet-event-claster__header-right">
                <p class="bet-event-claster__header-type">{{clasterHeaderType}}</p>
                <div class="bet-event-claster__header-ar">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2046_17873" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_2046_17873)">
                        <path d="M10.4999 10.0001L7.24992 6.75008C7.09714 6.5973 7.02075 6.40286 7.02075 6.16675C7.02075 5.93064 7.09714 5.73619 7.24992 5.58341C7.4027 5.43064 7.59714 5.35425 7.83325 5.35425C8.06936 5.35425 8.26381 5.43064 8.41659 5.58341L12.2499 9.41675C12.3333 9.50008 12.3923 9.59036 12.427 9.68758C12.4617 9.7848 12.4791 9.88897 12.4791 10.0001C12.4791 10.1112 12.4617 10.2154 12.427 10.3126C12.3923 10.4098 12.3333 10.5001 12.2499 10.5834L8.41659 14.4167C8.26381 14.5695 8.06936 14.6459 7.83325 14.6459C7.59714 14.6459 7.4027 14.5695 7.24992 14.4167C7.09714 14.264 7.02075 14.0695 7.02075 13.8334C7.02075 13.5973 7.09714 13.4029 7.24992 13.2501L10.4999 10.0001Z" fill="#8696AD"/>
                        </g>
                    </svg>
                        
                </div>
            </div>
        </div>


        <SlideUpDown :active="openStatusSearch" :duration="500">
            <div class="bet-event-claster__body" >


                <div class="bet-event-claster__row">

                    <div class="bet-event-claster__col-short">
                        <component__sort_list :dataList="valueList" />
                    </div>

                    <div class="bet-event-claster__col">
                        <component__bet_event_claster_element 
                        :betName="'Да'" 
                        :betValue="1.51"/>
                    </div>



                </div>
            </div>
        </SlideUpDown>
    </div>
</template>


<script >


// import component__header from '@/components/header.vue'
import SlideUpDown from 'vue-slide-up-down'

import component__bet_event_claster_element from '@/components/box/bet-event-claster-element.vue'
import component__sort_list from '@/components/box/sort-list.vue'




export default {

    data() {
        return {
            openStatusSearch: false,
            valueList: [
                {'name':'Динамо/Динамо'},
                {'name':'Тест 1'},
                {'name':'Тест 2'},
                {'name':'Тест 3'},
                {'name':'Тест 4'},
            ],

        }
    },

    props: {
        clasterHeaderTitle: String,
        clasterHeaderType: String,
        
    },

    components: {
        SlideUpDown,
        component__bet_event_claster_element,
        component__sort_list,
        
    },

    methods: {



    },

    computed: {

    },

    watch: {

    },

    mounted(){
        
    },

}
</script>
    