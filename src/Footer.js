import React, { Component } from "react";
import Logo from "./asset/images/logo.svg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={Logo} alt="" />
        <span>© 2020 Kasa. All rights reserved</span>
      </footer>
    );
  }
}

export default Footer;
