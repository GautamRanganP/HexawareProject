import React from 'react';
import { mount } from 'enzyme';

import InputComment from '../index';
import data from '../data/index';

describe('<InputComment />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<InputComment {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.input-comment').length).toBe(1);
    });
});
