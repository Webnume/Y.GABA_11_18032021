import React, { Component } from "react";
import Banner from "../asset/images/bannerApropos.jpg";
import Collapse from "../components/Collapse";

class MainAPropos extends Component {
  render() {
    return (
      <>
        <img src={Banner} alt="" />
        <main className="mainApropos">
          <Collapse width="1023px" title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </Collapse>
          <Collapse width="1023px" title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </Collapse>
          <Collapse width="1023px" title="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </Collapse>
          <Collapse width="1023px" title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </Collapse>
        </main>
      </>
    );
  }
}

export default MainAPropos;
