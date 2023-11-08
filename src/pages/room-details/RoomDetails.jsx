import { useLoaderData } from "react-router-dom";
import RoomImageSlider from "./RoomImageSlider";

const RoomDetails = () => {
    const roomDetails = useLoaderData();
    const {thumbnail_image, images} = roomDetails;
    console.log(roomDetails);
    return (
        <div>
           <h2>Room Details</h2>
           <RoomImageSlider photos={[thumbnail_image, ...images]}/> 
        </div>
    );
};

export default RoomDetails;