import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { FcMoneyTransfer } from "react-icons/fc";

const Checkout = () => {

  const [user, setUser] = useState({})
  const [show, setShow] = useState(true)
  const [transactionMsg, setTransactionMsg] = useState(false)

  const locate = useLocation()
  const {newCart, quantity, totPrice} = locate.state

  const navigate = useNavigate()

  // console.log('location', locate);
  // console.log(newCart);
  // console.log(quantity);
  // console.log('tp',totPrice);
  
  function changeHandler(e) {
    setUser( (p)=> ({...p, [e.target.name] : e.target.value}) )
  }

  function clickHandler(){
    setTransactionMsg(true)
    setTimeout(()=> {
      navigate('/transcation')
    }, 2000)
  }

  return (
    <>
      {show && <form action="">
        <div className="container">
          
            <div className="row">
              <div className="col-sm-6">
                <div className='h5 mb-2 text-center'>Personal Details</div>

                <div className="col-12 mt-1">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" className='form-control mt-1' placeholder='eg@Vasanth' value={user.name || ''} onChange={changeHandler} />
                </div>

                <div className="col-12 mt-1">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="mail" id="email" className='form-control mt-1' placeholder='someone@gmail.com' value={user.mail || ''} onChange={changeHandler} />
                </div>
              
                <div className="col-12 mt-1">
                  <label htmlFor="address">Address</label>
                  <input type="text" name="address" id="address" className='form-control mt-1' placeholder='Door No, Street, State' value={user.address || ''} onChange={changeHandler} />
                </div>

                <div className="col-12 mt-1">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" name="phone" id="phone" className='form-control mt-1' placeholder='##### #####' value={user.phone || ''} onChange={changeHandler} />
                </div>

                <div className="col-12 mt-2">
                  <button className='btn btn-primary chkbtn' onClick={()=> setShow(false)} style={{
                    fontSize : '12px',
                    color: 'white',
                    backgroundColor: '#222222',
                    borderRadius: '0px',
                  }}>Save</button>
                </div>
              </div>
              
              <div className="col-sm-6 mt-3 mt-md-0">
                <div className="h5 text-center">Payment Details</div>

                <div className="col-12">
                  <label htmlFor="card">Cardholder Name</label>
                  <input type="text" name="chname" id="chname" className='form-control mt-1 mt-1' value={user.chname || ''} onChange={changeHandler} />
                </div>

                <div className="col-12">
                  <div className="row">
                    <div className="col-6 ">
                      <label htmlFor="card">Card Number</label>
                      <input type="text" name="cnum" id="cnum" className='form-control mt-1 mt-1' placeholder='4111 1111 1111 1111' value={user.cnum || ''} onChange={changeHandler} />
                    </div>

                    <div className="col-3">
                      <label htmlFor="card">Expiry Date</label>
                      <input type="text" name="expdate" id="expdate" className='form-control mt-1 mt-1' placeholder='MM/YY' value={user.expdate || ''} onChange={changeHandler} />
                    </div>

                    <div className="col-3">
                      <label htmlFor="card">CVV</label>
                      <input type="text" name="cvv" id="cvv" className='form-control mt-1 mt-1' placeholder='123' value={user.cvv || ''} onChange={changeHandler} />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="">Postal code</label>
                  <input type="text" className='form-control mt-1 mt-1 mb-3 mb-md-0' name='pcode' placeholder='Postal or ZIP code' value={user.pcode || ''} onChange={changeHandler} />
                </div>
                
              </div>

            </div>
        </div>
      </form>}

      {!show && <div className="container mt-3">
        <div className="card" style={{borderRadius: '0px'}}>
          <div className="card-header h4">Checkout Your Details</div>
          <div className="card-body">
            {user?.name ? <p className='h6'>{user.name} | {user.mail}</p> : ''}
            <p className='h6'>Deliver to:</p>
            <p className='m-0'>{user.address}</p>
            <p className='m-0 mb-2'>{user.phone}</p>
            <div>
              <div className="h6">Your Products:</div>
              <div className='mt-3'>
                {newCart.map( (v, i)=> (
                  <React.Fragment key={i}>  {/* <div> */}
                    <div className="row  d-flex justify-content-center mt-2">
                      <div className="col-6 col-md-1 ">
                        <img src={v.image} className='img-fluid d-block margin-auto' alt="" width={100} />
                      </div>
                      <div className="col-6 ">
                        <p className='m-0'>{v.title}</p>
                        <div className="d-md-flex justify-content-between">
                          <p className='text-muted m-0'>Quantity: <span className='text-black'>{quantity[i]}</span></p>
                          <p className='text-muted m-0'>Free Delivery</p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment> /* </div> */
                ) )}
              </div>
            </div>
            <div className='h6 mt-3'>Total Amount to be Paid : $ {parseFloat(totPrice.reduce((acc, cv) => acc + cv, 0).toFixed(2))}</div>
            <button className="btn btn-primary mb-3" onClick={clickHandler} style={{
              fontSize : '12px',
              color: 'white',
              backgroundColor: '#222222',
              borderRadius: '0px',
            }}>Pay Now</button>
            {transactionMsg && <p className="h6 text-center">Your Payment is in Processing <span className='spinner spinner-border border-0 '> <FcMoneyTransfer /> </span> </p>}
          </div>
        </div>
      </div>}
    </>
  )
}

export default Checkout