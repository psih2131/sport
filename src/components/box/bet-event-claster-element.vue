<template>
    <div class="bet-event-claster-element" 
    @click="activStatus = !activStatus"
    :class="{'bet-event-claster-element_activ':activStatus}">
        <p class="bet-event-claster-element__name">{{betName}}</p>
        <p class="bet-event-claster-element__cof">{{betValue}}</p>
    </div>
</template>


<script >





export default {

    data() {
        return {
          activStatus: false,
        }
    },

    props: {
       betName: String,
       betValue: Number,
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
    