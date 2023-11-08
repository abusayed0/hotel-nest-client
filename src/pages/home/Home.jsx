
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';



const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {

    return (
        <AutoplaySlider
            animation="openAnimation"

            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
        >
            <div data-src="https://i.ibb.co/X3722K7/wooden-table-background-cityscape-1153-3808.jpg"></div>
            <div data-src="https://i.ibb.co/9Vh1KfW/umbrella-chair-beach-sea-with-blue-sky-74190-10003.jpg"></div>
            <div data-src="https://i.ibb.co/Tw3XQcB/restaurant-interior-1127-3392.jpg"></div>
            <div data-src="https://i.ibb.co/VtMS3g5/travel-sky-luxury-beach-pool-1203-4544.jpg"></div>
            <div data-src="https://i.ibb.co/9ZZKD4D/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge-125.jpg
            https://i.ibb.co/RbrK8n3/alone-girl-sitting-chair-335224-874.jpg"></div>





        </AutoplaySlider>
       


    );
};

export default Home;