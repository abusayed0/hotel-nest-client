import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SingleBookingCard from "./SingleBookingCard";

const Bookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/my-bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyBookings(data))
    }, [user]);
    return (
        <div>
            {
                !myBookings ?
                <p className="text-xl text-center">You have no booking.</p>
                :
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        myBookings.map(booking => <SingleBookingCard
                            key={booking._id}
                            bookingData={booking}
                        />)
                    }
                </div>

            }
        </div>
    );
};

export default Bookings;