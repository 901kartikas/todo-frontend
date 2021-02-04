import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, IconButton, Button } from "@material-ui/core";
import ShowTodo from "./ShowTodo";
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

const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: 40,
  },
  title: {
    flexDirection: "row",
  },
  garis: {
    border: 10,
  },
  menu: {
    marginLeft: "60%",
  },
  typo: {
    fontSize: "25px",
  },
  btnEdit: {
    margin: "2%",
  },
  btnCheck: {
    marginRight: "10%",
    marginLeft: "5%",
  },
  list1: {
    display: "flex",
    marginLeft: 10,
  },
  text: {
    marginLeft: "15%",
  },
}));

export default function SimplePaper(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div style={{display: "flex", flex:7, paddingTop:10, paddingBottom:10}}>
                <Typography variant="h5">List</Typography>
              </div>

              {/* Button untuk modal */}
              <div style={{float: "right", display: "flex", flex:1}}>
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
                <FormGroup>
                  <Label for="exampleList">Your List</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="Your List Here"
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
          <ListGroup>
            <ListGroupItem style={{}}>
              Belanja
              <Badge pill style={{ float: "right" }}>
                1
              </Badge>
            </ListGroupItem>
          </ListGroup>
        </Grid>
        <Grid item xs={8}>
          <ShowTodo />
        </Grid>
      </Grid>
  );
}
