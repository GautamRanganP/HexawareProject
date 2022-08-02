import React from 'react';
import { mount } from 'enzyme';

import SearchBar from '../index';
import data from '../data/index';

describe('<SearchBox />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<SearchBar {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.input-search').length).toBe(1);
    });
});
