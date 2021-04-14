
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {API_STRAPI} from '../config';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import {BsFillHouseDoorFill} from "react-icons/bs";
import serviceAPI from '../services/serviceAPI';

import Skeleton from '@material-ui/lab/Skeleton';
import {Grid, Button, CardActions} from '@material-ui/core';
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
        justify: {
            justifyContent: 'center'
        }

       }));   


export default function SingleProductForSale(){
    const classes = useStyles();
    const {id} = useParams()
    let[sale, setsale] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        fetchsale();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        const fetchsale = async () => {
           const sale = await serviceAPI.findOneSale(id)
           setsale(sale);
           setIsLoading(true);
           console.log(sale);
        }

    return (
        <div>
        <Grid item sm="12">
            <h1>{isLoading ? sale.name : <Skeleton variant="text" width={300} heught={70}/>}</h1>
        </Grid>
        <nav>
            <Link to="/home">
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillHouseDoorFill />
                    <span>Home</span>
                </Button>
            </Link>
            <Link to="/vente">
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillGrid3X3GapFill />
                    <span>Retour</span>
                </Button>
            </Link>
        </nav>
        <Grid container spacing={9}justify="space-arround">
        <Grid item sm="6"> 
                <div className="imgstock">
                {isLoading ? <img src={API_STRAPI + sale.pics_before[0].formats.small.url} /> : <Skeleton variant="rect" width="60%" height={300}/>}
                </div>
        </Grid>
            <Grid item sm="5">
                <div className="detail">
                    <p><span className="presentationB">Catégorie : </span>
                    {isLoading ? sale.category : (<Skeleton variant="text" />)}
                    </p>
                    <p><span className="presentationB">acheter le : </span>
                    {/* {isLoading ? sale.SeellingDate.split('-').reverse().join('-') : (<Skeleton variant="text" />)} */}
                    </p>
                    <p><span className="presentationB">Prix : </span> 
                    {isLoading ? sale.SeellingPrice : (<Skeleton variant="text" />)} €
                    </p>
                    <p><span className="presentationB">Prix d'achat : </span> 
                    {isLoading ? sale.BuyingPrice : (<Skeleton variant="text" />)} €
                    </p>
                    <p><span className="presentationB">Total des frais : </span> 
                    {isLoading ? sale.SeellingFees + sale.charge : (<Skeleton variant="text" />)} €
                    </p>
                    <p><span className="presentationB">Bénéfice : </span> 
                    {isLoading ?sale.SeellingPrice - sale.SeellingFees - sale.BuyingPrice : (<Skeleton variant="text" />)} €
                    </p>
                <CardActions className={classes.button}>
                <Button variant="contained" color="primary"className={classes.button}>
                    Frais
                </Button>
                <Button variant="contained" color="primary"className={classes.button}>
                    Vendu
                </Button>
                <Button variant="contained" color="primary"className={classes.button}>
                    Perte
                </Button>
                <Button variant="contained" color="primary"className={classes.button}>
                    Modif Prix
                </Button>
                </CardActions>
                </div>
            </Grid>
        </Grid>
        
        </div>
            )
    }