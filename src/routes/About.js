import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 12px;
  padding: 30px;
  color: #fff;
  background-color: rgba(255, 100, 80, 0.9);
  box-shadow: 0 18px 23px -8px rgba(50, 50, 93, 0.5);
  & .about-title{
    font-size: 18px;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
  }
  & .about-description{
    font-size: 15px;
    font-weight: 400;
  }
`;

function About() {
    return (
        <Container>
            <p>
                <span className="about-title">What is Movie App?</span> Movie App is a <strong className="about-description">movie recommendation service</strong> that offers a wide variety of movies.
                So you don't have to think about what to watch!
            </p>
        </Container>
    );
}

export default About;