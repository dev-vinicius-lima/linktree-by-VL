import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Networks from "./pages/Networks";

import Private from "./pages/routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/admin/social",
    element: (
      <Private>
        <Networks />
      </Private>
    ),
  },
]);

export { router };
