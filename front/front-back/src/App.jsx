import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  const [image, setImage] = useState(null)

 
  const AddedProduct = async()=>{
  
    let result = await axios.post("http://localhost:8080/product/add", { name, price, category, company, image},{
      headers: {
        "Content-Type": 'multipart/form-data'
      },
    }
    
    )
    result = result.data
    console.log(result);

    if (result.name) {
      alert("Product has be Added")
    }
  }

  return (
    <div className='header'>
      <form action="">
        <input type="text" placeholder='Name of Product' value={name}
          onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Name of Price' value={price}
          onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='Name of Category' value={category}
          onChange={(e) => setCategory(e.target.value)} />
        <input type="text" placeholder='Name of Company' value={company}
          onChange={(e) => setCompany(e.target.value)} />
           <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        
        <button onClick={(e) => {
          e.preventDefault()
          AddedProduct()
        }}>Add The Product</button>
      </form>
    </div>
  )
}

export default App
