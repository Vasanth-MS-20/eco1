import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'
import Test from './Components/Test'

const App = () => {

  // Global state-management
  const [data, setData] = useState()    
  const [cart, setCart] = useState([])  //[ {}, {}, {} ]
  const [isLoading, setIsLoading] = useState(true)  
  const [isErr, setIsErr] = useState(false) 

  // console.log(cart);

  // use to get data (more than one section ku theva patta app la than fetch pannanum)
  useEffect(()=>{
    /* 
              state (data, load, err)
              useEffect
              try catch
              promise
              url
              fetch and set 
     */

      try {
        
        async function getData(){

          // response object
          const resObj = await fetch(`https://fakestoreapi.com/products`)

          if(!resObj.ok){
              setIsLoading(false)
              setIsErr(true)
          }

          // normal data object resObject.body = data
          const resData = await resObj.json()

          setData(resData)
          setIsLoading(false)
        }

        getData()

      } catch (error) {
          console.log(error.message);
      }

  }, [])

  if(isLoading){
    return (
      <>
        <div style={ { height : '100vh', width : '100vw' } } className='d-flex justify-content-center align-items-center' >
            <p>Loading Please Wait... <span className='spinner spinner-border'></span> </p>
        </div>
      </>
    )
  }

  if(isErr){
    return (
      <>
        <div className='h3 text-danger'>404 Page not found</div>
      </>
    )
  }

  return (
    <>

      {data && <BrowserRouter>
        
        <Header cart={cart} setCart={setCart} />  

        <Main data={data} setData={setData} cart={cart} setCart={setCart} /> 
      
        {/* <Footer /> */}

      </BrowserRouter>}
        

      {/* <Test /> */}

    </>
  )
}


export default App