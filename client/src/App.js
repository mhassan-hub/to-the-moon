import Game from './components/game'
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((result) => {
      console.log("result", result);
    });
  }, []);

  return (
		<Game />

  );
}

export default App;
