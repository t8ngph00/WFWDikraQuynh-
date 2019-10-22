import React from 'react';
import '.././App.css';
import { Link } from "react-router-dom";



const ItemDetail = props => {
  return <div>

    <div className="column">
      <div className="center">
        <Link to={ `/product/${props.id}` }>
        <img src={`/Picture/${props.img}`} alt="" />
        <h1>
        { props.name}
        </h1>
        <h2>
        { props.price} { props.priceValue }
        </h2>
        </Link>
      </div>

    </div>

  </div>

}

export default ItemDetail;


//<Link to={ `/product/${props.id}` }>
//<img src={`/Picture/${props.img}`} alt="" />
//</Link>
