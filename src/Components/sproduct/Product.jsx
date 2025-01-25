import React from 'react'
import { useParams } from 'react-router'
import './product.css'

const Product = ({data, cart, setCart}) => {
    const { id } = useParams() // { id : enna_value_anuparano }
    const myData = data[id]

    // console.log(myData);

    function addToCartHandler(){

      if(cart.length === 0){
          setCart( (p)=> [...p, myData] )   //p = cart ; ...p = elements of p
      }
      else{
          
          if(cart.includes(myData)){   //
              alert(`${myData.title} is Already in Cart`)
          }
          else{
            alert(`${myData.title} is added to the Cart`) 
              setCart( (p)=> ([...p, myData]) )  
          }
      }

  }       
    
  return (
    <>
        <div className=" container-fluid container-md product">
          <div className="row">
            <div className="col-2 d-none d-md-block"></div>
            <div className="col-md-8">

              <div className="row  navcont">
                <div className="col-md-6 text-center">
                  <img src={myData.image} className='img-fluid' alt="productImage" />
                </div>
                <div className="col-md-6 mt-3 mt-md-0 d-flex align-items-center">
                  <div>
                    <div className="h6 title">{myData.title}</div>
                    <div className="text-danger price">$ {myData.price}</div>
                    <div className="des">{myData.description}</div>
                    <button className="btn" onClick={addToCartHandler}>Add To Cart</button>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-2 d-none d-md-block"></div>
          </div>
        </div>

    </>
  )
}

export default Product