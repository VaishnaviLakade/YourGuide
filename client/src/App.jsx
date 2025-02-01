import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  HomeLayout,
  Landing,
  MentorLogin,
  MenteeLogin,
  Logout,
  MenteeRegister,
  SelectRole,
} from "./pages";
import { ToastContainer, toast } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "MentorLogin",
        element: <MentorLogin />,
      },
      {
        path: "MenteeLogin",
        element: <MentorLogin />,
      },
      {
        path: "mentee-register",
        element: <MenteeRegister />,
      },
      {
        path: "mentor-register",
        element: <MenteeRegister />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "SelectRole",
        element: <SelectRole />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
