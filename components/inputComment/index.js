import React from 'react';
import renderReact from '../../library/js/utils/renderReact';
import InputCommonModule from '../commons/inputCommonModule';
import PropTypes from 'prop-types';
import './styles/index.css';

const InputComment = ( props ) => {

    const { type, id, placeholder, spanid } = props;


    return (
        <div className='input-comment'>
            <InputCommonModule type={type} id={id} holder={placeholder} spanid={spanid}></InputCommonModule>
        </div>
    );
};

export default InputComment;

InputComment.propTypes = {
    type: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(InputComment, 'inputComment');
