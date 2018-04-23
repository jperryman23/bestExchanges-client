import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';


const Header = () => (

                <header>
                    <div className="header-title">Best Exchanges</div>

                    <div className="header-menu">

                      <NavLink to='/' activeClassName='is-active' exact={true}> Home </NavLink>
                      <NavLink to='/Huey' activeClassName='is-active'> Huey </NavLink>
                      <NavLink to='/Luey' activeClassName='is-active'> Luey </NavLink>
                      <NavLink to='/Duey' activeClassName='is-active'> Duey </NavLink>


                    </div>


                </header>


  // <header>
  //   <h1>Best Exchanges</h1>
  //
  //   <NavLink to='/' activeClassName='is-active' exact={true}> Home </NavLink>
  //   <NavLink to='/Huey' activeClassName='is-active'> Huey </NavLink>
  //   <NavLink to='/Duey' activeClassName='is-active'> Duey </NavLink>
  //   <NavLink to='/Luey' activeClassName='is-active'> Luey </NavLink>
  // </header>
)

export default Header;
