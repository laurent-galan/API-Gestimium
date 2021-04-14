import React, { Component } from 'react';
import {TextField, Button, Card, Grid} from '@material-ui/core';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill, BsFillGrid3X3GapFill} from "react-icons/bs";
import '../index.css'





class BuyDetail extends Component {

constructor (props) {
    super(props)
    this.state = {
        buying_price: null,
        tva: null,
        pics_after: null,
        id: null,

    }
    this.handleChange = this.handleChange.bind(this)
}  


handleChange (e) {
    const name = e.target.name
    this.setState({
        [name]: e.target.value
    })

    console.log(this.state);
    
    e.preventDefault();
        axios( {
          method: 'put',
          Auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE2ODU0NzQ2LCJleHAiOjE2MTk0NDY3NDZ9.zx_-iIh3cghElcaawSjZJvx9itNbzGcP5-d9z7QMY_A',
          data: {
                buying_price: `${this.state.buying_price}`,
                pics_after: `${this.state.pics_after}`,
                tva: `${this.state.tva}`,
                id: `${this.state.id}`,  
          }, 
          url: `http://localhost:1337/stocks/${this.state.id}`,
        }) 
        .then(function (response) { console.log(response); })
        .catch(function (error) { console.log(error); });
}



    render() {
        return (
<div>
    <nav>
        <Link to="/home">
            <Button variant="contained" color="primary">
                <BsFillHouseDoorFill />
                <span>Home</span>
            </Button>
        </Link>
        <Link to="/preparation">
                <Button variant="contained" color="primary">
                    <BsFillGrid3X3GapFill />
                    <span>Retour</span>
                </Button>
            </Link>
    </nav>
        <Grid xs={12}container justify="center" alignItems="center">
            <h1>Détail lié à l'achat du lot</h1>
        </Grid>
        <Grid xs={12}container justify="center" alignItems="center">
            <Grid xs={8}container justify="center" alignItems="center">
                <Card>
                <form  noValidate autoComplete="off"className="CardBuyDetail">
                    <grid>
                        <TextField id="outlined-basic" label="id" onChange={this.handleChange} name="id" />
                        <TextField id="standard-basic" label="Prix d'Achat" value={this.state.buying_price} onChange={this.handleChange} name="buying_price" />
                    </grid>
                    <grid>
                        <TextField id="standard-basic" label="TVA"  onChange={this.handleChange} name="tva" />
                        <TextField id="outlined-basic" label="photo aprés achat" onChange={this.handleChange} name="pics_after" />
                    </grid>
                    <Button variant="contained" color="primary" type='submit'onClick={this.state.handleSubmit}>
                        Ajouter au stocks
                    </Button>
                </form>  
                </Card>
            </Grid>
        </Grid>
</div>
        )
    };
}
export default BuyDetail