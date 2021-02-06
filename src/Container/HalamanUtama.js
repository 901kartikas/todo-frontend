import React, { Component } from "react";
import { Container } from "@material-ui/core";
import AddTodo from "../Component/TodoCategory/AddTodo";
import {store} from "../Actions/store";
import {Provider} from "react-redux";
import Header from '../Component/Shared/heading'

export default class HalamanUtama extends Component {
  render() {
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
