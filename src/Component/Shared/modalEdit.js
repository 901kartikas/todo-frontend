import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import {  Button  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const ModalExample = (props) => {
  const {
  className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
         <Form>
          <FormGroup>
            <Label for="exampleSelect">Change Title</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Belajar</option>
              <option>Makan</option>
              </Input>
              <Input type="text" style={{marginTop:10}}></Input>
          </FormGroup>
         </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Save</Button>{' '}
          <Button color="danger" onClick={toggle}>Delete<DeleteIcon/></Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;