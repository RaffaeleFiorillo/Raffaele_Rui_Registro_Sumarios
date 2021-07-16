import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'
import Card from '../UI/Card'

function NavBar(props){
    return(
        <Card className="navigation">
            <ul className="nav_buttons">
                <li><Link to={"/regsumar/"+props.userId+"/sumarios"} className="button">Listar Sumarios</Link></li>
                <li><Link to={"/regsumar/"+props.userId+"/home"} className="buttonHome"> Home </Link></li>
                <li><Link to={"/regsumar/"+props.userId+"/new"} className="button">Criar Sumario</Link></li>
            </ul>
            <div className="sair_button">
            <Link to={""}>
                <button className="sair_button">Log Out</button>
            </Link>
            </div>
        </Card>
    )
}

export default NavBar