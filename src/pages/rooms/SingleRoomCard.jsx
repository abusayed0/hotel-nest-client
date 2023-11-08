import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';
const SingleRoomCard = ({roomData}) => {

    // console.log(roomData);
    const {_id, title,thumbnail_image, cost_per_night, total_review} = roomData;
    // console.log(total_review);

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/room/${_id}`)} className="relative bg-[#e7cbcb33] cursor-pointer">
            <img className="h-[250px] w-full" src={thumbnail_image} alt="" />
            <p className="absolute right-3 top-3 bg-[#9b804e] px-4 py-2 text-white text-xl">${cost_per_night} / per day</p>
            <div className="text-center p-2">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <h4 className="text-xl">Review : {total_review}</h4>
            </div>
        </div>
    );
};
SingleRoomCard.propTypes = {
    roomData: PropTypes.object.isRequired
};
export default SingleRoomCard;

