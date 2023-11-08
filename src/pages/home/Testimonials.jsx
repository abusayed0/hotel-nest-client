// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./testimonials.css"
import { register } from 'swiper/element/bundle';
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6"

register();

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';


const Testimonials = () => {

    return (
        <div className="mt-20 border p-5 bg-[#e7cbcb33]">
            <div className="text-center">
                <h4 className="text-2xl font-semibold">Testimonials</h4>
                <h2 className="mt-2 text-4xl font-bold">What our clients say about us</h2>
            </div>
            <Swiper
                navigation={true}
                
                modules={[Navigation, Autoplay]}
                className="mt-10 mySwiper"
                loop={true}
                slidesPerView={1}
                // autoHeight={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                        <div className="flex gap-1">
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaRegStarHalfStroke className="text-3xl" />
                            <FaRegStar className="text-3xl" />
                        </div>
                        <p>I recently booked a weekend getaway through this site, and the hotel exceeded my expectations. The room was clean and cozy, and the staff was incredibly friendly. The whole experience made my trip memorable. Can not wait to book again!</p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/wY0Wfvq/photo-1499557354967-2b2d8910bcca-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">Traveler23</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                        <div className="flex gap-1">
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaRegStarHalfStroke className="text-3xl" />
                            <FaRegStar className="text-3xl" />
                        </div>
                        <p className="text-center">
                            As a frequent traveler for work, I rely on efficient hotel booking services. This website made it easy for me to find and book a comfortable hotel near my conference venue. The check-in process was smooth, and the amenities were exactly what I needed for a productive stay.
                        </p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/HptFDh4/photo-1534308143481-c55f00be8bd7-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">HotelExplorer</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                        <div className="flex gap-1">
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaRegStarHalfStroke className="text-3xl" />
                            <FaRegStar className="text-3xl" />
                        </div>
                        <p className="text-center">
                            Booking a family vacation was a breeze with this website. The hotel we chose had family-friendly amenities, and the booking process allowed me to specify our requirements. The kids had a blast, and we will definitely use this service for our future trips.
                        </p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/tzvR9C5/photo-1521341957697-b93449760f30-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">LuxuryEscape1</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                        <div className="flex gap-1">
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaRegStarHalfStroke className="text-3xl" />
                            <FaRegStar className="text-3xl" />
                        </div>
                        <p className="text-center">
                            If you are looking for a touch of luxury, this site has some fantastic options. I booked a room in a 5-star hotel, and the experience was nothing short of amazing. From the elegant decor to the impeccable service, it was worth every penny.
                        </p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/Df7wMdd/photo-1601942097240-38f37d0ce070-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">AdventureCouple4</h4>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                        <div className="flex gap-1">
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaStar className="text-3xl" />
                            <FaRegStarHalfStroke className="text-3xl" />
                            <FaRegStar className="text-3xl" />
                        </div>
                        <p className="text-center">
                            We are avid travelers and booked our last-minute adventure through this platform. The hotel we stayed in had a great location, and the concierge helped us plan some exciting activities. The convenience and options on this site made our spontaneous trip unforgettable.
                        </p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/dDXWsbn/photo-1518109331836-a2a7e93f89bb-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">DreamTrave1</h4>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>

    );

};

export default Testimonials;