import React from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputCommonModule from '../commons/inputCommonModule';

import PropTypes from 'prop-types';

import './styles/index.css';


const InputPassword = (props) => {
    const { id, type, placeholder, spanid } = props;


    return (
        <div className='input-password'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid}></InputCommonModule>
        </div>
    );
};

export default InputPassword;

InputPassword.propTypes = {
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputPassword, 'inputPassword');
