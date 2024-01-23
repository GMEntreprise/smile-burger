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
  background: #530101;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
