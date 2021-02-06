import React, { useState, useEffect } from "react";
import * as actions from "../../Actions/todoCategory"
import { Grid, Typography, IconButton, Button } from "@material-ui/core";
import ShowTodo from "../TodoList/ShowTodo";
import AddIcon from "@material-ui/icons/Add";
import {
  ListGroup,
  Label,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";

function SimplePaper(props) {
  useEffect(() => {
    props.fetchAllTodoCategories()
  }, [])

  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div
              style={{
                display: "flex",
                flex: 7,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <Typography variant="h5">List</Typography>
            </div>

            {/* Button untuk modal */}
            <div style={{ float: "right", display: "flex", flex: 1 }}>
              <IconButton onClick={toggle}>
                <AddIcon />
              </IconButton>
            </div>
          </div>

          {/* ModalAdd */}
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Judul Todo </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="exampleTitle">Title List</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  placeholder="Your Title List Here"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Save
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        {/* list */}
        {
        props.todoCategoryList.map((record, index) => {
        return (
        <ListGroup key={index} hover >
          <ListGroupItem style={{}}>
            {record.categoryTitle}
            <Badge pill style={{ float: "right" }}>
              1
            </Badge>
          </ListGroupItem>
        </ListGroup>)
        })
      }
      </Grid>
      <Grid item xs={8}>
        <ShowTodo />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
    todoCategoryList: state.todoCategory.list
})

const mapActiontoProps = {
  fetchAllTodoCategories: actions.fetchAll
}

export default connect(mapStateToProps, mapActiontoProps)(SimplePaper);
