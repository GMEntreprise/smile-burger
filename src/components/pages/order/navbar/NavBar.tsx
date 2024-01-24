import React from "react";
import styled from "styled-components";

import { NavBarRightSide } from "./NavBarRightSide";
import { Logo } from "../../../reusible-ui/Logo";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../utils/window";

interface NavBarProps {
  username: string;
}

const NavBar: React.FC<NavBarProps> = ({ username }) => {
  return (
    <NavBarStyled>
      <Logo className={"logo-navbar"} onClick={refreshPage} />
      <NavBarRightSide username={username} />
    </NavBarStyled>
  );
};

export default NavBar;

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.white};
  height: 10vh;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  .logo-navbar {
    width: 160px;
    cursor: pointer;
  }
`;
