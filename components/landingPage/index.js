import React from 'react';
import renderReact from '../../library/js/utils/renderReact';

import PropTypes from 'prop-types';


import './styles/index.css';


const LandingPage = ( props ) => {

    const {
        brand
    } = props;

    console.log(brand);

    return (
        <div className='landing-page'>
            <div className='landing-body'>
                <img className='image' src='/images/Hotel2.jpg' alt='noimage'></img>
                <div className='head-brand'>
                    <h2>{brand}</h2>
                </div>
                <div className='btn-container'>
                    <button className='btn'>Sign in</button>
                </div>
            </div>
        </div>

    );
};

export default LandingPage;

LandingPage.propTypes = {
    brand: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(LandingPage, 'landingPage');
