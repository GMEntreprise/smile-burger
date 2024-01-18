import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../theme/index";
import { TextInput } from "../../reusible-ui/TextInput";
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

      <div>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder="Entrez votre prénom..."
          icon={<BsPersonCircle className="icon" />}
        />
        <button className="btn-with-icon" type="submit">
          <span>Accéder à votre espace</span>
          <IoChevronForward className="icon" />
        </button>
      </div>
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

  .btn-with-icon {
    width: 100%;
    border: 1px solid ${theme.colors.primary};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 18px 24px;
    background-color: ${theme.colors.primary};
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    font-weight: 700;
    cursor: pointer;

    span {
      font-size: 0.9rem;
    }

    &:hover:not(:disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-in-out;
    }
    &:active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9rem;
      margin-left: 10px;
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
