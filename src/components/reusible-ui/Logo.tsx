import styled from "styled-components";
import logo from "../../../public/image/SmileSwell_logo.png";
interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <LogoStyled>
      <img className={className} src={logo} alt="Logo SmileSwell" />
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  @media (max-width: 992px) {
    img {
      max-width: 300px;
      width: 100%;
    }
    @media (max-width: 600px) {
      img {
        max-width: 110px;
      }
    }
  }
`;
