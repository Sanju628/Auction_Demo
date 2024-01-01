import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Hobbies from "./components/Hobbies";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:<SignUp />
            },
            {
                path:"/dashboard",
                element:<Dashboard />
            },
            {
                path:"/hobbies",
                element:<Hobbies />
            },
            {
                path:"/login",
                element:<Login />
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
)