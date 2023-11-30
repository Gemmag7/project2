import { BrowserRouter, Link, Outlet, Route, Routes, json } from "react-router-dom"

import "../styles/Trainer.css"
import { useState, useEffect } from "react"
import ShowComments from "./ShowComments"


function Posts(){
      // Create an AbortController instance
/**const controller = new AbortController();
 
// Obtain a reference to the AbortSignal
 const signal = controller.signal;
   
    let [posts, setPosts] = useState([])

    let promiseRef = fetch("https://jsonplaceholder.typicode.com/posts")
    let data = promiseRef.then((response) => response.json()); 
    data.then((data) => setPosts(data.slice(0,20))).catch(error =>{
        console.log("BIG FAT ERROR" + error)
    });

    useEffect(() => {
        return () => {
          controller.abort();
        };
      }, [posts]);  */

      const [items, setItems] = useState();

    let [posts, setPosts] = useState([]);
   
   
    useEffect (() => {
       let promiseRef = fetch(`https://jsonplaceholder.typicode.com/posts/`) 
         let data = promiseRef.then((response) => response.json());
         data.then((json) => setPosts(json));
      }, []);

    

    
return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/posts/:id/comments" element={<ShowComments/>}/>
    </Routes>
    <h1>QA Consulting</h1>
    <br/>
    <br/>
    <div className="mapDiv">
        {console.log("posts in return: ",posts)}
    <table>
            <tbody>
            <tr>
                <th>PostId</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
    {
        posts.map((P) =>
        <>
        <tr>
        {
           <Link to={`/posts/${P.id}/comments`}> {P.id}</Link>
        }
        
                   
                    <td>{P.title}</td>
                    <td>{P.body}</td>
        </tr>
        </>)
    }
    </tbody>
    </table>
    </div>
    </BrowserRouter>
    <Outlet/>
    </>
)
}

export default Posts;