import React from 'react';
import { mount } from 'enzyme';

import InputEmail from '../index';
import data from '../data/index';

describe('<InputEmail />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<InputEmail {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.input-email').length).toBe(1);
    });
});
