import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import ProtectedRoutes from "./middleware/ProtectedRoutes.jsx";

// importing the pages
import Authentication from "./pages/Authentication.jsx";
import MuiWithHooks from "./pages/MuiComponents";
import { PageNotFound } from "./pages/PageNotFound.jsx";
import ProductsListHooks from "./pages/ProductDetails.jsx";
import EachItemHooks from "./pages/EachItem.jsx";
import ApiChecking from "./pages/ApiChecking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/mui",
    element: <ProtectedRoutes> <MuiWithHooks /> </ProtectedRoutes>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/product",
    element: <ProtectedRoutes> <ProductsListHooks /> </ProtectedRoutes>,
    // children : [
    //   {
    //     index:true
    //   },
    //   {
    //     path:":id",
    //     element : <EachItemHooks />
    //   }
    // ]
  },
  {
    path: "/product/:id",
    element: <ProtectedRoutes> <EachItemHooks /> </ProtectedRoutes>,
  },
  {
    path : "/api",
    element : <ProtectedRoutes > <ApiChecking /> </ProtectedRoutes>
  }
]);

// theme object
const themeObj = createTheme({
  palette: {
    primary: {
      main: "#720bb3",
    },
    secondary: {
      main: "#a8a432",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={themeObj}>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
