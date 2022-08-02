import React from 'react';
import { mount } from 'enzyme';

import InputCommonModule from '../inputCommonModule';

describe('<InputCommonModule />', () => {

    test('component renders fine', () => {
        let wrapper = mount(
            <InputCommonModule
                id='test'
                holder="test"
                type="test"
                spanid="test"
            />
        );

        expect(wrapper.find('.input-main').length).toBe(1);
    });
});