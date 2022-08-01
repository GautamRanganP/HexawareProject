import React from 'react';
import { mount } from 'enzyme';

import HelloWorld from '../index';
import data from '../data/index';

describe('<HelloWorld />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<HelloWorld {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.hello-world').length).toBe(1);
    });
});
