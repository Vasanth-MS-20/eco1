import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { homeContext } from '../Main'

const EachCard = ({value, id}) => {     //component instance 3

    const { cart, setCart } = useContext(homeContext)

    function addToCartHandler(){

        // cart la edume ilana products add aganum
        // cart la products irundha na kudukara products andha array irundha alert show aganum
        // cart la products irundha na kudukara products andha array la ilana mattum add aganum

        // console.log(id);
        
        if(cart.length === 0){
            setCart( (p)=> [...p, value] )   //p = cart ; ...p = elements of p
        }
        else{
            
            if(cart.includes(value)){   //
                alert(`${value.title} is Already in Cart`)
            }
            else{
                alert(`${value.title} is added to the Cart`) 
                setCart( (p)=> ([...p, value]) ) 
            }
        }

    }       

  return (
    <>
        <div className="col-md-3">
            <div className="card">
                <div className="card-img">
                    <img src={value.image} alt="" className='img-fluid d-block m-auto ecimg' />
                </div>
                <div className="card-body">
                    <div className="card-text text-muted mt-1 mb-1">{value.category.toUpperCase()}</div>
                    {/* <div className="card-title h6">{value.title}</div> */}
                    <div className="card-title h6">{value.title.length > 30 ? value.title.slice(0, 31) + '...' : value.title}</div>
                    <div className="card-text"> $ {value.price} </div>
                </div>
                <div className="cardfooter d-flex gap-2 ms-3">
                    <button className="btn cbtn" onClick={addToCartHandler}>Add to cart</button>
                    <button className="btn vbtn"><Link className='text-white text-decoration-none' to={`/product/${id}`}>View Item</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EachCard

/* 

    let cart = [ 1, 5, 10 ]
    ...cart = 1, 5, 10

    let user = { name : 'niv', age : 23}
    let users = [ { name : 'vas', age : 23}, { name : 'niv', age : 24} ]
    users.includes(user)    // users[0] === user ; user[1] === user ;

    let num = 3
    let arr = [0, 1, 2, 3, 4, 5]
    arr.includes(num)   // 0 === 3; 1===3; 2===3; 3 === 3

*/

