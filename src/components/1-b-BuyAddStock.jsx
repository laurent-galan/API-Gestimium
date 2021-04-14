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
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const classes = useStyles();
    const {id} = useParams()
  
    useEffect( () => {
        fetchPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
  
        
        const fetchPost = async () => {
            const data = await serviceAPI.findOne(id)
            setProduct(data);
            setIsLoading(true);
            console.log(product)
        }    

        


        const handleSubmit = async (event) => {
            event.preventDefault();
            axios( {
                method: 'post',
                Auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE2ODU0NzQ2LCJleHAiOjE2MTk0NDY3NDZ9.zx_-iIh3cghElcaawSjZJvx9itNbzGcP5-d9z7QMY_A',
                data: {name: `${product.name}`,
                        category: `${product.category}`,
                        pics_before: `${product.pics_before}`,
                        date_of_sale: `${product.date_of_sale}`,
                        hour: `${product.hour}`,
                        locality: `${product.locality}`,
                        starting_price: `${product.starting_price}`,
                        used_value: `${product.used_value}`,
                        new_value: `${product.new_value}`,
                        seeling_fees: `${product.seelling_fees}`,
                        maximum_bet: `${product.maximum_bet}`,
                        buying_price: `${product.buying_price}`,
                        pics_after: `${product.pics_after}`,
                        tva: `${product.tva}`,
                        charge: `${product.charge}`,
                        seeling_date: `${product.seeling_date}`,
                        seeling_price: `${product.seeling_price}`,
                        profit: `${product.profit}`,
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
        <Link to="/preparation">
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillGrid3X3GapFill />
                    <span>Retour</span>
                </Button>
            </Link>
    </nav>
        <h1>{isLoading ? product.name : (<Skeleton variant="text" />)}</h1>
        <h2>ID:{isLoading ? product.id : (<Skeleton variant="text" />)}</h2>
    </Grid>
       <Card className={classes.root}>
            <Grid container justify="center" alignItems="center">
                <img src={product.pics_before} alt="image du produit" className={classes.image}/>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
            <div className="detail">
                <p><span className="presentationB">Lieu de la vente : </span>
                    {isLoading ? product.locality : (<Skeleton variant="text" />)}</p>   
                <p><span className="presentationB">Date de la vente : </span>
                   le {isLoading ? product.date_of_sale : (<Skeleton variant="text" />)}</p>
                <p><span className="presentationB">Mise à prix : </span>
                   {isLoading ? product.starting_price : (<Skeleton variant="text" />)}€</p>
                <p><span className="presentationB">Frais de Vente : </span>
                   {isLoading ? product.seelling_fees : (<Skeleton variant="text" />)}%</p> 
            </div>
            </Grid>
            <Grid container direction="row" justify="center">
                <Button variant="contained" color="primary"className={classes.button}onClick={handleSubmit}>
                    <BsFillGrid3X3GapFill />
                    <span>Ajouter au Stock</span>
                </Button>
              <Link to={`/buy/${product.id}`}>
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillGrid3X3GapFill />
                    <span>Détails de l'achat</span>
                </Button>
              </Link>
            </Grid>
        </Card>
        
</div>
    )
        };