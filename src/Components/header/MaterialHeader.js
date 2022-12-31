import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import './Header.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function MaterialHeader() {

  const username = JSON.parse(sessionStorage.getItem('userName'));
  const navigate = useNavigate();

  function logout() {

    sessionStorage.removeItem('jwt_token');
    navigate("/registraion")
  }

  const [showNav, setShowNav] = useState(false);

  return (

    <MDBNavbar expand='lg' light className='user-color paper fixed-top'>
      <MDBContainer fluid>
        <Link className="navbar-brand img-fluid" to="/"><img src="./assets/login.png" alt="" />
        </Link>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}

        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            {
              sessionStorage.getItem('jwt_token') ?
                <>

                  <MDBNavbarItem>
                    <Link to='/products' className='nav-link user-navcolor hov ho'>Services</Link>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <Link to='/contactus' className='nav-link user-navcolor hov ho'>Contact Us</Link>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <Link to='/aboutus' className='nav-link user-navcolor hov ho'>About Us
                    </Link>
                  </MDBNavbarItem>
                </> :
                <>
                  <li class="nav-item">
                    <Link class="nav-link user-navcolor hov ho" to="/registration">SignUp</Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link user-navcolor hov ho" to="/">Login</Link>
                  </li>
                </>
            }
          </MDBNavbarNav>
          {sessionStorage.getItem('jwt_token') ?
            <div class="dropdown">
              <button class="btn dropdown-toggle user-login-color" id="user-details-on-header" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Welcome: {username.firstname} {username.lastname}
              </button>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item user-logout" to="/" onClick={logout}>Logout</Link></li>
              </ul>
            </div>
            : null
          }
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}