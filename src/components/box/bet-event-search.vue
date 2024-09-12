<template>
    <div class="search-event-component event-single-sec__current-values-search" >
        
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
            @input="checkValue" 
            v-model="searchValue"
         
            placeholder="Поиск события">
        </div>


    </div>
</template>


<script >



export default {

    data() {
        return {
       
            searchValue: ''
        }
    },

    props: {
        
    },

    components: {
       
    },

    methods: {

        clearSearchField(){
            this.searchValue = ''

            this.checkValue()
        },

        checkValue(){
            console.log(this.searchValue)

            if(this.searchValue == '1'){
                this.$emit('vievBestStatus', false)
            }
            else{
                this.$emit('vievBestStatus', true)
            }
        }



    },

    computed: {

    },

    watch: {

    },

    mounted(){
        this.checkValue()
    },

}
</script>
    