import React, {useEffect, useState} from 'react';
import ForSale from './3-a-ForSale';

import {Grid, Box, Button} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import serviceAPI from '../services/serviceAPI';
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill} from "react-icons/bs";
import {AiFillEuroCircle} from "react-icons/ai";
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

export default function ProductOfSale(){
    const classes = useStyles();
    const [isLoading, setIsLoading] =useState(true)
    const [stock, setStock] = useState(null)


    useEffect( () => {
        fetchAllStock();
    },[]);
    
    const fetchAllStock = async() => {
    const data = await serviceAPI.findAllStock();
    setStock(data);
    setIsLoading(false);
    };
    return (
        <div className="stock">
        <nav>
            <Link to="/home">
                <Button variant="contained" color="primary"className={classes.button}>
                    <BsFillHouseDoorFill />
                    <span>Home</span>
                </Button>
            </Link>
            <Link to="/vente">
                <Button variant="contained" color="primary">
                    <AiFillEuroCircle />
                    <span>Vente</span>
                </Button>
            </Link>
        </nav>
            <h1>Produits en Vente</h1>
            <Grid container spacing={3}>
                {isLoading ? (
                    <Box>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton width="60%" />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                 ) : stock.map(stock => <ForSale stock={stock} key={stock.id}/>)}
            </Grid>
        </div>
    )
} 