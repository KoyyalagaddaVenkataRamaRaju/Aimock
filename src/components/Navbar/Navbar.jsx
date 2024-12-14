import {FaUserCircle} from 'react-icons/fa'
import './Navbar.css'

import { Link} from 'react-router-dom'
import Cookies from 'js-cookie'

const Navbar = props => {
  const logOutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="main1">
      <div className='wlogo'>
        <div>
        <Link to="/home">
          <img
            src=""
            alt="website logo"
            className="headerimg"
          />
        </Link>
        </div>
        <div>
        <h2><span>@</span>i mock</h2>
        </div>
      </div>
      <div>
        <ul className="header1">
          <Link to="/home">
            <li className="list">Home </li>
          </Link>
          <Link to="/tests">
            <li className="list">Tests</li>
          </Link>
          <Link to="/about">
            <li className="list">About</li>
          </Link> <Link to="/contactus">
            <li className="list">Contact Us</li>
          </Link>
        </ul>
      </div>
      <div>
      <FaUserCircle className="navbar-icon" size={36}  />
       
      </div>
    </div>
  )
}

export default Navbar