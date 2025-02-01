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
  AdminLogin,
  SelectRoleRegister,
  MentorRegister,
 
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
        element: <MenteeLogin />,
      },
      {
        path: "MenteeRegister",
        element: <MenteeRegister />,
      },
      {
        path: "MentorRegister",
        element: <MentorRegister />,
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
      {
        path: "AdminLogin",
        element: <AdminLogin/>
      },
      {
        path: "SelectRoleRegister",
        element: <SelectRoleRegister/>
      },
      {
        path: "MentorRegister",
        element :<MentorRegister/>
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
