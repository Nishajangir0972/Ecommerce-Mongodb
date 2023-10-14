import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './Allproduct.css'
import { useNavigate } from 'react-router-dom'
export const ecomContext = createContext();



function Allproducts() {
    const [allCategories, setallCategories] = useState([])
    const [allproduct, setAllproduct] = useState([])
    const [filterProducts , setFilterProducts] = useState([])
    const [isFilter, setIsFilter] = useState(false)
    const navigate = useNavigate()

    function filterCategory(e, name) {
        e.preventDefault()
        setIsFilter(name)

    }
    useEffect(() => {
        const temp = allproduct
        setFilterProducts(
            temp.filter((product) => {
                return product.category  === isFilter
            })
        )
       
    }, [isFilter])
   

    useEffect(() => {
        showProduct()

    }, [])

    const showProduct = async () => {
        let result = await axios.get("http://localhost:8000/product/")
        setAllproduct(result.data)
        console.log(result);
    }

    const productEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const productDelete = async (id) => {
        let result = await axios.delete(`http://localhost:8000/product/del/${id}`)
        if (result.data) {
            alert(`Product with ID: ${id} has been deleted`)
            navigate("/AllProducts")
        }
    }
    return (

        <ecomContext.Provider value={{
            allCategories,
            setallCategories,
            allproduct,
            filterCategory,
            isFilter,
            setIsFilter
        }}>
            <div className='allProduct'>
                <ul>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Mens Clothing</a></li>
                    <li><a href="#">Womens Clothing</a></li>
                    <li><a href="#">Grocery</a></li>
                    <li><a href="#">Beauty Products</a></li>
                </ul>
                <div className="pro">
                    {
                        filterProducts.length > 0 ? 
                            filterProducts.map((product, index) => {
                                return (
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
                                        <button onClick={() => productEdit(product._id)}>Edit</button>
                                        <button onClick={() => productDelete(product._id)}>Delete</button>
                                    </div>
                                )
                            }) :  allproduct.map((product, index) => {
                                return (
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
                                        <button onClick={() => productEdit(product._id)}>Edit</button>
                                        <button onClick={() => productDelete(product._id)}>Delete</button>
                                    </div>
                                )
                            })}
                </div>
            </div>
        </ecomContext.Provider>
    )

}

export default Allproducts