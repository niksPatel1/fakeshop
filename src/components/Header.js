import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import "./css/main.css"
function Header() {

  const cartitems = useSelector((state) => state.allProducts.cart);
  console.log(cartitems.length);
  return (
    <div className="container border sticky-top bg-danger text-white">
      <div className="d-flex justify-content-between text-white">
        <h2>
          <Link to={"/fakeshop"} className="td-none text-white" id='link'>Home</Link>
        </h2>
        <h2>
          <Link to={"/fakeshop/cart"} className="td-none text-white" id='link'>cart {cartitems.length} </Link>
        </h2>
      </div>
    </div>
  )
}

export default Header