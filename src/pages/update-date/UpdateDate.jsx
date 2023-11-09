import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import moment from "moment";
import toast from "react-hot-toast";
import Seo from "../../shared-components/seo-component/Seo";

const UpdateDate = () => {
    const bookingData = useLoaderData();
    console.log(bookingData);
    const { _id, bookedDate, total_seat, roomId } = bookingData;
    const dateFullString = moment(bookedDate, "DD-MM-YYYY")._d;
    const [shortStringDate, setShortStringDate] = useState(bookedDate);
    const [date, setDate] = useState(dateFullString)
    const [availableSeat, setAvailableSeat] = useState(null);
    const [available, setAvailable] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isNoChange, setIsNoChange] = useState(true);

    const handleChangeDate = newDate => {

        const formattedDate = moment(newDate).format("DD-MM-YYYY");

        setError("");
        setDate(newDate);
        setAvailableSeat(null);
        setAvailable(null);
        const checkIsNoChange = formattedDate === shortStringDate;
        setIsNoChange(checkIsNoChange)
        if (checkIsNoChange) {
            return;
        }
        if (!newDate) {
            return;
        }
        setLoading(true);

        fetch(`http://localhost:5000/booking-data?bookedDate=${formattedDate}&roomId=${roomId}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "all room available") {
                    setAvailableSeat(total_seat);
                    setAvailable(true);
                    setLoading(false);
                }
                else {
                    setAvailableSeat(data.restSeat);
                    setAvailable(data.restSeat > 0)
                    setLoading(false);
                }
            })
            .catch(() => {
                setError("failed to load");
                setLoading(false);
            })
    };

    const handleUpdateDate = () => {
        const updatedData = {
            date: moment(date).format("DD-MM-YYYY"),
        }
        // change the date in user booking collection 
        fetch(`http://localhost:5000/my-bookings/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    const changedData = {
                        preDate: bookedDate,
                        newDate: moment(date).format("DD-MM-YYYY"),
                        roomId: roomId,
                        restSeat: total_seat - 1
                    }
                    fetch(`http://localhost:5000/update/booking-data`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(changedData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount || data.insertedId) {
                                toast.success("date updated successfully"),
                                    setShortStringDate(moment(date).format("DD-MM-YYYY"));
                                setIsNoChange(true);
                            }
                        })

                }
            })
    }
    return (
        <>
            <Seo titleText="Hotel Nest | Update Date" />
            <div className="mt-20 bg-[lightgray] p-8">
                <h3 className="text-3xl font-semibold text-center">You booked for date : {shortStringDate}</h3>
                <div className="mt-7 flex gap-2 justify-center items-center">
                    <label htmlFor="date" className="text-xl">Date :</label>
                    <DatePicker
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
                    {
                        isNoChange
                            ?
                            <p className="text-xl">please change date, you already booked for this date.</p>
                            :
                            <div>
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
                                {
                                    error && <p className="text-xl text-red-600">{error}</p>
                                }
                            </div>
                    }
                </div>
                <div className="mt-8 text-center">

                    <button onClick={handleUpdateDate} disabled={!date || !availableSeat || isNoChange ? true : false} className=" px-4 py-2 text-xl font-medium text-white bg-[#643843] hover:bg-[#99627A]">Update Now</button>
                </div>

            </div>
        </>
    );
};

export default UpdateDate;