'use strict';

import React from 'react';

import './styles/inputBox.css';

const InputBox = (props) => {

    const {
        placeholder
    } = props;
    const { changeHandler } = props;

    const { type, value, className } = props;


    return (
        <input placeholder={placeholder} className={className} type={type} onChange={changeHandler} value={value}></input>
    );

};

export default InputBox;