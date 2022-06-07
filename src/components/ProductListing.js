import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setproducts } from '../redux/actions/productactions';
import ProductComponent from './ProductComponent';



function ProductListing() {
  const products = useSelector((state) => state.allProducts)
  const dispatch = useDispatch();
  
  
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log(err);
    })
    dispatch(setproducts(response.data))
  }
  useEffect(() => {
    fetchProducts()
    console.log("useeffect");
  }, [])


  return (
    <div>
      <h1></h1>
      <h1></h1>
      <ProductComponent />
    </div>
  )
}

export default ProductListing