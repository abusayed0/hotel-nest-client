import { useNavigate } from "react-router-dom";


const WellComeBanner = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 bg-[#e7cbcb33] p-2 md:p-5">
            <div className="flex flex-col items-start gap-3">
                <div>
                <h1 className="text-3xl md:text-5xl font-bold">Welcome to Hotel Nest</h1>
                <h3 className="mt-1 text-2xl md:text-3xl text-[#643843]"> Unveiling the Art of Hospitality</h3>
                </div>
                <p className="text-xl">Our promise at Hotel Nest is not just accommodation; it is an invitation to an immersive experience where luxury, warmth, and attention to detail converge. Book now and let us create memories that linger long after you depart. Here every moment is an ode to opulence, and every guest is an integral part of the masterpiece we craft together. Secure your spot now, and let us paint a unique canvas of relaxation, a masterpiece of your stay awaiting the touch of your individual journey. Your sojourn at Hotel Nest is not just a reservation; it is an artistic narrative, inviting you to be a central character in the story of extraordinary hospitality.</p>
                <button onClick={() => navigate("/rooms")} className="px-3 py-2 text-xl font-medium text-white bg-[#643843] hover:bg-[#99627A]">Check Now</button>
            </div>
            <div className="relative h-[300px] lg:h-auto">
                <img className="absolute top-0 left-0 w-full h-full" src="https://i.ibb.co/9vDNQ7L/photo-1571896349842-33c89424de2d-q-80-w-1780-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
            </div>
        </div>
    );
};

export default WellComeBanner;