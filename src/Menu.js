import React, { Component } from "react";
import {Link} from "react-router-dom";

class Menu extends Component {
  render() {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/" >
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/Apropos" >
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Menu;
