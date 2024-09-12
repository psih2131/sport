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
                    <div class="popup-aside__nav-btn" @click="ActivStatus = true" :class="{'popup-aside__nav-btn_activ': ActivStatus == true}">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2094_10175" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                            <rect width="16" height="16" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_2094_10175)">
                            <path d="M8 14C6.6 14 5.36111 13.575 4.28333 12.725C3.20556 11.875 2.50556 10.7889 2.18333 9.46667C2.13889 9.3 2.17222 9.14722 2.28333 9.00833C2.39444 8.86944 2.54444 8.78889 2.73333 8.76667C2.91111 8.74445 3.07222 8.77778 3.21667 8.86667C3.36111 8.95556 3.46111 9.08889 3.51667 9.26667C3.78333 10.2667 4.33333 11.0833 5.16667 11.7167C6 12.35 6.94444 12.6667 8 12.6667C9.3 12.6667 10.4028 12.2139 11.3083 11.3083C12.2139 10.4028 12.6667 9.3 12.6667 8C12.6667 6.7 12.2139 5.59722 11.3083 4.69167C10.4028 3.78611 9.3 3.33333 8 3.33333C7.23333 3.33333 6.51667 3.51111 5.85 3.86667C5.18333 4.22222 4.62222 4.71111 4.16667 5.33333H5.33333C5.52222 5.33333 5.68056 5.39722 5.80833 5.525C5.93611 5.65278 6 5.81111 6 6C6 6.18889 5.93611 6.34722 5.80833 6.475C5.68056 6.60278 5.52222 6.66667 5.33333 6.66667H2.66667C2.47778 6.66667 2.31944 6.60278 2.19167 6.475C2.06389 6.34722 2 6.18889 2 6V3.33333C2 3.14444 2.06389 2.98611 2.19167 2.85833C2.31944 2.73056 2.47778 2.66667 2.66667 2.66667C2.85556 2.66667 3.01389 2.73056 3.14167 2.85833C3.26944 2.98611 3.33333 3.14444 3.33333 3.33333V4.23333C3.9 3.52222 4.59167 2.97222 5.40833 2.58333C6.225 2.19444 7.08889 2 8 2C8.83333 2 9.61389 2.15833 10.3417 2.475C11.0694 2.79167 11.7028 3.21944 12.2417 3.75833C12.7806 4.29722 13.2083 4.93056 13.525 5.65833C13.8417 6.38611 14 7.16667 14 8C14 8.83333 13.8417 9.61389 13.525 10.3417C13.2083 11.0694 12.7806 11.7028 12.2417 12.2417C11.7028 12.7806 11.0694 13.2083 10.3417 13.525C9.61389 13.8417 8.83333 14 8 14ZM8.66667 7.73333L10.3333 9.4C10.4556 9.52222 10.5167 9.67778 10.5167 9.86667C10.5167 10.0556 10.4556 10.2111 10.3333 10.3333C10.2111 10.4556 10.0556 10.5167 9.86667 10.5167C9.67778 10.5167 9.52222 10.4556 9.4 10.3333L7.53333 8.46667C7.46667 8.4 7.41667 8.325 7.38333 8.24167C7.35 8.15833 7.33333 8.07222 7.33333 7.98333V5.33333C7.33333 5.14444 7.39722 4.98611 7.525 4.85833C7.65278 4.73056 7.81111 4.66667 8 4.66667C8.18889 4.66667 8.34722 4.73056 8.475 4.85833C8.60278 4.98611 8.66667 5.14444 8.66667 5.33333V7.73333Z" fill="white"/>
                            </g>
                        </svg>
                            
                        Активные    
                    </div>

                    <div class="popup-aside__nav-btn" @click="ActivStatus = false" :class="{'popup-aside__nav-btn_activ': ActivStatus == false}">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.56732 9.19967L6.13398 7.76634C6.01176 7.64412 5.85621 7.58301 5.66732 7.58301C5.47843 7.58301 5.32287 7.64412 5.20065 7.76634C5.07843 7.88856 5.01732 8.04412 5.01732 8.23301C5.01732 8.4219 5.07843 8.57745 5.20065 8.69967L7.10065 10.5997C7.23398 10.733 7.38954 10.7997 7.56732 10.7997C7.7451 10.7997 7.90065 10.733 8.03398 10.5997L11.8007 6.83301C11.9229 6.71078 11.984 6.55523 11.984 6.36634C11.984 6.17745 11.9229 6.0219 11.8007 5.89967C11.6784 5.77745 11.5229 5.71634 11.334 5.71634C11.1451 5.71634 10.9895 5.77745 10.8673 5.89967L7.56732 9.19967ZM8.50065 14.6663C7.57843 14.6663 6.71176 14.4913 5.90065 14.1413C5.08954 13.7913 4.38398 13.3163 3.78398 12.7163C3.18398 12.1163 2.70898 11.4108 2.35898 10.5997C2.00898 9.78856 1.83398 8.9219 1.83398 7.99967C1.83398 7.07745 2.00898 6.21078 2.35898 5.39967C2.70898 4.58856 3.18398 3.88301 3.78398 3.28301C4.38398 2.68301 5.08954 2.20801 5.90065 1.85801C6.71176 1.50801 7.57843 1.33301 8.50065 1.33301C9.42287 1.33301 10.2895 1.50801 11.1007 1.85801C11.9118 2.20801 12.6173 2.68301 13.2173 3.28301C13.8173 3.88301 14.2923 4.58856 14.6423 5.39967C14.9923 6.21078 15.1673 7.07745 15.1673 7.99967C15.1673 8.9219 14.9923 9.78856 14.6423 10.5997C14.2923 11.4108 13.8173 12.1163 13.2173 12.7163C12.6173 13.3163 11.9118 13.7913 11.1007 14.1413C10.2895 14.4913 9.42287 14.6663 8.50065 14.6663Z" fill="#70819A"/>
                        </svg>
                                
                        Закрытые    
                    </div>
                </nav>
            </div>
        </div>



        <!-- activ bets body -->
        <div class="popup-aside__body popup-aside__default-body" v-if="ActivStatus == true">


            <!-- if we have activ bets  -->
          <div class="popup-aside__body-have-bets">

            <component__bet_activ />

            <component__bet_activ />

            <component__bet_activ />

          </div>
            
            

            <!-- if we dont have activ bets -->
    
            <div class="popup-aside__default-body-cleared default-body-cleared">
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
        <div class="popup-aside__body popup-aside__default-body" v-else>

             <!-- if we have activ bets  -->
          <div class="popup-aside__body-have-bets">

            <component__bet_win />

            <component__bet_win />
            
            <component__bet_lose />
            
            <component__bet_lose />

          </div>
            
            

            <!-- if we dont have activ bets -->
    
            <div class="popup-aside__default-body-cleared default-body-cleared">
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

            <div class="popup-aside__footer-btn-container">
                <button class="btnV1">Смотреть все</button>
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

import component__bet_activ from '@/components/popups/bet-activ.vue'
import component__bet_lose from '@/components/popups/bet-lose.vue'
import component__bet_win from '@/components/popups/bet-win.vue'




export default {

    data() {
        return {
            openStatusSearch: false,
            valueList: [
                {'name':'Мои ставки', 'counter': '5'},
                {'name':'Тест 1', 'counter': '3'},
                {'name':'Тест 2', 'counter': '1'},
                {'name':'Тест 3', 'counter': '2'},
                {'name':'Тест 4', 'counter': '7'},
            ],
            settingStatus: false,

            ActivStatus: true,

        }
    },

    props: {
        clasterHeaderTitle: String,
    },

    components: {
        SlideUpDown,
        component__bet_event_claster_element,
        component__sort_list,
        component__bet_activ,
        component__bet_lose,
        component__bet_win,
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