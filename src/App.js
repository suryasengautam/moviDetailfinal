import React, { useState } from "react";
import "./styles.css";
var moviesType = ["romantic", "comedy", "biopic"];
var movieDetail = {
  romantic: [
    [1, "three idiot", 2009, "5/10"],
    [2, "dilwale", 2008, "7/10"],
    [3, "halfgirlfriend", 2016, "8/10"]
  ],

  comedy: [
    [1, "housefull", 2009, "4/10"],
    [2, "dhol", 2020, "4/10"],
    [3, "chalang", 2019, "7/10"]
  ],
  biopic: [
    [1, "m.s.dhoni", 2009, "4/10"],
    [2, "super 30", 2009, "4/10"],
    [3, "dangal", 2016, "8/10"]
  ]
};
var index = ["movie no :", "movie name :", "realise year :", "rating :"];
export default function App() {
  var [movieMeaning, setMovieMeaning] = useState("");
  function onClickHandler(movie) {
    var movieMeaning = movieDetail[`${movie}`].map(function (mItem, i) {
      return (
        <li
          key={index[i]}
          style={{
            padding: "1.3rem",
            fontSize: "1.5rem",
            background: "green"
          }}
        >
          <div style={{ backgroundColor: "red" }}>
            <div> movie name: {mItem[1]}</div>
            <div> movie release year: {mItem[2]}</div>
            <div> movie rating: {mItem[3]}</div>
          </div>
        </li>
      );
    });

    setMovieMeaning(movieMeaning);
    console.log(movieMeaning);
  }
  return (
    <div className="App">
      <h1>check out best movies!</h1>
      <h2>
        {" "}
        {moviesType.map(function (movie) {
          return (
            <span
              onClick={() => onClickHandler(movie)}
              key={movie.num}
              style={{
                fontSize: "1.3rem",
                padding: "1rem",
                cursor: "pointer",
                background: "blue"
              }}
            >
              {movie}
            </span>
          );
        })}{" "}
      </h2>
      {movieMeaning}
    </div>
  );
}
