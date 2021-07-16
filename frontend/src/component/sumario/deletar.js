import React from 'react'
import axios from 'axios'

const api  = axios.create({
    baseURL:'http://localhost:3001/',
})

class Deletar extends React.Component{

    state={
        deleteClass: false,
        deleteSum:false,
        close:false,
    }

    constructor(props){
        super(props)
        api.delete("sumario/delete/"+props.sumId).then(res=>{
            console.log(res.data)
            this.setState({ deleteClass: true })
        })
        api.delete("class/delete/"+props.sumId).then(res=>{
            console.log(res.data)
            this.setState({ deleteSum: true })
        })
    }

    closeHandler = () =>{
        this.setState({ close: true })
    }

    render(){
        return(
            <div>
                {this.state.deleteClass && this.state.deleteSum && !this.state.close && <div className="sumario">
                    <p>O sumario foi eliminado com sucesso</p>
                    <button onClick={this.closeHandler}>Close</button>
                </div>}
            </div>
        )
    }
}

export default Deletar