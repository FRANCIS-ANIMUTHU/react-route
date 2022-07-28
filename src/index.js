import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Form from "./form";
// import { Router } from 'react-router-dom';
// import Header from "./Header.js";
import Router from "./router";

// import Content from "./content.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Router />);




// function Home(){
//   return <div>
//               <Header/>
//               <Content/>

//   </div>

// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
