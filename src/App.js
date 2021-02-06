import './App.css';
import './layout.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./Component/Auth/SignIn";
import SignUp from "./Component/Auth/SignUp";
import HalamanUtama from "./Container/HalamanUtama";

export default function App (){

  
  return (
          <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/daftar" exact component={SignUp} />
            <Route path="/home" exact component={HalamanUtama} />
          </Switch>
        </BrowserRouter>
  );
}


