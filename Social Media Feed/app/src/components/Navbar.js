
import { Link } from 'react-router-dom'
export const Navbar = ({ val }) => {
  return (
    <>
      <div className=" container shadow-none p-3 mb-3 bg-light rounded d-flex gap-3 align-items-center">
        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}> <h3>Home</h3></Link>
        <Link to={'/userpost'} style={{ textDecoration: 'none', color: "black" }}> <h3>Userpost</h3></Link>
        {val.fname ? <h5>Welcome <span className='text-info'>{val.fname}</span>!</h5> :
          <Link to={'/login'}><button className='btn btn-info'>Login</button></Link>
        }
      </div>
    </>
  )
}
