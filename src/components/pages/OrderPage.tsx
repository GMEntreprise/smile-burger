import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export const OrderPage = () => {
  // STATE

  const { username } = useParams();

  // COMPORTEMENT

  return (
    <OrderPageStyled>
      <div className="container">
        <h1>
          Bonjour, <span>{username}</span>
        </h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
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
    background: orange;
    height: 95vh;
    width: 1400px;
  }
`;
