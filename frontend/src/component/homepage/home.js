import React  from "react";
import axios from "axios";
import { ImUser } from "react-icons/im"

import './home.css'
import Card from '../UI/Card'

const api  = axios.create({
    baseURL:'http://localhost:3001/',
})

class Home extends React.Component{

    state={
        user:"",
        Nrsumarios:"",
    }


    constructor(props){
        super()
        api.get("auth/"+props.id).then(res=>{
            this.setState({ user:res.data[0] })
        })
        api.get("sumario").then(res=>{
            if(res.data){
                this.setState({ Nrsumarios:res.data.length })
            }
        })
    }

    render(){
        return(
            <Card  className="new_sumario">
                <div className="user_info">
                    <ImUser className="user_ico" />
                    <h1>{this.state.user.name}</h1>
                    <h2>Sumarios criados: {this.state.Nrsumarios}</h2>
                </div>
            </Card>
        )
    }
}

export default Home