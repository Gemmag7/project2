import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/about-us" element={<AboutUs/>}/>
          <Route path ="/test" element={<Test/>}/>
          <Route path ="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
