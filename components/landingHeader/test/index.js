import React from 'react';
import { mount } from 'enzyme';

import LandingHeader from '../index';
import data from '../data/index';

describe('<LandingHeader />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<LandingHeader {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.landing-header').length).toBe(1);
    });
});
