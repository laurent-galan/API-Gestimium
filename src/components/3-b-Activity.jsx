import React from 'react';
import {API_STRAPI} from '../config';
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

export default function Activity({sale}) {
  const classes = useStyles();
  console.log(sale)

  return (
  <Grid item>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
           image={sale.pics_before !== null ? API_STRAPI + sale.pics_before[0].formats.small.url : "..."}
           title={sale.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {sale.name}
          </Typography>
          <Typography>

          </Typography>
          <Typography>
          </Typography>
          <Typography>
           prix de Vente :{sale.SeellingPrice}€
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.justify}> 
        <Link to={`/vente/${sale.id}`} >
            <Button size="small" color="primary">
              Détails
            </Button>
        </Link>
      </CardActions>
    </Card>
  </Grid>
  );
}
