import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const handleMouseMove = (e) => {
          const x = - e.clientX/5 + 'px';
          const y = - e.clientY/5 + 'px';
          setXValue(x);
          setYValue(y);
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
       
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    return (
       
            <div style={{backgroundPositionX: xValue, backgroundPositionY: yValue}} className="w-full h-screen bg-[#151729] bg-[url('https://i.ibb.co/KbLYZ0Q/p404.png')] flex justify-center items-center p-2 md:p-5">
                <div className="max-w-[500px] text-center">
                    <h1 className="text-9xl font-bold text-white">404</h1>
                    <h3 className="mb-5 text-3xl text-white">Opps ! page not found.</h3>
                    <p className="text-xl text-white">The page you are looking for does not exist or removed.</p>
                    <button onClick={() => navigate("/")} className="font-medium mt-6 px-6 py-3 bg-[#643843] hover:bg-[#99627A] rounded-full text-white">Back To Home</button>
                </div>
            </div>
       
    );
};

export default ErrorPage;