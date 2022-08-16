import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
  this.state={
   products:[
    {
      price:99,
      title:'Watch',
       qty:1,
       img:'https://media.istockphoto.com/photos/wristwatch-picture-id1359180038?b=1&k=20&m=1359180038&s=170667a&w=0&h=DdYIpG4JNxkI4UZX_HR1GI8uUzLcUef1-JkvYgY5yG0=',
       id:1
    },{
      price:999,
      title:'Mobile Phone',
       qty:10,
       img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
       id:2
    },{
      price:999,
      title:'Laptop',
       qty:4,
       img:'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
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
   getCartCount =()=>{
     const {products}=this.state;
     let count =0;
      products.forEach(product => {
        count +=product.qty;
      });
     return count;
   }
   
    getCartTotal=()=>{
      const {products}=this.state;
        let cartTotal=0;
        products.map((product)=>{
          cartTotal+=cartTotal+product.qty*product.price
        })
        return cartTotal;
    }



  render(){
    const {products}=this.state;
  return (
    <div className="App">
     <Navbar count ={this.getCartCount()}/>
     <Cart 
      products={products}
      
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
     />

     <div style={{padding:10,fontSize:20}}>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
