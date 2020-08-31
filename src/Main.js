import React, { Component } from "react";

import {
    Route,
    NavLink,
    BrowserRouter   
  } from "react-router-dom";
  import Home from "./Home";
  import About from "./About";
  import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
            <h1>Orna&Mina אתר חדש </h1>
            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </BrowserRouter>
    );
  }
}
 
export default Main;