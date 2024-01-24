import styled from "styled-components";
import logo from "../../../public/image/SmileSwell_logo.png";
import logo1 from "../../../public/image/logo_smileswell.png";
interface LogoProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <LogoStyled onClick={onClick}>
      <img className={className} src={logo} alt="Logo SmileSwell" />
    </LogoStyled>
  );
};
export const LogoNav: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <LogoStyled onClick={onClick}>
      <img className={className} src={logo1} alt="Logo SmileSwell" />
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
