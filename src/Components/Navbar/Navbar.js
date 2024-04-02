import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

const NavLinkItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavLinks>
        <NavLinkItem>
          <NavLink to="/home">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/predict">PredictFare</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/quickpredict">QuickPredict</NavLink>
        </NavLinkItem>
      </NavLinks>
    </NavContainer>
  );
};

export default NavBar;
