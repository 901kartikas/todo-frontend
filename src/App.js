import './App.css';
import './layout.css'
import {Container } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'
import Heading from './Component/heading'
import AddTodo from './Component/AddTodo'
import ShowTodo from './Component/ShowTodo'



export default function App (){

  return (

    <div className="App">
       <Heading/>
      <Container maxWidth="lg"className="layout" >
        <AddTodo/>
      
      </Container>
    </div>
  );
}


