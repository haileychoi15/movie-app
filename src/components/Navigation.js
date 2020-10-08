import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.nav`
  display: inline-block;
  border-radius: 6px;
  background-color: #fff;
  padding: 10px 15px 15px;
  margin: 20px 0 0 30px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.3);
`;

const Ol = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Li = styled.li`
  font-weight: 500;
  & + & {
    margin-left: 20px;
  }
  & .nav_link {
    color: #000;
  }
`;

function Navigation() {
    return (
        <Nav>
            <Ol>
                <Li>
                    <Link to="/" className="nav_link">Home</Link>
                </Li>
                <Li>
                    <Link to="/about" className="nav_link">About</Link>
                </Li>
            </Ol>
        </Nav>
    );
}

export default Navigation;