import React, { useEffect } from 'react';

function Detail (props) {
    const { location, history } = props;
    console.log(location.state);
    useEffect(() => {
        if(location.state === undefined) history.push('/');
    } , []);

    const { year, title, summary, poster, genres, rating } = location.state;

    return (
        <span>{title}</span>
    );
}

export default Detail;