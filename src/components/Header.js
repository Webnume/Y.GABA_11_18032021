import React, { Component } from "react";
import Logo from "../asset/images/logo.svg";
import Menu from "./Menu";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to={"/"}>
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <Menu />
      </header>
    );
  }
}

export default Header;
