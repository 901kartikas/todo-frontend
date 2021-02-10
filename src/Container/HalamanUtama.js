import React, { Component } from "react";
import axios from "axios";

export default class HalamanUtama extends Component {
  state = {};

  componentDidMount() {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get("http://localhost:5000/api/TodoCategory", config)
      .then((res) => {
        this.setState({
          todoCategory: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <h2>List</h2>;
  }
}
