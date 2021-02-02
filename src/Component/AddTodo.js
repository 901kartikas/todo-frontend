import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Tooltip, List, Button, ListItem, ListItemText} from '@material-ui/core';
import ShowTodo from './ShowTodo'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),

  },
  btn: {
    borderRadius: 40,
  },
  title: {
    flexDirection: 'row',
  },
  garis:{
    
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimplePaper() {
  const classes = useStyles();

  return (

    <Paper   >
      <Grid container spacing={2}>
        <Grid item xs={4} >
          <div className={classes.title}>
            <h1>Todo
              <Tooltip title="Add" aria-label="add">
                <Button className={classes.btn}>
                  <AddIcon style={{ fontSize: 30, color: "#000" }} />
                </Button>
              </Tooltip>
            </h1>
          </div>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button className={classes.garis}>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink>
          </List>
        </Grid>
        <Grid item xs={8}   >
          <ShowTodo />
        </Grid>
      </Grid>
    </Paper>


  );
}
