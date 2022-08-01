import React, { useEffect, useState } from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputBox from '../commons/inputBox';

import PropTypes from 'prop-types';

import './styles/index.css';


const InputEmail = ( props ) => {
    const [ inputValue, setInputValue ] = useState('');
    const { type } = props;

    const [ validateEmail, setValidateEmail ] = useState(false);

    const changeEvent = (event)=>{
        console.log(event.target.value);
        setInputValue(event.target.value);
    };

    function validateEmailAddress(inputValue) {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (inputValue.match(regexEmail)) {
            return true;
        }
        else {
            return false;
        }
    }


    const getValue = ()=>{
        var labelEmail = document.querySelector('.label-email');

        if (inputValue !== '') {
            if (labelEmail.hasAttribute('class', 'non-active')) {
                labelEmail.classList.remove('non-active');
            }
            labelEmail.classList.add('active');
        }
        else {
            if (labelEmail.hasAttribute('class', 'active')) {
                labelEmail.classList.remove('active');
            }
            labelEmail.classList.add('non-active');
        }
        console.log(labelEmail);
    };

    const validateData = ()=>{
        console.log(validateEmail);
        if (validateEmail) {
            return (<div className='valid-container'><span className='fa fa-check-circle-o icon-valid'></span> <p className='valid'>valid Email Address</p></div>);
        }

        return (<p className='invalid'>* Provide a valid Email Address !</p>);
    };

    useEffect(()=>{
        getValue();
        setValidateEmail(validateEmailAddress(inputValue));

    }, [ inputValue ]);

    return (
        <div className='input-email'>
            <label htmlFor='Email'>
                <InputBox type={type} id='Email' changeHandler={changeEvent} value={inputValue}/>
                <span className='label-email'>Enter the Email address</span>
                {inputValue && validateData()}
            </label>
        </div>
    );
};

export default InputEmail;

InputEmail.propTypes = {
    type: PropTypes.string.isRequired
    // changeHandler: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputEmail, 'inputEmail');
