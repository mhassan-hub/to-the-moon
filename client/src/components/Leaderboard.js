import { Link } from "react-router-dom";
import Button from "./Button";
import "../App.css";
import axios from "axios";
import { useState, useEffect } from 'react'

export default function Leaderboard() {
  const [highScores, setHighScores] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/scores')
    .then(res => {
      setHighScores(res.data.high_scores)
    })
  })

  return (
    <div className="Leaderboard">
      <h3>
        Leaderboard
      </h3>
      <ul>
        {highScores.map(highScore => <li>{highScore.username} {highScore.high_score}</li> )}
      </ul>

      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}