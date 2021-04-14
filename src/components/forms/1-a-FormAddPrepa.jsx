import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import PostAPI from '../../services/PostAPI';
import { makeStyles, Card, Grid} from '@material-ui/core';


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

const FormAddPrepa = () => {
    const [product, setProduct] = useState({});

const handleSubmit = async (event) => {
           event.preventDefault();
           
           try{
               const data = PostAPI.create(product);
               setProduct(data)
               console.log(product);
               alert("produit bien ajouter à la liste"); 
           }catch(error){
           console.log(error);
           }
        };
const handleChange = ({currentTarget}) => {
    const {name , value} = currentTarget;
        setProduct({
            ...product,
            [name]: value,
        })
    };


    const classes = useStyles();

    return (
<Grid item sm="8">
    <Card className={classes.Allform}>
        <form onSubmit={handleSubmit}>
                <div className="middle">
                    <TextField
                        label="Nom du Produit"
                        type="text"
                        onChange={handleChange}
                        name="name"                        
                    />
                </div>
            <Grid container spacing={8}>
                <div>
                    <TextField
                        id="date"
                        label="Date de la Vente"
                        type="date"
                        onChange={handleChange}
                        name="date_of_sale"
                        defaultValue="2021-05-01"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,}}
                    />
                </div>
                <div>
                    <TextField
                        id="time"
                        label="heure"
                        type="time"
                        defaultValue="08:00"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                        onChange={handleChange}
                        name="hour"
                    />
                </div>
            </Grid>
                <div className="middle">
                    <TextField
                        label="url de l'image (server)"
                        type="url"
                        onChange={handleChange}
                        name="pics_before"
                        className={classes.aloneLine}
                    />
                </div>
            <Grid container spacing={8}>
                <div>
                    <TextField
                        label="Ville"
                        type="text"
                        onChange={handleChange}
                        name="locality"  
                        className={classes.textField}                      
                    />
                </div>
                <div>
                    <TextField
                        label="Catégorie"
                        type="text"
                        onChange={handleChange}
                        name="category"  
                        className={classes.textField}                      
                    />
                </div>
            </Grid>
                
            <div className="middle">               
                <TextField
                    label="Prix de départ"
                    type="number"
                    onChange={handleChange}
                    name="starting_price"
                    className={classes.aloneLine}
                />
            </div>
            <Grid container spacing={8}>
                <div>
                    <TextField
                        label="Valeur d'Occasion"
                        type="number"
                        onChange={handleChange}
                        name="used_value"  
                        className={classes.textField}                      
                    />
                </div>
                <div>
                    <TextField
                        label="Valeur Neuf"
                        type="number"
                        onChange={handleChange}
                        name="new_value"  
                        className={classes.textField}                      
                    />
                </div>
            </Grid>
            <Grid container spacing={8}>
                <div>
                    <TextField
                        label="frais de Vente (%)"
                        type="number"
                        onChange={handleChange}
                        name="seelling_fees"  
                        className={classes.textField}                      
                    />
                </div>
                <div>
                    <TextField
                        label="Enchére Maximum"
                        type="number"
                        onChange={handleChange}
                        name="maximum_bet"  
                        className={classes.textField}                      
                    />
                </div>
            </Grid>
            <div className="submitButton">
                <Button variant="contained" color="primary"type="submit">
                    Ajouter
                </Button>

            </div>
            </form>
    </Card>
</Grid>
        
)
}





export default FormAddPrepa