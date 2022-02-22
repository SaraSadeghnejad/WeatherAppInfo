import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Weather from "./Weather"
function App() {
  return (
    <div>
      {<BrowserRouter>
        <Switch>
          <Route exact path="/weather" component={Weather} />
     
          <Redirect to="/" />
        </Switch>
 
      </BrowserRouter>}
    </div>
  )
}

export default App
