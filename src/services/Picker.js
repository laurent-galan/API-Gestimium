import React, {useEffect, useState}from 'react';
import {Grid, Card} from '@material-ui/core';
import Calendar from 'react-calendar';

import serviceAPI from '../services/serviceAPI';

export default function Picker() {

    const [product, setProduct] = useState(null)


    useEffect( () => {
        fetchAllProduct();
    },[]);
    
    const fetchAllProduct = async() => {
    const data = await serviceAPI.findAll();
    setProduct(data);}

    return (
    <div>
        <Grid className="titleAdd">
            <h1>Calendrier des futurs Ventes aux enchéres</h1>
        </Grid>
        <Grid xs={12}container justify="center" alignItems="center"> 
            <Card>
           <Calendar/>
           <ul>
               <li>{product.date_of_sale}</li>
           </ul>
            </Card>
        </Grid>
    </div>
    )

}