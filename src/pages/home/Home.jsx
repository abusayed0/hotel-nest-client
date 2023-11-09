

import MyMap from './MyMap';
import NewsLetterSignUp from './NewsLetterSignUp';
import Slider from './Slider';
import Testimonials from './Testimonials';
import WellComeBanner from './WellComeBanner';
import HotelVideo from './HotelVideo';
import Seo from '../../shared-components/seo-component/Seo';




const Home = () => {

    return (
        <>
            <Seo titleText="Hotel Nest | Home" />
            <div>
                <Slider />
                <WellComeBanner />
                <HotelVideo />

                <MyMap />
                <Testimonials />
                <NewsLetterSignUp />
            </div>

        </>

    );
};

export default Home;