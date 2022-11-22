<template>
    <div class="lItem">
        <slot name="content"></slot>
        <div v-if="labelEdit || labelDelete" class="actions">
            <button v-if="labelEdit" class="btn btn-edit" @click="editItem()">{{labelEdit}}</button>
            <button v-if="labelDelete" class="btn btn-delete" @click="removeItem()">{{labelDelete}}</button>
        </div>
    </div>
</template>
<script lang="ts">

  export default ({ 
    name: 'lItem',
    props : {
        'item' : {
            default: null,
            required: true
        },
        'labelEdit' : {
            type: String,
            default: null,
            required: false
        },
        'labelDelete' : {
            type: String,
            default: null,
            required: false
        }
    },   
    methods:{
        editItem(){
            this.$emit('onEdit',this.item);
        },
        removeItem(){            
            this.$emit('onDelete',this.item);
        }
    }
  })
</script>
<style>
    .lItem{
        @apply flex items-center justify-between bg-white rounded-2xl w-full p-4 gap-2 hover:bg-zinc-100 shadow-md;
    }
    
    .lItem .actions{
        @apply flex items-center gap-4;
    }

    .lItem .actions{
        @apply flex items-center gap-4;
    }
    
    .lItem .actions .btn{
        @apply text-cyan-50 text-sm font-bold hover:opacity-80 pl-2 pr-2 pt-1 pb-1 rounded;
    }

    .lItem .actions .btn-edit{
        @apply bg-cyan-500;
    }
   
    .lItem .actions .btn-delete{
        @apply bg-rose-600;
    }
</style>
