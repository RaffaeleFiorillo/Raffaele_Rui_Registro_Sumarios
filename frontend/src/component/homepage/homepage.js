import React from 'react'
import Sumarios from '../sumario/sumario'
import NewSumario from '../newsumario/newSumario'
import NavBar from '../navegation/navbar'
import EditarSumario from '../editarSumario/editarSumario'
import Home from './home'

function Homepage(props){
    return(
        <div>
            <NavBar userId = {props.match.params.id}/>
            {props.match.params.component === "sumarios" && <Sumarios id={props.match.params.id}/>}
            {props.match.params.component === "new" && <NewSumario id={props.match.params.id}/>}
            {props.match.params.component === "home" && <Home id={props.match.params.id}/>}
            {props.match.params.component === "editar" && 
            <EditarSumario id={props.match.params.id} 
                           idSumario={props.match.params.idSumario}
                           idAula={props.match.params.idAula}
            />
            }
        </div>
    )
}

export default Homepage