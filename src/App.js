import './App.css';
import './layout.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App (){

  
  return (
          <BrowserRouter>
          <Switch>
            <Route path="/masuk" exact component={SignIn} />
            <Route path="/daftar" exact component={SignUp} />
            <Route path="/" exact component={HalamanUtama} />
          </Switch>
        </BrowserRouter>
  );
}


