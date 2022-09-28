import React from 'react';
import logo from '../../site-logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='mt-5'> 
         <section>
         <img src={logo} alt="" className='header-img'/>
         <h2 className='d-inline ms-2 text-uppercase fw-bold text-primary'>Fitness Heroes</h2>
         </section>
         <section className='mt-5'>
            <h3>Select today's exercise</h3>

         </section>
        </div>
    );
};

export default Header;