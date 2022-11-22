<template>
   <div class="register-invoice">
        <div class="button">
            <button @click="openModal()" class="button-add-invoice">
                Nova Conta
            </button>
        </div>

        <lModal :isShow="showModal" @onClose="onCloseModal">
            <template v-slot:header>
                <h6 class="title">Nova conta</h6>
            </template>
            <template v-slot:body>
                <lForm class="flex flex-col gap-2">
                    <input type="text"
                        name="name"
                        v-model="form.name"
                        placeholder="Nome da conta">
                    
                    <input type="date"
                        name="due_date"
                        v-model="form.due_date"
                        placeholder="Data de Vencimento">
                    
                    <textarea 
                        placeholder="Descrição"
                        name="details" 
                        v-model="form.details"></textarea> 

                    <input type="text"
                        name="totalValue"
                        v-model="form.totalValue"
                        placeholder="Valor Total">

                    <div class="lf-line">
                        <div class="lf-col">
                            <lFormsSwitchButton 
                            label="Possue parcela?"
                            v-model="form.has_installments"></lFormsSwitchButton>
                        </div>
                        <div v-show="form.has_installments" class="lf-col">
                            <input type="number" 
                            name="qtd_installments" 
                            min="0"
                            v-model="form.qtd_installments" 
                            placeholder="Qtd de parcelas"
                            @change="qtdIntallments()"/>
                        </div>
                    </div>

                    <div class="lf-line">

                        <div class="lf-col">
                            <div class="lbx-partials">

                                <lItem v-for="(installment,index) in viewIntallments"
                                    :item="installment"
                                    :key="index">
                                    <template v-slot:content>
                                        <h6 class="flex flex-col gap-2">
                                            {{ $dateFns.format(installment.due_date, 'dd/MM/yyyy') }}
                                            <small>{{ `Parcela ${index+1}/${viewIntallments.length}` }}</small>
                                        </h6>
                                        <strong>{{ installment.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}}</strong>
                                    </template>
                                </lItem>

                            </div>


                        </div>
                        
                    </div>     
                    
                    <div class="lf-line">
                        <div class="lf-col">
                            <button class="btn btn-sucess">Salvar</button>
                        </div>
                    </div>
                    
                </lForm>
            </template>
        </lModal>
   </div>
</template>
<script lang="ts">
    import { Installment } from '~/model/installment';
    import moment from 'moment';
    
  export default ({ 
    name: 'FormInvoice',
    data(){
        return{
            showModal : false,
            form : {
                name : null as String|null,
                details : null as String|null,
                totalValue : 0 as Number,
                due_date : null as String|null,
                has_installments : false as Boolean,
                qtd_installments : 0 as Number,
                installments : [] as Installment[]
            },
            installments : [] as Installment[]
        }
    },
    computed : {
        viewIntallments() : Array<Installment>{
            return this.installments;
        }
    },
    methods:{
        openModal(){
            this.clearForm();
            this.showModal = true;
        },
        clearForm(){},
        validateForm(){},
        addInvoice(){},
        onCloseModal(){
            this.showModal = false;
        },
        qtdIntallments(){

            const installments : Array<Installment> =  ([...Array(parseInt(this.form.qtd_installments)).keys()])
                .map( (item : any, i : Number) => {                    
                    let ins : Installment = {
                        value : parseFloat(this.form.totalValue) / parseInt(this.form.qtd_installments),
                        due_date : new Date(moment(this.form.due_date).add(i,'M')),
                        details : "null"
                    };
                    return ins;
                });

            this.$nextTick(() => {
                this.installments = installments;
            })
        },
    }
  })

</script>
<style>
    
    .register-invoice {
        @apply w-full;
    }

    .register-invoice .button{
        @apply flex justify-end w-full;
    }

    .register-invoice .button .button-add-invoice{
        @apply bg-indigo-600 text-white rounded pt-2 pb-2 pl-4 pr-4 hover:bg-indigo-500;
    }

    .register-invoice .lbx-partials{
        @apply flex gap-4 max-h-[272px] flex-col overflow-scroll w-full overflow-x-hidden;
    }
</style>