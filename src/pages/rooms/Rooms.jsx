import { useLoaderData } from "react-router-dom";
import SingleRoomCard from "./SingleRoomCard";

const Rooms = () => {
    const allRooms = useLoaderData();
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                allRooms.map(room => <SingleRoomCard
                 key={room._id}
                 roomData={room}
                />)
            }
        </div>
    );
};

export default Rooms;