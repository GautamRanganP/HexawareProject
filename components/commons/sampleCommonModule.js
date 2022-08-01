'use strict';

import React from 'react';

import './styles/sampleCommonModule.css';

const SampleCommonModule = (props) => {

    const {
        title
    } = props;

    return (
        <div className='sample-common-module'>
            <h1>{ title }</h1>
        </div>
    );

};

export default SampleCommonModule;