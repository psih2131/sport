<template>
    <div class="popup-aside" :class="{'settings-open': settingStatus}">
        <!-- popup header -->
        <div class="popup-aside__header">
            <div class="popup-aside__header-top">

                <div class="popup-aside__sort-list-wrapper">
                    <component__sort_list :dataList="valueList" />
                </div>


                <div class="popup-aside__close" @click="closePopup()">

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_20_24417" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_20_24417)">
                        <path d="M9.99924 8.8484L14.1441 4.70351C14.2969 4.55073 14.4914 4.47434 14.7275 4.47434C14.9636 4.47434 15.158 4.55073 15.3108 4.70351C15.4636 4.85629 15.54 5.05073 15.54 5.28684C15.54 5.52295 15.4636 5.7174 15.3108 5.87017L11.1659 10.0151L15.3172 14.1455C15.47 14.2983 15.5464 14.4928 15.5464 14.7289C15.5464 14.965 15.47 15.1594 15.3172 15.3122C15.1644 15.465 14.97 15.5414 14.7339 15.5414C14.4978 15.5414 14.3033 15.465 14.1506 15.3122L9.99924 11.1609L5.87302 15.3079C5.72024 15.4607 5.5258 15.5371 5.28969 15.5371C5.05358 15.5371 4.85913 15.4607 4.70635 15.3079C4.53969 15.1413 4.45635 14.9434 4.45635 14.7142C4.45635 14.485 4.53969 14.2941 4.70635 14.1413L8.85341 10.0151L4.71062 5.87227C4.55784 5.7195 4.48145 5.52505 4.48145 5.28894C4.48145 5.05283 4.55784 4.85839 4.71062 4.70561C4.87728 4.53894 5.0752 4.45561 5.30436 4.45561C5.53353 4.45561 5.7245 4.53894 5.87728 4.70561L9.99924 8.8484Z" fill="#8696AD"/>
                        </g>
                    </svg>
                        
                </div>

            </div>

            <div class="popup-aside__header-bottom">
                <nav class="popup-aside__header-nav">
                    <div class="popup-aside__nav-btn" @click="OrdenarStatus = true" :class="{'popup-aside__nav-btn_activ': OrdenarStatus == true}">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8999 10.4H8.0999C7.9299 10.4 7.7874 10.3427 7.6724 10.2281C7.5574 10.1135 7.4999 9.9714 7.4999 9.80195V9.20412C7.4999 9.03467 7.5574 8.89162 7.6724 8.77495C7.7874 8.65828 7.9299 8.59995 8.0999 8.59995H11.8999C12.0699 8.59995 12.2124 8.65723 12.3274 8.77178C12.4424 8.88645 12.4999 9.02851 12.4999 9.19795V9.79578C12.4999 9.96523 12.4424 10.1083 12.3274 10.225C12.2124 10.3416 12.0699 10.4 11.8999 10.4ZM5.8999 10.4H5.0999C4.9299 10.4 4.7874 10.3425 4.6724 10.2276C4.5574 10.1127 4.4999 9.9704 4.4999 9.80062V6.20462C4.4999 6.03484 4.5574 5.89162 4.6724 5.77495C4.7874 5.65828 4.9299 5.59995 5.0999 5.59995H5.8999C6.0699 5.59995 6.2124 5.6574 6.3274 5.77229C6.4424 5.88717 6.4999 6.02951 6.4999 6.19928V9.79529C6.4999 9.96506 6.4424 10.1083 6.3274 10.225C6.2124 10.3416 6.0699 10.4 5.8999 10.4ZM11.8999 7.39995H8.0999C7.9299 7.39995 7.7874 7.34267 7.6724 7.22812C7.5574 7.11345 7.4999 6.9714 7.4999 6.80195V6.20412C7.4999 6.03467 7.5574 5.89162 7.6724 5.77495C7.7874 5.65828 7.9299 5.59995 8.0999 5.59995H11.8999C12.0699 5.59995 12.2124 5.65723 12.3274 5.77178C12.4424 5.88645 12.4999 6.02851 12.4999 6.19795V6.79578C12.4999 6.96523 12.4424 7.10828 12.3274 7.22495C12.2124 7.34162 12.0699 7.39995 11.8999 7.39995ZM13.6999 12.8C14.0299 12.8 14.3124 12.6824 14.5474 12.4473C14.7824 12.2122 14.8999 11.9295 14.8999 11.5993V4.39528C14.8999 4.06506 14.7824 3.78328 14.5474 3.54995C14.3124 3.31662 14.0299 3.19995 13.6999 3.19995H3.2999C2.9699 3.19995 2.6874 3.31751 2.4524 3.55262C2.2174 3.78773 2.0999 4.0704 2.0999 4.40062V11.6046C2.0999 11.9348 2.2174 12.2166 2.4524 12.45C2.6874 12.6833 2.9699 12.8 3.2999 12.8H13.6999Z" fill="white"/>
                            <path d="M4.4999 9.20462V6.80062C4.4999 6.9704 4.5574 7.11273 4.6724 7.22762C4.7874 7.34251 4.9299 7.39995 5.0999 7.39995H5.8999C6.0699 7.39995 6.2124 7.34162 6.3274 7.22495C6.4424 7.10828 6.4999 6.96506 6.4999 6.79529V9.19929C6.4999 9.02951 6.4424 8.88717 6.3274 8.77229C6.2124 8.6574 6.0699 8.59995 5.8999 8.59995H5.0999C4.9299 8.59995 4.7874 8.65828 4.6724 8.77495C4.5574 8.89162 4.4999 9.03484 4.4999 9.20462Z" fill="white"/>
                        </svg>
                        Ординар    
                    </div>

                    <div class="popup-aside__nav-btn" @click="OrdenarStatus = false" :class="{'popup-aside__nav-btn_activ': OrdenarStatus == false}">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.90013 9.99998H4.80013C4.5668 9.99998 4.39458 9.8972 4.28347 9.69165C4.17236 9.48609 4.17791 9.28331 4.30013 9.08331L8.8168 2.03331C8.90569 1.87776 9.03347 1.77498 9.20013 1.72498C9.3668 1.67498 9.53347 1.67776 9.70013 1.73331C9.8668 1.78887 9.99736 1.89165 10.0918 2.04165C10.1862 2.19165 10.2224 2.35554 10.2001 2.53331L9.70013 6.79998H12.0668C12.3224 6.79998 12.5029 6.91109 12.6085 7.13331C12.714 7.35554 12.689 7.56665 12.5335 7.76665L7.60013 14.0166C7.48902 14.15 7.35291 14.2389 7.1918 14.2833C7.03069 14.3278 6.87236 14.3111 6.7168 14.2333C6.56124 14.1555 6.4418 14.0416 6.35847 13.8916C6.27513 13.7416 6.25013 13.5833 6.28347 13.4166L6.90013 9.99998Z" fill="#70819A"/>
                        </svg>    
                        Экспресс    
                    </div>
                </nav>
            </div>
        </div>



        <!-- Ordenar body -->
        <div class="popup-aside__body popup-aside__ordenar-body" v-if="OrdenarStatus == true">


            <!-- if we have ordenars bets -->
          <div class="popup-aside__body-have-bets">
            <div class="popup-aside__body-clear">
                <div class="popup-aside__body-clear-btn">Очистить всё</div>
            </div>

            <div class="popup-aside__ordenar-body-wrapper">
                <div class="popup-aside__ordenar-body-claster">
                    

                    <!-- ordenars components -->
                    <component__bet_ordenar :activStatus="true" :liveStatus="true"/>

                    <component__bet_ordenar :activStatus="true" :liveStatus="true"/>

                    <component__bet_ordenar :activStatus="true" :liveStatus="true"/>

                    <component__bet_ordenar :activStatus="true" :liveStatus="false" />

                    <component__bet_ordenar :activStatus="false" :liveStatus="false" />
                    
                </div>
            </div>
          </div>
            
            

            <!-- if we dont have ordenars bets-->
    
            <div class="popup-aside__ordenar-body-cleared ordenar-body-cleared">
                <div class="ordenar-body-cleared__box">
                    <div class="ordenar-body-cleared__icon">
                        <svg width="94" height="76" viewBox="0 0 94 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M68.4531 58.8832C68.4531 61.0332 70.1031 62.7665 72.1531 62.7665H76.3365C78.1198 62.7665 79.5698 61.2498 79.5698 59.3832C79.5698 57.3498 78.6865 56.6332 77.3698 56.1665L70.6531 53.8332C69.3365 53.3665 68.4531 52.6498 68.4531 50.6165C68.4531 48.7498 69.9031 47.2332 71.6865 47.2332H75.8698C77.9198 47.2332 79.5698 48.9665 79.5698 51.1165" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M74 45V65" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M74.0026 71.6668C83.2073 71.6668 90.6693 64.2049 90.6693 55.0002C90.6693 45.7954 83.2073 38.3335 74.0026 38.3335C64.7979 38.3335 57.3359 45.7954 57.3359 55.0002C57.3359 64.2049 64.7979 71.6668 74.0026 71.6668Z" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29 26H61" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29 46H52.5" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29 36H59" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M53.7526 64.1668H36.2526C21.6693 64.1668 15.8359 58.3335 15.8359 43.7502V26.2502C15.8359 11.6668 21.6693 5.8335 36.2526 5.8335H53.7526C68.3359 5.8335 74.1693 11.6668 74.1693 26.2502V33.0002" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            
                    </div>
                    <p class="ordenar-body-cleared__title">Купон ставок пустой</p>
                    <p class="ordenar-body-cleared__subtitle">Начните делать ставки сейчас!</p>
                </div>
            </div>
           
            
        </div>



        <!-- express body -->
        <div class="popup-aside__body popup-aside__express-body" v-else>

             <!-- if we have express bets -->
            <div class="popup-aside__body-have-bets">
                <div class="popup-aside__body-clear">
                    <div class="popup-aside__body-clear-btn">Очистить всё</div>
                </div>

                <div class="popup-aside__expres-body-wrapper">
                    <div class="popup-aside__expres-body-claster">


                        <div class="popup-aside__expres-body-claster-element">
                            <!-- expres bets components -->
                            <component__bet_express :activStatus="true" />

                            <component__bet_express :activStatus="true" />

                            <component__bet_express :activStatus="true" />
                            <component__bet_express :activStatus="true" />

                            <component__bet_express :activStatus="true" />

                            <component__bet_express :activStatus="true" />

                            <component__bet_express :activStatus="false" />

                        </div>

                        

                    </div>
                </div>
            </div>



            <!-- if we dont have express bets-->
    
            <div class="popup-aside__ordenar-body-cleared ordenar-body-cleared express-body-cleared">
                <div class="ordenar-body-cleared__box">
                    <div class="ordenar-body-cleared__icon">
                        <svg width="94" height="76" viewBox="0 0 94 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M68.4531 58.8832C68.4531 61.0332 70.1031 62.7665 72.1531 62.7665H76.3365C78.1198 62.7665 79.5698 61.2498 79.5698 59.3832C79.5698 57.3498 78.6865 56.6332 77.3698 56.1665L70.6531 53.8332C69.3365 53.3665 68.4531 52.6498 68.4531 50.6165C68.4531 48.7498 69.9031 47.2332 71.6865 47.2332H75.8698C77.9198 47.2332 79.5698 48.9665 79.5698 51.1165" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M74 45V65" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M74.0026 71.6668C83.2073 71.6668 90.6693 64.2049 90.6693 55.0002C90.6693 45.7954 83.2073 38.3335 74.0026 38.3335C64.7979 38.3335 57.3359 45.7954 57.3359 55.0002C57.3359 64.2049 64.7979 71.6668 74.0026 71.6668Z" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29 26H61" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29 46H52.5" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29 36H59" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M53.7526 64.1668H36.2526C21.6693 64.1668 15.8359 58.3335 15.8359 43.7502V26.2502C15.8359 11.6668 21.6693 5.8335 36.2526 5.8335H53.7526C68.3359 5.8335 74.1693 11.6668 74.1693 26.2502V33.0002" stroke="#33455D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            
                    </div>
                    <p class="ordenar-body-cleared__title">Купон ставок пустой</p>
                    <p class="ordenar-body-cleared__subtitle">Начните делать ставки сейчас!</p>
                </div>
            </div>


        </div>




        <!-- popup footer -->
        <div class="popup-aside__footer">

            <div class="popup-aside__footer-ordenar-data-wrapper footer-ordenar-data-wrapper" v-if="OrdenarStatus">
                <div class="footer-ordenar-data-wrapper__row">
                    <div class="footer-ordenar-data-wrapper__name">Общая ставка</div>
                    <div class="footer-ordenar-data-wrapper__value">

                        100.000.000

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2046_8329)">
                            <g clip-path="url(#clip1_2046_8329)">
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
                            <clipPath id="clip0_2046_8329">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_2046_8329">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                            
                    </div>
                </div>

                <div class="footer-ordenar-data-wrapper__row">
                    <div class="footer-ordenar-data-wrapper__name">Оценочная выплата</div>
                    <div class="footer-ordenar-data-wrapper__value">

                        100.000.000

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2046_8329)">
                            <g clip-path="url(#clip1_2046_8329)">
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
                            <clipPath id="clip0_2046_8329">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_2046_8329">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                            
                    </div>
                </div>
            </div>


            <div v-else class="popup-aside__footer-expres-data-wrapper footer-expres-data-wrapper">
               
                <div class="bet-ordenar__money-input-wrapper footer-expres-data-wrapper__input">
                    <input value="10" type="text" class="bet-ordenar__money-input">
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

                <div class="footer-expres-data-wrapper__data-row">
                    <p class="footer-expres-data-wrapper__data-row-name">Общий коэффициент</p>
                    <div class="footer-expres-data-wrapper__data-row-value">12,00</div>
                </div>

                <div class="footer-expres-data-wrapper__data-row">
                    <p class="footer-expres-data-wrapper__data-row-name">Оценочная выплата</p>
                    <div class="footer-expres-data-wrapper__data-row-value">
                        ARS 100.000.000
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2084_8665)">
                            <g clip-path="url(#clip1_2084_8665)">
                            <path d="M16.9197 10.9746C15.8293 15.3477 11.3996 18.0091 7.02551 16.9186C2.65321 15.8283 -0.00849009 11.3988 1.08242 7.02596C2.1723 2.65234 6.602 -0.00933075 10.9748 1.08095C15.3486 2.17123 18.0101 6.60122 16.9197 10.9746Z" fill="#26A17B"/>
                            <path d="M1.8251 7.21133C2.81278 3.24787 6.82715 0.835628 10.7898 1.82365C14.7535 2.81168 17.1654 6.82629 16.1773 10.7896C15.1892 14.7525 11.1749 17.1645 7.21079 16.1762C3.24858 15.1881 0.836526 11.174 1.8251 7.21133Z" stroke="white" stroke-opacity="0.24" stroke-width="2.44892"/>
                            <g style="mix-blend-mode:screen" opacity="0.3">
                            <path d="M16.6761 6.22637L0.942208 10.3087C0.769471 9.2478 0.80478 8.13518 1.08144 7.0262C2.17132 2.65258 6.60103 -0.00908571 10.9738 1.08119C13.7135 1.76413 15.7814 3.75743 16.6761 6.22637Z" fill="white"/>
                            </g>
                            <path d="M15.4336 10.6046C14.5477 14.1577 10.9486 16.3201 7.39463 15.4341C3.84214 14.5482 1.6795 10.9493 2.56586 7.39641C3.45139 3.8429 7.05053 1.68031 10.6034 2.56615C14.1572 3.45199 16.3196 7.05132 15.4336 10.6046Z" fill="#26A17B"/>
                            <path d="M13.082 8.99866C13.082 8.48393 11.6814 8.05447 9.82023 7.95539L9.82007 7.13529H12.144V5.42847H5.78941V7.13529H8.11315V7.95942C6.28585 8.06529 4.91895 8.49025 4.91895 8.99866C4.91895 9.50712 6.28585 9.93213 8.11315 10.0378V12.9828H9.82007V10.0418C11.6814 9.94297 13.082 9.51337 13.082 8.99866ZM9.00045 9.50571C7.0027 9.50571 5.38314 9.19651 5.38314 8.81489C5.38314 8.49173 6.54447 8.22044 8.11315 8.14496V8.33947L8.11333 9.13654C8.39616 9.1524 8.69339 9.16072 9.00045 9.16072C9.2832 9.16072 9.55778 9.15353 9.82025 9.14036V8.142C11.423 8.21286 12.6178 8.48699 12.6178 8.81489C12.6178 9.19651 10.9982 9.50571 9.00045 9.50571Z" fill="white"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0_2084_8665">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_2084_8665">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                            
                    </div>
                </div>

            </div>





            <div class="popup-aside__footer-btn-container">
                <button class="btnV2">Разместить ординар</button>
            </div>
            <div class="popup-aside__settings-button" @click="settingStatus = true">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52057 18.3334C9.14557 18.3334 8.82266 18.2084 8.55182 17.9584C8.28099 17.7084 8.1178 17.4029 8.06224 17.0417L7.87474 15.6667C7.69418 15.5973 7.52405 15.514 7.36432 15.4167C7.2046 15.3195 7.04835 15.2154 6.89557 15.1042L5.60391 15.6459C5.25668 15.7987 4.90946 15.8126 4.56224 15.6876C4.21502 15.5626 3.94418 15.3404 3.74974 15.0209L2.77057 13.3126C2.57613 12.9931 2.52057 12.6529 2.60391 12.2917C2.68724 11.9306 2.87474 11.632 3.16641 11.3959L4.27057 10.5626C4.25668 10.4654 4.24974 10.3716 4.24974 10.2813V9.71883C4.24974 9.62855 4.25668 9.5348 4.27057 9.43758L3.16641 8.60425C2.87474 8.36814 2.68724 8.06953 2.60391 7.70841C2.52057 7.3473 2.57613 7.00703 2.77057 6.68758L3.74974 4.97925C3.94418 4.6598 4.21502 4.43758 4.56224 4.31258C4.90946 4.18758 5.25668 4.20147 5.60391 4.35425L6.89557 4.89591C7.04835 4.7848 7.20807 4.68064 7.37474 4.58341C7.54141 4.48619 7.70807 4.40286 7.87474 4.33341L8.06224 2.95841C8.1178 2.5973 8.28099 2.29175 8.55182 2.04175C8.82266 1.79175 9.14557 1.66675 9.52057 1.66675H11.4789C11.8539 1.66675 12.1768 1.79175 12.4477 2.04175C12.7185 2.29175 12.8817 2.5973 12.9372 2.95841L13.1247 4.33341C13.3053 4.40286 13.4754 4.48619 13.6352 4.58341C13.7949 4.68064 13.9511 4.7848 14.1039 4.89591L15.3956 4.35425C15.7428 4.20147 16.09 4.18758 16.4372 4.31258C16.7845 4.43758 17.0553 4.6598 17.2497 4.97925L18.2289 6.68758C18.4234 7.00703 18.4789 7.3473 18.3956 7.70841C18.3122 8.06953 18.1247 8.36814 17.8331 8.60425L16.7289 9.43758C16.7428 9.5348 16.7497 9.62855 16.7497 9.71883V10.2813C16.7497 10.3716 16.7359 10.4654 16.7081 10.5626L17.8122 11.3959C18.1039 11.632 18.2914 11.9306 18.3747 12.2917C18.4581 12.6529 18.4025 12.9931 18.2081 13.3126L17.2081 15.0209C17.0136 15.3404 16.7428 15.5626 16.3956 15.6876C16.0484 15.8126 15.7011 15.7987 15.3539 15.6459L14.1039 15.1042C13.9511 15.2154 13.7914 15.3195 13.6247 15.4167C13.4581 15.514 13.2914 15.5973 13.1247 15.6667L12.9372 17.0417C12.8817 17.4029 12.7185 17.7084 12.4477 17.9584C12.1768 18.2084 11.8539 18.3334 11.4789 18.3334H9.52057ZM10.5414 12.9167C11.347 12.9167 12.0345 12.632 12.6039 12.0626C13.1734 11.4931 13.4581 10.8056 13.4581 10.0001C13.4581 9.19453 13.1734 8.50703 12.6039 7.93758C12.0345 7.36814 11.347 7.08341 10.5414 7.08341C9.72196 7.08341 9.03099 7.36814 8.46849 7.93758C7.90599 8.50703 7.62474 9.19453 7.62474 10.0001C7.62474 10.8056 7.90599 11.4931 8.46849 12.0626C9.03099 12.632 9.72196 12.9167 10.5414 12.9167Z" fill="#8696AD"/>
                </svg>
                    
                Настройки
            </div>
        </div>



        <!-- popup settings -->
        <div class="popup-aside__settings popup-settings">
            <div class="popup-settings__header">
                <p class="popup-settings__title">Настройки</p>
                <div class="popup-settings__close" @click="settingStatus = false">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_20_24480" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_20_24480)">
                        <path d="M9.99924 8.84828L14.1441 4.70339C14.2969 4.55061 14.4914 4.47422 14.7275 4.47422C14.9636 4.47422 15.158 4.55061 15.3108 4.70339C15.4636 4.85616 15.54 5.05061 15.54 5.28672C15.54 5.52283 15.4636 5.71727 15.3108 5.87005L11.1659 10.0149L15.3172 14.1454C15.47 14.2982 15.5464 14.4926 15.5464 14.7288C15.5464 14.9649 15.47 15.1593 15.3172 15.3121C15.1644 15.4649 14.97 15.5413 14.7339 15.5413C14.4978 15.5413 14.3033 15.4649 14.1506 15.3121L9.99924 11.1608L5.87302 15.3078C5.72024 15.4606 5.5258 15.537 5.28969 15.537C5.05358 15.537 4.85913 15.4606 4.70635 15.3078C4.53969 15.1412 4.45635 14.9432 4.45635 14.7141C4.45635 14.4849 4.53969 14.2939 4.70635 14.1412L8.85341 10.0149L4.71062 5.87215C4.55784 5.71937 4.48145 5.52493 4.48145 5.28882C4.48145 5.05271 4.55784 4.85826 4.71062 4.70549C4.87728 4.53882 5.0752 4.45549 5.30436 4.45549C5.53353 4.45549 5.7245 4.53882 5.87728 4.70549L9.99924 8.84828Z" fill="#70819A"/>
                        </g>
                    </svg>
                        
                </div>
            </div>

            <div class="popup-settings__body">
                <div class="popup-settings__variables-row">
                    <div class="radio">
                        <label class="custom-radio">
                          <input type="radio" name="color" value="indigo">
                          <span>Принять любые коэффициенты</span>
                        </label>
                      </div>
                </div>


                <div class="popup-settings__variables-row">
                    <div class="radio">
                        <label class="custom-radio">
                          <input type="radio" name="color" value="indigo">
                          <span>Принять только более высокие коэффициенты</span>
                        </label>
                      </div>
                </div>


                <div class="popup-settings__variables-row">
                    <div class="radio">
                        <label class="custom-radio">
                          <input type="radio" name="color" value="indigo">
                          <span>Изменения в коэффициентах не приняты</span>
                        </label>
                      </div>
                </div>
            </div>
        </div>
        
    </div>
</template>



<script >


// import component__header from '@/components/header.vue'
import SlideUpDown from 'vue-slide-up-down'

import component__bet_event_claster_element from '@/components/box/bet-event-claster-element.vue'
import component__sort_list from '@/components/box/sort-list.vue'
import component__bet_ordenar from '@/components/popups/bet-ordenar.vue'
import component__bet_express from '@/components/popups/bet-express.vue'




export default {

    data() {
        return {
            openStatusSearch: false,
            valueList: [
                {'name':'Ставки', 'counter': '5'},
                {'name':'Тест 1', 'counter': '3'},
                {'name':'Тест 2', 'counter': '1'},
                {'name':'Тест 3', 'counter': '2'},
                {'name':'Тест 4', 'counter': '7'},
            ],
            settingStatus: false,

            OrdenarStatus: true,

        }
    },

    props: {
        clasterHeaderTitle: String,
    },

    components: {
        SlideUpDown,
        component__bet_event_claster_element,
        component__sort_list,
        component__bet_ordenar,
        component__bet_express,
        
    },

    methods: {
        closePopup(){
            this.$emit('PopupStatusClose')
          
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