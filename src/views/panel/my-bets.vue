<template>
  <section class="panel-page-sec my-bets" >

    <div class="container">
      <div class="lobby-events__header-row my-bets__header-row">
        <h3 class="lobby-events__title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_20_24044" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_20_24044)">
            <path d="M14 13.0005C13.1667 13.0005 12.4583 12.7088 11.875 12.1255C11.2917 11.5422 11 10.8338 11 10.0005C11 9.16715 11.2917 8.45882 11.875 7.87549C12.4583 7.29215 13.1667 7.00049 14 7.00049C14.8333 7.00049 15.5417 7.29215 16.125 7.87549C16.7083 8.45882 17 9.16715 17 10.0005C17 10.8338 16.7083 11.5422 16.125 12.1255C15.5417 12.7088 14.8333 13.0005 14 13.0005ZM7 16.0005C6.45 16.0005 5.97917 15.8047 5.5875 15.413C5.19583 15.0213 5 14.5505 5 14.0005V6.00049C5 5.45049 5.19583 4.97965 5.5875 4.58799C5.97917 4.19632 6.45 4.00049 7 4.00049H21C21.55 4.00049 22.0208 4.19632 22.4125 4.58799C22.8042 4.97965 23 5.45049 23 6.00049V14.0005C23 14.5505 22.8042 15.0213 22.4125 15.413C22.0208 15.8047 21.55 16.0005 21 16.0005H7ZM9 14.0005H19C19 13.4505 19.1958 12.9797 19.5875 12.588C19.9792 12.1963 20.45 12.0005 21 12.0005V8.00049C20.45 8.00049 19.9792 7.80465 19.5875 7.41299C19.1958 7.02132 19 6.55049 19 6.00049H9C9 6.55049 8.80417 7.02132 8.4125 7.41299C8.02083 7.80465 7.55 8.00049 7 8.00049V12.0005C7.55 12.0005 8.02083 12.1963 8.4125 12.588C8.80417 12.9797 9 13.4505 9 14.0005ZM19 20.0005H3C2.45 20.0005 1.97917 19.8047 1.5875 19.413C1.19583 19.0213 1 18.5505 1 18.0005V8.00049C1 7.71715 1.09583 7.47965 1.2875 7.28799C1.47917 7.09632 1.71667 7.00049 2 7.00049C2.28333 7.00049 2.52083 7.09632 2.7125 7.28799C2.90417 7.47965 3 7.71715 3 8.00049V18.0005H19C19.2833 18.0005 19.5208 18.0963 19.7125 18.288C19.9042 18.4797 20 18.7172 20 19.0005C20 19.2838 19.9042 19.5213 19.7125 19.713C19.5208 19.9047 19.2833 20.0005 19 20.0005Z" fill="#00BD71"/>
            <path d="M14 13.0005C13.1667 13.0005 12.4583 12.7088 11.875 12.1255C11.2917 11.5422 11 10.8338 11 10.0005C11 9.16715 11.2917 8.45882 11.875 7.87549C12.4583 7.29215 13.1667 7.00049 14 7.00049C14.8333 7.00049 15.5417 7.29215 16.125 7.87549C16.7083 8.45882 17 9.16715 17 10.0005C17 10.8338 16.7083 11.5422 16.125 12.1255C15.5417 12.7088 14.8333 13.0005 14 13.0005ZM7 16.0005C6.45 16.0005 5.97917 15.8047 5.5875 15.413C5.19583 15.0213 5 14.5505 5 14.0005V6.00049C5 5.45049 5.19583 4.97965 5.5875 4.58799C5.97917 4.19632 6.45 4.00049 7 4.00049H21C21.55 4.00049 22.0208 4.19632 22.4125 4.58799C22.8042 4.97965 23 5.45049 23 6.00049V14.0005C23 14.5505 22.8042 15.0213 22.4125 15.413C22.0208 15.8047 21.55 16.0005 21 16.0005H7ZM9 14.0005H19C19 13.4505 19.1958 12.9797 19.5875 12.588C19.9792 12.1963 20.45 12.0005 21 12.0005V8.00049C20.45 8.00049 19.9792 7.80465 19.5875 7.41299C19.1958 7.02132 19 6.55049 19 6.00049H9C9 6.55049 8.80417 7.02132 8.4125 7.41299C8.02083 7.80465 7.55 8.00049 7 8.00049V12.0005C7.55 12.0005 8.02083 12.1963 8.4125 12.588C8.80417 12.9797 9 13.4505 9 14.0005ZM19 20.0005H3C2.45 20.0005 1.97917 19.8047 1.5875 19.413C1.19583 19.0213 1 18.5505 1 18.0005V8.00049C1 7.71715 1.09583 7.47965 1.2875 7.28799C1.47917 7.09632 1.71667 7.00049 2 7.00049C2.28333 7.00049 2.52083 7.09632 2.7125 7.28799C2.90417 7.47965 3 7.71715 3 8.00049V18.0005H19C19.2833 18.0005 19.5208 18.0963 19.7125 18.288C19.9042 18.4797 20 18.7172 20 19.0005C20 19.2838 19.9042 19.5213 19.7125 19.713C19.5208 19.9047 19.2833 20.0005 19 20.0005Z" fill="black" fill-opacity="0.2"/>
            </g>
            </svg>
            
                
            Мои ставки
        </h3>

        <div class="lobby-events__buttons-contorll">

          <div class="lobby-events__sort-list-wrapper">
              <component__sort_list :dataList="valueList" />
          </div>

        </div>
    </div>


    <div class="my-bets__body">

      <div class="my-bets__grid">
        <div class="my-bets__coll">

          <component__bet_win />

          <component__bet_lose />

        </div>

        <div class="my-bets__coll">

          <component__bet_activ />

          <component__bet_lose />

        </div>

        <div class="my-bets__coll">

          <component__bet_lose />

          <component__bet_win />

        </div>
      </div>

      <!-- No data wrapper -->
      <div class="my-bets__no-data-wrapper">
        <div class="my-bets__no-data-box">
          <div class="my-bets__no-data-cion-wrapper">
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
          <p class="my-bets__no-data__title">Активных ставок нет</p>
          <div class="my-bets__no-data-btn-wrapper">
            <button class="btnV1">Начните делать ставки сейчас!</button>
          </div>
        </div>
      </div>

    </div>


    <div class="my-bets__pagination pagination">
      <div class="pagination__el">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_2032_16674" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
          <rect width="20" height="20" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_2032_16674)">
          <path d="M8.99967 9.99984L12.2497 13.2498C12.4025 13.4026 12.4788 13.5971 12.4788 13.8332C12.4788 14.0693 12.4025 14.2637 12.2497 14.4165C12.0969 14.5693 11.9025 14.6457 11.6663 14.6457C11.4302 14.6457 11.2358 14.5693 11.083 14.4165L7.24967 10.5832C7.16634 10.4998 7.10731 10.4096 7.07259 10.3123C7.03787 10.2151 7.02051 10.1109 7.02051 9.99984C7.02051 9.88873 7.03787 9.78456 7.07259 9.68734C7.10731 9.59012 7.16634 9.49984 7.24967 9.4165L11.083 5.58317C11.2358 5.43039 11.4302 5.354 11.6663 5.354C11.9025 5.354 12.0969 5.43039 12.2497 5.58317C12.4025 5.73595 12.4788 5.93039 12.4788 6.1665C12.4788 6.40261 12.4025 6.59706 12.2497 6.74984L8.99967 9.99984Z" fill="#33455D"/>
          </g>
        </svg>  
      </div>

      <div class="pagination__el pagination__element-page pagination__element-page_activ">1</div>
      <div class="pagination__el pagination__element-page">2</div>
      <div class="pagination__el pagination__element-page">3</div>

      <div class="pagination__el">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_2032_16774" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
          <rect width="20" height="20" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_2032_16774)">
          <path d="M10.4997 9.99984L7.24967 6.74984C7.0969 6.59706 7.02051 6.40261 7.02051 6.1665C7.02051 5.93039 7.0969 5.73595 7.24967 5.58317C7.40245 5.43039 7.5969 5.354 7.83301 5.354C8.06912 5.354 8.26356 5.43039 8.41634 5.58317L12.2497 9.4165C12.333 9.49984 12.392 9.59012 12.4268 9.68734C12.4615 9.78456 12.4788 9.88873 12.4788 9.99984C12.4788 10.1109 12.4615 10.2151 12.4268 10.3123C12.392 10.4096 12.333 10.4998 12.2497 10.5832L8.41634 14.4165C8.26356 14.5693 8.06912 14.6457 7.83301 14.6457C7.5969 14.6457 7.40245 14.5693 7.24967 14.4165C7.0969 14.2637 7.02051 14.0693 7.02051 13.8332C7.02051 13.5971 7.0969 13.4026 7.24967 13.2498L10.4997 9.99984Z" fill="#8696AD"/>
          </g>
        </svg>
            
            
      </div>

    </div>

    </div>

  </section>
  
  </template>
  
  
  <script >

  
  
  import component__bet_win from '@/components/box/bet-win.vue'
  import component__bet_lose from '@/components/box/bet-lose.vue'
  import component__bet_activ from '@/components/box/bet-activ.vue'
   import component__sort_list from '@/components/box/sort-list.vue'

  
  
  export default {
  
      data() {
          return {
            valueList: [
                {'name':'Все'},
                {'name':'Тотал'},
                {'name':'Фора'},
            ],

            viewStatusStroke:false,
          }
      },
  
      components: {
        component__bet_win,
        component__bet_lose,
        component__bet_activ,
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
  