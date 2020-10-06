import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";

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
  font-size: 16px;
`;

const Stars = styled.span`
  margin-right: 5px;
  font-size: 15px;
  color: #ffc700;
  //background: #ffc700;
`;

const MovieSummary = styled.dd`
  @media only screen and (min-width: 480px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 900px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }   
`;

function Movie({ id, year, title, summary, poster, genres, rating }) {

        const stars = (rating/2);
        const quotient = Math.floor(stars);
        const remainer = ((stars * 10) % 10 < 5) ?  0.0 : 0.5; // 몫과 상관없이 소수점이 0.5가 넘으면 0.5로 만들고, 0.5가 안되면 0.0으로 만든다.

        let fullStars = [];
        let emptyStars = [];
        let halfStar = false;
        let count = quotient;

        for (let i = 0; i < quotient; i++){
            fullStars.push('');
        }
        if(remainer === 0.5) {
            halfStar = true;
            count += 1;
        }
        for (let i = 0; i < (5 - count); i++) {
            emptyStars.push('');
        }

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
                    <MovieRating>
                        <Stars>
                            {fullStars.map((star, index) => (<IoIosStar key={index} />))}
                            {halfStar && <IoIosStarHalf />}
                            {emptyStars.map((star, index) => (<IoIosStarOutline key={index} />))}
                        </Stars>
                        <strong>
                            {rating}
                        </strong>
                    </MovieRating>
                    <MovieSummary>
                        <p>{summary}</p>
                    </MovieSummary>
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