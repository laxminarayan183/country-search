import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import AppLayout from "./components/AppLayout";
import Error from "./pages/Error";
import CountryDetails from "./components/CountryDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <CountryDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
