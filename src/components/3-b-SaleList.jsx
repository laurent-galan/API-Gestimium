import React, {useEffect, useState} from 'react';
import Activity from './3-b-Activity';

import {Grid, Box, Button} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import serviceAPI from '../services/serviceAPI';
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill} from "react-icons/bs";


export default function SaleList(){

    const [isLoading, setIsLoading] =useState(true)
    const [sale, setSale] = useState(null)


    useEffect( () => {
        fetchAllSale();
    },[]);
    
    const fetchAllSale = async() => {
    const data = await serviceAPI.findAllSale();
    setSale(data);
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
            <h1>Produits Vendu</h1>
            <Grid container spacing={3}>
                {isLoading ? (
                    <Box>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton width="60%" />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                ) : sale.map(sale => <Activity sale={sale} key={sale.id}/>)}
            </Grid>
        </div>
    )
}