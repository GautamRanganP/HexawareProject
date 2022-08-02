import React from 'react';
import renderReact from '../../library/js/utils/renderReact';


import PropTypes from 'prop-types';

import './styles/index.css';
import InputCommonModule from '../commons/inputCommonModule';


const InputUsername = ( props ) => {
    const { id, type, placeholder, spanid } = props;


    return (
        <div className='input-username'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid}></InputCommonModule>
        </div>
    );
};

export default InputUsername;

InputUsername.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    spanid: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputUsername, 'inputUsername');
