
const NewsLetterSignUp = () => {
    return (
        <div className="mt-20 text-center flex flex-col gap-3 bg-[lightgray] py-10 px-2 md:px-5">
            <h3 className="text-4xl font-semibold">Stay Informed, Save More: Subscribe Now!</h3>
            <p className="text-xl">Get exclusive updates and deals by subscribing to our newsletter. Elevate your experience with a simple click.</p>
            <div className="relative w-full max-w-[500px] mx-auto ">
                <input className="w-full p-3 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="email" placeholder="Your Email Address" />
                <button className="absolute top-0 right-0 h-full px-3 text-xl font-medium text-white bg-[#643843] rounded-e-xl">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetterSignUp;