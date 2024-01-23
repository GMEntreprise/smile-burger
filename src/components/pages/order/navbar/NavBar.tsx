import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavBarProps {
  username: string;
}

const NavBar: React.FC<NavBarProps> = ({ username }) => {
  return (
    <NavBarStyled>
      <h1>
        Bonjour, <span>{username}</span>
      </h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavBarStyled>
  );
};

export default NavBar;

const NavBarStyled = styled.nav`
  background: blue;
  height: 10vh;
`;
