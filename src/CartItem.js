
import React from 'react';

class Cartitem extends React.Component{

        constructor(){
            super();
          this.state={
            price:999,
            title:'Phone',
             qty:1,
             img:''
          }
        //   this.increaseQuantity=this.increaseQuantity.bind(this);
        // this.testing();
        }
        //    testing(){
        //     const promise=new Promise((resolve,reject)=>{
        //         setTimeout(()=>{
        //             resolve('done');
        //         },5000);
        //     })

        //     promise.then(()=>{
        //         //setState acts like a synchronous call  
        //       this.setState({qty:this.});
        //       console.log('state',this.state);
        //     });
        //    }


        increaseQuantity=()=>{
        //    console.log('this',this); 
        //    this.setState({
        //     qty: this.state.qty+1 
        //    })
        //setState form2 = if prev state require use this
          this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
          });
        }
        decreaseQuantity=()=>{
            this.setState((prevState)=>{

                if(prevState.qty ==0){
                    return;
                }
                else{
                    return {      
                        qty:prevState.qty-1
                    }
                }
                
            }
            );
        }
     render(){
        const {price,title,qty}=this.state;
        return(
           
        <div className="cart-item">
          <div className='left-block'>
           <img style={styles.image}/>
          </div>
          <div className='right-block'>
               <div style={{fontSize:25}}>{title}</div>
               <div style={{color:'#777'}}>Rs {price}</div>
               <div style={{color:'#777'}}>Qty: {qty}</div>
               <div className='cart-item-actions'>
                 {/* Buttons */}
                 <img alt="increase" className="action-icons" src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
                 onClick={this.increaseQuantity}
                 />
                 <img alt="decrease" className="action-icons" src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" onClick={this.decreaseQuantity}/>
                 <img alt="delete" className="action-icons" src="https://t3.ftcdn.net/jpg/04/92/30/88/240_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg" />
               </div>
          </div>

        </div>
        );

     }
}

const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
         background:'#ccc'
    }
}

export default Cartitem;