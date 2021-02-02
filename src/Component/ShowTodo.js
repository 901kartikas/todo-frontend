import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Button} from '@material-ui/core';

const useStyles = makeStyles({
  page:{
    flexDirection:'column'
  }
})


export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div   >
      <Paper className={classes.page}  elevation={0}>
           <Grid item xs={6}   >
           <Button variant="contained">Default</Button>          
           <Button variant="contained">Default</Button>   
           <Button variant="contained">Default</Button>   
           <Button variant="contained">Default</Button>          
           <Button variant="contained">Default</Button>   
           <Button variant="contained">Default</Button>  
           <Button variant="contained">Default</Button>   
           <Button variant="contained">Default</Button>  
           </Grid>
           </Paper>
   
    </div>
  );
}
