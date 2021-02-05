import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { Paper, Grid, Typography, Button, IconButton } from "@material-ui/core";
import {
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Collapse,
  Card,
  FormGroup,
  Label
} from "reactstrap";
import { MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles({
  page: {
    flexDirection: "column",
  },
  menu: {
    justifyContent: "flex-end",
  },
  typo: {
    fontSize: "25px",
  },
  text: {
    marginLeft: "15%",
  },
  btnCheck: {
    marginRight: "5%",
  },
});

export default function SimplePaper(props) {
  const classes = useStyles();
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);

  const toggle1 = () => setIsOpen(!isOpen);

  return (
    <div>
      <Paper className={classes.page} elevation={0}>
        <Grid item xs={10}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div
              style={{
                display: "flex",
                flex: 8,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <Typography variant="h5" style={{ fontStyle: "bold" }}>
                Belanja
              </Typography>
            </div>

            {/* Button untuk modal */}
            <div style={{ float: "right", display: "flex", flex:1 }}>
              <IconButton onClick={toggle}>
                <MoreHoriz />
              </IconButton>
            </div>
          </div>

          {/* Modal */}
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Customize Your List</ModalHeader>
            <ModalBody>
            <FormGroup>
                <Label for="exampleTitle">Edit List Title</Label>
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
              <Button color="danger" onClick={toggle}>
                Delete
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          {/* ToDOList */}
          <ListGroup>
            <ListGroupItem>
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div
                  style={{
                    alignContent: "center",
                    float: "left",
                    display: "flex",
                    flex: 1,
                  }}
                >
                  <Checkbox size="small" />
                </div>
                <div style={{ display: "flex", flex: 13 }}>
                  <Typography style={{ paddingTop: 13 }}>
                    Beli Sabun Merk Rinso 500g
                  </Typography>
                </div>
                {/* Button untuk modal */}
                <div style={{ float: "right", display: "flex"}}>
                  <IconButton onClick={toggle}>
                    <MoreHoriz />
                  </IconButton>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <Input
                type="text"
                name="isitodo"
                id="exampletext"
                placeholder="Add To Do Items"
                style={{ border: 0 }}
                onClick={toggle1}
              />
              <Collapse style={{ marginTop: 15 }} isOpen={isOpen}>
                <Card>
                  <Button>Save</Button>
                </Card>
              </Collapse>
            </ListGroupItem>
          </ListGroup>
        </Grid>
      </Paper>
    </div>
  );
}
