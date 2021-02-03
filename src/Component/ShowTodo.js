import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography,Button, IconButton,  } from '@material-ui/core';
import { ListGroup, ListGroupItem, Modal,  ModalHeader, ModalBody, ModalFooter, Input, Form, Label, FormGroup, } from 'reactstrap';
import { MoreHoriz } from '@material-ui/icons';

const useStyles = makeStyles({
  page:{
    flexDirection:'column'
  }, 
  menu:{
    justifyContent:"flex-end"
  }, 
  typo:{
    fontSize:"25px",
  },
   text: {
    marginLeft: "15%",
  },
  btnCheck:{
    marginRight: "5%"
  }
})


export default function SimplePaper(props) {
  const classes = useStyles();
  const {
   
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div   >
      <Paper className={classes.page}  elevation={0}>
           <Grid item xs={10}>
           <Typography className={classes.typo}> Judul TODO
            {/* Button untuk modal */}
            <IconButton  className={classes.menu} onClick={toggle}><MoreHoriz/></IconButton>
            </Typography>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
           <ListGroup>
            <ListGroupItem><Input type="checkbox" name="check" id="exampleCheck" className={classes.btnCheck} />
              <Typography className={classes.text}>
                Cras justo odio
                </Typography>
            </ListGroupItem>
            <ListGroupItem>
               <Input type="text" name="add item" id="exampletext" placeholder="add item" style={{border: 0}} />
            </ListGroupItem>
          </ListGroup>
           </Grid>
           </Paper>
   
    </div>
  );
}
