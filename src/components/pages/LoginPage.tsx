import React, { ChangeEvent, useState } from "react";

export const LoginPage = () => {
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
    <div>
      <h1>Bienvenue chez nous </h1>
      <h2>Connectez vous ! </h2>

      <form onSubmit={handleSubmit} action="submit">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </div>
  );
};
