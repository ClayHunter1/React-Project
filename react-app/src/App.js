import React, { useState, useEffect} from 'react';
import navBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=c4be9593"

    const response = await fetch(url);
    const responsJson = await response.json();
    setMovies(responsJson.Search);
  };

  useEffect(()=>{
    getMovieRequest();
  }, []);

  return (
    <>
      <navBar />
      <div className='container-fluid movie-app'>
        <div className='row'>
          <MovieList movies = {movies} />
        </div>
      </div>
    </>
  );
}

export default App;