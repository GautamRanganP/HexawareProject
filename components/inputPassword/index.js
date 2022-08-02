import React from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputCommonModule from '../commons/inputCommonModule';

import PropTypes from 'prop-types';

import './styles/index.css';


const InputPassword = (props) => {


    // const [ inputValue, setInputValue ] = useState('');


    // const changeEvent = (event) => {
    //     setInputValue(event.target.value);
    // };


    // const getValue = () => {
    //     var placeholder = document.querySelector('.placeholder-password');

    //     if (inputValue !== '') {
    //         if (placeholder.hasAttribute('class', 'active')) {
    //             placeholder.classList.add('active');
    //         }
    //     }
    //     else {
    //         if (placeholder.hasAttribute('class', 'active')) {
    //             placeholder.classList.remove('active');
    //         }
    //     }

    //     console.log(placeholder);
    // };

    // useEffect(() => {
    //     getValue();

    // }, [ inputValue ]);


    // const { type } = props;
    const { id, type, placeholder, spanid } = props;


    return (
        <div className='input-password'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid}></InputCommonModule>
        </div>
    );
};

export default InputPassword;

InputPassword.propTypes = {
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputPassword, 'inputPassword');
