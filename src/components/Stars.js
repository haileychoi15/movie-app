import React from 'react';
import styled from "styled-components";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";

const StarsContainer = styled.div`
  & * {
    vertical-align: middle;
  }
`;

const StarsBlock = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: baseline;
  margin-right: 8px;
  color: #ffc700;
`;

function Stars({ rating }) {

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

    return (
        <StarsContainer>
            <StarsBlock>
                {fullStars.map((star, index) => (<IoIosStar key={index} />))}
                {decimal && <IoIosStarHalf />}
                {emptyStars.map((star, index) => (<IoIosStarOutline key={index} />))}
            </StarsBlock>
            <strong>{rating}</strong>
        </StarsContainer>
    );
}

export default Stars;

