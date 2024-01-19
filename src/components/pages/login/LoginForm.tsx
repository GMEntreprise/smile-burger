import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../theme/index";
import { BsPersonCircle } from "react-icons/bs";

import { TextInput } from "../../reusible-ui/TextInput";
import { PrimaryButton } from "../../reusible-ui/PrimaryButton";

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
          Icon={<BsPersonCircle className="icon" />}
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
        />
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
    border: 1.5px solid ${theme.colors.primary};
    font-size: 48px;
    margin: 40px 0;
  }

  h1 {
    color: ${theme.colors.white};
    font-weight: ${theme.weights.extraLight};
    font-size: ${theme.fonts.P5};
  }

  span {
    font-weight: ${theme.weights.extraLight};
    font-size: 30px;
  }

  h2 {
    color: ${theme.colors.white};
    margin: 10px 10px 10px;
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.extraLight};
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    margin-left: 10px;
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
  }
`;
