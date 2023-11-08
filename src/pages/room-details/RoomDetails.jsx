import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import RoomImageSlider from "./RoomImageSlider";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
const RoomDetails = () => {
    const {user} = useContext(AuthContext);
    const from = useLocation().pathname;
    const navigate = useNavigate();
    const roomDetails = useLoaderData();
    const { _id, title, description, cost_per_night, size, special_offer, total_seat, total_review, thumbnail_image, images } = roomDetails;
    const [review, setReview] = useState([]);

    const [date, setDate] = useState(null);
    const [availableSeat, setAvailableSeat] = useState(null);
    const [available, setAvailable] = useState(null);
    const [loading, setLoading] = useState(false);

    // console.log(roomDetails);

    // console.log("available", available);
    const handleChangeDate = newDate => {
        console.log(newDate);

        setDate(newDate);
        setAvailableSeat(null);
        setAvailable(null);
        if (!newDate) {
            return;
        }
        setLoading(true);
        const dateString = `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`;
        // console.log(dateString);
        fetch(`http://localhost:5000/booking-data?date=${dateString}&roomId=${_id}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "all room available") {
                    setAvailableSeat(total_seat);
                    setAvailable(true);
                    setLoading(false);
                }
                else {
                    setAvailableSeat(data.restSeat);
                    setAvailable(date.restSeat > 0)
                    setLoading(false);
                }
            })
    };

    const handleBooking = () => {
        if(!user){
            navigate("/sign-in",{state: {from}});
        }
    };

    return (
        <div>
            <div className="bg-[#e7cbcb33] p-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 ">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl">{title}</h2>
                        <p className="text-xl">{description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center md:text-left">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl">Cost per seat</h4>
                                <h3 className="text-3xl font-medium">${cost_per_night}</h3>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl">Room size</h4>
                                <h3 className="text-3xl font-medium">{size}</h3>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl">Total seat</h4>
                                <h3 className="text-3xl font-medium">{total_seat}</h3>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl">Total review</h4>
                                <h3 className="text-3xl font-medium">{total_review}</h3>
                            </div>
                        </div>
                        <div className="text-2xl bg-white p-3">
                            {
                                special_offer === "none" ?
                                    <p className="text-center">No offer is available at this moment.</p>
                                    :
                                    <p>{special_offer}</p>
                            }
                        </div>
                    </div>

                    <RoomImageSlider photos={[thumbnail_image, ...images]} />
                </div>
                <div className="mt-14">
                    <h3 className="text-3xl font-semibold text-center mb-3">Review</h3>
                    {
                        !review.length ?

                            <div className="text-2xl bg-white p-3 text-center">
                                <p>No review for this room.</p>
                            </div>
                            :
                            <div>

                            </div>
                    }
                </div>
            </div>
            <div className="mt-20 bg-[lightgray] p-8">
                <div className="flex gap-2 justify-center items-center">
                    <label htmlFor="date" className="text-xl">Booking Date :</label>
                    <DatePicker
                        // onFocus={(e) => e.target.setAttribute("readOnly","true")}
                        onChangeRaw={e => e.preventDefault()}
                        dateFormat="dd/MM/yyyy"
                        id="date"
                        selected={date}
                        isClearable
                        onChange={(newDate) => handleChangeDate(newDate)}
                        showIcon={true}
                        placeholderText="dd/mm/yyyy"
                    />
                </div>

                <div className="mt-5 text-center">
                    <h4 className="text-2xl font-semibold mb-2">Availability :</h4>
                    {
                        loading && <p className="text-xl">Loading...</p>
                    }
                    {

                        (available === true)
                        &&
                        <p className="text-xl">Available seat {availableSeat}</p>

                    }
                    {
                        available === false
                        &&
                        <p className="text-xl text-red-600">No seat available.</p>
                    }
                    {
                        !date && <p className="text-xl text-red-600">Please select a date first</p>
                    }
                </div>
                <div className="mt-8 text-center">

                    <button onClick={handleBooking} disabled={!date || !availableSeat? true : false} className=" px-4 py-2 text-xl font-medium text-white bg-[#643843] hover:bg-[#99627A]">Book Now</button>
                </div>

            </div>
        </div>
    );
};

export default RoomDetails;