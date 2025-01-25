import React, { useEffect, useState } from 'react'
import payment from '../../assets/transaction.mp4'
import { useNavigate } from 'react-router'

const TransactionMsg = () => {

    const [status, setStatus] = useState(true)
    const navigate = useNavigate() 

    useEffect(()=>{
      setTimeout(()=> {
        navigate('/')
        setTimeout(()=> {
          window.location.reload();
        }, 1000)
      }, 2000)
    }, [])

  return (
    <>
      {status && <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ height: '90dvh', width: '100dvw' }} >
        <video autoPlay muted width={150}>
          <source src={payment} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="h6">Thanks for Shopping!</p>
        <p className='h4'>Payment Successful</p>
      </div>}
    </>
  )
}

export default TransactionMsg