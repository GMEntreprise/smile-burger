import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>ErrorPage</h1>
      <button>
        <Link to="/">Retourner à la page d'accueil </Link>
      </button>
    </div>
  );
};
