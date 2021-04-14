/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import serviceAPI from '../services/serviceAPI';
import {Grid, Card, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import {BsFillHouseDoorFill, BsFillGrid3X3GapFill} from "react-icons/bs";
import axios from 'axios';


const useStyles = makeStyles({
    navbutton: {
      marginRight:10,
    },
    root: {
      maxWidth: 575,
      minHeight: 450,
      borderRadius: 40,
      opacity: 0.9,
      marginLeft: 200,
      marginTop: 50,
      marginBottom: 50,
      backgroundColor:'#A0D6F7'
    },
    input: {
      margin: 20,
    },
    image: {
        width:250,
    }
    
  });


  
  
  export default function BuyAddStock(){
    const [stock, setStock] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const classes = useStyles();
    const {id} = useParams()
  
    useEffect( () => {
        fetchPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
  
        
        const fetchPost = async () => {
            const data = await serviceAPI.findOneStock(id)
            setStock(data);
            setIsLoading(true);
            console.log(stock)
        }    

        


        const handleSubmit = async (event) => {
            event.preventDefault();
            axios( {
                method: 'post',
                Auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE2ODU0NzQ2LCJleHAiOjE2MTk0NDY3NDZ9.zx_-iIh3cghElcaawSjZJvx9itNbzGcP5-d9z7QMY_A',
                data: {name: `${stock.name}`,
                        category: `${stock.category}`,
                        pics_before: `${stock.pics_before}`,
                        date_of_sale: `${stock.date_of_sale}`,
                        hour: `${stock.hour}`,
                        locality: `${stock.locality}`,
                        starting_price: `${stock.starting_price}`,
                        used_value: `${stock.used_value}`,
                        new_value: `${stock.new_value}`,
                        seeling_fees: `${stock.seelling_fees}`,
                        maximum_bet: `${stock.maximum_bet}`,
                        buying_price: `${stock.buying_price}`,
                        pics_after: `${stock.pics_after}`,
                        tva: `${stock.tva}`,
                        charge: `${stock.charge}`,
                        seeling_date: `${stock.seeling_date}`,
                        seeling_price: `${stock.seeling_price}`,
                        profit: `${stock.profit}`,
                }, 
                url: `http://localhost:1337/stocks`,
              }) 
              .then(function (response) { console.log(response); })
              .catch(function (error) { console.log(error); });
              
      }
        


            
        return (
            <div>
    <Grid item xs="12">
    <nav>
        <Link to="/home">
            <Button variant="contained" color="primary"className={classes.navbutton}>
                <BsFillHouseDoorFill />
                <span>Home</span>
            </Button>
        </Link>
        <Link to="/stock">
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillGrid3X3GapFill />
                    <span>Stock</span>
                </Button>
            </Link>
    </nav>
        <h1>{isLoading ? stock.name : (<Skeleton variant="text" />)}</h1>
        <h2>ID:{isLoading ? stock.id : (<Skeleton variant="text" />)}</h2>
    </Grid>
       <Card className={classes.root}>
            <Grid container justify="center" alignItems="center">
                <img src={stock.pics_before} alt="image du produit" className={classes.image}/>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
            <div className="detail">
                <p><span className="presentationB">Lieu de la vente : </span>
                    {isLoading ? stock.locality : (<Skeleton variant="text" />)}</p>   
                <p><span className="presentationB">Acheté le : </span>
                   le {isLoading ? stock.date_of_sale : (<Skeleton variant="text" />)}</p>
                <p><span className="presentationB">Au prix de : </span>
                   {isLoading ? stock.buying_price : (<Skeleton variant="text" />)}€</p>
            </div>
            </Grid>
            <Grid container direction="row" justify="center">
                <Button variant="contained" color="primary"className={classes.button}onClick={handleSubmit}>
                    <BsFillGrid3X3GapFill />
                    <span>Ajouter aux ventes</span>
                </Button>
              <Link to={`/buy/${stock.id}`}>
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillGrid3X3GapFill />
                    <span>Détails de la vente</span>
                </Button>
              </Link>
            </Grid>
        </Card>
        
</div>
    )
        };