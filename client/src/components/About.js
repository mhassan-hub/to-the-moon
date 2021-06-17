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
        <div className="picture">
          <img
            alt="team-pic"
            className="team-pic"
            src="https://i.imgur.com/vFff3fQ.png"
          ></img>
        </div>
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
              href="https://www.linkedin.com/in/grigor-baltadjian-884860212/"
            >
              Grigor Baltadjian
            </Button>
            <Button
              color="secondary"
              variant="contained"
              target="_blank"
              href="https://resume.creddle.io/resume/gue5aj4ng07"
            >
              Omar Irfan
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
            <div className="react-tech">
              <p>UseState</p>
              <p>UseEffect</p>
              <p>History</p>
              <p>Material-UI</p>
            </div>
          </ul>
          <ul className="frontend-phaser">
            <img
              alt="phaser-icon"
              className="phaser-icon"
              src="https://i.imgur.com/3Qqo8om.png"
            ></img>
            <div className="phaser-tech">
              <p>Scoring System</p>
              <p>Physics</p>
              <p>Animations</p>
              <p>Multiplayer</p>
            </div>
          </ul>
          <h4>Backend:</h4>
          <ul className="Backend-rails">
            <img
              alt="rails-icon"
              className="rails-icon"
              src="https://i.imgur.com/ZVILSdf.png"
            ></img>
            <div className="rails-tech">
              <p>ERD</p>
              <p>Postgres DB</p>
              <p>Axios Calls</p>
              <p>User Authentification</p>
            </div>
          </ul>
          <ul className="Backend-express">
            <img
              alt="express-icon"
              className="express-icon"
              src="https://i.imgur.com/EHltlZL.png"
            ></img>
            <div className="express-tech">
              <p className="socket">Socket IO</p>
              <p>ExpressJS</p>
              <p>End-to-End Connection</p>
              <p>Payload Management</p>
            </div>
          </ul>
        </div>
        <h4>Key Learnings:</h4>
        <ul className="key-learnings">
          <p>Version Control</p>
          <p>Web Sockets</p>
          <p>Version Control</p>
          <p>Databases</p>
          <p>Phaser Game Engine</p>
        </ul>
      </div>
    </div>
  );
}
