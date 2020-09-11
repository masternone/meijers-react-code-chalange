import React, {useEffect, useReducer, useState} from 'react';
import './App.scss';
import CartComponent from './cart/cart.component';
import ProductComponent from './product/product.component';
import {cartReducer, getProducts} from './store';
import {currencyToNumber, numberToCurrency} from './util/currency';

const App = () => {
  const [products, setProducts] = useState({});
  const [cart, cartDispatch] = useReducer(cartReducer, {}, (i) => i);
  useEffect(() => {
      getProducts().then((p) => {
        const keyedReturn = {};
        p.forEach(i => keyedReturn[i.code] = i);
        setProducts(keyedReturn);
      });
    }, []
  );
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Meijers Frontend Hard</h1>
        </div>

        <div className="row">
          <div className="products col-md-8 row row-cols-md-3">
            <div className="products__title col-md-12"><h2>Products</h2></div>
            {Object.values(products).map(product => (
              <div className="products__product col" key={product.code}>
                <ProductComponent product={product} onClick={() => cartDispatch({type: 'ADD', product})}/>
              </div>
            ))}
          </div>
          <div className="cart col-md-4 row">
            <div className="cart__title col-md-12"><h2>Cart</h2></div>
            {Object.values(cart)
                   .filter(item => item.quantity > 0)
                   .map(item => (
                     <CartComponent item={item} cartDispatch={cartDispatch} key={item.code}/>
                   ))}
            <div className="cart__total col-md-12 row justify-content-between">
              <div className="col-md-3"><strong>TOTAL</strong></div>
              <div className="col-md-3">
                {numberToCurrency(
                  Object.values(cart)
                        .reduce((a, c) => a + (currencyToNumber(c.price) * c.quantity), 0) / 100
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
