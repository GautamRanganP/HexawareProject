import React from 'react';
import renderReact from '../../library/js/utils/renderReact';
import PropTypes from 'prop-types';
import './styles/index.css';


const SearchBox = (props) => {

    const {
        placeholder, onChange, value
    } = props;

    const { type } = props;


    return (
        <div className='input-search'>
            <input placeholder={placeholder} type={type} onChange={onChange} value={value}></input>
            <button className='fa fa-search btn-search'></button>
        </div>
    );
};

export default SearchBox;

SearchBox.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(SearchBox, 'searchBox');
