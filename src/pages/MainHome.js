import React, { Component } from "react";
import Banner from "../asset/images/bannerHome.jpg";
import AppartCard from "../components/AppartCard";
import { getAllData } from "../services/dataManager";
import { Link } from "react-router-dom";

class MainHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      logements: [],
    };
  }

  async componentDidMount() {
    try {
      const data = await getAllData();
      this.setState(data);
    } catch (error) {
      this.setState(error);
    }
  }

  render() {
    const { error, isLoaded, logements } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Chargement…</div>;
    }
    return (
      <>
        <img src={Banner} alt="" />
        <main className="mainHome">
          {logements.map((logement) => (
            <Link to={`/MainFicheLogement/${logement.id}`} key={logement.id}>
              <AppartCard
                img={logement.cover}
                logement={logement} idhouse={logement.id} 
              >
                {logement.title}
              </AppartCard>
            </Link>
          ))}
        </main>
      </>
    );
  }
}

export default MainHome;
