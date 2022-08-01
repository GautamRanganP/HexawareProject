import React from 'react';
import { mount } from 'enzyme';

import InputSearchBox from '../index';
import data from '../data/index';

describe('<InputSearchBox />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<InputSearchBox {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.input-search').length).toBe(1);
    });
});
