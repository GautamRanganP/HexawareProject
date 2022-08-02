import React from 'react';
import { mount } from 'enzyme';

import data from '../data/index';
import InputPassword from '../index';

describe('<InputPassword />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<InputPassword {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.input-password').length).toBe(1);
    });
});
