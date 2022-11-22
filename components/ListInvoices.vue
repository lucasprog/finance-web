<template>
    <div class="list-invoice">
        <div class="list-invoices-content" v-if="invoices">
            <div v-for="(invoice,i) in invoices" :key="i">
              <item-invoice :invoice="invoice"></item-invoice>
            </div> 
        </div>
    </div>
</template>
<script lang="ts">
import { InvoiceInterface } from '~/model/invoice';


  export default ({ 
    name: 'ListInvoices',
    computed: {
      invoices() : Array<InvoiceInterface> { 
        return this.$store.state.invoice.list;
      }  
    }
  })
</script>
<style>
  .list-invoice{
    @apply flex flex-col gap-4 w-full;
  }
  
  
  
  .list-invoice .list-invoices-content{
    @apply flex flex-col gap-2 w-full;    
  }
</style>
