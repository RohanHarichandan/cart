
import React from 'react';

// class Cartitem extends React.Component
   const CartItem=(props)=>{

    
      // console.log('this.props',this.props);
        const {price,title,qty}=props.product;
        const {
          product,   
          onIncreaseQuantity,
          onDecreaseQuantity,
          onDeleteProduct
        }=props;
        return(
           
        <div className="cart-item">
          <div className='left-block'>
           <img style={styles.image} src={product.img}/>
          </div>
          <div className='right-block'>
               <div style={{fontSize:25}}>{title}</div>
               <div style={{color:'#777'}}>Rs {price}</div>
               <div style={{color:'#777'}}>Qty: {qty}</div>
               <div className='cart-item-actions'>
                 {/* Buttons */}
                 <img alt="increase"
                   className="action-icons"
                   src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
                   onClick={()=>onIncreaseQuantity(product)}
                 />
                 <img alt="decrease"
                  className="action-icons"
                   src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" onClick={()=>onDecreaseQuantity(product)}/>
                 <img alt="delete" className="action-icons" src="https://t3.ftcdn.net/jpg/04/92/30/88/240_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg"  onClick={()=>onDeleteProduct(product.id)}/>
               </div>
          </div>

        </div>
        );

     
}

const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
         background:'#ccc'
    }
}

export default CartItem;