import Game from "./game";
import "../App.css";
import axios from "axios";
import Button from "./Button";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function Home() {
  return (
    <div className="About">
      <h3>
        We are three smart indiviuals navigating our way throught the CS world
        hoping to reach the moon!
      </h3>
      <ul>
        <li>Grigor Baltadjian </li>
        <li>Omar Irfan</li>
        <li>Mohamed Hassan</li>
      </ul>
    </div>
  );
}
