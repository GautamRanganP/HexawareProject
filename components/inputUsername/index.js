import React from 'react';
import renderReact from '../../library/js/utils/renderReact';


import PropTypes from 'prop-types';

import './styles/index.css';
import InputCommonModule from '../commons/inputCommonModule';
import { useState } from 'react';
import InputNumber from '../inputNumber';


const InputUsername = ( props ) => {
    const { id, type, placeholder, spanid } = props;


    const [ inputValue, setInputValue ] = useState('');

    const changeHandler = (e)=>{
        setInputValue(e.target.value);
    };
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


    return (
        <div className='input-username'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid} changeHandler={changeHandler} value={inputValue} blurHandler={blurHandler} focusHandler={focusHandler}></InputCommonModule>
            <InputNumber type='number' id='30' placeholder='4' spanid='18'></InputNumber>
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
