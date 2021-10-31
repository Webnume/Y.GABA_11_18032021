import React, { Component } from "react";
import Tag from "./Tag";
import Ratings from "./Ratings";
import Collapse from "./Collapse";
import { getHouse } from "./services/dataManager";
import SliderGallery from "./SliderGallery";
// import {useParams} from "react-router-dom"

class MainFicheLogement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      logement: []
    };
  }

  async componentDidMount() {
    try {
      const data = await getHouse(this.props.idHouse);
      // console.log(data);
      this.setState(data);
      // this.setState({isLoaded: true});
      
    } catch (error) {
      console.warn("\\\\\\\\",error)
      this.setState(error);
      // this.setState({error : true});
    }
  }

  render() {
    const { error, isLoaded, logement } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Chargement…</div>;
    }
    // let {id} = useParams();
    return (
      <>
        <SliderGallery logementPictures={logement.pictures} />
        <main className="mainFiche">
          <section className="Top">
            <div className="left">
              {/* <h3>ID : {id}</h3> */}
              <h1>{logement.title}</h1>
              <h2>{logement.location}</h2>
              <ul className="tag">
                {logement.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            </div>
            <div className="right">
              <div className="namePhoto">
                <h3>{logement.host.name}</h3>
                <img
                  className="roundedImg"
                  src={logement.host.picture}
                  alt=""
                />
              </div>
              <div>
                <Ratings ratingValue={logement.rating} />
              </div>
            </div>
          </section>
          <section className="bottom">
            <Collapse width="582px" title="Description">
              {logement.description}
            </Collapse>          
            <Collapse width="582px" title="Équipements" type="list">
              {logement.equipments}
            </Collapse>
          </section>
        </main>
      </>
    );
  }
}

export default MainFicheLogement;
