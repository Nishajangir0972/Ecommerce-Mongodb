import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Header from "./Header";
import UserLogin from "./user/UserLogin.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";
import UserSignup from "./user/UserSignUp.jsx";
import AdminSignUp from "./admin/AdminSignUp.jsx";
import AddProduct from "./admin/AddProduct.jsx";
import Allproducts from "./admin/Allproducts.jsx";
import EditProduct from "./admin/EditProduct.jsx";
import Alluserproduct from "./user/AlluserProduct.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<Header/>
<Routes>
          <Route path='/' element={<Home />} />
          <Route path="/userLogin" element={<UserLogin/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route path='/userSignUp' element={<UserSignup />} />
          <Route path='/adminSignup' element={<AdminSignUp />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/allproducts' element={<Allproducts />} />
          <Route path='/edit/:id' element={<EditProduct />} />
          <Route path='/alluserproducts' element={<Alluserproduct/>}/>


</Routes>

</BrowserRouter>

);
