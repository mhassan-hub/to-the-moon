import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function Leaderboard() {
  const [highScores, setHighScores] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/scores").then((res) => {
      setHighScores(res.data.high_scores);
      console.log(res.data.high_scores);
      let rows = res.data.high_scores.length 
    });
  }, []);
  
  return (
   <div>
  <h1>Leaderboard</h1>
    <TableContainer component={Paper}>
      <Table className="Leaderboard">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell align= "center">Rank</StyledTableCell>
          <StyledTableCell align="center">Name</StyledTableCell>
          <StyledTableCell align="center">HighScore</StyledTableCell>
          
        </StyledTableRow>
      </TableHead>
        <TableBody>

        {highScores.map((highScore, index) => (
           <StyledTableRow>
          <StyledTableCell align="center" component="th" scope="row">
          {index+1}
          </StyledTableCell>
          
          <StyledTableCell align="center">{highScore.username}</StyledTableCell>
          <StyledTableCell align="center">{highScore.high_score}</StyledTableCell>
          </StyledTableRow> 
          ))
        }
        </TableBody>
      </Table>  
      </TableContainer>



      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
