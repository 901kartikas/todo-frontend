import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {IconButton,  Button,  } from '@material-ui/core';
import MoreHoriz from   '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';


const ModalExample = (props) => {
  const {
  className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <IconButton  onClick={toggle}> <MoreHoriz/></IconButton>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
         <Form>
          <FormGroup>
            <Label for="exampleSelect">Change Title</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              </Input>
          </FormGroup>
          <FormGroup style={{flexDirection:'row', border: '1px'}}>
            <p>Delete Todo List</p>
            <IconButton><DeleteIcon/></IconButton>
          </FormGroup>
         </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;