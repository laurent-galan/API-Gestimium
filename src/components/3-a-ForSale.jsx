import React from 'react';
import {Link} from 'react-router-dom';

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
  justify: {
    justifyContent: 'center'
  },
});

export default function OneSale({stock}) {
  const classes = useStyles();
  console.log(stock)

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
           Prix d'achat :{stock.buying_price}€
          </Typography>
          <Typography>
           Prix de Vente :{stock.seelling_price}€
          </Typography>
          <Typography>
            charges :0{stock.charge}€
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.justify}> 
        <Link to={`/a-vendre/${stock.id}`} >
            <Button size="small" color="primary">
              Détails
            </Button>
        </Link>
        <Link to={`/soldstock/${stock.id}`} >
            <Button size="small" color="primary">
              Vendu
            </Button>
        </Link>
      </CardActions>
    </Card>
  </Grid>
  );
}
