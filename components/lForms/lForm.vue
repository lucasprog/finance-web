<template>
    <form class="lform">
        <slot></slot>
    </form>
</template>
<script lang="ts">
    
  export default ({ 
    name: 'lForm',
    data(){
        return{}
    },
    methods:{}
  })

</script>
<style>

    .lform input[type="text"],
    .lform input[type="number"],
    .lform input[type="email"],
    .lform input[type="date"],
    .lform textarea{
        @apply p-2 bg-slate-50 shadow-md rounded text-gray-600 outline-0 border focus:border-cyan-500;
    }
    
    .lform textarea{
        @apply resize-none shadow-md;
    }

    .lform .lf-line{
        @apply flex gap-4 flex-row items-center w-full;
    }
    
    .lform .lf-col{
        @apply flex gap-4 flex-col items-center w-full;        
    } 
   
   
    
</style>