import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'



function Alluserproduct() {
    const [allproduct , setAllproduct] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        showProduct()
    },[])

    const showProduct = async()=>{
        let result = await axios.get("http://localhost:8000/product/")
        setAllproduct(result.data)
        console.log(result);
    }




  return (
    <div className='allProduct'>
        <h1>All Products</h1>
<div className="pro">
    {allproduct.map((product,index)=>{
        return(
            <div className="products" key={index}>
                <div className="img">
                    <img src={`http://localhost:8000/uploads/${product.image.filename}`} alt="" />
                </div>
                <div className="item">
                    <h2>Product: {product.name}</h2>
                    
                </div>
                <div className="item">
                    <h2>Price: {product.price}</h2>
                   
                </div>
                <div className="item">
                    <h2>Category: {product.category}</h2>
                    
                </div>
                <div className="item">
                    <h2>Company: {product.company}</h2>
                    
                </div>
<button>Add to Cart</button>
            </div>
        )
    })}
</div>
    </div>
  )
}

export default Alluserproduct