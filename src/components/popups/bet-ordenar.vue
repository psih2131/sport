<template>
    <div class="popup-aside__bet-ordenar bet-ordenar" :class="{'bet-ordenar_close-status':activStatus == false}">
        <div class="bet-ordenar__header">
            <div class="bet-ordenar__heder-title">
                <div class="bet-ordenar__live" v-if="liveStatus">Live</div>
                <p class="bet-ordenar__text">Ханшин Тайгерз -  Токио Якульт Сваллоус</p>
            </div>
            <div class="bet-ordenar__close-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2084_7687" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_2084_7687)">
                    <path d="M9.99924 8.84828L14.1441 4.70339C14.2969 4.55061 14.4914 4.47422 14.7275 4.47422C14.9636 4.47422 15.158 4.55061 15.3108 4.70339C15.4636 4.85616 15.54 5.05061 15.54 5.28672C15.54 5.52283 15.4636 5.71727 15.3108 5.87005L11.1659 10.0149L15.3172 14.1454C15.47 14.2982 15.5464 14.4926 15.5464 14.7288C15.5464 14.9649 15.47 15.1593 15.3172 15.3121C15.1644 15.4649 14.97 15.5413 14.7339 15.5413C14.4978 15.5413 14.3033 15.4649 14.1506 15.3121L9.99924 11.1608L5.87302 15.3078C5.72024 15.4606 5.5258 15.537 5.28969 15.537C5.05358 15.537 4.85913 15.4606 4.70635 15.3078C4.53969 15.1412 4.45635 14.9432 4.45635 14.7141C4.45635 14.4849 4.53969 14.2939 4.70635 14.1412L8.85341 10.0149L4.71062 5.87215C4.55784 5.71937 4.48145 5.52493 4.48145 5.28882C4.48145 5.05271 4.55784 4.85826 4.71062 4.70549C4.87728 4.53882 5.0752 4.45549 5.30436 4.45549C5.53353 4.45549 5.7245 4.53882 5.87728 4.70549L9.99924 8.84828Z" fill="#8696AD"/>
                    </g>
                </svg> 
            </div>
        </div>

        <div class="bet-ordenar__body">
            <p class="bet-ordenar__winner">Победитель</p>
            <div class="bet-ordenar__row">
                <p class="bet-ordenar__winner-name">Ханшин Тайгерз</p>
                <div class="bet-ordenar__cof-wrapper" v-if="activStatus">

                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.64365 10.4437L5.9789 7.77764C5.94215 7.74076 5.91459 7.70089 5.89621 7.65801C5.87784 7.61514 5.86865 7.57183 5.86865 7.52808C5.86865 7.44058 5.89959 7.36401 5.96147 7.29839C6.02334 7.23276 6.1049 7.19995 6.20615 7.19995H11.7937C11.8949 7.19995 11.9765 7.2337 12.0383 7.3012C12.1002 7.3687 12.1312 7.44745 12.1312 7.53745C12.1312 7.54995 12.0944 7.62976 12.0209 7.77689L9.35615 10.4437C9.30615 10.4937 9.2499 10.5312 9.1874 10.5562C9.1249 10.5812 9.0624 10.5937 8.9999 10.5937C8.9374 10.5937 8.8749 10.5812 8.8124 10.5562C8.7499 10.5312 8.69365 10.4937 8.64365 10.4437Z" fill="#FA305C"/>
                    </svg>
                        
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.20615 10.8C6.1049 10.8 6.02334 10.7662 5.96147 10.6987C5.89959 10.6312 5.86865 10.5525 5.86865 10.4625C5.86865 10.45 5.9054 10.3702 5.9789 10.2231L8.64365 7.55625C8.69365 7.50625 8.7499 7.46875 8.8124 7.44375C8.8749 7.41875 8.9374 7.40625 8.9999 7.40625C9.0624 7.40625 9.1249 7.41875 9.1874 7.44375C9.2499 7.46875 9.30615 7.50625 9.35615 7.55625L12.0209 10.2223C12.0577 10.2592 12.0852 10.2991 12.1036 10.3419C12.122 10.3848 12.1312 10.4281 12.1312 10.4719C12.1312 10.5594 12.1002 10.6359 12.0383 10.7016C11.9765 10.7672 11.8949 10.8 11.7937 10.8H6.20615Z" fill="#00BD71"/>
                    </svg>
                        
                    <div class="bet-ordenar__cof">1,30</div>
                </div>

                <div v-else class="bet-ordenar__close-warning">
                    Закрытые
                </div>
            </div>

            <div class="bet-ordenar__money-row">
                <div class="bet-ordenar__money-input-wrapper">
                    <input v-if="activStatus" v-model="moneyBetValue" type="text" class="bet-ordenar__money-input">

                    <input v-else v-model="moneyBetValue" readonly type="text" class="bet-ordenar__money-input">

                    <div class="bet-ordenar__money-icon">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2084_7420)">
                            <g clip-path="url(#clip1_2084_7420)">
                            <path d="M17.4734 10.9746C16.383 15.3477 11.9533 18.0091 7.57922 16.9186C3.20692 15.8283 0.545221 11.3988 1.63613 7.02596C2.72601 2.65234 7.15571 -0.00933075 11.5285 1.08095C15.9024 2.17123 18.5638 6.60122 17.4734 10.9746Z" fill="#26A17B"/>
                            <path d="M2.37881 7.21133C3.36649 3.24787 7.38086 0.835628 11.3435 1.82365C15.3072 2.81168 17.7191 6.82629 16.731 10.7896C15.7429 14.7525 11.7286 17.1645 7.7645 16.1762C3.80229 15.1881 1.39024 11.174 2.37881 7.21133Z" stroke="white" stroke-opacity="0.24" stroke-width="2.44892"/>
                            <g style="mix-blend-mode:screen" opacity="0.3">
                            <path d="M17.2298 6.22637L1.49592 10.3087C1.32318 9.2478 1.35849 8.13518 1.63515 7.0262C2.72504 2.65258 7.15474 -0.00908571 11.5275 1.08119C14.2672 1.76413 16.3351 3.75743 17.2298 6.22637Z" fill="white"/>
                            </g>
                            <path d="M15.9874 10.6046C15.1014 14.1577 11.5023 16.3201 7.94834 15.4341C4.39585 14.5482 2.23321 10.9493 3.11957 7.39641C4.0051 3.8429 7.60424 1.68031 11.1571 2.56615C14.7109 3.45199 16.8733 7.05132 15.9874 10.6046Z" fill="#26A17B"/>
                            <path d="M13.6352 8.99866C13.6352 8.48393 12.2347 8.05447 10.3735 7.95539L10.3733 7.13529H12.6972V5.42847H6.34263V7.13529H8.66637V7.95942C6.83907 8.06529 5.47217 8.49025 5.47217 8.99866C5.47217 9.50712 6.83907 9.93213 8.66637 10.0378V12.9828H10.3733V10.0418C12.2347 9.94297 13.6352 9.51337 13.6352 8.99866ZM9.55367 9.50571C7.55592 9.50571 5.93637 9.19651 5.93637 8.81489C5.93637 8.49173 7.09769 8.22044 8.66637 8.14496V8.33947L8.66655 9.13654C8.94938 9.1524 9.24662 9.16072 9.55367 9.16072C9.83642 9.16072 10.111 9.15353 10.3735 9.14036V8.142C11.9762 8.21286 13.1711 8.48699 13.1711 8.81489C13.171 9.19651 11.5514 9.50571 9.55367 9.50571Z" fill="white"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0_2084_7420">
                            <rect width="18" height="18" fill="white" transform="translate(0.553711)"/>
                            </clipPath>
                            <clipPath id="clip1_2084_7420">
                            <rect width="18" height="18" fill="white" transform="translate(0.553711)"/>
                            </clipPath>
                            </defs>
                        </svg>
                            
                    </div>
                </div>

                <div class="bet-ordenar__money-pay-wrapper">
                    <p class="bet-ordenar__money-pay-title">Оценочная выплата</p>
                    <div class="bet-ordenar__money-value">
                        0.00
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2084_7434)">
                            <g clip-path="url(#clip1_2084_7434)">
                            <path d="M16.9197 10.9746C15.8293 15.3477 11.3996 18.0091 7.02551 16.9186C2.65321 15.8283 -0.00849009 11.3988 1.08242 7.02596C2.1723 2.65234 6.602 -0.00933075 10.9748 1.08095C15.3486 2.17123 18.0101 6.60122 16.9197 10.9746Z" fill="#26A17B"/>
                            <path d="M1.8251 7.21133C2.81278 3.24787 6.82715 0.835628 10.7898 1.82365C14.7535 2.81168 17.1654 6.82629 16.1773 10.7896C15.1892 14.7525 11.1749 17.1645 7.21079 16.1762C3.24858 15.1881 0.836526 11.174 1.8251 7.21133Z" stroke="white" stroke-opacity="0.24" stroke-width="2.44892"/>
                            <g style="mix-blend-mode:screen" opacity="0.3">
                            <path d="M16.6761 6.22637L0.942208 10.3087C0.769471 9.2478 0.80478 8.13518 1.08144 7.0262C2.17132 2.65258 6.60103 -0.00908571 10.9738 1.08119C13.7135 1.76413 15.7814 3.75743 16.6761 6.22637Z" fill="white"/>
                            </g>
                            <path d="M15.4336 10.6046C14.5477 14.1577 10.9486 16.3201 7.39463 15.4341C3.84214 14.5482 1.6795 10.9493 2.56586 7.39641C3.45139 3.8429 7.05053 1.68031 10.6034 2.56615C14.1572 3.45199 16.3196 7.05132 15.4336 10.6046Z" fill="#26A17B"/>
                            <path d="M13.0815 8.99866C13.0815 8.48393 11.6809 8.05447 9.81974 7.95539L9.81959 7.13529H12.1435V5.42847H5.78892V7.13529H8.11266V7.95942C6.28536 8.06529 4.91846 8.49025 4.91846 8.99866C4.91846 9.50712 6.28536 9.93213 8.11266 10.0378V12.9828H9.81959V10.0418C11.6809 9.94297 13.0815 9.51337 13.0815 8.99866ZM8.99996 9.50571C7.00221 9.50571 5.38265 9.19651 5.38265 8.81489C5.38265 8.49173 6.54398 8.22044 8.11266 8.14496V8.33947L8.11284 9.13654C8.39567 9.1524 8.6929 9.16072 8.99996 9.16072C9.28271 9.16072 9.5573 9.15353 9.81976 9.14036V8.142C11.4225 8.21286 12.6173 8.48699 12.6173 8.81489C12.6173 9.19651 10.9977 9.50571 8.99996 9.50571Z" fill="white"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0_2084_7434">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_2084_7434">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                            
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>



<script >


// import component__header from '@/components/header.vue'





export default {

    data() {
        return {

            moneyBetValue: 10,
        }
    },

    props: {
        liveStatus: Boolean,
        activStatus: Boolean
    },

    components: {
  
        
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