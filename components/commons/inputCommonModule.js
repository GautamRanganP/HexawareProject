'use strict';

import React, {  useEffect, useState } from 'react';

import './styles/inputCommonModule.css';

const InputCommonModule = (props) => {
    const [ inputValue, setInputValue ] = useState('');
    const [ validateEmail, setValidateEmail ] = useState(false);

    const { id, type, holder, spanid } = props;


    const changeHandler = (event)=>{
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


    const validateData = ()=>{
        if (validateEmail) {
            return (<div className='valid-container'><span className='fa fa-check-circle-o icon-valid'></span> <p className='valid'>valid Email Address</p></div>);
        }

        return (<p className='invalid'>* Provide a valid Email Address !</p>);
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

    useEffect(()=>{
        if (type === 'email') {
            setValidateEmail(validateEmailAddress(inputValue));
        }

    }, [ inputValue ]);


    return (
        <div className='input-main'>
            <label htmlFor={id} className='label-main'>
                <input type={type} id={id} onBlur={blurHandler} onFocus={focusHandler} onChange={changeHandler} value={inputValue}></input>
                <span className='span-main' id={spanid}>{holder}</span>
                {type === 'email' && inputValue !== '' && validateData()}
            </label>
        </div>
    );

};

export default InputCommonModule;