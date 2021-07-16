import  React from 'react';
import axios from 'axios';
import SumarioItem from './sumarioItem';
import { BsFillXCircleFill } from 'react-icons/bs'

import './sumario.css';

const api  = axios.create({
    baseURL:'http://localhost:3001/',
})

export default class Sumarios extends React.Component{

    state={
        aula:[], 
        sumarios:[],
        disciplinas:[],
        semSumarios:false,
    }

    constructor(props){
        super()
        api.get("sumario").then(res =>{
            if(res.data){
                this.setState({ sumarios: res.data })
                if(Object.entries(this.state.sumarios).length === 0){
                    this.setState({ semSumarios: true })
                }
            }
        })
        api.get("disciplina").then(res =>{
            this.setState({ disciplinas: res.data })
        })
    }


    render(){
        return(
          <div className="sumarios-list" >
            {this.state.sumarios.map((sumario, i) =>(
              <SumarioItem sumario={sumario}  key={i} elemteId={i+1} id={this.props.id}/>
            ))}
            {this.state.semSumarios &&
                <div className="sem_sumario">
                  <BsFillXCircleFill className="ico_sem"/>
                  <h1>Nenhum sumario encontrado</h1>
                </div>
            }
          </div>
        )
    }
}
