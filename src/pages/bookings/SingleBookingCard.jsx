import PropTypes from 'prop-types';

const SingleBookingCard = ({ bookingData }) => {
    console.log(bookingData);
    const { _id, roomId, thumbnail_image, title, bookedDate, cost_per_night } = bookingData;
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
                    <button className="text-white font-medium p-2 bg-[tomato] rounded">Delete</button>
                    <button className=" text-white font-medium p-2 bg-[#643843] rounded   ">Update Date</button>
                </div>
            </div>
        </div>
    );
};

SingleBookingCard.propTypes = {
    bookingData: PropTypes.object.isRequired
};
export default SingleBookingCard;