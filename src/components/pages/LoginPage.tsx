import React, { useState } from "react";

export const LoginPage = () => {
  const [formSubmit, setFormSubmit] = useState<string>("");

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Bonjour " + formSubmit);

    // Je vide le formulaire
    setFormSubmit("");
  }
  return (
    <div>
      <h1>Bienvenue chez nous </h1>
      <h2>Connectez vous ! </h2>

      <form onSubmit={submitForm} method="post">
        <input
          value={formSubmit}
          onChange={(e) => setFormSubmit(e.target.value)}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </div>
  );
};
