import React, { Component } from "react";
import { Container } from "@material-ui/core";
import AddTodo from "../Component/TodoCategory/AddTodo";
import {store} from "../Actions/store";
import {Provider} from "react-redux";
import Header from '../Component/Shared/heading';
import axios from 'axios';

export default class HalamanUtama extends Component {
  state = {};


  componentDidMount() {
    const config = {
      headers: {
        Authorization:'Bearer' + localStorage.getItem('token')
      }
    }

    axios.get("http://192.168.0.198:5000/api/todoCategory", config).then(
      res => {
        console.log(res);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  };


  render() {
     if(this.state.user){
       return(
         <h2>HI {this.state.user.username}</h2>
       )
     }
    return (
      <div>
        <Provider store={store}>
          <Header/>
          <Container maxWidth="lg" className="layout">
            <AddTodo />
          </Container>
        </Provider>
      </div>
    );
  }
}
