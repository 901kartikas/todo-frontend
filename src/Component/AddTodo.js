import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Tooltip, Fab, Button } from '@material-ui/core';
import ShowTodo from './ShowTodo'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
 
  },
  btn:{
    borderRadius: 40,
  },
}));


export default function SimplePaper() {
  const classes = useStyles();

  return (
    
      <Paper   >
       <Grid container  spacing={2}>
           <Grid item xs={4} >
             <div>
             <h1>Todo</h1>
           <Tooltip title="Add" aria-label="add">
             <Button className={classes.btn}>
             <AddIcon style={{ fontSize: 30, color:"#000" }}/>
             </Button>
            </Tooltip>
             </div>
            
          
           </Grid>
           <Grid item xs={8}   >
             <ShowTodo/>
             </Grid>
       </Grid>
      </Paper>
   
    
  );
}
