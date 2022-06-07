import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { addtocart } from '../redux/actions/cartactions';



function ProductComponent() {
  var products = []
  products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch();

  const getproductdetails = (data) => {
    // console.log(data);
  }
  // console.log(products);
  // console.log(products.length);
  const renderlist = products.map((product) => {
    const { id, title, image, price, category, description } = product
    return (
      <div key={id} className='col-lg-4 col-sm-6 mb-4' >
        <div className='text-dark m-auto ' >
          <div className="card m-auto ">
            <img src={image} className="card-img-top m-auto" alt="..." />
            <div className="card-body mt-auto">
              <h5 className="card-title mt-auto">{title}</h5>
              <p className="card-text mt-auto">{category}</p>
              <div className="btn btn-primary mt-auto">price : ${price}</div>
              <Link to={`/product/${id}`}>
                <div className="btn btn-primary mt-auto m-1">Details</div>
              </Link>
              <button className="btn btn-secondary mt-auto m-1" onClick={() => {
                  dispatch(addtocart(product))
              }}>add to cart</button>
            </div>
          </div>

        </div>
      </div>
    )
  })

  return (

    <div className='container border-dark'>
      <div className='row'>
        {renderlist}
      </div>
    </div>



  )
}

export default ProductComponent