import React from "react";
import styled from "styled-components";
import { NavBarRightSide } from "./NavBarRightSide";

interface NavBarProps {
  username: string;
}

const NavBar: React.FC<NavBarProps> = ({ username }) => {
  return (
    <NavBarStyled>
      <div className="nav-left">left</div>
      <NavBarRightSide username={username} />
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
`;
