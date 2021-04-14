import React, {useEffect, useState} from 'react';
import StockProduct from './2-a-StockProduct';

import {Grid, Box, Button} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import serviceAPI from '../services/serviceAPI';
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill} from "react-icons/bs";


export default function StockList(){

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
                <Button variant="contained" color="primary">
                    <BsFillHouseDoorFill />
                    <span>Home</span>
                </Button>
            </Link>
        </nav>
            <h1>Produits en Stock</h1>
            <Grid container spacing={3}>
                {isLoading ? (
                    <Box>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton width="60%" />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                ) : stock.map(
                    stock => <StockProduct stock={stock} key={stock.id}/>)}
            </Grid>
        </div>
    )
}