import React from 'react';
import { mount } from 'enzyme';

import InputNumber from '../index';
import data from '../data/index';

describe('<InputNumber />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<InputNumber {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.input-number').length).toBe(1);
    });
});
