import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import moment from "moment";
import toast from "react-hot-toast";
import Seo from "../../shared-components/seo-component/Seo";

const AddReview = () => {
    const { roomId } = useParams();
    const { user } = useContext(AuthContext);
    const { displayName: name, photoURL } = user;

    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const rating = form.rating.value;
        const review = form.review.value;

        const reviewInfo = {
            displayName: userName,
            photoURL,
            rating,
            review,
            roomId,
            time: moment().format("dddd, MMMM Do YYYY")
        };
        fetch("https://hotel-nest-server.vercel.app/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset();
                    toast.success("Review added successfully!")
                }
            })
    };
    return (
        <>
            <Seo titleText="Hotel Nest | Add Review" />
            <div className="bg-[lightgray] w-full md:w-4/5 lg:w-1/2 md:mx-auto p-2 md:p-16">
                <h2 className="text-4xl font-semibold text-center">Please add your review</h2>
                <form onSubmit={handleAddReview} className="mt-9 flex flex-col gap-7">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="name" className="text-xl font-semibold">Name</label>
                        <input defaultValue={name} className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="text" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="rating" className="text-xl font-semibold">Rating</label>
                        <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="text" name="rating" id="rating" placeholder="Rating" required />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="review" className="text-xl font-semibold">Comment</label>
                        <textarea className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" name="review" id="review" placeholder="Your Comment" rows="5" required></textarea>
                    </div>
                    <button className="bg-[#643843] hover:bg-[#99627A] rounded-xl text-xl text-white py-3 px-5">Post</button>
                </form>

            </div>
        </>
    );
};

export default AddReview;