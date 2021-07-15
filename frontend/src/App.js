import React from 'react'
import { Route } from 'react-router-dom'
import Login from './component/login/login'
import Homepage from './component/homepage/homepage'
 
function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Login}/>
      <Route exact path="/regsumar/:id/:component" component={Homepage}/>
      <Route exact path="/regsumar/:id/:component/:idSumario/:idAula" component={Homepage}/>
    </React.Fragment>
  )
}

export default App;
