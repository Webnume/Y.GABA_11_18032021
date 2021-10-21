import "./App.css";
import Header from "./Header";
import MainHome from "./MainHome";
import MainAPropos from "./MainAPropos";
import MainFicheLogement from "./MainFicheLogement";
import Footer from "./Footer";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Error404 from "./Mainerror404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <MainHome />
          </Route>
          <Route path="/Apropos" exact>
            <MainAPropos />
          </Route>
          <Route path="/MainFicheLogement" exact>
            <MainFicheLogement />
          </Route>
          <Route path="/MainFicheLogement/:id" component={(props)=> <MainFicheLogement idHouse={props.match.params.id} />} />
          <Route render={() => <Error404 />} />
        </Switch>
      </BrowserRouter>

      {/* <MainHome/>       */}
      {/* <MainFicheLogement /> */}

      <Footer />
    </div>
  );
}

export default App;
