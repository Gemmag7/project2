import {useParams} from "react-router-dom"; 

function Printing(){
    const {T1, T2} = useParams()

    return(
        <>
        <br/>
        First value recieved from URL: <b>{T1}</b>
       <br/>
       <br/>
        Second value recieved from URL: <b>{T2}</b>
       
       <br/>
       ------------------------------------------------------
       <br/>
       <br/>
       The Result of addition is : <b>{parseInt(T1) + parseInt(T2)} </b>
        </>
    )
}
export default Printing;