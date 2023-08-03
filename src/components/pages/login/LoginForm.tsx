import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  // STATE

  const [inputValue, setInputValue] = useState<string>("");

  //   COMPORTEMENT
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Bonjour " + inputValue);

    // Je vide le formulaire
    setInputValue("");
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} action="submit">
      <h1>Bienvenue chez nous !</h1>
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
      <Link to="/order">Vers OrderPage</Link>
    </form>
  );
};
