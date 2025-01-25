// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { SiHomebridge } from "react-icons/si";
// import { MdOutlineShoppingCartCheckout } from "react-icons/md";
// import { FaAngleDoubleRight } from "react-icons/fa";
// import CartItem from './shome/CartItem';

// const Test = ({ cart, setCart }) => {
//   // Copy of cart (inserting quantities and prices)
//   const [newCart, setNewCart] = useState([])
//   const [quantity, setQuantity] = useState([])
//   const [totPrice, setTotPrice] = useState([])

//   useEffect(() => {
//     const updateCart = [...cart]
//     setNewCart(updateCart)
    
//     const initialQuantity = cart.map(() => 1)
//     setQuantity(initialQuantity)

//     const initialTotPrice = cart.map((v) => v.price)
//     setTotPrice(initialTotPrice)
//   }, [cart])

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedQuantities = [...quantity]
//     updatedQuantities[index] = newQuantity
//     setQuantity(updatedQuantities)

//     const updatedTotPrice = [...totPrice]
//     updatedTotPrice[index] = cart[index].price * newQuantity
//     setTotPrice(updatedTotPrice)
//   }

//   return (
//     <header>
//       <div className="navbar justify-content-around">
//         {/* Home link */}
//         <nav>
//           <Link to={'/'}> <SiHomebridge className='text-white' /> </Link>
//         </nav>

//         {/* Offcanvas */}
//         <div>
//           <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
//             <MdOutlineShoppingCartCheckout />
//           </button>

//           {newCart.length > 0 && (
//             <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//               <div className="offcanvas-header justify-content-between">
//                 <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
//                 <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close"><FaAngleDoubleRight /></button>
//               </div>
//               <div className="offcanvas-body">
//                 <div className="h6">Cart Items:</div>
//                 <div>
//                   {newCart.map((v, i) => (
//                     <CartItem
//                       key={i}
//                       value={v}
//                       index={i}
//                       quantity={quantity[i]}
//                       handleQuantityChange={handleQuantityChange}
//                       totPrice={totPrice[i]}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
