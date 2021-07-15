import React, { useState } from 'react';
import './ExpenseForm.css';

const FormDespesa = (props) =>{
    // const [desc, setDesc] = useState("")

    const [userInput, setUserInput] = useState({
        descIn:"",
        valorIn:"",
        dataIn:"",
    });

    const descChangeHandler = (event) =>{
        setUserInput((prevState) =>{
            // ...prevState -> permite criar um objeto apartir de uma ja previamente existente
            return {...prevState, descIn: event.target.value}
        })
    }

    const valorChangeHandler = (event) =>{
        setUserInput((prevState) =>{
            return {...prevState, valorIn: event.target.value}
        })
    }

    const dataChangeHandler = (event) =>{
        setUserInput((prevState) =>{
            return {...prevState, dataIn: new Date(event.target.value)}
        })
    }

    const submitHandler = (event) =>{
        event.preventDefault() // o submit não e enviado um pedido para nenhum servidor
        //console.log(userInput)
        props.onChangeNew(userInput)
        setUserInput({
            descIn: '',
            valorIn: '',
            dataIn: '',
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Descrição</label>
                    <input 
                        type="text" 
                        value={userInput.descIn} 
                        placeholder="Nome da despesa"
                        onChange={descChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Valor</label>
                    <input 
                        type="number"
                        value={userInput.valorIn} 
                        placeholder="$00"
                        onChange={valorChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Data</label>
                    <input 
                        type="date" 
                        min="2015-01-01" 
                        max="2023-12-31"
                        value={userInput.dataIn} 
                        onChange={dataChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={submitHandler}>Adicionar Despesa</button>
            </div>
        </form>
    )
}

export default FormDespesa