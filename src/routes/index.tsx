import { Navigate, createBrowserRouter } from "react-router-dom";

import { Layout } from "@layouts";
import { About, Contact, Home, Photos, Services } from "@pages";
import { ROUTES } from "@utils/constants";
import { ProductDetailsPage } from "@containers";

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
        path: ROUTES.PHOTOS,
        element: <Photos />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
      {
        path: ROUTES.PRODUCT,
        element: <ProductDetailsPage />,
      },
      {
        path: "*",
        element: <Navigate to={ROUTES.HOME} replace />,
      },
    ],
  },
]);
