import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
      const {data: {data: { movies }}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      setMovies(movies);
      setLoading(false);
  }

  useEffect(() => {
      getMovies().then();
  }, []);

  return (
    <div className="App">
      <div>{loading ? 'Loading ... ' : movies.map(movie => {
          const { id, year, title, summary, medium_cover_image } = movie;
          return <Movie key={id} id={id} year={year} title={title} summary={summary} poster={medium_cover_image} />
      })}</div>
    </div>
  );
}

export default App;
