import React from 'react';
import Cartitem from './CartItem';

class Cart extends  React.Component{

  render(){
    const arr=[1,2,3,4,5];
    return(
        <div className="cart">
          { arr}
        </div>
    );
  }
}

export default Cart;