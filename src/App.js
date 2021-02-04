import './App.css';
import './layout.css'
import {Container } from '@material-ui/core'
import Heading from './Component/heading'
import AddTodo from './Component/AddTodo'
import Coba from './Component/coba'
import React from 'react'

export default function App (){

  
  return (

    <div className="App">
       <Heading/>
      <Container maxWidth="lg"className="layout" >
        <AddTodo/>
      </Container>
      <Coba/>
    </div>
  );
}


