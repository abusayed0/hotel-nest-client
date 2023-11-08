
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-20 bg-[#E7CBCB] p-1 md:p-12 lg:p-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center md:text-start">
                    <h3 className="text-2xl font-bold text-[#643843]">Hotel Nest</h3>
                    <div className="mt-2 flex flex-col gap-1">
                        <p className="text-xl">Dhaka, Bangladesh</p>
                        <p className="text-xl"> Email : hotelnest1@gmail.com</p>
                        <div>
                            <p className="text-xl">Helpine : 83435</p>
                            <p className="text-xl">(Available : 10 AM to 12 PM)</p>
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-start">
                    <h4 className="text-xl font-medium">Quick Links</h4>
                    <div className="mt-2 flex flex-col gap-1">
                        <Link className="text-xl">About_Us</Link>
                        <Link className="text-xl">Privacty_Policy</Link>
                        <Link className="text-xl">Terms_Condition</Link>
                        <Link className="text-xl">Blog</Link>
                    </div>
                </div>
                <div className="text-center md:text-start">
                    <h4 className="text-xl font-medium">Stay Closer</h4>
                    <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-1">
                        <AiFillFacebook className="text-4xl" />
                        <AiFillInstagram className="text-4xl" />
                        <AiFillTwitterSquare className="text-4xl" />
                        <AiFillLinkedin className="text-4xl" />
                        <AiFillYoutube className="text-4xl" />
                    </div>
                </div>
            </div>
            <p className="mt-7 text-xl text-center">&copy; 2024 <span className="Hotel Nest">Hotel Nest</span> all right reserved</p>
        </div>
    );
};

export default Footer;