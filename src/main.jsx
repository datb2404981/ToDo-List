import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ProductsPage from "./pages/products.jsx";
import UsersPage from "./pages/users.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDoApp from "./components/todo/toDoApp.jsx";
import ErrorPage from "./pages/errors.jsx";
import "antd/dist/reset.css";

// 👇 import thêm
import { ConfigProvider, App as AntdApp } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ToDoApp />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  </StrictMode>
);
