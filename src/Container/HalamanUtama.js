import React, { Component } from "react";
import axios from 'axios';

export default class HalamanUtama extends Component {
  state = {};


  componentDidMount() {
    const config = {
      headers: {
        Authorization:'Bearer' + localStorage.getItem('token')
      }
    }

    axios.get('http://192.168.43.13:5000/api/TodoCategory', config).then(
      res => {
        this.setState({
          todoCategory: res.data
        });
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  };
 

  render() {
     if(this.state.todoCategory){
       return(
         <h2>List{this.state.todoCategory.data}</h2>
       )
     }
  }
}
