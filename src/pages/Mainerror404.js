import React, { Component } from "react";
import {Link} from "react-router-dom"

class Error404 extends Component {
  render() {
    return (
      <main className="mainError404">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
    );
  }
}

export default Error404;
