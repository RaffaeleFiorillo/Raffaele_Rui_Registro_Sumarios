import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Card from '../UI/Card'
import './newsumario.css'

const api  = axios.create({
    baseURL:'http://localhost:3001/',
})



export default class newSumarios extends React.Component{

    state={
        sumarios: [],
        cursos: [], 
        disciplinas: [],
        ano: "",
        curso: 3,
        disciplina: "", 
        aulaNr: "", 
        tipoAula: "Teórico", 
        data: "",
        hora: "",
        conteudo: "",
        docente: "",
        createClass:false,
        createSum:false,
        saving:false,
    }

    constructor(props){
        super()
        api.get("auth/"+props.id).then(res =>{
            if(res.data)
            this.setState({ docente: res.data[0].name })
        })
        api.get("sumario").then(res =>{
            this.setState({ sumarios: res.data })
        })
        api.get("curso").then(res =>{
            this.setState({ cursos: res.data })
        })
        api.get("disciplina").then(res =>{
            this.setState({ disciplinas: res.data })
        })
    }

    horaChangeHandler = (event) => {
        this.setState({ hora: event.target.value })
    }

    dataChangeHandler = (event) => {
        this.setState({ data: event.target.value })
    }

    aulaChangeHandler = (event) => {
        this.setState({ aulaNr: event.target.value })
    }

    docenteChangeHandler = (event) => {
        this.setState({ docente: event.target.value })
    }
    disciplinaChangeHandler = (event) => {
        this.setState({ disciplina: event.target.value })
    }

    cursoChangeHandler = (event) => {
        this.setState({ curso: event.target.value })
    }
    conteudoChangeHandler = (event) =>{
        this.setState({ conteudo:event.target.value})
    }

    allParametersAreFilled(){
        return (this.state.hora === "" || this.state.data === "" || this.state.conteudo === "" || this.state.docente === "" || 
                this.state.disciplina === "" || this.state.aulaNr === "" || this.state.ano === "" || this.state.docente === "" 
               )
    }

    criarSumarioHandler = (event) =>{
        event.preventDefault() 
        this.setState({ saving:true })
        if (this.allParametersAreFilled()){
            api.post("class/create", {
                numero:this.state.aulaNr, 
                tipo:this.state.tipoAula,
                diaSemana:"",
                local:"",
                duracao:"",
                disciplina: this.state.disciplina
            }).then(res=>{
                const classInfo= res.data
                console.log(res.data)
                if(classInfo){
                    this.setState( { createClass: true } )
                    api.post("sumario/create", {
                        presenca:0,
                        conteudo:this.state.conteudo,
                        biblio:"",
                        idaula:classInfo[0].idaula,
                    }).then(res=>{
                        console.log(res.data)
                        if(res.data){
                            this.setState( { createSum: true } )
                        }
                    })
                }
            })
        }
    }

    render(){
        return(
            <Card className="new_sumario">
                {!this.state.saving &&
                <form className="sum_form">
                    <ul>
                        <li>
                            <label>
                                <p>Ano </p>
                            </label>
                            <select className="input_type1">
                                <option value="1º Ano">1º Ano</option>
                                <option value="2º Ano">2º Ano</option>
                                <option value="3º Ano">3º Ano</option>
                                <option value="4º Ano">4º Ano</option>
                            </select>
                        </li>
                        <li>
                            <label>
                                <p>Curso </p>
                            </label>
                            <select  className="input_type2">
                                {this.state.cursos.map((curso, i) =>(
                                    <option value={curso.id} key={i}>{curso.nome}</option>
                                )
                            )}
                            </select>
                        </li>
                        <li>
                            <label>
                                <p >Docente </p>
                            </label>
                            <input className="value_input"
                                type="text" 
                                value={this.state.docente} 
                                onChange={this.docenteChangeHandler}
                            />
                        </li>
                        <li>
                            <label>
                                <p >Hora </p>
                            </label>
                            <input className="value_input" 
                                type="time" 
                                value={this.state.hora} 
                                onChange={this.horaChangeHandler}
                            />
                        </li>
                        <li>
                            <label>
                                <p >Disciplina </p>
                            </label>
                            <select  className="input_type2" onChange={this.disciplinaChangeHandler}>
                                {this.state.disciplinas.map((disciplina, i) =>(
                                    <option value={disciplina.id} key={i}>{disciplina.nome}</option>
                                )
                            )}
                            </select>
                        </li>
                        <li>
                            <label>
                                <p >Aula nº  </p>
                            </label>
                            <input className="value_input" 
                                type="integer" 
                                value={this.state.aulaNr} 
                                onChange={this.aulaChangeHandler}
                            />
                        </li>
                        <li>
                            <label>
                                <p >Tipo de Aula </p>
                            </label>
                            <select  className="input_type1">
                                <option value="T">Teorica</option>
                                <option value="P">Prática</option>
                            </select>
                        </li>
                        <li>
                            <label>
                                <p >Data </p>
                            </label>
                            <input className="value_input"
                                type="date" 
                                value={this.state.data} 
                                onChange={this.dataChangeHandler} />
                        </li>
                        <li>
                            <label>
                                <p >Conteudos </p>
                            </label>
                            <textarea className="input_cont" value={this.state.conteudo}
                                onChange={this.conteudoChangeHandler}
                            />
                        </li>
                    </ul>
                    <div align="center">
                        <Link to={"/regsumar/"+this.props.id+"/sumarios"}>
                            <button>Voltar</button>
                        </Link>
                        <button onClick={this.criarSumarioHandler}>Guardar</button>
                    </div>
                </form>}
                {this.state.createSum && this.state.createSum && 
                <div align= "center"> 
                    <p>O Sumario foi criado com sucesso!</p>
                    <Link to={"/regsumar/"+this.props.id+"/home"}><button>Voltar</button></Link>
                </div>}
            </Card>
        )
    }
}