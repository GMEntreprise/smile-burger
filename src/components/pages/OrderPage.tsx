import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export const OrderPage = () => {
  // STATE

  const { username } = useParams();

  // COMPORTEMENT

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          <h1>
            Bonjour, <span>{username}</span>
          </h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <main>Main</main>
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
    background: orange;
    max-width: 1400px;
    width: 100%;
    height: 95vh;
  }
  .navbar {
    background: blue;
    height: 10vh;
  }
  main {
    background: #f2ff00;
    flex: 1;
  }
`;
