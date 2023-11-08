import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Rooms from "../pages/rooms/Rooms";
import Bookings from "../pages/bookings/Bookings";
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/rooms",
                element: <Rooms/>
            },
            {
                path: "/bookings",
                element: <Bookings/>
            },
            {
                path: "/sign-in",
                element: <SignIn/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            },
        ]
    }
]);
export default MyRouter;