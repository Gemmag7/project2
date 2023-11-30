import { useParams } from "react-router-dom";
import "../styles/Trainer.css"
function ShowSubjects(){

    let {tname} = useParams();

    let subjects =[
        {
            trainerName: "Shafeeq", 
            subject: "HTML"
        }, 
        {
            trainerName: "Shafeeq", 
            subject: "SQL"
        }, 
        {
            trainerName: "Andy", 
            subject: "Java"
        }, 
        {
            trainerName: "Shafeeq", 
            subject: "CSS"
        }, 
        {
            trainerName: "Andy", 
            subject: "Python"
        },
        {
            trainerName: "Shafeeq", 
            subject: "JavaScript"
        },
        {
            trainerName: "James", 
            subject: "Angular"
        }
    ]

    return(
        <div className="subMap">
        <h2>Show Subjects</h2>
        <br/>
        Trainer: <b>{tname}</b>
        <br/>
       
        {
            subjects.filter((s) => s.trainerName ==tname ).map((S) => (
                <>
                <br/>
                {S.subject}
                </>
             )
            )
        }
       
       
       </div>
    )
}

export default ShowSubjects;