import React from 'react';
import { Link } from "react-router-dom";

export default function Pay(props)
{
  let total="";
  return(
    <>
    {
      props.AddToCart.map(i=>{
        const product = props.getAdd(i.id);
        if(i.price === 0.20){
          total = total + (props.hours/60 + props.minutes + props.seconds/60) * product.price
        }else if(i.price === 18){
          total = total + (props.hours + props.minutes/60 + props.seconds/3600) * product.price
        }
        return(<li key={i.id}>{total}</li>)
      })
    //  props.hours + props.minutes + props.seconds
    }
    <Link to='/' onClick={props.Finish}>Finish</Link>
    <button onClick={() => props.history.goBack()}>Back</button>
  </>
  )
}
