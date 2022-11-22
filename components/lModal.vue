<template>
    <div v-if="showing" class="modal">
        <div @click="closeModal" class="modal-back"></div>
        <div class="modal-content">
            <div class="modal-header">
                <slot name="header"></slot>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    
  export default ({ 
    name: 'lModal',
    props:['isShow'],
    data(){
        return{
            showModal : false
        }
    },
    mounted(){
        this.showModal = this.isShow??this.isShow;
    },
    methods:{
        closeModal(){
            this.showModal = false;
            this.$emit('onClose',false);
        },
    },
    computed : {
        showing() : Boolean{
            const s = this.showModal??this.showModal;
            return s;
        }
    },
    watch :{
        isShow() : void {
            this.showModal = this.isShow??this.isShow;
        }
    }
  })

</script>
<style>
    .modal-back{
        @apply bg-black opacity-50 absolute left-0 right-0 top-0 bottom-0 w-full h-screen z-10;
    }
    
    .modal{
        @apply fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center w-screen h-screen;
    }

    .modal .modal-content{
        @apply bg-white absolute z-20 min-w-[600px] min-h-[600px] rounded-2xl p-8 ;
    }
    
    .modal .modal-header{
        @apply border-b-2 pb-4;
    }

    .modal .modal-header .title {
        @apply font-bold text-lg; 
    }
    
    .modal .modal-body{
        @apply pt-6;
    }
</style>