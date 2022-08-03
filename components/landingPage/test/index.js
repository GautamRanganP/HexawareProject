import React from 'react';
import { mount } from 'enzyme';

import LandingPage from '../index';
import data from '../data/index';

describe('<LandingPage />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<LandingPage {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.landing-page').length).toBe(1);
    });
});
