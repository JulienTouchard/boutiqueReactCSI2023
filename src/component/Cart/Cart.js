import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
  
  return (
    <section className="Cart">
      <h2>{props.children}</h2>
      <div>
        {/* Affichage des elements de mon panier avec CartItem et à partir de props.panierLength */}
        {
            props.panier.map((value,index)=>{
              console.log(index)
              return(<CartItem key={index} id={value}/>)
            })
        }
      </div>
    </section>
  );
}



export default Cart;
