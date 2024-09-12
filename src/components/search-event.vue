<template>
    <div class="search-event-component" v-click-outside="handleClickOutside">
        <div class="search-event-component__back-mob-wrapper">
            <div class="search-event-component__back" v-if="openStatusSearch" @click="openStatusSearchChange(false) ">
                <div class="search-event-component__back-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_20_23626" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_20_23626)">
                        <path d="M8.99967 9.99984L12.2497 13.2498C12.4025 13.4026 12.4788 13.5971 12.4788 13.8332C12.4788 14.0693 12.4025 14.2637 12.2497 14.4165C12.0969 14.5693 11.9025 14.6457 11.6663 14.6457C11.4302 14.6457 11.2358 14.5693 11.083 14.4165L7.24967 10.5832C7.16634 10.4998 7.10731 10.4096 7.07259 10.3123C7.03787 10.2151 7.02051 10.1109 7.02051 9.99984C7.02051 9.88873 7.03787 9.78456 7.07259 9.68734C7.10731 9.59012 7.16634 9.49984 7.24967 9.4165L11.083 5.58317C11.2358 5.43039 11.4302 5.354 11.6663 5.354C11.9025 5.354 12.0969 5.43039 12.2497 5.58317C12.4025 5.73595 12.4788 5.93039 12.4788 6.1665C12.4788 6.40261 12.4025 6.59706 12.2497 6.74984L8.99967 9.99984Z" fill="#99A4B0"/>
                        </g>
                    </svg>
                        
                </div>
                Поиск
            </div>
        </div>
        
        <div class="search-event-component__field-wrapper">
            <div class="search-event-component__icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2001_652" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_2001_652)">
                    <path d="M7.91667 13.3333C6.40278 13.3333 5.12153 12.809 4.07292 11.7604C3.02431 10.7118 2.5 9.43056 2.5 7.91667C2.5 6.40278 3.02431 5.12153 4.07292 4.07292C5.12153 3.02431 6.40278 2.5 7.91667 2.5C9.43056 2.5 10.7118 3.02431 11.7604 4.07292C12.809 5.12153 13.3333 6.40278 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L16.9167 15.75C17.0694 15.9028 17.1458 16.0972 17.1458 16.3333C17.1458 16.5694 17.0694 16.7639 16.9167 16.9167C16.7639 17.0694 16.5694 17.1458 16.3333 17.1458C16.0972 17.1458 15.9028 17.0694 15.75 16.9167L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333ZM7.91667 11.6667C8.95833 11.6667 9.84375 11.3021 10.5729 10.5729C11.3021 9.84375 11.6667 8.95833 11.6667 7.91667C11.6667 6.875 11.3021 5.98958 10.5729 5.26042C9.84375 4.53125 8.95833 4.16667 7.91667 4.16667C6.875 4.16667 5.98958 4.53125 5.26042 5.26042C4.53125 5.98958 4.16667 6.875 4.16667 7.91667C4.16667 8.95833 4.53125 9.84375 5.26042 10.5729C5.98958 11.3021 6.875 11.6667 7.91667 11.6667Z" fill="#8696AD"/>
                    </g>
                </svg>    
            </div>

            <div class="search-event-component__remove-search-text" @click="clearSearchField" v-if="searchValue && searchValue != ''">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2001_6419" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_2001_6419)">
                    <path d="M9.99973 8.84852L14.1446 4.70363C14.2974 4.55085 14.4918 4.47446 14.728 4.47446C14.9641 4.47446 15.1585 4.55085 15.3113 4.70363C15.4641 4.85641 15.5405 5.05085 15.5405 5.28696C15.5405 5.52307 15.4641 5.71752 15.3113 5.8703L11.1664 10.0152L15.3177 14.1457C15.4705 14.2984 15.5469 14.4929 15.5469 14.729C15.5469 14.9651 15.4705 15.1596 15.3177 15.3123C15.1649 15.4651 14.9705 15.5415 14.7344 15.5415C14.4983 15.5415 14.3038 15.4651 14.151 15.3123L9.99973 11.161L5.87351 15.3081C5.72073 15.4608 5.52629 15.5372 5.29017 15.5372C5.05406 15.5372 4.85962 15.4608 4.70684 15.3081C4.54017 15.1414 4.45684 14.9435 4.45684 14.7143C4.45684 14.4852 4.54017 14.2942 4.70684 14.1414L8.85389 10.0152L4.7111 5.8724C4.55832 5.71962 4.48194 5.52518 4.48194 5.28906C4.48194 5.05295 4.55832 4.85851 4.7111 4.70573C4.87777 4.53907 5.07569 4.45573 5.30485 4.45573C5.53402 4.45573 5.72499 4.53907 5.87777 4.70573L9.99973 8.84852Z" fill="#8696AD"/>
                    </g>
                </svg>                    
            </div>
            <input type="text" class="search-event-component__field" 
            v-model="searchValue"
            @focus="openStatusSearchChange(true)" 
            placeholder="Поиск события">
        </div>


        <SlideUpDown :active="openStatusSearch" :duration="500" class="search-result-wrapper">
            <div class="search-event-component__result-wrapper search-result">

                <div class="search-result__set-values">
                    <ul class="search-result__set-values-nav">
                        <li class="search-result__set-values-nav-element "
                        v-for="(item, index) in searchCat" :key="index"
                        @click="currentIndexCat = index"
                        :class="{'search-result__set-values-nav-element_activ':currentIndexCat == index}"
                        >
                            <p class="search-result__set-values-nav-element-title ">{{item.name}}</p>
                            <span class="search-result__set-values-nav-element-counter">{{item.counter}}</span>
                        </li>

                    </ul>

                    <div class="search-result__body">
                        <article class="search-result__result-elemen">
                            <p class="search-result__result-elemen-title">Родез Авейрон - Мец</p>
                            <p class="search-result__result-elemen-date">Пт, 23 Авг. 21:00</p>
                            <div class="search-result__result-elemen-row">
                                <div class="search-result__result-elemen-category">
                                    <a  class="search-result__result-elemen-category-link" href="">Крикет</a>
                                     / 
                                    <a class="search-result__result-elemen-category-link" href="">Международный</a> 
                                     / 
                                    <a  class="search-result__result-elemen-category-link" href="">Test Series England vs Sri Lanka</a>
                                </div>
                                <p class="search-result__result-elemen-counter">+5</p>
                            </div>
                        </article>

                        <article class="search-result__result-elemen">
                            <p class="search-result__result-elemen-title">Родез Авейрон - Мец</p>
                            <p class="search-result__result-elemen-date">Пт, 23 Авг. 21:00</p>
                            <div class="search-result__result-elemen-row">
                                <div class="search-result__result-elemen-category">
                                    <a  class="search-result__result-elemen-category-link" href="">Крикет</a>
                                     / 
                                    <a class="search-result__result-elemen-category-link" href="">Международный</a> 
                                     / 
                                    <a  class="search-result__result-elemen-category-link" href="">Test Series England vs Sri Lanka</a>
                                </div>
                                <p class="search-result__result-elemen-counter">+5</p>
                            </div>
                        </article>

                        <article class="search-result__result-elemen">
                            <p class="search-result__result-elemen-title">Родез Авейрон - Мец</p>
                            <p class="search-result__result-elemen-date">Пт, 23 Авг. 21:00</p>
                            <div class="search-result__result-elemen-row">
                                <div class="search-result__result-elemen-category">
                                    <a  class="search-result__result-elemen-category-link" href="">Крикет</a>
                                     / 
                                    <a class="search-result__result-elemen-category-link" href="">Международный</a> 
                                     / 
                                    <a  class="search-result__result-elemen-category-link" href="">Test Series England vs Sri Lanka</a>
                                </div>
                                <p class="search-result__result-elemen-counter">+5</p>
                            </div>
                        </article>
                    </div>
                </div>


                <!-- no data layout -->
                <div class="search-result__no-data">
                    <p class="search-result__no-data-text">Для поиска необходимо ввести минимум 3 символа.</p>
                    <div class="search-result__last-query-title-row">
                        <p class="search-result__last-query-title">Недавние запросы</p>
                        <p class="search-result__remove-search">Очистить поле поиска (5)</p>
                    </div>
                    <div class="search-result__last-query-teg-row">
                        <div class="search-result__last-query-teg">
                            <p class="search-result__last-query-teg-text-link">FC Barselona</p>
                            
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2001_21915" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                <rect width="18" height="18" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_2001_21915)">
                                <path d="M8.99975 7.96362L12.7302 4.23322C12.8677 4.09572 13.0427 4.02697 13.2552 4.02697C13.4677 4.02697 13.6427 4.09572 13.7802 4.23322C13.9177 4.37072 13.9864 4.54572 13.9864 4.75822C13.9864 4.97072 13.9177 5.14572 13.7802 5.28322L10.0498 9.01362L13.7859 12.7311C13.9234 12.8686 13.9922 13.0436 13.9922 13.2561C13.9922 13.4686 13.9234 13.6436 13.7859 13.7811C13.6484 13.9186 13.4734 13.9873 13.2609 13.9873C13.0484 13.9873 12.8734 13.9186 12.7359 13.7811L8.99975 10.0449L5.28616 13.7772C5.14866 13.9147 4.97366 13.9835 4.76116 13.9835C4.54866 13.9835 4.37366 13.9147 4.23616 13.7772C4.08616 13.6272 4.01116 13.4491 4.01116 13.2428C4.01116 13.0366 4.08616 12.8647 4.23616 12.7272L7.9685 9.01362L4.23999 5.28511C4.10249 5.14761 4.03374 4.97261 4.03374 4.76011C4.03374 4.54761 4.10249 4.37261 4.23999 4.23511C4.38999 4.08511 4.56812 4.01011 4.77437 4.01011C4.98062 4.01011 5.15249 4.08511 5.28999 4.23511L8.99975 7.96362Z" fill="#8696AD"/>
                                </g>
                            </svg>
                                
                        </div>

                        <div class="search-result__last-query-teg">
                            <p class="search-result__last-query-teg-text-link">FC Barselona</p>
                            
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2001_21915" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                <rect width="18" height="18" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_2001_21915)">
                                <path d="M8.99975 7.96362L12.7302 4.23322C12.8677 4.09572 13.0427 4.02697 13.2552 4.02697C13.4677 4.02697 13.6427 4.09572 13.7802 4.23322C13.9177 4.37072 13.9864 4.54572 13.9864 4.75822C13.9864 4.97072 13.9177 5.14572 13.7802 5.28322L10.0498 9.01362L13.7859 12.7311C13.9234 12.8686 13.9922 13.0436 13.9922 13.2561C13.9922 13.4686 13.9234 13.6436 13.7859 13.7811C13.6484 13.9186 13.4734 13.9873 13.2609 13.9873C13.0484 13.9873 12.8734 13.9186 12.7359 13.7811L8.99975 10.0449L5.28616 13.7772C5.14866 13.9147 4.97366 13.9835 4.76116 13.9835C4.54866 13.9835 4.37366 13.9147 4.23616 13.7772C4.08616 13.6272 4.01116 13.4491 4.01116 13.2428C4.01116 13.0366 4.08616 12.8647 4.23616 12.7272L7.9685 9.01362L4.23999 5.28511C4.10249 5.14761 4.03374 4.97261 4.03374 4.76011C4.03374 4.54761 4.10249 4.37261 4.23999 4.23511C4.38999 4.08511 4.56812 4.01011 4.77437 4.01011C4.98062 4.01011 5.15249 4.08511 5.28999 4.23511L8.99975 7.96362Z" fill="#8696AD"/>
                                </g>
                            </svg>
                                
                        </div>

                        <div class="search-result__last-query-teg">
                            <p class="search-result__last-query-teg-text-link">FC Barselona</p>
                            
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2001_21915" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                <rect width="18" height="18" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_2001_21915)">
                                <path d="M8.99975 7.96362L12.7302 4.23322C12.8677 4.09572 13.0427 4.02697 13.2552 4.02697C13.4677 4.02697 13.6427 4.09572 13.7802 4.23322C13.9177 4.37072 13.9864 4.54572 13.9864 4.75822C13.9864 4.97072 13.9177 5.14572 13.7802 5.28322L10.0498 9.01362L13.7859 12.7311C13.9234 12.8686 13.9922 13.0436 13.9922 13.2561C13.9922 13.4686 13.9234 13.6436 13.7859 13.7811C13.6484 13.9186 13.4734 13.9873 13.2609 13.9873C13.0484 13.9873 12.8734 13.9186 12.7359 13.7811L8.99975 10.0449L5.28616 13.7772C5.14866 13.9147 4.97366 13.9835 4.76116 13.9835C4.54866 13.9835 4.37366 13.9147 4.23616 13.7772C4.08616 13.6272 4.01116 13.4491 4.01116 13.2428C4.01116 13.0366 4.08616 12.8647 4.23616 12.7272L7.9685 9.01362L4.23999 5.28511C4.10249 5.14761 4.03374 4.97261 4.03374 4.76011C4.03374 4.54761 4.10249 4.37261 4.23999 4.23511C4.38999 4.08511 4.56812 4.01011 4.77437 4.01011C4.98062 4.01011 5.15249 4.08511 5.28999 4.23511L8.99975 7.96362Z" fill="#8696AD"/>
                                </g>
                            </svg>
                                
                        </div>
                    </div>
                </div>


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
            searchValue: '',
            searchCat:[
                {'name':'Футбол','counter':'21'},
                {'name':'Австралийский Футбол','counter':'6'},
                {'name':'Американский','counter':'2'},
            ],

            currentIndexCat: 0,
        }
    },

    props: {
        
    },

    components: {
        SlideUpDown,
    },

    methods: {
        handleClickOutside(){
            console.log('gg')
            this.openStatusSearch = false

            this.$emit('SearchStatus', this.openStatusSearch)
        },

        openStatusSearchChange(statusValue){
            this.openStatusSearch = statusValue
            this.$emit('SearchStatus', this.openStatusSearch)
        },


        clearSearchField(){
            this.searchValue = ''
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
    