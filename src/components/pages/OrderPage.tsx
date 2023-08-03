import { Link } from "react-router-dom";

export const OrderPage = () => {
  // COMPORTEMENT

  return (
    <div>
      <h1>Bonjour</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
};
