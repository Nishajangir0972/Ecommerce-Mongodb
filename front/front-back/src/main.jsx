import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Header from "./Header";
import UserLogin from "./userLogin.jsx";
import AdminLogin from "./adminLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<Header/>
<Routes>
          <Route path='/' element={<Home />} />
          <Route path="/userLogin" element={<UserLogin/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>}/>

          {/* <Route path='/adminSignup' element={<AdminSignup />} />
          <Route path='/userSignUp' element={<UserSignup />} /> */}
</Routes>

</BrowserRouter>

);
