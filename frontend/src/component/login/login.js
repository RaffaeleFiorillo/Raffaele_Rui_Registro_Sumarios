import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


import Card from '../UI/Card'

import './login.css'


const api  = axios.create({
    baseURL:'http://localhost:3001/',
})

function Login () {
    const history = useHistory()

    const [wrongInput, setVality] = useState(false)
    const [userInput, setUserInput] = useState({
        email:"",
        passwd:"",
    });

    const emailChangeHandler = (event) =>{
        setUserInput((prevState) =>{
            // ...prevState -> permite criar um objeto apartir de uma ja previamente existente
            return {...prevState, email: event.target.value}
        })
    }

    const passwdChangeHandler = (event) =>{
        setUserInput((prevState) =>{
            return {...prevState, passwd: event.target.value}
        })
    }

    const submitHandler = async (event) =>{
        event.preventDefault() // o submit não e enviado um pedido para nenhum servidor
        //console.log(userInput)
        try{
            const res = await api.post("auth", {email: userInput.email, password: userInput.passwd})

            if(Object.entries(res.data).length === 0){
                console.log("Fail login")
                setVality(true)
            }
            else{
                history.push("/regsumar/"+res.data.id+"/home")
            }

        }catch(error){
            console.log(error.message)
        }
        setUserInput({
            email: '',
            passwd: '',
        })
    }

    return (
        <Card className='login'> 
          <div className="new-expense__control">
          <h2>Login</h2>
            <label>Email</label>
               <p><input 
                   type="text" 
                   value={userInput.email} 
                   onChange={emailChangeHandler}
               />
               </p>
            </div>
              <div className="new-expense__control">
                <label>Password</label>
                <p>
                <input 
                    type="password"
                    value={userInput.passwd} 
                    onChange={passwdChangeHandler}
                />
                </p>
          </div>
          <button className= "acederButton" onClick={submitHandler}>Aceder</button>
          {wrongInput && <p>Email ou password incorreto</p>}
        </Card>
    )
}

export default Login