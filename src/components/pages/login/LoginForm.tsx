import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const LoginForm = () => {
  // STATE

  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

  //   COMPORTEMENT
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Je vide le formulaire
    setInputValue("");

    // Je redirige l'utilisateur vers la OrderPage avec le nom de l'utilisateur
    navigate(`order/${inputValue}`);
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>
        Bienvenue chez nous ! <br />
        <span>Rend chaque ride inoubliable.</span>
      </h1>

      <hr />
      <br />
      <h2>Connectez-vous ! </h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button type="submit">Accéder à votre espace</button>
    </LoginFormStyled>
  );
};
const LoginFormStyled = styled.div`
  background: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;

  hr {
    border: 1.5px solid #bf2051;
    font-size: 48px;
    margin: 40px 0;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  span {
    font-size: 30px;
  }
  h2 {
    color: white;
    margin: 10px 10px 10px;
    font-size: 36px;
  }
`;
