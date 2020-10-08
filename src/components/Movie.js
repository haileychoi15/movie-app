import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";

const MovieBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 5% 70px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.3);
  transition: all 250ms ease-in-out;  
  
  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 18px 32px -5px rgba(50, 50, 93, 0.6);
  }         
              
  @media only screen and (min-width: 900px) {
    width: 40%;
    margin-bottom: 100px;
  }
`;

const MovieArticle = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 4%;
`;

const MoviePoster = styled.div`
  position: relative;
  min-width: 80px;
  height: auto;
  margin-right: 6%;
  @media only screen and (min-width: 480px) {
    min-width: 120px;
  }
  @media only screen and (min-width: 768px) {
    min-width: 150px;
  }
  @media only screen and (min-width: 900px) {
    min-width: 120px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 150px;
  }
`;

const PosterImage = styled.img`
  position: absolute;
  top: -30px;
  width: 100%;
  height: auto;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.5);
`;

const MovieData = styled.dl`
  flex-grow: 1;
  padding: 5% 0;
  color: #000;
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
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 300;
`;

const MovieGenres = styled.dd`
  opacity: 0.8;
  font-size: 15px;
  font-weight: 400;
`;

const MovieRating = styled.dd`
  margin-bottom: 10px;
  font-size: 16px;
`;

const MovieSummary = styled.dd`
  font-size: 11px;
  font-weight: 300;
  color: gray;
  @media only screen and (min-width: 480px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 900px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 15px;
  }   
`;

function Movie({ id, year, title, summary, poster, genres, rating, runtime }) {

    return(
        <MovieBlock>
            <Link to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres,
                    rating,
                    runtime
                }
            }} >
                <MovieArticle>
                    <MoviePoster>
                        <PosterImage src={poster} alt={title} title={title} />
                    </MoviePoster>
                    <MovieData>
                        <MovieTitle>{title}</MovieTitle>
                        <MovieYear>{year}</MovieYear>
                        <MovieGenres>{genres.join(', ')}</MovieGenres>
                        <MovieRating>
                            <Stars rating={rating} />
                        </MovieRating>
                        <MovieSummary>
                            <p>
                                {summary.slice(0, 200) + (summary.length > 200 && ' ... ')}
                            </p>
                        </MovieSummary>
                    </MovieData>
                </MovieArticle>
            </Link>
        </MovieBlock>

    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;