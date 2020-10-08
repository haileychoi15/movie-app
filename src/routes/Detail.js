import React, { useEffect } from 'react';
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5%;
  margin-top: 50px;
  border-radius: 8px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.3);
  dt {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  dd {
  margin-bottom: 10px;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const DetailPoster = styled.div`
  width: 100%;
  height: auto;
  margin-right: 5%;
  margin-bottom: 20px;
  & img {
    width: 100%;
    border-radius: 10px;
  }
  @media only screen and (min-width: 768px) {
    width: 30%;
    margin-bottom: 0;
  }
`;

const DetailData = styled.div`
  position: relative;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`;

const DetailTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const DetailYear = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
`;

const DetailInfo = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const DetailRating = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const DetailSummary = styled.div`
  padding: 10px 0 60px;
  font-size: 20px;
  font-weight: 300;
`;

const BackButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  color: #fff;
  background-color: #d0d0d0;
  box-shadow: 0 8px 15px -3px rgba(50, 50, 93, 0.3);
  transition: box-shadow 150ms ease-in-out;
  &:hover {
    box-shadow: 0 10px 18px -5px rgba(50, 50, 93, 0.6);
  }
  @media only screen and (min-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 22px;
  }
`;

function Detail (props) {
    const { location, history } = props;
    useEffect(() => {
        if(location.state === undefined) history.push('/');
    } , []);

    if(location.state) {
        const { year, title, summary, poster, genres, rating, runtime } = location.state;
        return (
                <Link to="/">
                <DetailContainer>
                    <DetailPoster>
                        <img src={poster} alt={title} title={title} />
                    </DetailPoster>
                    <DetailData>
                        <dl>
                            <DetailTitle>
                                <dt>title : </dt>
                                <dd>{title}</dd>
                            </DetailTitle>
                            <DetailYear>
                                <dt>year : </dt>
                                <dd>{year}</dd>
                            </DetailYear>
                            <DetailInfo>
                                <dt>genres : </dt>
                                <dd>{genres.join(' ')}</dd>
                            </DetailInfo>
                            <DetailInfo>
                                <dt>runtime : </dt>
                                <dd>{runtime} minutes</dd>
                            </DetailInfo>
                            <DetailSummary>
                                <dt>summary : </dt>
                                <dd>{summary}</dd>
                            </DetailSummary>
                        </dl>
                        <BackButton>
                            <RiArrowGoBackLine />
                        </BackButton>
                    </DetailData>
                </DetailContainer>
                </Link>
        );
    }
    else {
        return null;
    }
}

export default Detail;