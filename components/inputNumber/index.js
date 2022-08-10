import React from 'react';
import renderReact from '../../library/js/utils/renderReact';


import PropTypes from 'prop-types';

import './styles/index.css';
import InputCommonModule from '../commons/inputCommonModule';
import { useState } from 'react';


const InputNumber = ( props ) => {
    const { id, type, placeholder, spanid } = props;


    const [ inputValue, setInputValue ] = useState('');

    const changeHandler = (e)=>{
        setInputValue(e.target.value);
    };

    // useEffect(()=>{
    //     var span = document.getElementById(spanid);

    //     console.log('span:', span);
    //     span.classList.remove('span-main');
    //     span.classList.add('span-number');

    // }, []);

    return (
        <div className='input-number'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid} changeHandler={changeHandler} value={inputValue}></InputCommonModule>
        </div>
    );

};

export default InputNumber;

InputNumber.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    spanid: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputNumber, 'inputNumber');
