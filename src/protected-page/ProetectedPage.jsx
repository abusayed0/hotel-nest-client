import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
const ProetectedPage = ({children}) => {
    const { user,isLoading} = useContext(AuthContext);
    const from = useLocation().pathname;
    
    if(isLoading){
        return <p>Loading...</p>
    }
    else if(!user){
        return <Navigate to="/sign-in" replace={true} state={{from}}/>
    }
    else{
        return children;
    }
};
ProetectedPage.propTypes = {
    children: PropTypes.element.isRequired
};
export default ProetectedPage;