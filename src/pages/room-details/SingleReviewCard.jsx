
import PropTypes from 'prop-types';
const SingleReviewCard = ({reviewData}) => {
    console.log(reviewData);
    const {displayName, photoURL, rating,review ,time} = reviewData;
    return (
        <div className="border p-2 bg-white flex flex-col gap-2 items-center">
            <h4 className='font-semibold text-xl'>Rating : {rating}</h4>
            <p className="text-center text-xl">
                {review}
            </p>
            <div className="flex flex-col gap-1 items-center">
                <img className="w-14 h-14 rounded-full" src={photoURL} alt="" />
                <h4 className="text-xl">{displayName}</h4>
                <p className='text-sm'>{time}</p>
            </div>
        </div>
    );
};
SingleReviewCard.propTypes ={
    reviewData: PropTypes.object.isRequired
};

export default SingleReviewCard;