import styled from "styled-components";
import { Profile } from "./Profile";

interface NavBarRightSideProps {
  username: string;
}

export const NavBarRightSide: React.FC<NavBarRightSideProps> = ({
  username,
}) => {
  return (
    <NavBarRightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <Profile username={username} />
    </NavBarRightSideStyled>
  );
};

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: #02dc73;
  } */
`;
