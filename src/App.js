import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Movies from "./components/Movies";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const result = await axios.get(
  //       `http://www.omdbapi.com/?i=tt3896198&apikey=960b03a5`
  //     );
  //     setMovies(result.data.Search);
  //   };
  //   fetchMovies();
  // }, [searchTerm]);

  return (
    <React.Fragment>
      <Header />
      <Jumbotron />
      <Search />
      <Movies />
    </React.Fragment>
  );
}

export default App;
