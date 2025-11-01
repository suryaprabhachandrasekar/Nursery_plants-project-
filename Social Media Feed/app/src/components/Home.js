import React from 'react'
import { Link } from 'react-router-dom'
import { Posts } from './Posts'
export const Home = () => {
  return (
   <>
   <div className='container shadow-none p-3 mb-5 bg-light rounded'>
      <Link to={'/newpost'}> <button className='btn btn-info mb-3 ms-3'>Create a post</button></Link>
      <Posts></Posts>
   </div>
   </>
  )
}
