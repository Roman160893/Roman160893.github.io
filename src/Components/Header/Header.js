import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';


const Header = () => {
   return (

      <header className='header'>
         <div className='header__container'>
            <div className='header__nav'>
               <div className='header__nav-logo'>
                  <ul>
                     <li><NavLink to='/'>PORTEN</NavLink></li>
                  </ul>
               </div>
               <div className='header__nav-links'>
                  <ul>
                     <li><NavLink to='/' >Home</NavLink></li>
                     <li><NavLink to='/posts'>Posts</NavLink></li>
                     <li><NavLink to='/gallery'>Gallery</NavLink></li>
                     <li><NavLink to='/contacts'>Contacts</NavLink></li>
                  </ul>
               </div>
               <div className='header__nav-button'>
                  <ul>
                     <li><NavLink to='/gallery' className='home'> Buy now </NavLink></li>
                  </ul>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;