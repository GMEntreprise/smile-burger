import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavBarProps {
  username: string;
}

const NavBar: React.FC<NavBarProps> = ({ username }) => {
  return (
    <NavBarStyled>
      <div className="nav-left">left</div>
      <div className="nav-right">
        <h1>
          Bonjour, <span>{username}</span>
        </h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: blue;
  height: 10vh;
  .nav-left {
    background: pink;
  }
  .nav-right {
    background: #d20b8c;
  }
`;
