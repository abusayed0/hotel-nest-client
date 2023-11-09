import moment from 'moment';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleBookingCard = ({ bookingData, handleMyBookings}) => {
    // console.log(bookingData);
    const { _id, roomId, thumbnail_image, title, bookedDate, cost_per_night } = bookingData;
    const navigate = useNavigate();
    const handleDeleteBooking = () => {
        const currentDateMom = moment();
        const bookedDateMom = moment(bookedDate, 'DD-MM-YYYY');
        // console.log('currnt date:', currentDateMom.format('DD-MM-YYYY'));

        // console.log('Original Date:', bookedDateMom.format('DD-MM-YYYY'));


        // // decrease booking date 1
        const bookingDateMinus1 = bookedDateMom.clone().subtract(1, 'days');
        // console.log('Minimum Date:', bookingDateMinus1.format('DD-MM-YYYY'));

        const isCurrentDateMomBefore = currentDateMom.isBefore(bookingDateMinus1);
        // console.log(isCurrentDateMomBefore);

        if (!isCurrentDateMomBefore) {
            toast.error("you can only cancel minimum a day before booking date.")

            return;
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hotel-nest-server.vercel.app/my-bookings?bookingId=${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const bookingData = {
                            bookedDate: bookedDate,
                            roomId: roomId,
                        };
                        fetch(`https://hotel-nest-server.vercel.app/booking-data`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(bookingData)

                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if(data.modifiedCount){
                                    handleMyBookings(_id);
                                    toast.success("Deleted successfully!");
                                }
                            })
                    })
            }
        });


    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border">
            <img className="w-full h-full" src={thumbnail_image} alt="" />
            <div className="p-2 flex flex-col gap-2">
                <div>
                    <h4 className='text-3xl font-semibold'>{title}</h4>
                    <p className="text-xl">Booked Date : {bookedDate}</p>
                    <p><span className="text-2xl">${cost_per_night}</span> / per night</p>
                </div>
                <div className="flex flex-col gap-1 items-end">
                    <button onClick={handleDeleteBooking} className="text-white font-medium p-2 bg-[tomato] rounded">Cancel</button>
                    <button onClick={() => navigate(`/update-booking/${_id}`)} className=" text-white font-medium p-2 bg-[#643843] rounded">Update Date</button>
                    <button onClick={() => navigate(`/add-review/${roomId}`)} className=" text-white font-medium p-2 bg-[#643843] rounded">Add Review</button>
                </div>
            </div>
        </div>
    );
};

SingleBookingCard.propTypes = {
    bookingData: PropTypes.object.isRequired,
    handleMyBookings: PropTypes.func.isRequired
};
export default SingleBookingCard;