import React from 'react';
import { Link } from "react-router-dom";

export default function Pay(props) {
  console.log(props)


  const productData = props.getProductInfo(parseInt(props.match.params.id));
  return (
    <div>
        <>
        <div className="container">
          <h2 className="text-center">Time</h2>
          <div className="timer-captures">
          </div>
            <div className="current-timer">
                {props.hours + ":" + props.minutes + ":" + props.seconds}
            </div>
            <div className="timer-controls">
              <button className="btn btn-success" onClick={props.handleStart}>Start Time</button>
              <button className="btn btn-alert" onClick={props.handleStop}>Stop Time</button>
              <button className="btn btn-info" onClick={props.handleReset}>Reset Time</button>
              <Link to='/pay' onClick={() => props.Add(productData.id, productData.price)}>Pay</Link>
            </div>
        </div>
        </>

        <button onClick={() => props.history.goBack()}>Back</button>
    </div>

  )
}
