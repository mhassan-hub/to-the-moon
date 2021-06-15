import Button from "@material-ui/core/Button";
import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavBar from "./NavBar";
import "./Leaderboard.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        To-The-Moon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
  },
  body: {
    fontSize: 14,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  },
}))(TableRow);

export default function Leaderboard() {
  const [highScores, setHighScores] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/scores").then((res) => {
      setHighScores(res.data.high_scores);
      console.log(res.data.high_scores);
      let rows = res.data.high_scores.length;
    });
  }, []);

  return (
    <div className="Leaderboard">
      <NavBar />
      <div className="table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">Rank</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">HighScore</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {highScores.map((highScore, index) => (
                <StyledTableRow>
                  <StyledTableCell
                    variant="contained"
                    color="secondary"
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {index + 1}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {highScore.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {highScore.high_score}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}
