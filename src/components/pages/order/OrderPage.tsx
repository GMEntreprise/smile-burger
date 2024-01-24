import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./navbar/NavBar";
import { Main } from "./Main";
import { theme } from "../../../theme";

export const OrderPage = () => {
  // STATE

  const { username } = useParams();

  // COMPORTEMENT

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar username={username!} />
        <Main />
      </div>
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    content: "";
    background: rgba(0, 0, 0, 0.4) url("/public/image/background-1.jpeg");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
