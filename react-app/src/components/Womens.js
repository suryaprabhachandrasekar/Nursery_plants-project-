import React from 'react'
import Maping from './Maping'

export default function Womens() {
  return (
    <>
      <div className="container-fluid mb-5">
                      <div className="container">
                            <h1 className="mainsec"><b>Women's Clothing Clothing </b></h1>
                        <div className="row catogery p-4" style={{border:"2px solid black", borderRadius:"20px"}}>           
                            <Maping catallwomens="women's clothing"></Maping>
                        </div>
                      </div>
      </div>
          
    </>
  )
}
