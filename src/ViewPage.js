import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
export default class ViewPage extends Component {
  render(){
    return(

    <div class="sidebar">
  <a class="active" >Home</a>
  <Link to='/login'>Login</Link>
  <Link to='/register'>Register</Link>
  <a >Contact</a>
  <a >About</a>
    </div>



    )
  }
}
