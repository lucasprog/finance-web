import {Installment} from "~/model/installment";

export interface InvoiceInterface {
    name : String,
    details : String,
    totalValue : Number,
    due_date : Date,
    has_installments : Boolean,
    qtd_installments : Number,
    installments : Array<Installment>
}