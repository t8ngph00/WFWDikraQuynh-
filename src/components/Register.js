import React from 'react';
import {Link} from "react-router-dom"
export default function Register(props)
{
    return(
    <div>

    <div className="App">
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="username" value={props.username} onChange={props.handChange}/>
        <input type="password" name="password" value={props.password} onChange={props.handChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>

      <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  )
}
