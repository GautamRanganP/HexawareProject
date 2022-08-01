import React from 'react';
import renderReact from '../../library/js/utils/renderReact';

import PropTypes from 'prop-types';

import './styles/index.css';


const LandingHeader = ( props ) => {

    const {
        brand
    } = props;

    console.log(brand);

    return (
        <div className='landing-header'>
            <h2>{brand}</h2>
        </div>

    // <div className='image'>
    //     <div className='overlay'>

    //     </div>
    // </div>
    );
};

export default LandingHeader;

LandingHeader.propTypes = {
    brand: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(LandingHeader, 'landingHeader');
