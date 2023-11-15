import React from 'react';
import './CartItem.css';
import BoutiqueContext from '../../BoutiqueContext';


const CartItem = (props) => {
  const boutiqueContext = React.useContext(BoutiqueContext);
  const article = boutiqueContext.articlesApp[props.id]
  return (
    <div className="CartItem">
      <div className='imgCartItem'><img src={article.url} alt="" /></div>
      <span>{article.name}</span>
      <span
       onClick={
        () => {
          boutiqueContext.qteIncrement(props.id)
        }
      }
      >-</span>
      <span>{props.qte}</span>
      <span
        onClick={
          () => {
            boutiqueContext.qteDecrement(props.id)
          }
        }
      >+</span>
      <span>{article.price*props.qte} €</span>
    </div>
  )
};



export default CartItem;
