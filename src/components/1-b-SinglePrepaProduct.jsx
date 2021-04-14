
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import serviceAPI from '../services/serviceAPI';
import axios from 'axios';

import Skeleton from '@material-ui/lab/Skeleton';
import {Grid, Button} from '@material-ui/core';
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


export default function Post(){
    const classes = useStyles();
    const {id} = useParams()
    let[product, setProduct] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        fetchPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        const fetchPost = async () => {
           const data = await serviceAPI.findOne(id)
           setProduct(data);
           setIsLoading(true);
        }
        function handdledelete (){
            axios.delete(`http://localhost:1337/prepas/${product.id}`)
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
        }

    return (
        <div>
        <Grid item sm="12">
            <h1>{isLoading ? product.name : <Skeleton variant="text" width={300} heught={70}/>}</h1>
            <h2>id: {isLoading ? product.id : <Skeleton variant="text" width={300} heught={70}/>}</h2>
        </Grid>
        <nav>
            <Link to="/home">
                <Button variant="contained" color="primary"className={classes.button}>
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
        <Grid container spacing={9}justify="space-arround">
        <Grid item sm="6"> 
                <div className="imgProduct">
                {isLoading ? <img src={product.pics_before} /> : <Skeleton variant="rect" width="60%" height={300}/>}
                </div>
        </Grid>
            <Grid item sm="5">
                <div className="detail">
                    <p><span className="presentationB">Date de la vente : </span> 
                    {isLoading ? product.date_of_sale : (<Skeleton variant="text" />)}
                    </p>
                    <p><span className="presentationB">Lieu de la Vente : </span>
                    {isLoading ? product.locality : (<Skeleton variant="text" />)}
                    </p>
                    <p><span className="presentationB">Heure de la Vente : </span>
                    {isLoading ? product.hour : (<Skeleton variant="text" />)}
                    </p>
                    <p><span className="presentationB">Mise à prix : </span> 
                    {isLoading ? product.starting_price : (<Skeleton variant="text" />)} €
                    </p>
                    <p><span className="presentationB">frais de vente : </span>
                    {isLoading ? product.seelling_fees : (<Skeleton variant="text" />)} %
                    </p>
                    <p><span className="presentationB">valeur produit similaire neuf : </span>
                    {isLoading ? product.new_value : (<Skeleton variant="text" />)} €
                    </p>
                    <p><span className="presentationB">valeur produit similaire d'ocasion : </span>
                    {isLoading ? product.used_value : (<Skeleton variant="text" />)} €</p>
                    <p><span className="presentationB">mise maximum de rentabilité : </span>
                    {isLoading ? product.maximum_bet : (<Skeleton variant="text" />)} €</p>
                <Link to="/buypreparation/:id">
                    <Button variant="contained" color="primary"className={classes.button}>
                        Ajouter au stock
                    </Button>
                </Link>
                <Button variant="contained" color="primary"className={classes.button}>
                    Archiver
                </Button>
                    <Button variant="contained" color="primary"className={classes.button} onClick={handdledelete}>
                        Supprimer
                    </Button>
                </div>
            </Grid>
        </Grid>
        
        </div>
            )
    }