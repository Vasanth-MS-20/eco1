import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiHomebridge } from "react-icons/si";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import CartItem from './CartItem';
import { AiTwotoneDelete } from "react-icons/ai";

const Header = ({cart, setCart}) => {

  //copy of cart (inserting quanties and prices)
  const [newCart, setNewCart] = useState([])  
  const [quantity, setQuantity] = useState([]) 
  const [totPrice, setTotPrice] = useState([])  

  // console.log('cart', cart);
  
  useEffect(()=>{
    const updateCart = [...cart]
    setNewCart(updateCart)
    setQuantity(cart.map(()=> 1))
    setTotPrice( cart.map( (v, i)=> v.price ) )
  }, [cart])

  function parentStateHandler(index, updatedquantity) {
    // console.log(index, updatedquantity)
    if(updatedquantity > 0) {
      setQuantity(quantity.with(index, updatedquantity))
      setTotPrice(totPrice.with(index, newCart[index].price * updatedquantity))
    }
  }

  function removedItem(index) {
    setCart(cart.toSpliced(index, 1))
  }

  return (
    <>
      <header>
        <div className="navbar justify-content-around mb-4 mb-md-0">

          {/* Home link */}
          <nav>
            <Link to={'/'}> <SiHomebridge className='text-white' /> </Link>
          </nav>

          {/* offcanvas */}
          <div>
            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <MdOutlineShoppingCartCheckout />
            </button>

            {newCart && <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header justify-content-between mb-0">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">shopping bag: (<span>{quantity.reduce((acc, cv) => acc + cv, 0)}</span>)</h5>
                <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close"><FaAngleDoubleRight /></button>
              </div>
              <hr className='m-0 ms-3 me-3' />
              <div className="offcanvas-body">
                <div className='d-flex flex-column justify-content-between h-100 '>
                  <div className='box'>
                    {newCart.map( (v, i, a)=> ( <CartItem 
                    value={v} 
                    index={i} 
                    key={i} 
                    quantity={quantity[i]} 
                    totPrice={totPrice[i]}
                    parentStateHandler={parentStateHandler}
                    removedItem={removedItem}
                    /> ) )}
                  </div>
                  <div className="box-footer">
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className='h6 mt-2 otot'>Total : $ {parseFloat(totPrice.reduce((acc, cv) => acc + cv, 0).toFixed(2))} </div>
                      <button className='cdlt border' onClick={()=> setCart([])}><AiTwotoneDelete /></button>
                    </div>
                    <Link to={'/checkout'} state={{newCart, quantity, totPrice}} ><button className="chkbtn h6 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">checkout</button></Link>
                  </div>

                </div>
              </div>
            </div>}

          </div>

        </div>
      </header>
    </>
  )
}

export default Header