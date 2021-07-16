import  React, { useState } from 'react'
import axios from 'axios'
import Deletar from './deletar';
import './sumarioItem.css';
import { Link } from 'react-router-dom';

const api  = axios.create({
    baseURL:'http://localhost:3001/',
})



function SumarioItem(props){

    const [showAll, setShowAll] = useState({state: false, text: "Detalhes"})
    
    const [classInfo, setClassInfo] = useState({})
    const [docente, setDocente] = useState({})
    const [deleteItem, setDelete] = useState(false)

    function getData(){
        const data = classInfo.data
        if (data){return data.substring(0, 10)}
            
    }

    function detailsHandler(){
        if(showAll.text === "Detalhes"){
            setShowAll({
                state:true,
                text:"Menos Detalhes"
            })
            api.get("class/"+props.sumario.aula).then(res =>{
                setClassInfo(res.data[0])
            })
            api.get("auth/"+props.id).then(res=> {
                setDocente(res.data[0])
            })
        }
        else{
            setShowAll({
                state:false,
                text:"Detalhes"
            })
        } 
    }
    const deleteItemChangeHandler = () =>{
        setDelete(true)
    }

    return (
        <div>

            {!deleteItem && <div  className="sumario">
                <h2>Sumario {props.elemteId}</h2>
                {!showAll.state && <p>{props.sumario.conteudo.substring(0, 20)}...</p>}
                {showAll.state && 
                <div>
                    <ul className="sumario_info">
                        <li>
                            <div>
                            <h3>Conteudo</h3>
                            <p>{props.sumario.conteudo}</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Bibliografia</h3>
                                <p>{props.sumario.biblio}</p>
                                <h3>Criado: </h3>
                                <p>{getData()} às {classInfo.hora}</p>
                            </div>  
                        </li>

                        <li>
                            <div>
                            <h3>Docente</h3>
                            <p>{docente.name}</p>
                            </div>  
                        </li>
                    </ul>
                <div>
                    <button onClick={deleteItemChangeHandler}> Eliminar </button>
                    <Link to={"/regsumar/"+props.id+"/editar/"+props.sumario.idsumario+"/"+props.sumario.aula}>
                        <button > Editar </button>
                    </Link><p> </p>
            </div>
            </div>}
            {!deleteItem && <button onClick={detailsHandler}> {showAll.text} </button>}
            </div>}
            {deleteItem && <Deletar classId={classInfo.idaula} idUser={props.id} sumId={props.sumario.idsumario}/>}

            
        </div>
    )
}

export default SumarioItem