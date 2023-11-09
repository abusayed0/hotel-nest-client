import { Outlet } from "react-router-dom";
import Navbar from "../shared-components/navbar/Navbar";
import Footer from "../shared-components/footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar />
            <div className="mx-1 md:mx-12 lg:mx-20">
                <Outlet />
            </div>
            <Footer />
            <Toaster position="bottom-right"
                reverseOrder={false} />
        </div>
    );
};

export default MainLayout;