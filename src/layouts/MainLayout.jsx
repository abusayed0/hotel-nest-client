import { Outlet } from "react-router-dom";
import Navbar from "../shared-components/navbar/Navbar";
import Footer from "../shared-components/footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar />
            <div className="mx-1 md:mx-12 xl:mx-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;