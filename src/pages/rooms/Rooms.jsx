import { useLoaderData } from "react-router-dom";
import SingleRoomCard from "./SingleRoomCard";
import { useRef, useState } from "react";
import Seo from "../../shared-components/seo-component/Seo";

const Rooms = () => {
    const allRooms = useLoaderData();
    const [disPlayedRooms, setDisPlayedRooms] = useState(allRooms);
    const [isFiltered, setIsFitered] = useState(false);
    const minRef = useRef(null);
    const maxRef = useRef(null);
    // console.log(typeof allRooms[0].cost_per_night);
    const handleFilter = e => {
        e.preventDefault();
        const form = e.target;
        const min = form.min.value;
        const max = form.max.value;
        console.log(min, max);
        console.log(allRooms);
        const filter = allRooms.filter(room => {
            const roomPerNightPrice = room.cost_per_night;
            console.log(roomPerNightPrice);
            const isConditionFullfilled = roomPerNightPrice >= min && roomPerNightPrice <= max;
            return isConditionFullfilled;
        });
        const sortFiteredRes = filter.sort((a, b) => a.cost_per_night - b.cost_per_night);
        setDisPlayedRooms(sortFiteredRes);
        setIsFitered(true);
    };

    const handleViewAll = () => {
        minRef.current.value = "";
        maxRef.current.value = "";
        setDisPlayedRooms(allRooms);
        setIsFitered(false);
    }
    return (
        <>
            <Seo titleText="Hotel Nest | Rooms" />
            <div>
                <div>
                    <form onSubmit={handleFilter} className="max-w-[500px] mx-auto flex gap-3">
                        <input ref={minRef} className="w-full p-1 outline outline-1 outline-[gray] focus-within:outline-[#643843]" placeholder="min" type="text" name="min" required />
                        <input ref={maxRef} className="w-full p-1 outline outline-1 outline-[gray] focus-within:outline-[#643843]" placeholder="max" type="text" name="max" required />
                        <button type="submit" className="bg-[#643843] text-white p-2 border-2 font-medium">Filter</button>
                    </form>
                    {
                        isFiltered && <button onClick={handleViewAll} className="mt-4 block mx-auto bg-[#643843] text-white p-2 border-2 font-medium">View All</button>
                    }
                </div>

                <div className="mt-14">
                    {
                        !disPlayedRooms.length
                            ?
                            <p className="text-center text-xl">No result found.</p>
                            :
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {
                                    disPlayedRooms.map(room => <SingleRoomCard
                                        key={room._id}
                                        roomData={room}
                                    />)
                                }
                            </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Rooms;