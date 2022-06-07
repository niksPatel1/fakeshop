import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeselectedproducts, selectedproducts } from '../redux/actions/productactions';


function ProductDetails() {
  const param = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.product)

  const getproduct = async () => {
    dispatch(removeselectedproducts())
    const url = `https://fakestoreapi.com/products/${param.id}`
    const { data } = await axios.get(url).catch((err) => {
      console.log(err);
    })
    setTimeout(() => {
      dispatch(selectedproducts(data))
    }, 500);
  }

  

  useEffect(() => {
    getproduct()
  }, [])


  const a = () => {
    if (product == null) {
      return (
        <div className="container  border d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
          <div className="spinner-border text-primary m-auto" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )
    } else {

      const { id, title, image, price, category, description } = product
      return (
        <div className='container'>
          <div className="d-flex justify-content-center border border-dark"><img className='' src={image} width="50%" alt="" /></div>
          <div className="container border-dark border mt-1 fs-1 fw-bold">{title}</div>
          <div className="category container border-dark border m-auto mt-1 fs-4 "><span className='fw-bold'>Category</span> : {category}</div>
          <div className="category container border-dark border m-auto mt-1 fs-3 "><span className='fw-bold'>Discription</span> : {description}</div>
          <div className='btn btn-danger container mt-1 mt-1 fs-3 fw-bold'>Price :  ${price}</div>
        </div>
      )
    }
  }
  return (
    <>{a()}</>
  )
}

export default ProductDetails
