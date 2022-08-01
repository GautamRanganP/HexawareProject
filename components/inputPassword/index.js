import React, { useState, useEffect } from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputBox from '../commons/inputBox';

import PropTypes from 'prop-types';

import './styles/index.css';


const InputPassword = (props) => {


    const [ inputValue, setInputValue ] = useState('');


    const changeEvent = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };


    const getValue = () => {
        var placeholder = document.querySelector('.placeholder-password');

        if (inputValue !== '') {
            if (placeholder.hasAttribute('class', 'active')) {
                placeholder.classList.add('active');
            }
        }
        else {
            if (placeholder.hasAttribute('class', 'active')) {
                placeholder.classList.remove('active');
            }
        }

        console.log(placeholder);
    };

    useEffect(() => {
        getValue();

    }, [ inputValue ]);


    const { type } = props;

    console.log(type);

    return (
        <div className='input-password'>
            <label htmlFor='password' className='label-password'>
                <InputBox type={type} changeHandler={changeEvent} value={inputValue} id='password' />
                <span className='placeholder-password'>Password</span>
            </label>
        </div>
    );
};

export default InputPassword;

InputPassword.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputPassword, 'inputPassword');
