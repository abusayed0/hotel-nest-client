import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const navigate = useNavigate();
    const {user, signOutUser} = useContext(AuthContext);

    const handleSignOutUser = () => {
        signOutUser()
        .then(() => {
            console.log("sign out successfull");
        })
        .catch(err => {
            const errMess = err.message;
            console.error(errMess);
        })
    };

    return (
        <nav className="navbar py-3 p-0  min-h-[auto] bg-[#E7CBCB] mb-20 px-1 md:px-12 lg:px-20">
            <div className="navbar-start gap-1 lg:gap-0">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <HiOutlineMenuAlt1 className="text-3xl"/>

                    </label>
                    <ul tabIndex={0} className="mt-[18px] flex flex-col gap-2 dropdown-content z-[1] p-2 shadow bg-[#E7CBCB] rounded-box w-52">
                        <li><NavLink className="inline-block text-xl" to="/">Home</NavLink></li>
                        <li><NavLink className="inline-block text-xl" to="/rooms">Rooms</NavLink></li>
                        <li><NavLink className="inline-block text-xl" to="/bookings">Bookings</NavLink></li>
                    </ul>
                </div>
                <h3 className="text-2xl font-bold text-[#643843]">Hotel Nest</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li><NavLink className="inline-block text-xl" to="/">Home</NavLink></li>
                    <li><NavLink className="inline-block text-xl" to="/rooms">Rooms</NavLink></li>
                    <li><NavLink className="inline-block text-xl" to="/bookings">Bookings</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                    ?
                    <div className="flex gap-2 items-center">
                        <img title={user.displayName} className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                        <button onClick={handleSignOutUser} className="px-3 py-2 text-xl font-medium text-white bg-[#643843] hover:bg-[#99627A] rounded">Sign Out</button>
                    </div>
                    :
                    <button onClick={() => navigate("/sign-in")} className="px-3 py-2 text-xl font-medium text-white bg-[#643843] hover:bg-[#99627A] rounded">Sign In</button>
                }
            </div>
        </nav>
        
    );
};

export default Navbar;