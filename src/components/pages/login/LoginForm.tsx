import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export const LoginForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setInputValue("");

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
      <h2>Connectez-vous !</h2>
      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
      </div>
      <button type="submit">Accéder à votre espace</button>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
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
  .input-with-icon {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      color: #93a2b1;
      margin-right: 8px;
      font-size: 15px;
    }
    input[type="text"] {
      border: none;
      width: 100%;
      font-size: 15px;
    }

    &::placeholder {
      background: #fff;
      color: #e4e5e9;
    }
  }
  /********* RESPONSIVE **********/
  @media (max-width: 992px) {
    max-width: 100%;
    min-width: 100%;
    h1 {
      font-size: 30px;
    }

    span {
      font-size: 20px;
    }

    h2 {
      font-size: 26px;
    }

    .input-with-icon {
      .icon {
        font-size: 20px;
      }

      input[type="text"] {
        font-size: 14px;
      }
    }

    button {
      font-size: 16px;
    }
  }
`;
