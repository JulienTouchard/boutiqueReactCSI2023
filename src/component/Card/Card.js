import React from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import './Card.css';

const Card = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);
    return (
        <div className='card'>
            <img src={props.articleProp.url} />
            <p>{props.articleProp.name}</p>
            <p>{props.articleProp.desciption}</p>
            <p>{props.articleProp.price} £</p>
            <p>{props.articleProp.qte} disponible(s)</p>
            
            <button
            disabled={
                boutiqueContext.articlesApp[props.articleProp.id].qte > 0 ?
                false : true
            }
            onClick={
                () => {
                    boutiqueContext.qteDecrement(props.articleProp.id)
                }
            }>Achat</button>

        </div>
    )
}
export default Card