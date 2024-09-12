<template>
    <div>

      
        <div class="app-wrapper__btn-row">
            <div class="nav-btn-wrapper">
                <RouterLink to="/panel/lobby" class="btnV2">
                    Страницы админ панели
                </RouterLink>
            </div>


            <button class="btnV1" @click="ordenarStatusPopup = true" >Ординар Экспрус попап</button>

            <button class="btnV1" @click="openCloseStatusPopup = true" >Активные и закрытые ставки попап</button>
        </div>


          
        <popup_ordenar v-if="ordenarStatusPopup" @PopupStatusClose="ordenarStatusPopup = false" />

        <popup_activ_close v-if="openCloseStatusPopup" @PopupStatusClose="openCloseStatusPopup = false" />
    

    </div>
</template>




<script >


import popup_ordenar from '@/components/popups/ordenar.vue'
import popup_activ_close from '@/components/popups/activ-close-bets-popup.vue'




export default {

    data() {
        return {
          ordenarStatusPopup: false,
          openCloseStatusPopup: false
        }
    },

    components: {
      popup_ordenar,
      popup_activ_close
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