import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf, IoIosMore } from "react-icons/io";

const MovieBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 2% 70px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.3);
  transition: all 250ms ease-in-out;
  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 18px 32px -5px rgba(50, 50, 93, 0.6);
  }         
              
  @media only screen and (min-width: 900px) {
    width: 46%;
    margin-bottom: 100px;
  }
`;

const MovieArticle = styled.article`
  width: 92%;
  display: flex;
  justify-content: center;
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
  padding: 3% 0;
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

const Stars = styled.span`
  margin-right: 5px;
  font-size: 15px;
  color: #ffc700;
`;

const MovieSummary = styled.dd`
  font-size: 12px;
  font-weight: 300;
  color: gray;
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

const SummaryButton = styled.button`
  position: relative;
  top: 5px;
  left: 10px;
  width: 40px;
  height: 20px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  color: gray;
  background-color: #efefef;
`;

function Movie({ year, title, summary, poster, genres, rating }) {

    // 별점 기준 : 정수와 상관없이 소수점이 0.5가 넘으면 0.5로, 0.5가 안되면 0.0으로 취급한다. 예) 4.75 -> 4.5, 3.2 -> 3.0
    const fiveStarRating = (rating/2);
    const integer = Math.floor(fiveStarRating);
    const decimal = ((fiveStarRating * 10) % 10 >= 5);

    let fullStars = [];
    let emptyStars = [];
    const count = decimal ? integer + 1 : integer;

    for (let i = 0; i < integer; i++){
        fullStars.push('');
    }
    for (let i = 0; i < (5 - count); i++) {
        emptyStars.push('');
    }

    const [leftSummary, setLeftSummary] = useState(false);
    const onClick = () => {
        setLeftSummary(!leftSummary);
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
                            {decimal && <IoIosStarHalf />}
                            {emptyStars.map((star, index) => (<IoIosStarOutline key={index} />))}
                        </Stars>
                        <strong>
                            {rating}
                        </strong>
                    </MovieRating>
                    <MovieSummary>
                        <p>
                            <span>{summary.slice(0, 200)}</span>
                            {summary.length > 200 && !leftSummary &&
                                <SummaryButton onClick={onClick}>
                                    <IoIosMore />
                                 </SummaryButton>}
                            {leftSummary && summary.slice(201)}
                        </p>
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