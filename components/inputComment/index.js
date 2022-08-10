import React, { useState } from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputCommonModule from '../commons/inputCommonModule';
import PropTypes from 'prop-types';
import './styles/index.css';

const InputComment = ( props ) => {

    const [ inputValue, setInputValue ] = useState('');
    const { type, id, placeholder, spanid } = props;

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
        <div className='input-comment'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid} changeHandler={changeHandler} value={inputValue} blurHandler={blurHandler} focusHandler={focusHandler}></InputCommonModule>
        </div>
    );
};


export default InputComment;

InputComment.propTypes = {
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputComment, 'inputComment');
