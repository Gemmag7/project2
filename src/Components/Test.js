import { Link } from "react-router-dom";



function Test(){
    return(
        <>
        <Link to="/printing/1/2">add 1 and 2 </Link>
        <br/>
        <Link to="/printing/10/300">add 10 and 300 </Link>
        <br/>
        <Link to="/printing/300/450">add 300 and 450 </Link>
        
        </>
    )
}

export default Test;