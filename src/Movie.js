import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const movie = styled.article`

`;

function Movie({ id, year, title, summary, poster, genres, rating }) {

    return(
        <div className="movie">
            <article>
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="genres">
                        {genres && genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
                    </ul>
                    <strong className="movie_rating">{rating}</strong>
                    <p className="movie_summary">{summary}</p>
                </div>
            </article>
        </div>
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