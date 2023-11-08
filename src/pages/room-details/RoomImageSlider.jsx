import PropTypes from "prop-types"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import "./RoomImageSlider.css"
const RoomImageSlider = ({ photos }) => {
    console.log(photos);
    const images = photos.map(photo => {
        return {
            original: photo,
            thumbnail: photo,
            originalClass: "image-container"
        }
    });

    console.log(images);
    return (
      
            <ImageGallery
                items={images}
                infinite={false}
                showPlayButton={false}
                className=""

            />
       
    );
};
RoomImageSlider.propTypes = {
    photos: PropTypes.array.isRequired
}
export default RoomImageSlider;