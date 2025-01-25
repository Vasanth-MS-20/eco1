import React, { useContext } from 'react'
import { homeContext } from '../Main'
import EachCard from './EachCard'

const AllProducts = () => {
    const {data, setData} = useContext(homeContext) //{ data, setData }
    
    // console.log(data);
    
  return (
    <>
      <div className="container-fluid container-md mt-3">
        <div className="row allpro">
            <div className="card-group">
              {data.map( (val, ind, arr)=> ( <EachCard value={val} id={ind} key={ind} /> ) )}
            </div>
        </div>
      </div>
    </>
  )
}

export default AllProducts