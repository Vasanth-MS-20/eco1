import React, { createContext } from 'react'
import { Route, Routes } from 'react-router'
import Home from './shome/Home'
import Product from './sproduct/Product'
import Checkout from './scheckout/Checkout'
import TransactionMsg from './stransaction/TransactionMsg'

// createContext
export const homeContext = createContext()  // homeContext = { data, setData, cart, setCart }

const Main = ( {data, setData, cart, setCart} ) => {
  return (
    <>
        <main>
            <Routes>
                <Route path='/' element={ 
                  <homeContext.Provider value={ {data, setData, cart, setCart} }>
                     <Home />
                  </homeContext.Provider>
                }></Route>
                <Route path='/product/:id' element={ <Product data={data} cart={cart} setCart={setCart} /> }></Route>
                <Route path='/checkout' element={ <Checkout /> }></Route>
                <Route path='/transcation' element={ <TransactionMsg /> }></Route>
            </Routes>
        </main>
    </>
  )
}

export default Main

