import "./App.css";
import Header from "./components/Header";
import MainHome from "./pages/MainHome";
import MainAPropos from "./pages/MainAPropos";
import MainFicheLogement from "./pages/MainFicheLogement";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Error404 from "./pages/Error404";

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
