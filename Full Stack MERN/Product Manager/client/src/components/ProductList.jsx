import React from 'react'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) => 
            <Link to={`/products/${product._id}`} key={i}>
                <p>{product.title}, {product.price}, {product.description}</p>
            </Link>
            )}
        </div>
    )
}

export default ProductList;