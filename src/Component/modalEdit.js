import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton,Button,Dialog, DialogActions, Paper,DialogContent, DialogTitle, InputLabel, Input, FormControl, Select, MenuItem } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  btnModal:{
    marginLeft:20,
    marginTop:-10,
  },
  modal:{
    marginTop: -10,
    marginRight:30,
  }
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} className={classes.btnModal}><MoreHoriz/></IconButton>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} className={classes.modal}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
           
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
