import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products';

const ProductScreen = () => {
    const params =useParams();
    const product = params.find((p) => p._id === params.id)
    return (
    <>

    </>
    )
}

export default ProductScreen