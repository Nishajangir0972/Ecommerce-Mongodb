import React, { useContext } from 'react'
import { ecomContext } from './Allproducts'
import { Link } from 'react-router-dom';

function CategoryRibbon() {
const {allCategories , filterCategory} = useContext(ecomContext);

  return (
    <div className='categories'>
<ul>
    {allCategories.map((category ,index)=>{
        return (
            <li key={index}>
                <Link to='#' onClick ={(e) => filterCategory(e , category.name)}>
                    {category.name}
                </Link>
            </li>
        )
    })}
</ul>

    </div>
  )
}

export default CategoryRibbon