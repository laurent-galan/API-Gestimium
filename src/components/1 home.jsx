// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import  {Link} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import {Grid, ListItem, ListItemText} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.preparation,
    '&$checked': {
      color: theme.status.preparation,
    },
  prepa: {
      color: theme.preparation,
  },
  },
  checked: {},

}));


function CustomCheckbox() {
  const classes = useStyles();

  return (
  <div>
    <Grid item sm="12">
      <h1>Gestimium</h1>
    </Grid>
    <Grid container sm="12"direction="row"spacing={9}justify="space-between"alignItems="center">
      <Grid item sm="4">
{/* Preparation */}
        <div className="prepacard">
          <h2>Préparations</h2>
          <Link to="/ajouter">
              <ListItem button divider>
                <ListItemText primary="Ajouter un produit"alignItems='center' />
              </ListItem>
          </Link>
          <Link to="/preparation">
              <ListItem button divider>
                <ListItemText primary="Liste des produits"alignItems='center' />
              </ListItem>
          </Link>
          <Link to="future-sale">
              <ListItem button divider>
                <ListItemText primary="Futurs Ventes"alignItems='center' />
              </ListItem>
          </Link>
        </div>  
      </Grid>
{/* stock */}
      <Grid item sm="4">
        <div className="stockcard">
          <h2>Stock</h2>
          <Link to="/stock">
              <ListItem button divider>
                <ListItemText primary="Voir le Stock"alignItems='center' />
              </ListItem>
          </Link>
          <Link to="/stock">
              <ListItem button divider>
                <ListItemText primary="Archives"alignItems='center' />
              </ListItem>
          </Link>
        </div>
      </Grid>
{/* Vente */}
      <Grid item sm="4">
        <div className="ventecard">
          <h2>Ventes</h2>
          <Link to="/a-vendre">
              <ListItem button divider>
                <ListItemText primary="Voir les produits à Vendre"alignItems='center' />
              </ListItem>
          </Link>
          <Link to="/vente">
              <ListItem button divider>
                <ListItemText primary="Liste des Ventes"alignItems='center' />
              </ListItem>
          </Link>
        </div>
      </Grid>
{/* Impôts */}
      <Grid item sm="4">
        <div className="impotcard">
          <h2>Impôts</h2>
        </div>
      </Grid>
{/* Charges */}
      <Grid item sm="4">
        <div className="chargecard">
          <h2>Charges</h2>
        </div>
      </Grid>
{/* Perte */}
      <Grid item sm="4">
        <div className="pertecard">
          <h2>Pertes</h2>
        </div>
      </Grid>
    </Grid>
<Checkbox
  defaultChecked
  classes={{
    root: classes.root,
    checked: classes.checked,
  }}
/>
      </div>
  );
}

const theme = createMuiTheme({
  status: {
    preparation: orange[200],
  },
});

export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox />
    </ThemeProvider>
  );
}
