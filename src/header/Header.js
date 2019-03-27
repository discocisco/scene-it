import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <React.Fragment>
    <Link to='/change-password'>Change Password</Link>
    <Link to='/sign-out'>Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to='/sign-up'>Sign Up</Link>
    <Link to='/sign-in'>Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to='/'>Home</Link>
    <Link to='/movies'>Movies</Link>
    <Link to='/search-movie'>Find a Movie</Link>
    <Link to='/find-theater'>Find a Theater</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <Navbar sticky='top' className='main-header'>
    <h1>Scene It | <span className='header-movie-text'>Movie</span>Db</h1>
    <div className='auth-nav'>
      { user && <span className='welcome-message'>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </div>
  </Navbar>
)

export default Header
