<template>
    <div class="lobby__events-claster lobby-events">

        <div class="lobby-events__header-row">
            <h3 class="lobby-events__title">
            
                <div v-if="clasterTitleIcon" v-html="clasterTitleIcon"></div>

                {{ clasterTitle }}

            </h3>

            <div class="lobby-events__buttons-contorll">
                <div class="lobby-events__change-view-btn" @click="viewStatusStroke = !viewStatusStroke">
                    <svg v-if="viewStatusStroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2032_5706" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_2032_5706)">
                        <path d="M4.52148 15C4.10898 15 3.75586 14.8507 3.46211 14.5521C3.16836 14.2535 3.02148 13.9028 3.02148 13.5V12.25C3.02148 11.8375 3.16836 11.4844 3.46211 11.1906C3.75586 10.8969 4.10898 10.75 4.52148 10.75H15.5007C15.9132 10.75 16.2663 10.8969 16.56 11.1906C16.8538 11.4844 17.0007 11.8375 17.0007 12.25V13.5C17.0007 13.9028 16.8538 14.2535 16.56 14.5521C16.2663 14.8507 15.9132 15 15.5007 15H4.52148ZM4.52148 9.25C4.10898 9.25 3.75586 9.10069 3.46211 8.80208C3.16836 8.50347 3.02148 8.15278 3.02148 7.75V6.5C3.02148 6.0875 3.16836 5.73438 3.46211 5.44063C3.75586 5.14688 4.10898 5 4.52148 5H15.5007C15.9132 5 16.2663 5.14688 16.56 5.44063C16.8538 5.73438 17.0007 6.0875 17.0007 6.5V7.75C17.0007 8.15278 16.8538 8.50347 16.56 8.80208C16.2663 9.10069 15.9132 9.25 15.5007 9.25H4.52148Z" fill="#8696AD"/>
                        </g>
                    </svg>

                    <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2001_24556" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_2001_24556)">
                        <path d="M3 8.75V5.75C3 5.52778 3.06944 5.34722 3.20833 5.20833C3.34722 5.06944 3.52778 5 3.75 5H6.25C6.47222 5 6.65278 5.06944 6.79167 5.20833C6.93056 5.34722 7 5.52778 7 5.75V8.75C7 8.95833 6.93056 9.13542 6.79167 9.28125C6.65278 9.42708 6.47222 9.5 6.25 9.5H3.75C3.52778 9.5 3.34722 9.42708 3.20833 9.28125C3.06944 9.13542 3 8.95833 3 8.75ZM8.75 9.5C8.54167 9.5 8.36458 9.42708 8.21875 9.28125C8.07292 9.13542 8 8.95833 8 8.75V5.75C8 5.52778 8.07292 5.34722 8.21875 5.20833C8.36458 5.06944 8.54167 5 8.75 5H11.25C11.4722 5 11.6528 5.06944 11.7917 5.20833C11.9306 5.34722 12 5.52778 12 5.75V8.75C12 8.95833 11.9306 9.13542 11.7917 9.28125C11.6528 9.42708 11.4722 9.5 11.25 9.5H8.75ZM13.75 9.5C13.5278 9.5 13.3472 9.42708 13.2083 9.28125C13.0694 9.13542 13 8.95833 13 8.75V5.75C13 5.52778 13.0694 5.34722 13.2083 5.20833C13.3472 5.06944 13.5278 5 13.75 5H16.25C16.4722 5 16.6528 5.06944 16.7917 5.20833C16.9306 5.34722 17 5.52778 17 5.75V8.75C17 8.95833 16.9306 9.13542 16.7917 9.28125C16.6528 9.42708 16.4722 9.5 16.25 9.5H13.75ZM6.25 15H3.75C3.52778 15 3.34722 14.9271 3.20833 14.7812C3.06944 14.6354 3 14.4583 3 14.25V11.25C3 11.0278 3.06944 10.8472 3.20833 10.7083C3.34722 10.5694 3.52778 10.5 3.75 10.5H6.25C6.47222 10.5 6.65278 10.5694 6.79167 10.7083C6.93056 10.8472 7 11.0278 7 11.25V14.25C7 14.4583 6.93056 14.6354 6.79167 14.7812C6.65278 14.9271 6.47222 15 6.25 15ZM8.75 15C8.54167 15 8.36458 14.9271 8.21875 14.7812C8.07292 14.6354 8 14.4583 8 14.25V11.25C8 11.0278 8.07292 10.8472 8.21875 10.7083C8.36458 10.5694 8.54167 10.5 8.75 10.5H11.25C11.4722 10.5 11.6528 10.5694 11.7917 10.7083C11.9306 10.8472 12 11.0278 12 11.25V14.25C12 14.4583 11.9306 14.6354 11.7917 14.7812C11.6528 14.9271 11.4722 15 11.25 15H8.75ZM13.75 15C13.5278 15 13.3472 14.9271 13.2083 14.7812C13.0694 14.6354 13 14.4583 13 14.25V11.25C13 11.0278 13.0694 10.8472 13.2083 10.7083C13.3472 10.5694 13.5278 10.5 13.75 10.5H16.25C16.4722 10.5 16.6528 10.5694 16.7917 10.7083C16.9306 10.8472 17 11.0278 17 11.25V14.25C17 14.4583 16.9306 14.6354 16.7917 14.7812C16.6528 14.9271 16.4722 15 16.25 15H13.75Z" fill="#8696AD"/>
                        </g>
                    </svg>
                    
                        
                </div>

                <div class="lobby-events__sort-list-wrapper">
                    <component__sort_list :dataList="valueList" />
                </div>

            </div>
        </div>

        <div class="lobby-events__body">

            <component__event_cat_slider v-if="categorySliderView" :categoryList="categoryList" />

            <component__lobby_category />

            <component__lobby_category />

            <component__lobby_category />

            <div class="lobby-events__body-btn-wrapper">
                <button class="btnV1">Смотреть все</button>
            </div>

        </div>

    </div>
</template>

<script >


  import component__lobby_category from '@/components/box/lobby-category.vue'
  import component__event_cat_slider from '@/components/box/event-cat-slider.vue'

  import component__sort_list from '@/components/box/sort-list.vue'
  

  
  
  export default {
  
      data() {
          return {


            valueList: [
                {'name':'Победитель'},
                {'name':'Тотал'},
                {'name':'Фора'},
            ],

            categoryList: [
                {'name': 'Футбол'},
                {'name': 'Теннис'},
                {'name': 'Баскетбол'},
                {'name': 'Хоккей С Шайбой'},
                {'name': 'Настольный'},
                {'name': 'Крикет'},
                {'name': 'ММА'},
                {'name': 'Counter-Strike 2'},
                {'name': 'Австралийский Футбол'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
                {'name': 'Теннис'},
            ],

            viewStatusStroke:false,
            

            
          }
      },


      props:{
        categorySliderView: Boolean,
        clasterTitle: String,
        clasterTitleIcon: String,
      },
  
      components: {
        component__event_cat_slider,
        component__lobby_category,
        component__sort_list
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