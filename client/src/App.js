import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:3000/users").then((result) => {
  //     console.log(result);
  //   });
  // }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
