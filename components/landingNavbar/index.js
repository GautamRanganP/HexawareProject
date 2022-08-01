import React from 'react';
import renderReact from '../../library/js/utils/renderReact';

import PropTypes from 'prop-types';


import './styles/index.css';

const LandingNavbar = (props) => {

    const {
        brand
    } = props;

    console.log(brand);

    const clickHandler = ()=>{
        var button = document.querySelector('.icon-toggle');
        var dropdown = document.querySelector('.dropdown');

        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block';
            dropdown.style.animation = 'mymove .5s 1';
            dropdown.style.transform = 'translateY(10px)';
        }
        else {
            dropdown.style.transform = 'translateY(-10px)';
            dropdown.style.animation = 'myopmove .5s 1';
            setTimeout(myproperty, 300);
        }
        function myproperty() {
            dropdown.style.display = 'none';
        }

        console.log(button);
        console.log(dropdown);
    };


    return (
        <div>
            <div className='landing-navbar'>
                <button className='fa fa-bars icon-toggle' onClick={clickHandler}></button>
                <ul className='dropdown'>
                    <button className='fa fa-close btn-close'></button>
                    <li>Home</li>
                    <li>Videos</li>
                    <li>Media</li>
                    <li>Appointments</li>
                    <li>My Orders</li>
                    <li>Ranging Room</li>
                    <li>Sign out</li>
                </ul>
                <h2>{brand}</h2>
                <ul className='navbar'>
                    <li>Home</li>
                    <li>Videos</li>
                    <li>Media</li>
                    <li>Appointments</li>
                    <li>My Orders</li>
                    <li>Ranging Room</li>
                    <li>Sign out</li>
                </ul>

            </div>
        </div>


    );
};

export default LandingNavbar;

LandingNavbar.propTypes = {
    brand: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(LandingNavbar, 'landingNavbar');
