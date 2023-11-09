import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SingleBookingCard from "./SingleBookingCard";
import Seo from "../../shared-components/seo-component/Seo";

const Bookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const [isBookingLoaded, setIsBookingLoaded] = useState(false);


    const handleMyBookings = id => {
        const rest = myBookings.filter(booking => booking._id !== id);
        setMyBookings(rest);
    }
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://hotel-nest-server.vercel.app/my-bookings?email=${user.email}`, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                setMyBookings(data);
                setIsBookingLoaded(true)
            })
    }, [user]);

    return (
        <>
             <Seo titleText="Hotel Nest | Bookings"/>
            <div>
                {
                    isBookingLoaded &&
                    <div>
                        {
                            !myBookings.length ?
                                <p className="text-xl text-center">You have no booking.</p>
                                :
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    {
                                        myBookings.map(booking => <SingleBookingCard
                                            key={booking._id}
                                            bookingData={booking}
                                            handleMyBookings={handleMyBookings}
                                        />)
                                    }
                                </div>

                        }
                    </div>


                }

            </div>
        </>
    );
};

export default Bookings;