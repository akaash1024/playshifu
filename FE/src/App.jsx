import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
