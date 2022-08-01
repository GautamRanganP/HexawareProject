import React from 'react';
import renderReact from '../../library/js/utils/renderReact';
import SampleCommonModule from '../commons/sampleCommonModule';

import PropTypes from 'prop-types';

import './styles/index.css';

const HelloWorld = ( props ) => {

    const {
        title
    } = props;

    console.log(title);

    return (
        <div className='hello-world'>
            <SampleCommonModule title={title} />
        </div>
    );
};

export default HelloWorld;

HelloWorld.propTypes = {
    title: PropTypes.string.isRequired
};

typeof renderReact === 'function' && renderReact(HelloWorld, 'helloWorld');
