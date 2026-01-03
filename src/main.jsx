import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProfileProvider } from "./ProfileContext";
import App from "./App";
import Profile from "./Profile";
import Viewstory from "./Viewstory";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/profile", element: <Profile /> },
  { path: "/story/:id/:tot", element: <Viewstory /> }
]);

createRoot(document.getElementById("root")).render(
  <ProfileProvider>
    <RouterProvider router={router} />
  </ProfileProvider>
);
