import React, {useEffect, useState} from 'react';
import OneProduct from './1-b-Product';

import {Grid, Box, Button} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import serviceAPI from '../services/serviceAPI';
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill} from "react-icons/bs";


export default function ProductList(){

    const [isLoading, setIsLoading] =useState(true)
    const [product, setProduct] = useState(null)


    useEffect( () => {
        fetchAllProduct();
    },[]);
    
    const fetchAllProduct = async() => {
    const data = await serviceAPI.findAll();
    setProduct(data);
    setIsLoading(false);
    };
    return (
        <div className="product">
        <nav>
            <Link to="/home">
                <Button variant="contained" color="primary">
                    <BsFillHouseDoorFill />
                    <span>Home</span>
                </Button>
            </Link>
        </nav>
            <h1>Préparations des futurs Ventes aux Enchéres</h1>
            <br></br>
            <Grid container spacing={3}>
                {isLoading ? (
                    <Box>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton width="60%" />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                ) : product.map(product => <OneProduct product={product} key={product.id}/>)}
            </Grid>
        </div>
    )
}