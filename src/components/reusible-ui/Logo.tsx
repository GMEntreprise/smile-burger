import logo from "../../assets/SmileSwell_logo.png";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <img src={logo} alt="Logo SmileSwell" />
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  img {
    width: 250px;
    height: 100%;
  }
`;
