import React, { useState, useEffect } from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputBox from '../commons/inputBox';

import PropTypes from 'prop-types';

import './styles/index.css';


const InputComment = ( props ) => {

    const [ inputValue, setInputValue ] = useState('');


    const changeEvent = (event) => {
        setInputValue(event.target.value);
    };


    const getValue = () => {
        var placeholder = document.querySelector('.placeholder-comment');

        if (inputValue !== '') {
            if (placeholder.hasAttribute('class', 'active-comment')) {
                placeholder.classList.add('active-comment');
            }
        }
        else {
            if (placeholder.hasAttribute('class', 'active-comment')) {
                placeholder.classList.remove('active-comment');
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
        <div className='input-comment'>
            <label htmlFor='comment' className='label-comment'>
                <InputBox type={type} id='comment' changeHandler={changeEvent} value={inputValue} />
                <span className='placeholder-comment'>Add a Comment</span>
            </label>
        </div>
    );
};

export default InputComment;

InputComment.propTypes = {
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputComment, 'inputComment');
