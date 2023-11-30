import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Subjects(){

    
    //Subjects array that has data such as the trainer name and the subject they teach
    
    
    let trainers =[
        {
            trainerName: "Shafeeq"
        }, 
        
        {
            trainerName: "Andy"
        }, 

        {
            trainerName: "James"
        }
    ]

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
        <>
        
            {
            trainers.map((trainer) =>
            <>
                <br>
                {
                   <Link to="/subjects"> trainers.trainerName</Link>
                }
                </br>
            </>
            
            )
      }
       
            
        </>
    )
}

export default Subjects;