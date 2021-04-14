/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';


function create(product) {   
  return  axios.post('http://localhost:1337/prepas/', product).then((res) => res.json); 
}

function addstock(product) {   
  return  axios.post('http://localhost:1337/stocks', product).then((res) => res.json); 
}

// function addstock(product) {
// axios( {
//   method: 'post',
//   Auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE2ODU0NzQ2LCJleHAiOjE2MTk0NDY3NDZ9.zx_-iIh3cghElcaawSjZJvx9itNbzGcP5-d9z7QMY_A',
//   data: {name: `${product.name}`,
//         category: `${product.category}`,
//         pics_before: `${product.pics_before}`,
//         date_of_sale: `${product.date_of_sale}`,
//         hour: `${product.hour}`,
//         locality: `${product.locality}`,
//         starting_price: `${product.starting_price}`,
//         used_value: `${product.used_value}`,
//         new_value: `${product.new_value}`,
//         seeling_fees: `${product.seelling_fees}`,
//         maximum_bet: `${product.maximum_bet}`,
//         buying_price: `${this.state.buying_price}`,
//         pics_after: `${this.state.pics_after}`,
//         tva: `${this.state.tva}`,
//         charge: `${product.charge}`,
//         seeling_date: `${product.seeling_date}`,
//         seeling_price: `${product.seeling_price}`,
//         profit: `${product.profit}`,
//   }, 
//   url: 'http://localhost:1337/stocks',
// }) 
// .then(function (response) { console.log(response); })
// .catch(function (error) { console.log(error); });
// return (
//   <h1>sa marche</h1>
// )}



export default {
    create,
    addstock,
    
};
  

