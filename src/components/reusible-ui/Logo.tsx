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
    width: 350px;
    height: 100%;
  }
  @media (max-width: 992px) {
    img {
      max-width: 300px;
      width: 100%;
    }
  }
`;
