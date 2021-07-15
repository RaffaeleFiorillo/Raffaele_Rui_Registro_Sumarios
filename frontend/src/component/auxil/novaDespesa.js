import React, { useState } from 'react'
import './NewExpense.css'
import FormDespesa from "./despesaForm"
import Card from '../UI/Card'


const NovaDespesa = (props) =>{

    const newDespesaHandler = (despesa) =>{
        const newDespesa = {
            descricao:despesa.descIn,
            data:despesa.dataIn,
            preco:despesa.valorIn
        }
        props.onChangeAdd(newDespesa)
    }

    return (
        <Card style="card-1">
            <div className="new-expense">
                <FormDespesa onChangeNew={newDespesaHandler}/>
            </div>
        </Card>
    )
}

export default NovaDespesa