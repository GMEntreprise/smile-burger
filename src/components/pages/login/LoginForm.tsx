import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit} action="submit">
      <h1>
        Bienvenue chez nous ! <br />
        Rend chaque ride inoubliable.{" "}
      </h1>
      <br />
      <h2>Connectez vous ! </h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button type="submit">Accéder à votre espace</button>
    </form>
  );
};
