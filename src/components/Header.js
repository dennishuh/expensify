import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" exact activeClassName="is-active">Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Page</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
  )
}

export default Header;
