import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import PostAPI from '../services/PostAPI';
import { makeStyles, Grid} from '@material-ui/core';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import {BsFillHouseDoorFill} from "react-icons/bs";


const useStyles = makeStyles((theme) => ({
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      width: 180,
    },
    aloneLine: {
        width: 250,
        
    },
    Allform: {
        width:500,
        borderRadius: 20,
        marginLeft: 200,
        backgroundColor: '#eeee',
        color: 'red',
        paddingLeft: 60,
    
    },    
    
}));


const BuyAddStock = () => {
    const [product, setProduct] = useState({});

const handleSubmit = async (event) => {
           event.preventDefault();
           
           try{
               const data = PostAPI.addStock(product);
               setProduct(data)
               console.log(product);
               alert("produit bien ajouter à la liste"); 
           }catch(error){
           console.log(error);
           }
        };


    const classes = useStyles();

    return (
        <div>
        <Grid item sm="12">
            <h1>{product.name}</h1>
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
                <image src={product.pics_before}/>
                </div>
        </Grid>
            <Grid item sm="5">
                <div className="detail">
                    <p><span className="presentationB">Date de la vente : </span> 
                    {product.date_of_sale}
                    </p>
                    <p><span className="presentationB">Lieu de la Vente : </span>
                    {product.locality}
                    </p>
                    <p><span className="presentationB">Heure de la Vente : </span>
                    {product.hour}
                    </p>
                    <p><span className="presentationB">Mise à prix : </span> 
                    {product.starting_price} €
                    </p>
                    <p><span className="presentationB">frais de vente : </span>
                    {product.seelling_fees} %
                    </p>
                    <p><span className="presentationB">valeur produit similaire neuf : </span>
                    {product.new_value} €
                    </p>
                    <p><span className="presentationB">valeur produit similaire d'ocasion : </span>
                    {product.used_value} €</p>
                    <p><span className="presentationB">mise maximum de rentabilité : </span>
                    {product.maximum_bet} €</p>
                <Button variant="contained" color="primary"className={classes.button}onClick={handleSubmit}>
                    Ajouter au stock
                </Button>
                <Button variant="contained" color="primary"className={classes.button}>
                    Archiver
                </Button>
                <Button variant="contained" color="primary"className={classes.button}>
                    Modifier
                </Button>
                </div>
            </Grid>
        </Grid>
        
        </div>
            )
    }





export default BuyAddStock