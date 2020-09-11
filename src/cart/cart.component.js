import React, {useEffect, useState} from 'react';
import {Button, Input} from 'reactstrap';
import {currencyToNumber, numberToCurrency} from '../util/currency';
import './cart.component.scss';

const CartComponent = ({item: {code, name, quantity, price}, cartDispatch}) => {
  const [newQuantity, setNewQuantity] = useState(quantity);
  useEffect(() => setNewQuantity(quantity), [quantity]);
  return (
    <div className="cart__item col-md-12">
      <div className="row row-cols-4">
        <div className="col">{name}</div>
        <div className="col">{quantity}</div>
        <div className="col">{price}</div>
        <div className="col">{numberToCurrency(currencyToNumber(price) * quantity / 100)}</div>
      </div>
      <div className="row row-cols-4 justify-content-end">
        <div className="col">
          <Input type="number" value={newQuantity} onChange={(e) => setNewQuantity(Number(e.target.value))}/>
        </div>
        <div className="col">
          <Button color="success" onClick={() => cartDispatch({type: 'UPDATE', code, newQuantity})}>Update</Button>
        </div>
      </div>
    </div>
  );
};
export default CartComponent;
