
import {BrowserRouter, Routes, Route} from "react-router-dom"

import HomePage from './HomePage';
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import InputForm from "../Components/InputForm";
import Navigation from "../Components/Navigation";
import Printing from "./Printing";
import Test from "../Components/Test";
import Subjects from "../Components/Subjects";
import ShowSubjects from "../Components/ShowSubject";
function Routing() {
  return (
    <div className="App">
        
      <BrowserRouter>
      <Navigation/>
      <h1>Welcome to my world</h1>
        <br/>
        <br/>
        <Routes>
          <Route path ="/" element={<HomePage/>}/>
          <Route path ="/about-us" element={<AboutUs/>}/>
          <Route path ="*" element={<NotFound/>}/>
          <Route path ="/printing/:T1/:T2" element={<Printing/>}/>
        <Route path="/test" element={<Test/>}/>
        
        <Route path=""></Route>
        </Routes>
        </BrowserRouter>
        <br/>
        <br/>
        <InputForm/>
      <br/>
      <br/>
      <Subjects/>
      <br/>
      <br/>
      <h3>QA Limited London</h3>
    </div>
  );
}

export default Routing;
