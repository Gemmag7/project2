import { Link } from "react-router-dom";
import HomePage from "../Routes/HomePage";
import AboutUs from "../Routes/AboutUs";
import NotFound from "../Routes/NotFound";
import '../styles/Navigation.css'
function Navigation(){

    return(
        <>
         <ul className="nav-menu">  
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={HomePage}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-links" onClick={AboutUs}>
                                    About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="*" className="nav-links" onClick={NotFound}>
                                Not Found
                            </Link>
                        </li>
                    </ul>            
        </>
    )
}

export default Navigation;