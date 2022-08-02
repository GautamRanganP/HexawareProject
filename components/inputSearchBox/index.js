import React from 'react';
import renderReact from '../../library/js/utils/renderReact';
import PropTypes from 'prop-types';
import './styles/index.css';


const InputSearchBox = (props) => {

    const {
        placeholder
    } = props;

    const { type } = props;

    console.log(type);
    console.log(placeholder);

    return (
        <div className='input-search'>
            <input placeholder={placeholder} type={type}></input>
            <button className='fa fa-search btn-search'></button>
        </div>
    );
};

export default InputSearchBox;

InputSearchBox.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputSearchBox, 'inputSearchBox');
