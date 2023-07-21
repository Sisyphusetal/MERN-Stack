import React, { useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);


    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <p>{product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={'/products'}>Home</Link><br/>
            <Link to={'/products/' + product._id + '/edit'}>Edit</Link>
            <div onClick={(e)=>{deleteProduct(product._id)}}>
                <Link to={'/products'}>Delete</Link>
            </div>
        </div>
    )
}

export default Detail;