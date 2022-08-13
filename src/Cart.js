import React from 'react';
import Cartitem from './CartItem';


class Cart extends  React.Component{

  render(){
    return(
    <div className='cart'>
      <Cartitem/>
      <Cartitem/>
      <Cartitem/>
    </div>
    );
  }
}

export default Cart;