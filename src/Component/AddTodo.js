import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, IconButton, Button } from '@material-ui/core';
import ShowTodo from './ShowTodo'
import AddIcon from '@material-ui/icons/Add';
import { ListGroup, Label ,ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import ModalEdit from './modalEdit'

const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: 40,
  },
  title: {
    flexDirection: 'row',
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
    marginLeft: "5%"
  },
  list1: {
    display: "flex",
    marginLeft: 10,
   
  },
  text: {
    marginLeft: "15%"
  },
 
}));


export default function SimplePaper(props) {
  const classes = useStyles();
  const {
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (

    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={4} >
          <div className={classes.title}>
            <Typography className={classes.typo}>Todo
              {/* Button untuk modal */}
              <IconButton className={classes.menu} onClick={toggle}><AddIcon /></IconButton >
            </Typography>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Judul Todo </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label for="exampleTitle">Title List</Label>
                  <Input type="text" name="text" id="exampleText"  placeholder="Your Title List Here" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleList">Your List</Label>
                  <Input type="textarea" name="text" id="exampleText" placeholder="Your List Here" />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>Save</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>

          {/* list */}
          <ListGroup>
            <ListGroupItem className={classes.list1} >
             <Typography className={classes.text}>
                Cras justo odio
                </Typography>
              <ModalEdit  />
     
            </ListGroupItem>
         </ListGroup>
        </Grid>
          <Grid item xs={8}>
            <ShowTodo />
          </Grid>
        </Grid>
    </Paper>


  );
}
