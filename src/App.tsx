import { ErrorPage } from "./components/pages/error/ErrorPage";
import { OrderPage } from "./components/pages/order/OrderPage";
import { LoginPage } from "./components/pages/login/LoginPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
function App() {
  // Comportement

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
