import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./components/Home.js";
import {About} from "./components/About.js";
import {Project} from "./components/Project.js";
import Header from './components/Header.js'
import {Footer} from './components/Footer.js'

export default function AppRoute() {
  
  return (
   <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><Footer/></>}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Project" element={<Project />} />
        </Route>
      </Routes> 
  </BrowserRouter>
   </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <> <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
