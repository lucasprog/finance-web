<template>
    <div class="item-invoice">
        <lItem :item="invoice"
            labelEdit="Editar"
            labelDelete="Excluír"
            @onEdit="editInvoice" 
            @onDelete="removeInvoice">
            <template v-slot:content>
                <h6>
                    {{invoice.name}}
                    <small>
                        <!-- {{ $dateFns.format(invoice.due_date, 'dd/MM/yyyy', { locale: 'pt-br' }) }} -->
                    </small>
                </h6>
                <strong>{{ invoice.totalValue}}</strong>
            </template>
        </lItem>
    </div>
</template>
<script lang="ts">

import { InvoiceInterface } from "~/model/invoice";

  export default ({ 
    name: 'ItemInvoice',
    props : {
        'invoice' : null
    },   
    methods:{
        editInvoice(invoice: InvoiceInterface){
            console.log('onEdit',invoice)
        },
        removeInvoice(invoice: InvoiceInterface){
            console.log('onDelete',invoice)
        }
    }
  })
</script>
<style></style>
