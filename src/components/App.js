import React, {useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Popular from "./Popular";
import Trending from "./Trending";
import Sidebar from "./Sidebar";
import Movie from "./Movie";
import Results from "./Results";
import Discover from "./Discover";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

export default function App() {

  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <Router>
      <div className="App">
        <Header
          onClick={handleClick} />
        <Sidebar
          isShown={isShown}/>
        <Route
          path="/"
          exact
          render={props => <Main {...props} title="Movie search" />}
        />
        <Route
          path="/search"
          exact
          render={props => <Main {...props} title="Movie search" />}
        />
        <Route
          path="/discover"
          render={props => <Discover {...props} title="Discover" />}
        />
        <Route
          path="/popular"
          component={Popular}
        />
        <Route
          path="/trending"
          component={Trending}
        />
        <Route
          path="/search?query=:searchTerm"
          component={Results}
        />
        <Route path="/movie/:id" component={Movie} />
        <Footer />
        </div>
    </Router>
  );
}
