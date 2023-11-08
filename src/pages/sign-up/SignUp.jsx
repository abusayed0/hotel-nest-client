import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="bg-[#e7cbcb33] w-full md:w-4/5 lg:w-1/2 md:mx-auto p-2 md:p-16">
            <h2 className="text-4xl font-semibold text-center">Sign Up</h2>
            <form className="mt-9 flex flex-col gap-7">
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-xl font-semibold">Name</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="text" name="name" id="name" placeholder="Your Name" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="photo" className="text-xl font-semibold">Photo</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="text" name="photo" id="photo" placeholder="Your Photo Url" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-xl font-semibold">Email</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="email" name="email" id="email" placeholder="Your Email" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="password" className="text-xl font-semibold">Password</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="password" name="password" id="password" placeholder="Your Password" />
                </div>
                <button className="bg-[#643843] rounded-xl text-xl text-white py-3 px-5">Sign Up</button>
            </form>
            <p className="mt-10 text-xl text-center">Already have an account? <Link className="text-[#643843]" to="/sign-in">Sign In</Link></p>
        </div>
    );
};

export default SignUp;