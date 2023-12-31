import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Chat from "./components/chat/Chat";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./Route/PrivateRoute";
import Menu from "./components/Menu";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Menu/>
          </PrivateRoute>
        ),
        children:[
          {
            path: "/chat",
            element: (
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            ),
          },
        ]
      },
    

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
