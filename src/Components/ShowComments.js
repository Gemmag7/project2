import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


function ShowComments(){
    
let {id} = useParams();
  

    let [comments, setComments] = useState([]);
   
   function getComments(){
    
       let promiseRef=  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`) 
         let data= promiseRef.then((response) => response.json())
          data.then((json) => setComments(json))
      
    }

    useEffect(() => {
        return()  => {
            getComments()
        };
    }, [comments]) 
  

    return(
        <>
         
        <br/>
        <br/>
        <table>
    <tr>
        <th>Post ID</th>
        <th>CommentID</th>
        <th>name</th>
        <th>email</th>
        <th>Comment</th>
        {console.log("c in return", comments)}
    </tr>
           
            {
                comments.map((c) => (
                    <>
                <tr>
                     
                     <td> {c.postId}</td>
                     <td>{c.id}</td>
                     <td> {c.name}</td>
                     <td>{c.email}</td>
                     <td>{c.body}</td>
                    
                </tr>
                </>
                )
                ) 
            }
            
</table>
</>
    )
}

export default ShowComments;