import React from 'react';
import { mount } from 'enzyme';

import SearchBox from '../index';
import data from '../data/index';

describe('<SearchBox />', () => {

    const testData = data.properties;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<SearchBox {...testData}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test(`should render without error`, () => {
        expect(wrapper.find('.input-search').length).toBe(1);
    });
});
