import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";

const CartItem = ({value, index, quantity, totPrice, parentStateHandler, removedItem}) => {

  function incrementHandler() {
    parentStateHandler(index, (quantity + 1))
  }

  function decrementHandler() {
    parentStateHandler(index, (quantity - 1))
  }

  function removeItem() {
    removedItem(index)
  }

  return (
    <>
        <div className="row cart-items mt-3">

          <div className="col-3">
            <img src={value.image} className='d-block margin-auto img-fluid' alt="placeholder" />
          </div>

          <div className="col-6 ">
            <div className="title">{value.title}</div>
            <div className='d-flex justify-content-center align-items-center mt-1'>
              <div className="btn-group">
                <button className="btn border border-start-0" onClick={decrementHandler}>-</button>
                <button className="btn border border-start-0 border-end-0" style={{cursor : 'pointer'}}>{quantity}</button>
                <button className="btn border border-end-0" onClick={incrementHandler}>+</button>
              </div>
              <div className='ms-2 price me-1 text-muted'>$ {value.price}</div>
            </div>
          </div>

          <div className="col-3 d-flex flex-column text-center">
            <button className='btn-close ms-4 mt-0 mb-0' onClick={removeItem}><IoIosClose /></button>
            <span className='price m-0 ms-2 mb-2'>$ {totPrice}</span>
          </div>
          
        </div>
        
    </>
  )
}

export default CartItem

/* 
  cart = [ 
    { id: 0, title : 'bag', price : 20},
    { id: 0, title : 'jacket', price : 25},
    { id: 0, title : 'ring', price : 55},
  ]

  cart.map((v,i)=> <CartItem value={v} index={i}/> )
*/