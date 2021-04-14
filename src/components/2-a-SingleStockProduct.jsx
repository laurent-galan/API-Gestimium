
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
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


export default function SingleStockProduct(){
    const classes = useStyles();
    const {id} = useParams()
    let[stock, setStock] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        fetchPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        const fetchPost = async () => {
           const data = await serviceAPI.findOneStock(id)
           setStock(data);
           setIsLoading(true);
        }

    return (
        <div>
        <Grid item sm="12">
            <h1>{isLoading ? stock.name : <Skeleton variant="text" width={300} heught={70}/>}</h1>
        </Grid>
        <nav>
            <Link to="/home">
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillHouseDoorFill />
                    <span>Home</span>
                </Button>
            </Link>
            <Link to="/stock">
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillGrid3X3GapFill />
                    <span>Retour</span>
                </Button>
            </Link>
        </nav>
        <Grid container spacing={9}justify="space-arround">
        <Grid item sm="6"> 
                <div className="imgStock">
                {isLoading ? <img src={stock.pics_before} /> : <Skeleton variant="rect" width="60%" height={300}/>}
                </div>
        </Grid>
            <Grid item sm="5">
                <div className="detail">
                    <p><span className="presentationB">Catégorie : </span>
                    {isLoading ? stock.category : (<Skeleton variant="text" />)}
                    </p>
                    <p><span className="presentationB">acheter le : </span>
                    {isLoading ? stock.date_of_sale.split('-').reverse().join('/') : (<Skeleton variant="text" />)}
                    </p>
                    <p><span className="presentationB">Au Prix de : </span> 
                    {isLoading ? stock.buying_price : (<Skeleton variant="text" />)} €
                    </p>
                    <p><span className="presentationB">dont : </span> 
                    {isLoading ? stock.sales_charge_amount : (<Skeleton variant="text" />)} € de frais de vente
                    </p>
                <CardActions className={classes.button}>
                <Button variant="contained" color="primary"className={classes.button}>
                    Frais
                </Button>
                <Button variant="contained" color="primary"className={classes.button}>
                    Retirer
                </Button>
                </CardActions>
                </div>
            </Grid>
        </Grid>
        
        </div>
            )
    }