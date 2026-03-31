import { Navigate, createBrowserRouter } from "react-router-dom";

import { Layout } from "@layouts";
import { About, Contact, Home, Services } from "@pages";
import { ROUTES } from "@utils/constants";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
      {
        path: "*",
        element: <Navigate to={ROUTES.HOME} replace />,
      },
    ],
  },
]);
