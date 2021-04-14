import React from 'react';
import testCalendar from './components/Calendar.jsx';
import Test from './components/Test';
import FutureSale from './components/1-c-FutureSale';
import Home from './components/1 home';
import ProductList from './components/1-b-ProductList';
import SingleProduct from './components/1-b-SinglePrepaProduct';
import BuyAddStock from './components/1-b-BuyAddStock';
import StockList from './components/2-a-StockList';
import SingleStockProduct from './components/2-a-SingleStockProduct.jsx';
import ProductForSale from './components/3-a-ProductForSale';
import SaleList from './components/3-b-SaleList';
import SingleSaleProduct from './components/3-b-SingleSaleProduct';
import SingleProductForSale from './components/3-a-SingleProductForSale';
import AddProduct from './components/1-a-addProduct';
import BuyDetail from './components/1-b-BuyDetail';
import StockSold from './components/2-c-StockSold';
import StockSoldDetail from './components/2-c-DetailStockSold';

import Container from '@material-ui/core/Container';
import {BrowserRouter as Router , Route} from 'react-router-dom';




function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Route path="/testCalendar" exact component={testCalendar}></Route>
          <Route path="/test" exact component={Test}></Route>
          <Route path="/future-sale" exact component={FutureSale}></Route>
          {/* Home */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          {/* Preparation */}
          <Route path="/ajouter" exact component={AddProduct}></Route>
          <Route path="/preparation" exact component={ProductList}></Route>
          <Route path="/preparation/:id" exact component={SingleProduct}></Route>
          <Route path="/buypreparation/:id" exact component={BuyDetail}></Route>
          <Route path="/buy-detailpreparation/:id" exact component={BuyAddStock}></Route>
          {/* Stock */}
          <Route path="/stock" exact component={StockList}></Route>
          <Route path="/stock/:id" exact component={SingleStockProduct}></Route>
          <Route path="/soldstock/:id" exact component={StockSold}></Route>
          <Route path="/soldstockdetails/:id" exact component={StockSoldDetail}></Route>
          {/* Vente */}
          <Route path="/vente" exact component={SaleList}></Route>
          <Route path="/vente/:id" exact component={SingleSaleProduct}></Route>
          <Route path="/a-vendre" exact component={ProductForSale}></Route>
          <Route path="/a-vendre/:id" exact component={SingleProductForSale}></Route>   
        </Router>
      </div>
    </Container>
  );
}

export default App;
