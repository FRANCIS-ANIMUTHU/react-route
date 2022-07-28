import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import React, { useState } from "react";
import App from "./App";
import Form from "./form";
import Content from "./content";
import { stateContext } from "./context";

export default function router() {
  
  
  return (
    <div style={{ backgroundColor: "khaki", width: "100%", height: "100vh" }}>
      
      <BrowserRouter>
        <ul style={{ backgroundColor: "yellow", padding: "3%" }}>
          <li
            style={{ listStyle: "none", textAlign: "center", fontSize: "30px" }}
          >
            <Link
              to="/form"
              style={{ marginLeft: "2%", textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              to="/App"
              style={{ marginLeft: "4%", textDecoration: "none" }}
            >
              App
            </Link>
            <Link
              to="/content"
              style={{ marginLeft: "4%", textDecoration: "none" }}
            >
              Header
            </Link>
          </li>
        </ul>
        
          <Routes>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/App" element={<App />}></Route>
            <Route path="/content" element={<Content />}></Route>
          </Routes>
      </BrowserRouter>
      

    </div>
  );
}
