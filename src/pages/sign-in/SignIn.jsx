import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="bg-[#e7cbcb33] w-full md:w-4/5 lg:w-1/2 md:mx-auto p-2 md:p-16">
            <h2 className="text-4xl font-semibold text-center">Sign In</h2>
            <form className="mt-9 flex flex-col gap-7">
                <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-xl font-semibold">Email</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="email" name="email" id="email" placeholder="Your Email" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="password" className="text-xl font-semibold">Password</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="password" name="password" id="password" placeholder="Your Password" />
                </div>
                <button className="bg-[#643843] rounded-xl text-xl text-white py-3 px-5">Sign In</button>
            </form>
            <div className="mt-7">
                <p className="text-xl text-center">Or Sign In with</p>
                <div className="mt-4 text-center">
                    <button className="rounded px-3 py-2 text-xl font-medium text-white bg-[#ea4335]">Google</button>
                </div>
            </div>
            <p className="mt-10 text-xl text-center">Do not have any account yet? <Link className="text-[#643843]" to="/sign-up">Sign Up</Link></p>
        </div>
    );
};

export default SignIn;