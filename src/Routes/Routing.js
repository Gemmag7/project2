
import {BrowserRouter, Routes, Route} from "react-router-dom"

import HomePage from './HomePage';
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import InputForm from "../Components/InputForm";

function Routing() {
  return (
    <div className="App">
        <h1>Welcome to my world</h1>
        <br/>
        <br/>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<HomePage/>}/>
          <Route path ="/about-us" element={<AboutUs/>}/>
          <Route path ="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
        <br/>
        <br/>
        <InputForm/>
      <br/>
      <br/>
      <h3>QA Limited London</h3>
    </div>
  );
}

export default Routing;
