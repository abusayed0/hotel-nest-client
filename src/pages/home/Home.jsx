

import moment from 'moment';
import MyMap from './MyMap';
import NewsLetterSignUp from './NewsLetterSignUp';
import Slider from './Slider';
import Testimonials from './Testimonials';
import WellComeBanner from './WellComeBanner';




const Home = () => {
    console.log(moment());

    return (
        <div>
            <Slider />
            <WellComeBanner/>
            <MyMap />
            <Testimonials/>
            <NewsLetterSignUp/>
        </div>



    );
};

export default Home;