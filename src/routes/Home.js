import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Movie from "../components/Movie";
import Loader from "../components/Loader";
import UpButton from "../components/UpButton";

const Container = styled.section`
  margin-top: 100px;
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const {data: {data: { movies }}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=like_count');
        setMovies(movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies().then();
    }, []);

    const [scroll, setScroll] = useState(false);
    window.addEventListener('scroll', () => {
        window.scrollY > 500 ? setScroll(true) : setScroll(false);
    });

    return (
        <div className="Home">
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
            {scroll && <UpButton />}
        </div>
    );
}

export default Home;
