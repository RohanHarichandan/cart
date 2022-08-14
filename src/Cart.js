import React from 'react';
import Cartitem from './CartItem';


class Cart extends  React.Component{

  constructor(){
    super();
  this.state={
   products:[
    {
      price:99,
      title:'Watch',
       qty:1,
       img:'',
       id:1
    },{
      price:999,
      title:'Mobile Phone',
       qty:10,
       img:'',
       id:2
    },{
      price:999,
      title:'Laptop',
       qty:4,
       img:'',
       id:3
    }
   ]

  }
//   this.increaseQuantity=this.increaseQuantity.bind(this);
// this.testing(); 
}
handleIncreaseQuantity=(product)=>{
   console.log('Heyy please inc the qty of ',product);
   const {products}=this.state;
   const index=products.indexOf(product);          
   
   products[index].qty +=1;
   this.setState({
    products
   })
}

handleDecreaseQuantity=(product)=>{
  console.log('Heyy please dec the qty of ',product);
  const {products}=this.state;
  const index=products.indexOf(product);
  
  if(products[index].qty >0){
    products[index].qty -=1;
    this.setState({
      products
    })
  }
  else{
    return;
  }
}
  handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id !==id); //[{}]

    this.setState({
      products:items
    })
  } 

  render(){
    const {products}=this.state;
    return(
    <div className='cart'>
    
      {products.map((product)=>{
         return (<Cartitem 
           product={product}
            key={product.id}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
            />)
      })

      }
    </div>
    );
  }
}

export default Cart;