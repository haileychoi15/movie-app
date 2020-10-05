import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const MovieBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 2% 70px;
  background: #fff;
  @media only screen and (min-width: 900px) {
    width: 46%;
    margin-bottom: 100px;
  }
`;

const MovieArticle = styled.article`
  width: 90%;
  display: flex;
  justify-content: center;
`;

const MoviePoster = styled.div`
  position: relative;
  min-width: 120px;
  height: auto;
  margin-right: 6%;
`;

const PosterImage = styled.img`
  position: absolute;
  top: -30px;
  width: 100%;
`;

const MovieData = styled.dl`
  flex-grow: 1;
  padding: 5% 0;
`;

const MovieTitle = styled.dt`
  font-weight: 700;
  @media only screen and (min-width: 480px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 900px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

const MovieYear = styled.dd`
  font-size: 15px;
  font-weight: 300;
`;

const MovieGenres = styled.dd`
  opacity: 0.8;
  font-weight: 400;
  @media only screen and (min-width: 480px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 900px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

function Movie({ id, year, title, summary, poster, genres, rating }) {

    return(
        <MovieBlock>
            <MovieArticle>
                <MoviePoster>
                    <PosterImage src={poster} alt={title} title={title} />
                </MoviePoster>
                <MovieData>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieYear>{year}</MovieYear>
                    <MovieGenres>{genres.join(', ')}</MovieGenres>
                    <strong className="movie_rating">{rating}</strong>
                    <p className="movie_summary">{summary}</p>
                </MovieData>
            </MovieArticle>
        </MovieBlock>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;