import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Movie from "./Movie";
import Loader from "./Loader";

const Container = styled.section`
  margin-top: 100px;
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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
      <GlobalStyle />
      <Container>
          {loading
              ? <Loader />
              : <Movies>
                  {movies.map(movie => (
                      <Movie key={movie.id}
                             id={movie.id}
                             year={movie.year}
                             title={movie.title}
                             rating={movie.rating}
                             summary={movie.summary}
                             poster={movie.medium_cover_image}
                             genres={movie.genres} />
                  ))}
              </Movies>
          }
      </Container>
    </div>
  );
}

export default App;
