import React from 'react';
import { mount } from 'enzyme';

import InputBox from '../inputBox';

describe('<InputBox />', () => {

    test('component renders fine', () => {
        let wrapper = mount(
            <InputBox
                type='text'
                className="test"
                placeholder="test"
                value="test"
            />
        );

        // expect(wrapper.find('.inputBox').length).toBe(1);
    });
});