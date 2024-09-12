<template>
    <article class="bpog-sec__post post-blog">
        <div class="post-blog__info-container">
            <div class="post-blog__top-info">
            <div class="post-blog__teg-row">
                <span class="post-blog__teg">Лайв</span>
            </div>
            <h3 class="post-blog__title">Спортивный клуб Жувентуде</h3>
            <p class="post-blog__subtitle">Поделитесь своей реферальной ссылкой или кодом с друзьями</p>
            </div>
            

            <div class="post-blog__btn-container">
            <button class="post-blog__btn btnV1">Ставь сейчас</button>
            </div>
            
        </div>
        
        <div class="post-blog__img-wrapper">
            <img :src="postData.imgUrl" alt="" class="post-blog__img">
        </div>
    </article>
</template>


<script >


// import component__header from '@/components/header.vue'


export default {

    data() {
        return {

        }
    },

    props: {
        postData: Object
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
  