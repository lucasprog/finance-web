<template>
    <div class="switch-button" :style="`height: ${height}px`">
        <label for="switchButton" class="label-container">
            <input type="checkbox" v-model="checkbox" value="" id="switchButton" class="input-checkbox peer">
            <div class="content peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-cyan-800"></div>
            <span class="label">{{viewLabel}}</span>
        </label>
    </div>
</template>
<script lang="ts"> 
    export default ({ 
        name: 'SwitchButton',
        props : {
            "value": {
                type: Boolean,
                default: false,
                required: true
            },
            "label": {
                type: String,
                default: '',
                required: false
            },
            "height": {
                type: Number,
                default: 42,
                required: false
            }
        },
        data(){
            return{
                checkbox : false
            }
        },
        mounted() : void{},
        computed:{
            viewLabel() : String {
                return this.label?this.label:'';
            }
        },
        watch : {
            checkbox() : void {
                console.log('mudou')
                this.$nextTick(() => {
                    this.changeCheck();
                })
            }
        },
        methods:{
            changeCheck() : void{
               this.$emit('input',this.checkbox);               
            }
        }
    });
</script>
<style>
    .switch-button{
        @apply min-h-[32px] flex items-center;
    }

    .switch-button .label-container{
        @apply inline-flex relative items-center cursor-pointer;
    }

    .switch-button .content{
        @apply w-11 h-6 bg-gray-200 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all;
    }

    .switch-button .input-checkbox{
        @apply sr-only;
    } 

    .switch-button .label{
        @apply ml-3 text-sm font-medium text-gray-900;
    }
</style>