import { Link } from "react-router-dom";
import Button from "./Button";
import "../App.css";

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

      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
