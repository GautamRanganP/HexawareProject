'use strict';

import React from 'react';

import './styles/inputCommonModule.css';

const InputCommonModule = (props) => {
    const { id, type, holder, spanid, changeHandler, value, validateData, blurHandler, focusHandler } = props;


    return (
        <div className='input-main'>
            <label htmlFor={id} className='label-main'>
                <input type={type} id={id} onBlur={blurHandler} onFocus={focusHandler} onChange={changeHandler}  value={value}></input>
                <span className='span-main' id={spanid}>{holder}</span>
                {type === 'email' && value !== '' && validateData()}
            </label>
        </div>
    );

};

export default InputCommonModule;