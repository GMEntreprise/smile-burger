import { Link, useParams } from "react-router-dom";

export const OrderPage = () => {
  // STATE

  const { username } = useParams();

  // COMPORTEMENT

  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
};
