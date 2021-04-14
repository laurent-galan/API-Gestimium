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
  button: {
    justifyContent: 'center'
  }
});

export default function OneStock({stock}) {
  const classes = useStyles();

  function handdledelete (){
    axios.delete(`http://localhost:1337/stocks/${stock.id}`)
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
          image={stock.pics_before}
          title={stock.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {stock.name}
          </Typography>
          <Typography>
           {stock.category}
          </Typography>
          <Typography>
           {stock.date_of_sale}
          </Typography>
          <Typography>
            prix :{stock.buying_price}€
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Link to={`/stock/${stock.id}`}>
            <Button size="small" color="primary">
              Détails
            </Button>
        </Link>
        <Link to={`/soldstock/${stock.id}`}>
            <Button size="small" color="primary">
              Vendu
            </Button>
        </Link>
        <Button size="small" color="primary" onClick={handdledelete}>
            Supprimer
        </Button>
      </CardActions>
    </Card>
  </Grid>
  );
}
