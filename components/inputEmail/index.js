import React, { useState, useEffect } from 'react';
import renderReact from '../../library/js/utils/renderReact';
import PropTypes from 'prop-types';

import './styles/index.css';
import InputCommonModule from '../commons/inputCommonModule';


const InputEmail = (props) => {
    const [ inputValue, setInputValue ] = useState('');
    const [ validateEmail, setValidateEmail ] = useState(false);

    const changeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const { id, type, placeholder, spanid } = props;


    const blurHandler = ()=>{
        if (inputValue !== '') {
            return;
        }
        var span = document.getElementById(spanid);

        span.style.transform = 'translateY(0px)';


    };

    const focusHandler = ()=>{
        var span = document.getElementById(spanid);

        span.style.transform = 'translateY(-30px)';

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


    const validateData = () => {
        if (validateEmail) {
            return (
                <div className='valid-container'>
                    <span className='fa fa-check-circle-o icon-valid'></span>
                    <p className='valid'>valid Email Address</p>
                </div>);
        }

        return (<p className='invalid'>* Provide a valid Email Address !</p>);
    };

    useEffect(() => {
        if (type === 'email') {
            setValidateEmail(validateEmailAddress(inputValue));
        }
    }, [ inputValue ]);


    return (
        <div className='input-email'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid} changeHandler={changeHandler} blurHandler={blurHandler} focusHandler={focusHandler} value={inputValue} validateData={validateData} ></InputCommonModule>
        </div>
    );
};

export default InputEmail;

InputEmail.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputEmail, 'inputEmail');
