import React from "react";
import styled from "styled-components";
import { NavBarRightSide } from "./NavBarRightSide";
import { Logo } from "../../../reusible-ui/Logo";

interface NavBarProps {
  username: string;
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ username }) => {
  return (
    <NavBarStyled>
      <Logo className={"logo-navbar"} />
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
  padding: 0 20px;

  .logo-navbar {
    width: 160px;
  }
`;
