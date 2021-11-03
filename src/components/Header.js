import React, { Component } from "react";
import Logo from "../asset/images/logo.svg";
import Menu from "./Menu";

class Header extends Component {
  render() {
    return (
        <header>
          <img className="logo" src={Logo} alt="" />
          <Menu />
        </header>
    );
  }
}

export default Header;
