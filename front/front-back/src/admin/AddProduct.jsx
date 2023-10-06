import React, { useState } from 'react'
import axios from 'axios'
import './AddProduct.css'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const [name , setName] = useState("")
    const [price , setPrice] = useState("")
    const [category , setCategory] = useState("")
   const [company, setCompany] = useState("")
   const [image , setImage] = useState("")
   const navigate = useNavigate()

   const AddProduct = async()=>{
    let result = await axios.post("http://localhost:8000/product/add" , {name,price,category,company,image} ,{
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
    result = result.data
    if(result.name){
        alert("Product has been added")
        navigate("/allProducts")
    }
    
   }

  return (
    <div className='add-product'>
        <h1>Add Products</h1>
        <form action="">
            <input type="text" placeholder='Product Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" placeholder='Product Price' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <input type="text" placeholder='Product Category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            <input type="text" placeholder='Product Company' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button id='addProductBtn' onClick={(e) => {
             e.preventDefault();
             AddProduct() 
             }}>Add Product</button>

        </form>

    </div>
  )
}

export default AddProduct