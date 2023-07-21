import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price: </label>
                <input type='text' onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description: </label>
                <input type='text' onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type='submit'/>
        </form>
    )
}

export default ProductForm;