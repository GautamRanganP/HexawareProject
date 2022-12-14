import React from 'react';
import { mount } from 'enzyme';

import data from '../data/index';
import InputUsername from '../index';

describe('<InputUsername />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<InputUsername {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.input-username').length).toBe(1);
    });
});
