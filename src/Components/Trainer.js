import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom"
import Home from "./Subjects"
import ShowSubjects from "./ShowSubject"
import "../styles/Trainer.css"


function Trainer(){

    let trainers =[
        {
            trainerName: "Shafeeq"
        }, 
        
        {
            trainerName: "Andy"
        }, 

        {
            trainerName: "James"
        },
        
        {
            trainerName: "Peter"
        }, 
        {
            trainerName: "Peter2"
        }
    ]
return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/subjects/:tname" element={<ShowSubjects/>}/>
    </Routes>
    <h1>QA Consulting</h1>
    <br/>
    <br/>
    <div className="mapDiv">
    {
        trainers.map((T) =>
        <>
        <br/>
        {
    <Link to={`/subjects/${T.trainerName}`}> {T.trainerName}</Link>
        }
        </>)
    }
    </div>
    </BrowserRouter>
    <Outlet/>
    </>
)
}

export default Trainer;