import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Rooms from "../pages/rooms/Rooms";
import Bookings from "../pages/bookings/Bookings";
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";
import RoomDetails from "../pages/room-details/RoomDetails";
import ProetectedPage from "../protected-page/ProetectedPage";
import ErrorPage from "../pages/error-page/ErrorPage";
import UpdateDate from "../pages/update-date/UpdateDate";
import AddReview from "../pages/add-review/AddReview";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/rooms",
                loader: () => fetch("http://localhost:5000/rooms"),
                element: <Rooms/>
            },
            {
                path: "/room/:id",
                loader: ({params}) => fetch(`http://localhost:5000/room/${params.id}`),
                element: <RoomDetails/>
            },
            {
              
                path: "/bookings",
                element: <ProetectedPage><Bookings/></ProetectedPage>
            },
            {
                path: "/sign-in",
                element: <SignIn/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            },
            {
                path: "/update-booking/:bookingId",
                loader: ({params}) => fetch(`http://localhost:5000/my-bookings/${params.bookingId}`),
                element:<ProetectedPage><UpdateDate/></ProetectedPage>
            },
            {
                path: "/add-review/:roomId",
                element: <ProetectedPage><AddReview/></ProetectedPage>
            }
        ]
    }
]);
export default MyRouter;