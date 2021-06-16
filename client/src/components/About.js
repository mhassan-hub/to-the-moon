import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <NavBar />
      <h1>About Us</h1>
      <div className="body">
        <h2 className="description">
          We are three smart indiviuals navigating our way throught the CS world
          hoping to reach the moon!
        </h2>
        <div className="resume">
          <div className="resume-list">
            <Button
              color="secondary"
              variant="contained"
              target="_blank"
              href="https://resume.creddle.io/resume/cvklylzfn3q"
            >
              Mohamed Hassan
            </Button>
            <Button
              color="secondary"
              variant="contained"
              target="_blank"
              href="https://resume.creddle.io/resume/gue5aj4ng07"
            >
              Omar Irfan
            </Button>
            <Button
              color="secondary"
              variant="contained"
              target="_blank"
              href="https://www.linkedin.com/in/grigor-baltadjian-884860212/"
            >
              Grigor Baltadjian
            </Button>
          </div>
        </div>
        <div className="stack">
          <h2>Stacks Used:</h2>
          <h4>Frontend:</h4>
          <ul className="frontend-react">
            <img
              alt="react-icon"
              className="react-icon"
              src="https://i.imgur.com/hdHHlfN.png"
            ></img>
            <p>useState</p>
            <p>useEffect</p>
            <p>history</p>
            <p>Material-UI</p>
          </ul>
          <ul className="frontend-phaser">
            <img
              alt="phaser-icon"
              className="phaser-icon"
              src="https://i.imgur.com/3Qqo8om.png"
            ></img>
            <li>Scoring system</li>
            <li>Physics</li>
            <li>Animations</li>
            <li>Multiplayer</li>
          </ul>
          <h4>Backend:</h4>
          <ul className="Backend-rails">
            <img
              alt="rails-icon"
              className="rails-icon"
              src="https://i.imgur.com/ZVILSdf.png"
            ></img>
            <li>ERD</li>
            <li>Postgres DB</li>
            <li>Axios Calls</li>
            <li>User Authentification</li>
          </ul>
          <ul className="Backend-express">
            <img
              alt="express-icon"
              className="express-icon"
              src="https://i.imgur.com/EHltlZL.png"
            ></img>

            <li className="socket">Socket IO</li>
          </ul>
        </div>
        <h4>Key Learnings:</h4>
        <ul className="key-learnings">
          <li>Version Control</li>
          <li>Web Sockets</li>
          <li>Version Control</li>
          <li>Databases</li>
          <li>Phaser Game Engine</li>
        </ul>
      </div>
    </div>
  );
}
