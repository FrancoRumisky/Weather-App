import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './styles/Nav.css';
import { Link } from 'react-router-dom';




function Nav({onSearch}) {
  return (
    <div className='Con'>
      <div className="NavCon">
      <Link to='/'>
        <img src={Logo} alt="Henry"></img>
        </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
      </div> 
    </div>
    
  );
};

export default Nav;
