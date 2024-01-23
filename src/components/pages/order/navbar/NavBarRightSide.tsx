import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavBarRightSideProps {
  username: string;
}

export const NavBarRightSide: React.FC<NavBarRightSideProps> = ({
  username,
}) => {
  return (
    <NavBarRightSideStyled>
      <h1>
        Bonjour, <span>{username}</span>
      </h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavBarRightSideStyled>
  );
};

const NavBarRightSideStyled = styled.div`
  background: #d20b8c;
`;
