import React, { useState, useEffect } from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputBox from '../commons/inputBox';

import PropTypes from 'prop-types';

import './styles/index.css';


const InputUsername = ( props ) => {

    const [ inputValue, setInputValue ] = useState('');


    const changeEvent = (event) => {
        setInputValue(event.target.value);
    };


    const getValue = () => {
        var placeholder = document.querySelector('.placeholder-username');

        if (inputValue !== '') {
            if (placeholder.hasAttribute('class', 'active-username')) {
                placeholder.classList.add('active-username');
            }
        }
        else {
            if (placeholder.hasAttribute('class', 'active-username')) {
                placeholder.classList.remove('active-username');
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
        <div className='input-username'>
            <label htmlFor='username' className='label-username'>
                <InputBox type={type} id='username' changeHandler={changeEvent} value={inputValue} />
                <span className='placeholder-username'>Username</span>
            </label>
        </div>
    );
};

export default InputUsername;

InputUsername.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputUsername, 'inputUsername');
