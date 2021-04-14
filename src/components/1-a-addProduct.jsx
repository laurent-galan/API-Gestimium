/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {Grid, Button} from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
import FormAddPrepa from './forms/1-a-FormAddPrepa'
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill} from "react-icons/bs";
import {BsFillGridFill} from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';



    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            },
            },
        button: {
            margin: theme.spacing(1)
            },

       }));   



export default function addProduct(){
  const classes = useStyles();


  return(
  <Grid container sm="12">
    <Grid>
      <nav>
        <Link to="/home">
            <Button variant="contained" color="primary"className={classes.button}>
            <BsFillHouseDoorFill />
              <span>Home</span>
            </Button>
        </Link>
        <Link to="/preparation">
            <Button variant="contained" color="primary">
            <BsFillGridFill />
              <span>preparation</span>
            </Button>
        </Link>
      </nav>
    </Grid>
    <Grid sm="12">
      <h1 className="titleAdd">Ajouter un produit intéréssent aux ventes Futurs</h1>
    </Grid>
    <Grid>
      <FormAddPrepa/>
    </Grid>
    </Grid>
    );
  }
