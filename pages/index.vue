<template>
  <div class="container-page">
    <filter-invoice></filter-invoice>  
    <div class="flex justify-between gap-4 w-full items-center">
      <h6 class="title">Minhas contas</h6>
      <form-invoice></form-invoice>
    </div>  
    <list-invoices></list-invoices>
  </div>
</template>

<script lang="ts">

  export default ({ 
    name: 'IndexPage',
    data(){
      return {
        showModal : false
      }
    },
    mounted(){
      // this.$store.commit("invoice/add",{
      //   name : 'Teste conta 2'
      // });
      // this.$store.commit("invoice/add",{
      //   name : 'Teste conta 3'
      // });
      // this.$store.commit("invoice/add",{
      //   name : 'Teste conta 4'
      // });

    }
  })
</script>
<style >
  .container-page{
    @apply flex items-center justify-center flex-col h-screen bg-gray-200 p-8 gap-4;
  }

  .container-page .title{
    @apply pl-4 text-black font-bold w-full items-center;
  }
</style>