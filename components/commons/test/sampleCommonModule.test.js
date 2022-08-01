import React from 'react';
import { mount } from 'enzyme';

import SampleCommonModule from '../sampleCommonModule';

describe('<SampleCommonModule />', () => {

    test('component renders fine', () => {
        let wrapper = mount(
            <SampleCommonModule
                title='test'
            />
        );

        expect(wrapper.find('.sample-common-module').length).toBe(1);
    });
});