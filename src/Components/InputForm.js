import { useState } from "react";
import '../styles/InputForm.css'

function InputForm(){
    let [result, setResult] = useState(0);

    function add(){
        let A = document.getElementById("t1").value;
        let B = document.getElementById("t2").value;
        let R = parseInt(A) + parseInt(B)

        setResult(R)
    }
        return(
            <>
            First number:<input type="text" id="t1"/> <br/>
            <br/>
            Second number:<input type="text" id="t2"/> <br/>
            <br/>
            <br/>
            <button type="button" onClick={ ()=> add()}>Calculate</button><br/>
            <br/>
            <h1> Result={result} </h1>
            </>
        )
    
}
export default InputForm;