import React from 'react';
import { AppBar, Toolbar, Grid, Button} from '@material-ui/core'

// const useStyles = makeStyles({
//   head: {
//     flexDirection:'column'
//   },

 
// });

export default function ButtonAppBar() {
  // const classes = useStyles();

  return (
    <div >

      <AppBar position="static">
        <Toolbar>
          <Grid Container>
            <Grid item xs={6} sm={3} >
              <Button>logout</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button>avatar</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>


    </div>
  );
}
