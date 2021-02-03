import React from "react";
import { ListGroup, ListGroupItem, Input, Container } from "reactstrap";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";

const TodoList = (props) => {
  return (
    <Container>
      <ListGroup>
        <ListGroupItem>
          <Checkbox size="small" />
          Belajar Fisika
          <IconButton size="small" style={{ float: "right" }}>
            <MoreHorizIcon />
          </IconButton>
        </ListGroupItem>

        <ListGroupItem>
          <Checkbox size="small" />
          Belajar Fisika
          <IconButton size="small" style={{ float: "right" }}>
            <MoreHorizIcon />
          </IconButton>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default TodoList;
