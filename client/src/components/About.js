import "./About.css";
import Link from "@material-ui/core/Link";
import NavBar from "./NavBar";

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
          <ul className="resume-list">
            <li>
              <Link
                color="secondary"
                target="_blank"
                href="https://resume.creddle.io/resume/cvklylzfn3q"
              >
                Mohamed Hassan
              </Link>
            </li>
            <li>
              <Link
                color="secondary"
                target="_blank"
                href="https://resume.creddle.io/resume/gue5aj4ng07"
              >
                Omar Irfan
              </Link>
            </li>
            <li>
              <Link
                color="secondary"
                target="_blank"
                href="https://www.linkedin.com/in/grigor-baltadjian-884860212/"
              >
                Grigor Baltadjian
              </Link>
            </li>
          </ul>
        </div>
        <div className="stack">
          <h3>Stacks Used:</h3>
          <h4>Frontend:</h4>
          <ul className="frontend-react">
            <img
              alt="react-icon"
              className="react-icon"
              src="https://i.imgur.com/hdHHlfN.png"
            ></img>
            <li>useState</li>
            <li>useEffect</li>
            <li>history</li>
            <li>Material-UI</li>
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
            <li>Axios calls</li>
            <li>User Authentification</li>
          </ul>
          <ul className="Backend-express">
            <img
              alt="express-icon"
              className="express-icon"
              src="https://i.imgur.com/EHltlZL.png"
            ></img>

            <li>Socket IO</li>
          </ul>
        </div>
        <div>
          <h3>Key Learnings:</h3>
          <p></p>
        </div>
        <ul>
          <li>Grigor Baltadjian </li>
          <li>Omar Irfan</li>
          <li>Mohamed Hassan</li>
        </ul>
      </div>
    </div>
  );
}
