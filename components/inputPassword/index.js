import React, { useState } from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputCommonModule from '../commons/inputCommonModule';

import PropTypes from 'prop-types';

import './styles/index.css';


const InputPassword = (props) => {
    const { id, type, placeholder, spanid } = props;

    const [ inputValue, setInputValue ] = useState('');

    const blurHandler = ()=>{
        if (inputValue !== '') {
            return;
        }
        var span = document.getElementById(spanid);

        span.style.top = '10px';


    };

    const focusHandler = ()=>{
        var span = document.getElementById(spanid);

        span.style.top = '-10px';

    };


    const changeHandler = (e)=>{
        setInputValue(e.target.value);
    };

    return (
        <div className='input-password'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid} changeHandler={changeHandler} blurHandler={blurHandler} focusHandler={focusHandler} value={inputValue}></InputCommonModule>
        </div>
    );
};

export default InputPassword;

InputPassword.propTypes = {
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputPassword, 'inputPassword');
