import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types"
const Seo = ({ titleText }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{titleText}</title>
            </Helmet>
        </HelmetProvider>
    );
};
Seo.propTypes = {
    titleText: PropTypes.string.isRequired
}
export default Seo;