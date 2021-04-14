import React from 'react';
// import {API_STRAPI} from '../config';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: { 
    height: 140,
  },
});

export default function OneProduct({product}) {
  const classes = useStyles();
  console.log(product)

  function handdledelete (){
    axios.delete(`http://localhost:1337/prepas/${product.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}  
  return (
  <Grid item>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.pics_before}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography>
          le  {product.date_of_sale}
          </Typography>
          <Typography>
          à {product.locality} pour {product.hour} H
          </Typography>
          <Typography>
            prix de départ :{product.starting_price}€
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/preparation/${product.id}`}>
            <Button size="small" color="primary">
              Détails
            </Button>
        </Link>
        <Link to={`/buy-detailpreparation/${product.id}`}>
            <Button size="small" color="primary">
              Acheter
            </Button>
        </Link>
            <Button size="small" color="primary"onClick={handdledelete}>
              Supprimer
            </Button>
      </CardActions>
    </Card>
  </Grid>
  );
}
