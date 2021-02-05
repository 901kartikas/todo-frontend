import React, { Component } from "react";
import {Container } from '@material-ui/core'
import Heading from '../Component/heading'
import AddTodo from '../Component/AddTodo'
import Coba from '../Component/coba'

export default class HalamanUtama extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Container maxWidth="lg" className="layout">
          <AddTodo />
        </Container>
        <Coba />
      </div>
    );
  }
}
