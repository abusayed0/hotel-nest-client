import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { createAccount, updateUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const hadleUpdateUserInfo = (userInfo) => {
        updateUserInfo(userInfo)
            .then(() => {
                console.log("Profile Updated!");

                // navigate user after successfully update use info 
                navigate("/", {replace: true});
            })
            .catch((err) => {
                const errMess = err.message;
                console.error(errMess);
            })
    };
    const handleSignUP = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        // create a new user account 
        createAccount(email, password)
            .then(credential => {
                const createdUser = credential.user;
                console.log({ createdUser });

                // add user photo and name 
                const info = {
                    displayName: name,
                    photoURL: photo
                };
                hadleUpdateUserInfo(info);
            })
            .catch(err => {
                const errorMessage = err.message;
                console.error(errorMessage);
            })

    };
    return (
        <div className="bg-[lightgray] w-full md:w-4/5 lg:w-1/2 md:mx-auto p-2 md:p-16">
            <h2 className="text-4xl font-semibold text-center">Sign Up</h2>
            <form onSubmit={handleSignUP} className="mt-9 flex flex-col gap-7">
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-xl font-semibold">Name</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="text" name="name" id="name" placeholder="Your Name"  required/>
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="photo" className="text-xl font-semibold">Photo</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="text" name="photo" id="photo" placeholder="Your Photo Url" required/>
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-xl font-semibold">Email</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="email" name="email" id="email" placeholder="Your Email" required/>
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="password" className="text-xl font-semibold">Password</label>
                    <input className="p-4 rounded-xl outline outline-1 outline-[#E8E8E8] focus-within:outline-[#643843]" type="password" name="password" id="password" placeholder="Your Password" required/>
                </div>
                <button className="bg-[#643843] hover:bg-[#99627A] rounded-xl text-xl text-white py-3 px-5">Sign Up</button>
            </form>
            <p className="mt-10 text-xl text-center">Already have an account? <Link className="text-[#643843]" to="/sign-in">Sign In</Link></p>
        </div>
    );
};

export default SignUp;