export const state = () => ({
    list : []
});

export const getters = {
    invoices(state: any) {
        return state.list;
    }   
};

export const mutations = {
    add(state : any, invoice : any) {
        console.log('invoices',state.list)
        state.list.push(invoice)
    }
};

export const actions = {
    add(vuexContext : any, invoice : any){
        vuexContext.commit('add', invoice);
    }
}